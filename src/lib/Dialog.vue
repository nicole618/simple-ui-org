 <template>
  <div class="simple-dialog-overflow"></div>
  <div class="simple-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Botton>OK</Botton>
      <Botton>Cancel</Botton>
    </footer>
  </div>
</template>

<script lang="ts">
import Botton from "./Button.vue";
export default {
  components: { Botton },
};
</script>