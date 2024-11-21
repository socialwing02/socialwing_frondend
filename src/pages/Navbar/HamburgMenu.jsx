import React from "react";
import classes from "../../styles/css/home.module.css";

export default function HamburgMenu({ onOpen }) {
  function handleClose() {
    onOpen(false);
  }

  return (
    <section className={classes.hamburgContainer}>
      hhhfsfhfho
      <button onClick={handleClose}>close</button>
    </section>
  );
}
