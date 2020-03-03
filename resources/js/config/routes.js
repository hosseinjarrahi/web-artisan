import Vue from 'vue';
import VueRouter from 'vue-router';
import AppHome from "../components/AppHome";
import AppContact from "../components/AppContact";
import AppCollaboration from "../components/AppCollaboration";
import AppTariffs from "../components/AppTariffs";
import AppProjects from "../components/AppProjects";
Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppHome },
    { path: '/contact-us', component: AppContact },
    { path: '/collaboration', component: AppCollaboration },
    { path: '/tariffs', component: AppTariffs },
    { path: '/projects', component: AppProjects },
    // { path: '/posts', component: AppPosts },
    // { path: '/post/:slug', component: AppPost },
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;
