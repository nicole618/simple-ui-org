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
  <section class="simple-args">
    <h2>Tabs 参数</h2>
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>tab 标签的内容</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用某列导航切换</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </section>
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