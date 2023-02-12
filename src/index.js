const express = require("express")
const route = require('./route/router')
const mongoose = require('mongoose')
const CronJob = require('cron').CronJob

const app = express();
app.use(express.json())


mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://ashi:jhansi284205@myfirstcluster.tfihevu.mongodb.net/cron-jobs",
{useNewUrlParser:true})

.then(()=>console.log("mongodb connected"))
.catch(err => console.log(err))

app.use('/',route)

app.use((req,res)=>{
    res.status(404).send({status:false,msg:"request not found"})
})

app.listen(process.env.PORT || 3000,function(){
    console.log('express app running on port '+ (process.env.PORT || 3000))
})