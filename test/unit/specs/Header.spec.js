import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Header from '../../../src/components/layout/Header'

const localVue = createLocalVue()
localVue.use(VueRouter)
describe('Header', () => {
  it('should render header h1', () => {
    const wrapper = shallowMount(Header, { localVue })
    expect(wrapper.html())
      .toContain('<h1>TodoList</h1>')
  })
})
