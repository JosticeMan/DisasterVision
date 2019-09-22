
const express = require('express');
const path = require("path");
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb+srv://cy5914:hello123@disastervision-qrwaf.mongodb.net/test?retryWrites=true&w=majority";

app.get( "/api/Hurricanes/*", ( req, res )  =>
    MongoClient.connect( mongoURL, function(err, db) {
        var curURL = req.url.trim( "/" );
        curURL = curURL.split( "/" );
        // var type = curURL[ curURL.length - 2 ]; // Hurricanes | Earthquakes
        var loc = curURL[ curURL.length - 1 ]; // Florida, California, etc
        var dbo = db.db("Disasters");
        var query = { state: loc };
        dbo.collection( "Hurricanes" ).find(query).toArray((err, result) =>  {
            if (err) throw err;
            console.log(result);
            res.send(result);
            db.close();
        });
}) );

app.get( "/api/Earthquakes", ( req, res ) => {
    let mag = 5;
    let minLat = 27.1;
    let minLng = -123.34;
    let maxLat = 43.9;
    let maxLng = -63.1;
    var today = new Date();
    var d = today.getDate();
    var m = today.getMonth() + 1;
    var y = today.getFullYear();
    var end = '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    var start = '' + ( y - 14 ) + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    var URL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson" +
        "&limit=" + 200 +
        "&minlatitude=" + minLat + "&minlongitude="
        + minLng + "&maxlatitude=" + maxLat + "&maxlongitude="
        + maxLng + "&endtime=" + end + "&starttime=" + start + "" +
        "&minmagnitude=" + mag;
    var unirest = require( 'unirest' );
    unirest.get( URL, function (req) {
        res.status( req.status).json(req.body);
    });
});

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

