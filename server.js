const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/public/:file', (req,res)=>{
  res.sendFile(path.join(__dirname + '/public/'+ req.params.file))
})

app.listen(port, () => {
  console.log("App listening at http://localhost:" + port)
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})