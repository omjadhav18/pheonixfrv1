import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default apiInstance;