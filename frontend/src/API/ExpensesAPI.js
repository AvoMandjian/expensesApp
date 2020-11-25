import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/';

function getUserId(email) {
    return axios.get(
        baseUrl + 'user/' + email,
    )
}
function getAllExpenses(email) {
    return axios.get(
        baseUrl + 'expenses/' + email,
    );
}
async function getOneExpense(id) {
    return await axios.get(
        baseUrl + 'expenses/showUserExpenses/' + id,
    );
}

function deleteExpense($id) {
    return axios.delete(
        baseUrl + 'expenses/' + $id,
    );
}

async function addExpense(name, amount, category, user_id) {
    return await axios.post(
        baseUrl + 'expenses?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category,
    );
}

async function editExpense(expenses_id, name, amount, category, user_id) {
    // console.log(user_id)
    return await axios.put(
        baseUrl + 'expenses/' + expenses_id + '?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category,
    );
}



export {
    getAllExpenses,
    getOneExpense,
    deleteExpense,
    addExpense,
    editExpense,
    getUserId
}