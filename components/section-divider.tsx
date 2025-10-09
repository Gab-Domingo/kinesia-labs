export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`container ${className}`}>
      <div className="section-divider" />
    </div>
  );
}


