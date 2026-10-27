import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  text: string;
  href: string;
  label: string;
  text2: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className={cn("list-item text-lg leading-[1.6875rem] [list-style-type:disc] max-md:[font-size:inherit] max-md:leading-[inherit]", styles.className)}>
      {d.text}
      <strong data-cid={cids[1]} className="inline font-bold">
        <a data-cid={cids[2]} className="inline underline cursor-pointer" data-component="link" href={d.href}>
          {d.label}
        </a>
      </strong>
      {d.text2}
    </li>
  );
}
