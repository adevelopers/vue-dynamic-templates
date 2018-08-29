
const currentJournal = {
  namespaced: true,
  state: {
    token: '',
    cards: [],
    loading: false
  },
  getters: {
    getJournalName: () => {
      return "Journal name"
    },
    getNumbers: (state, getters) => {
        return [5,3,234]
    },
  }
}

export default currentJournal
