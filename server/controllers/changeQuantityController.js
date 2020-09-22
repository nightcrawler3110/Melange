var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

console.log("mongocon")

function changeQuantityCart(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            console.log("error1")
            res.status(500);
            res.json({ message: err })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("cart", (err, coll) => {
                if (err) {
                    console.log("errror2")
                    res.status(500);
                    res.json({ message: err }) 
                }
                else {

                    var cartToBeInserted = req.body;
                    for (var i = 0; i < cartToBeInserted.length; i++) {
                        coll.findOneAndUpdate({ email: cartToBeInserted[i].email, id: cartToBeInserted[i].id, size: cartToBeInserted[i].size }, { $set: { quantity: cartToBeInserted[i].quantity } }, (err, result) => {
                            if (err) {
                                res.status(500);
                                res.json({ message: err }) 
                            }
                        })
                    }
                }
            })
        }
    })
}


module.exports = { changeQuantityCart };

