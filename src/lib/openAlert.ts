import Alert from './Alert.vue';
import { createApp, h } from 'vue'
export const openAlert = (options) => {
    const oldAlert = document.querySelectorAll('.simple-alert');
    if (oldAlert.length === 0) {
        const { message, type, isClose, showTime } = options;
        const div = document.createElement('div');
        document.body.appendChild(div);
        const close = () => {
            //@ts-ignore
            app.unmount(div);
            div.remove();
        }
        const app = createApp({
            render() {
                return h(Alert, {
                    message, type, isClose
                })
            }
        })
        app.mount(div);
        const alertClose = document.querySelector('.simple-alert-close');
        alertClose?.addEventListener('click', () => {
            close();
        })
        const setTime = showTime | 2000;
        setTimeout(() => {
            close();
        }, setTime)
    }



}