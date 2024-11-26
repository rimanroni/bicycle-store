import express from 'express';
import cors from 'cors'
import bicycleRouter from './app/module/Bicycle/bicycle.router';
const app = express()
 
// middleware 
app.use(express.json());
app.use(cors());

// router 
app.use('/api', bicycleRouter)
 
 app.get('/', (req, res) => {
  res.json({
    status : true, 
    message : "Your Server Is running 👻👻", 
    data : "Hello Developer Welcome 💕❤️"
  })
})


export default app;

