var mongoClient=require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

function getAllProducts(req,res)
{
    mongoClient.connect(mongodbUrl,{useUnifiedTopology:true},(err,dbHost)=>{
        if(err)
        {
            res.status(500);
            res.json({message:"Error connecting to the mongodb server"});
        }
        else
        {
            var db=dbHost.db("slDbMean");
            db.collection("products",(err,coll)=>{
                if(err)
                {
                    res.status(500);
                    res.json({message:"Error connecting to the mongodb server"});
                }
                else
                {
                    coll.find({}).toArray((err,data)=>{
                        if(err)
                        {
                            res.status(500);
                            res.json({message:"Error connecting to the mongodb server"});
                        }
                        else
                        {
                             
                            res.json(data);
                        }


                    })
                }


            })
        }

    })

}

module.exports={getAllProducts};