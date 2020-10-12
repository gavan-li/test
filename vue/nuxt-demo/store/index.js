/*
 * @Description: 
 * @Autor: Gavan
 * @Date: 2019-09-21 14:44:42
 * @LastEditors: 
 */
import { getName } from '~/assets/api.js'

export const state = () => ({
	counter: 'this vuex'
})

export const mutations = {
	increment (state, val) {
    state.counter = val
  }
}

export const actions = {
  async ajax ({commit, state}) {
    const result = await this.$axios.get(getName)
    commit('increment', result.name)
  }
}
