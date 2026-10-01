import { contact, workWithMe } from "@/data/cv";
import ExternalLink from "./ExternalLink";
import SectionHeader from "./SectionHeader";

export default function ContactSection() {
  return (
    <section className="wrap block contact" aria-labelledby="contact">
      <SectionHeader id="contact" label="Contact" tag="Working together" />
      <div className="contact__grid">
        <div>
          <p className="contact__heading">{workWithMe.heading}</p>
          <p className="contact__text">{workWithMe.text}</p>
          <ul className="contact__areas" aria-label="Project areas">
            {workWithMe.areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div className="contact__card">
          <div className="contact__buttons">
            <a className="button" href={contact.email.href}>
              Email Darren
            </a>
            <ExternalLink href={contact.resume.href} className="button button--ghost">
              {contact.resume.label}
            </ExternalLink>
          </div>
          <p className="contact__buttonnote">{contact.resume.note}</p>
          <dl className="contact__list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={contact.email.href}>{contact.email.label}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={contact.phone.href}>{contact.phone.label}</a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <ExternalLink href={contact.linkedin.href}>{contact.linkedin.label}</ExternalLink>
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{contact.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
