import axios from 'axios';

const api= axios.create({
    baseURL: "https://realestateapis.onrender.com",
    headers:{
        'Content-Type': 'application/json'
    }
});
export default api;c