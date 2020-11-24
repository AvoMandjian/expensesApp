import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllExpenses, deleteExpense } from './API/ExpensesAPI';
import AddForm from './Pages/addForm';
import EditForm from './Pages/editForm';



export default function ExpenseTable(props) {

    const [data, setData] = useState([]);

    const allExpenses = async () => {
        const result = await getAllExpenses(props.userEmail);
        setData(result.data);
    }
    useEffect(() => {
        allExpenses();

    }, []);

    async function handleDelete(id) {

        await deleteExpense(id);
        window.location.reload();
    }
    function handleAdd() {

        ReactDOM.render(
            <React.StrictMode>
                <AddForm />
            </React.StrictMode>,
            document.getElementById('root')
        );

    }
    function handleEdit(expenses_id, name, amount, category_id) {

        ReactDOM.render(
            <React.StrictMode>
                <EditForm expenses_id={expenses_id} name={name} amount={amount} category_id={category_id} />
            </React.StrictMode>,
            document.getElementById('root')
        );

    }
    console.log(data)
    return (

        <div>
            <table className="table table-bordered">

                <tbody>
                    <tr>
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
                                <button onClick={() => handleEdit(item.id, item.name, item.amount, item.category_id)} className='btn btn-secondary m-1'>EDIT</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handleAdd()} className='btn btn-secondary m-3' >Add</button>
        </div >
    );

}

