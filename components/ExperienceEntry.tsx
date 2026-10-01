import type { Organisation } from "@/data/cv";
import Flow from "./Flow";

export default function ExperienceEntry({ org }: { org: Organisation }) {
  return (
    <article className="org">
      <header className="org__head">
        <h3 className="org__name">{org.name}</h3>
        <p className="org__dates">{org.dates}</p>
      </header>
      <p className="org__desc">
        {org.status ? <span className="pill">{org.status}</span> : null}
        {org.description}
      </p>
      {org.note ? <p className="org__note">{org.note}</p> : null}

      {org.roles.map((role) => (
        <section className="role" key={role.title} aria-label={role.title}>
          <header className="role__head">
            <h4 className="role__title">{role.title}</h4>
            {role.dates ? <p className="role__dates">{role.dates}</p> : null}
          </header>
          {role.summary ? <p className="role__summary">{role.summary}</p> : null}
          <ul className="bullets">
            {role.bullets.map((b, i) => (
              <li key={i}>
                {b.lead ? <strong>{b.lead} </strong> : null}
                {b.text}
              </li>
            ))}
          </ul>
          {role.flow ? (
            <div className="role__flow">
              <span className="role__flow-label">{role.flow.label}</span>
              <Flow steps={role.flow.steps} label={`${role.title}: ${role.flow.label}`} />
            </div>
          ) : null}
        </section>
      ))}
    </article>
  );
}
