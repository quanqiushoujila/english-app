import * as types from './mutation-type'

const mutations = {
  [types.SET_CURRENT_INDEX] (state, val) {
    state.currentIndex = val
  },
  [types.SET_CURRENT_WORDS_LIST] (state, val) {
    state.currentWordsList = val
  },
  [types.SET_SEQUENCE_WORDS_LIST] (state, val) {
    state.sequenceWordsList = val
  },
  [types.SET_TYPE_WORDS_LIST] (state, val) {
    state.typeWordsList = val
  }
}

export default mutations
