var express=require("express");
var router=express.Router();

var orderController=require("../controllers/orderController");
console.log("cartroute ");
router.post("/",orderController.placeOrder);
 

module.exports=router;