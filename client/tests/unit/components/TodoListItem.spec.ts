import { shallowMount } from '@vue/test-utils';
import TodoListItem from '@/components/TodoListItem.vue';

describe('TodoListItem.vue', () => {
  const title = 'Another todo';
  const isCompleted = true;

  it('renders incompleted todo title', () => {
    const wrapper = shallowMount(TodoListItem, {
      propsData: { title, isCompleted: false },
    });

    const titleClasses = wrapper.find('.todo-list-item-text').classes();
    expect(titleClasses.includes('completed')).toEqual(false);
  });

  it('renders completed todo title', () => {
    const wrapper = shallowMount(TodoListItem, {
      propsData: { title, isCompleted },
    });

    const titleClasses = wrapper.find('.todo-list-item-text').classes();
    expect(titleClasses.includes('completed')).toEqual(true);
  });

  it('emits complete event', () => {
    const expectedValue = !isCompleted;
    const wrapper = shallowMount(TodoListItem, {
      propsData: { title, isCompleted },
    });
    const checkbox = wrapper.find('input');
    (checkbox.element as HTMLInputElement).checked = expectedValue;

    checkbox.trigger('change');
    expect(wrapper.emitted().complete[0][0]).toEqual(expectedValue);
  });

  it('emits delete event', () => {
    const wrapper = shallowMount(TodoListItem, {
      propsData: { title, isCompleted },
    });
    const button = wrapper.find('.todo-list-item-button');

    button.trigger('click');
    expect(wrapper.emitted().delete).toBeDefined();
  });
});
