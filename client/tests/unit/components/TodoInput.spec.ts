import { shallowMount } from '@vue/test-utils';
import TodoInput from '@/components/TodoInput.vue';

describe('TodoInput.vue', () => {
  const value = 'New todo';

  it('renders new todo text', async () => {
    const wrapper = shallowMount(TodoInput, { propsData: { value: '' } });
    await wrapper.setProps({ value });

    const input = wrapper.find('.todo-input').element as HTMLInputElement;
    const inputValue = input.value;

    expect(inputValue).toMatch(value);
  });

  it('emits input event when button is clicked', () => {
    const wrapper = shallowMount(TodoInput, { propsData: { value: '' } });
    wrapper.setData({ todo: value });

    const button = wrapper.find('.todo-input-button');
    button.trigger('click');

    expect(wrapper.emitted().input[0][0]).toEqual(value);
  });
});
