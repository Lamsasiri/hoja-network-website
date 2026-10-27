import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  description: string;
  href: string;
  description2: string;
};
/** A list row. */
export default function ListRow2({ d, cids, styles }: { d: ListRow2Data; cids: string[]; styles: ListRow2Styles }) {
  return (
    <li data-cid={cids[0]} className={cn("min-h-36 flex max-w-full flex-wrap basis-full overflow-hidden shadow-[var(--clr-1)_0px_4px_4px_0px]", styles.className)}>
      <div data-cid={cids[1]} className={cn("w-42.5 min-h-36 flex relative p-4 flex-wrap justify-center items-center text-background max-md:w-[21.4375rem] max-md:h-38 max-md:min-h-0 after:content-[''] after:block after:absolute after:inset-y-0 after:transform-[matrix(1,0,-0.109518,1,0,0)] max-md:after:top-35.5 max-md:after:-bottom-2.5 max-md:after:inset-x-0 max-md:after:origin-[171.5px_10px]", styles.className2)}>
        <span data-cid={cids[2]} className="block mx-auto text-[4rem] font-bold leading-24 max-md:text-[5rem] max-md:leading-30 md:max-lg:text-[3.5rem] md:max-lg:leading-21">
          {d.text}
        </span>
      </div>
      <div data-cid={cids[3]} className={cn("block py-6 self-center text-left max-md:pt-8 max-md:pb-4 max-md:px-4 max-md:[text-align:inherit]", styles.className3)}>
        <p data-cid={cids[4]} className="block">
          {d.description}
        </p>
        <p data-cid={cids[5]} className="block pt-2 text-[0.8125rem] leading-[1.1875rem]">
          <a data-cid={cids[6]} className="inline cursor-pointer" data-component="link" href={d.href} target="_blank">
            {d.description2}
          </a>
        </p>
      </div>
    </li>
  );
}
