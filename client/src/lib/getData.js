import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "": 'https://localhost:8443',
    timeout: 3000,
    withCredentials: true,
});

export class GetData{

    static errorHandler(e) {
        console.error("GETDATA API ERROR");
        console.error(e);
        throw e;
    }

    static users(filter='playa'){
        return instance.post('/data/users', {filter})
        .then((res) => res.data)
        .catch(GetData.errorHandler)
    }

    static allusers(){
        return instance.post('/data/allusers')
        .then((res) => res.data)
        .catch(GetData.errorHandler)
    }
    static user(id){
        return instance.post('data/user/:id', {id})
        .then((res) => res)
        .catch(GetData.errorHandler) 
    }

    static newclase(date, description){
        return instance.post('/data/newclase', {date, description})
        .then((res) => {
            console.log('la clase se ha creado bien' + res.data)
        })
        .catch('error en getdata newclase '+ GetData.errorHandler)
    }

    
}