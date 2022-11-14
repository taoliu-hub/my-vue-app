/* eslint-disable */
export const telemetryMixin = {
  created() {
    // console.log(this.$options);
    this.logTelemetryEvent('Component_load', this.$options.name);
  },
  methods: {
    logTelemetryEvent(type, value) {
      console.log(`${type}:${value} ==> Sending telemetry event to server.`);
    },
  },
};
