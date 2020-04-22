const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', (req, res) => {
  res.send([1, 2, 3]);
});


app.get('/api/cats', (req, res) => {
  res.send({
    cats: [{
      name: 'lilly'
    }, {
      name: 'lucy'
    }],
  })
})

const port = process.env.PORT || 3000;

app.listen(port);
