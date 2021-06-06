'use strict'

// Express App (Routes)
const port = process.env.PORT || 3000
const express = require("express");
const app     = express();
const path    = require("path");
const request = require('request');
const fetch = require('node-fetch');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer');
const fastcsv = require('fast-csv');

// Minimization
const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');
app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/main.html'));
});

// Send Style, do not change
app.get('/style.css',function(req,res){
  //Feel free to change the contents of style.css to prettify your Web app
  res.sendFile(path.join(__dirname+'/public/style.css'));
});

// Send obfuscated JS, do not change
app.get('/index.js',function(req,res){
    fs.readFile(path.join(__dirname+'/public/index.js'), 'utf8', function(err, contents) {
    const minimizedContents = JavaScriptObfuscator.obfuscate(contents, {compact: true, controlFlowFlattening: true});
    res.contentType('application/javascript');
    res.send(minimizedContents._obfuscatedCode);
  });
});

var num = 1;

app.get('/getimg', async(req, res) =>
{
  const data = await fetch('https://xkcd.com/1/info.0.json').then(r => r.json())
  res.send(data)
});

app.get('/getimgnext', async(req, res) =>
{
  num = num + 1;
  const data = await fetch('https://xkcd.com/'+num.toString()+'/info.0.json').then(r => r.json())
  res.send(data)
});

app.get('/getimgprev', async(req, res) =>
{
  num = num - 1;
  if (num <= 0)
  {
    num = 1;
    const data = await fetch('https://xkcd.com/1/info.0.json').then(r => r.json())
    res.send(data);
  }
  else 
  {
    const data = await fetch('https://xkcd.com/'+num.toString()+'/info.0.json').then(r => r.json())
    res.send(data);
  }

});


app.get('/getimgrandom', async(req, res) =>
{
  var Rnum = Math.floor(Math.random() * 1500) + 1; // returns a random integer from 1 to 1500
  const data = await fetch('https://xkcd.com/'+Rnum.toString()+'/info.0.json').then(r => r.json())
  num = Rnum;
  res.send(data);
});


app.get("/getemail", async (req, res) => 
{
  let numb = req.query.number;
  const data = await fetch('https://xkcd.com/'+numb.toString()+'/info.0.json').then(r => r.json())
  num = parseInt(numb);
  res.send(data);
});




app.listen(port);
 

