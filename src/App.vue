<script setup lang="ts">
import Xiaomo from '@/components/XiaoMo.vue'
import QiaoCount from '@/components/QiaoCount.vue'
</script>

<template>
  <div class="background"></div>
  <div class="header">
    <QiaoCount></QiaoCount>
  </div>
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

.header {
  position: absolute;
  top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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