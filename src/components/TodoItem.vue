<template>
  <div class="todo-item" :class="{'is-complete':todo.completed}">
    <p>
      <input :checked="todo.completed" type="checkbox" @change="markComplete(todo)">
      {{todo.title}}
      <button @click="deleteTodo(todo)" class="del">x</button>
      </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import axios from 'axios';

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(['deleteTodo', 'markComplete']),
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
