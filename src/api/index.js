import axios from "axios";

// setting base URL
axios.defaults.baseURL = 'http://localhost:3000/';
const axiosClient = axios.create();

//default axios timeout 
axiosClient.defaults.timeout = 5 * 60 * 1000;

// get employees (api call with get method)
export async function getRequest(URL) {
    return await axiosClient.get(`/${URL}`);
}

// add employees (api call with post method)
export async function postRequest(URL, payload) {
    return await axiosClient.post(`/${URL}`, payload);
}

// update employee (api call with put method)
export async function putRequest(URL, payload) {
    return await axiosClient.put(`/${URL}`, payload);
}

// delete employee (api call with delete method)
export async function deleteRequest(URL) {
    return await axiosClient.delete(`/${URL}`);
}
