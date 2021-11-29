import { mount, RouterLinkStub, createLocalVue } from '@vue/test-utils';
import NavBar from '@/components/commons/NavBar.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('NavBar', () => {
  test('Header content', () => {
    const wrapper = mount(NavBar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    const header = wrapper.find('h1');

    expect(header.isVisible()).toBe(true);
    expect(header.element.textContent).toContain('bruggeman.dev');
  });

  test('NuxtLink', () => {
    const wrapper = mount(NavBar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    const link = wrapper.findComponent(RouterLinkStub);

    expect(link.exists()).toBe(true);
    expect(link.props().to).toContain('/');
  });
});
