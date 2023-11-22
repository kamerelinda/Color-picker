import { defineStore } from "pinia";

export const useNumbersStore = defineStore('numbers',{
    state: () => ({
       
            numbers: [14,15,16,21,22,23,44,19,27]
        }),
    actions: {
            addNumber(num){
                this.numbers.push(num)
            }
        },
    getters: {
            doubleNum: (state) => {
             return state.numbers.map(num => num * 2)
            },
            filterNum: (state) => {
                return (minNum) => state.numbers.filter(num => num >= minNum)

            }
        }
    }
)