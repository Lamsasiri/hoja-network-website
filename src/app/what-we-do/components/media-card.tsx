import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type MediaCardData = {
  alt: string;
  imgSrc: string;
  srcSet: string;
  ariaLabel: string;
  description: string;
  ariaLabel2: string;
  href: string;
  description2: string;
  href2: string;
  title: string;
  dateTime: string;
  date: string;
  description3: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  return (
    <article data-cid={cids[0]} className="flex max-w-[33.33%] my-6 flex-wrap basis-1/3 max-md:max-w-full max-md:basis-full md:max-lg:max-w-[50%] md:max-lg:basis-1/2">
      <div data-cid={cids[1]} className={cn("flex relative mx-4 flex-wrap overflow-hidden max-md:mx-0 before:block before:absolute before:top-[1.5625rem] before:-left-1 before:z-10 before:h-[23.5px] before:pt-[0.1875rem] before:pr-[0.6875rem] before:pb-px before:pl-[0.9375rem] before:text-[0.8125rem] before:font-bold before:leading-[1.25rem] before:transform-[matrix(1,-0.0218201,0,1,0,0)]", styles.className)}>
        <div data-cid={cids[2]} className={cn("h-62.5 block relative rounded-tl-sm rounded-tr-sm cursor-pointer max-md:h-75 before:content-[''] before:block before:absolute before:-top-5 before:bottom-[14.6875rem] before:-inset-x-1 before:z-2 before:h-[2.1875rem] before:bg-primary before:transform-[matrix(1,-0.0226932,0,1,0,0)] before:origin-[195.812px_17.5px] max-md:before:bottom-[17.8125rem] max-md:before:-inset-x-[0.2125rem] max-md:before:origin-[174.93px_17.5px] md:max-lg:before:inset-x-[-3.3px] md:max-lg:before:origin-[167.273px_17.5px] after:content-[''] after:block after:absolute after:top-[14.6875rem] after:-bottom-5 after:-inset-x-1 after:h-[2.1875rem] after:bg-accent after:transform-[matrix(1,-0.0226932,0,1,0,0)] after:origin-[195.812px_17.5px] max-md:after:top-[17.8125rem] max-md:after:-inset-x-[0.2125rem] max-md:after:origin-[174.93px_17.5px] md:max-lg:after:inset-x-[-3.3px] md:max-lg:after:origin-[167.273px_17.5px]", styles.className2)}>
          <img data-cid={cids[3]} className="w-full h-62.5 block max-w-full overflow-clip object-cover text-center max-md:h-75" data-component="image" alt={d.alt} sizes="(min-width: 1280px) 608px, (min-width: 960px) 50vw, 100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
        <div data-cid={cids[4]} className="h-full block self-stretch">
          <div data-cid={cids[5]} className="block relative pt-6">
            <p data-cid={cids[6]} className="block relative z-1 -mt-4">
              <span data-cid={cids[7]} className="w-px h-px block absolute -m-px overflow-hidden text-xs font-bold leading-4.5 uppercase" aria-label={d.ariaLabel}>
                {d.description}
              </span>
              <span data-cid={cids[8]} className="inline text-xs font-bold leading-4.5 uppercase" aria-label="Topic: ">
                <a data-cid={cids[9]} className="inline cursor-pointer" data-component="link" href="/topic" />
              </span>
              <span data-cid={cids[10]} className="border-l-[3px] border-solid border-l-primary inline ml-2.5 pl-2.5 text-xs font-bold leading-4.5 uppercase" aria-label={d.ariaLabel2}>
                <a data-cid={cids[11]} className="inline cursor-pointer" data-component="link" href={d.href}>
                  {d.description2}
                </a>
              </span>
            </p>
            <header data-cid={cids[12]} className="block mt-2">
              <h3 data-cid={cids[13]} className="block [font-family:questa,_serif] text-[1.5625rem] leading-7.5 [overflow-wrap:break-word]" data-component="heading">
                <a data-cid={cids[14]} className="inline cursor-pointer" data-component="link" href={d.href2}>
                  {d.title}
                </a>
              </h3>
            </header>
            <p data-cid={cids[15]} className="block mt-4 text-sm font-bold leading-[1.3125rem] uppercase">
              <time data-cid={cids[16]} className="inline" dateTime={d.dateTime}>
                {d.date}
              </time>
            </p>
            <div data-cid={cids[17]} className="block mt-2">
              <p data-cid={cids[18]} className="block">
                {d.description3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
