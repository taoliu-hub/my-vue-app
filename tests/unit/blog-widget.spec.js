import { shallowMount } from '@vue/test-utils';
import BlogWidget from '@/components/BlogWidget.vue';

describe('BlogWidget.vue', () => {
    it('renders with correct template', () => {
      const wrapper = shallowMount(BlogWidget, {});
      expect(wrapper.text()).toMatch('Blog Widget');
    });
  });
