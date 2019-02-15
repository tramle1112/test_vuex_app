import { shallowMount, createLocalVue } from '@vue/test-utils'
import chai, { expect } from 'chai'
import spies from 'chai-spies'
import Vuex from 'vuex'
import TodoItem from '@/components/TodoItem'

const localVue = createLocalVue()
localVue.use(Vuex)
chai.use(spies)

describe('TodoItem', () => {
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      deleteTodo: chai.spy(),
      markComplete: chai.spy()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
    wrapper = shallowMount(TodoItem, {store, localVue,
      propsData: {
        todo: { title: '', completed: false },
      },
    })
  })

  it('call action deleteTodo when click button delete', () => {
    const buttonDelete = wrapper.find('button');
    buttonDelete.trigger('click');
    expect(actions.deleteTodo).to.have.been.called();
  })

  it('call action markComplete when click input checked', () => {
    const checkbox = wrapper.find('input');
    checkbox.trigger('change');
    expect(actions.markComplete).to.have.been.called();
  })

  it('has props', () => {
    expect(TodoItem.props).to.have.property('todo');
  })
})
