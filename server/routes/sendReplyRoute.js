var express=require("express");
var router=express.Router();

var sendReplyController=require("../controllers/sendReplyController");
console.log("cartroute ");
router.post("/",sendReplyController.sendReply);
 

module.exports=router;