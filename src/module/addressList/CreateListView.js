import ItemList from './ItemList.vue'

export default function createListView (type) {
  return {
    name : `${type}-stories-view`,
    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}