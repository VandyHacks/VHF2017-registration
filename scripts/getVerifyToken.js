require('dotenv').load();
const mongoose = require('mongoose');
const database = process.env.DATABASE || { url: 'mongodb://localhost:27017' };
const jwt = require('jsonwebtoken');
mongoose.connect(database.url);

const User = require('../app/server/models/User');

const email = 'hacker@school.edu';

User.findOne({
  email: email
}, (err, user) => {
  if (err || !user) {
    throw new Error('Error while finding user with email ' + email);
  }

  console.log(user.generateEmailVerificationToken());
  console.log(user.generateAuthToken());

  const temp = user.generateTempAuthToken();
  console.log(temp);

  console.log(jwt.verify(temp, process.env.JWT_SECRET));
});
