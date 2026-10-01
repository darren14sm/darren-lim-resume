import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import DocNav from "@/components/DocNav";
import ExperienceSection from "@/components/ExperienceSection";
import Frameworks from "@/components/Frameworks";
import Header from "@/components/Header";
import MetricStrip from "@/components/MetricStrip";
import SidePanel from "@/components/SidePanel";
import { contact, person, site } from "@/data/cv";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: site.url,
  image: `${site.url}${person.portrait.src}`,
  jobTitle: "Commercial Strategy, Business Development & Partnerships",
  email: contact.email.href,
  telephone: "+6287862013258",
  address: { "@type": "PostalAddress", addressLocality: "Seminyak", addressRegion: "Bali", addressCountry: "ID" },
  sameAs: [contact.linkedin.href],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Binus University" },
  knowsLanguage: ["id", "en"],
};

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <DocNav />
      <Header />
      <main id="main" tabIndex={-1}>
        <MetricStrip />
        <div className="wrap columns">
          <div className="columns__main">
            <ExperienceSection />
          </div>
          <aside className="columns__side" aria-label="Capabilities, systems and credentials">
            <SidePanel />
          </aside>
        </div>
        <Frameworks />
        <CaseStudies />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="wrap footer__inner">
          <span>{person.name} · Curriculum Vitae 2026</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}
