<script setup>
import { ref, onMounted, nextTick,computed} from 'vue'


const obj = ref({
  nested: { count: 0 },
  arr: [],
  slice: []
});


async function unshift() {
  obj.value.nested.count++;
  obj.value.arr.unshift(obj.value.nested.count);
  await nextTick();
}


async function push() {
  obj.value.nested.count++;
  obj.value.arr.push(obj.value.nested.count);
  await nextTick();
}


async function shift(){
  if(obj.value.nested.count>0){
    obj.value.nested.count--;
    obj.value.arr.shift();
    await nextTick();
  }
}


async function pop() {
  if(obj.value.nested.count>0){
    obj.value.nested.count--;
    obj.value.arr.pop();
    await nextTick();
  }
}


async function slice(){
  if(obj.value.nested.count>1){
    obj.value.slice =  obj.value.arr.slice(0 ,2);
    await nextTick();
  }
}


async function sort(){
  obj.value.arr.sort(function (a, b) {
    return a - b;
  });
}


async function reverse(){
  obj.value.arr.reverse();
}


const elements = computed(() => {
  const str = obj.value.arr.concat().join(" ");
  return str;
});


const sliceStr = computed(() => {
  const str = obj.value.slice.concat().join(" ");
  return str;
});
function reset(){
  obj.value.nested.count = 0;
  obj.value.arr = [];
  obj.value.slice = [];
}
// 생명 주기 훅
onMounted(() => {
  console.log(`숫자 세기의 초기값은 ${ obj.value.nested.count } 입니다.`);
});
</script>


<template>
  <div>
    <button @click="unshift">unshift</button>
    <button @click="shift">shift</button>
    <br>
    <button @click="push">push</button>
    <button @click="pop">pop</button>
    <br>
    <button @click="slice">slice (first two)</button>

    <br>
    <button @click="sort">sort</button>
    <button @click="reverse">reverse</button>
    <button @click="reset">reset</button>
    <br>
    count : {{obj.nested.count}}
    <br>
    <span> {{elements}}</span>
    <br>
    <span> {{ sliceStr }}</span>
  </div>
</template>


<style scoped>
button {
  font-weight: bold;
}
</style>


