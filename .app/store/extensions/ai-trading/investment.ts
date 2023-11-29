import type { Investment } from '~~/types'

export const useAiTradingInvestmentStore = defineStore({
  // unique id of the store across your application
  id: 'aiInvestment',

  // a function that returns a fresh state
  state: () => ({
    investments: [] as Investment[],
    loading: false,
  }),

  // optional getters
  getters: {
    count(state) {
      // getter function to count Investments
      return state.investments.length
    },
  },

  // actions/mutations
  actions: {
    async fetchInvestments() {
      const { getAITradings } = useAiTrading()
      const response = await getAITradings()
      if (response.status === 'success') {
        this.investments = response.data.result ?? null
      }
    },
  },
})
