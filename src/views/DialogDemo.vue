<template>
  <header class="format-header">
    <h1>Dialog示例</h1>
    <hr />
    <p>
      用于提示用户作一些决定，或者是完成某个任务时需要的一些其它额外的信息。
    </p>
  </header>
  <Demo
    :component="Dialog1Demo"
    componentStr="通过变量控制Dialog的显示和隐藏"
  />
  <Demo
    :component="Dialog2Demo"
    componentStr="通过调用openDialog方法，创建Dialog"
  />
  <section class="simple-args">
    <h2>Dialog 参数</h2>
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
          <td>visible</td>
          <td>控制Dialog的显示与隐藏</td>
          <td>Boolean</td>
          <td>true, false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>closeOnClickOverlay</td>
          <td>点击遮罩层是否关闭Dialog</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>true</td>
        </tr>
        <tr>
          <td>ok</td>
          <td>确认后执行事件,如果返回值为false，那么点击后不会关闭弹框</td>
          <td>Function</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>cancel</td>
          <td>取消后执行事件,如果返回值为false，那么点击后不会关闭弹框</td>
          <td>Function</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>firstButtonName</td>
          <td>确认按钮名</td>
          <td>String</td>
          <td>-</td>
          <td>OK</td>
        </tr>
        <tr>
          <td>lastButtonName</td>
          <td>取消按钮名</td>
          <td>String</td>
          <td>-</td>
          <td>Cancel</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import Dialog1Demo from "../components/Dialog1.demo.vue";
import Dialog2Demo from "../components/Dialog2.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  setup() {
    return { Dialog1Demo, Dialog2Demo, Demo };
  },
};
</script>