import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Header from '../../../src/components/layout/Header'
import router from '../../../src/router'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Header, { localVue, router })
  })

  it('should render header h1', () => {
    expect(wrapper.html())
      .toContain('<h1>TodoList</h1>')
  })

  it('should render correctly path', () => {
    const navLinks = wrapper.findAll('#nav router-link-stub')
    expect(navLinks.at(0).attributes('to')).toEqual('/');
    expect(navLinks.at(1).attributes('to')).toEqual('/about');
  })
})
