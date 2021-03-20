<demo>基础用法二</demo>
<template>
  <Button @click="showDialog">打开Dialog</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "内容",
        ok: () => {},
        cancel: () => {},
        closeOnClickOverlay: true,
      });
    };
    return { showDialog };
  },
};
</script>