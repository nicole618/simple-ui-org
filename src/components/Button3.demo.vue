<demo>带颜色倾向的按钮</demo>
<template>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="error">危险按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="info">信息按钮</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>