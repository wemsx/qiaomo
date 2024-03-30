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
@media not (min-width: 1000px) {
    .qiaoCounter {
        /** 还没有调好 */
        height: 5vh;
        width: fit-content;
        padding: 1vh 1vw;
        text-align: center;
        vertical-align: middle;
        position: relative;
        display: inline-block;
        cursor: pointer;
        background-color: #282828;
        color: #f1f1f1;
        padding: 1vh 3vw;
        border-radius: 1vh;
    }

    .displayCount {
        width: fit-content;
        margin: auto;
        font-size: 2vw;
    }
}

@media (min-width: 1000px) {
    .qiaoCounter {
        height: 7vh;
        width: fit-content;
        padding: 1vh 1vw;
        text-align: center;
        vertical-align: middle;
        position: relative;
        display: inline-block;
        cursor: pointer;
        background-color: #282828;
        color: #f1f1f1;
        padding: 1vh 3vw;
        border-radius: 1vh;
    }

    .displayCount {
        font-size: 3vw;
        width: fit-content;
        margin: auto;
    }
}
</style>