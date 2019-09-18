import Vue from 'vue';
import bootstrap from './bootstrap';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
