import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "C:/wamp64/www/ExpensesApp/frontend/src/index.css";
import { addExpense } from '../API/ExpensesAPI';
import { getAllCategory } from '../API/CategoryAPI';

export default function AddForm(props) {
    const [expenseName, setexpenseName] = useState("");
    const [expenseAmount, setAmount] = useState('');
    const [categoryId, setCategory] = useState('');

    const [data, setData] = useState([]);

    const allCategories = async () => {
        const result = await getAllCategory();
        setData(result.data);
    }
    useEffect(() => {
        allCategories();
    }, []);


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
                    {data.map(item => (
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
            </Form>

        </div >
    );
}