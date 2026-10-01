import { caseStudies } from "@/data/cv";
import CaseStudyCard from "./CaseStudyCard";
import SectionHeader from "./SectionHeader";

export default function CaseStudies() {
  return (
    <section className="wrap block" aria-labelledby="case-studies">
      <SectionHeader id="case-studies" label="Case studies" tag="Evidence" />
      <div className="cases">
        {caseStudies.map((c) => (
          <CaseStudyCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
