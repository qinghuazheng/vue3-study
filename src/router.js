import {createRouter,createWebHashHistory} from 'vue-router'

import User from './view/User.vue'
import News from './view/News.vue'
import Layout from './components/Layout'
const routes = [{
    path:'/',
    component:Layout
},{
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
