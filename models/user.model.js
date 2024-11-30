const { client } = require("../utils/pgconnect")

const userModel = `
    CREATE TABLE COLLEGE(
        id SERIAL PRIMARY KEY,
        name varchar(30) NOT NULL,
        email varchar(30) NOT NULL UNIQUE,
        password varchar(16) NOT NULL
    );
`

const userInput = `
    INSERT INTO COLLEGE( name , email , password)
    VALUES ($1,$2,$3);
`

const initializeUserTable = async () => {

    try {
        await client.query(userModel);
        console.log("successfully created college table or already exit");
    } catch (error) {
        console.log(error.message);   
    }

}

const insertUser = async ({name , email , password}) => {
    try {
        
        return await client.query(userInput , [ name , email , password])


    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    initializeUserTable,
    insertUser
}