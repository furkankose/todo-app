<template>
  <i class="fas fa-spinner fa-pulse" :style="{ color, fontSize: size }"></i>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Preloader',
  props: {
    color: {
      type: String,
      default: '#c4c4c4',
    },
    size: {
      type: String,
      default: '32px',
    },
  },
});
</script>
<style scoped></style>
