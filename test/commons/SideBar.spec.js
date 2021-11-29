import { mount, RouterLinkStub } from '@vue/test-utils';
import SideBar from '@/components/commons/SideBar.vue';

describe('SideBar', () => {
  test('getClass method', async () => {
    const wrapper = mount(SideBar, {
      propsData: {
        position: 'left',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    // Test left position
    expect(wrapper.get('.left-0').isVisible()).toBe(true);
    // Update position to right
    wrapper.setProps({ position: 'right' });
    await wrapper.vm.$nextTick();
    // Test right position
    expect(wrapper.get('.right-0').isVisible()).toBe(true);
  });

  test('Nuxtlink', async () => {
    const wrapper = mount(SideBar, {
      propsData: {
        name: 'projects',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    const link = wrapper.findComponent(RouterLinkStub);
    // Name = projects
    expect(link.exists()).toBe(true);
    expect(link.props().to).toContain('/projects');
    // Update name to contact
    wrapper.setProps({ name: 'contact' });
    await wrapper.vm.$nextTick();
    // Test right position
    expect(link.exists()).toBe(true);
    expect(link.props().to).toContain('/contact');
  });

  test("Number of spans equals name's length", () => {
    const wrapper = mount(SideBar, {
      propsData: {
        name: 'projects',
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    const spans = wrapper.findAll('span');

    expect(spans.length).toEqual(wrapper.props().name.length);
  });
});
