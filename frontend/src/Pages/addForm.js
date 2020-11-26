import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addExpense } from '../API/ExpensesAPI';

export default function AddForm(props) {
    const [expenseName, setexpenseName] = useState("");
    const [expenseAmount, setAmount] = useState('');
    const [categoryId, setCategory] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        await addExpense(expenseName, expenseAmount, categoryId, props.user_id);
        window.location.reload();

    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId='expenseName' >
                    <Form.Control
                        placeholder="Expense name"
                        value={expenseName}
                        onChange={(e) => setexpenseName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="expenseAmount">
                    <Form.Control
                        placeholder='Amount'
                        type="number"
                        value={expenseAmount}
                        onChange={(e) => setAmount(e.target.value)}

                    />
                </Form.Group>
                <Form.Group size="lg" controlId="expenseAmount">
                    <Form.Label as="legend" column>
                        Select a category:
                    </Form.Label>
                    {props.categoryData.map(item => (
                        <Form.Check
                            name="radio"
                            key={item.id}
                            type="radio"
                            label={item.name}
                            value={item.id}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    ))}
                </Form.Group>
                <Button block size="lg" type="submit">
                    Submit
                </Button>
                <Form className='mt-3'>
                    <Button block size="lg" type="submit" >
                        Back
                </Button>
                </Form>
            </Form>

        </div >
    );
}