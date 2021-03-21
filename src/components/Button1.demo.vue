<demo>
基础按钮
</demo>
<template>
  <Button type="primary">默认按钮</Button>
  <Button>普通按钮</Button>
  <Button type="text">文字按钮</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: { Button },
};
</script>