<script setup>
import QiaoCount from './QiaoCount.vue';
import { computed } from 'vue'
const actualSize = computed(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;

    let ah = h > w ?
        w * 0.7 + 'px'
        : 'auto';
    let aw = h < w ? h * 0.5 + 'px' : 'auto';
    return {
        width: aw,
        height: ah
    }
})
const actualFontSize = computed(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let fs = h > w ? h * 0.02 : w * 0.015;
    return { fontSize: fs + 'px', lineHeight: 1.3 * fs + 'px' }
})
</script>
<template>
    <div class="header">
        <router-link :to="'/'">
            <QiaoCount></QiaoCount>
        </router-link>
    </div>
    <div class="main" :style="actualFontSize">
        <div class="article" :style="actualSize">
            Q1: 设置页在哪里？<br />
            A: 点击页面上部的数字，即可在设置页与主页间往返。<br />
            Q2: 小末花的皮肤怎么得？<br />
            A: 点对应的按钮即可。<br />
            Q3: 点击次数是如何储存的？<br />
            A: 我们利用浏览器内置的 LocalStorage 储存，所以无痕，换浏览器以后数据会消失。云端同步功能还在规划。<br />

            合作意向: 3551697397#qq.com
        </div>
    </div>
</template>
<style scoped>
.main {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.article {
    padding: 1vh 1vw;
    color: azure;
    background-color: #232323;
    max-width: 60vh;
}
</style>