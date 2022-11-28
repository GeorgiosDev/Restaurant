const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const productionConfig = ([{
  output: {
    publicPath: "/Restaurant/"
  }
}
 
])

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
      
    ],
  },
  plugins: [new ESLintPlugin()],
  watch: true,


};