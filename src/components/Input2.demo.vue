<demo>只读输入框</demo>
<template>
  <Input placeholder="请输入信息" v-model:value="value" readonly />
</template>
<script lang="ts">
import { ref } from "vue";
import { Input } from "../lib/index";
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