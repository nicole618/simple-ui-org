<template>
  <div class="homewrapper">
    <TopNav />
    <div class="banner">
      <div class="bannerLogo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifeiji"></use>
        </svg>
      </div>
      <h1>Simple UI</h1>
      <h2>基于 Vue 3.0 低调的 Simple UI 组件库</h2>
      <p>
        <a href="https://github.com/nicole618" target="blank" class="homeButton"
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use></svg
          >Github</a
        >
        <router-link to="/doc" class="homeButton"
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-start"></use></svg
          >开始</router-link
        >
      </p>
    </div>
  </div>
  <ul class="simpleUITarit w1200">
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <h2>
        <span>基于Vue3</span>
      </h2>
      <p>骄傲的采用了Vue 3 Composition API</p>
    </li>
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <h2>
        <span>基于TypeScript</span>
      </h2>
      <p>源代码使用TypeScript进行编写,增强了代码的可读性和可维护性</p>
    </li>
    <li>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-code"></use>
      </svg>
      <h2>
        <span>代码简单易读</span>
      </h2>
      <p>每个组件的源代码都及其简洁，不会影响到其他库</p>
    </li>
  </ul>
</template>
<script  lang='ts'>
import TopNav from "../components/TopNav.vue";

export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
.homewrapper {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ffacc2),
    to(#f1f1d7)
  );
  background-image: linear-gradient(250deg, #ffacc2, #f1f1d7);
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 20px;
      margin: 7px 0;
    }
    p {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      a + a {
        margin-left: 20px;
      }
    }
    .bannerLogo {
      .icon {
        width: 60px;
        height: 60px;
      }
    }
    > .actions {
      padding: 8px 0;
      a {
        margin: 0 8px;
        background: #fff;
        display: inline-block;
        $h: 28px;
        height: $h;
        line-height: $h;
        border-radius: $h/2;
        padding: 0 8px;
      }
    }
  }
}
.simpleUITarit {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  li {
    width: 29%;
    margin: 2% 2%;
    padding: 30px;
    font-weight: lighter;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .icon {
      font-size: 50px;
    }
    h2 {
      margin: 15px 0 10px 0;
      font-size: 20px;
    }
  }
  @media (max-width: 850px) {
    margin-top: 30px;
    li {
      width: 46%;
    }
  }
  @media (max-width: 600px) {
    margin-top: 20px;
    li {
      width: 96%;
    }
  }
}
</style>

