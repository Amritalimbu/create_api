const express=require("express");
const exp=express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");

dotenv.config();
mongoose.connect(
    process.env.Mdb_Connect,{useUnifiedTopology:true,useNewUrlParser:true},
    console.log("Db connected"))

// Import routes
const sRoutes=require("./routes/stdRoutes");

// Middlewares
exp.use(express.json());
exp.use(cors());

// route Middlewares
exp.use("/api/StudentsDtls", sRoutes);

exp.listen(4000,console.log("server up and running on port 4000!"))