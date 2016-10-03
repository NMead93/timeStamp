var express = require("express");
var app = express();
var moment = require('moment');

app.get("/:query", function(req, res) {
    var unixOrStr = req.params.query
    
    if (isNaN(unixOrStr)) {
        var date = new Date(unixOrStr * 1000)
        var convertDate = moment(date).format('MMMM Do YYYY, h:mm:ss a')
        console.log(unixOrStr)
        console.log(date)
        console.log(convertDate)
    }
    
    res.send(dateObj)
})

app.listen(8080, function () {
    console.log('Timestamp app listening on port 8080!');
});