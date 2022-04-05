const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

function calcPath(relativePath) {
  return path.join(__dirname, relativePath);
}

const getEnvVariables = () => {
  return dotenv.parse(fs.readFileSync(calcPath('../.env')));
};

module.exports = { calcPath, getEnvVariables };
