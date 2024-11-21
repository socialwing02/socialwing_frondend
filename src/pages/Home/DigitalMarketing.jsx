import React from "react";
import classes from "../../styles/css/home.module.css";
import videoFIle from "../../../public/outputGif.gif";
import CounterWrapper from "./CounterWrapper";

export default function DigitalMarketing() {
  return (
    <section className={classes.digitalWrapper}>
      <div className={classes.digitalContainer}>
        <div className={classes.digitalContent}>
          <h2>
            Elevate
            <br /> Your Business
          </h2>
          <h5>
            With our Cutting Edge Digital Marketing
            <br />
          </h5>
        </div>
        <div>
          <img src={videoFIle} className={classes.imgGif} />
        </div>
      </div>
      {/* <CounterWrapper /> */}
    </section>
  );
}
