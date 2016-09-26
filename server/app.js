var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongoURI = 'mongodb://localhost:27017/assignments';
var port = process.env.PORT ||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//listens
app.listen(port, function(){
  console.log('listening on:',port);
});//app.listen

//goes out and gets stuff
app.get('/', function(req,res){
  console.log('hello from app.get base url');
  res.sendFile(path.resolve('public/index.html'));
});
app.use(express.static('public'));
