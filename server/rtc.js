const serveStatic = require("serve-static");
const socketIo = require("socket.io");
const easyrtc = require("easyrtc");
let app = require("./app");

const rtcServer = (server) => {
  const socketServer = socketIo.listen(server, { "log level": 1 });
  // const rtc = easyrtc.listen(app, socketServer);

  var myIceServers = [
    { urls: " stun.l.google.com:19302" },
    { urls: " stun1.l.google.com:19302" },
    { urls: " stun2.l.google.com:19302" },
    { urls: " stun3.l.google.com:19302" },
    { urls: " stun4.l.google.com:19302" }
  ];

  //easyrtc.setOption("appIceServers", myIceServers);
  easyrtc.setOption("logLevel", "debug");

  // Overriding the default easyrtcAuth listener, only so we can directly access its callback
  easyrtc.events.on("easyrtcAuth", function(
    socket,
    easyrtcid,
    msg,
    socketCallback,
    callback
  ) {
    easyrtc.events.defaultListeners.easyrtcAuth(
      socket,
      easyrtcid,
      msg,
      socketCallback,
      function(err, connectionObj) {
        if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
          callback(err, connectionObj);
          return;
        }

        connectionObj.setField("credential", msg.msgData.credential, {
          isShared: false
        });

        console.log(
          "[" + easyrtcid + "] Credential saved!",
          connectionObj.getFieldValueSync("credential")
        );

        callback(err, connectionObj);
      }
    );
  });

  // To test, lets print the credential to the console for every room join!
  easyrtc.events.on("roomJoin", function(
    connectionObj,
    roomName,
    roomParameter,
    callback
  ) {
    console.log(
      "[" + connectionObj.getEasyrtcid() + "] Credential retrieved!",
      connectionObj.getFieldValueSync("credential")
    );
    easyrtc.events.defaultListeners.roomJoin(
      connectionObj,
      roomName,
      roomParameter,
      callback
    );
  });

  // Start EasyRTC server
  var rtc = easyrtc.listen(app, socketServer, null, function(err, rtcRef) {
    console.log("Initiated");

    rtcRef.events.on("roomCreate", function(
      appObj,
      creatorConnectionObj,
      roomName,
      roomOptions,
      callback
    ) {
      console.log("roomCreate fired! Trying to create: " + roomName);

      appObj.events.defaultListeners.roomCreate(
        appObj,
        creatorConnectionObj,
        roomName,
        roomOptions,
        callback
      );
    });
  });
};

module.exports = rtcServer;
