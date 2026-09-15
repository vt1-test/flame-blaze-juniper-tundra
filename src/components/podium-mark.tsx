export function PodiumMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="28" height="28" rx="8" className="fill-surface-2 stroke-border" strokeWidth="1" />
      <path
        d="M8 22h16M11 22v-5h10v5M13.5 17V12.5h5V17"
        className="stroke-accent"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12.5V9.5"
        className="stroke-fg"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16" cy="8.2" r="1.3" className="fill-fg" />
    </svg>
  );
}
