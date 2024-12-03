import React, { useRef } from "react";
import classes from "../../../styles/css/home.module.css";
import { use } from "framer-motion/client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Titles({ data, onSelect }) {
  return (
    <div className={classes.titles}>
      {data.map((item, i) => (
        <Title key={item.title} item={{ ...item, i }} onSelect={onSelect} />
      ))}
    </div>
  );
}

function Title({ item, onSelect }) {
  const { title, i, speed } = item;

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipTransform = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipTransform}% 0 0)`;

  return (
    <div
      className={classes.title}
      ref={ref}
      onMouseOver={() => onSelect(i)}
      onMouseLeave={() => onSelect(null)}
    >
      <div className={classes.titleWrapper}>
        <motion.p style={{ clipPath: clip }}>{title}</motion.p>
        <p>{title}</p>
      </div>
    </div>
  );
}
