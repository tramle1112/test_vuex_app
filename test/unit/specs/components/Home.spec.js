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
  let state

  beforeEach(() => {
    actions = {
      getTodo: jest.fn(),
    }
    store = new Vuex.Store({
      state,
      actions,
    })
    state = {
      todos: [
        {id: 1, title: 'Test', completed: true},
        {id: 2, title: 'Tram Le', completed: true}
      ],
      errors: []
    }
    wrapper = shallowMount(Home, {localVue, store})
  })

  it('should dispatches "getTodo" when created', () => {
    expect(actions.getTodo).toHaveBeenCalled()
  })

  it('call mapState from store', () => {
    expect(wrapper.vm.todos).toEqual(state.todos)
  })

  it('should render list todo', () => {
    expect(wrapper.vm.todos.length).toEqual(state.todos.length)
  })


})
