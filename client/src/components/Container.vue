<template>
  <div class="container border">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Container',
});
</script>

<style scoped>
.container {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 768px) {
  .container {
    max-width: calc(100% - 64px);
  }
}

.border {
  background: #fff;
  border-radius: 1px;
  box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.3);
}
</style>
