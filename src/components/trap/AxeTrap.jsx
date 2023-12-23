import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import obstacleMaterial from "../../obstacleMaterial";
import boxGeometry from "../../utils/boxGeometry";
import { RigidBody } from "@react-three/rapier";

export default function AxeTrap({ position }) {
  const AxeRef = useRef();
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const x = Math.sin(time + timeOffset) * 1.25;
    AxeRef.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 0.75,
      z: position[2],
    });
  });
  return (
    <>
      <RigidBody
        ref={AxeRef}
        type="kinematicPosition"
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          //   rotation-z={[Math.PI * 0.5]}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.25]}
          receiveShadow
          castShadow
        />
      </RigidBody>
    </>
  );
}
