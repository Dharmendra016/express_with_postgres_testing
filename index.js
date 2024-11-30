const express = require("express");
const {connect} = require("./utils/pgconnect");
const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req , res)=> {
    res.send("Hello world")
})

const userRoute = require("./routes/user.routes")
connect();
app.use(userRoute)

app.listen(3000,()=>{
    console.log('server started at port 3000');
})