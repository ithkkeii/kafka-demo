const { Kafka } = require('kafkajs');

const run = async () => {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['localhost:9092'],
    });

    const admin = kafka.admin();
    console.log('Connecting...');
    await admin.connect();
    console.log('Connected');

    await admin.createTopics({
      topics: [
        {
          topic: 'Users',
          numPartitions: 2,
        },
      ],
    });
    console.log('Create successfully!');

    await admin.disconnect();
  } catch (error) {
    console.log(error);
  }
};

run();
