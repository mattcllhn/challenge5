var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongoURI = 'mongodb://localhost:27017/heroDB';
var port = process.env.PORT ||3000;
var schema = require('../server/model/myModel.js');
mongoose.connect(mongoURI);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//listens
app.listen(port, function(){
  console.log('listening on:',port);
});//app.listen

//goes out and gets index.html
app.get('/', function(req,res){
  console.log('hello from app.get base url');
  res.sendFile(path.resolve('public/index.html'));


});//app.get

//adds hero to the database
app.post('/addHero',function(req,res){
  console.log('hello from add hero',req.body);
  var heroIn = req.body;
  //builds object to save
  var newHero = new schema({
    alias:heroIn.alias,
    first_name:heroIn.first_name,
    last_name:heroIn.last_name,
    city:heroIn.city,
    power_name:heroIn.power_name
  });//newHero
//saves the object to database
  newHero.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('.save function success');
      res.sendStatus(201);
    }//else
  });//newHero.save
});//app.post

//hopefully sends heroes to the DOM
app.get('/getHero',function(req,res){
  console.log('get hero route hit');
  schema.find({},function(err,results){
    if(err){
      console.log(err);
    }else {
      console.log('app.gethero working');
      res.send(results);
    }
  });
});//app.get
app.use(express.static('public'));
