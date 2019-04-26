import { mount } from '@vue/test-utils'
import News from '@/components/HelloWorld'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(News)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
