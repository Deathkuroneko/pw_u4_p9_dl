<template>
    <div class="form-container">
        <h3>🔄 Actualización Completa</h3>
        
        <div class="form-group">
        <label>ID del Estudiante:</label>
        <input type="number" v-model="id" placeholder="ID obligatorio" />
        </div>
        <hr>
        
        <div class="form-group">
        <label>Nombre:</label>
        <input type="text" v-model="form.nombre" />
        </div>

        <div class="form-group">
        <label>Apellido:</label>
        <input type="text" v-model="form.apellido" />
        </div>

        <div class="form-group">
        <label>Provincia:</label>
        <input type="text" v-model="form.provincia" />
        </div>

        <button class="btn-update" @click="procesarActualizacion">Guardar Cambios</button>
    </div>
</template>

<script>
import { actualizarFacade } from '@/clients/MatriculaClient.js'

export default {
    data() {
        return {
        id: null,
        form: { 
            nombre: '', 
            apellido: '', 
            provincia: '',
            genero: 'Masculino' // Valor por defecto para evitar nulos si el backend es estricto
        }
        }
    },
    methods: {
        async procesarActualizacion() {
        if(!this.id) return alert("El ID es necesario");
        try {
            await actualizarFacade(this.id, this.form);
            alert("¡Datos actualizados con éxito!");
        } catch (error) {
            alert("Error al actualizar. Verifica el ID.");
        }
        }
    }
}
</script>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.form-group {
    margin-bottom: 15px;
    text-align: left;
}
.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}
input, select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.btn-guardar {
    width: 100%;
    padding: 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.success { color: green; margin-top: 10px; }
.error { color: red; margin-top: 10px; }
.btn-update { width: 100%; padding: 10px; background-color: #3498db; color: white; border: none; border-radius: 5px; cursor: pointer; }
</style>