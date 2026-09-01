import svgPaths from "./svg-zcp1j1mhnm";

export default function TekionAi({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[16px]"} data-name="Tekion AI">
      <div className="absolute left-0 size-[16px] top-0" data-name="Icon Background" />
      <div className="absolute h-[13.4px] left-[0.5px] top-[1.3px] w-[15px]" data-name="Union">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9995 13.4">
          <path d={svgPaths.p19738800} fill="url(#paint0_linear_20_4298)" id="Union" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_4298" x1="-0.000625605" x2="16.9892" y1="-0.000106891" y2="3.37148">
              <stop stopColor="#25C8A5" />
              <stop offset="0.5" stopColor="#1B90B4" />
              <stop offset="1" stopColor="#1A6CC4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}