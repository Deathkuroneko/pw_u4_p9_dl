<template>
    <div class="list-container">
        <button class="btn-primary" @click="consultar">
        🔄 Cargar Lista de Estudiantes
        </button>

        <div class="table-wrapper" v-if="estudiante.length > 0">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>F. Nacimiento</th>
                <th>Género</th>
                <th>Provincia</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="est in estudiante" :key="est.id">
                <td><strong>{{ est.id }}</strong></td>
                <td>{{ est.nombre }} {{ est.apellido }}</td>
                <td>{{ est.FechaNacimiento }}</td>
                <td>{{ est.genero }}</td>
                <td>{{ est.provincia }}</td>
            </tr>
            </tbody>
        </table>
        </div>

        <p v-else class="empty-msg">
        No hay estudiantes cargados
        </p>
    </div>
</template>

<script>
import { consultarFacade } from '@/clients/MatriculaClient.js';

export default {

    data() {
        return {
        estudiante: []
        };
    },

    methods: {
        async consultar() {
        try {
            this.estudiante = await consultarFacade();
            console.log(this.estudiante);
        } catch (error) {
            console.error('Error al cargar estudiantes:', error);
        }
        },
    }
};
</script>

<style scoped>
.btn-primary { background-color: #42b983; color: white; border: none; padding: 12px 24px; border-radius: 5px; cursor: pointer; margin-bottom: 20px; }
.table-wrapper { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; }
th { background-color: #2c3e50; color: white; padding: 12px; text-align: left; }
td { padding: 12px; border-bottom: 1px solid #eee; text-align: left; }
tr:nth-child(even) { background-color: #f8f9fa; }
tr:hover { background-color: #f1f1f1; }
</style>