<script setup>
import QiaoCount from './QiaoCount.vue';
import LockIcon from './icons/LockIcon.vue';
import { storeToRefs } from 'pinia';
import { useQiaoBasicStore } from '@/stores/qiaoMoBasic';

const qiaoBasicStore = useQiaoBasicStore();
const { QiaoSkin } = storeToRefs(qiaoBasicStore)

const skinChoices = [
    '小末花',
    '原末 I',
    '原末 II',
    '小_狐',
    '小_狐'
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
                    <input class="radio-input" type="radio" name="engine" :value="index" v-model="QiaoSkin" />
                    <span class="radio-tile">
                        <span class="radio-icon">
                            <LockIcon></LockIcon>
                        </span>
                        <span class="radio-label">{{ item }}</span>
                    </span>
                </label>
            </div>
        </div>
        <!--<h1>前面的区域，以后再来探索吧。</h1>-->
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

.skinSelection {
    position: absolute;
    left: 50%;
    top: -40%;
    transform: translate(-50%, -50%);
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
</style>