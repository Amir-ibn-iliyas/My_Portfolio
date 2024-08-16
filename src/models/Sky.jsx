import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating }) => {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <group ref={skyRef}>
      <primitive object={scene} />
    </group>
  );
};

export default Sky;
