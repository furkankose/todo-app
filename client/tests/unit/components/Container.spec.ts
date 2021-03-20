import { shallowMount } from '@vue/test-utils';
import Container from '@/components/Container.vue';

describe('Container.vue', () => {
  it('renders slots when passed', () => {
    const slotValue = 'Slot text';
    const wrapper = shallowMount(Container, {
      slots: { default: slotValue },
    });

    expect(wrapper.text()).toMatch(slotValue);
  });
});
