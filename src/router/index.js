// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/inicio/index.vue';
import NosotrosView from '../views/nosotros/index.vue';
import ServiciosView from '../views/servicios/index.vue';
import ContactoView from '../views/contacto/index.vue';

const routes = [
  {
    path: '/',
    name: 'InicioView',
    component: InicioView,
  },
  {
    path: '/nosotros',
    name: 'NosotrosView',
    component: NosotrosView,
  },
  {
    path: '/servicios',
    name: 'ServiciosView',
    component: ServiciosView,
  },
  {
    path: '/contacto',
    name: 'ContactoView',
    component: ContactoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router;
