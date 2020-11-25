import axios from 'axios';
import getCookie from '../API/getCookiesFunction';

const token = getCookie('token');

const baseUrl = 'http://localhost:8000/api/';

function getAllExpensesOfUserId(id) {

    return axios.get
        (
            `${baseUrl}expenses/${id}`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        )
        ;
}
async function getOneExpense(id) {
    return await axios.get(
        baseUrl + 'expenses/showUserExpenses/' + id, { headers: { 'Authorization': `Bearer ${token}` } }

    );
}

function deleteExpense($id) {
    return axios.delete(
        baseUrl + 'expenses/' + $id, { headers: { 'Authorization': `Bearer ${token}` } }

    );
}

async function addExpense(name, amount, category, user_id) {
    return await axios.post(
        baseUrl + 'expenses?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category, { headers: { 'Authorization': `Bearer ${token}` } }

    );
}

async function editExpense(expenses_id, name, amount, category, user_id) {

    return await axios.put(
        baseUrl + 'expenses/' + expenses_id + '?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category, { headers: { 'Authorization': `Bearer ${token}` } }

    );
}



export {
    getAllExpensesOfUserId,
    getOneExpense,
    deleteExpense,
    addExpense,
    editExpense,

}