const express=require('express');
const router = require("./api");
const app=new express();

//security middleware import
 const rateLimit=   require('express-rate-limit')
 const  helmet=  require('helmet')
 const mongoSanitize=  require('express-mongo-sanitize')
 const hpp=   require('hpp')
 const cors=  require('cors')


//security middleware importno


//security middleware import rate limit
const limiter= rateLimit ({
    windowMs:15 * 60 * 1000,
    max:100
});
 app.use(limiter)


app.use("/api/v1",router);






//undefined route

app.use((req,res)=>{
    res.status(404).json({Status:"fail",data:"not found"});
});

module.exports = app;

