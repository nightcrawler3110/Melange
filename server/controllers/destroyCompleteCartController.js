var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

function destroyCart(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            console.log("error1")
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("cart", (err, coll) => {
                if (err) {
                    console.log("errror2")
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                    console.log("error3")
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