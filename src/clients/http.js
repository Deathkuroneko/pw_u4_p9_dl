import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:7890/matricula/api/v1.0'
});

// Este interceptor funcionará para TODAS las peticiones que usen 'http'
http.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default http; // Exporta solo este