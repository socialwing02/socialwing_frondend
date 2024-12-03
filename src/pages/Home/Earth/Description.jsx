import React from "react";
import classes from "../../../styles/css/home.module.css";

export default function Description({ data, selectedText }) {
  function crop(string, maxLength) {
    return string?.substring(0, maxLength);
  }

  return (
    <div className={classes.descriptions}>
      {data.map((item, i) => (
        <div
          className={classes.description}
          style={{
            clipPath: selectedText == i ? "inset(0 0 0)" : "inset(50% 0 50%)",
          }}
        >
          <p>{crop(item.title, 9)}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
