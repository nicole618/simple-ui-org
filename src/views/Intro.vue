<template>
  <article class="markdown" v-html="md"></article>
</template>

<script>
import md from "../markdown/intro.md";
export default {
  data() {
    return {
      md,
    };
  },
};
</script>