const express = require("express");
const { createUser,getAllUser, loginUser} = require("../dbQuery/test");
const router = express.Router() ; 


router.post("/register" , createUser); 
router.get("/users",getAllUser)
router.post("/login" , loginUser)

module.exports =  router;