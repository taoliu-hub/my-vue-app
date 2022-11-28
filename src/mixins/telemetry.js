/* eslint-disable */
export const telemetryMixin = {
  created() {
    // console.log(this.$options);
    this.logTelemetryEvent('telemetryMixin:', `Component_load ==> ${this.$options.name}`);
  },
  methods: {
    logTelemetryEvent(type, value) {
      console.log('telemetryMixin:', `${type}:${value} ==> Sending telemetry event to server.`);
    },
  },
};
