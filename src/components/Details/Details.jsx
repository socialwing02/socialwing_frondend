import React, { useRef, useState } from "react";
import classes from "../../styles/css/home.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function Details() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className={classes.detailsWrapper} ref={container}>
      <Details1 scrollYProgress={scrollYProgress} />
      <Details2 scrollYProgress={scrollYProgress} />
    </div>
  );
}

export function Details1({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const [isHover, setIsHover] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHover ? 100 : 40;

  return (
    <motion.div
      className={classes.details1}
      style={{ scale: scale, rotate: rotate }}
    >
      <main className={classes.main}>
        <motion.div
          className={classes.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        >
          <p
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Lorem ipsum dolor sit <span>amet consectetur adipisicing elit</span>
            . Similique dolorum eaque fugit. Recusandae quos nam placeat
            assumenda similique, eligendi saepe autem hic necessitatibus. Nam
            accusamus esse quidem delectus eligendi ad?
          </p>
        </motion.div>
        <div className={classes.body}>
          <p
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            illum nostrum dolore sed repellat explicabo magni error accusantium
            vitae quis reiciendis ullam, odio minus molestiae, iusto voluptatum,
            veniam quae est!
          </p>
        </div>
      </main>
    </motion.div>
  );
}

export function Details2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div className={classes.details2} style={{ scale, rotate }}>
      <img src="img/banner.png" />
    </motion.div>
  );
}
