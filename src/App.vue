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
    <a href="https://vitejs.dev" target="_blank">
      <img src="./assets/logo.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/logo.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
   <ColorFul/>
   <todo />
   <ArrayControl />
   <formBinding />
   <watch />
   <ref />
  <temp />
</template>




<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
