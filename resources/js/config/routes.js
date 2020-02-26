import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHome from "../components/AppHome";
Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppHome },
    // { path: '/posts', component: AppPosts },
    // { path: '/post/:slug', component: AppPost },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;
