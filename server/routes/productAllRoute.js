var express=require("express");
var router=express.Router();

var productAllController=require("../controllers/productAllController");
router.post("/",productAllController.getProducts);
 
module.exports=router;