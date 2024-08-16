import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }

    // Cleanup function to stop animation when component unmounts
    return () => {
      if (actions["Take 001"]) {
        actions["Take 001"].stop();
      }
    };
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (birdRef.current) {
      // Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      // Check if the bird reached a certain endpoint relative to the camera
      if (birdRef.current.position.x > camera.position.x + 10) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        birdRef.current.rotation.y = 0;
      }

      // Update bird's position based on the current rotation
      const direction = birdRef.current.rotation.y === 0 ? 1 : -1;
      birdRef.current.position.x += direction * 0.01;
      birdRef.current.position.z -= direction * 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-7, 2, 0.3]} scale={[0.005, 0.005, 0.005]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
