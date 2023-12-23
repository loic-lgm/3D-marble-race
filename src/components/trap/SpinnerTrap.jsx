import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import obstacleMaterial from "../../obstacleMaterial";
import boxGeometry from "../../utils/boxGeometry";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function SpinnerTrap() {
  const spinnerRef = useRef();
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    spinnerRef.current.setNextKinematicRotation(rotation);
  });
  return (
    <>
      <RigidBody
        ref={spinnerRef}
        type="kinematicPosition"
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3, 0.25, 0.25]}
          position-y={0.2}
          receiveShadow
          castShadow
        />
      </RigidBody>
    </>
  );
}
