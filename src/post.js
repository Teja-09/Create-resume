
var express = require('express');
var app = express();

app.use(express.urlencoded());

app.get('/',function(req,res){
    res.send('hello world from GET');
})

app.post('/',function(req,res){
    var name = req.body.Name;
    var address = req.body.address;
    var ph = req.body.ph;
    var dob = req.body.dob;
    var email = req.body.Email;
    var role = req.body.role;


res.send(
    "<!DOCTYPE html>"+
    '<html lang="en">'+
    "<head>"+
        '<meta charset="UTF-8">'+
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">'+
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>'+ 
        "<title>Resume</title>"+
    "</head>"+
    
    
    '<body style="height: 100vh;background-color:rgb(226, 237, 240);">'+
    
        '<div class="container" style="background-color: white; margin-top:3%; padding: 2% 8% 2% 8%; margin-bottom:3%;">'+
            '<div>'+
            '<h1 style="margin:3% 0 1% 0">'+name+'</h1>'+
            '<h4 style="display:inline-block; margin:10px 5px 10px 0">'+ph+'</h4>'+
            '<h4 style="display:inline-block; margin:10px 5px 10px 5px">| '+email+'</h4>' +
            '</div>'+
            '<hr>'+
            '<div>'+
                '<h2>Objective:</h2>'+
                '<p style="font-size: 18px;"><span style="margin-left: 20px">A</span> budding computer science engineer seeking an entry level opportunity in a dynamic organization, preferably for the role of '+role+' which helps in contribution towards towards organization growth with personal growth.  </p>'+
            '</div>'+
    
            '<div style="margin-top: 5%">'+
                '<h2>Education:</h2>'+
                '<h3 style="margin-left: 15px">Degree</h3>'+
                '<ul>'+
                    '<li style="font-size: 18px;">Course: B.Tech, Computer Science and Engineering</li>'+
                    '<li style="font-size: 18px;">Institution & University: Amrita School of Engineering, Amrita Vishwa Vidyapeetham,Coimbatore</li>'+
                    '<li style="font-size: 18px;">Major in computer </li>'+
                    '<li style="font-size: 18px;">CGPA: 9.2/10</li>'+
                '</ul>'+
            '</div>'+
    
            '<div style="margin-top: 5%">'+
                '<h2>Other technical qualifications:</h2>'+
                '<p style="font-size: 18px;"><span style="margin-left: 20px">Certified</span> Android Developer, Genetic Algorithms, Certification on Google Cloud Fundamentals: Core Infrastructure</p>'+
            '</div>'+
    
            '<div style="margin-top: 5%">'+
                '<h2>Achievements:</h2>'+
                '<ul>'+
                    '<li style="font-size: 18px;">Name:Winner of Smart India Hackathon</li>'+
                    '<li style="font-size: 18px;">Topic /Details: Developed an responsive accessable platform of department of Ayush</li> '+
                    '<li style="font-size: 18px;">When & Where: 2019 at Delhi</li>'+
                '</ul>'+
            '</div>'+
    
            '<div style="margin-top: 5%">'+
                '<h2>Extra Curricular Activities: </h2>'+
                '<p style="font-size: 18px;"><span style="margin-left: 20px">ICPC</span> Organization Committee, Internshala Student Ambassador</p>'+
            '</div>'+
    
            '<div>'+
                '<h2>Personal details:</h2>'+
                '<ul>'+
                    '<li style="font-size: 18px;">Date of Birth: '+dob+'</li>'+
                    '<li style="font-size: 18px;">Language proficiency: English – Proficient, Telugu – Fluent</li>'+
                    '<li style="font-size: 18px;">Hobbies / Interests: A sports enthusiast who loves to play cricket and football</li>'+
                    '<li style="font-size: 18px;">Contact Address: '+address+'</li>'+
                '</ul>'+
                '<h4 style="float: right; margin-top:15px; margin-right:70px;">Signature:</h4>'+
            '</div>'+
            '<div>'+
            '</div>'+
        '</div>'+
    '</body>'+
'</html>'



    )}  
);

app.listen(8000);

 
