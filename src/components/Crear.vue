<template>
  <div class="form-container">
    <h3>📝 Registrar Nuevo Estudiante</h3>
    
    <div class="form-group">
      <label>Nombre:</label>
      <input type="text" v-model="estudiante.nombre" placeholder="Ej: Dylan" />
    </div>

    <div class="form-group">
      <label>Apellido:</label>
      <input type="text" v-model="estudiante.apellido" placeholder="Ej: Lema" />
    </div>

    <div class="form-group">
      <label>Fecha de Nacimiento:</label>
      <input type="date" v-model="estudiante.fechaNacimiento" />
    </div>

    <div class="form-group">
      <label>Género:</label>
      <select v-model="estudiante.genero">
        <option value="">Seleccione...</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
      </select>
    </div>

    <div class="form-group">
      <label>Provincia:</label>
      <input type="text" v-model="estudiante.provincia" placeholder="Ej: Pichincha" />
    </div>

    <button class="btn-guardar" @click="guardar">💾 Guardar Estudiante</button>

    <p v-if="mensaje" :class="{'success': exito, 'error': !exito}">
      {{ mensaje }}
    </p>
  </div>
</template>

<script>
import { guardarFacade } from '@/clients/MatriculaClient.js'

export default {
  data() {
    return {
      estudiante: {
        nombre: '',
        apellido: '',
        fechaNacimiento: '', 
        provincia: '',
        genero: ''
      },
      mensaje: '',
      exito: false
    }
  },
  methods: {
    async guardar() {
      try {
        const body = {
          ...this.estudiante,
        }

        const resp = await guardarFacade(body)
        this.exito = true
        this.mensaje = `Estudiante ${resp.nombre} creado con ID: ${resp.id}`
        this.limpiarFormulario()
      } catch (error) {
        this.exito = false
        this.mensaje = "Error al conectar con el servidor"
      }
    },
    limpiarFormulario() {
      this.estudiante = { nombre: '', apellido: '', fechaNacimiento: '', genero: '', provincia: '' }
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
</style>