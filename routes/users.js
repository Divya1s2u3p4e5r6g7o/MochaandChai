const express=require('express')
const router=express.Router()
const userctrl=require('../controllers/userctrl')
router.get('/',userctrl.userList)
module.exports=router;