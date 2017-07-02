let express = require('express');
let path = require('path');
let app = express();

app.set('port', process.env.PORT || 8000);

app.get('*', function(req, res) {
	// res.redirect('index.html');
	res.sendFile('index.html', {root: path.join(__dirname, './')})
});

app.listen(app.get('port'), function(err) {
	if (err) {
		console.log('error occured', err);
	}else {
		console.log('magic is happening at PORT 8000');
	}
});