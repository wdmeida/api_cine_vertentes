const http = require('http');
const app = require('./config/express')();

http.createServer(app).listen(app.get('port'), () => console.log(`Server running in port ${app.get('port')}...`));

module.exports = app;
