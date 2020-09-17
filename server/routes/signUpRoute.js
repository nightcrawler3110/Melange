var express = require("express");
var router = express.Router();
var userController=require("../controllers/userControllers")
router.post("/",userController.insertUser);
module.exports=router;