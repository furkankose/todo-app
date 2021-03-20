<template>
  <div id="app">
    <Container class="mb-80">
      <TodoInput v-model="newTodo" />
    </Container>
    <Container>
      <TodoList>
        <TodoListItem
          v-for="(todo, i) in todos"
          :title="todo.title"
          :is-completed="todo.isCompleted"
          :key="i"
          @complete="isCompleted => updateTodo(i, isCompleted)"
          @delete="deleteTodo(i)"
        />
      </TodoList>
    </Container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Container from './components/Container.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoListItem from './components/TodoListItem.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Container,
    TodoInput,
    TodoList,
    TodoListItem,
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
  methods: {
    updateTodo(index: number, isCompleted: boolean) {
      console.log('updated', index, isCompleted);
    },
    deleteTodo(index: number) {
      console.log('deleted', index);
    },
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

.mb-80 {
  margin-bottom: 80px;
}
</style>
