import { model, Schema } from 'mongoose';
import { BicycleType } from './bicycle.interface';

const bicycleSchema = new Schema<BicycleType>({
  name: {
    type: String,
    required: [true, 'Bicycle name is required'],
    trim: true,
    minlength: [3, 'Bicycle name must be at least 3 characters'],
  },
  brand: { type: String, trim : true },
  price: {
    type: Number ,
     required : [true, 'Price is required '],
     min : [0, 'Price Must Be Positive Number']
   },
  type: {
    type: String,
    enum : {
      values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], 
      message : "{VALUE}  is not a valid bicycle type"
    }, 
    required : [true, "BicycleType  required"]
  },
  description: { 
   type: String, 
   trim : true, 
   maxlength: [500, "Description cannot exceed 500 characters"]
 },
  quantity: {
    type: Number, 
    required : [true, "Quantity is required"], 
    min : [0,  "Quantity must be at least 0"]
    },
  inStock: { 
   type: Boolean, 
   required : true, 
   default : true
 },},{
   timestamps : true
 });


const bicycleModel = model('bicycle', bicycleSchema);

export default bicycleModel;


