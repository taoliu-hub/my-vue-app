import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/vue-guide/WelcomeView.vue'
import LifeCycleView from '../views/vue-guide/LifeCycleView.vue'
import HomeView from '../views/home/HomeView.vue'
import FoodView from '../views/home/food/FoodView.vue'
import FoodDetailView from '../views/home/food/details/FoodDetailView.vue'
import AntdView from '../views/antd/AntdView.vue'
import IconAntdView from '../views/antd/IconAntdView.vue'
import LoginAntdView from '../views/user/LoginAntdView.vue'
import RegisterAntdView from '../views/user/RegisterAntdView.vue'
import WorkingWithChartsView from '../views/working-menu/WorkingWithChartsView.vue'
import WorkingWithEchartsView from '../views/working-menu/WorkingWithEchartsView.vue'
import WorkingWithExcelsView from '../views/working-menu/WorkingWithExcelsView.vue'
import WorkingWithFormsView from '../views/working-menu/WorkingWithFormsView.vue'
 

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/life-cycle',
    name: 'life-cycle',
    component: LifeCycleView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/AboutView.vue')
  },
  {
    path: '/antd',
    name: 'antd',
    component: AntdView
  },
  {
    path: '/icon-antd',
    name: 'icon-antd',
    component: IconAntdView
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView,
    // child route
    children: [
      {
        path: 'food-detail',  // don't add '/' in path, then if you want to view this page, url shoulde be '/food/food-detail', else url should be '/food-detail'.
        name: 'fooddetail',
        component: FoodDetailView,
      },
    ]
  }, 
  {
    path: '/login-antd',
    name: '/login',
    component: LoginAntdView,
  },
  {
    path: '/register-antd',
    name: '/register',
    component: RegisterAntdView,
  },
  {
    path: '/working-with-charts',
    name: '/working-with-charts',
    component: WorkingWithChartsView,
  },
  {
    path: '/working-with-echarts',
    name: '/working-with-echarts',
    component: WorkingWithEchartsView,
  },
  {
    path: '/working-with-excels',
    name: '/working-with-excels',
    component: WorkingWithExcelsView,
  },
  {
    path: '/working-with-forms',
    name: '/working-with-forms',
    component: WorkingWithFormsView,
  },
]

const router = createRouter({
  // Use history mode for router? (Requires proper server setup for index fallback in production)
  history: createWebHistory(process.env.BASE_URL),
  // 采用 hash 模式
  // history: createWebHashHistory(),
  routes
})

export default router
