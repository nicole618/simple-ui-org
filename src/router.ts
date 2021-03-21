import { createRouter, createWebHistory } from 'vue-router';
import ButtonDemo from './views/ButtonDemo.vue';
import DialogDemo from './views/DialogDemo.vue';
import Doc from './views/Doc.vue';
import Home from './views/Home.vue';
import SwitchDemo from './views/SwitchDemo.vue';
import TabsDemo from './views/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import AlertDemo from './views/AlertDemo.vue';
import InputDemo from './views/InputDemo.vue'

import { h } from 'vue';

const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })

const history = createWebHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: 'get-started', component: md('get-started') },
                { path: 'intro', component: md('intro') },
                { path: 'install', component: md('install') },
                { path: '', redirect: '/doc/intro' },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'alert', component: AlertDemo },
                { path: 'nput', component: InputDemo }
            ]
        }
    ]
});