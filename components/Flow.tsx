type Props = { steps: string[]; label: string; variant?: "inline" | "boxed" | "numbered"; loops?: boolean };

/** An ordered sequence of stages. Used for role methods, the sales system and the frameworks. */
export default function Flow({ steps, label, variant = "inline", loops = false }: Props) {
  return (
    <ol className={`flow flow--${variant}${loops ? " flow--loops" : ""}`} aria-label={label}>
      {steps.map((s, i) => (
        <li key={s} className="flow__step">
          {variant === "numbered" ? <span className="flow__num">{String(i + 1).padStart(2, "0")}</span> : null}
          <span className="flow__text">{s}</span>
        </li>
      ))}
      {loops ? (
        <li className="flow__loop" aria-label={`Returns to ${steps[0]}`}>
          <span aria-hidden="true">↺ {steps[0]}</span>
        </li>
      ) : null}
    </ol>
  );
}
