var express = require("express");
var router = express.Router();
var cartRetriveController = require("../controllers/cartRetriveController");

router.post("/", cartRetriveController.getProductFromCart);

module.exports = router;