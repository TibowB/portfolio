import { mount } from '@vue/test-utils';
import Button from '@/components/commons/Button.vue';

const mockRouter = {
  push: jest.fn(),
};

describe('Button', () => {
  test('Click and go to another page', async () => {
    const wrapper = mount(Button, {
      propsData: {
        page: 'contact',
      },
      slots: {
        default: 'My Button',
      },
      mocks: {
        $router: mockRouter,
      },
    });
    const button = wrapper.find('button');

    expect(button.element.innerHTML).toEqual('My Button');

    await button.trigger('click');

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'contact' });
  });
});
