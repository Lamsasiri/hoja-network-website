import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  imgSrc: string;
  title: string;
  description: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <section data-cid={cids[0]} className={cn("block relative", styles.className)}>
      <div data-cid={cids[1]} className="block relative z-11 max-w-320 px-8 mx-auto max-md:px-4">
        <div data-cid={cids[2]} className={cn("h-105 min-h-105 flex bg-background shadow-[var(--clr-6)_0px_0px_30px_0px]", styles.className2)}>
          <figure data-cid={cids[3]} className={cn("block relative max-w-[50%] basis-1/2 overflow-hidden max-lg:max-w-none max-lg:basis-[initial]", styles.className3)}>
            <img data-cid={cids[4]} className={cn("w-full h-105 block absolute top-0 left-0 max-w-full overflow-clip object-cover text-center max-lg:static max-lg:top-auto max-lg:left-auto", styles.className4)} data-component="image" alt="Image" src={d.imgSrc} />
          </figure>
          <div data-cid={cids[5]} className="flex max-w-[50%] py-16 px-12 flex-wrap items-center basis-1/2 max-md:p-6 max-lg:max-w-none max-lg:basis-[initial] md:max-lg:py-12">
            <div data-cid={cids[6]} className="block">
              <h2 data-cid={cids[7]} className="block pb-[10.7px] [font-family:questa,_serif] text-[2rem] leading-[2.375rem] [overflow-wrap:break-word] max-md:text-[1.375rem] max-md:leading-[1.6875rem]" data-component="heading">
                {d.title}
              </h2>
              <p data-cid={cids[8]} className="block mt-4 text-lg leading-[1.6875rem] max-md:[font-size:inherit] max-md:leading-[inherit]">
                {d.description}
              </p>
              <a data-cid={cids[9]} className={cn("h-[50.1px] inline-block relative mt-4 py-[10.7px] px-[1.2rem] overflow-hidden text-background text-[1.1875rem] font-bold leading-[1.8125rem] text-center underline bg-primary cursor-pointer before:content-[''] before:block before:absolute before:inset-y-0 before:-right-7.5 before:w-[4.6875rem] before:h-[50.1px] before:bg-clr-0 before:transform-[matrix(1,0,-1,1,0,0)] before:origin-[37.5px_25.0547px]", styles.className5)} data-component="button" href={d.href}>
                {d.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
