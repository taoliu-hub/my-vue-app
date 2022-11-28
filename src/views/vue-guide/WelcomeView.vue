<template>
    <div class="home">
      <img alt="Vue logo" src="../../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloVue.vue'
  import { telemetryMixin } from '../../mixins/telemetry';
  
  export default {
    name: 'WelcomeView',  
    mixins: [telemetryMixin],
    pageLevelComponent: true,
    components: {
      HelloWorld
    }
  }
  </script>
  