<template>
  <div>
    <div class="box">main</div>
    <div class="text">main</div>
    <div class="text2">main</div>
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
.title {
  width: 200px;
  height: 200px;
  color: $color-text-quaternary;
  background: rgba($color: #000000, $alpha: .4);
  @include box-center;
}
</style>
