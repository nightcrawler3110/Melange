var express=require("express");
var router=express.Router();

var deleteProductController=require("../controllers/deleteProductController");
router.post("/",deleteProductController.deleteItem);
 

module.exports=router;