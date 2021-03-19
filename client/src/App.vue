<template>
  <div id="app">
    <div class="container border mb-80">
      <TodoInput v-model="newTodo" />
    </div>
    <div class="container border">
      <TodoList :items="todos" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

export default Vue.extend({
  name: 'App',
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      newTodo: '',
      todos: [
        {
          title: 'Title 1',
          isCompleted: false,
        },
        {
          title: 'Title 2',
          isCompleted: true,
        },
        {
          title: 'Title 3',
          isCompleted: false,
        },
        {
          title: 'Title 4',
          isCompleted: false,
        },
      ],
    };
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #8f4df8;
}

.container {
  max-width: 500px;
  margin: 20px auto;
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

.mb-80 {
  margin-bottom: 80px;
}
</style>
