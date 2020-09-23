var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";
function displayWishlist(req, res) {
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
                    var user =req.body;
                    coll.find({email:user.email}).toArray((err, data) => {
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


module.exports = { displayWishlist };