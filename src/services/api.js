import axios from "axios";

const apiClient = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL,http;
    baseURL: "http://localhost:8080/dynamodb",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;

