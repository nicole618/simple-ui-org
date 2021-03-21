<demo>基础用法</demo>
<template>
  <Input placeholder="请输入信息" v-model:value="value" />
  <Input placeholder="请输入信息" v-model:value="value2" type="success" />
  <Input placeholder="请输入信息" v-model:value="value3" type="error" />
  <Input placeholder="请输入信息" v-model:value="value4" type="warning" />
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
    const value2 = ref("");
    const value3 = ref("");
    const value4 = ref("");
    return {
      value,
      value2,
      value3,
      value4,
    };
  },
};
</script>
<style scoped lang="scss">
.simple-input-wrapper {
  margin: 5px;
}
</style>