import axios from 'axios';


function getUserId(email) {
    return axios.get(
        'http://localhost:8000/api/user/' + email,
    )
}
function getAllExpenses(email) {
    return axios.get(
        'http://127.0.0.1:8000/api/expenses/' + email,
    );
}
async function getOneExpense(id) {
    return await axios.get(
        'http://localhost:8000/api/expenses/showUserExpenses/' + id,
    );
}

function deleteExpense($id) {
    return axios.delete(
        'http://localhost:8000/api/expenses/' + $id,
    );
}

async function addExpense(name, amount, category, user_id) {
    return await axios.post(
        'http://127.0.0.1:8000/api/expenses?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category,
    );
}

async function editExpense(expenses_id, name, amount, category, user_id) {
    // console.log(user_id)
    return await axios.put(
        'http://127.0.0.1:8000/api/expenses/' + expenses_id + '?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category,
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