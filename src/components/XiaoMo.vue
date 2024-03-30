<template>
    <div class="qiaomo">
        <img src="https://gcore.jsdelivr.net/gh/wemhy/xm@1.0.0/logo/logot.svg" @click="qiaoOnce"
            :class="{ qiaoClass: qiao }" />
    </div>
    <div class="qiaomoWord" ref="qiaomoRef">
    </div>
</template>
<script setup>
import { ref } from 'vue'

const qiaomoRef = ref()
const qiao = ref(false)
const qiaoWord = 'wulei~ +1'

let createQiaoWord = () => {
    const qiaoWordEl = document.createElement('div');
    qiaoWordEl.innerHTML = qiaoWord;
    qiaomoRef.value.appendChild(qiaoWordEl)
    setTimeout(() => {
        qiaoWordEl.className = 'qiaoWordDis';
        setTimeout(() => {
            qiaoWordEl.remove()
        }, 300)
    }, 500)
}

function qiaoOnce() {
    createQiaoWord()
    qiao.value = true
    setTimeout(() => {
        qiao.value = false
    }, 400)
}

</script>

<style scoped>
.qiaoClass {
    animation: qiao 0.36s linear;
}

@media not (min-width: 1000px) {
    img {
        height: 40vh;
        width: auto;
    }

    .qiaomoWord {
        color: #F7F7F7;
        position: absolute;
        right: -10vw;
        top: 0;
        font-size: 3vh;
        white-space: nowrap;
        line-height: 0;
    }
}

/* 电脑端 */
@media (min-width: 1000px) {
    img {
        height: 50vh;
        width: auto;
    }

    .qiaomoWord {
        color: #F7F7F7;
        position: absolute;
        right: -10vw;
        top: 0;
        font-size: 2vw;
        white-space: nowrap;
        line-height: 0;
    }
}

@keyframes qiao {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(1);
    }
}
</style>
<style>
.qiaoWordDis {
    position: absolute;
    top: 0;
    right: 0;
    animation: wordMove 0.3s linear;
    opacity: 0;
}

@keyframes wordMove {
    0% {
        top: 0;
        opacity: 1;
    }

    100% {
        margin-top: -5vh;
        opacity: 0;
    }
}
</style>