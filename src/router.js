import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('./page/MainPage.vue')
    },
    {
        path: '/photo',
        component: () => import('./page/PhotosPage.vue')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
})