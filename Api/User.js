
const { Router } = require('express');
const express = require('express');
const Janta = require('../DB/Janta')
const User = require('../DB/User');
const route = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authware = require('../Middleware/Auth')

route.post('/save', async (req, res , next) => {
  try{
    const { Username,Email,Password } = req.body;
    let user = {};
    user.Username = Username;
    user.Email = Email;
    user.Password = Password;
    let userModel = new Janta(user);
    await userModel.save();
    res.json(userModel);
  }
  catch(error){
    res.status(400).send(error)
  }
});

route.post('/login', (req, res, next) => {
  let getUser;
  Janta.findOne({
      email: req.body.email,
    })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed',
        });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: 'Authentication failed',
        });
      }
      let jwtToken = jwt.sign(
        {
          email: getUser.email,
          userId: getUser._id,
        },
        'iamheasyouareheasyouareme',
        {
          expiresIn: '1h',
        }
      );
      res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        msg: getUser,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: 'Authentication failed',
      });
    });
});

route.post('/register',(req,res,next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const janta = new Janta({
      username: req.body.username,
      email: req.body.email,
      password: hash
    });
    // console.log(janta);
    janta.save().then((response)=>{
      res.status(201).json({
        message: "User created",
        result: response
    });
    })
    .catch(error => {
      res.status(500).json({
        error
      });
    })
  })

  }
)


route.get('/search',(req,res)=>{
    const searchedField = req.query.name
    User.find({Name:new RegExp('^'+searchedField,'i')})
        .then(data=>{
            res.json(data);
  })
})

// route.route('/all-user'.get(authware, (req,res) => {
//     janta.findOne((error,response) => {
//       if(error) {
//         return next(error);
//       }
//       res.status(200).json(response)
//     })
// }))

route.route('/all-user').get(authware, (req, res) => {
    Janta.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
module.exports = route;
