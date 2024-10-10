<script setup>
import {ref} from 'vue';

const obj = ref({
  now: {
    time: '',
    ampm: '',
    dateTime: ''
  }
})


function getNow() {
  const date = new Date();
  // 오전, 오후(AM, PM) 표시
  obj.value.now.ampm = date.getHours() >= 12 ? 'PM' : 'AM'

  // 시분초(00:00:00) 표시
  obj.value.now.time = `${String(date.getHours() % 12 || 12).padStart(2, '0')}:${String(
      date.getMinutes()
  ).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`

  // 년월일(yyyy-mm-dd) 표시
  obj.value.now.dateTime = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`
}

setInterval(getNow, 1000);
</script>
<template>
  <div> {{ obj.now.dateTime }}</div>
  <div> {{ obj.now.time }} {{ obj.now.ampm }}</div>
</template>


