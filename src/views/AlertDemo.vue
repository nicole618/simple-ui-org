<template>
  <header class="format-header">
    <h1>Alert示例</h1>
    <hr />
    <p>用于展示页面中需要提示用户关注的信息</p>
  </header>
  <Demo
    :component="Alert1Demo"
    componentStr="可以通过设置type来设置提示框的类型"
  />
  <Demo
    :component="Alert2Demo"
    componentStr="可以通过设置isClose来设置提示框是否能被关闭"
  />
  <section class="simple-args">
    <h2>Alert 参数</h2>
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
          <td>提示框的类型</td>
          <td>String</td>
          <td>info, success, error, warning</td>
          <td>info</td>
        </tr>
        <tr>
          <td>message</td>
          <td>提示信息</td>
          <td>String</td>
          <td>-</td>
          <td>这是一条提示信息</td>
        </tr>
        <tr>
          <td>isClose</td>
          <td>设置提示框能否被关闭</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>showTime</td>
          <td>设置提示框显示时间</td>
          <td>Number</td>
          <td>-</td>
          <td>3000ms</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script lang="ts">
import Alert1Demo from "../components/Alert1.demo.vue";
import Alert2Demo from "../components/Alert2.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  components: {
    Alert1Demo,
  },
  setup() {
    return { Demo, Alert1Demo, Alert2Demo };
  },
};
</script>