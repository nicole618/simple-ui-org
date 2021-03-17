<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisable = ref(width <= 500 ? false : true);
    provide("asideVisable", asideVisable);
  },
};
</script>
