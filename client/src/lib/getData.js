import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://localhost:8443',
    timeout: 2000,
    withCredentials: true,
});

export class GetData{

    static errorHandler(e) {
        console.error("GETDATA API ERROR");
        console.error(e);
        throw e;
    }

    static users(s){
        console.log('Por lo menos aqui llega')
        return instance.get('/data/filters', s)
        .then((res) => console.log('esto es el then'))//res.data)
        .catch(GetData.errorHandler)
    }

    
}