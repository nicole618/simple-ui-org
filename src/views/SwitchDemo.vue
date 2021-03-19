<template>
  <header class="format-header">
    <h1>Switch示例</h1>
    <hr />
    <p>在两种状态间切换时用到的开关选择器。</p>
  </header>
  <section class="format-section">
    <h2>基本用法</h2>
    <p>基础用法，状态切换会触发事件</p>
    <div class="format-sample">
      <Switch1Demo />
    </div>
    <div class="format-code">
      <div class="format-code-text"></div>
      <p class="format-code-btn">显示代码</p>
    </div>
  </section>
  <section class="format-section">
    <h2>不可用开关</h2>
    <p>添加属性 disabled 禁用开关按钮</p>
    <div class="format-sample">
      <Switch2Demo />
    </div>
    <div class="format-code">
      <div class="format-code-text"></div>
      <p class="format-code-btn">显示代码</p>
    </div>
  </section>
</template>
 
<script lang="ts">
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
export default {
  components: { Switch1Demo, Switch2Demo },
};
</script>


