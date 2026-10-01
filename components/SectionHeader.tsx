type Props = { id?: string; label: string; tag?: string; as?: "h2" | "h3"; tone?: "red" | "grey" };

/** Tracked uppercase section label over a rule, as in the printed CV. */
export default function SectionHeader({ id, label, tag, as = "h2", tone = "red" }: Props) {
  const Heading = as;
  return (
    <div className={`section-header section-header--${tone}`}>
      <Heading id={id} className="section-header__label">
        {label}
      </Heading>
      {tag ? <span className="section-header__tag">{tag}</span> : null}
    </div>
  );
}
