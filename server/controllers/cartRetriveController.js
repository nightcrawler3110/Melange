var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";


function getProductFromCart(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("cart", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                       console.log("static data",req.body);
                    coll.find({}).toArray((err, data) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: "Error connecting to the mongodb server" });
                        }
                        else {
                             
                            res.json(data);
                        }
                    })
                }
            })
        }
    })
}


module.exports = { getProductFromCart };