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
const qiaoWord = 'wulei~'

let createQiaoWord = () => {
    const qiaoWordEl = document.createElement('p');
    qiaoWordEl.innerHTML = qiaoWord;
    qiaoWordEl.className = 'qiaoWord';
    qiaomoRef.value.appendChild(qiaoWordEl)
    setTimeout(() => {
        qiaoWordEl.remove()
    }, 800)
}

function qiaoOnce() {
    createQiaoWord()
    qiao.value = true
    setTimeout(() => {
        qiao.value = false
    }, 500)
}

</script>

<style scoped>
img {
    height: 50vh;
    width: auto;
}

.qiaoClass {
    animation: qiao 0.48s linear;
}

@media not (min-width: 1000px) {
    .qiaoWord {
        position: absolute;
    }

    .qiaomoWord {
        color: #F7F7F7;
        position: absolute;
        font-size: 1.5vw;
        line-height: 1vh;
    }
}

/* 电脑端 */
@media (min-width: 1000px) {
    .qiaoWord {
        position: absolute;
    }

    .qiaomoWord {
        color: #F7F7F7;
        position: absolute;
        font-size: 1.5vw;
        line-height: 2vh;
    }
}

@keyframes qiao {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>