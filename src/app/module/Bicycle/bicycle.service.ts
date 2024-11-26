import { BicycleType } from "./bicycle.interface";
import bicycleModel from "./bicycle.model";

// create bicycle data 
const createBicycle = async (data:BicycleType) =>{
   const result = await bicycleModel.create(data);
   return result
}
// get all bicycles data 
const getBicycles = async() =>{
    const result = await bicycleModel.find();
    return result ;
};

// get single data by id 
const getSingleBicycle = async (id:string)=>{
    const result = await bicycleModel.findById(id)
    return result
};

const updateBicycle = async (id:string, data:BicycleType) =>{
      const result = await bicycleModel.findByIdAndUpdate(id, data , {new:true});
      return result;
};

const deletBicycle = async(id:string) =>{
       const result = await bicycleModel.findByIdAndDelete(id, {new:true});
       return result
}


export const bicycleService = {
    createBicycle , 
    getBicycles , 
    getSingleBicycle , 
    updateBicycle, 
    deletBicycle
}