export const currentIndex = state => state.currentIndex

export const currentWordsList = state => state.currentWordsList

export const sequenceWordsList = state => state.sequenceWordsList

export const typeWordsList = state => state.typeWordsList

export const currentWord = (state) => {
  return state.currentWordsList[state.currentIndex]
}
