var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

function addToWishlist(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            console.log("error1")
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("wishlist", (err, coll) => {
                if (err) {
                    console.log("errror2")
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                    console.log("error3")
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
                                coll.insertOne({  email: productToBeInserted.email,  id: productToBeInserted.id, image: productToBeInserted.image, name: productToBeInserted.name, price: productToBeInserted.price, imagea: productToBeInserted.imagea, imageb: productToBeInserted.imageb, imagec: productToBeInserted.imagec, type: productToBeInserted.type, description: productToBeInserted.description }, (err, result) => {
                                    if (err) {
                                        console.log("error4")
                                        res.status(500);
                                        res.json({ message: err })
                                    }
                                    else {
                                        console.log("Yes Insertion Succesful")
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