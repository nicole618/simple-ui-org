<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-logo"></use></svg
    ></router-link>
    <ul class="menu">
      <router-link to="/doc" class="homeButton"
        ><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-doc"></use></svg
        >文档</router-link
      >
    </ul>
    <span class="toggleMenu" @click="toggleMenu" v-if="toggleMenuVisible">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-more"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisable = inject<Ref<boolean>>("asideVisable");
    const toggleMenu = () => {
      asideVisable.value = !asideVisable.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ffacc2),
    to(#f1f1d7)
  );
  background-image: linear-gradient(250deg, #ffacc2, #f1f1d7);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    .icon {
      width: 35px;
      height: 35px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
  > .toggleMenu {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    .icon {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleMenu {
      display: inline-block;
    }
  }
}
</style>