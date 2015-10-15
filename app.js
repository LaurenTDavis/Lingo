// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var googleTranslate = require('google-translate')('AIzaSyDjotSVF_hLHDP0cZVzujbIuQcstrkX3Sc')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('html/translate.html', {root : './public'});
});

app.get('/translate', function(req, res) {
	googleTranslate.translate('Mi nombre es Brandon', 'en', function(err, translation) {
	res.send(translation.translatedText);
	});
})




app.post('/', function(req, res) {
	console.log(req.body);
	googleTranslate.translate(req.body.word, req.body.newLang, function(err, translation) {
	res.send(translation.translatedText);
	});
})




// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})