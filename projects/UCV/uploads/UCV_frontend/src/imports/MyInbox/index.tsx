import svgPaths from "./svg-xcim1kn75g";

export default function MyInbox({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center p-px relative"} data-name="My Inbox">
      <div className="relative shrink-0 size-[14px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p31eac200} fill="var(--fill-0, #444F5C)" id="Union" />
        </svg>
      </div>
    </div>
  );
}