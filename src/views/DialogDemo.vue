<template>
  <div>Dialog示例</div>
  <h2>示例一</h2>
  <Button @click="toggle">打开Dialog</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title> 提示 </template>
    <template v-slot:content> 内容 </template>
  </Dialog>
  <h2>示例二</h2>
  <Button @click="showDialog">打开Dialog</Button>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容",
        ok: () => {},
        cancel: () => {},
        closeOnClickOverlay: true,
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>