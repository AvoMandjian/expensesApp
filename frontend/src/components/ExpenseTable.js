import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllExpenses, deleteExpense } from './API/ExpensesAPI';
import AddForm from './Pages/addForm';



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

    return (

        <div>
            <table className="table table-bordered">

                <tbody>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>

                    {data.map(item => (
                        <tr key={item.id} >
                            <td> {item.name}</td>
                            <td> {item.amount}</td>
                            <td>{item.category_name}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)} className='btn btn-danger m-1'>DELETE</button>
                                <button onClick={() => alert('edit ' + item.name + ' in the next update')} className='btn btn-secondary m-1'>EDIT</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handleAdd()} className='btn btn-secondary m-3' >Add</button>
        </div >
    );

}

