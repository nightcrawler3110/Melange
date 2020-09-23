var express = require("express");
var router = express.Router();

var cartController = require("../controllers/cartController");
router.post("/", cartController.addProductToCart);


module.exports = router;