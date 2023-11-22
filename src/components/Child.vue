<script setup>
import GrandChild from './GrandChild.vue';
import {useNumbersStore} from "../stores/numbers"

const {numbers, addNumber} = useNumbersStore()

// const {numbers, addNumber, filterNum} = useNumbers();

</script>

<template> 
    <div>
        <h1>Child Component {{ numbers }}</h1>
        <button @click="addNumber(9)">Add</button>
        <div class="line"></div>
        <GrandChild />
        </div>
</template>