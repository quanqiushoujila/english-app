import * as types from './mutation-types'

export const selectWords = ({commit, state}, {list}) => {
  commit(types.SET_CURRENT_WORDS_LIST, list)
  commit(types.SET_SEQUENCE_WORDS_LIST, list)
}
