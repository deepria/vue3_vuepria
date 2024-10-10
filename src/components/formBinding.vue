<script setup>
import { ref } from 'vue'
const name = ref('Vue.js')
let target = ref();


const message = ref('');
const checked = ref(false);
const checkedNames = ref([])
const picked = ref();
const selected = ref();
const selectedMulti = ref([]); //set or array
const selectedVfor = ref('1')
const options = ref([
  { text: '하나', value: '1' },
  { text: '둘', value: '2' },
  { text: '셋', value: '3' }
])
const toggle = ref('팔스');
const dynamicTrueValue = '트루';
const dynamicFalseValue = '팔스';
const obj = ref({index: 0,value:''});


function greet(event) {
  alert(`안녕 ${name.value}!`)
  // 'event'는 네이티브 DOM 이벤트 객체입니다.
  if (event) {
    // target.value = event.target.tagName
    target.value = event.target.tagName
  }
}
</script>


<template>
  <div>
    <button  @click="greet">환영하기</button><br>
    {{ target }}
  </div>


  <div>
    <span >여러 줄 메세지:</span><br>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model.trim().lazy="message" placeholder="여러 줄을 추가해보세요"></textarea>
  </div>
  <div>
    체크된 이름: {{ checkedNames }}<br>
    <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
    <label for="jack">젝</label>
    <input type="checkbox" id="john" value="존" v-model="checkedNames">
    <label for="john">존</label>
    <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
    <label for="mike">마이크</label>
  </div>


  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label><br>
  </div>


  <div>
    <input
        type="checkbox"
        v-model="toggle"
        :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue" />
    선택됨: {{ toggle }}
  </div>


  <div>
    <input type="radio" id="one" value="하나" v-model="picked" />
    <label for="one">하나</label>
    <input type="radio" id="two" value="둘" v-model="picked" />
    <label for="two">둘</label>
    선택됨: {{ picked }}
  </div>


  <div>
    선택됨: {{ selected }}<br>
    <select v-model="selected">
      <option disabled value="">다음 중 하나를 선택하세요</option>
      <option>가</option>
      <option>나</option>
      <option>다</option>
    </select>
  </div>


  <div>
    선택됨: {{ selectedMulti }}<br>
    <select v-model="selectedMulti" multiple>
      <option>이어진</option>
      <option>이충재</option>
      <option>이은재</option>
      <option>이푸름</option>
      <option>이미리</option>
    </select>
  </div>


  <div>
    선택됨: {{ selectedVfor }}
    <select v-model="selectedVfor">
      <option v-for="option in options" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>


  <div>
    <select v-model="obj">
      <!-- 인라인 객체 리터럴 -->
      <option :value="{ index: 1, value:'이어진'}">이어진</option>
      <option :value="{ index: 2, value:'이충재'}">이충재</option>
      <option :value="{ index: 3, value:'이미리'}">이미리</option>
    </select><br>
    선택됨: {{ obj.index }} - {{ obj.value }}
  </div>




</template>


<style scoped>
button {
  font-weight: bold;
}
</style>
