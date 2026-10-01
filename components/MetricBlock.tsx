type Props = { value: string; label: string; note: string };

export default function MetricBlock({ value, label, note }: Props) {
  return (
    <div className="metric">
      <dt className="metric__label">{label}</dt>
      <dd className="metric__value">{value}</dd>
      <dd className="metric__note">{note}</dd>
    </div>
  );
}
