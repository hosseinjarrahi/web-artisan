require('./bootstrap');

import Vue from 'vue';
import vuetify from './config/vuetify';
import router from './config/routes';
import AppMain from './components/AppMain';
import GlobalMixin from './helpers/mixins';

const EventBus = new Vue();
window.EventBus = EventBus;

Vue.mixin(GlobalMixin);
const app = new Vue({
    el: '#app',
    vuetify,
    router,
    render: h => h(AppMain)
});
