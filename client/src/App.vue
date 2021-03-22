<template>
  <div id="app">
    <Container class="mb-80">
      <TodoInput @add="createTodo" />
    </Container>
    <Preloader v-if="isLoading" />
    <InfoMessage v-else-if="isThereAnyError">{{ error }} </InfoMessage>
    <InfoMessage v-else-if="isTodoListEmpty">Nothing to do!</InfoMessage>
    <Container v-else>
      <TodoList>
        <TodoListItem
          v-for="(item, i) in todoList"
          :title="item.title"
          :is-completed="item.isCompleted"
          :key="i"
          @complete="isCompleted => updateTodo(i, isCompleted)"
          @delete="removeTodo(i)"
        />
      </TodoList>
    </Container>
    <vue-snotify />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ApiService } from './api/serviceFactory';
import { Todo } from './todo';
import Container from './components/Container.vue';
import Preloader from './components/Preloader.vue';
import InfoMessage from './components/InfoMessage.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoListItem from './components/TodoListItem.vue';

const todoService = new ApiService('todos');

export default Vue.extend({
  name: 'App',
  components: {
    Container,
    Preloader,
    InfoMessage,
    TodoInput,
    TodoList,
    TodoListItem,
  },
  data(): {
    todoService: ApiService;
    todo: string;
    todoList: Todo[];
    error: string;
    isLoading: boolean;
  } {
    return {
      todoService,
      todo: '',
      todoList: [],
      error: '',
      isLoading: true,
    };
  },
  computed: {
    isThereAnyError(): boolean {
      return this.error !== '';
    },
    isTodoListEmpty(): boolean {
      return this.todoList.length === 0;
    },
  },
  methods: {
    async fetchTodoList(): Promise<any> {
      try {
        this.todoList = await this.todoService.getAll();
      } catch (error) {
        this.error = error;
      }

      this.isLoading = false;
    },
    async createTodo(title: string): Promise<any> {
      this.isLoading = true;
      const todo = { title, isCompleted: false };
      try {
        const createdTodo = await this.todoService.create(todo);
        this.todoList.push(createdTodo);
        this.$snotify.info(`"${title}" created successfully!`);
      } catch (error) {
        this.$snotify.error({ ...error });
      }
      this.isLoading = false;
    },
    async updateTodo(index: number, isCompleted: boolean): Promise<any> {
      this.isLoading = true;
      const todo = { ...this.todoList[index], isCompleted };
      const status = isCompleted ? 'complete' : 'incomplete';
      try {
        await this.todoService.update(todo._id as string, todo);
        this.todoList[index].isCompleted = isCompleted;
        this.$snotify.success(`"${todo.title}" marked as ${status}!`);
      } catch (error) {
        this.$snotify.error({ ...error });
      }
      this.isLoading = false;
    },
    async removeTodo(index: number): Promise<any> {
      this.isLoading = true;
      const { _id, title } = this.todoList[index];
      try {
        await this.todoService.remove(_id as string);
        this.todoList.splice(index, 1);
        this.$snotify.success(`"${title}" removed successfully!`);
      } catch (error) {
        this.$snotify.error({ ...error });
      }
      this.isLoading = false;
    },
  },
  mounted() {
    this.fetchTodoList();
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
