var express=require("express");
var router=express.Router();

var destroyCompleteCartController=require("../controllers/destroyCompleteCartController");
router.post("/", destroyCompleteCartController.destroyCart);
 

module.exports=router;