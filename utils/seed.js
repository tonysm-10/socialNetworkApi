const connection = require('../config/connections');
const { User } = require('../models');
const { ThoughtSchema } = require('../models/Thought');
const { getRandomEmail, getRandomName, getRandomThoughts } = require('./data');

// add static method to ThoughtSchema before creating Thought model
ThoughtSchema.statics.deleteMany = async function () {
  await this.deleteMany({});
};

const { Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(10);

  for (let i = 0; i < 20; i++) {
    const username = getRandomName();
    const email = getRandomEmail();
    const friends = getRandomName();

    users.push({
      username,
      email,
      friends,
      thoughts,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
