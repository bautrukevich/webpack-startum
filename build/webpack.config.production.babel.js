import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.config.base.babel.js';

const production = merge(base, {
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

export default production;
