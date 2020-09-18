var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb://localhost:27017/";

console.log("mongocon")

function addProductToCart(req, res) {
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
                    var productToBeInserted = req.body;
                    coll.insertOne({email:productToBeInserted.email, id: productToBeInserted.id, image: productToBeInserted.image, name: productToBeInserted.name, type: productToBeInserted.type, price: productToBeInserted.price }, (err, result) => {
                        if (err) {
                            console.log("error4")
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {
                            console.log("error5")
                            res.json({ message: true })
                        }
                    })
                }
            })
        }
    })
}


module.exports = { addProductToCart };