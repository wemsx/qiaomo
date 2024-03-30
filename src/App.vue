<script setup lang="ts">
</script>

<template>
  <div class="background"></div>

  <router-view></router-view>

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
</style>

<style>
* {
  font-family: "LXGW WenKai Screen";
  touch-action: none;
  -ms-touch-action: none;
}

#app {
  overflow: hidden;
  user-select: text;
}

body {
  overflow: hidden;
  user-select: text;
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