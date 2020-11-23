import axios from 'axios';


function getAllCategory() {
    return axios.get(
        'http://127.0.0.1:8000/api/categories',
    );
}


export {
    getAllCategory,
}