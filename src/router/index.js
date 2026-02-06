import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutComponentView.vue'
import ActualizarView from '@/views/ActualizarView.vue';
import CrearView from '@/views/CrearView.vue';
import ActualizarParcialView from '@/views/ActualizarParcialView.vue';
import EliminarView from '@/views/EliminarView.vue';
import consultaPorIdView from '@/views/ConsultaPorIdView.vue';
// import LoginView from '@/views/LoginView.vue';
import LoginViews from '@/views/LoginViews.vue'

const routes = [
  { path: '/login', name: 'login', component: LoginViews},
  { path: '/', redirect: '/login' }, // Si entran a la raíz, mándalos al login
  //{ path: '/login', name: 'login', component: LoginView},
  { path: '/about', name: 'about', component: AboutView, meta:{ requiereAutorizacion: false, esPublica: false} },
  { path: '/crear', component: CrearView, meta:{ requiereAutorizacion: true, esPublica: false} },
  { path: '/actualizar', component: ActualizarView, meta:{ requiereAutorizacion: true, esPublica: false} },
  { path: '/actualizarParcial', component: ActualizarParcialView, meta:{ requiereAutorizacion: false, esPublica: false} },
  { path: '/eliminar', component: EliminarView, meta:{ requiereAutorizacion: true, esPublica: false} },
  { path: '/consultarId', component: consultaPorIdView, meta:{ requiereAutorizacion: false, esPublica: false} },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/*Configuracion del guardian */
router.beforeEach((to, from, next) => {
  const requiereAuth = to.meta.requiereAutorizacion;
  const token = localStorage.getItem('token');
  const estaAutenticado = localStorage.getItem('estaAutenticado') === 'true';

  if (requiereAuth && (!token || !estaAutenticado)) {
    console.log('Acceso denegado, redirigiendo a login');
    next({ name: 'login' });
  } else {
    console.log('Pase libre');
    next();
  }
});
/*
// revision de codigo 
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const estaAutenticado = localStorage.getItem('estaAutenticado') === 'true';

  if (to.name === 'login' && token && estaAutenticado) {
    return next('/');
  }

  if (to.meta.requiereAutorizacion && (!token || !estaAutenticado)) {
    return next({ name: 'login' });
  }

  next();
});
*/


/*
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
*/
export default router