<template>
  <div id="app">
    <div id="add-todo" class="container border">
      <input
        type="text"
        id="add-todo-input"
        placeholder="What will you do today?"
      />
      <button id="add-todo-button">ADD</button>
    </div>
    <div class="container border">
      <ul id="todo-items">
        <li class="todo-item" v-for="i in 10" :key="i">
          <input class="checkbox" type="checkbox" />
          <span class="todo-item-text">Item {{ i }}</span
          ><font-awesome-icon icon="trash" class="todo-item-button" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

export default Vue.extend({
  name: 'app',
  components: {},
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
  position: relative;
}

.border {
  background: #fff;
  border-radius: 1px;
  box-shadow: 0px 0px 0px 6px rgba(255, 255, 255, 0.3);
}

#add-todo {
  margin-bottom: 80px;
}

#add-todo:before {
  content: '';
  position: absolute;
  bottom: -40px;
  width: 50px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  left: 50%;
  margin-left: -25px;
}

#add-todo-input {
  width: 100%;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  padding-left: 20px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border: none;
}

#add-todo-input:focus {
  outline: none;
}

#add-todo-button {
  background: #4db7fe;
  position: absolute;
  right: 0px;
  height: 50px;
  width: 120px;
  color: #fff;
  top: 0;
  border: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .container {
    max-width: calc(100% - 64px);
  }
}

#todo-items {
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
  float: right;
  color: #757575 !important;
  font-size: 14px;
  cursor: pointer;
}

.todo-item-text {
  color: #757575;
  margin-left: 10px;
}
</style>
