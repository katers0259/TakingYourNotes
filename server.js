const fs = require('fs');
const PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join('public')));

app.get('./api/notes', function (req, res) {
  const json = gettingJson()
    res.json(json);
  
})


app.get('/notes', function(req,res) {
  res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.get('*', function(req,res) {
res.sendFile(path.join(__dirname, "public/index.html"))

})



function gettingJson() {
  const data = fs.readFileSync(__dirname + '/db/db.json');
  const json = JSON.parser(data);
  return json;
}







app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

