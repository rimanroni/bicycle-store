import { Router } from "express";
import orderController, { orderRevenue } from "./order.controller";
  
 

const orderRouter = Router();

orderRouter.post('/orders', orderController );
orderRouter.get('/orders/revenue', orderRevenue)
export default orderRouter;
