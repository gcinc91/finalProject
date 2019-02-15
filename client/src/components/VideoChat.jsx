import React from "react";

export class VideoChat extends React.Component {
  constructor() {
    super();
    this.title = React.createRef();
  }

  changeColor(e) {
    console.log(this.title);
    this.title.current.style.color = "tomato";
  }

  render() {
    return (
      <div>
        <h1 ref={this.title}>Realtime communication with WebRTC</h1>

        <h1>Realtime communication with WebRTC</h1>
        <div id="videos">
          <video id="localVideo" autoplay muted playsinline />
          <video id="remoteVideo" autoplay playsinline />
        </div>

        <script src="/socket.io/socket.io.js" />
        <script src="https://webrtc.github.io/adapter/adapter-latest.js" />
        <script src="js/main.js" />
      </div>
    );
  }
}
