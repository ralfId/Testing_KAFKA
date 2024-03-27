import {  consumeMessages } from "./kafka/kafka.consumer"

const main = async ()=>{
    await consumeMessages()
}

console.log('--------------------------------');
console.log('-------- NODE CONSUMER ---------');
console.log('--------------------------------');
main()