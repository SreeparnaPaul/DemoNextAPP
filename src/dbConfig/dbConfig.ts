import mongoose from "mongoose";
import { connected } from "process";

export async function connect() {
    try {
       mongoose.connect(process.env.MONGO_URI!) ;
       const connection= mongoose.connection;
       connection.on('connected',()=>{
        console.log("Mongodb connected successfully");      
       })
       connection.on('err',(err)=>{
        console.log("Mongodb connection error"+err);
        process.exit();      
       })
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);     
    }
    
}