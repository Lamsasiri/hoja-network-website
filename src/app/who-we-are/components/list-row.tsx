import LanguageText from "../../../components/LanguageText";

export type ListRowData = {
  href: string;
  label: string;
  labelFr?: string;
};
/** A list row. */
export default function ListRow({ d, cids }: { d: ListRowData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="border-b-2 border-solid border-b-background list-item relative py-2.5 pr-10 pl-[0.9375rem]" role="tab">
      <a data-cid={cids[1]} className="inline font-bold cursor-pointer" data-component="link" href={d.href}>
        {d.labelFr ? <LanguageText fr={d.labelFr} en={d.label} /> : d.label}
      </a>
    </li>
  );
}
