import React from "react";
import { Navbar } from "../components/Navbar";
import Iframe from 'react-iframe'

export class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
          <Iframe
            title="videocall"
            classNAme='frame'
            width="100%"
            height="80vh"
            url= "https://localhost:8443/"
            position="relative"
            allowFullScreen
          />
      </div>
    );
  }
}
