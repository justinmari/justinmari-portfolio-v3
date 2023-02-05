import axios from "axios";

const axiosService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export default axiosService;