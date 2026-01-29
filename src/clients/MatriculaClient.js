import axios from "axios";

const consultar = () => {
    const data = axios.get('http://localhost:7890/matricula/api/v1.0/estudiantes').then(r => r.data);
    return data;
}

