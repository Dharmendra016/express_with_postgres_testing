const express = require("express");
const { createUser,getAllUser} = require("../dbQuery/test");
const router = express.Router() ; 


router.post("/register" , createUser); 
router.get("/users",getAllUser)

module.exports =  router;