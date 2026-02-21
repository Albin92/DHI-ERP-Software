import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import app from "./app.js";



const PORT = process.env.PORT || 5000;
connectDB();




app.listen(process.env.PORT,5000, () => 
  console.log("Server running",PORT)
);