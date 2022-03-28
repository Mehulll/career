const mongoose = require('mongoose');

const URI ="mongodb+srv://MehulJ:2300900M@cluster0.bix28.mongodb.net/careers?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI || URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
