import axios from "axios";

const baseURL = 'https://api-superheroes-edy.herokuapp.com';

const landingApi = axios.create({baseURL})

export default landingApi
