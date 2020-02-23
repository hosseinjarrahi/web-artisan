import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHome from "../components/AppHome";
Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppHome }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;
