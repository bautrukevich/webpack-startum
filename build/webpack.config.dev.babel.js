import merge from 'webpack-merge';
import base from './webpack.config.base.babel.js';

const dev = merge(base, {
  devServer: {
    contentBase: './dist',
    stats: { colors: true },
    compress: true,
    watchContentBase: true
  },
  devtool: 'inline-source-map'
});

export default dev;
