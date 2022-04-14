const { calcPath, getEnvVariables } = require('./fileReader');

module.exports = {
  apps: [
    {
      name: '@dev/frontend',
      cwd: calcPath('../dist/apps/frontend'),
      script: 'npm',
      args: 'run start',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: getEnvVariables(),
    },
    {
      name: '@dev/backend',
      cwd: calcPath('../dist/apps/backend'),
      script: 'main.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: getEnvVariables(),
    },
    {
      name: '@dev/dashboard',
      cwd: calcPath('../dist/apps/dashboard'),
      script: 'npx',
      args: 'serve -s ./ -p 5000',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: getEnvVariables(),
    },
  ],
};
