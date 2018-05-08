
var express     = require("express"),
    path        = require("path"),
    bodyParser  = require("body-parser"),
    session     = require("express-session"),
    port        = 5000,
    root        = __dirname,
    app         = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'sandraocks'}));

app.use(express.static(path.join(root, "./static")));

app.set('views', path.join(root, "./views"));
app.set('view engine', 'ejs');


 app.get('/', function(req, res) {
   
    
    res.render("index");
});


app.post('/result', function(req, res) {
    
    // name = req.body.name;
    // places = req.body.places;
    // language = req.body.language;
    // textarea = req.body.textarea;

    res.render("result", {data: req.body})
});




app.listen(8000, function() {
 console.log("listening on port 8000");
});
