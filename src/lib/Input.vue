<template>
  <div class="simple-input-wrapper">
    <input
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="simple-input"
      :class="classes"
      @change="valueChange"
      :value="value"
    />
    <svg class="icon" aria-hidden="true" v-if="hasClose" @click="emptyInput">
      <use xlink:href="#icon-close"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "info",
    },
    hasClose: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const { type } = props;
    const valueChange = (event) => {
      context.emit("update:value", event.target.value);
    };
    const emptyInput = (event) => {
      context.emit("update:value", "");
    };
    const classes = computed(() => {
      return {
        [`simple-type-${type}`]: type,
      };
    });
    return {
      valueChange,
      emptyInput,
      classes,
    };
  },
};
</script>
<style lang="scss">
$fontSize: 12px;
$grey: #c9c9c9;
$disabledBg: #f8f8f8;
.simple-input-wrapper {
  position: relative;
  .icon {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
}
.simple-input {
  width: 100%;
  padding: 6px 35px 6px 12px;
  font-size: $fontSize;
  background-color: #fff;
  border: 1px solid #c5d9e8;
  border-radius: 4px;
  line-height: inherit;
  color: inherit;
  position: relative;

  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: $grey;
  }
  &::-moz-placeholder {
    color: $grey;
  }
  &:-moz-placeholder {
    color: $grey;
  }
  &:-ms-input-placeholder {
    color: $grey;
  }
  &.simple-type-success {
    border-color: #13ce66;
    &[readonly] {
      border-color: $grey;
    }
    &[disabled] {
      border-color: $grey;
      background: $disabledBg;
    }
  }
  &.simple-type-error {
    border-color: #ff4949;
    &[readonly] {
      border-color: $grey;
    }
    &[disabled] {
      border-color: $grey;
      background: $disabledBg;
    }
  }
  &.simple-type-warning {
    border-color: #ffc82c;
    &[readonly] {
      border-color: $grey;
    }
    &[disabled] {
      border-color: $grey;
      background: $disabledBg;
    }
  }
  &[readonly] {
    border-color: $grey;
  }
  &[disabled] {
    border-color: $grey;
    background: $disabledBg;
    cursor: not-allowed;
  }
}
</style>