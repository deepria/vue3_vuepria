<script setup>
defineProps(['title'])
defineEmits(['remove'])
</script>
<template>
  <li>
    {{ title }}
    <button  @click="$emit('remove')">done</button>
  </li>
</template>

