const monk = require('monk');

const dbUrl = process.env.DB_URL;

 console.log(process.env.NODE_ENV);
 console.log(process.env.DB_URL);

const db = monk(dbUrl);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = db;
