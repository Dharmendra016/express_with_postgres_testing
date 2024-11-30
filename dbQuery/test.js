const { initializeUserTable, insertUser } = require("../models/user.model");
const { client } = require("../utils/pgconnect")


module.exports.createUser = async (req, res )=>{
    try {
        const {name , email , password} = req.body ;
        
        if(!name|| !email || !password){
            return res.status(400).json({
                success:false,
                message:"no details entered",
            })
        }

        await initializeUserTable();  
        const resp  = await insertUser({name , email , password});

        if(!resp){
            return res.status(400).json({
                success:false,
                message:"Error while inserting data",
            })
        }
        return res.status(200).json({
            success:true,
            message:"successfully create your account",
        })


    } catch (error) {
        console.log(error.message);
    }
}

module.exports.getAllUser = async (req , res) => {
    try {
        const query = `
        SELECT * FROM COLLEGE
        `
        const response = await client.query(query);
        return res.status(200).json({
            success:true,
            message:"successfully get all the user",
            user:response.rows
        })

    } catch (error) {
        console.log(error.message);
    }
}

module.exports.loginUser = async (req , res) => {

    try {
        const {email , password} = req.body ;

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"no details entered",
            })
        }

        const query = `
        SELECT * FROM COLLEGE
        WHERE email = $1 AND password = $2
        `
        const response = await client.query(query , [email , password]);

        if(response.rows.length === 0){
            return res.status(400).json({
                success:false,
                message:"no user found",
            })
        }
        return res.status(200).json({
            success:true,
            message:"successfully login",
            user:response.rows
        })
    } catch (error) {
        console.log(error.message);
    }

}