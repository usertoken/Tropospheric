'use strict';

var _localconfigs = require('./configs/localconfigs');

var _serverMemories = require('./configs/serverMemories');

var hypernova = require('hypernova/server');
var path = require('path');
var createGetComponent = hypernova.createGetComponent;

var Gun = require('gun');

//console.log('1.jobWorker ID : ', DEVICE_ID, 'memories : ', ROOT_MEMORIES);
var HYPER_PORT = process.env.HYPER_PORT || 3030,
    HYPER_HOST = process.env.HYPER_HOST || '0.0.0.0',
    HYPER_ENDPOINT = '/batch',
    HYPER_URL = 'http://' + HYPER_HOST + ':' + HYPER_PORT + HYPER_ENDPOINT;

var gunOptions = {
  peer: _serverMemories.ROOT_MEMORIES
};
var gun = Gun(gunOptions);

gun.on('out', { get: { '#': { '*': '' } } });

var gunLocal = Gun();

var appState = gunLocal.get(_localconfigs.DEVICE_ID);
var cloudState = gun.get(_localconfigs.DEVICE_ID);

var getAppState = function getAppState(key) {
  //  console.log('1.jobWorker getAppState ', key);
  appState.get(key).val(function (v) {
    //    console.log('1.jobWorker getAppState ', key, v);
    return v;
  });
};
var getCloudState = function getCloudState(key) {
  //  console.log('1.jobWorker getCloudState ', key);
  cloudState.get(key).val(function (v) {
    //    console.log('1.jobWorker getCloudState ', key, v);
    return v;
  });
};
var putAppState = function putAppState(key, value) {
  //  console.log('1.jobWorker putAppState ', key, value);
  appState.get(key).put(value);
};
var putCloudState = function putCloudState(key, value) {
  //  console.log('1.jobWorker putCloudState ', key, value);
  cloudState.get(key).put(value);
};

if (!getCloudState('HYPER_PORT')) putCloudState('HYPER_PORT', HYPER_PORT);
if (!getCloudState('HYPER_HOST')) putCloudState('HYPER_HOST', HYPER_HOST);
if (!getCloudState('HYPER_URL')) putCloudState('HYPER_URL', HYPER_URL);

//cloudState
//  .get('HYPER_PORT')
//  .on(port => console.log('1.server hypernova port : ', port));
//cloudState
//  .get('HYPER_HOST')
//  .on(host => console.log('2.server hypernova host : ', host));
var jobs = {
  SimpleComponent: path.resolve(path.join('jobs', 'SimpleComponent.js')),
  aphrodite: path.resolve(path.join('jobs', 'aphrodite/index.js'))
};
var registerComponents = createGetComponent(jobs);

var options = {
  // the limit at which body parser will throw
  bodyParser: {
    limit: 1024 * 1000
  },
  // runs on a single process
  devMode: false,
  // how components will be retrieved,
  getComponent: registerComponents,
  //  getComponent: require,
  // if not overridden, default will return the number of reported cpus  - 1
  // getCPUs: undefined,
  // the host the app will bind to
  host: HYPER_HOST,
  // configure the logger
  // logger: {},
  // the port the app will start on
  port: HYPER_PORT,
  // default endpoint path
  endpoint: HYPER_ENDPOINT
};

hypernova(options);