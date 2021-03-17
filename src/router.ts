import { createRouter, createWebHistory } from 'vue-router';
import Doc from './views/Doc.vue';
import Home from './views/Home.vue';
import SwitchDemo from './views/SwitchDemo.vue';

const history = createWebHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'switch', component: SwitchDemo }
            ]
        }
    ]
});