<template>
  <header class="format-header">
    <h1>Switch示例</h1>
    <hr />
    <p>在两种状态间切换时用到的开关选择器。</p>
  </header>
  <Demo :component="Switch1Demo" componentStr="基础用法，状态切换会触发事件" />
  <Demo :component="Switch2Demo" componentStr="添加属性disabled禁用开关按钮" />
  <section class="simple-args">
    <h2>Switch 参数</h2>
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
          <td>value</td>
          <td>Switch 状态值</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用按钮</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </section>
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


