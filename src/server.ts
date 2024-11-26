import mongoose from "mongoose";
import app from "./app"
import config from "./app/config";
 
 async function main(){
         try{  
            await mongoose.connect(config.dbURL as string);
            app.listen(config.db_port, () => {
                console.log(`Server is Running 🏃‍♀️‍➡️🏃‍➡️ ${config.db_port}`)
              })
         }catch(error){
            console.log(error)
         }
 }

 main();

