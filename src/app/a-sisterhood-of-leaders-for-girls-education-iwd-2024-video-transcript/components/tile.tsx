export type TileData = {
  description: string;
  description2: string;
};
/** A content tile. */
export default function Tile({ d, cids }: { d: TileData; cids: string[] }) {
  return (
    <p data-cid={cids[0]} className="block mt-4 text-lg leading-[1.6875rem] max-md:[font-size:inherit] max-md:leading-[inherit]">
      <strong data-cid={cids[1]} className="inline font-bold">
        {d.description}
      </strong>
      {d.description2}
    </p>
  );
}
