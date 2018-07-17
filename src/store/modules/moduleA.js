export const moduleA = {
  state: {
    number: 10
  },
  getters: {
    getNumber (state) {
      return state.number * 10
    }
  },
  mutations: {
    SET_NUMBER (state, number) {
      state.number = number
    }
  },
  actions: {
    setNumber ({ state, commit, rootState }, payLad) {
      return new Promise((resolve, reject) => {
        // console.log(state)
        // console.log(rootState)
        commit('SET_NUMBER', 22)
        resolve()
      })
    }
  }
}
