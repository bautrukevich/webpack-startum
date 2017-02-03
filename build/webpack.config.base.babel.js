import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import entries from './entries';
import vendors from './vendors';
import plugins from './plugins';

const base = {
  entry: {
    main: entries,
    vendor: vendors
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/assets/js')
  },
  resolve: {
    extensions: ['.pcss', '.js', '.pug'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [{
      test: /\.pcss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract([
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: plugins
          }
        }
      ])
    }, {
      test: /\.pug$/,
      exclude: /node_modules/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '../../[name].html'
        }
      }, {
        loader: 'extract-loader'
      }, {
        loader: 'pug-static-loader',
        options: {
          pretty: true
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../css/style.css',
      disable: false,
      allChunks: true
    })
  ]
};

export default base;
