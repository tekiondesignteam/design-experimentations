import svgPaths from "./svg-81j7s3uon1";

export default function AllInbox({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center p-px relative size-[16px]"} data-name="All Inbox">
      <div className="relative shrink-0 size-[14.5px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 14.5">
          <path d={svgPaths.p79eba00} fill="var(--fill-0, #444F5C)" id="Union" />
        </svg>
      </div>
    </div>
  );
}