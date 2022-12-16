const StdData=require("../modelShm/Std_shm");

const joi=require("@hapi/joi");

const stdvldtn=joi.object({
    name:joi.string().max(15).min(3).required(),
    add:joi.string().required(),
    gender:joi.string().required(),
    email:joi.string().required(),
    marks:joi.required()
})


const alldata = async(req,res)=>{
    try{
        const stddtls=await StdData.find();
        res.json(stddtls);
    }catch (error){
        res.json({message:error});
    }
};

const create = async(req,res)=>{
    try{
        await stdvldtn.validateAsync(req.body)
    }catch(error){
        return res.status(400).send(error.message)
    }
    const addNew=new StdData({
        name:req.body.name,
        add:req.body.add,
        gender:req.body.gender,
        email:req.body.email,
        marks:req.body.marks
    });
    try{
        const savedAll=await addNew.save();
        res.send(savedAll);
    }catch(error){
        res.status(400).send(error);
    }
};

const deleteAll = async(req,res)=>{
    try{
        const removeAll=await StdData.findByIdAndDelete(req.params.Id);
        res.json(removeAll);
    }catch(error){
        res.json({message:error});
    }
};

module.exports={
        alldata,
        // product_details,
        create,
        // product_update,
        deleteAll
    }

// const Product = require("../model/Product");
// Get All Products
// const product_all = async(req,res)=>{
//     try{
//         const products=await Product.find();
//         res.json(products);
//     }catch (error){
//         res.json({message:error});
//     }
// };

// Single product
// const product_details = async(req,res)=>{
//     try{
//         const products=await Product.findById(req.params.productId);
//         res.json(products);
//     }catch (error){
//         res.json({message:error});
//     }
// };

// Add New product
// const product_create = async(req,res)=>{
//     const product=new Product({
//         title:req.body.title,
//         price:req.body.price,
//         image:req.body.image,
//         details:req.body.details
//     });
//     try{
//         const savedProduct=await product.save();
//         res.send(savedProduct);
//     }catch(error){
//         res.status(400).send(error);
//     }
// };

// Update product
// const product_update = async(req,res)=>{
//     try{
//         const product={
//             title:req.body.title,
//             price:req.body.price,
//             image:req.body.image,
//             details:req.body.details
//         };
//         const updatedProduct=await Product.findByIdAndUpdate({_id:req.params.productId},product);
//         res.json(updatedProduct);
//     }catch(error){
//         res.json({message:error});
//     }
// };

// Delete product
// const product_delete = async(req,res)=>{
//     try{
//         const removeProduct=await Product.findByIdAndDelete(req.params.productId);
//         res.json(removeProduct);
//     }catch(error){
//         res.json({message:error});
//     }
// };

// module.exports={
//     product_all,
//     product_details,
//     product_create,
//     product_update,
//     product_delete
// }