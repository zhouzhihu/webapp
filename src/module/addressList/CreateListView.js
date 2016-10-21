import ItemList from './ItemList.vue'

export default function createListView (type) {
  return {
    name : `${type}-stories-view`,
    preFetch (store) {
      return store.dispatch('FETCH_AL_DATA', { type })
    },
    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}