import { shallowMount, createLocalVue } from '@vue/test-utils'
import AddTodo from '@components/AddTodo'

const localVue = createLocalVue()

describe('AddTodo', () => {
  let wrapper

  it('should render input addTodo', () => {
    expect(wrapper.html()).toContain(input)
  })
  }
)

