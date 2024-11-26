const express = require('express');
const env = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const path = require('path');


app.use('/', express.static(path.join(__dirname, process.env.PATH_SYNTAX)));
app.get('/*', function(req, res){
  res.sendFile(__dirname + process.env.PATH_ROUTE);
});
app.listen(port, () => {
  console.log('listening port ' + port)
});