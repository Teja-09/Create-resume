
var express = require('express');
var app = express();

app.use(express.urlencoded());

app.get('/',function(req,res){
    res.send('hello world from GET');
})

app.post('/',function(req,res){
    var name = req.body.Name;
    var Roll = req.body.Roll;
    var ph = req.body.ph;
    var dob = req.body.dob;
    var Email = req.body.Email;
    var role = req.body.role;
res.send(
    "<div style=margin-left:600px> <h3 style=color:red><i style=float:left>Name : </i></h>" +name+"<h3 style=color:red><i style=float:left>Roll : </i></h>"+Roll+"<h3 style=color:red><i style=float:left>Email : </i></h>"+Email+
"<h3 style=color:red><i style=float:left>GPA : </i></h>"+ph+"<h3 style=color:red><i style=float:left>College : </i></h>"+role+"<h1>Good,Your have a great resume</h1>"
  )}  
);


app.listen(8000);

 
