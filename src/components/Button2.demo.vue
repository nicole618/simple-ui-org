<demo>
不可用状态按钮
</demo>
<template>
  <Button type="primary" disabled>主要按钮</Button>
  <Button disabled>普通按钮</Button>
  <Button type="text" disabled>文字按钮</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: { Button },
};
</script>