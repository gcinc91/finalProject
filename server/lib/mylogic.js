
easyrtc.setStreamAcceptor( function(callerEasyrtcid, stream) {
  var video = document.getElementById('caller');
  easyrtc.setVideoObjectSrc(video, stream);
});

easyrtc.setOnStreamClosed( function (callerEasyrtcid) {
  easyrtc.setVideoObjectSrc(document.getElementById('caller'), "");
});


function my_init() {
  easyrtc.setRoomOccupantListener( loggedInListener);
  var connectSuccess = function(myId) {
      console.log("My easyrtcid is " + myId);
  }
  var connectFailure = function(errorCode, errText) {
      console.log(errText);
  }
  easyrtc.initMediaSource(
        function(){        // success callback
            var selfVideo = document.getElementById("self");
            easyrtc.setVideoObjectSrc(selfVideo, easyrtc.getLocalStream());
            easyrtc.connect("Company_Chat_Line", connectSuccess, connectFailure);
        },
        connectFailure
  );
}


function loggedInListener(roomName, otherPeers) {
  roomName = 'pepe'
  var otherClientDiv = document.getElementById('otherClients');
  while (otherClientDiv.hasChildNodes()) {
      otherClientDiv.removeChild(otherClientDiv.lastChild);
  }
  for(var i in otherPeers) {
      var button = document.createElement('button');
      button.onclick = function(easyrtcid) {
          return function() {
              performCall(easyrtcid);
          }
      }(i);

      label = document.createTextNode(i);
      button.appendChild(label);
      otherClientDiv.appendChild(button);
  }
}


function performCall(easyrtcid) {
  easyrtc.call(
     easyrtcid,
     function(easyrtcid) { console.log("completed call to " + easyrtcid);},
     function(errorCode, errorText) { console.log("err:" + errorText);},
     function(accepted, bywho) {
        console.log((accepted?"accepted":"rejected")+ " by " + bywho);
     }
 );
}




// /////////////////////////////
// easyrtc.setStreamAcceptor( function(callerEasyrtcid, stream) {
//   var video = document.getElementById('caller');
//   easyrtc.setVideoObjectSrc(video, stream);
// });

// easyrtc.setOnStreamClosed( function (callerEasyrtcid) {
//   easyrtc.setVideoObjectSrc(document.getElementById('caller'), "");
// });


// function my_init() {
//   easyrtc.setRoomOccupantListener( loggedInListener);
//   var connectSuccess = function(myId) {
//       console.log("My easyrtcid is " + myId);
//   }
//   var connectFailure = function(errorCode, errText) {
//       console.log(errText);
//   }
//   easyrtc.initMediaSource(
//         function(){        // success callback
//             var selfVideo = document.getElementById("self");
//             easyrtc.setVideoObjectSrc(selfVideo, easyrtc.getLocalStream());
//             easyrtc.connect("Company_Chat_Line", connectSuccess, connectFailure);
//         },
//         connectFailure
//   );
// }


// function loggedInListener(roomName, otherPeers) {
//   var otherClientDiv = document.getElementById('otherClients');
//   while (otherClientDiv.hasChildNodes()) {
//       otherClientDiv.removeChild(otherClientDiv.lastChild);
//   }
//   for(var i in otherPeers) {
//       var button = document.createElement('button');
//       button.onclick = function(easyrtcid) {
//           return function() {
//               performCall(easyrtcid);
//           }
//       }(i);

//       label = document.createTextNode(i);
//       button.appendChild(label);
//       otherClientDiv.appendChild(button);
//   }
// }


// function performCall(easyrtcid) {
//   easyrtc.call(
//      easyrtcid,
//      function(easyrtcid) { console.log("completed call to " + easyrtcid);},
//      function(errorCode, errorText) { console.log("err:" + errorText);},
//      function(accepted, bywho) {
//         console.log((accepted?"accepted":"rejected")+ " by " + bywho);
//      }
//  )
//  easyrtc.setAcceptChecker( function(callerId, reporterFunction) {
//   callerId = easyrtcid
//   document.getElementById('acceptCallBox').style.display = "block";
//   if( easyrtc.getConnectionCount() > 0 ) {
//       document.getElementById('acceptCallLabel').innerHTML = "Drop current call and accept new from " + caller + " ?";
//   }
//   else {
//       document.getElementById('acceptCallLabel').innerHTML = "Accept incoming call from " + caller + " ?";
//   }
//   var acceptTheCall = function(wasAccepted) {
//      document.getElementById('acceptCallBox').style.display = "none";
//      if( wasAccepted && easyrtc.getConnectionCount() > 0 ) {
//           easyrtc.hangupAll();
//      }
//      cb(wasAccepted);
//   }
//   document.getElementById("callAcceptButton").onclick = function() { acceptTheCall(true);};
//   document.getElementById("callRejectButton").onclick =function() { acceptTheCall(false);};
// });

// }