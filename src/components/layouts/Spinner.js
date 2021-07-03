import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200ox ", margin: "auto", display: "block" }}
    ></img>
  </Fragment>
);

export default Spinner;
