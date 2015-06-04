var configuration = {
  specs: ['www/app/**/*.e2e.js'],
  capabilities: {},

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 360000
  },
};

if(process.env.SHIPPABLE) {
  configuration.capabilities.browserName = 'firefox';
  configuration.baseUrl = 'http://staging.premier.divshot.io/';
  configuration.seleniumAddress = 'http://localhost:4444/wd/hub';
}
else {
  configuration.capabilities.browserName = 'chrome';
  configuration.baseUrl = 'http://localhost:9000';
  configuration.directConnect = true;
  configuration.seleniumAddress = undefined;
}

exports.config = configuration;
