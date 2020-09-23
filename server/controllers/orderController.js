var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";


function placeOrder(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
             
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("orders", (err, coll) => {
                if (err) {
                     
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                     
                    var order = req.body;
                     
                    coll.insertOne({ totalPrice:order.totalPrice, date: order.date, email: order.email, firstName: order.firstName, lastName: order.lastName, zip: order.zip, address1: order.address1, address2: order.address2, cardNumber: order.cardNumber, cardName: order.cardName, cardCVV: order.cardCVV, orderArray: order.orderArray }, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {
                            res.json({ message: true });

                        }
                    })
                }
            })
        }
    })
}


module.exports = { placeOrder };