import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.NODE_ENV == "production" ? "": 'https://localhost:8443',
    timeout: 2000,
    withCredentials: true,
});

export class AuthAPI {

    static errorHandler(e) {
        console.error("AUTH API ERROR");
        console.error(e);
        throw e;
    }

    static loggedin(){
        return instance.get('/auth/loggedin')
        .then((res) => res.data.user)
        .catch(AuthAPI.errorHandler)
    }

    static login(username, password){
        return instance.post('/auth/login',{username, password})
        .then((res) => res.data)
        .catch(AuthAPI.errorHandler)
    }

    static signup(username, password, mail, description, selectedOptionDeveloper, selectedOptionSysAdmin){
        return instance.post('/auth/signup',{username, password, mail, description, selectedOptionDeveloper, selectedOptionSysAdmin})
        .then((res) => res.data.user)
        .catch(AuthAPI.errorHandler)
    }

    // static upload(file){
    //     return instance
    //     .post("/auth/image", file, {
    //       headers: { "Content-Type": "multipart/form-data" }
    //     })
    //     .then(res => res)
    //     .catch(AuthAPI.errorHandler);
    // }

    static logout(){
        return instance.get('/auth/logout')
        .then((res) => console.log("Logout" + res))
        .catch(AuthAPI.errorHandler)
    }
}