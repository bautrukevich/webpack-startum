import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import base from './webpack.config.dev.babel.js';

const app = express();
const compiler = webpack(base);

app.use(webpackDevMiddleware(compiler, {
  // publicPath: '/', // Same as `output.publicPath` in most cases.
  stats: {
    colors: true
  }
  // index: 'dist/index.html' // the index path for web server
}));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
