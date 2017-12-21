var port =
  process.env.OPENSHIFT_NODEJS_PORT ||
  process.env.VCAP_APP_PORT ||
  process.env.PORT ||
  process.argv[2] ||
  8080;
var host =
  process.env.OPENSHIFT_NODEJS_HOST ||
  process.env.VCAP_APP_HOST ||
  process.env.HOST ||
  "localhost";

var express = require("express");
var proxy = require("express-http-proxy");
var http = require("http");
const favicon = require("serve-favicon");
const path = require("path");
var app = express();
var server = http.createServer(app);
require("dotenv").config();

const s3options = JSON.parse(JSON.stringify(process.env.s3options));
var Gun = require("gun");
var gun = Gun({
  web: server,
  s3: s3options
});

app.use(express.static(__dirname + "/../public"));
app.use(favicon(path.join(__dirname, "/../public/images", "favicon.ico")));

app.use(Gun.serve);
app.use(proxy(host + ":8080"));
server.listen(port);

console.log("Server started on port " + port + " with /gun");
