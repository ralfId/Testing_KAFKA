import json
import time
import datetime

from kafka3 import KafkaProducer
import faker

from .utils.constants import KAFKA_BROKER

class Producer:
    """
    topic: kafka topic name
    freq: time to await for next produce message
    """

    def __init__(self, topic, freq):
        self.topic = topic
        self.freq = freq if isinstance(freq, int) else int(freq)
        self.producer = KafkaProducer(bootstrap_servers=KAFKA_BROKER, value_serializer=lambda x: json.dumps(x).encode('utf-8'), )
        self.fake = faker.Faker()

    def start_write(self):
        for x in range(100):
            dict_data = dict(self.create_data(x))
            self.producer.send(self.topic, value=dict_data)
            print(f'Message {x}: {dict_data}')
            time.sleep(self.freq)

    def create_data(self, id):


        return {
            "id": id,
            "name": self.fake.name(),
            "address": self.fake.address(),
            "created": str(datetime.datetime.now()),
            "producer_type": 'python_producer'
        }
