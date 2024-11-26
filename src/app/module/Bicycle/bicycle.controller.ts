import { Request, Response } from "express";
import { bicycleService } from "./bicycle.service";

const createBicycleController = async (req:Request, res:Response) =>{
     try{
        const data = req.body;
        const result = await bicycleService.createBicycle(data);
        res.status(200).json({
            status : true, 
            message : "Bicycle created successfully", 
            data : result
        })
     }catch(error){
        res.status(500).json({
            status : false, 
            message : "something wrong ", 
            error
        })
     }
};

const getBicycleController = async (req:Request, res:Response) =>{
      try{
          const result = await bicycleService.getBicycles();
          res.status(200).json({
            status : true, 
            message : "successfully get all bicycle ", 
            data : result
          })
      }catch(error){
        res.status(500).json({
            status : false, 
            message : "can't find bicycle data", 
            error
        })
      }
};

 const  singleBicycle  =  async (req:Request, res:Response) =>{
    try{
       const id = req.params.productsId;
       const result = await bicycleService.getSingleBicycle(id)
       res.status(200).json({
        status : true, 
        message : "get single bicycle data successfully", 
        data : result
       })
    }catch(err){
         res.status(500).json({
            status : false, 
            message : "something wrong", 
            err
         })
    }
 };

 const updateController = async(req:Request, res:Response) =>{
           try{
              const id = req.params.productsId;
              const data = req.body
              const result = await bicycleService.updateBicycle(id, data);
              res.status(200).json({
                status : true, 
                message : "successfully update ", 
                result
              })
           }catch(error){
             res.status(500).json({
                status : false,
                message : "something wrong try again", 
                error
             })
           }
 };
 const deletBicycle = async(req:Request, res:Response) =>{ 
     try{
        const id  =  req.params.productsId;
        const result = await bicycleService.deletBicycle(id);
        res.status(200).json({
            status : true, 
            message : 'data delete successfully', 
            data : result
        })
     }catch(erro){
        res.status(500).json({
            status : false, 
            message : "something wrong try again", 
            erro
        })
     }
 }
export const bicycleController = {
    createBicycleController,
    getBicycleController, 
    singleBicycle, updateController, deletBicycle
}