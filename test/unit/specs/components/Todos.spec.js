import { shallowMount, createLocalVue } from '@vue/test-utils'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import Vuex from 'vuex'
import Todos from '@/components/Todos'

const localVue = createLocalVue()
localVue.use(Vuex);
chai.use(spies)

describe('Todos', () => {
  let actions
  let state
  let store
  let wrapper

  beforeEach(() => {
    state = {
      todos: []
    }
    store = new Vuex.Store({
      state,
      actions,
    })
    wrapper = shallowMount(Todos, {localVue, store})
  })

  it('call mapState from store', () => {
    //object/arr se dung deep
    //string khong dung deep
    expect(wrapper.vm.todos).to.be.deep.equal(state.todos);
  })
})
