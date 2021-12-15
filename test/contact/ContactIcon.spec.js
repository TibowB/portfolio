import { mount } from '@vue/test-utils';
import ContactIcon from '@/components/contact/ContactIcon.vue';

describe('ContactCard', () => {
  test('All components are present', () => {
    const wrapper = mount(ContactIcon, {
      propsData: {
        url: 'http://www.test.com',
        icon: 'test',
      },
    });
    const link = wrapper.find('a');
    const image = wrapper.find('img');

    expect(link.attributes().href).toEqual('http://www.test.com');
    expect(image.attributes().src).toEqual('/img/test.png');
    expect(image.attributes().alt).toEqual('Icon for test');
  });
});
