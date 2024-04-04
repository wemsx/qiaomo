import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQiaoBasicStore = defineStore(
  'qiaoBasic',
  () => {
    const QiaoWord = ref('wolei~')
    const QiaoCounter = ref(0)
    const QiaoSkin = ref('0')
    return { QiaoWord, QiaoCounter, QiaoSkin }
  },
  {
    persist: true
  }
)
