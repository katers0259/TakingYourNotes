const fs = require('fs');
const PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const app = express();
//const uuidv1 = require('uuid/v1');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.use(express.static(path.join('public')));

app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"))
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"))

})

app.get('./api/index', function (req, res) {

  res.json(db.json);

})
app.get('/api/notes', function(req, res) {

})


app.post('/api/notes', function(req, res) {

})


app.delete('/api/notes/:id', function (req, res) {

})

function gettingJson(){

}

function creatingFile() {

}

function addNote () {

}

function keepData() {

}

function deleteNote() {

}

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});


