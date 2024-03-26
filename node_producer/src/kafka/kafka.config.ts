import { Kafka}  from 'kafkajs';

interface KafkaConfig {
    brokers: string[];
    clientId: string;
    groupId: string;
    topic: string;
}

export const KafkaConfig: KafkaConfig = {
    brokers: ['127.0.0.1:9092'],
    clientId: 'kafka',
    groupId: 'kafka_consumer_1',
    topic: 'test_kafka_topic'
}

export const kafkaInstance = new Kafka({
    clientId: KafkaConfig.clientId,
    brokers: KafkaConfig.brokers,
})

export const testTopic= 'test_kafka_topic';