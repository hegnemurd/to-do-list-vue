<template>
  <div>
    <app-header @addNewElement="onClickAddNewElement"></app-header>
    <app-to-do-list>
      <app-to-do-list-item
        v-for="(item, index) in items"
        :key="item.id"
        @delete="onClickDeleteItem(index, $event)"
      >
        {{ item.name }}
      </app-to-do-list-item>
    </app-to-do-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "./components/Header.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoListItem from "./components/ToDoListItem.vue";

export default {
  computed: {
    ...mapGetters(["items"])
  },
  components: {
    appHeader: Header,
    appToDoList: ToDoList,
    appToDoListItem: ToDoListItem
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    onClickAddNewElement(event, data) {
      this.$store.commit("addItem", data);
    },
    // eslint-disable-next-line no-unused-vars
    onClickDeleteItem(index, event) {
      this.$store.commit("deleteItem", index); // payload here is the index
    }
  }
};
</script>

<style scoped></style>
