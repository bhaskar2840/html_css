
const express = require('express');
const bodyParser= require('body-parser'); // always write name in camel case in javascript , also parsing means 
// cutting out from something so in this we will shorten the output given by our console to the things that we want

const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true})); // we used urlencoded to get the response from html files only ,
//                                                  bodyParser.text only takes out the test files only


app.get('/',function(req, res){              // get is to get something from the website and req is what we send to the browser
    res.send('<h1> cool it is very nice to see you</h1>');
    res.sendFile(__dirname+"/index.html");    /* and  response is what we recieve , "/" is the path specified only /
        __dirname will give the location of the file we are working in so need to find complete path  means that the location is the home page*/ 
    });


app.post('/',function(req,res){
    var num1 = Number(req.body.num1); // we add NUMBER as the body parse will return string :- need to convert into number
    var num2 = Number(req.body.num2);

    var result = num1+num2;
    res.send("the result of the calulation is "+ result);
});                                       // post is used to post some data to website or server



app.listen(port, function(err){
    if (err){console.log('error in running the server',err);}
    console.log('app running',port);
});

// a important take away form this project is that we are using a calulation inside our server and thus no
// body else is allowed to view the calulation through our html code thus preventing our main functions from been seen.