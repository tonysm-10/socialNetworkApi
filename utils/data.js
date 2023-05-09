const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  const emails = [
        'aaren10@gmail.com',
        'aarez10@gmail.com',
        'aarman@gmail.com',
        'aaron@gmail.com',
        'aaron_James@gmail.com',
        'aran10@gmail.com',
        'aarron@gmail.com',
        'aaryan@gmail.com',
        'aaryn@gmail.com',
        'aayan@gmail.com',
        'aazaan@gmail.com',
        'abaan@gmail.com',
        'abbas@gmail.com',
        'abdallah@gmail.com',
        'abdalroof@gmail.com',
        'abdihakim@gmail.com',
        'abdirahman@gmail.com',
        'abdisalam@gmail.com',
        'abdul@gmail.com',
        'abdul-Aziz@gmail.com',
        'abdulbasir@gmail.com',
        'abdulkadir@gmail.com',
        'abdulkarem@gmail.com',
        'smith@gmail.com',
        'jones@gmail.com',
        'coollastname@gmail.com',
        'enter_name_here@gmail.com',
        'zeeeeee@gmail.com',
        'zechariah@gmail.com',
        'zeek@gmail.com',
        'zeeshan@gmail.com',
        'zeid@gmail.com',
        'zein@gmail.com',
        'zen@gmail.com',
        'zendel@gmail.com',
        'zenith@gmail.com',
        'zennon@gmail.com',
        'zeph@gmail.com',
        'zerah@gmail.com',
        'zhen@gmail.com',
        'zhi@gmail.com',
        'zhong@gmail.com',
        'zhuo@gmail.com',
        'zi@gmail.com',
        'zidane@gmail.com',
        'zijie@gmail.com',
        'zinedine@gmail.com',
        'zion@gmail.com',
        'zishan@gmail.com',
        'ziya@gmail.com',
        'ziyaan@gmail.com',
        'zohaib@gmail.com',
        'zohair@gmail.com',
        'zoubaeir@gmail.com',
        'zubair@gmail.com',
        'zubayr@gmail.com',
        'zuriel@gmail.com',
        'xander@gmail.com',
        'jared@gmail.com',
        'grace@gmail.com',
        'alex@gmail.com',
        'mark@gmail.com',
        'tamar@gmail.com',
        'farish@gmail.com',
        'sarah@gmail.com',
        'nathaniel@gmail.com',
        'parker@gmail.com',
  ]
  const thoughtDescriptions = [
    'Decision Tracker',
    'Find My Phone',
    'Learn Piano',
    'Starbase Defender',
    'Tower Defense',
    'Monopoly Money Manager',
    'Movie trailers',
    'Hello world',
    'Stupid Social Media App',
    'Notes',
    'Messages',
    'Email',
    'Compass',
    'Firefox',
    'Running app',
    'Cooking app',
    'Poker',
    'Deliveries',
  ];
  
  const possibleReactions = [
    'I agree with you',
    'I do not agree with you',
    'That is interesting',
    'That is cool',
    'I like that',
    'That makes sense',
    'python',
    'rust',
    'React',
    'React Native',
    'NextJS',
    'Tailwind',
    'Vue',
    'mongodb',
    'sql',
  ];
  
  const users = [];
  
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomName = () =>
    `${getRandomArrItem(names)}`;

    const getRandomEmail = () => {
        return getRandomArrItem(emails);
      }
      
      
  
  // Function to generate random applications that we can add to the database. Includes application tags.
  const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        createdAt: Math.random() < 0.5,
        thoughtText: getRandomArrItem(thoughtDescriptions),
        username: getRandomName(),
        reactions: [...getThoughtReactions(3)],
      });
    }
    return results;
  };
  
  // Create the tags that will be added to each application
  const getThoughtReactions = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        tagBody: getRandomArrItem(possibleReactions),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomName, getRandomThoughts, getRandomEmail };
  