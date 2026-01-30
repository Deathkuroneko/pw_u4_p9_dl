<template>
    <div class="card-container danger-border">
        <h3>🗑️ Eliminar Estudiante</h3>
        <div class="input-group">
        <input type="number" v-model="id" placeholder="ID del estudiante a borrar" />
        <button class="btn-delete" @click="confirmarEliminar">Eliminar Permanentemente</button>
        </div>
    </div>
</template>

<script>
import { eliminarFacade } from '@/clients/MatriculaClient.js'
export default {
    data() { return { id: null } },
    methods: {
        async confirmarEliminar() {
            if (!this.id) return;
            if (confirm(`¿Está seguro de eliminar al ID ${this.id}?`)) {
                try {
                    await eliminarFacade(this.id);
                    alert("Estudiante eliminado");
                    this.id = null;
                } catch (error) { alert("Error al eliminar"); }
            }
        }
    }
}
</script>

<style scoped>
.danger-border { border-top: 5px solid #ff4d4d; }
.btn-delete { background-color: #ff4d4d; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.btn-delete:hover { background-color: #cc0000; }
.card-container { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); max-width: 400px; margin: 20px auto; }
input { padding: 10px; border: 1px solid #ddd; border-radius: 4px; width: 60%; margin-right: 10px; }
</style>