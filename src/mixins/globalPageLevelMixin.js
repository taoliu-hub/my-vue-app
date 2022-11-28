/* eslint-disable */
export const globalPageLevelMixin = {
  created() {
    // console.log(this.$options);
    if(this.$options.pageLevelComponent) {
      console.log('globalPageLevelMixin: ', `${this.$options.name}: ==> Implementing custom logic for page level component.`);
    }
  },
  destroyed() {
    this.logPageLevelEvent('Component_load', this.$options.name);
  },
  methods: {
    logPageLevelEvent(type, value) {
      console.log('globalPageLevelMixin: ', `${type}:${value} ==> Leaving.`);
    },
  },
};
