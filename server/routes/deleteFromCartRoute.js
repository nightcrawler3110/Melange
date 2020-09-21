var express=require("express");
var router=express.Router();

var deleteFromCartController=require("../controllers/deleteFromCartController");
router.post("/",deleteFromCartController.deleteItem);
 

module.exports=router;