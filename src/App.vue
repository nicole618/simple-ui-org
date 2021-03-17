<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisable = ref(width <= 500 ? false : true);
    provide("asideVisable", asideVisable);
    router.afterEach(() => {
      if (width <= 500) {
        asideVisable.value = false;
      }
    });
  },
};
</script>
