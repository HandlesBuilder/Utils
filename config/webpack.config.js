/*
 * @Author: qinWenMeng
 * @Date: 2020-04-14 16:58:41
 * @GitHub: https://github.com/qinWenMeng
 * @LastEditors: qinWenMeng
 * @LastEditTime: 2020-04-14 17:38:13
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../build'),
  },
};
