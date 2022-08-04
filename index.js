require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  res.json({ ipaddress: req.ip, language: "English", software: "NodeJS" });
});

const listener = app.listen(process.env.PORT, () => {
  console.log('App is listening on port ' + listener.address().port);
});