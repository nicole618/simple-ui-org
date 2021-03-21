<template>
  <header class="format-header">
    <h1>Input示例</h1>
    <hr />
    <p>用于收集用户提供的信息</p>
  </header>
  <Demo :component="Input1Demo" componentStr="通过type控制输入框的类型" />
  <Demo
    :component="Input2Demo"
    componentStr="通过设置readonly控制输入框不允许更改"
  />
  <Demo
    :component="Input3Demo"
    componentStr="通过设置disabled控制输入框不可用"
  />
  <section class="simple-args">
    <h2>Input 参数</h2>
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
          <td>type</td>
          <td>输入框的类型</td>
          <td>String</td>
          <td>info, success, error, warning</td>
          <td>button</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用输入框</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>设置输入框是否能编辑</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>设置输入框的提示信息</td>
          <td>String</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>hasClose</td>
          <td>设置输入框是否有清空按钮</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>true</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import Demo from "../components/Demo.vue";
import Input1Demo from "../components/Input1.demo.vue";
import Input2Demo from "../components/Input2.demo.vue";
import Input3Demo from "../components/Input3.demo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Demo,
    };
  },
};
</script>