var express =require("express")
var router=express.Router();
var bodyParser=require("body-parser");
var path=require("path");
var cors=require("cors");
var userRoute = require("./routes/userRoute")
var signUpRoute = require("./routes/signUpRoute")
var productRoute = require("./routes/productRoute")
var cartRoute =require("./routes/cartRoute")
var cartRouteRetrive = require("./routes/cartRouteRetrive") 
var productAllRoute=require("./routes/productAllRoute"); 
var changeQuantityRoute= require("./routes/changeQuantityRoute")
var deleteFromCartRoute = require("./routes/deleteFromCartRoute");
var orderRoute = require("./routes/orderRoute");
var destroyCompleteCartRoute = require("./routes/destroyCompleteCartRoute")
var displayOrderRoute = require("./routes/displayOrderRoute");
var wishlistRoute= require("./routes/wishlistRoute")
var displayWishListRoute= require("./routes/displayWishlistRoute");
var deleteFromWishlistRoute = require("./routes/deleteFromWishlistRoute")
var addNewProductRoute = require("./routes/addNewProductRoute");
var deleteProductRoute =require("./routes/deleteProductRoute");
var sendReplyRoute = require("./routes/sendReplyRoute")
var app=express();
var PORT =3000;
 
app.use(express.static(path.join(__dirname, "public", "dist","melange")))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use("/api/login",userRoute);
app.use("/api/signUp",signUpRoute);
app.use("/api/productsHome",productRoute);
app.use("/api/products",productAllRoute)
app.use("/api/home",cartRoute);
app.use("/api/cart",cartRouteRetrive) 
app.use("/api/quantity",changeQuantityRoute);
app.use("/api/delete",deleteFromCartRoute);
app.use("/api/order",orderRoute);
app.use("/api/destroy",destroyCompleteCartRoute);
app.use("/api/displayOrder",displayOrderRoute);
app.use("/api/wishlist",wishlistRoute);
app.use("/api/displayWishlist",displayWishListRoute)
app.use("/api/deleteFromWishlist",deleteFromWishlistRoute)
app.use("/api/newProduct",addNewProductRoute)
app.use("/api/deleteProduct",deleteProductRoute)
app.use("/api/sendReply",sendReplyRoute)

app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log("server running at ",PORT);
    }
})

 