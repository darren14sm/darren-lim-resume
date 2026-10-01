type Props = { group: string; items: string[] };

/** One core-competency group: tracked label over ruled rows. */
export default function CapabilityGroup({ group, items }: Props) {
  return (
    <div className="capgroup">
      <h3 className="capgroup__name">{group}</h3>
      <ul className="capgroup__list">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
