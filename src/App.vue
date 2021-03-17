<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const asideVisable = ref(false);
    provide("asideVisable", asideVisable);
  },
};
</script>
