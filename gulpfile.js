const uswds = require('@uswds/compile');

uswds.settings.version = 3;

uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './assets/sass';

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;

const webpack = require('webpack');
    
plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
]
