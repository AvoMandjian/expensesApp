import axios from 'axios';
import getCookie from '../API/getCookiesFunction';

const token = getCookie('token');

const baseUrl = 'http://localhost:8000/api/';
async function getAllCategory() {
    return await axios.get(
        baseUrl + 'categories',
        { headers: { 'Authorization': `Bearer ${token}` } }
    );
}

async function getUserCategoryWithTotal(id) {
    return await axios.get(
        baseUrl + 'categories/' + id,
        { headers: { 'Authorization': `Bearer ${token}` } }
    );
}


export {
    getAllCategory,
    getUserCategoryWithTotal,
}