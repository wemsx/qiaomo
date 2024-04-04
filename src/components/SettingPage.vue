<script setup>
import QiaoCount from './QiaoCount.vue';
import LockIcon from './icons/LockIcon.vue';
import { storeToRefs } from 'pinia';
import { useQiaoBasicStore } from '@/stores/qiaoMoBasic';
import { useRoute } from 'vue-router';
import { ref } from 'vue'

const qiaoBasicStore = useQiaoBasicStore();
const { QiaoSkin, QiaoCounter, QiaoWord } = storeToRefs(qiaoBasicStore)
const toDelete = ref([])
const route = useRoute()

const deleteCache = () => {
    window.localStorage.clear()
    location.href = "/";
}

const skinChoices = [
    '小末花',
    '原末 I',
    '原末 II',
    '小吉狐',
    '小顺狐'
]
const limit = [
    0,
    100,
    200,
    500,
    1000
]
</script>
<template>
    <div class="header">
        <router-link :to="'/'">
            <QiaoCount></QiaoCount>
        </router-link>
    </div>
    <div class="main">
        <div class="skinSelection">
            <div class="radio-inputs">
                <label v-for="(item, index) of skinChoices" :key="index">
                    <input class="radio-input" type="radio" name="engine" :value="index" v-model="QiaoSkin"
                        :disabled="QiaoCounter < limit[index]" />
                    <span class="radio-tile" v-if="QiaoCounter < limit[index]">
                        <span class="radio-icon">
                            <LockIcon></LockIcon>
                        </span>
                        <span class="radio-label">{{ '达到' + limit[index] + '解锁' }}</span>
                    </span>
                    <span class="radio-tile" v-else>
                        <span class="radio-icon">
                            👌
                        </span>
                        <span class="radio-label">{{ item }}</span>
                    </span>
                </label>
            </div>
        </div>
        <div class="intqiaoWord">
            你想敲出什么：<input type="text" class="inputQiao" placeholder="默认可以敲出 wolei " v-model="QiaoWord">
        </div>
    </div>
    <div class="clearCache" v-if="route.query.dev">
        <button @click="deleteCache"> 清空缓存 </button>
    </div>
</template>
<style scoped>
.main {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
}

.skinSelection {
    position: absolute;
    left: 50%;
    top: -40%;
}

@media (min-width: 1080px) {
    .skinSelection {
        transform: translate(-50%, -50%);
    }
}

@media not (min-width: 1080px) {
    .skinSelection {
        transform: translate(-67.5%, -67.5%);
        scale: 0.75;
    }
}

.radio-inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 350px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.radio-inputs>* {
    margin: 6px;
}

.radio-input:checked+.radio-tile {
    border-color: #2260ff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #2260ff;
}

.radio-input:disabled+.radio-tile {
    border-color: red;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: red;
}

.radio-input:checked+.radio-tile:before {
    transform: scale(1);
    opacity: 1;
    background-color: #2260ff;
    border-color: #2260ff;
}

.radio-input:checked+.radio-tile .radio-icon svg {
    fill: #2260ff;
}

.radio-input:checked+.radio-tile .radio-label {
    color: #2260ff;
}

.radio-input:focus+.radio-tile {
    border-color: #2260ff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 0 0 4px #b5c9fc;
}

.radio-input:focus+.radio-tile:before {
    transform: scale(1);
    opacity: 1;
}

.radio-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    min-height: 80px;
    border-radius: 0.5rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: 0.15s ease;
    cursor: pointer;
    position: relative;
}

.radio-tile:before {
    content: "";
    position: absolute;
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid #b5bfd9;
    background-color: #fff;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    opacity: 0;
    transform: scale(0);
    transition: 0.25s ease;
}

.radio-tile:hover {
    border-color: #2260ff;
}

.radio-tile:hover:before {
    transform: scale(1);
    opacity: 1;
}

.radio-icon svg {
    width: 2rem;
    height: 2rem;
    fill: #b5dfd9;
}

.radio-label {
    color: #707070;
    transition: 0.375s ease;
    text-align: center;
    font-size: 13px;
}

.radio-input {
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(100%);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.intqiaoWord {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    white-space: nowrap;
    color: azure;
    margin-top: 7vh;
}

.inputQiao {
    font-family: inherit;
    font-size: inherit;
    background-color: #f4f2f2;
    border: none;
    color: #646464;
    padding: 0.7rem 1rem;
    border-radius: 30px;
    width: 12em;
    transition: all ease-in-out .5s;
    margin-right: -2rem;
}

.inputQiao:hover,
.inputQiao:focus {
    box-shadow: 0 0 1em #00000013;
}

.inputQiao:focus {
    outline: none;
    background-color: #f0eeee;
}

.inputQiao::-webkit-input-placeholder {
    font-weight: 100;
    color: #ccc;
}

.inputQiao:focus+.search__button {
    background-color: #f0eeee;
}

.clearCache {
    position: absolute;
    left: 50%;
    bottom: 20vh;
    transform: translate(-50%, -50%);
}

.clearCache button {
    height: 10vh;
    width: 10vw;
}
</style>