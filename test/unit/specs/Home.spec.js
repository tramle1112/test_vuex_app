import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/components/Home'
import Todos from '@/components/Todos'
import AddTodo from '@/components/AddTodo'

const localVue = createLocalVue()

localVue.use(Vuex)
describe('Home', () => {
  const state = {
    todos: [
      {id: 1, title: 'Do Sth', completed: false},
      {id: 2, title: 'Do Sth Else', completed: true}
    ],
    errors: []
  }
  let actions
  let store

  beforeEach(() => {
    actions = {
      getTodo: jest.fn(),
      addTodo: jest.fn(),
    },
    store = new Vuex.Store({
      state,
      actions,
    })
  })

  it('should render not done tasks h1', () => {
    const wrapper = shallowMount(ListTodo, { store, localVue })
    expect(wrapper.html())
      .toContain('')
  })
})
