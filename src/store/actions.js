import axios from 'axios';
import TodoService from '@/services/todo_service'

export default {
  getTodo({ commit }) {
    TodoService.getTodo().then(
      todos => commit('SET_TODO', todos)
    )
  },
  addTodo({ commit }, newTodo) {
    axios.post('http://localhost:3000/api/tasks', newTodo)
    .then((res) => commit('ADD_TODO', res.data))
    .catch(err => console.log(err));
  },
  deleteTodo({ commit }, todo) {
    axios.delete(`http://localhost:3000/api/tasks/${todo.id}`)
    .then((res) => commit('DEL_TODO', todo))
    .catch(err => console.log(err));
  },
  markComplete({commit}, todo) {
    axios.put(`http://localhost:3000/api/tasks/${todo.id}`,{
      completed: !todo.completed})
    .then((res) => commit('MARK_TODO', res.data))
    .catch(err => console.log(err));
  }
}
