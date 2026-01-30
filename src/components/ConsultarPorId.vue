<template>
    <div class="search-container">
        <div class="search-box">
        <input type="number" v-model="id" placeholder="ID del estudiante" />
        <button @click="consultarPorId">🔍 Buscar</button>
        </div>

        <div v-if="estudiante" class="profile-card">
        <div class="profile-header">
            <h4>{{ estudiante.nombre }} {{ estudiante.apellido }}</h4>
            <span>ID: #{{ estudiante.id }}</span>
        </div>
        <div class="profile-body">
            <p><strong>📍 Provincia:</strong> {{ estudiante.provincia }}</p>
            <p><strong>🚻 Género:</strong> {{ estudiante.genero }}</p>
            <p><strong>📅 Nacimiento:</strong> {{ estudiante.FechaNacimiento }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import { consultaPorIdFacade } from '@/clients/MatriculaClient.js'
export default {
    data() { return { id: null, estudiante: null } },
    methods: {
        async consultarPorId() {
            try {
                this.estudiante = await consultaPorIdFacade(this.id);
            } catch (e) { alert("No encontrado"); }
        },
    }
}
</script>

<style scoped>
.search-container { max-width: 500px; margin: 0 auto; }
.search-box { display: flex; gap: 10px; margin-bottom: 20px; }
.profile-card { background: white; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); text-align: left; border: 1px solid #e1e1e1; }
.profile-header { background: #42b983; color: white; padding: 15px; border-radius: 12px 12px 0 0; display: flex; justify-content: space-between; align-items: center; }
.profile-body { padding: 20px; line-height: 1.6; }
.profile-body p { margin: 8px 0; border-bottom: 1px solid #f1f1f1; padding-bottom: 5px; }
</style>