import React, { Component } from "react";

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

export class home extends Component {
  render() {
    return (
      <div>
        <Veggie />
        <Popular />
      </div>
    );
  }
}

export default home;
