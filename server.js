const express = require('express');
const path = require("path");

const app = express();

const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb+srv://cy5914:hello123@disastervision-qrwaf.mongodb.net/test?retryWrites=true&w=majority";

app.get( "/api/*", ( req, res )  =>
    MongoClient.connect( mongoURL, function(err, db) {
        var curURL = req.url.split("/");
        var type = curURL[ curURL.length - 2 ]; // Hurricanes | Earthquakes
        var loc = curURL[ curURL.length - 1 ]; // Florida, California, etc
        var dbo = db.db("Disasters");
        var query = { state: loc };
        dbo.collection( type ).find( query ).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
}) );

if (process.env.NODE_ENV === "production") {
    // Express will serve up production assets
    app.use(express.static(path.join(__dirname, "/build")));
    app.get("*", (req, res) => res.sendFile(path.join(__dirname, "build/index.html")));
}

if (process.env.NODE_ENV === "dev") {
    // Express will serve up production assets
    app.use(express.static(path.join(__dirname, "public")));
    app.get("*", (req, res) =>
        res.sendFile(path.join(__dirname, "public/index.html"))
    );
}


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
})

