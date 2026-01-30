<template>
    <div class="form-container">
        <h3>🛠️ Edición por Parámetros</h3>
        
        <div class="form-group">
        <label>ID Estudiante:</label>
        <input type="number" v-model="id" />
        </div>

        <div class="patch-row">
        <input type="checkbox" v-model="activar.nombre" />
        <input type="text" v-model="form.nombre" :disabled="!activar.nombre" placeholder="Cambiar Nombre" />
        </div>

        <div class="patch-row">
        <input type="checkbox" v-model="activar.apellido" />
        <input type="text" v-model="form.apellido" :disabled="!activar.apellido" placeholder="Cambiar Apellido" />
        </div>

        <div class="patch-row">
        <input type="checkbox" v-model="activar.genero" />
        <select v-model="form.genero" :disabled="!activar.genero">
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
        </select>
        </div>

        <button class="btn-patch" @click="procesarPatch">Aplicar Cambios Seleccionados</button>
    </div>
</template>

<script>
import { actualizacionParcialFacade } from '@/clients/MatriculaClient.js'

export default {
    data() {
        return {
        id: null,
        activar: {
            nombre: false,
            apellido: false,
            genero: false
        },
        form: {
            nombre: '',
            apellido: '',
            genero: ''
        }
        }
    },
    methods: {
        async procesarPatch() {
        if (!this.id) return alert("ID requerido");

        const body = {};

        if (this.activar.nombre && this.form.nombre.trim())
            body.nombre = this.form.nombre;

        if (this.activar.apellido && this.form.apellido.trim())
            body.apellido = this.form.apellido;

        if (this.activar.genero && this.form.genero)
            body.genero = this.form.genero;

        if (Object.keys(body).length === 0)
            return alert("Marca al menos un campo válido para cambiar");

        try {
            await actualizacionParcialFacade(this.id, body);
            alert("Campos actualizados correctamente");

            // limpiar
            this.form = { nombre: '', apellido: '', genero: '' };
            this.activar = { nombre: false, apellido: false, genero: false };
            this.id = null;

        } catch (error) {
            alert("Error en la actualización parcial");
            console.error(error);
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

.patch-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
}
.btn-patch { width: 100%; padding: 10px; background-color: #e67e22; color: white; border: none; border-radius: 5px; cursor: pointer; }
input:disabled, select:disabled { background-color: #eee; cursor: not-allowed; }
</style>