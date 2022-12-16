import { Kafka } from 'kafkajs';
import dotenv from 'dotenv';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
  dotenv.config();

  const kafka = new Kafka({
    clientId: 'notifications-producer',
    brokers: ['stirred-dog-6800-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'c3RpcnJlZC1kb2ctNjgwMCTc0xqv79SSK8ADExbZwh9Tc7t-t9ukwmsPmDYLKFg',
      password:
        '6YljXstNHB7n7pZZxQAVtQAf9A8Lb9vsTNX4EBm1qZJdivEA2wt7CDktsdfSxyRH15NTbQ==',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          recipientId: randomUUID(),
          content: 'Nova solicitação de amizade!',
          category: 'social',
        }),
      },
    ],
  });

  await producer.disconnect();
}

bootstrap();
