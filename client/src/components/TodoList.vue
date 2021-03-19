<template>
  <ul class="todo-items">
    <li class="todo-item" v-for="(item, i) in items" :key="i">
      <input v-model="item.isCompleted" class="checkbox" type="checkbox" />
      <span :class="{ completed: item.isCompleted }" class="todo-item-text">{{
        item.title
      }}</span
      ><font-awesome-icon
        icon="trash"
        class="todo-item-button"
        @click="emitDeleteEvent(i)"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoList',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitDeleteEvent(itemIndex) {
      this.$emit('delete', itemIndex);
    },
  },
});
</script>

<style scoped>
.todo-items {
  padding: 0;
  text-align: left;
  list-style: none;
  padding: 10px 20px;
}

.todo-item {
  padding: 12px 0;
  border-bottom: solid thin rgb(228, 228, 228);
}

.todo-item:last-child {
  border: none;
}

.todo-item-button {
  font-size: 14px;
  color: #757575;
  float: right;
  cursor: pointer;
}

.todo-item-text {
  color: #757575;
  margin-left: 10px;
}

.todo-item-text.completed {
  color: #c4c4c4;
  text-decoration: line-through;
}
</style>
