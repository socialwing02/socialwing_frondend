import { Canvas, useLoader } from "@react-three/fiber";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import color1 from "../../../assets/earth/color.jpg";
import normal1 from "../../../assets/earth/normal.png";
import occlusion from "../../../assets/earth/occlusion.jpg";

export default function Earth() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothRotation = useSpring(scrollYProgress, {
    damping: 20,
  });

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    color1,
    normal1,
    occlusion,
  ]);

  return (
    <div>
      <Canvas style={{ height: "100vh" }} ref={ref}>
        <ambientLight intensity={0.2} />
        <directionalLight intensity={7} position={[1.6, 0.1, 0]} />
        <motion.mesh scale={2.5} rotation-y={smoothRotation}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
      </Canvas>
    </div>
  );
}
