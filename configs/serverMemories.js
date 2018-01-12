'use strict';

/////
//exports.HOSTNAME = "memory02-dev.alex2006hw.com";

var SERVER_PORT = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.env.DEV_SERVICE_PORT || process.argv[2] || 8080;

var SERVER_URL = process.env.API_SERVER_URL || process.env.GRAPHQL_URL || 'http://' + (process.env.GRAPHQL_HOST || 'localhost') + ':' + (process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.env.DEV_SERVICE_PORT || process.env.GRAPHQL_PORT || SERVER_PORT) + '/gun';

exports.ROOT_MEMORIES = 'https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun';
exports.MY_MEMORY = SERVER_URL;

//const MY_MEMORY =
//  !window ||
//  !window.location ||
//  !window.location.protocol ||
//  !window.location.host
//    ? "https://dev-alex2006hw-redhat.193b.starter-ca-central-1.openshiftapps.com/gun"
//    : window.location.protocol + "//" + window.location.host + "/gun";
//
//exports.CLOUD_MEMORIES = MY_MEMORY;

//exports.DEV_CLOUD_MEMORIES = [
//  "https://dev-ut-redhat.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://dev-ut-memtwo.193b.starter-ca-central-1.openshiftapps.com/gun"
//];

//exports.MY_MEMORY = "https://memory02.usertoken.com";
//exports.PEER_MEMORIES = [
//  "https://memory02.pointlook.com/gun",
//  "https://memory02.alex2006hw.com/gun",
//  "https://memory02.usertoken.com/gun"
//];
//exports.CHILD_MEMORIES = [
//  "https://tropospheric.mybluemix.net/gun",
//  "https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://memory02-memory02-pl.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-admin-ut-m2-admin-ut.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-pointlook.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-memtwo.193b.starter-ca-central-1.openshiftapps.com/gun"
//];