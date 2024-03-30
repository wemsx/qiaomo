import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQiaoBasicStore = defineStore(
  'qiaoBasic',
  () => {
    const QiaoWord = ref('wolei~ +1')
    const QiaoCounter = ref(0)
    return { QiaoWord, QiaoCounter }
  },
  {
    persist: true
  }
)
