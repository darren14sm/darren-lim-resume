import { frameworks, person } from "@/data/cv";
import Flow from "./Flow";
import SectionHeader from "./SectionHeader";

export default function Frameworks() {
  return (
    <section className="approach" aria-labelledby="approach">
      <div className="wrap">
        <SectionHeader id="approach" label="Operating frameworks" tag="How I work" />
        <p className="approach__principle">{person.principle}</p>
        <div className="approach__grid">
          {frameworks.map((f) => (
            <div className="framework" key={f.id}>
              <h3 className="framework__name">{f.name}</h3>
              <p className="framework__caption">{f.caption}</p>
              <Flow steps={f.steps} label={f.name} variant="numbered" loops={f.loops} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
