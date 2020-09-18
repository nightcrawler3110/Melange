var express=require("express");
var router=express.Router();

var cartController=require("../controllers/cartController");
console.log("cartroute ");
router.post("/",cartController.addProductToCart);
 

module.exports=router;