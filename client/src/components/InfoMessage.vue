<template>
  <span :style="{ color, fontSize }">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InfoMessage',
  props: {
    color: {
      type: String,
      default: '#c4c4c4',
    },
    fontSize: {
      type: String,
      default: '32px',
    },
  },
});
</script>
<style scoped>
span {
  display: block;
}
</style>
