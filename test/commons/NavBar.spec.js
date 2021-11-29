import { mount } from '@vue/test-utils';
import NavBar from '@/components/commons/NavBar.vue';

describe('NavBar', () => {
  test('Header', () => {
    const wrapper = mount(NavBar);
    const header = wrapper.find('h1');

    expect(header.isVisible()).toBe(true);
    expect(header.element.innerHTML).toBe('bruggeman.dev');
  });
});
