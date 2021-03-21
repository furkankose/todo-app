<template>
  <li class="todo-list-item">
    <i
      class="fas checkbox"
      :class="{ 'fa-square': !isCompleted, 'fa-check-square': isCompleted }"
      @click="emitCompleteEvent"
    ></i>

    <span :class="{ completed: isCompleted }" class="todo-list-item-text">
      {{ title }}
    </span>

    <i class="fas fa-trash todo-list-item-button" @click="emitDeleteEvent"></i>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoListItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    emitCompleteEvent() {
      this.$emit('complete', !this.isCompleted);
    },
    emitDeleteEvent() {
      this.$emit('delete');
    },
  },
});
</script>

<style scoped>
.checkbox {
  cursor: pointer;
  color: #757575;
}

.checkbox:hover {
  opacity: 0.8;
}

.todo-list-items {
  padding: 0;
  text-align: left;
  list-style: none;
  padding: 10px 20px;
}

.todo-list-item {
  padding: 12px 0;
  border-bottom: solid thin rgb(228, 228, 228);
}

.todo-list-item:last-child {
  border: none;
}

.todo-list-item-button {
  font-size: 14px;
  color: #757575;
  float: right;
  cursor: pointer;
}

.todo-list-item-text {
  color: #757575;
  margin-left: 10px;
}

.todo-list-item-text.completed {
  color: #c4c4c4;
  text-decoration: line-through;
}
</style>
