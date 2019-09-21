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