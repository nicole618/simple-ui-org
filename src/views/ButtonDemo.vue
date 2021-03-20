<template>
  <header class="format-header">
    <h1>Button示例</h1>
    <hr />
    <p>按钮用于传递用户触摸时会触发的操作</p>
  </header>
  <Demo
    :component="Button1Demo"
    componentStr="基础按钮分三种：主要按钮（实心） 、 普通按钮（空心） 、 文字按钮"
  />
  <Demo :component="Button2Demo" componentStr="添加属性 disabled 禁用按钮" />
  <Demo
    :component="Button3Demo"
    componentStr="带有色彩倾向的按钮能给用户带来操作提示"
  />
  <Demo
    :component="Button4Demo"
    componentStr="按钮提供三种尺寸：大、中、小，可通过 size 属性配置"
  />
  <Demo
    :component="Button5Demo"
    componentStr="可通过添加loading属性，使按钮处于加载中状态"
  />
  <section class="simple-args">
    <h2>Button 参数</h2>
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
          <td>按钮的类型</td>
          <td>String</td>
          <td>button, primary, success, error, warning, info, text</td>
          <td>button</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用按钮</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>设置按钮的大小</td>
          <td>String</td>
          <td>big, normal, small</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>设置按钮的载入状态</td>
          <td>Boolean</td>
          <td>true,false</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import Button1Demo from "../components/Button1.demo.vue";
import Button2Demo from "../components/Button2.demo.vue";
import Button3Demo from "../components/Button3.demo.vue";
import Button4Demo from "../components/Button4.demo.vue";
import Button5Demo from "../components/Button5.demo.vue";
import Demo from "../components/Demo.vue";
export default {
  setup() {
    return {
      Demo,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>