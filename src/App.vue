<script setup lang="ts">
window.addEventListener('message', msg => {
  if (window.top) {
    const data = localStorage.getItem('qiaoBasic')
    //console.log(data)
    window.top.postMessage(data, '*');
  }
}, false);
</script>

<template>
  <div class="background" style="background-color: #171717"></div>

  <router-view></router-view>

  <div class="footer">
    idea & image © since 2023 大哥 && program © 2024 wemsx || <router-link :to="'/help'">教程</router-link>
  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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