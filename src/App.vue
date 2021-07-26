<template>
  <c-layout>
    <c-header fixed style="background: pink">header</c-header>
    <c-main style="background: green;">
      <div style="height: 1000px">
        <div>main</div>
        <div>main</div>
        <div>main</div>
        <div>main</div>
      </div>
    </c-main>
    <c-footer style="background: yellow">footer</c-footer>
  </c-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
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
