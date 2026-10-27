import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  href: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <article data-cid={cids[0]} className={cn("flex max-w-[25%] flex-wrap basis-1/4 max-md:max-w-full max-lg:my-4 max-md:basis-full md:max-lg:max-w-[50%] md:max-lg:basis-1/2", styles.className)}>
      <div data-cid={cids[1]} className={cn("flex relative mx-4 flex-col flex-wrap overflow-hidden bg-background shadow-[var(--clr-1)_0px_4px_4px_0px] cursor-pointer max-md:mx-0 before:content-[''] before:block before:absolute before:-bottom-2.5 before:-inset-x-[0.175rem] before:h-[2.1875rem] before:transform-[matrix(1,0.0226932,0,1,0,0)] before:origin-[142.797px_17.5px] max-md:before:-inset-x-[0.2125rem] max-md:before:origin-[174.93px_17.5px] md:max-lg:before:top-[30.5625rem] md:max-lg:before:inset-x-[-3.3px] md:max-lg:before:origin-[167.273px_17.5px]", styles.className2)}>
        <div data-cid={cids[2]} className="h-50 block relative rounded-tl-sm rounded-tr-sm max-md:h-75 md:max-lg:h-62.5 before:content-[''] before:hidden before:absolute before:-top-5 before:left-[-1%] before:z-2 before:w-[102%] before:h-[2.1875rem] before:bg-primary after:content-[''] after:block after:absolute after:top-[11.5625rem] after:-bottom-5 after:-inset-x-[0.175rem] after:h-[2.1875rem] after:bg-background after:transform-[matrix(1,-0.0226932,0,1,0,0)] after:origin-[142.797px_17.5px] max-md:after:top-[17.8125rem] max-md:after:-inset-x-[0.2125rem] max-md:after:origin-[174.93px_17.5px] md:max-lg:after:top-[14.6875rem] md:max-lg:after:inset-x-[-3.3px] md:max-lg:after:origin-[167.273px_17.5px]">
          <img data-cid={cids[3]} className="w-full h-50 block max-w-full overflow-clip object-cover text-center max-md:h-75 md:max-lg:h-62.5" data-component="image" alt={d.alt} sizes="(min-width: 1280px) 608px, (min-width: 960px) 50vw, 100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
        <div data-cid={cids[4]} className="block pt-4 pb-16 px-[1.2rem] self-start flex-1 text-center">
          <div data-cid={cids[5]} className={cn("block relative", styles.className3)}>
            <header data-cid={cids[6]} className="block">
              <h3 data-cid={cids[7]} className="block relative z-1 text-primary [font-family:questa,_serif] text-[1.25rem] [overflow-wrap:break-word]" data-component="heading">
                <a data-cid={cids[8]} className="inline" data-component="link" href={d.href}>
                  {d.title}
                </a>
              </h3>
            </header>
            <div data-cid={cids[9]} className="block mt-4">
              <p data-cid={cids[10]} className="block">
                {d.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
