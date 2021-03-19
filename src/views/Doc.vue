<template>
  <div class="layout">
    <TopNav class="nav" :toggleMenuVisible="true" />
    <div class="content">
      <aside v-if="asideVisable">
        <ul>
          <h2 @click="showTowOl">
            <span>开发指南</span
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bottom"></use>
            </svg>
          </h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/Install">开始</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">使用</router-link>
            </li>
          </ol>
        </ul>
        <ul>
          <h2 @click="showTowOl">
            <span>组件</span
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bottom"></use>
            </svg>
          </h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </ul>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from "../components/TopNav.vue";
import { inject, Ref } from "vue";
export default {
  components: { TopNav },
  setup() {
    const asideVisable = inject<Ref<boolean>>("asideVisable");
    const showTowOl = (e: MouseEvent) => {
      const h2 = e.currentTarget as HTMLElement;
      const ul = h2.parentNode as HTMLElement;
      if (ul.classList.contains("openOl")) {
        ul.classList.remove("openOl");
      } else {
        ul.classList.add("openOl");
      }
    };
    return { showTowOl, asideVisable };
  },
};
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 70px;
    padding-left: 180px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  width: 180px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  height: 100%;
  ul {
    > h2 {
      line-height: 40px;
      font-size: 16px;
      position: relative;
      padding: 0 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      .icon {
        font-size: 20px;
        transition: all 0.3s ease;
      }
    }
    > ol {
      display: none;
      > li {
        a {
          display: block;
          padding-left: 25px;
        }
        line-height: 35px;
      }
    }
    &.openOl {
      h2 {
        .icon {
          transform: rotate(180deg);
        }
      }
      ol {
        display: block;
      }
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    padding-top: 80px;
    top: 0;
    left: 0;
  }
  main {
    overflow: auto;
  }
}
</style>