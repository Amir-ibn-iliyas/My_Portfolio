import { useRef, useEffect } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    if (actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }

    // Cleanup function to stop animation when component unmounts
    return () => {
      if (actions["Take 001"]) {
        actions["Take 001"].stop();
      }
    };
  }, [actions, isRotating]);

  return (
    <group ref={groupRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Plane;
