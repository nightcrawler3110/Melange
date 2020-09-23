var express=require("express");
var router=express.Router();

var orderController=require("../controllers/orderController");
router.post("/",orderController.placeOrder);
 

module.exports=router;