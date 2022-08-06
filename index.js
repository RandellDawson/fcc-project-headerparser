require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  const ipaddress = req.header('x-forwarded-for') || req.ip;
  res.json({
    ipaddress,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});


const listener = app.listen(process.env.PORT, () => {
  console.log('App is listening on port ' + listener.address().port);
});