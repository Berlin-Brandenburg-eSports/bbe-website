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
      script: 'serve',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: { ...getEnvVariables(), PM2_SERVE_PATH: '.', PM2_SERVE_PORT: 5000, PM2_SERVE_SPA: 'true', PM2_SERVE_HOMEPAGE: './index.html' },
    },
  ],
};
