const express=require('express')
const { app, signup, login, verifyToken, getUser, refreshTocken } = require('../Controllers/controller')
const { PostRegister, getregister, getupdate, processUpdate, postUpdate, approvedUpdate, getSingle, getdelete} = require('../Controllers/RegisterController')
const { postSlot, updatetSlot, createSlot, readSlot } = require('../Controllers/slotControllers')
const router=express.Router()

/* ----------------------------- //login Router ----------------------------- */
router.get('/app',app)
router.post('/signup',signup)
router.post('/login',login)
router.get('/tokenverification',verifyToken,getUser)
router.get('/refresh',refreshTocken,verifyToken,getUser)

/* ---------------------------- //Register Router --------------------------- */
router.post('/register',PostRegister)
router.get('/getregister',getregister)
router.get('/getSingle/:id',getSingle)

router.put('/getUpdate/:id',getupdate)
router.delete('/deleteRegister/:id',getdelete)
router.get("/getUpdate",processUpdate)

router.patch('/postUpdate/:id',postUpdate)
router.get('/postUpdate',approvedUpdate)



/* ----------------------------- //Slot register ---------------------------- */

router.post('/editSlot',postSlot)
router.put('/updateSlot/:id',updatetSlot)

//create slot
router.post('/createSlot',createSlot)
router.get('/readslot',readSlot)


module.exports=router