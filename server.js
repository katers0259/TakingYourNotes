const fs = require('fs');
const PORT = process.env.PORT || 3000;
const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join('public')));
require('./routes/apiRoutes')(app)
require('./routes/htmlroutes')(app)


app.get('/notes', function(req,res) {
  res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.get('*', function(req,res) {
res.sendFile(path.join(__dirname, "public/index.html"))

})

app.get('/api/notes', function(req, res) {
  
})









app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

