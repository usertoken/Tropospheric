'use strict';

var hypernova = require('hypernova/server');
var path = require('path');
var createGetComponent = hypernova.createGetComponent;


var options = {
  // the limit at which body parser will throw
  bodyParser: {
    limit: 1024 * 1000
  },
  // runs on a single process
  devMode: true,
  // how components will be retrieved,
  getComponent: createGetComponent({
    SimpleComponent: path.resolve(path.join('jobs', 'SimpleComponent.js')),
    aphrodite: path.resolve(path.join('jobs', 'aphrodite/index.js'))
  }),
  //  getComponent: require,
  // if not overridden, default will return the number of reported cpus  - 1
  // getCPUs: undefined,
  // the host the app will bind to
  host: '0.0.0.0',
  // configure the logger
  // logger: {},
  // the port the app will start on
  port: process.env.HYPER_PORT || 3030,
  // default endpoint path
  endpoint: '/batch'
};

hypernova(options);