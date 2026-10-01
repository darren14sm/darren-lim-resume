import { progression } from "@/data/cv";
import Flow from "./Flow";

/** The career through-line, so the path reads in one pass. */
export default function Progression() {
  return (
    <div className="progression">
      <Flow steps={progression.steps} label="Career progression" variant="inline" />
      <p className="progression__caption">{progression.caption}</p>
    </div>
  );
}
