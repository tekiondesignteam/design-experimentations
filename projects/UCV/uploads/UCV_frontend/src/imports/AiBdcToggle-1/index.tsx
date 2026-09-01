import svgPaths from "./svg-13aufxdi6n";

function Container() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] text-left whitespace-nowrap">AI</p>
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
              <path d={svgPaths.p2273b300} fill="var(--fill-0, #444F5C)" id="Union" />
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
    <button className="bg-[#edeef0] content-stretch cursor-pointer flex gap-[4px] items-center justify-end pl-[6px] pr-[4px] py-[2px] relative rounded-[24px] size-full" data-name=".AI BDC Toggle">
      <div aria-hidden className="absolute border border-[#e8e9eb] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <ToggleButton />
      <div className="h-[24px] overflow-clip relative shrink-0 w-[36px]" data-name="_Toggle Base">
        <div className="-translate-y-1/2 absolute bg-white border border-[#e8e9eb] border-solid h-[20px] left-0 right-0 rounded-[18px] top-1/2" data-name="BG" />
        <div className="-translate-y-1/2 absolute bg-[#444f5c] left-[3px] rounded-[16px] size-[14px] top-1/2" data-name="Switch" />
      </div>
    </button>
  );
}