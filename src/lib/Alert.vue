<template>
  <div class="simple-alert" :class="classes">
    <p>{{ message }}</p>
    <span class="simple-alert-close" v-if="isClose"
      ><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-close"></use></svg
    ></span>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    message: {
      type: String,
      default: "这是一条提示",
    },
    type: {
      type: String,
      default: "info",
    },
    isClose: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type } = props;
    const classes = computed(() => {
      return {
        [`simple-type-${type}`]: type,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss">
.simple-alert {
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99;
  max-width: 300px;
  border: 1px solid #d7e4fe;
  background-color: #eff4fe;
  padding: 10px 35px 10px 10px;
  color: #3b688c;
  border-radius: 4px;
  .simple-alert-close {
    display: block;
    position: absolute;
    border-radius: 50%;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
    .icon {
      width: 100%;
      height: 100%;
    }
  }
  &.simple-type-success {
    border-color: #b8f0d1;
    background-color: #e3f9ed;
    color: #53664a;
  }
  &.simple-type-error {
    border-color: #ffc8c8;
    background-color: #ffe9e9;
    color: #ad3430;
  }
  &.simple-type-warning {
    border-color: #ffefc0;
    background-color: #fff8e6;
    color: #7f6128;
  }
}
</style>