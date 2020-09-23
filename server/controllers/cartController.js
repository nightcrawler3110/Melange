var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

function addProductToCart(req, res) {
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
                     
                    var productToBeInserted = req.body;

                    coll.findOne({ email: productToBeInserted.email, id: productToBeInserted.id, size:productToBeInserted.size }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {

                            if (result) {
                                res.status(200);
                                coll.updateOne({ email: productToBeInserted.email, id: productToBeInserted.id,size:productToBeInserted.size }, { $inc: { quantity: 1 } }, (err, result) => {
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
                                coll.insertOne({ quantity: productToBeInserted.quantity, email: productToBeInserted.email, size: productToBeInserted.size, id: productToBeInserted.id, image: productToBeInserted.image, name: productToBeInserted.name, type: productToBeInserted.type, price: productToBeInserted.price }, (err, result) => {
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


module.exports = { addProductToCart };