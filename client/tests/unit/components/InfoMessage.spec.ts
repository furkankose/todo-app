import { shallowMount } from '@vue/test-utils';
import InfoMessage from '@/components/InfoMessage.vue';

describe('InfoMessage.vue', () => {
  const slotValue = 'Slot text';

  it('renders slots when passed', () => {
    const wrapper = shallowMount(InfoMessage, {
      slots: { default: slotValue },
    });

    expect(wrapper.text()).toMatch(slotValue);
  });

  it('renders the message with custom color', () => {
    const color = 'black';
    const wrapper = shallowMount(InfoMessage, {
      slots: { default: slotValue },
      propsData: { color },
    });

    const messageElement = wrapper.find('span').element;
    expect(messageElement.style.color).toMatch(color);
  });

  it('renders the message with custom fontSize', () => {
    const fontSize = '16px';
    const wrapper = shallowMount(InfoMessage, {
      slots: { default: slotValue },
      propsData: { fontSize },
    });

    const messageElement = wrapper.find('span').element;
    expect(messageElement.style.fontSize).toEqual(fontSize);
  });
});
