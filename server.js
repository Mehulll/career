const express = require('express');
const connectDB = require('./DB/Connection');
const cors = require('cors')
const morgan = require('morgan')
const app = express();
const path = require('path')
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  console.log('ahello')

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
  
}

// HTTP request logger
app.use(morgan('tiny'))

app.use('/api/userModel', require('./Api/User'));
// app.use(cors());
const Port = process.env.Port || 5000;
// console.log(process.env)

app.listen(Port, () => console.log(`Server started ${Port}`));

