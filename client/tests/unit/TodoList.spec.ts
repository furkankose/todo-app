import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  it('renders slots when passed', () => {
    const slotValue = 'Slot text';
    const wrapper = shallowMount(TodoList, {
      slots: { default: slotValue },
    });

    expect(wrapper.text()).toMatch(slotValue);
  });
});
