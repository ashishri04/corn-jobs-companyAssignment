const mongoose = require('mongoose')

 const userSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    date:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
  
      }
 })

 module.exports = mongoose.model('function',userSchema)  