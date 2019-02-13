import axios from 'axios';

export default {
  getTodo({ commit }, todo) {
    axios.get('http://localhost:3000/api/tasks')
    .then(res => commit('SET_TODO', res.data))
    .catch(err => console.log(err));
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
