<script setup>
import temp from './components/temp.vue'
import clock from './components/clock.vue'
import todo from './components/TodoList.vue'
import ColorFul from './components/colorful.vue'
import ArrayControl from './components/ArrayControl.vue'
import formBinding from './components/formBinding.vue'
import watch from './components/watch.vue'
import ref from './components/ref.vue'
</script>

<template>
  <clock/>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/logo.svg" class="logo vue" alt="Vue logo"/>
    </a>
  </div>
  <ColorFul/>
  <todo/>
  <ArrayControl/>
  <formBinding/>
  <watch/>
  <ref/>
  <temp/>
</template>


<style scoped>
@import 'assets/main.css';
</style>
