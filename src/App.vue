<template>
  <div>
    <div class="box" circle></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    onMounted(() =>{
      window.document.documentElement.setAttribute(
        "data-theme",
        "default"
      );
    })
  }
})
</script>

<style lang="scss" scoped>
.box {
  width: 50px;
  height: 50px;
  background: pink;
}
</style>
