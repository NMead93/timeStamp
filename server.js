var express = require("express");
var app = express();
var moment = require('moment');
var dateObj = {}
var unix = 0
var natDate = ""

app.get("/", function(req, res) {//homepage
    res.sendFile('/home/ubuntu/workspace/timestamp/index.html');
})

app.get("/:query", function(req, res) {
    var unixOrStr = req.params.query
    
    if (isNaN(unixOrStr)) {//process date for passed uri string
        natDate = decodeURI(unixOrStr);
        unix = moment(natDate).unix();
        if (unix === null) {
            natDate == null;
        }
        console.log(natDate)
        console.log(unix)
        
    } else {//Process date for passed unix
        var date = new Date(unixOrStr * 1000);
        unix = unixOrStr
        var natDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
        console.log(date)
        console.log(unix)
        console.log(natDate)
    }
    dateObj = {
            "unix": unix,
            "natural": natDate
        }
    res.send(dateObj)
});

app.listen(8080, function () {
    console.log('Timestamp app listening on port 8080!');
});