import { earlier, experience } from "@/data/cv";
import ExperienceEntry from "./ExperienceEntry";
import Progression from "./Progression";
import SectionHeader from "./SectionHeader";
import Timeline from "./Timeline";

export default function ExperienceSection() {
  return (
    <>
      <section className="block" aria-labelledby="experience">
        <SectionHeader id="experience" label="Professional experience" tag="What I have done" />
        <Progression />
        {experience.map((org) => (
          <ExperienceEntry key={org.name} org={org} />
        ))}
      </section>

      <section className="block" aria-labelledby="earlier">
        <SectionHeader id="earlier" label="Earlier experience" tone="grey" />
        <ul className="earlier">
          {earlier.map((e) => (
            <li className="earlier__row" key={e.org}>
              <span className="earlier__dates">{e.dates}</span>
              <p className="earlier__body">
                <strong>{e.org}</strong>
                {e.place ? `, ${e.place}` : ""} · {e.role}
                {e.concurrent ? <span className="tag">Concurrent</span> : null}. {e.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="career">
        <SectionHeader id="career" label="Career chronology" tone="grey" />
        <Timeline />
      </section>
    </>
  );
}
