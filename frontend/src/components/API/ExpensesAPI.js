import axios from 'axios';


function getAllExpenses(email) {
    return axios.get(
        'http://127.0.0.1:8000/api/expenses/' + email,
    );
}
async function getOneExpense() {
    return await axios.get(
        'http://localhost:8000/api/expenses/1',
    );
}

function deleteExpense($id) {
    return axios.delete(
        'http://localhost:8000/api/expenses/' + $id,
    );
}

async function addExpense(name, amount, category) {
    return await axios.post(
        'http://127.0.0.1:8000/api/expenses?name=' + name + '&amount=' + amount + '&user_id=1&category_id=' + category,
    );
}



export {
    getAllExpenses,
    getOneExpense,
    deleteExpense,
    addExpense
}