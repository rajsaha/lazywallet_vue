import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total_expense: 0,
  },
  mutations: {
    add_to_total_expense(state, expense_amount) {
      state.total_expense += parseInt(expense_amount, 10)
    }
  },
  actions: {
    add_to_total_expense({
      commit
    }, expense_amount) {
      commit('add_to_total_expense', expense_amount)
    }
  }
})
