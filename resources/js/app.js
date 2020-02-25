require('./bootstrap');

import Vue from 'vue';
import vuetify from './config/vuetify';
import router from './config/routes';
import AppMain from './components/AppMain';
import GlobalMixin from './helpers/mixins';
import Bus from './helpers/eventBus';

const EventBus = new Vue(Bus);
window.EventBus = EventBus;

Vue.mixin(GlobalMixin);
const app = new Vue({
    el: '#app',
    vuetify,
    router,
    render: h => h(AppMain)
});
