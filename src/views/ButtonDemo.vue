<template>
  <div>
    <header class="format-header">
      <h1>Button示例</h1>
      <hr />
      <p>按钮用于传递用户触摸时会触发的操作</p>
    </header>
    <section class="format-section">
      <h2>基础按钮</h2>
      <p>基础按钮分三种：主按钮（实心） 、 次按钮（空心） 、 文字按钮</p>
      <div class="format-sample">
        <Button>你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
      </div>
      <div class="format-code">
        <div class="format-code-text"></div>
        <p class="format-code-btn">显示代码</p>
      </div>
    </section>
    <h2>示例2</h2>
    <div>
      <div>
        <Button size="big">你好</Button>
        <Button>你好</Button>
        <Button size="small">你好</Button>
      </div>
      <div>
        <Button size="big" theme="link">你好</Button>
        <Button theme="link">你好</Button>
        <Button size="small" theme="link">你好</Button>
      </div>
      <div>
        <Button size="big" theme="text">你好</Button>
        <Button theme="text">你好</Button>
        <Button size="small" theme="text">你好</Button>
      </div>
    </div>
    <h2>示例3</h2>
    <div>
      <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
      </div>
      <div>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
      </div>
    </div>
    <h2>示例4</h2>
    <div>
      <Button disabled>Hi</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
    <h2>示例5</h2>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>