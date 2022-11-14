<template>
  <div>Home Page</div>
</template>
<script>
import { telemetryMixin } from '../mixins/telemetry';

export default {
  name: 'HomePage',
  mixins: [telemetryMixin],
  pageLevelComponent: true,
};
</script>
<style></style>
