<script setup lang="ts">
import Xiaomo from './XiaoMo.vue'
import QiaoCount from './QiaoCount.vue'
</script>

<template>
  <div class="header">
    <router-link :to="'/settings'">
      <QiaoCount></QiaoCount>
    </router-link>
  </div>
  <div class="main">
    <Xiaomo></Xiaomo>
  </div>
</template>

<style scoped>
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