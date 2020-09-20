var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";


function getProducts(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("productsAll", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                       var prod =req.body;
                    coll.find({type:prod.type}).toArray((err, data) => {
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


module.exports = { getProducts };