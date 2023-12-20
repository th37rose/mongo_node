var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

console.log("Attempting to connect to MongoDB...");

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        console.log("Connected successfully to server");
        const dbo = client.db("mydb");
        var myobj = { name: "Company Inc", address: "Highway 37" };

        dbo.collection("customers").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
        });
    })
    .catch(err => {
        console.error("Connection to MongoDB failed:", err);
    });