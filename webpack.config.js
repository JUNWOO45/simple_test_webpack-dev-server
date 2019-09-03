var path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'  //아래의 devserver에도 동일한 경로를 지정해주어야합니다.
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    publicPath: "/dist/", //절대 경로로 지정하고 앞뒤에 반드시 '/'를 넣어주어야합니다.
    port: 9000
  },
};