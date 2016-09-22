var express = require('express');
var app = express();
var path = require('path')
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/shopping_basket';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/api/shopping_basket', function(req,res){
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('comments');
    collection.find({}).toArray(function(err, docs) {
      res.json(docs);
      db.close();
    });
  });
})

app.post('/api/shopping_basket', function(req,res){
  MongoClient.connect(url, function(err, db) {
    var collection = db.collection('shopping_basket');
    collection.insert(
      { "description": req.body.description,
        "price": req.body.price,
      }
    )
    res.status(200).end()
    db.close();
  });
})

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});