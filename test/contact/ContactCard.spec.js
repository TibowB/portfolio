import { mount } from '@vue/test-utils';
import ContactCard from '@/components/contact/ContactCard.vue';
import ContactIcon from '@/components/contact/ContactIcon.vue';

describe('ContactCard', () => {
  test('All components are present', () => {
    const wrapper = mount(ContactCard, {
      components: {
        ContactIcon,
      },
    });
    const contactIcons = wrapper.findAllComponents(ContactIcon);

    expect(contactIcons.exists()).toBe(true);
    expect(contactIcons.length).toEqual(3);
  });
});
