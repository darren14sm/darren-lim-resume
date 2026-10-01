import { career } from "@/data/cv";

export default function Timeline() {
  return (
    <ol className="timeline">
      {career.map((c, i) => (
        <li className={`timeline__item${i === career.length - 1 ? " is-current" : ""}`} key={`${c.stage}-${c.org}`}>
          <span className="timeline__years">{c.years}</span>
          <span className="timeline__stage">
            {c.stage}
            {c.concurrent ? <span className="tag">Concurrent</span> : null}
          </span>
          <span className="timeline__org">{c.org}</span>
          {c.theme.toLowerCase() !== c.stage.toLowerCase() ? <span className="timeline__theme">{c.theme}</span> : null}
        </li>
      ))}
    </ol>
  );
}
