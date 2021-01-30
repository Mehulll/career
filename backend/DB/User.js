
const mongoose = require('mongoose');

const user = new mongoose.Schema({
  Name: {
    type: String
  }
});

module.exports = User = mongoose.model('user', user);
