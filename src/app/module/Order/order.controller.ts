import { Request, Response } from "express";
import bicycleModel from "../Bicycle/bicycle.model";
import { orderService } from "./order.service";
import orderModel from "./order.model";
 
 

 const orderController = async (req:Request, res:Response)  =>{
    try{
        const { email, product, quantity, totalPrice } = req.body;

        const bicycleData = await bicycleModel.findById(product);
        if(!bicycleData){
         return res.status(400).json({ message: 'Product not found' });
        }
        
        if(bicycleData.quantity < quantity){
         return res.status(400).json({ message: 'Insufficient stock' });
        }
        bicycleData.quantity -= quantity;
        if(bicycleData.quantity ===0){
            bicycleData.inStock = false;
        }
        await bicycleData.save();
        
      const neworderData   =  {
        email, product, quantity, totalPrice
      }

      const result = await orderService.createOrder(neworderData);
      return  res.status(200).json({
          status: true,
          message: 'Order created successfully',
          data : result
      })
 

    }catch(error){
        res.status(500).json({
            status : false, 
            message : "order request failed", 
            error
        })
    }
 };

export const orderRevenue = async (req:Request, res:Response) =>{
   try{
     const result = await orderModel.aggregate([
      {
        $project: {
          totalPrice: { $multiply: ["$totalPrice", "$quantity"] }
        }
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" }
        }
      }
     ])
     const totalRevenue = result[0]?.totalRevenue || 0;
      res.json({
      message: "Revenue calculated successfully",
      status: true,
      data: {
        totalRevenue
      }
    });
   }catch (error) {
    return res.status(500).json({
      message: "Failed to calculate revenue",
      status: false,
      error,
    });

} };



 

 export default orderController;