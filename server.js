const express= require('express');
const bodyParser=require('body-parser');
const https = require('https');
const port= 4000;



app=express();

app.use(bodyParser.urlencoded({extended}));


app.get("/" ,function(req,res){
    res.sendFile(__dirname + "/main.html");

   

            // only one res.send can be done :-res.write is written
        })

app.post("/",function(req, res){

    
})

    
 // const url= "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a1f867840ad950d2ab613d60b651f267";

    // https.get(url,function(response){
    //     console.log(response.statusCode);
    //     response.on("data",function(data){
    //         const weatherData=JSON.parse(data);
    //         const temp= weatherData.main.temp;
    //         const description=weatherData.weather[0].description;
    //         const icon=weatherData.weather[0].icon;
    //         const picture="https://openweathermap.org./img/wn"+icon+"@2x.png";

    //         res.write("<h1> the temparature in London is</h1>"+temp +"deg celsius");
    //         res.write("<p>description </p>"+description);
    //         res.write("<img src="+icon+">")



    res.send()

});


app.listen(port,function(){
    console.log("the server is running on the port 4000.")
})