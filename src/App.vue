<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/food-detail"
       v-page-permissions:Favortites.mod1> | Food details</router-link>
      <router-link :to="{name: 'about'}"> | About food details</router-link>
    </nav>
    <router-view />
    <HelloWorld msg="You did it!"></HelloWorld>

  Count is: {{ count }}
  <button @click="status++">{{ status }}</button>
  <input type="text" v-model="name" />
  <input type="checkbox" v-model="active" /> Is active
  <input type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no"/> Benefits selected: {{ benefitsSelected }}
  <input type="text" v-model="selectedValue" /> selectedValue
  <select v-model="selectedValue">
    <option v-for="item in items" :value="item.value">
    {{ item.displayProperty }}
    </option>
  </select>
  <input type="text" v-model="statusIndex" /> statusIndex
  <select v-model="statusIndex">
      <option disabled value="">Please select one</option>
      <option v-for="(status, index) in statusList" :value="index">
          {{ status }}
      </option>
  </select>
  </div>
</template>

<script>

/* eslint-disable */

// import permissions from './directives/permissions'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { telemetryMixin } from './mixins/telemetry'

export default {
  name: 'App',
  // directives: {
  //   permissions, //globe: page-permissions
  // },
  components: {
    HelloWorld,
  },
  mixins: [telemetryMixin],
  created() {
    console.log('Init App: ==>', this.$options.name);
  },

  data() {
    return {
      selectedValue: true,
      statusIndex: true,
      count: 1,
      name: 'Cheryl',
      status: -1,
      active: true,
      benefitsSelected: 'yes',
      items: [
        {value: 'full-time', displayProperty: '1'},
        {value: 'part-time', displayProperty: '2'},
        {value: 'contractor', displayProperty: '3'}
      ],
      statusList: [
        'full-time',
        'part-time',
        'contractor',
      ],
    };
  },
  // `mounted` 是生命周期钩子，之后我们会讲到
  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count) // => 1
    // 数据属性也可以被更改
    this.count = 2
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
