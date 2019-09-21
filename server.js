
const express = require( 'express' );
const app = express();
const port = 3001;

const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb+srv://cy5914:hello123@disastervision-qrwaf.mongodb.net/test?retryWrites=true&w=majority";

app.get( "/api/hurricanes", ( req, res )  =>
    MongoClient.connect( mongoURL, function(err, db) {
        var dbo = db.db("Disasters");
        var query = {};
        dbo.collection("Hurricanes").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
}) );

app.listen( port, () => console.log( 'Listening on port: ' + port ) );

const express = require('express');
const path = require("path");

const app = express();

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

