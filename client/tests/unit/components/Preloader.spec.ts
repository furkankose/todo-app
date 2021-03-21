import { shallowMount } from '@vue/test-utils';
import Preloader from '@/components/Preloader.vue';

describe('Container.vue', () => {
  it('renders the loader with custom color', () => {
    const color = 'black';
    const wrapper = shallowMount(Preloader, {
      propsData: { color },
    });

    const loaderElement = wrapper.find('i').element;
    expect(loaderElement.style.color).toMatch(color);
  });

  it('renders the loader with custom size', () => {
    const size = '16px';
    const wrapper = shallowMount(Preloader, {
      propsData: { size },
    });

    const loaderElement = wrapper.find('i').element;
    expect(loaderElement.style.fontSize).toEqual(size);
  });
});
