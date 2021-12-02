import { mount } from '@vue/test-utils';
import Hero from '@/components/index/Hero.vue';
import HeroText from '@/components/index/HeroText.vue';
import Button from '@/components/commons/Button.vue';

describe('Hero', () => {
  test('All components are present', () => {
    const wrapper = mount(Hero, {
      components: {
        HeroText,
        Button,
      },
    });
    const heroText = wrapper.findComponent(HeroText);
    const buttons = wrapper.findAllComponents(Button);

    expect(heroText.exists()).toBe(true);
    expect(buttons.exists()).toBe(true);
    expect(buttons.length).toEqual(2);
  });
});
