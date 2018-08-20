import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Tooltips from '@/views/base/Tooltips'

Vue.use(BootstrapVue)

describe('Tooltips.vue', () => {
  it('has a name', () => {
    expect(Tooltips.name).toMatch('tooltips')
  })
  it('has a created hook', () => {
    expect(typeof Tooltips.data).toMatch('function')
  })
  it('sets the correct default data', () => {
    expect(typeof Tooltips.data).toMatch('function')
    const defaultData = Tooltips.data()
    expect(defaultData.show).toBe(true)
    expect(defaultData.disabled).toBe(false)
  })
  it('is Vue instance', () => {
    const wrapper = mount(Tooltips)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('is Tooltips', () => {
    const wrapper = mount(Tooltips)
    expect(wrapper.is(Tooltips)).toBe(true)
  })
  it('should render correct content', () => {
    const wrapper = mount(Tooltips)
    expect(wrapper.find('header.card-header > div > strong').text()).toMatch('Bootstrap Tooltips')
  })
})
