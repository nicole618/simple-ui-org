<template>
  <div class="simple-tabs">
    <div class="simple-tabs-nav" ref="container">
      <div
        class="simple-tabs-nav-item"
        v-for="(t, index) in tabs"
        :ref="
          (el) => {
            if (t.title === selected || (selected === undefined && index === 0))
              selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t.title === selected }"
        :key="index"
        :disabled="t.disabled"
      >
        {{ t.title }}
      </div>
      <div class="simple-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="simple-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, ref, onMounted, onUpdated } from "vue";

export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    };
    onMounted(() => {
      x();
    });
    onUpdated(() => {
      x();
    });
    const defaults = context.slots.default();

    defaults.forEach((tag) => {
      // @ts-ignore
      if (tag.type.name !== Tab.name) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const current = computed(() => {
      let oldcurrent = defaults.find(
        (tag) => tag.props.title === props.selected
      );
      if (oldcurrent === undefined) {
        oldcurrent = defaults[0];
      }
      return oldcurrent;
    });
    const tabs = defaults.map((tag) => {
      const tab = { title: "", disabled: false };
      tab.title = tag.props.title;
      tab.disabled = tag.props.disabled;
      tab.disabled = tag.props.disabled;
      return tab;
    });
    const select = (tab) => {
      if (tab.disabled !== "") {
        context.emit("update:selected", tab.title);
      }
    };
    return {
      current,
      defaults,
      tabs,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
$grey: #aaa;
.simple-tabs {
  width: 100%;
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
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
      &[disabled] {
        cursor: not-allowed;
        color: $grey;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>