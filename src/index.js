require('module-alias/register');

const app = require('./config/express.config')();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));

