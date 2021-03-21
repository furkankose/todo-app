import { shallowMount } from '@vue/test-utils';
import TodoInput from '@/components/TodoInput.vue';

describe('TodoInput.vue', () => {
  const todo = 'todo title';

  it('renders new todo text', () => {
    const wrapper = shallowMount(TodoInput, { data: () => ({ todo }) });

    const input = wrapper.find('.todo-input').element as HTMLInputElement;
    const inputValue = input.value;

    expect(inputValue).toMatch(todo);
  });

  it('emits add event when button is clicked', () => {
    const wrapper = shallowMount(TodoInput, { data: () => ({ todo }) });

    const input = wrapper.find('.todo-input');

    input.trigger('keyup.enter');
    expect(wrapper.emitted().add[0][0]).toEqual(todo);
  });

  it('emits add event when button is clicked', () => {
    const wrapper = shallowMount(TodoInput, { data: () => ({ todo }) });

    const button = wrapper.find('.todo-input-button');
    button.trigger('click');

    expect(wrapper.emitted().add[0][0]).toEqual(todo);
  });
});
