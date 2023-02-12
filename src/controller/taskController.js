const userModel = require('../model/userModel')
const CronJob = require('cron').CronJob


const createTask = async function(req,res){
       try{
        let reqbody = req.body

           const task = await userModel.create(reqbody)

        let d =new Date();
        let min = d.getMinutes();
        let date = d.getDate();
        let month = d.getMonth()
        let hour = d.getHours()

        CronJob.schedule(`${min+1} ${hour} ${date} ${month + 1} *`,
        () =>{
            console.log(`task completed at ${hour} : ${min+1}`);
        },
        {
            scheduled:true,
            timezone:'Asia/kolkata'
        });
           return res.status(201).send({message:"job scheduled"})

    }catch(error){
        return res.status(500).status({status:false,message:error.message})
    }  
}


module.exports ={createTask}