const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));
console.log(path.join(__dirname, 'public'));

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/static/index.html`);
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
