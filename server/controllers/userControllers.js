var mongoClient = require("mongodb").MongoClient;
var mongodbUrl = "mongodb+srv://shaily3110:rajat1withshaily1@cluster0.hkchv.mongodb.net/slDbMean?retryWrites=true&w=majority";


function checkUser(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("users", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                    var userToBeChecked = req.body;
                    coll.findOne({ email: userToBeChecked.email, password: userToBeChecked.password }, (err, result) => {
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
                                res.json({ message: false })
                            }

                        }
                    })
                }
            })
        }
    })
}
function insertUser(req, res) {
    mongoClient.connect(mongodbUrl, (err, dbHost) => {
        if (err) {
            res.status(500);
            res.json({ message: "Not able to connect to server" })
        }
        else {
            var db = dbHost.db("slDbMean");
            db.collection("users", (err, coll) => {
                if (err) {
                    res.status(500);
                    res.json({ message: "Not able to connect to connection" })
                }
                else {
                    var userToBeInserted = req.body;
                    coll.findOne({ email: userToBeInserted.email}, (err, result) => {
                        if (err) {
                            res.status(500);
                            res.json({ message: err })
                        }
                        else {

                            if (result) {
                                res.status(200);
                                res.json({ message: false })

                            }
                            else {
                                res.status(201);
                                res.json({ message: true })
                                coll.insertOne({email: userToBeInserted.email, name:userToBeInserted.name,password:userToBeInserted.password})
                            }

                        }
                    })
                }
            })
        }
    })
}


module.exports = { checkUser, insertUser };