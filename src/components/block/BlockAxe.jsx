import AxeTrap from "../trap/AxeTrap";
import LimboTrap from "../trap/LimboTrap";
import boxGeometry from "../../utils/boxGeometry";
import floor2Material from "../../utils/floor2Material";

export default function BlockAxe({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        receiveShadow
        scale={[4, 0.2, 4]}
      />
      <AxeTrap position={position} />
    </group>
  );
}
