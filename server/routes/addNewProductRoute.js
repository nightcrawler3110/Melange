var express=require("express");
var router=express.Router();

var addNewProductController=require("../controllers/addNewProductController");
console.log("cartroute ");
router.post("/",addNewProductController.addNewProduct);
 

module.exports=router;