import React from "react";
import classes from "../styles/css/home.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Card({ img, alt, phoneNumber }) {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  function handleClick() {
    window.location.href = whatsappLink;
  }

  return (
    <div className={classes.card}>
      <img src={img} alt={alt} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, beatae!
        Voluptatibus pariatur animi facilis enim vitae iure velit quos quia,
        tempora praesentium deserunt cum numquam, temporibus assumenda sapiente
        dolores neque.
      </p>
      <div className={classes.buttons}>
        <button className={classes.viewMore}>View More</button>
        <button className={classes.whatsapp} onClick={handleClick}>
          <span>
            <WhatsAppIcon color="success" />
          </span>
          <p>Whatsapp</p>
        </button>
      </div>
    </div>
  );
}
