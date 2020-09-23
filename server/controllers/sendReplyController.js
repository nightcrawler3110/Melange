var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";

 
function sendReply(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
             res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("replies", (err, coll) => {
                if (err) {
                     res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                     var obj = req.body;


                    res.status(201);
                    coll.insertOne({ name:obj.name,email:obj.email,reply:obj.reply }, (err, result) => {
                        if (err) {
                             res.status(500);
                            res.json({ message: err })
                        }
                        else {
                             res.json({ message: true })
                        }

                    })
                }
            })
        }
    })
}


module.exports = { sendReply };