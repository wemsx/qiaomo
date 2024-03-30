<template>
    <div class="qiaoCounter">
        <span class="displayCount">{{ QiaoCounter }}</span>
    </div>
</template>
<script setup>
//import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useQiaoBasicStore } from '@/stores/qiaoMoBasic';

const qiaoBasicStore = useQiaoBasicStore();
const { QiaoCounter } = storeToRefs(qiaoBasicStore)
</script>
<style scoped>
.qiaoCounter {
    user-select: none;
    width: fit-content;
    text-align: center;
    vertical-align: middle;
    position: relative;
    display: inline-block;
    cursor: pointer;
}

@media not (min-width: 1000px) {
    .qiaoCounter {
        height: 3vh;
        background-color: #282828;
        color: #f1f1f1;
        padding: 2vh 6vw;
        border-radius: 1vh;
    }

    .displayCount {
        width: fit-content;
        margin: auto;
        font-size: 5vw;
    }
}

@media (min-width: 1000px) {
    .qiaoCounter {
        height: 7vh;
        padding: 2vh 4vw;
        background-color: #282828;
        color: #f1f1f1;
        border-radius: 1vh;
    }

    .displayCount {
        font-size: 3vw;
        width: fit-content;
        margin: auto;
    }
}
</style>