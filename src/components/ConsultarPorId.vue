<template>
    <div>
        <input type="number" v-model="id" placeholder="Ingrese ID" />
        <button @click="consultarPorId">consultar por id</button>

        <p v-if="estudiante">
            Nombre: {{ estudiante.nombre }} <br>
            Apellido: {{ estudiante.apellido }}
        </p>
    </div>
</template>

<script>
import { consultaPorIdFacade } from '../clients/matriculaClient.js'

export default {
    data() {
        return {
            id: null, // ID que ingresará el usuario
            estudiante: null // objeto estudiante
        }
    },

    methods: {
        async consultarPorId() {
            if (!this.id) {
                alert("Ingrese un ID válido");
                return;
            }

            try {
                const resp = await consultaPorIdFacade(this.id);

                console.log("Respuesta final:", resp);
                this.estudiante = resp; // guardamos todo el objeto
            } catch (error) {
                console.error("Error al consultar por ID:", error);
                alert("No se encontró el estudiante o hubo un error");
            }
        }
    }
}
</script>
