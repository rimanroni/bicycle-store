import { Router } from "express";
import { bicycleController } from "./bicycle.controller";

const bicycleRouter = Router();

bicycleRouter.post('/products', bicycleController.createBicycleController);
bicycleRouter.get('/products', bicycleController.getBicycleController);
bicycleRouter.get('/products/:productsId', bicycleController.singleBicycle);
bicycleRouter.put('/products/:productsId', bicycleController.updateController);
bicycleRouter.delete('/products/:productsId', bicycleController.deletBicycle)

export default bicycleRouter;