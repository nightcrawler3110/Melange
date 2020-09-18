var express=require("express");
var router=express.Router();
console.log("productroute")
var productController=require("../controllers/productController");

router.get("/",productController.getAllProducts);

module.exports=router;