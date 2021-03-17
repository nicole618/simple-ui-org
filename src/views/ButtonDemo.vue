<template>
  <div>
    <div>Button示例</div>
    <h1>示例1</h1>
    <div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
    <h1>示例2</h1>
    <div>
      <Button size="big">你好</Button>
      <Button>你好</Button>
      <Button size="small">你好</Button>
    </div>
    <h1>示例3</h1>
    <div>
      <Button size="big" theme="link">你好</Button>
      <Button theme="link">你好</Button>
      <Button size="small" theme="link">你好</Button>
    </div>
    <h1>示例4</h1>
    <div>
      <Button size="big" theme="text">你好</Button>
      <Button theme="text">你好</Button>
      <Button size="small" theme="text">你好</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>