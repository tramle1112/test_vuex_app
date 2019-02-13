export default {
  SET_TODO(state, todo) {
    state.todos = todo;
  },
  ADD_TODO(state, newTodo) {
    state.todos.push(newTodo)
  },
  DEL_TODO(state, todo) {
    // const result = state.todos.find(t => t.id === todo.id);
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  MARK_TODO(state, todo) {
    const result = state.todos.find(t => t.id === todo.id);
    result.completed = !result.completed;
  }
}
