// var express = require('express');
// var app = express();

// app.use(express.urlencoded());

// app.get('/',function(req,res){
//     res.send('hello world from GET');
// })

// app.post('/',function(req,res){
    
//     res.send(<h1>"username : " + req.param('Name',null)</h1>)
//     // res.send("Roll : " + req.param('Roll',null))
//     // res.send("Email : " + req.param('Email',null))
//     // res.send("gpa : " + req.param('gpa',null))
//     // res.send("clg : " + req.param('clg',null))
//     // res.send("dob : " + req.param('dob',null))
// })
// app.listen(8000);



var fs = require('fs');
var express = require('express');
// var formidable = require('formidable');
var url=require('url');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function (req, res){

  // res.sendFile(__dirname + '/Ptry.js');
//   var q=url.parse(req.url,true);
//     var name1=q.query;
//     var y=name1.school;
//     res.write(y);.
    res.send('hello world from GET');
});
app.post('/',function(req,res)
{
    var name=req.body.Name;
    var roll=req.body.Roll;
    var email=req.body.Email;
    res.send("<h1>name</h1>"+name+"<h1>gender</h1>"+roll);
    
    
});


app.listen(8000);