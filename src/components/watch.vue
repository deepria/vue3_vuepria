<script setup>
import { ref, reactive, watch ,watchEffect} from 'vue'


const question = ref('')
const answer = ref('질문에는 보통 물음표가 포함됩니다. ;-)')
const loading = ref(false)


// watch는 ref에 직접 작동합니다
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = '생각 중...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = '오류! API에 도달할 수 없습니다. ' + error
    } finally {
      loading.value = false
    }
  }
})


const x = ref(0)
const y = ref(0)
let sumVal = ref(0)


// 단일 ref
watch(x, (newX) => {
  console.log(`x는 ${newX}입니다`)
})


// getter
watch(
    () => x.value + y.value,
    (sum) => {
      console.log(`x와 y의 합은: ${sum}입니다`)
      sumVal.value = sum;
    }
)


// 여러 소스의 배열
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x는 ${newX}이고 y는 ${newY}입니다`)
})


const obj = reactive({count : 0});
watch( () => obj.count,
    (count) => {
      console.log(`Count는: ${count}입니다`)
    })


const todoId = ref(1);
const data = ref({userId:'',todoId:'',title:'',completed:''})


// watch(
//   todoId,
//   async () => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
//     )
//     data.value = await response.json()
//   },
//   { immediate: true }
//   { flush: 'post' }
//   { flush: 'sync' }
// )


watchEffect(async () => {
  const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
</script>


<template>
  <div>
    <p>
      예/아니오 질문을 하세요:
      <input v-model="question" :disabled="loading" />
    </p>
    <p>{{ answer }}</p>
  </div>
  <div>
    {{ x }} {{ y }} {{ sumVal }}  {{ obj.count }}<br>
    <button @click="x++">x++</button>
    <button @click="y++">y++</button>
    <button @click="obj.count++">cnt++</button>
  </div>


  <div>
    <ul>
      <li>user ID : {{ data.userId }}</li>
      <li>Todo ID : {{ data.id }}</li>
      <li>Title : {{ data.title }}</li>
      <li>Completed : {{ data.completed }}</li>
    </ul>
    <button @click="todoId = todoId > 1 ? todoId -1 : todoId">prev</button>
    <button @click="todoId++">next</button>
  </div>
</template>