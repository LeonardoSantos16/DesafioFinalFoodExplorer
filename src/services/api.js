import axios from "axios";

export const api = axios.create({
    baseURL: 'https://food-explorer-api-mf2r.onrender.com',
    withCredentials: true,
});