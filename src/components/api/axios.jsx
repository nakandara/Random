import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";

export const axiosPrivate = axios.create({
    baseURL:BASE_URL,
    headers:{'Content-type':'application/json'},
    withCredentials:true
});