import { OrderType } from "./order.interface";
import orderModel from "./order.model";

const createOrder = async(data:OrderType)=>{
    const result = await orderModel.create(data);
    return result 
};



export const orderService = {
    createOrder
}