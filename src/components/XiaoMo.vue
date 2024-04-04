<template>
    <div class="qiaomo" style="color:chartreuse">
        <img :src="'https://gcore.jsdelivr.net/gh/wemsx/qiaomo@master/dist/icons/skin' + QiaoSkin + '.svg'"
            @click="qiaoOnce" :class="{ qiaoClass: qiao, adjusted: (QiaoSkin !== 0) }" :style="actualSize" />
    </div>
    <div class="qiaomoWord" ref="qiaomoRef" :style="actualFontSize">
    </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia';
import { useQiaoBasicStore } from '@/stores/qiaoMoBasic';

const qiaoBasicStore = useQiaoBasicStore();
const { QiaoWord, QiaoCounter, QiaoSkin } = storeToRefs(qiaoBasicStore)
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
    let fs = h > w ? h * 0.04 + 'px' : w * 0.03 + 'px';
    return { fontSize: fs }
})

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

.qiaomoWord {
    color: #F7F7F7;
    position: absolute;
    right: -10vw;
    top: 0;
    white-space: nowrap;
    line-height: 0;
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
        margin-top: -4vh;
        opacity: 0;
    }
}
</style>