<template>
  <div>
    <h3>Crear Estudiante</h3>

    <input type="text" v-model="nombre" placeholder="Nombre" />
    <input type="text" v-model="apellido" placeholder="Apellido" />
    <input type="date" v-model="fechaNacimiento" placeholder="Fecha de Nacimiento" />
    <input type="text" v-model="genero" placeholder="Género" />
    <input type="text" v-model="provincia" placeholder="Provincia" />

    <button @click="guardar">Crear</button>

    <p v-if="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
import { guardarFacade } from '../clients/matriculaClient.js'
export default{
    data() {
        return {
            nombre: '',
            apellido: '',
            fechaNacimiento: '',
            genero: '',
            provincia: '',
            mensaje: '' // para mostrar éxito o error
        }
    },

    methods: {
  async guardar() {
    // Creamos el objeto a enviar
    const body = {
      nombre: this.nombre,
      apellido: this.apellido,
      fechaNacimiento: this.fechaNacimiento,
      genero: this.genero,
      provincia: this.provincia
    }

    try {
      const resp = await guardarFacade(body)
      console.log("Estudiante creado:", resp)
      this.mensaje = `Estudiante ${resp.nombre} ${resp.apellido} creado correctamente!`

      // Limpiar inputs
      this.nombre = ''
      this.apellido = ''
      this.fechaNacimiento = ''
      this.genero = ''
      this.provincia = ''

    } catch (error) {
      console.error("Error al crear estudiante:", error)
      this.mensaje = "Error al crear estudiante. Ver consola."
    }
  }
}


}



</script>
