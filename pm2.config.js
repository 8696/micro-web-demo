module.exports = {
  apps: [
    {
      script: './server.js',
      name: 'micro-web-jd',
      instances: 1,
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      out_file: './logs/pm2/log.log',
      error_file: './logs/pm2/error.log'
    }
  ]
};
