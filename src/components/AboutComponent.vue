<template>
    <button @click="consultar">consultar</button>
    <table>
        <ul>
            <li v-for="(est, index) in estudiante" :key="index">
                {{ est.nombre }} {{ est.apellido }}
            </li>
        </ul>
    </table>

    <button @click="guardar">crear</button>
    <button @click="actualizar">actualizar</button>
    <button @click="actualizacionParcial">actualizar parcial</button>
    <button @click="eliminar">eliminar</button>
</template>

<script>
import {
    actualizacionParcialFacade,
    consultarFacade,
    actualizarFacade,
    guardarFacade,
    eliminarFacade,
    consultarPorIdFacade
} from '../clients/matriculaClient.js'

export default {

    data(){
        return{
            nombre: '',
            apellido: '',
            estudiante: []
        }
    },

    methods:{
        async consultar(){
            const resp= await consultarFacade();
                
                console.log("Respuesta final");
                console.log(resp);
                console.log(resp.nombre, resp.apellido);
                this.estudiante = resp;
        },

        async actualizar(){
            const resp= await actualizarFacade();
                
                console.log("Respuesta final");
                console.log(resp);
                console.log(resp.nombre, resp.apellido);
                this.nombre = resp.nombre;
                this.apellido = resp.apellido;
        },

        async consultarPorId(){
            const resp= await consultarPorIdFacade();
                
                console.log("Respuesta final");
                console.log(resp);
                console.log(resp.nombre, resp.apellido);
                this.nombre = resp.nombre;
                this.apellido = resp.apellido;
        },

        async guardar(){
            const resp= await guardarFacade();
                
                console.log("Respuesta final");
                console.log(resp);
                console.log(resp.nombre, resp.apellido);
                this.nombre = resp.nombre;
                this.apellido = resp.apellido;
        },

        async eliminar(){
            const resp= await eliminarFacade();
                
                console.log("Respuesta final");
                console.log(resp);
                console.log(resp.nombre, resp.apellido);
                this.nombre = resp.nombre;
                this.apellido = resp.apellido;
        },

        async actualizacionParcial(){
            const resp= await actualizacionParcialFacade();
                
                console.log("Respuesta final");
                console.log(resp);
                console.log(resp.nombre, resp.apellido);
                this.nombre = resp.nombre;
                this.apellido = resp.apellido;
        },
        
    }



}
</script>

<style>

</style>