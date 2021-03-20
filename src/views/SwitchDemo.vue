<template>
  <header class="format-header">
    <h1>Switch示例</h1>
    <hr />
    <p>在两种状态间切换时用到的开关选择器。</p>
  </header>
  <Demo :component="Switch1Demo" componentStr="基础用法，状态切换会触发事件" />
  <Demo :component="Switch2Demo" componentStr="添加属性disabled禁用开关按钮" />
</template>
 
<script lang="ts">
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
    };
  },
};
</script>


