const { Sequelize } = require("sequelize");
require("dotenv").config();


const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const NAME = process.env.DB_NAME;
const HOST = process.env.DB_HOST;

const sequelize = new Sequelize(NAME, USER, PASSWORD,{
    host: HOST,
    dialect: "mysql"
});

const connect = async() => {
    try{
        await sequelize.authenticate();
        console.log("Database connected successfully")
    }
    catch(err){
        console.log(`Error -> ${err}`)
    }
}

connect();

module.exports = { sequelize, connect }