import axios from 'axios'

const TODO_URL = 'http://localhost:3000/api/'

export default {
  getTodo () {
    return new Promise(
      (resolve, reject) => {
        axios.get(TODO_URL + 'tasks').then(response => resolve(response.data), reject)
      }
    )
  },
  addTodo (newTodo) {
    return new Promise(
      (resolve, reject) => {
        axios.post(TODO_URL + 'tasks', {task}).then(response => resolve(response.data), reject)
      }
    )
  },
  deleteTodo (todo) {
    return new Promise(
      (resolve, reject) => {
        axios.delete(`${TODO_URL}tasks/${task.id}`).then(response => resolve(response.data), reject)
      }
    )
  },
  markComplete (todo) {
    return new Promise(
      (resolve, reject) => {
        axios.delete(`${TODO_URL}tasks/${task.id}`, {task}).then(response => resolve(response.data), reject)
      }
    )
  }
}
