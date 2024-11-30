const pg = require("pg")
const { Client } = pg
 
const client = new Client({
  user: 'postgres.qlruphidgwrlqeuaithg',
  password: 'Cm2iYANEEV5e0mY3',
  host: 'aws-0-ap-south-1.pooler.supabase.com',
  port: 6543,
  database: 'postgres',
})

const connect = async ()=>{
    try {
        await client.connect();
        return console.log('Successfully connected to pgDB');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {connect, client}

