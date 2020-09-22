var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

console.log("mongocon")

function deleteItem(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            console.log("error1")
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("productsAll", (err, coll) => {
                if (err) {
                    console.log("errror2")
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                    console.log("error3")
                    var productToBeDeleted = req.body;

                    coll.findOne({ id: productToBeDeleted.id }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {

                            if (result) {
                                res.status(200);
                                coll.deleteOne({ id: productToBeDeleted.id }, (err, result) => {
                                    if (err) {
                                        res.status(500);
                                        res.json({ message: err })
                                    }
                                    else {
                                        res.json({ message: true })
                                    }
                                })

                            }
                            else {
                                res.status(201);
                                res.json({ message: false })

                            }

                        }
                    })
                }
            })
        }
    })
}


module.exports = { deleteItem };