const mongoose=require("mongoose");
const stdSchema=new mongoose.Schema({
    name:String,
    add:String,
    // DOB:String,
    // age:{ type: Number, min: 18, max: 65 },
    gender:{type:String,enum:["Male","Female","Other"]},
    email:String,
    marks:{
        math:Number,
        english:Number,
        hindi:Number
    }
})
module.exports=mongoose.model("StdDetails",stdSchema)

// const mongoose = require("mongoose");
// const productSchema = new mongoose.Schema({
//     title:String,
//     price:String,
//     image:String,
//     details:String
// });
// module.exports=mongoose.model("Product",productSchema);