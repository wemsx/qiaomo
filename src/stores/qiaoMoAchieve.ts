import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQiaoAchieveStore = defineStore(
  'qiaoAchieve',
  () => {
    const QiaoQps = ref(0)
    return { QiaoQps }
  },
  {
    persist: true
  }
)
