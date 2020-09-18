// For flow chart see cts/search-phrases/search-phrases-of-components-orm:7
export default {
  state: {
    arOfCardsInPtsOfVl: [], // Template has a for loop running on this.
  },
  mutations: {
    mtfSetArCardsInCsOfVl(state, value) {
      state.arOfCardsInPtsOfVl = value
    },
    mtfShowCardInCsVl(state, pCard) {
      // CsVl is current state view layer
      state.arOfCardsInPtsOfVl.push(pCard)
    },
  },
}