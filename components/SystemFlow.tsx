import { systems } from "@/data/cv";
import Flow from "./Flow";

export default function SystemFlow() {
  return <Flow steps={systems.flow} label="Sales operations system, from rate card to sales tracker" variant="boxed" />;
}
