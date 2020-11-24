import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "C:/wamp64/www/ExpensesApp/frontend/src/index.css";
import { editExpense } from '../API/ExpensesAPI';
import { getAllCategory } from '../API/CategoryAPI';
import OneExpense from "../oneExpense";

export default function EditForm(props) {
    const [expenseName, setexpenseName] = useState(props.name);
    const [expenseAmount, setAmount] = useState(props.amount);
    const [categoryId, setCategory] = useState(props.categoryId);

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
        await editExpense(props.expenses_id, expenseName, expenseAmount, categoryId, props.user_id);
        window.location.reload();

    }


    return (
        <div className="Login">
            <OneExpense name={props.name} amount={props.amount} category_name={props.category_name} expenses_id={props.expenses_id} />
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
                        < Form.Check
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