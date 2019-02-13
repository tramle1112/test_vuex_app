<template>
  <div id="app">
    <AddTodo @add-todo="addTodo" />
    <Todos :todos="todos" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Todos from '@/components/Todos';
import AddTodo from '@/components/AddTodo';

export default {
  name: 'Home',
  computed: {
    ...mapState(['todos']),
  },

  components: {
    Todos,
    AddTodo
  },

  created() {
    this.getTodo();
  },

  methods: {
    ...mapActions(['getTodo', 'addTodo']),
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }
</style>
