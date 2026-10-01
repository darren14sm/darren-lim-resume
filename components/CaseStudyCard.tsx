import ExternalLink from "./ExternalLink";
import Flow from "./Flow";

type Section = {
  label: string;
  text: string;
  flow?: string[];
  split?: { label: string; text: string }[];
};

type Props = { kicker: string; title: string; href: string; sections: Section[] };

export default function CaseStudyCard({ kicker, title, href, sections }: Props) {
  return (
    <article className="case">
      <p className="case__kicker">{kicker}</p>
      <h3 className="case__title">
        <ExternalLink href={href} className="case__link">
          {title}
        </ExternalLink>
      </h3>
      <dl className="case__sections">
        {sections.map((s) => (
          <div className="case__section" key={s.label}>
            <dt>{s.label}</dt>
            <dd>
              {s.text}
              {s.flow ? <Flow steps={s.flow} label={`${title}: ${s.label}`} variant="inline" /> : null}
              {s.split ? (
                <div className="case__split">
                  {s.split.map((p) => (
                    <div key={p.label}>
                      <span className="case__split-label">{p.label}</span>
                      <span className="case__split-text">{p.text}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      <p className="case__actions">
        <ExternalLink href={href} className="case__cta">
          Read the case study
        </ExternalLink>
      </p>
    </article>
  );
}
