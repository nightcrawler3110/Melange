var express=require("express");
var router=express.Router();

var wishlistController=require("../controllers/wishlistController");
router.post("/",wishlistController.addToWishlist);
 

module.exports=router;