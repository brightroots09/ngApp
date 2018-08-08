var express = require("express");
var app = express();
var PORT = process.env.PORT || 3030;

var path = require("path")
var morgan = require("morgan");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var url = "mongodb://root:Budged09@ds115442.mlab.com:15442/videoplayer"

mongoose.connect(url, { useNewUrlParser: true }, function(error){
    if(error) console.error("DB Error====>",error)
    else console.log(`MongoDB connected`)
})

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/ngApp')));

var api = require("./routes/api")

app.use(api)

app.get("*", (req, res, callback) => {
    res.sendFile(path.join(__dirname, "dist/ngApp/index.html"))
})

app.listen(PORT, function(){
    console.log(`Server started at PORT: ${PORT}`);
})