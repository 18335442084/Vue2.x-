import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './routers';

import mainSelf from '../main.vue';
import infoSelf from '../infomation/infoMain.vue';
import newsSelf from '../news/news.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: mainSelf},
        {path: '/info', component: infoSelf},
        {path: '/news', component: newsSelf}
    ]
});

export default router;
