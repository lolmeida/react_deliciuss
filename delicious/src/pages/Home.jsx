import React, { Component } from "react";
import { motion } from "framer-motion";

import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

export class home extends Component {
  render() {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        translate={{ duration: 0.5 }}
      >
        <Veggie />
        <Popular />
      </motion.div>
    );
  }
}

export default home;
