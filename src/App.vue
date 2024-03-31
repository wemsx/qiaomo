<script setup lang="ts">
</script>

<template>
  <div class="background"></div>

  <router-view></router-view>

  <div class="footer">
    program © 2024 wemsx && picture © since 2023 大哥
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

.footer {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  text-align: center;
  color: dimgray;
  font-size: 1rem;
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