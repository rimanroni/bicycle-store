import dotenv from 'dotenv';
import path from 'path'


dotenv.config({path:path.join(process.cwd(),'.env')});


export default {
    db_port : process.env.DBPORT, 
    dbURL : process.env.DB_URL
}

