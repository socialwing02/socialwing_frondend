import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import classes from "../../styles/css/home.module.css";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(100000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (event.clientX / innerWidth - 0.5) * 2;
    mouse.current.y = -(event.clientY / innerHeight - 0.5) * 2;
  };

  // Interpolate camera position for smooth movement
  useFrame(() => {
    targetPosition.current.x +=
      (mouse.current.x * 0.5 - targetPosition.current.x) * 0.1; // Adjust speed with the factor (0.1)
    targetPosition.current.y +=
      (mouse.current.y * 0.5 - targetPosition.current.y) * 0.1;

    camera.position.x = targetPosition.current.x;
    camera.position.y = targetPosition.current.y;
    camera.lookAt(0, 0, 0); // Always look at the center
  });

  // Attach mousemove listener
  document.addEventListener("mousemove", handleMouseMove);

  return null;
};

const StarsCanvas = () => {
  return (
    <div className={classes.starsContainer}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <CameraController /> {/* Add camera controller */}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
