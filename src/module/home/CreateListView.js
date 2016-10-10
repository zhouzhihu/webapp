import ItemList from '../../components/ItemList.vue'

export default function createListView (type) {
  return {
    name : 'stories-view',
    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}