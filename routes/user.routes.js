const express = require("express");
const { createUser,getAllUser, loginUser, deleteUser, updateUser} = require("../dbQuery/test");
const router = express.Router() ; 


router.post("/register" , createUser); 
router.get("/users",getAllUser)
router.post("/login" , loginUser)
router.get("/delete/:name",deleteUser)
router.post("/update/:email",updateUser)

module.exports =  router;