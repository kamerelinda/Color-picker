<script setup>
// import { ref,reactive,provide} from 'vue';
import Parent from "./components/Parent.vue"

// const red = ref(0);
// const blue = ref(0)
// const green = ref(0)

//using ref we access the values as color.value.red
// can update entire object 

// const color = ref({
//   red: 0,
//   green: 0,
//   blue: 0
// })

// const selectRandomColor = () =>
// {
//   color.value.red = 166,
//   color.value.green = 166,
//   color.value.blue = 166
// }

// using reactive, we access the values directly without using value
// can only update properties

// const color = reactive({
//   red: 0,
//   green: 33,
//   blue: 15
// })

// using reactive
// const selectRandomColor = () =>
// {
//   color.red = 78,
//   color.green = 56,
//   color.blue = 89
// }

// provide("ages", numbers)

// const addNumber = (num) => {
//   numbers.value.push(num)
// }
</script>

<template>
  <main>
  <Parent/>
  </main>
</template>

<style scoped>
main{
  
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  display: flex;
  flex-direction: column;
}
button{
  background-color: aqua;
}
</style>
