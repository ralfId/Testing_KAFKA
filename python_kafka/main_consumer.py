from src.consumer import Consumer
from src.utils.constants import KAFKA_TOPIC

consumer = Consumer(topic=KAFKA_TOPIC)

print('-------------------------------------')
print('---------- PYTHON CONSUMER ----------')
print('-------------------------------------')
consumer.star_read()