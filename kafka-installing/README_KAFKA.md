- Entrar en el al contenedor de kafka creado por medio de la consola
 ```
 docker exec -it [nombre contenedor kafka] /bin/sh
 ```

- Entrar en la carpeta "opt"
 ```
 ls
 ```
  ```
 cd  opt
 ```
 ```
 cd bitnami
 ```

 - Entrar en la carpeta kafka_[version]
 ```
 cd kafka_[version]
 ```
  ```
 ls
 ```

 - Entrar en la carpeta bin
  ```
 cd bin
 ```

- Agregar un nuevo topic a kafka utilizando kafka-topics.sh

```
kafka-topics.sh --create --topic test_kafka_topic --partitions 1 --replication-factor 1 --bootstrap-server kafka:9092
```
### Topic: test_kafka_topic 

- Listar los topics existentes
```
kafka-topics.sh --bootstrap-server=localhost:9092 --list
```
- Modificar un topic
```
kafka-topics --alter --topic <nombre-del-topic> --partitions <numero-de-particiones>
```
kafka-topics.sh --alter --topic test_kafka_topic  --partitions 2 --bootstrap-server kafka:9092