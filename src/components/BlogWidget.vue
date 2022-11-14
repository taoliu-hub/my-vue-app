<template>
  <div class="container">
    <p>Blog Widget</p>
    <h1>{{ msg1 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'BlogWidget',
  props: {
    msg1: String,
  },
  created() {
    console.log(`${this.$options.name}: ==> Implementing custom logic for page level component.`);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
      padding-top: 20px;
}
.container {
    background-color: red;
}
</style>
