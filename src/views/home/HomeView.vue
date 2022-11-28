<template>
  <div class="home">
  <div>
    <label>单向绑定: </label>
    Count is: {{ count }}
  </div>
  <div>
    <label>点击按钮次数: </label>
    <button @click="clickCount++">{{ clickCount }}</button>
  </div>
  <label>v-for 可以直接接受一个整数值:</label>
  <span v-for="n in 10" :key="n">{{ n }}</span><br />
  <div>
    <input type="checkbox" v-model="active" /> Is active
    <input type="checkbox" v-model="benefitsSelected" true-value="yes" false-value="no" /> Benefits selected: {{
        benefitsSelected
    }}
  </div>
  <div>
    <label>v-model绑定: </label>
    <input type="text" v-model="name" />
  </div>
  <div>
    <label>selectedValue: </label>
    <select v-model="selectedValue">
      <option disabled value="">Please select</option>
      <option v-for="item in items" :key="item?.value" :value="item?.value">
        {{ item?.displayProperty }}
      </option>
    </select>&nbsp;&nbsp;
    <input type="text" v-model="selectedValue" />

  </div>
  <div>
    <label>statusIndex: </label>
    <select v-model="statusIndex">
      <option disabled value="">Please select</option>
      <option v-for="(status, index) in statusList" :key="index" :value="index">
        {{ status }}
      </option>
    </select>&nbsp;&nbsp;
    <input type="text" v-model="statusIndex" />
  </div>
  </div>
</template>

<script>
import { telemetryMixin } from '../../mixins/telemetry'

export default {
  name: 'HomeView',  
  mixins: [telemetryMixin],
  pageLevelComponent: true,
  data() {
    return {
      selectedValue: '',
      statusIndex: '',
      count: 1,
      name: 'Cheryl',
      clickCount: -1,
      active: true,
      benefitsSelected: 'yes',
      items: [
        { value: 'full-time', displayProperty: '1' },
        { value: 'part-time', displayProperty: '2' },
        { value: 'contractor', displayProperty: '3' }
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
}
</script>
