<template>
    <AboutComponent />
    <ConsultarPorId />
    <Crear></Crear>

</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue';
import ConsultarPorId from '@/components/ConsultarPorId.vue';
import Crear from '@/components/Crear.vue'
export default {
    components: {
        AboutComponent,
        ConsultarPorId,
        Crear,

    }

}
</script>

<style>

</style>