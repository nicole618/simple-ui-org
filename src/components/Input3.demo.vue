<demo>不可用输入框</demo>
<template>
  <Input placeholder="请输入信息" v-model:value="value" disabled />
</template>
<script lang="ts">
import { ref } from "vue";
import Input from "../lib/Input.vue";
export default {
  components: {
    Input,
  },
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
};
</script>
<style scoped lang="scss">
.simple-input-wrapper {
  margin: 5px;
}
</style>