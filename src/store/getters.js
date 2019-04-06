const getters = {
  loadCount: state => state.loadMore.loadCount,
  newsList: state => state.loadMore.newsList,
  eof: state => state.loadMore.eof
}
export default getters
