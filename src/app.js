const express = require('express');
const config = require('./config');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/', routes);

if (require.main === module) {
  app.listen(config.port, () => {
    console.log(`Servidor ejecutándose en puerto ${config.port} (${config.env})`);
  });
}

module.exports = app;