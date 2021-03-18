<template>
  <div class="simple-tabs">
    <div class="simple-tabs-nav">
      <div
        class="simple-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>
    </div>
    <div class="simple-tabs-content">
      <component
        class="simple-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  components: { Tab },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs的子组件只能是Tab");
      }
    });
    const current = computed(() => {
      return defaults.find((tab) => tab.props.title === props.selected);
    });
    const titles = defaults.map((tab) => {
      return tab.props.title;
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, current, select };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.simple-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>