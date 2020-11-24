import React from 'react';

export default function OneExpense(props) {
    return (
        <div>
            <table className="table table-bordered">

                <tbody>
                    <tr className="thead-dark">


                        <th >Name</th>
                        <th>Amount</th>
                        <th>Category</th>


                    </tr>
                    <tr key={props.expenses_id} >
                        <td> {props.name}</td>
                        <td> {props.amount}</td>
                        <td>{props.category_name}</td>
                    </tr>
                </tbody>
            </table>

        </div >
    );

}

