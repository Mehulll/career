const express = require('express');
const connectDB = require('./DB/Connection');
const cors = require('cors')
const morgan = require('morgan')
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
// HTTP request logger
app.use(morgan('tiny'))

app.use('/api/userModel', require('./Api/User'));
// app.use(cors());
const Port = process.env.Port || 5000;

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
  
}

app.listen(Port, () => console.log(`Server started ${Port}`));

