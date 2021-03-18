<template>
  <div>Tabs组件</div>
  <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
  <component v-for="(c, index) in defaults" :is="c" :key="index" />
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
    const titles = defaults.map((tab) => {
      return tab.props.title;
    });
    return { defaults, titles };
  },
};
</script>