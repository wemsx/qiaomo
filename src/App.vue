<script setup lang="ts">
import Xiaomo from '@/components/XiaoMo.vue'
</script>

<template>
  <div class="background"></div>
  <div class="main">
    <Xiaomo></Xiaomo>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #171717;
  z-index: -1;
}

.main {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
</style>

<style>
#app {
  overflow: hidden;
  user-select: text;
}

body {
  overflow: hidden;
  user-select: text;
}
</style>