import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "C:/wamp64/www/ExpensesApp/frontend/src/index.css";
import axios from 'axios';
import ReactDOM from 'react-dom';
import ExpenseTable from '../components/ExpenseTable';



const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}

axios.post(Helper.getUserAPI(), data, {
    headers: headers
})
    .then((response) => {
        dispatch({
            type: FOUND_USER,
            data: response.data[0]
        })
    })
    .catch((error) => {
        dispatch({
            type: ERROR_FINDING_USER
        })
    })


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    function HandleLogIn(event) {
        event.preventDefault();
        const oneExpense = async () => {

            return await axios.post("localhost:8000/api/register");
        }

        oneExpense().then(function (response) {
            // handle success
            if (response.data !== "") {
                ReactDOM.render(
                    <React.StrictMode>
                        <ExpenseTable userEmail={email} />
                    </React.StrictMode>,
                    document.getElementById('root')
                );
            } else {
                alert('not a user');
            }
        })
    }
    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()} onClick={HandleLogIn}>
                    Login
        </Button>
            </Form>

        </div>
    );
}