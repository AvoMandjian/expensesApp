import axios from 'axios';
import getCookie from '../API/getCookiesFunction';

const token = getCookie('token').token;

const baseUrl = 'http://localhost:8000/api/';

async function getAllExpensesOfUserId(id) {
    return await axios.get
        (
            `${baseUrl}expenses/${id}`,
            { headers: { 'Authorization': `Bearer ${token}` } }
        );




    // var config = {
    //     method: 'get',
    //     url: `${baseUrl}expenses/${id}`,
    //     headers: {
    //         'Authorization': `Bearer ${token}`,
    //     }
    // };
    // return await axios(config)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
}
async function getOneExpense(id) {
    return await axios.get(
        baseUrl + 'expenses/showUserExpenses/' + id,
        { headers: { 'Authorization': `Bearer ${token}` } }

    );
}

async function deleteExpense($id) {
    return await axios.delete(
        baseUrl + 'expenses/' + $id,
        { headers: { 'Authorization': `Bearer ${token}` } }

    );
}

async function addExpense(name, amount, category, user_id) {
    var config = {
        method: 'post',
        url: `${baseUrl}expenses?name=${name}&amount=${amount}&user_id=${user_id}&category_id=${category}`,
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    };
    return await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

async function editExpense(expenses_id, name, amount, category, user_id) {
    var config = {
        method: 'put',
        url: baseUrl + 'expenses/' + expenses_id + '?name=' + name + '&amount=' + amount + '&user_id=' + user_id + '&category_id=' + category,
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    };
    return await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}



export {
    getAllExpensesOfUserId,
    getOneExpense,
    deleteExpense,
    addExpense,
    editExpense,

}