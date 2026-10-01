import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; className?: string; label?: string };

/** Every off-site link opens in a new tab and says so to screen readers. */
export default function ExternalLink({ href, children, className, label }: Props) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" aria-label={label ? `${label} (opens in a new tab)` : undefined}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
