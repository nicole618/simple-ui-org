<template>
  <h2>示例一</h2>
  <Button @click="toggle">切换Dialog</Button>
  <Dialog
    v-model:visiable="x"
    :closeonClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  />
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