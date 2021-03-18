import Dialog from './Dialog.vue';
import { createApp, h } from 'vue'
export const openDialog = (options) => {
    const { title, content, cancel, ok, closeOnClickOverlay } = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const close = () => {
        //@ts-ignore
        app.unmount(div);
        div.remove();
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true, cancel, closeOnClickOverlay, ok, 'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close();
                    }
                }
            }, { title, content })
        }
    })
    app.mount(div);
}