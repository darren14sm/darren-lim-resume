import Image from "next/image";
import { contact, person } from "@/data/cv";
import ExternalLink from "./ExternalLink";

export default function Header() {
  return (
    <header className="masthead" id="top">
      <div className="masthead__band">
        <div className="masthead__grid">
          <div className="masthead__text">
          <p className="masthead__kicker">{person.kicker.join(" · ")}</p>
          <h1 className="masthead__name">{person.name}</h1>
          <p className="masthead__disciplines">
            {person.disciplines.map((line, i) => (
              <span key={i} className="masthead__line">
                {line.join(" · ")}
              </span>
            ))}
          </p>
        </div>
        <div className="masthead__about">
          <p className="masthead__statement">{person.statement}</p>
          <p className="masthead__principle">{person.principle}</p>
        </div>
        <div className="masthead__portrait">
          <Image
            src={person.portrait.src}
            alt={person.portrait.alt}
            width={person.portrait.width}
            height={person.portrait.height}
            priority
            sizes="(max-width: 700px) 60vw, (max-width: 1100px) 34vw, 360px"
          />
        </div>
        </div>
      </div>
      <address className="contactbar">
        <div className="contactbar__inner">
          <span className="contactbar__group">
            <span>{contact.location}</span>
            <span aria-hidden="true">·</span>
            <a href={contact.phone.href}>{contact.phone.label}</a>
            <span aria-hidden="true">·</span>
            <a href={contact.email.href}>{contact.email.label}</a>
          </span>
          <ExternalLink href={contact.linkedin.href}>{contact.linkedin.label}</ExternalLink>
        </div>
      </address>
    </header>
  );
}
