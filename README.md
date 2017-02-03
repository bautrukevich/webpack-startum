<div align="center">
  <h1>Webpack Startum</h1>
  <p>Help you to start a new project with Webpack.</p>
  <br>  
</div>

<div align="center">
  <h2>Features</h2>
</div>

* [Webpack](https://webpack.js.org/) based.
* [PostCSS](http://postcss.org) using for CSS.
* [Pug](https://pugjs.org) using as template engine.
* ES6 as a source.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).
* Using [flow](https://flowtype.org/) for type checking.

<div align="center">
  <h2>Usage</h2>
</div>

First of all you need to install all dependencies (using `npm` or `yarn`):

```
yarn install
```

or

```
npm i
```

All source files live in `src` folder (components, pages). Feel free to modify or create a new ones.

You can add PostCSS plugins. First of all install them through `npm` or `yarn` and after add in `build/plugins.js`.

If you using `vendor` libraries (such as `jquery` or `lodash` as example), you can add them into `build/vendors.js` and they will be in separate `dist/assets/js/vendor.js` file.
