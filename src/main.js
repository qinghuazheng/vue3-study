import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import Item from './components/Item'

const app = createApp(App);
app.config.devtools = true;

//实例上存在的很多方法都返回同一个实例 允许链式调用
app.component(Item.name,Item);
app.use(router);
//创建实例并挂载到真实的Dom
app.mount('#app');
// console.log(app,vm);

