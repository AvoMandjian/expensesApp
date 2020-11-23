import React, { useState, useEffect } from 'react';
import { getOneExpense } from './ExpensesAPI'


export default function OneExpense() {
    const [data, setData] = useState([])

    const oneExpense = async () => {
        const result = await getOneExpense();
        setData(result.data);
    }
    useEffect(() => {
        oneExpense();
    }, []);
    return (
        <div>
            <table className="table table-bordered">

                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                    <tr key={data.id} >
                        <td> {data.name}</td>
                        <td> {data.amount}</td>
                    </tr>
                </tbody>
            </table>

        </div >
    );

}

