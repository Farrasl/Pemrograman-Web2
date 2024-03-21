import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import Biodata from '../views/biodata.vue';
import Prestasi from '../views/prestasi.vue';
import Galeri from '../views/galeri.vue';
import Portofolio from '../views/portofolio.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/biodata',
      name: 'biodata',
      component: Biodata
    },
    {
      path: '/prestasi',
      name: 'prestasi',
      component: Prestasi
    },
    {
      path: '/galeri',
      name: 'galeri',
      component: Galeri
    },
    {
      path: '/portofolio',
      name: 'portofolio',
      component: Portofolio
    }
  ]
});
