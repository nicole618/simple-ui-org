import { createRouter, createWebHistory } from 'vue-router';
import ButtonDemo from './views/ButtonDemo.vue';
import DialogDemo from './views/DialogDemo.vue';
import Doc from './views/Doc.vue';
import DocDemo from './views/DocDemo.vue';
import Home from './views/Home.vue';
import SwitchDemo from './views/SwitchDemo.vue';
import TabsDemo from './views/TabsDemo.vue';

const history = createWebHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
});