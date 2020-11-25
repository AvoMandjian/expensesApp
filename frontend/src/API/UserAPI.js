import axios from 'axios';



const baseUrl = 'http://localhost:8000/api/';
async function checkCredentials(email, password) {

    var bodyFormData = new FormData();
    bodyFormData.append('email', email);
    bodyFormData.append('password', password);
    return await axios.post(
        baseUrl + 'login',
        bodyFormData,
    );
}

async function signUp() {
    var bodyFormData = new FormData();
    bodyFormData.append('email', 'avo@gmail.com');
    bodyFormData.append('password', 'avoavoavo');
    return await axios.post({
        url: baseUrl + 'login',
        data: bodyFormData,
    });
}




export {
    checkCredentials,
    signUp,

}