var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

function addToWishlist(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {

            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("wishlist", (err, coll) => {
                if (err) {

                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {

                    var productToBeInserted = req.body;

                    coll.findOne({ email: productToBeInserted.email, id: productToBeInserted.id }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {

                            if (result) {
                                res.status(200);
                                res.json({ message: true })

                            }
                            else {
                                res.status(201);
                                coll.insertOne({ email: productToBeInserted.email, id: productToBeInserted.id, image: productToBeInserted.image, name: productToBeInserted.name, price: productToBeInserted.price, imagea: productToBeInserted.imagea, imageb: productToBeInserted.imageb, imagec: productToBeInserted.imagec, type: productToBeInserted.type, description: productToBeInserted.description }, (err, result) => {
                                    if (err) {

                                        res.status(500);
                                        res.json({ message: err })
                                    }
                                    else {

                                        res.json({ message: true })
                                    }
                                })

                            }

                        }
                    })
                }
            })
        }
    })
}


module.exports = { addToWishlist };