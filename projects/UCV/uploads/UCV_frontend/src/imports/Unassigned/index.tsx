import svgPaths from "./svg-egvviakooh";

export default function Unassigned({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center p-px relative"} data-name="Unassigned">
      <div className="h-[14.002px] relative shrink-0 w-[14px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14.002">
          <path d={svgPaths.p34793200} fill="var(--fill-0, #444F5C)" id="Union" />
        </svg>
      </div>
    </div>
  );
}