import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/';
async function getAllCategory() {
    return await axios.get(
        baseUrl + 'categories',
    );
}

async function getUserCategoryWithTotal(id) {
    return await axios.get(
        baseUrl + 'categories/'+id,
    );
}


export {
    getAllCategory,
    getUserCategoryWithTotal,
}