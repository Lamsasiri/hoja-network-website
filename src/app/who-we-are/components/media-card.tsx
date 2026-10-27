"use client";

import type { MediaCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
import LanguageText from "../../../components/LanguageText";
import { useLanguage } from "../../../context/LanguageContext";
export type MediaCardData = {
  alt: string;
  altFr?: string;
  imgSrc: string;
  srcSet: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  ariaLabel: string;
  ariaLabelFr?: string;
  href: string;
  label: string;
  labelFr?: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles }) {
  const { language } = useLanguage();
  return (
    <article data-cid={cids[0]} className="flex max-w-[33.33%] my-6 flex-wrap basis-1/3 max-md:max-w-full max-md:basis-full md:max-lg:max-w-[50%] md:max-lg:basis-1/2">
      <div data-cid={cids[1]} className="flex mx-4 flex-wrap overflow-hidden max-md:mx-0">
        <div data-cid={cids[2]} className="w-full h-62.5 block relative rounded-tl-sm rounded-tr-sm cursor-pointer max-md:h-75 before:content-[''] before:block before:absolute before:-top-5 before:bottom-[14.6875rem] before:-inset-x-1 before:z-2 before:h-[2.1875rem] before:bg-primary before:transform-[matrix(1,-0.0226932,0,1,0,0)] before:origin-[195.812px_17.5px] max-md:before:bottom-[17.8125rem] max-md:before:-inset-x-[0.2125rem] max-md:before:origin-[174.93px_17.5px] md:max-lg:before:inset-x-[-3.3px] md:max-lg:before:origin-[167.273px_17.5px] after:content-[''] after:block after:absolute after:top-[14.6875rem] after:-bottom-5 after:-inset-x-1 after:h-[2.1875rem] after:bg-accent after:transform-[matrix(1,-0.0226932,0,1,0,0)] after:origin-[195.812px_17.5px] max-md:after:top-[17.8125rem] max-md:after:-inset-x-[0.2125rem] max-md:after:origin-[174.93px_17.5px] md:max-lg:after:inset-x-[-3.3px] md:max-lg:after:origin-[167.273px_17.5px]">
          <img data-cid={cids[3]} className="w-full h-62.5 block max-w-full overflow-clip object-cover text-center max-md:h-75" data-component="image" alt={language === "fr" ? d.altFr || d.alt : d.alt} sizes="(min-width: 1280px) 608px, (min-width: 960px) 50vw, 100vw" src={d.imgSrc} srcSet={d.srcSet} />
        </div>
        <div data-cid={cids[4]} className="h-full block self-stretch">
          <div data-cid={cids[5]} className="block relative pt-6">
            <header data-cid={cids[6]} className="block">
              <h3 data-cid={cids[7]} className="block [font-family:questa,_serif] text-[1.5625rem] leading-7.5 [overflow-wrap:break-word]" data-component="heading">
                {d.titleFr ? <LanguageText fr={d.titleFr} en={d.title} /> : d.title}
              </h3>
            </header>
            <div data-cid={cids[8]} className="block mt-[1.3rem]">
              <p data-cid={cids[9]} className="block" />
              <p data-cid={cids[10]} className="block">
                {d.descriptionFr ? <LanguageText fr={d.descriptionFr} en={d.description} /> : d.description}
              </p>
              <p data-cid={cids[11]} className="block" />
            </div>
            <div data-cid={cids[12]} className="block mt-6">
              <a data-cid={cids[13]} className={cn("h-[48.3px] inline-block relative py-[10.7px] px-[1.2rem] overflow-hidden text-lg font-bold leading-[1.6875rem] text-center bg-primary cursor-pointer before:content-[''] before:block before:absolute before:inset-y-0 before:-right-7.5 before:w-[4.6875rem] before:h-[48.3px] before:bg-clr-0 before:transform-[matrix(1,0,-1,1,0,0)] before:origin-[37.5px_24.1562px]", styles.className)} data-component="button" aria-label={language === "fr" ? d.ariaLabelFr || d.ariaLabel : d.ariaLabel} href={d.href}>
                {d.labelFr ? <LanguageText fr={d.labelFr} en={d.label} /> : d.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
