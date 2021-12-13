import { mount } from '@vue/test-utils';
import HeroText from '@/components/index/HeroText.vue';

describe('HeroText', () => {
  test('Html is rendered properly', () => {
    const wrapper = mount(HeroText);

    expect(wrapper.html()).toContain('Thibault Bruggeman');
    expect(wrapper.html()).toContain(
      "Développeur en formation Full Stack à l'IPI de Lyon"
    );
  });
});
