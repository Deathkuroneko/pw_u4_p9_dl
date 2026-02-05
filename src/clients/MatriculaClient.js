import axios from "axios";
import AuthoClient from "./AuthoClient";

// LOGIN
export const login = async (usuario, contraseña) => {
    // Cambiamos a POST para enviar las credenciales en el cuerpo (body)
    const res = await axios.post('http://localhost:8082/auth/login', {
        username: usuario,
        password: contraseña
    });
    localStorage.setItem('token', res.data.accessToken);
    return res.data;
};

const consultar = async () => {
    const res = await AuthoClient.get('/estudiantes');
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
    const res = await AuthoClient.get(`/estudiantes/${id}`);
    return res.data;
};


// 3. Guardar (Cambiado axios por http)
const guardar = async (body) => {
    const res = await AuthoClient.post('/estudiantes', body);
    console.log("Guardado:", res.data);
    return res.data;
}


// 4. Actualizar (Cambiado axios por http)
const actualizar = async (id, body) => {
    const res = await AuthoClient.put(`/estudiantes/${id}`, body);
    console.log("Actualizado:", res.data);
    return res.data;    
}

// 5. Actualización Parcial (Cambiado axios por http)
const actualizacionParcial = async (id, body) => {
    const res = await AuthoClient.patch(`/estudiantes/${id}`, body);
    console.log("Parcial:", res.data); 
    return res.data;    
}

// 6. Eliminar (Cambiado axios por http)
const eliminar = async (id) => {
    const res = await AuthoClient.delete(`/estudiantes/${id}`);
    console.log("Eliminado ID:", id);
    return res.data;
}

// METODOS DE TOKEN QUEMADO DE EJEMPLOS

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...";

const config = {
    headers: {
        'Authorization': `Bearer ${token}`
    }
};

const consultar1 = async () => {
    const data = await axios.get('http://localhost:7890/matricula/api/v1.0/estudiantes', config).then(r => r.data);
    return data;
}

const consultaPorId1 = async(id) => {
    const data = await axios.get(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`, config).then(r => r.data);
    return data;
}

const guardar1 = async(body) => {
    const data = await axios.post('http://localhost:7890/matricula/api/v1.0/estudiantes', body, config).then(r => r.data);
    console.log(data);
    return data;
}

const actualizar1 = async(id, body) => {
    const data = await axios.put(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`, body, config).then(r => r.data);
    console.log(data);
    return data;    
}

const actualizacionParcial1 = async(id, body) => {
    // Corregido: Se asigna la respuesta a 'data'
    const data = await axios.patch(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`, body, config).then(r => r.data);
    console.log(data);
    return data;    
}

const eliminar1 = async(id) => {
    // Corregido: Se agrega config y se retorna algo si es necesario
    const data = await axios.delete(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`, config).then(r => r.data);
    return data;
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