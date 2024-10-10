<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
const newTodoText = ref('')
const todos = ref([])
let nextTodoId = 0


function addNewTodo() {
  if(newTodoText.value !== ''){
    todos.value.push({
      id: nextTodoId++,
      title: newTodoText.value
    })
    newTodoText.value = ''
  }
}
</script>


<template>
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Task </label>
    <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Feed the cat"
    />
    <button >Add</button>
  </form>
  <ul>
    <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
    ></todo-item>
  </ul>
</template>
