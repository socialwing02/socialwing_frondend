import React from "react";
import Card from "../../components/Card";
import card1 from "../../../public/img/banner.png";
import classes from "../../styles/css/home.module.css";

export default function Cards() {
  const number = 8015544800;

  return (
    <div className={classes.cards}>
      <h2>Our Services</h2>
      <div className={classes.cardWrapper}>
        <Card img={card1} phoneNumber={number} />
        <Card img={card1} phoneNumber={number} />
        <Card img={card1} phoneNumber={number} />
        <Card img={card1} phoneNumber={number} />
      </div>
    </div>
  );
}
