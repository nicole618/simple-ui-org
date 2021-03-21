<template>
  <section class="format-section">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <p>{{ componentStr }}</p>
    <div class="format-sample">
      <component :is="component" />
    </div>
    <div class="format-code">
      <div class="format-code-text" v-if="codeVisible">
        <span class="format-copy" @click="formatCopy">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-copy"></use>
          </svg>
        </span>
        <pre class="language-html" v-html="html"></pre>
      </div>
      <p class="format-code-btn" @click="codeVisible = !codeVisible">
        {{ codeVisible === true ? "隐藏" : "显示" }}代码
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import { openAlert } from "../lib/openAlert";
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
    const showAlert = () => {
      openAlert({
        message: "复制成功",
        showTime: 800,
      });
    };
    const formatCopy = (e) => {
      const span = e.currentTarget;
      const pre = span.nextElementSibling;
      var selection = window.getSelection();
      selection.removeAllRanges();
      var range = document.createRange();
      range.selectNodeContents(pre); // 需要选中的dom节点
      selection.addRange(range);
      document.execCommand("Copy");
      selection.removeRange(range);
      showAlert();
    };
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      formatCopy,
      showAlert,
    };
  },
};
</script>
