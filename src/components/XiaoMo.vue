<template>
    <div class="qiaomo">
        <img :src="'https://gcore.jsdelivr.net/gh/wemsx/qiaomo@master/dist/icons/skin' + QiaoSkin + '.svg'"
            @click="qiaoOnce" :class="{ qiaoClass: qiao }" />
    </div>
    <div class="qiaomoWord" ref="qiaomoRef">
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useQiaoBasicStore } from '@/stores/qiaoMoBasic';

const qiaoBasicStore = useQiaoBasicStore();
const { QiaoWord, QiaoCounter, QiaoSkin } = storeToRefs(qiaoBasicStore)

const qiaomoRef = ref()
const qiao = ref(false)

let createQiaoWord = () => {
    const qiaoWordEl = document.createElement('div');
    qiaoWordEl.innerHTML = QiaoWord.value;
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
    QiaoCounter.value++;
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