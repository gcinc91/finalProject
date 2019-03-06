import React from "react";
import { connect } from "react-redux";
import { Navbar } from "../components/Navbar";
import { AllUsers } from "../components/AllUsers";

export class _Principal extends React.Component {
  render() {
    const { user } = this.props;
    console.log(user);

    return (
      <div>
        <Navbar />
        <AllUsers />
      </div>
    );
  }
}

export const Principal = connect(store => store)(_Principal);
