import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

    const Connection =() =>{
    // const MONGODB_URI = "mongodb://127.0.0.1:27017"

    mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on('connected', ()=>{
        console.log('Database connected Susscessfully');
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting to database', error.message);
    })
}

export default Connection;