<script setup>
// import useNumbers from "../composables/useNumbers" 

import {useNumbersStore} from "../stores/numbers"

const {numbers, filterNum} = useNumbersStore()

// const {numbers} = useNumbers();
</script>
<template> 
    <div>
        <h1>GreatGrandChild Component {{ filterNum(16) }}</h1>
        <div class="line"></div>
        </div>
</template>