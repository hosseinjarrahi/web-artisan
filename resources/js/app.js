require('./bootstrap');

import Vue from 'vue';
import vuetify from './config/vuetify';
import router from './config/routes';
import AppMain from './components/AppMain';
import GlobalMixin from './helpers/mixins';
import Bus from './helpers/eventBus';

const EventBus = new Vue(Bus);
window.EventBus = EventBus;

import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


Vue.mixin(GlobalMixin);
const app = new Vue({
    el: '#app',
    vuetify,
    router,
    render: h => h(AppMain)
});
