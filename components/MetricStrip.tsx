import { metrics } from "@/data/cv";
import MetricBlock from "./MetricBlock";

export default function MetricStrip() {
  return (
    <section className="metrics" aria-label="Evidence markers">
      <dl className="metrics__grid">
        {metrics.map((m) => (
          <MetricBlock key={m.label} {...m} />
        ))}
      </dl>
    </section>
  );
}
