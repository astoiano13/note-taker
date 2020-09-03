var jdb = require("db-json");
var path = require("path");
var express = require("express");

var app = express();
var PORT = process.env.PORT || 1337;

// prepare express to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
//=============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    return db.json(notes);
});


app.post(/api/notes)
//pretty much stuck past this point....




app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
  });