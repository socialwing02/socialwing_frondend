import React, { useState } from "react";
import Titles from "./Titles";
import { EarthData } from "../../../data";
import classes from "../../../styles/css/home.module.css";
import Description from "./Description";

export default function EarthText() {
  const [selectedText, setSelectedText] = useState(null);

  return (
    <div className={classes.earthTextContainer}>
      <Titles data={EarthData} onSelect={setSelectedText} />
      <Description data={EarthData} selectedText={selectedText} />
    </div>
  );
}
