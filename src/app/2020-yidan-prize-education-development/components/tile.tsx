export type TileData = {
  href: string;
  label: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, cids }: { d: TileData; cids: string[] }) {
  return (
    <p data-cid={cids[0]} className="block mt-4 text-lg leading-[1.6875rem] max-md:[font-size:inherit] max-md:leading-[inherit]">
      <a data-cid={cids[1]} className="inline underline cursor-pointer" data-component="link" href={d.href} rel="noopener" target="_blank" title={d.label}>
        <strong data-cid={cids[2]} className="inline font-bold">
          {d.description}
        </strong>
      </a>
    </p>
  );
}
