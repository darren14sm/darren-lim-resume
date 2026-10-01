import { contact, nav, person } from "@/data/cv";
import ExternalLink from "./ExternalLink";

/** Slim document navigation. Scrolls horizontally on small screens rather than hiding behind a menu. */
export default function DocNav() {
  return (
    <nav className="docnav" aria-label="Sections">
      <div className="docnav__inner">
        <a className="docnav__home" href="#top">
          {person.name}
          <span className="docnav__cv"> · Digital Resume 2026</span>
        </a>
        <ul className="docnav__list">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <ExternalLink href={contact.resume.href} className="docnav__resume">
          Resume ↓
        </ExternalLink>
      </div>
    </nav>
  );
}
