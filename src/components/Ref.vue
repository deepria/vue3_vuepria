<script setup>
import { ref, onMounted ,watchEffect , reactive} from 'vue'


// 엘리먼트 참조를 위해 ref를 선언하십시오.
// 이름은 템플릿 ref 값과 일치해야 합니다.
const input = ref(null)


watchEffect(() => {
  if (input.value === '') {
    input.value.focus()
  } else {
    // v-if에 의해 아직 마운트 되지 않았거나, 마운트 해제된 경우
  }
})
onMounted(() => {
  input.value.focus()
})


const list = ref([])
const itemRefs = ref([])


function push(){
  list.value.push(input.value.value);
  text.value = input.value.value;
  input.value.value  = '';
  // itemRefs.value.forEach(element => {(element => {
  //       })
  //       console.log(element)
  // })
}


let text = ref('asdf');
function wtf(el){
  el.value = text.value;
}


</script>


<template>
  <input ref="input" @keyup.enter="push" />
  <button  @click="push">push</button>


  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>


  <ul >
    <li v-for="item in itemRefs">
      {{ item.textContent }}
    </li>
  </ul>


  last push : <input :ref="(el) => wtf(el)" />
</template>
