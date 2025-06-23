const express= require('express');
const router= express.Router();
const userRegister=require('../routController/userroutController.js');

router.post("/register",userRegister);



export default router;