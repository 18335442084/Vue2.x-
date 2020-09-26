import Vue from 'vue';
import App from './index.vue';
import router from './router/router';

import './global.css'


const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
    render: (h) => h(App),
    router
}).$mount(root);