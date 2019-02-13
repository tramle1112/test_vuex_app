import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/components/Home'
import Todos from '@/components/Todos'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home', () => {
  let wrapper
  let actions
  let store

  const state = {
    todos: [
      {id: 1, title: 'Do Sth', completed: false},
      {id: 2, title: 'Do Sth Else', completed: true}
    ],
    errors: []
  }

  beforeEach(() => {
    actions = {
      getTodo: jest.fn(),
    }
    store = new Vuex.Store({
      state,
      actions,
    })
    wrapper = shallowMount(Home, {localVue, store})
  })

  it('should render list todo', () => {
    expect(wrapper.vm.todos.length).toEqual(state.todos.length)
  })

  it('should call action getTodo', () => {
    expect(actions.getTodo).toHaveBeenCalled();
  })
})
