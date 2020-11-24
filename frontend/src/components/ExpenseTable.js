import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllExpenses, deleteExpense, getUserId } from './API/ExpensesAPI';
import AddForm from './Pages/addForm';
import EditForm from './Pages/editForm';



export default function ExpenseTable(props) {

    const [data, setData] = useState([]);
    const [user_id, setUserId] = useState('');

    const allExpenses = async () => {
        const result = await getAllExpenses(props.userEmail);
        setData(result.data);
    }
    const userId = async () => {
        const userId = await getUserId(props.userEmail);
        setUserId(userId.data);
    }
    useEffect(() => {
        allExpenses();
        userId();

    }, []);

    async function handleDelete(id) {

        await deleteExpense(id);
        window.location.reload();
    }
    function handleAdd() {

        ReactDOM.render(
            <React.StrictMode>
                <AddForm user_id={user_id[0].id} />
            </React.StrictMode>,
            document.getElementById('root')
        );

    }
    function handleEdit(category_name, expenses_id, name, amount, category_id) {

        ReactDOM.render(
            <React.StrictMode>
                <EditForm user_id={user_id[0].id} category_name={category_name} expenses_id={expenses_id} name={name} amount={amount} category_id={category_id} />
            </React.StrictMode>,
            document.getElementById('root')
        );

    }
    return (

        <div>
            <table className="table table-bordered">

                <tbody>
                    <tr className="thead-dark">
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date Added</th>
                        <th>Action</th>
                    </tr>

                    {data.map(item => (
                        <tr key={item.id} >
                            <td> {item.name}</td>
                            <td> {item.amount}</td>
                            <td>{item.category_name}</td>
                            <td>{item.created_at}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)} className='btn btn-danger m-1'>DELETE</button>
                                <button onClick={() => handleEdit(item.category_name, item.id, item.name, item.amount, item.category_id)} className='btn btn-secondary m-1'>EDIT</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handleAdd()} className='btn btn-secondary m-3' >Add</button>
        </div >
    );

}

