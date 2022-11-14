/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import permissions from './directives/permissions';
import router from './router';
import { globalPageLevelMixin } from './mixins/globalPageLevelMixin';

Vue.config.productionTip = false;
Vue.directive('page-permissions', permissions);
Vue.mixin(globalPageLevelMixin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
