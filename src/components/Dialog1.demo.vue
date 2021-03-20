<demo>基础用法一</demo>
<template>
  <Button @click="toggle">打开Dialog</Button>
  <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
    <template v-slot:title> 提示 </template>
    <template v-slot:content> 内容 </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
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
    return { x, toggle, f1, f2 };
  },
};
</script>