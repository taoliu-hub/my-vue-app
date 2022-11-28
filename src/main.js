import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import permissions from './directives/permissions'
import router from './router'
import store from './store'
import { globalPageLevelMixin } from './mixins/globalPageLevelMixin'

// Vue.config.productionTip = false;  //productionTip设置为 false ，可以阻止 vue 在启动时生成生产提示
// Vue.directive('page-permissions', permissions);
// Vue.mixin(globalPageLevelMixin);

createApp(App)
.use(Antd)
.use(store)
.use(router)
.directive('page-permissions', permissions)
.mixin(globalPageLevelMixin)
.mount('#app')
