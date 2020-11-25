import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "C:/wamp64/www/ExpensesApp/frontend/src/index.css";
import ReactDOM from 'react-dom';
import ExpenseTable from '../components/ExpenseTable';
import { checkCredentials } from '../API/UserAPI';
import Cookies from 'universal-cookie';



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
        const isLoggedIn = async () => {

            return checkCredentials(email, password);

        }

        isLoggedIn().then(function (response) {
            // handle success
            if (response.data.message === undefined) {
                const cookies = new Cookies();
                var token = response.data.access_token;

                cookies.set('token', { token }, { path: '/' });

                ReactDOM.render(
                    <React.StrictMode>
                        <ExpenseTable userId={response.data.user.id} />
                    </React.StrictMode>,
                    document.getElementById('root')
                );

            } else {
                alert(response.data.message);
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