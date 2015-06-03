module.exports = function(config) {
  var configuration = {
    frameworks: ['jspm', 'mocha', 'chai'],

    jspm: {
      loadFiles: ['www/app/**/*.spec.js'],
      serveFiles: ['www/app/**/*.js', 'www/app/**/*.html']
    },

    proxies: {
      '/base/': '/base/www/'
    },

    reporters: ['mocha'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  };


  config.set(configuration);
};
