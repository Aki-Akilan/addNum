// webpack.config.js
const path = require('path');

module.exports = {
  entry: './index.cjs',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
