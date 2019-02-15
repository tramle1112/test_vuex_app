import { shallowMount, createLocalVue } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo'
import { expect } from 'chai'
import VeeValidate from 'vee-validate'

const localVue = createLocalVue()
localVue.use(VeeValidate)

describe('AddTodo', () => {
  let wrapper
  let newTd

  beforeEach(() => {
    newTd = {
      title: 'Do this task',
      completed: false
    }
    wrapper = shallowMount(AddTodo, { localVue })
  })

  it('should emit addTodo when click submit button', () => {
    const form = wrapper.find('form');
    wrapper.vm.title = 'Do this task'
    form.trigger('submit');
    expect(wrapper.emitted('add-todo')[0][0]).to.deep.equal(newTd)
  })

})

