<template>
    <div class="qiaoCounter">
        <span class="displayCount" :style="actualFontSize">{{ QiaoCounter }}</span><br />
        <span>{{ QiaoQps == 0 ? 'wuqiongda' : (1000 / QiaoQps).toFixed(3) + ' 次/秒' }}</span>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useQiaoBasicStore } from '@/stores/qiaoMoBasic';
import { useQiaoAchieveStore } from '@/stores/qiaoMoAchieve';

const qiaoBasicStore = useQiaoBasicStore();
const { QiaoCounter } = storeToRefs(qiaoBasicStore)
const qiaoAchieveStore = useQiaoAchieveStore();
const { QiaoQps } = storeToRefs(qiaoAchieveStore)

const actualFontSize = computed(() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let fs = h > w ? h * 0.07 + 'px' : w * 0.05 + 'px';
    return { fontSize: fs }
})
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
    color: #f1f1f1;
}

.displayCount {
    width: fit-content;
    margin: auto;
}
</style>