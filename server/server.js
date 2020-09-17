var express =require("express")
var bodyParser=require("body-parser");
var path=require("path");
var cors=require("cors");
var userRoute = require("./routes/userRoute")
var signUpRoute = require("./routes/signUpRoute")

var app=express();
var PORT =3000;
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use("/api/login",userRoute);
app.use("/api/signUp",signUpRoute);

 

app.listen(PORT,(err)=>{
    if(!err)
    {
        console.log("server running at ",PORT);
    }
})

 