import {  producerMsgs } from "./kafka/kafka.producer"

const main = async ()=>{
    await producerMsgs()
}

console.log('--------------------------------');
console.log('-------- NODE PRODUCER ---------');
console.log('--------------------------------');

main()