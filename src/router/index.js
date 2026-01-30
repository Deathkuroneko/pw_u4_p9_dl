import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutComponentView.vue'
import ActualizarView from '@/views/ActualizarView.vue';
import CrearView from '@/views/CrearView.vue';
import ActualizarParcialView from '@/views/ActualizarParcialView.vue';
import EliminarView from '@/views/EliminarView.vue';
import consultaPorIdView from '@/views/ConsultaPorIdView.vue';

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  { path: '/crear', component: CrearView },
  { path: '/actualizar', component: ActualizarView },
  { path: '/actualizarParcial', component: ActualizarParcialView },
  { path: '/eliminar', component: EliminarView },
  { path: '/consultarId', component: consultaPorIdView },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
