import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app: Express = express();

//middleware
app.use(cors()); //avoid cors error
app.use(express.json()); //get our params from body

//declare my var
const clusterUrl = "mongodb+srv://shanrestudent:shanrestudent@cluster0.zzmoean.mongodb.net/test";

//establish our mongodb connection
mongoose.set('strictQuery', false);

mongoose.connect(clusterUrl!).then(() => {
    console.log("mongodb connected successfully")
}).catch((error) => {
    console.log(error.message)
})

//<-- YOUR ENDPOINTS HERE -->
const ingredientsRoute = require('./routes/ingredientsRoute');
const gelatoRoute = require('./routes/gelatoRoute');
const locationsRoute = require('./routes/locationsRoute');



app.use(ingredientsRoute);
app.use(gelatoRoute);
app.use(locationsRoute);


//listener for the port
app.listen(3000, () => {
    console.log("[server]: server running at http://localhost:" + 3000);
})

