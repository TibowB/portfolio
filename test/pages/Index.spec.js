import { mount } from '@vue/test-utils';
import Index from '~/pages/index.vue';

describe('Page Index', () => {
  test('Child components', () => {
    const wrapper = mount(Index);
    const navBar = wrapper.findComponent('NavBar');

    expect(navBar.exists()).toBe(true);
  });
});
