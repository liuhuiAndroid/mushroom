<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="title">CSS架构</div>
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
  color: #FFFFFF;
  background: rgba($color: #000000, $alpha: .4);
  @include box-center;
}
</style>
