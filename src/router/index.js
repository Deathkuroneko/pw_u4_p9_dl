import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutComponentView.vue'
import ActualizarView from '@/views/ActualizarView.vue';
import CrearView from '@/views/CrearView.vue';
import ActualizarParcialView from '@/views/ActualizarParcialView.vue';
import EliminarView from '@/views/EliminarView.vue';
import consultaPorIdView from '@/views/ConsultaPorIdView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  { path: '/', redirect: '/login' }, // Si entran a la raíz, mándalos al login
  { path: '/login', name: 'login', component: LoginView, meta:{ requiereAutorizacion: false, esPublica: false} },
  { path: '/about', name: 'about', component: AboutView, meta:{ requiereAutorizacion: true, esPublica: false} },
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
  if(to.meta.requiereAutorizacion){
    /* le envio una pagina al login */
    console.log("Redirige a login")
  } else {
    /* le dejo sin validaciones*/
    console.log("Pase Libre")
    next();
  }

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