<template>
  <div>Tabs组件</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
export default {
  components: { Tab },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs的子组件只能是Tab");
      }
    });
  },
};
</script>