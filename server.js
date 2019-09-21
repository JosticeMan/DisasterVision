
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