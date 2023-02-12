const express = require('express')
const  CronJob = require('cron').CronJob
const router = express.Router();
const taskController = require('../controller/taskController')


router.post('/create',taskController.createTask)



module.exports = router