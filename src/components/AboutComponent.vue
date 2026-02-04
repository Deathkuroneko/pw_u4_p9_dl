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
                    <th>hijos</th>
                </tr>
            </thead>
            <tbody>
            <template v-for="est in estudiante" :key="est.id">

                <!-- fila estudiante -->
                <tr>
                <td><strong>{{ est.id }}</strong></td>
                <td>{{ est.nombre }} {{ est.apellido }}</td>
                <td>{{ est.fechaNacimiento }}</td>
                <td>{{ est.genero }}</td>
                <td>{{ est.provincia }}</td>
                <td>
                    <button @click="verHijos(est)" class="btn-hijos">
                    Ver hijos
                    </button>
                </td>
                </tr>

                <!-- filas hijos -->
                <template v-if="est.hijos">
                    <tr v-for="h in est.hijos" :key="h.id">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> {{ h.nombre }} {{ h.apellido }}</td>
                    </tr>
                </template>

            </template>
            </tbody>

            
        </table>
        
        </div>

        <p v-else class="empty-msg">
        No hay estudiantes cargados
        </p>
    </div>
</template>

<script>
import { consultarFacade, consultarPorLink, login } from '@/clients/MatriculaClient.js';

export default {
  data() {
    return {
      estudiante: []
    };
  },

  methods: {
    async consultar() {
      this.estudiante = await consultarFacade();
    },

    async verHijos(est) {
      const linkHijos = est.links.find(l => l.rel === 'hijosSelf');

      try {
        const data = await consultarPorLink(linkHijos.href);
        est.hijos = data;
      } catch (error) {
        console.error("ERROR AL CARGAR HIJOS:", error);
      }
    }
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