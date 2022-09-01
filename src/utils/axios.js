import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://video-app-sr.herokuapp.com',
});

export default axiosInstance;