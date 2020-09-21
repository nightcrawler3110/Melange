var express=require("express");
var router=express.Router();

var displayOrderController=require("../controllers/displayOrderController");
router.post("/",displayOrderController.displayOrder);
 

module.exports=router;