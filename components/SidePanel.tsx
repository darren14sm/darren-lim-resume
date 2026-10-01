import { competencies, credentials, education, languages, platforms, systems } from "@/data/cv";
import CapabilityGroup from "./CapabilityGroup";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";
import SystemFlow from "./SystemFlow";

export default function SidePanel() {
  return (
    <>
      <section className="block" aria-labelledby="competencies">
        <SectionHeader id="competencies" label="Core competencies" />
        {competencies.map((c) => (
          <CapabilityGroup key={c.group} {...c} />
        ))}
      </section>

      <section className="block" aria-labelledby="systems">
        <SectionHeader id="systems" label="Systems & technical capabilities" tag="What I have built" />
        <p className="side__lead">{systems.title}</p>
        <SystemFlow />
        <dl className="story">
          {systems.story.map((s) => (
            <div className="story__row" key={s.step}>
              <dt>{s.step}</dt>
              <dd>{s.text}</dd>
            </div>
          ))}
        </dl>
        <p className="side__small">{systems.note}</p>
      </section>

      <section className="block" aria-labelledby="platforms">
        <SectionHeader id="platforms" label="Platforms" tone="grey" />
        <p className="side__text">{platforms.items.join(" · ")}</p>
      </section>

      <section className="block" aria-labelledby="education">
        <SectionHeader id="education" label="Education" tone="grey" />
        <p className="side__text">
          <strong>{education.school}</strong>
          <br />
          {education.degree}
          <br />
          {education.detail}
        </p>
      </section>

      <section className="block" aria-labelledby="languages">
        <SectionHeader id="languages" label="Languages" tone="grey" />
        <ul className="side__plain">
          {languages.map((l) => (
            <li key={l.name}>
              {l.name}, <span className="muted">{l.level.toLowerCase()}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" aria-labelledby="credentials">
        <SectionHeader id="credentials" label="Credentials" tone="grey" />
        {credentials.map((c) => (
          <p className="side__text" key={c.name}>
            <ExternalLink href={c.href} className="strong-link">
              {c.name}
            </ExternalLink>
            . {c.detail}
          </p>
        ))}
      </section>
    </>
  );
}
