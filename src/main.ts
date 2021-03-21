import './lib/simple.scss';
import './index.scss';
import './normal.scss';
import './format.scss';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import 'github-markdown-css'
import './assets/svg.js'

const app = createApp(App);
app.use(router)
app.mount('#app')


