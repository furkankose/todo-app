<template>
  <ul class="todo-items">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoList',
});
</script>

<style scoped>
.todo-items {
  padding: 0;
  text-align: left;
  list-style: none;
  padding: 10px 20px;
}
</style>
