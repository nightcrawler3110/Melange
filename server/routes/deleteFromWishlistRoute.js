var express=require("express");
var router=express.Router();

var deleteFromWishlistController=require("../controllers/deleteFromWishlistController");
router.post("/",deleteFromWishlistController.deleteItem);
 

module.exports=router;