<template>
  <button class="simple-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="simple-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type, size } = props;
    const classes = computed(() => {
      return {
        [`simple-type-${type}`]: type,
        [`simple-size-${size}`]: size,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #c5d9e8;
$bg-low: #f3f7fa;
$white: white;
$color: #333;
$lowColor: #999;
$blue: #40a9ff;
$radius: 4px;
$bgPrimary: #6190e8;
$bgSuccess: #13ce66;
$bgError: #ff4949;
$bgWarning: #ffc82c;
$bgInfo: #78a4fa;
$grey: #eee;
.simple-button {
  box-sizing: border-box;
  padding: 8px 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    background-color: $bg-low;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.simple-size-big {
    font-size: 20px;
  }
  &.simple-size-small {
    font-size: 12px;
  }
  &.simple-type-primary {
    border-color: transparent;
    background: $bgPrimary;
    box-shadow: none;
    color: $white;
    &:hover,
    &:focus {
      background: lighten($bgPrimary, 10%);
    }
  }
  &.simple-type-success {
    border-color: transparent;
    background: $bgSuccess;
    box-shadow: none;
    color: $white;
    &:hover,
    &:focus {
      background: lighten($bgSuccess, 10%);
    }
  }
  &.simple-type-error {
    border-color: transparent;
    background: $bgError;
    box-shadow: none;
    color: $white;
    &:hover,
    &:focus {
      background: lighten($bgError, 10%);
    }
  }
  &.simple-type-warning {
    border-color: transparent;
    background: $bgWarning;
    box-shadow: none;
    color: $white;
    &:hover,
    &:focus {
      background: lighten($bgWarning, 10%);
    }
  }
  &.simple-type-info {
    border-color: transparent;
    background: $bgInfo;
    box-shadow: none;
    color: $white;
    &:hover,
    &:focus {
      background: lighten($bgInfo, 10%);
    }
  }

  &.simple-type-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &[disabled] {
    cursor: not-allowed;
  }
  &.simple-type-primary[disabled],
  &.simple-type-success[disabled],
  &.simple-type-error[disabled],
  &.simple-type-warning[disabled],
  &.simple-type-info[disabled] {
    color: $lowColor;
    background: $grey;
    &:hover {
      background: $grey;
    }
  }
  &.simple-type-button[disabled] {
    color: $lowColor;
    border-color: $grey;
    &:hover {
      background: inherit;
    }
  }
  &.simple-type-text[disabled] {
    color: $lowColor;
    &:hover {
      background: inherit;
    }
  }
  .simple-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: #ccc #ddd #eee transparent;
    border-style: solid;
    border-width: 2px;
    animation: 1s linear infinite simple-spin;
  }
}
@keyframes simple-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>