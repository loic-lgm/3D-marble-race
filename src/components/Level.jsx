import { useMemo } from "react";
import BlockAxe from "./block/BlockAxe";
import BlockEnd from "./block/BlockEnd";
import BlockLimbo from "./block/BlockLimbo";
import BlockSpinner from "./block/BlockSpinner";
import BlockStart from "./block/BlockStart";
import Bounds from "./block/Bounds";

export default function Level({
  count = 5,
  types = [BlockSpinner, BlockAxe, BlockLimbo],
  seed = 0,
}) {
  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      blocks.push(types[Math.floor(Math.random() * types.length)]);
    }
    return blocks;
  }, [count, types, seed]);
  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {blocks.map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
      <Bounds length={count + 2} />
    </>
  );
}
