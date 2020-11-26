import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getAllExpensesOfUserId, deleteExpense } from '../API/ExpensesAPI';
import { getAllCategory, getUserCategoryWithTotal } from '../API/CategoryAPI';
import AddForm from '../Pages/addForm';
import EditForm from '../Pages/editForm';
import PieChart from './PieChart';
import { Heart } from 'react-awesome-spinners';



export default function ExpenseTable(props) {

    const [data, setData] = useState([]);
    const [categoryData, setcategoryData] = useState([]);
    const [userCategoriesWithExpenses, setuserCategoriesWithExpenses] = useState([]);


    const allExpenses = async () => {
        const result = await getAllExpensesOfUserId(props.userId);

        setData(result.data);
    }


    const allCategories = async () => {
        const result = await getAllCategory();
        setcategoryData(result.data);
    }
    const userCategories = async () => {
        const result = await getUserCategoryWithTotal(props.userId);
        setuserCategoriesWithExpenses(result.data);
    }

    useEffect(() => {
        allExpenses();
        allCategories();
        userCategories();

    }, []);


    async function handleDelete(id) {

        await deleteExpense(id);
        window.location.reload();
    }
    function handleAdd() {

        ReactDOM.render(
            <React.StrictMode>
                <AddForm categoryData={categoryData} user_id={props.userId} />
            </React.StrictMode>,
            document.getElementById('root')
        );

    }
    function handleEdit(category_name, expenses_id, name, amount, category_id) {

        ReactDOM.render(
            <React.StrictMode>
                <EditForm categoryData={categoryData} user_id={props.userId} category_name={category_name} expenses_id={expenses_id} name={name} amount={amount} category_id={category_id} />
            </React.StrictMode>,
            document.getElementById('root')
        );

    }
    return (
        <div className="m-4">
            {userCategoriesWithExpenses.length === 0 ?
                <div>
                    <Heart />
                    <br></br>
                    <br></br>
                    <button onClick={() => handleAdd()} className='btn btn-secondary btn-lg m-2' >Add your first expense</button>
                </div> : <div>
                    <PieChart categoryData={userCategoriesWithExpenses} />
                    <br></br>
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
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(item.id)} className='btn btn-danger m-1'>DELETE</button>
                                        <button onClick={() => handleEdit(item.category_name, item.id, item.name, item.amount, item.category_id)} className='btn btn-secondary m-1'>EDIT</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={() => handleAdd()} className='btn btn-secondary btn-lg m-2' >Add</button>
                    <button onClick={() => {
                        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
                        window.location.reload()
                    }
                    } className='btn btn-secondary btn-lg m-2' >Log Out!</button>
                </div>
            }
        </div >
    );

}

