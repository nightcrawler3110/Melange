var express=require("express");
var router=express.Router();

var displayWishlistController=require("../controllers/displayWishlistController");
router.post("/",displayWishlistController.displayWishlist);
 

module.exports=router;