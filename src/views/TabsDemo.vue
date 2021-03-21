<template>
  <header class="format-header">
    <h1>Tabs示例</h1>
    <hr />
    <p>
      Tabs使在不同的视图和功能间探索和切换以及浏览不同类别的数据集合起来变得简单
    </p>
  </header>
  <Demo :component="Tabs1Demo" componentStr="选项卡切换组件" />
  <Demo
    :component="Tabs2Demo"
    componentStr="选项卡切换组件，使用disabled达到禁用切换列的效果"
  />
</template>

<script lang="ts">
import Demo from "../components/Demo.vue";
import Tabs1Demo from "../components/Tabs1.demo.vue";
import Tabs2Demo from "../components/Tabs2.demo.vue";
export default {
  setup() {
    return { Tabs1Demo, Demo, Tabs2Demo };
  },
};
</script>