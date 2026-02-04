import axios from "axios";
import http from "./http";

// LOGIN
// MatriculaClient.js
export const login = async (username, password) => {
    // Cambiamos a POST para enviar las credenciales en el cuerpo (body)
    const res = await axios.post('http://localhost:8082/auth/login', {
        username: username,
        password: password
    });
    localStorage.setItem('token', res.data.accessToken);
    return res.data;
};

const consultar = async () => {
    const res = await http.get('/estudiantes');
    return res.data;
};

export const consultarPorLink = async (url) => {
    const res = await axios.get(url, {
        headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return res.data;
};

const consultaPorId = async (id) => {
    // Usamos las comillas inclinadas para concatenar el ID
    const res = await http.get(`/estudiantes/${id}`);
    return res.data;
};


// 3. Guardar (Cambiado axios por http)
const guardar = async (body) => {
    const res = await http.post('/estudiantes', body);
    console.log("Guardado:", res.data);
    return res.data;
}

// 4. Actualizar (Cambiado axios por http)
const actualizar = async (id, body) => {
    const res = await http.put(`/estudiantes/${id}`, body);
    console.log("Actualizado:", res.data);
    return res.data;    
}

// 5. Actualización Parcial (Cambiado axios por http)
const actualizacionParcial = async (id, body) => {
    const res = await http.patch(`/estudiantes/${id}`, body);
    console.log("Parcial:", res.data); 
    return res.data;    
}

// 6. Eliminar (Cambiado axios por http)
const eliminar = async (id) => {
    const res = await http.delete(`/estudiantes/${id}`);
    console.log("Eliminado ID:", id);
    return res.data;
}


// FACADEs

export const consultarFacade = async () => {
    return await consultar();
}

export const consultaPorIdFacade = async (id) => {
    return await consultaPorId(id);
}

export const guardarFacade = async (body) => {
    return await guardar(body);
}

export const actualizarFacade = async (id, body) => {
    return await actualizar(id, body);    
}

export const actualizacionParcialFacade = async (id, body) => {
    return await actualizacionParcial(id, body);    
}

export const eliminarFacade =  async (id) => {
    await eliminar(id);
}

export const borrarFacade = ()  => {
    
}