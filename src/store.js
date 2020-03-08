/*Then: (for this Vuex store related tasks, you won't need store actions)
Go back to todolist vue project
Tasks:
- Add Vuex store to the project
- Move items data into the store state.
- Mutate the state using mutations.
- Keep original functionality of creating 
  new todo list items and displaying them*/
//Vue.use(Vuex);
//onClickDeleteItem: state => {
//   state.items.splice(state.items.index, 1);
// }
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      { id: 0, name: "item", hidden: true }, // index 0
      { id: 1, name: "itemTwo", hidden: false } // index 1
    ]
  },
  getters: {
    items: state => {
      // Filter state.items to only return items that are not hidden
      // so hidden is false
      var items = state.items.filter(function(item) {
        return !item.hidden;
      });
      return items;
    }
  },
  mutations: {
    deleteItem: (state, index) => {
      state.items.splice(index, 1);
    },
    addItem: (state, name) => {
      var item = { id: Math.random(), name: name, hidden: false };
      state.items.push(item);
    }
  }
});
