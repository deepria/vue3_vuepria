<script setup>
import { ref , reactive} from 'vue'


const binarysixteen = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
//css prop 정의 및 사용
const colorful = reactive({
  color: '#ffffffff',
  fontSize: '30px'
})


let colorfulInterval;
let colorfulState = false;
function startColorful(){
  if(!colorfulState){
    colorfulInterval =  setInterval(goingColorful,70);
    colorfulState = true;
  }
}
function endColorful(){
  clearInterval(colorfulInterval);
  colorfulState = false;
}
function goingColorful(){
  let color =  '';
  for(let i = 0; i < 8 ; i++){
    color += binarysixteen[getRandomInt(0, 16)];
  }
  colorful.color = '#'+ color;
}


const num = ref({arr :[0,0,0,0,0,0]});
let numStr = ref('0 0 0 0 0 0');
let numberInterval;
let numberState = false;
function startLottery(){
  if(!numberState){
    numberInterval = setInterval(goingRandom,70);
    numberState = true;
  }
}
function endLottery(){
  clearInterval(numberInterval);
  numberState = false;
}
function goingRandom(){
  for(let i = 0; i < 6 ; i++){
    num.value.arr[i] = getRandomInt(1,46)
  }
  numStr.value = num.value.arr.concat().join(' ');
}
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


</script>


<template>
  <div>
    <button @click="startColorful()">Today's color</button>
    <button @click="endColorful()">pick</button>
    <div>
      <span :style="colorful"> ■  </span> {{colorful.color}}
    </div>
    <div :style="colorful">COLOR!</div>
  </div>
  <div>
    <button @click="startLottery()">Today's lottery</button>
    <button @click="endLottery()">pick</button>
    <div>
      <span style="font-size: 40px;">{{numStr}}</span>
    </div>
  </div>
</template>
