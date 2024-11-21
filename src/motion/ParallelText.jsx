import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  motion,
  wrap,
} from "framer-motion";
import { useRef } from "react";
import classes from "../styles/css/navbar.module.css";

export default function ParallaxText({ texts, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 20, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate texts to fill screen width
  const repeatedTexts = [...Array(30)].flatMap(() => texts);

  return (
    <div className={classes.parallelText}>
      <motion.div className={classes.motionDiv} style={{ x }}>
        <div className={classes.textContainer}>
          {repeatedTexts.map((text, index) => (
            <span
              key={index}
              className={classes.gradientText}
              style={{ marginRight: "4rem" }} // Adjust spacing between texts
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Parent Component
export function ParallaxContainer() {
  return (
    <div style={{ backgroundColor: "#7461d6", overflow: "hidden" }}>
      <ParallaxText
        texts={[
          "Social Wing",
          "Digital Marketing",
          "Web Development",
          "Graphic Designing",
        ]}
        baseVelocity={0.5}
      />
    </div>
  );
}
