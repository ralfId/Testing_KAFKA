from src.producer import Producer
from src.utils.constants import KAFKA_TOPIC

producer = Producer(topic=KAFKA_TOPIC, freq=30)

print('------------------------------------')
print('---------- PYTHON PROUCER ----------')
print('------------------------------------')
producer.start_write()