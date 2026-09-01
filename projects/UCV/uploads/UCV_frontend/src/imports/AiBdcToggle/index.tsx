import svgPaths from "./svg-jl5lwr7uwp";

function Container() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] bg-clip-text font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] text-left whitespace-nowrap" style={{ backgroundImage: "linear-gradient(110.643deg, rgb(26, 108, 196) 0%, rgb(27, 144, 180) 50%, rgb(37, 200, 165) 100%)" }}>
        AI
      </p>
    </div>
  );
}

function ToggleButton() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Toggle Button">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="AI logo">
        <div className="absolute left-0 overflow-clip size-[12px] top-0" data-name="AI Logo">
          <div className="absolute inset-[10.55%_6.24%_10.55%_6.25%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5006 9.4665">
              <path d={svgPaths.p2273b300} fill="url(#paint0_linear_20_7897)" id="Union" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_7897" x1="4.30743e-09" x2="11.9019" y1="4.54025e-09" y2="2.34052">
                  <stop stopColor="#25C8A5" />
                  <stop offset="0.5" stopColor="#1B90B4" />
                  <stop offset="1" stopColor="#1A6CC4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
        <Container />
      </div>
    </div>
  );
}

export default function AiBdcToggle() {
  return (
    <button className="content-stretch cursor-pointer flex items-start relative size-full" data-name=".AI BDC Toggle">
      <div className="content-stretch flex gap-[4px] items-center justify-end pl-[6px] pr-[4px] py-[2px] relative rounded-[24px] shrink-0" style={{ backgroundImage: "linear-gradient(112.67deg, rgb(231, 247, 249) 0%, rgb(251, 248, 242) 100%)" }} data-name=".AI BDC Toggle">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <ToggleButton />
        <div className="h-[24px] overflow-clip relative shrink-0 w-[36px]" data-name="_Toggle Base">
          <div className="-translate-y-1/2 absolute h-[20px] left-0 right-0 rounded-[16px] top-1/2" style={{ backgroundImage: "linear-gradient(107.699deg, rgb(26, 108, 196) 0%, rgb(27, 144, 180) 50%, rgb(37, 200, 165) 100%)" }} data-name="BG" />
          <div className="-translate-y-1/2 absolute bg-white right-[3px] rounded-[19px] size-[14px] top-1/2" data-name="Switch" />
        </div>
      </div>
    </button>
  );
}