<demo>加载中按钮</demo>
<template>
  <Button :loading="true">加载中</Button>
</template>

<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>