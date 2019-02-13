<template>
  <div>
    <TodoItem :todo="todo" checked @delete-todo="deleteTodo" v-for="todo in todos" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TodoItem from './TodoItem.vue';
import axios from 'axios';

export default {
  name: "Todos",
  computed: {
    ...mapState(['todos']),
  },
  components: {
    TodoItem
  },
  methods: {
    ...mapActions(['deleteTodo', 'markComplete']),
  }
}
</script>

<style scoped>

</style>

