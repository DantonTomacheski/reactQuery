import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3333"
})

export const BASE_URL = "http://192.168.1.89:3333";

export default api