var express=require("express");
var router=express.Router();

var changeQuantityController=require("../controllers/changeQuantityController");
router.post("/",changeQuantityController.changeQuantityCart);
 

module.exports=router;