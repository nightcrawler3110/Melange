var express=require("express");
var router=express.Router();
console.log("cartRouteRetrive")
var cartRetriveController=require("../controllers/cartRetriveController");

router.get("/",cartRetriveController.getProductFromCart);

module.exports=router;