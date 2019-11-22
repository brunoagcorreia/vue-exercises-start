require('./bootstrap');
window.Vue = require('vue');
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = 'http://videostore.loc';

window.axios.defaults = {
    ...window.axios.defaults,
    baseURL: 'http://videostore.loc',
    timeout: 5000,
    responseType: 'json',
    withCredentials: false,
};
//window.apiURL = 'http://bta-videostore.loc';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import HomePage from "./components/pages/home";
import PersonsPage from "./components/pages/persons";
import CarsPage from "./components/pages/cars";
import MoviesPage from "./components/pages/movies";

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
    {
        name: 'persons',
        path: '/persons',
        component: PersonsPage
    },
    {
        name: 'cars',
        path: '/cars',
        component: CarsPage
    },
    {
        name: 'movies',
        path: '/movies',
        component: MoviesPage
    },

];
const router = new VueRouter({ mode: 'history', routes: routes});

import App from './App.vue';
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
export const EventBus = new Vue();
