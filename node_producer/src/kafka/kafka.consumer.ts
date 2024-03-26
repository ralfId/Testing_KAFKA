import { KafkaConfig, kafkaInstance } from "./kafka.config";

const consumer = kafkaInstance.consumer({groupId: KafkaConfig.groupId})

export const consumeMessages = async ()=>{
    await consumer.connect();
    await consumer.subscribe({topic: KafkaConfig.topic, fromBeginning: false});
    
    await consumer.run({
        eachMessage: async({topic, partition, message})=>{
            const stringMsg = message.value?.toString()!;
            const jsonMsj = JSON.parse(stringMsg)
            console.log({value: jsonMsj});
            console.log('------------------------------');
            
        }
    })
}