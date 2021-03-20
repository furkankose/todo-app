<template>
  <div class="todo-input-wrapper">
    <input
      v-model="todo"
      class="todo-input"
      type="text"
      placeholder="What will you do today?"
    />
    <button @click="emitInputEvent" :disabled="!todo" class="todo-input-button">
      ADD
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      todo: null,
    };
  },
  watch: {
    value(newTodo) {
      this.todo = newTodo;
    },
  },
  methods: {
    emitInputEvent() {
      this.$emit('input', this.todo);
    },
  },
});
</script>

<style scoped>
.todo-input-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.todo-input-wrapper:before {
  content: '';
  position: absolute;
  bottom: -40px;
  width: 50px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  left: 50%;
  margin-left: -25px;
}

.todo-input {
  width: 100%;
  padding: 0 20px;
  height: 50px;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  border: none;
}

.todo-input:focus {
  outline: none;
}

.todo-input-button {
  background: #4db7fe;
  height: 50px;
  width: 120px;
  color: #fff;
  top: 0;
  border: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  cursor: pointer;
}

.todo-input-button:disabled {
  background: #d3d3d3;
}
</style>
