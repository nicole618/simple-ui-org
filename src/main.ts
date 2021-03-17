import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import Doc from './views/Doc.vue'
import Home from './views/Home.vue'

const history = createWebHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc }
    ]
});
const app = createApp(App);
app.use(router)
app.mount('#app')


