<template>
  <section class="format-section">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <p>{{ componentStr }}</p>
    <div class="format-sample">
      <component :is="component" />
    </div>
    <div class="format-code">
      <div class="format-code-text" v-if="codeVisible">
        <pre class="language-html" v-html="html"></pre>
      </div>
      <p class="format-code-btn" @click="codeVisible = !codeVisible">
        显示代码
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
const Prism = (window as any).Prism;
import { computed, ref } from "vue";
export default {
  props: {
    component: Object,
    componentStr: String,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html
      );
    });
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
    };
  },
};
</script>
