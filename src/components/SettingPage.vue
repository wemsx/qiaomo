<script setup>
import QiaoCount from './QiaoCount.vue'
</script>
<template>
    <div class="header">
        <router-link :to="'/'">
            <QiaoCount></QiaoCount>
        </router-link>
    </div>
    <div class="main">
        <h1>前面的区域，以后再来探索吧。</h1>
    </div>
</template>
<style scoped>
h1 {
    color: white;
    scale: 1.2;
}

.main {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
}
</style>