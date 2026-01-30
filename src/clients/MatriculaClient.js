import axios from "axios";

const consultar = async () => {
    const data = axios.get('http://localhost:7890/matricula/api/v1.0/estudiantes').then(r => r.data);
    return data;
}

const consultaPorId = async(id) => {
    const data = axios.get(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
    return data;
}

const guardar = async(body) => {
    const data = axios.post('http://localhost:7890/matricula/api/v1.0/estudiantes', body).then(r => r.data);

    console.log(data);
    return data;
}

const actualizar = async(id, body) => {
    const data = axios.put(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);

    console.log(data);
    return data;    
}

const actualizacionParcial = async(id, body) => {
    axios.patch(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);

    console.log(data);
    return data;    
}

const eliminar = async(id) => {
    axios.delete(`http://localhost:7890/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);

}

// FACADE

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
    return await actualizacionParcial(is, body);    
}

export const eliminarFacade =  async (id) => {
    await eliminar(id);
}

export const borrarFacade = ()  => {
    
}