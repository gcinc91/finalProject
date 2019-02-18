// Load required modules
// var http    = require("http");              // http server core module
// var express = require("express");           // web framework external module
var serveStatic = require('node-static');  // serve static files
var socketIo = require("socket.io");        // web socket external module

// This sample is using the easyrtc from parent folder.
// To use this server_example folder only without parent folder:
// 1. you need to replace this "require("../");" by "require("easyrtc");"
// 2. install easyrtc (npm i easyrtc --save) in server_example/package.json

// Load required modules
var https   = require("https");     // https server core module
var fs      = require("fs");        // file system core module
var express = require("express");   // web framework external module
// var io      = require("socket.io"); // web socket external module
var easyrtc = require("..");   // EasyRTC external module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express();
httpApp.use(express.static(__dirname + "/static/"));

// Start Express https server on port 8443
var webServer = https.createServer(
{
    key:  fs.readFileSync("../server_example/certs/localhost.key"),
    cert: fs.readFileSync("../server_example/certs/localhost.crt")
},
httpApp).listen(8443);

// Start Socket.io so it attaches itself to Express server
var socketServer = socketIo.listen(webServer, {"log level":1});

// Start EasyRTC server
var rtc = easyrtc.listen(httpApp, socketServer);







var easyrtc = require("easyrtc"); // EasyRTC internal module

// Set process name
process.title = "node-easyrtc";

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var app = express();
app.use(serveStatic('static', {'index': ['index.html']}));

// Start Express http server on port 8080
// var webServer = http.createServer(app);

// Start Socket.io so it attaches itself to Express server
var socketServer = socketIo.listen(webServer, {"log level":1});

var myIceServers = [
    {"urls":" stun.l.google.com:19302"},
    {"urls":" stun1.l.google.com:19302"},
    {"urls":" stun2.l.google.com:19302"},
    {"urls":" stun3.l.google.com:19302"},
    {"urls":" stun4.l.google.com:19302"}
  ];



easyrtc.setOption("appIceServers", myIceServers);
//easyrtc.setOption("logLevel", "debug");

// Overriding the default easyrtcAuth listener, only so we can directly access its callback
easyrtc.events.on("easyrtcAuth", function(socket, easyrtcid, msg, socketCallback, callback) {
    easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, function(err, connectionObj){
        if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
            callback(err, connectionObj);
            return;
        }

        connectionObj.setField("credential", msg.msgData.credential, {"isShared":false});

        console.log("["+easyrtcid+"] Credential saved!", connectionObj.getFieldValueSync("credential"));

        callback(err, connectionObj);
    });
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on("roomJoin", function(connectionObj, roomName, roomParameter, callback) {
    console.log("["+connectionObj.getEasyrtcid()+"] Credential retrieved!", connectionObj.getFieldValueSync("credential"));
    easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);
});

// Start EasyRTC server
var rtc = easyrtc.listen(app, socketServer, null, function(err, rtcRef) {
    console.log("Initiated");

    rtcRef.events.on("roomCreate", function(appObj, creatorConnectionObj, roomName, roomOptions, callback) {
        console.log("roomCreate fired! Trying to create: " + roomName);

        appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
    });
});


// Listen on port 8080
// webServer.listen(8080, function () {
//     console.log('listening on http://localhost:8080');
// });
