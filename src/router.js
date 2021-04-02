import {createRouter,createWebHashHistory} from 'vue-router'

import User from './view/User.vue'
import News from './view/News.vue'
const routes = [{
    path:'/user',
    component:User
},{
    path:'/news',
    component:News
}];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router
