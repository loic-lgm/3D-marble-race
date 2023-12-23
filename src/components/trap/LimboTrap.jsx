import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import obstacleMaterial from "../../obstacleMaterial";
import boxGeometry from "../../utils/boxGeometry";
import { RigidBody } from "@react-three/rapier";

export default function LimboTrap({ position }) {
  const limboRef = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const y = Math.sin(time + timeOffset) + 1;
    limboRef.current.setNextKinematicTranslation({
      x: position[0],
      y: position[1] + y,
      z: position[2],
    });
  });
  return (
    <>
      <RigidBody
        ref={limboRef}
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
