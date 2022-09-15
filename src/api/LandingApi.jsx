import axios from "axios";

const baseURL = 'http://localhost:3000';

const landingApi = axios.create({baseURL})

export default landingApi
