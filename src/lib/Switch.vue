<template>
  <div>
    <button
      class="simple-switch"
      :class="{ 'simple-checked': value }"
      @click="toggle"
      :disabled="disabled"
    >
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss">
$h: 28px;
.simple-switch {
  height: $h;
  width: $h * 2;
  border: 1px solid #dfdfdf;
  background: #fdfdfd;
  border-radius: $h/2;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: #dfdfdf 0px 0px 0px 0px inset;
  > span {
    display: block;
    width: $h;
    height: $h;
    background: white;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    bottom: 1px;
    left: 0;
    position: absolute;
    border-radius: 50%;
    transition: box-shadow 0.3s, left 0.25s;
  }
  &.simple-checked {
    box-shadow: 0 0 0 $h/2 inset #64bd63;
    border: 1px solid #64bd63;
    > span {
      left: calc(100% - #{$h});
    }
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
    background: #eee;
  }
}
</style>