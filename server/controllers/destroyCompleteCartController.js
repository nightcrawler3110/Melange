var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

function destroyCart(req, res) {
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
                     
                    var user = req.body;

                    coll.deleteMany({ email: user.email }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {

                            res.status(201);
                            res.json({ message: true });
                        }
                    })
                }
            })
        }
    })
}


module.exports = { destroyCart };