const port =
  process.env.OPENSHIFT_NODEJS_PORT ||
  process.env.VCAP_APP_PORT ||
  process.env.PORT ||
  process.argv[2] ||
  8080;
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const Gun = require("gun");
const app = express();
const Primus = require("primus");
require("dotenv").config();

const authorize = require("./authorize");

const ROOT_MEMORIES = [
  "https://memory01.usertoken.com",
  "https://memory01.pointlook.com",
  "https://memory01.alex2006hw.com"
];
const CLOUD_MEMORIES = "https://tropospheric.mybluemix.net/gun";

const CHILD_MEMORIES = [
  "https://memory02-memory02-pl.193b.starter-ca-central-1.openshiftapps.com/gun",
  "https://memory02-memory02-pl.193b.starter-ca-central-1.openshiftapps.com/gun",
  "https://memory02-memory02-alex.193b.starter-ca-central-1.openshiftapps.com/gun"
];

const MY_MEMORY =
  "https://tropospheric-tropospheric.193b.starter-ca-central-1.openshiftapps.com/gun";

const DATA_FILE = "data-tropospheric-redhat";

var api_require = require("./serverapi/index"),
  api = api_require.api;
const s3options = JSON.parse(JSON.stringify(process.env.s3options));

app.use(Gun.serve);
app.use(express.static(__dirname + "/../public"));
app.use(favicon(path.join(__dirname, "/../public/images", "favicon.ico")));

app.use("*", (req, res) => api(req, res));
var server = app.listen(port);

// console.log("Server started on port " + port + " peers : ", peerMemories);

var gun = Gun({
  web: server,
  file: DATA_FILE,
  s3: s3options,
  peers: CLOUD_MEMORIES
});

var gunClients = []; // used as a list of connected clients.
gun.on("out", { get: { "#": { "*": "" } } });
// gun.on("out", function(msg) {
//   jsonmsg = JSON.stringify(msg);
//   console.log("1.Gun out : ", jsonmsg);
//   gunClients.forEach(function(client) {
//     client.send(jsonmsg);
//   });
//   this.to.next(msg);
// });

const primusOptions = { iknowclusterwillbreakconnections: true };
const primus = new Primus(server, primusOptions);
// const primus = new Primus(server);
// save current in memory primus.js for frontend access
primus.save(__dirname + "/primus.js");
//
// Add the authorization hook.
//
primus.authorize(authorize);

//
// `connection` is only triggered if the authorization succeeded.
//
primus.on("connection", function connection(spark) {
  gunPeers.push(spark);
  console.log("1.connection : SUCCESS : ", spark.id);
  const SUCCESS = { type: "authenticated", payload: "success" };
  spark.write(SUCCESS);

  spark.on("data", function(msg) {
    console.log("1.spark on data : ", msg);
    gunPeers.forEach(peer => {
      console.log("1.spark on gunPeers : ", msg);
      peer.send(msg);
    });
    msg = JSON.parse(msg);
    console.log("2.spark data : ", msg);
    if ("forEach" in msg)
      msg.forEach(m => {
        console.log("3.spark data : ", m);
        gun.on("in", JSON.parse(m));
      });
    else {
      gun.on("in", msg);
    }
  });

  spark.on("message", function(msg) {
    console.log("1.spark on gunPeers message : ", msg);
    gunPeers.forEach(peer => {
      peer.send(msg);
    });
    msg = JSON.parse(msg);
    console.log("4.spark message : ", msg);
    if ("forEach" in msg)
      msg.forEach(m => {
        console.log("5.spark message : ", m);
        gun.on("in", JSON.parse(m));
      });
    else {
      gun.on("in", msg);
    }
  });

  spark.on("close", function(reason, desc) {
    // gunpeers gone.
    console.log("1.spark on close : ", reason, desc);
    var i = gunPeers.findIndex(function(p) {
      return p === connection;
    });
    if (i >= 0) gunPeers.splice(i, 1);
  });

  spark.on("error", function(error) {
    console.log("WebSocket Error:", error);
  });

  return;
});
