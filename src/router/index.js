import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutComponentView.vue'
import ActualizarView from '@/views/ActualizarView.vue';
import CrearView from '@/views/CrearView.vue';
import ActualizarParcialView from '@/views/ActualizarParcialView.vue';
import EliminarView from '@/views/EliminarView.vue';
import consultaPorIdView from '@/views/ConsultaPorIdView.vue';
import LoginView from '@/views/LoginView.vue';

// ... tus imports se mantienen igual ...

const routes = [
  { path: '/', redirect: '/login' }, // Si entran a la raíz, mándalos al login
  { path: '/login', name: 'login', component: LoginView },
  { path: '/about', name: 'about', component: AboutView },
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

// GUARD DE SEGURIDAD: No deja entrar a nada si no hay token
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
});

export default router