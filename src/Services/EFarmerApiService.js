import axios from "axios"

const BASE_URL='http://localhost:8080';

export function addCrop(id,cropToSell)
{
    console.log("Inside AXIOS");
    console.log();
    return axios.post(`${BASE_URL}/addCrop/${id}`,cropToSell);
}

export function getAllCropList(id)
{
    return axios.get(`${BASE_URL}/getAllCropList/${id}`);
}