<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="title">CSS架构</div>
  <a href="https://www.baidu.com/">百度一下</a>
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
