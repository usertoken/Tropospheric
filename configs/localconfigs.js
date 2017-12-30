"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/////
var HOSTNAME = exports.HOSTNAME = "tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com";
var DATA_FILE = exports.DATA_FILE = "/data/data-" + HOSTNAME;
var DEVICE_ID = exports.DEVICE_ID = false;

var MY_MEMORY = exports.MY_MEMORY = "https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun";
var CLOUD_MEMORIES = exports.CLOUD_MEMORIES = MY_MEMORY;
var DEV_CLOUD_MEMORIES = exports.DEV_CLOUD_MEMORIES = ["https://dev-ut-redhat.193b.starter-ca-central-1.openshiftapps.com/gun", "https://dev-ut-memtwo.193b.starter-ca-central-1.openshiftapps.com/gun"];
var ROOT_MEMORIES = exports.ROOT_MEMORIES = "https://tropospheric.mybluemix.net/gun";
//export const MY_MEMORY = "tropospheric.mybluemix.net/gun";
//export const ROOT_MEMORIES = [
//  "https://memory02.alex2006hw.com/gun",
//  "https://memory02.pointlook.com/gun",
//  "https://memory02.usertoken.com/gun"
//];
//export const PEER_MEMORIES = [
//  "https://tropospheric.mybluemix.net/gun",
//  "https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://memory02-memory02-pl.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-admin-ut-m2-admin-ut.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-alex2006hw.193b.starter-ca-central-1.openshiftapps.com/gun",
//  "https://m2-memtwo.193b.starter-ca-central-1.openshiftapps.com/gun"
//];
/////
var GRAPHQL = exports.GRAPHQL = "https://" + HOSTNAME + "/api/graphql";
var DBFILE = exports.DBFILE = DATA_FILE;
var DEBUG = exports.DEBUG = false;
var DEBUG_LOG_URL = exports.DEBUG_LOG_URL = "https://logentries.com/app/a092e388";