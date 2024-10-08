// import express from "express";
// const app = express();
//  import mongoose from "mongoose";
//  import bodyParser from "body-parser";
// import stuRoute from "./routes/studentRoutes.js";
//  mongoose.connect("mongodb://127.0.0.1:27017/khushi").then();

 
//  app.use(bodyParser.json());


//  app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/students", stuRoute)
// app.listen(9000, () => {
//     console.log("server run on 8000 port !!");
// })



//install :-npm i dotenv
//install :-npm i mongoose
import express from "express";
 const app = express();
 const mongoose=require("mongoose");
 require("dotenv").config();
 const port=process.env.PORT || 3000;
  mongoose.connect(process.env.DATABASE_STRING).then(()=>{
    console.log("DB succefully connected");
  });

  app.get("/",(req,res)=>{
    res.send("hello" + process.env.SECRETE_KEY)
  })

 app.listen(port, () => {
         console.log(`server run on ${port}`);
     })