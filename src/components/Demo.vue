<template>
  <section class="format-section">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <p>{{ componentStr }}</p>
    <div class="format-sample">
      <component :is="component" />
    </div>
    <div class="format-code">
      <div class="format-code-text">
        <pre
          class="language-html"
          v-html="Prism.highlight(component.__sourceCode, Prism.languages.html)"
        ></pre>
      </div>
      <p class="format-code-btn">显示代码</p>
    </div>
  </section>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
    componentStr: String,
  },
  setup() {
    return {
      Prism,
    };
  },
};
</script>
