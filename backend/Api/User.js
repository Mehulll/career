
const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
  const { Name } = req.body;
  let user = {};
  user.Name = Name;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

route.post('/save',(req,res)=>{
  console.log("Body",req.body)
  res.json({
    msg: "REcieved"
  }); 
})

route.get('/search',(req,res)=>{
    const searchedField = req.query.name
    User.find({Name:new RegExp('^'+searchedField,'i')})
        .then(data=>{
            res.json(data);
  })
})
module.exports = route;
