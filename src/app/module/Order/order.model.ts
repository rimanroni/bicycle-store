import mongoose, { Schema,   } from "mongoose";
import { OrderType } from "./order.interface";
import bicycleModel from "../Bicycle/bicycle.model";

const OrderSchema = new Schema<OrderType>({
     email : {
        type : String,
        required:[true, 'email required '] ,
       match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    }, 
    product : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : bicycleModel, 
        required : true
     }, 
     quantity : {
        type
     }
},{
    timestamps : true
})