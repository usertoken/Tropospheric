"use strict";

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8080;
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var Gun = require("gun");
var app = express();
var levelup = require("levelup");
var leveldown = require("leveldown");

require("gun-level");
var levelDB = levelup("./data/keys-data/", {
  db: leveldown
});

var _require = require("./serverapi/index"),
    api = _require.api;

var s3Options = require("./configs/s3");
var gunPeers = [];
//const gunPeers = ['https://ut.usertoken.com/gun'];
app.use(Gun.serve);
app.use(express.static(__dirname));
app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));

app.use("*", function (req, res) {
  return api(req, res);
});
var server = app.listen(port);
Gun({
  level: levelDB,
  file: false,
  web: server,
  s3: s3Options,
  peers: gunPeers
});

console.log("Server started on port " + port + " with /gun");