import { kafkaInstance, testTopic } from "./kafka.config";
import { faker } from '@faker-js/faker';

const producer = kafkaInstance.producer()

export function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        producer_type: 'nodejs_producer'
    };
}

const produceMessage = async () => {
    await producer.connect();
    await producer.send({
        topic: testTopic,
        messages: [{
            value: JSON.stringify(createRandomUser())
        }]
    });
    await producer.disconnect();
    console.log(`Mensaje enviado`);
    console.log('---------------');
    
    
}

export const producerMsgs = async () => {
    setInterval(produceMessage, 10000)
}