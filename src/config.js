const config = {
  development: { env: 'development', port: 3000 },
  testing: { env: 'testing', port: 3001 },
  production: { env: 'production', port: process.env.PORT || 80 }
};

module.exports = config[process.env.NODE_ENV || 'development'];
