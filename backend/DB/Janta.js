
const mongoose = require('mongoose');

// const janta = new mongoose.Schema({
//   Username: {
//     type: String,
//     required : true,
//   },
//   Email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         validate: {
//             validator: function(v) {
//                 return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
//             },
//             message: "Please enter a valid email"
//         },
//         required: [true, "Email required"]
//     },
//   Password :{
//     type: String,
//     required: true,
//   }
// });
const uniqueValidator = require('mongoose-unique-validator')
const janta = new mongoose.Schema({
  username:{
    type:String,
    required : true,
    unique:true,
  },
  email: {
    type: String,
    unique:true,
    required:true

  },
  password: {
    type:String,
    required :true
  }
})

janta.plugin(uniqueValidator, {message: "Email already exist"})

module.exports = Janta = mongoose.model('janta', janta);
