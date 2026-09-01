import svgPaths from "./svg-vifzoofe4k";
import imgBitmap1 from "./fefa57db4655841a40c35bd2bd32ea4a2e81c5e0.png";
import imgChevrolet16Silverado1500SideviewRed from "./c31255ec9458aaad736eac2827d0253c31a41a06.png";
import { imgBitmap } from "./svg-o5aau";

function IconSize() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pf9e4000} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Name">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[24px]">Sydney Wright</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
        <IconSize />
      </div>
    </div>
  );
}

function IconSize1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p2ffaf600} fill="var(--fill-0, #FFB23C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function ChargedCustomerFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Charged Customer - Filled">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Charged Customer - Filled">
          <path clipRule="evenodd" d={svgPaths.p1dcad100} fill="var(--fill-0, #0060FF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconSize2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.002 16.0008">
        <g id="Icon Size">
          <path d={svgPaths.p1130cf00} fill="var(--fill-0, #3C8635)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSet() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Icon Set">
      <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="01 Icon Placeholder">
        <IconSize1 />
      </div>
      <ChargedCustomerFilled />
      <div className="content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[24px]" data-name="01 Icon Placeholder">
        <IconSize2 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Name />
      <IconSet />
    </div>
  );
}

function Detials() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Detials">
      <Frame25 />
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Individual Customer - 94973</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex gap-[8px] items-start pb-[16px] pt-[24px] px-[16px] relative size-full">
        <div className="overflow-clip relative rounded-[64px] shrink-0 size-[48px]" data-name="Avatar">
          <div className="absolute bg-[#3c60a8] inset-0 overflow-clip rounded-[42px]" data-name="Background Blue">
            <div className="absolute inset-[-16.07%_41.07%_0_-57.14%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.7142 55.7142">
                <ellipse cx="27.8571" cy="27.8571" fill="var(--fill-0, #4A75CC)" id="Ellipse 415" rx="27.8571" ry="27.8571" />
              </svg>
            </div>
            <div className="absolute inset-[41.07%_-8.93%_-57.14%_-7.14%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.7142 55.7142">
                <ellipse cx="27.8571" cy="27.8571" fill="var(--fill-0, #284173)" id="Ellipse 414" rx="27.8571" ry="27.8571" />
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] absolute flex flex-col font-['Proxima_Nova:Bold',sans-serif] inset-[5%] justify-center leading-[0] not-italic text-[20px] text-center text-white uppercase">
            <p className="leading-[23px]">AP</p>
          </div>
        </div>
        <Detials />
      </div>
    </div>
  );
}

function TabbarGroup() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-w-px relative" data-name="Tabbar Group">
      <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[48px] relative shrink-0" data-name=".Default Small Tab Button">
        <div aria-hidden className="absolute border-[#4285f4] border-b-3 border-solid inset-0 pointer-events-none" />
        <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[16px]">Spends</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[40px] items-center justify-center min-w-[48px] relative shrink-0" data-name=".Default Small Tab Button">
        <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[16px]">About</p>
        </div>
      </div>
    </div>
  );
}

function IconSize3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p32361170} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Component01SmallDefaultTabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="01 Small Default Tabs">
      <div aria-hidden className="absolute bg-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] relative size-full">
          <TabbarGroup />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize3 />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.16)]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Proxima_Nova:Semibold',sans-serif] items-start leading-[0] not-italic relative shrink-0 text-[#161616] w-full whitespace-nowrap" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[16px]">
        <p className="leading-[24px]">Customer Value</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[20px]">
        <p className="leading-[32px]">$329,990</p>
      </div>
    </div>
  );
}

function IconSize4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.pcdb7700} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-start opacity-0 relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check">
        <div className="absolute inset-[18.75%_0_22.91%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9.33377">
            <g id="Path">
              <path d={svgPaths.p1287ac00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p2ad47cc0} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p385a0d00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p12a2c500} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p234e5280} fill="var(--fill-0, #969AA3)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] underline">$8K</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[14px] w-full">
        <p className="leading-[16px]">Parts (2)</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#ffb23c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
        <div className="bg-[#fff3e0] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
          <IconSize4 />
        </div>
        <Frame />
      </div>
    </div>
  );
}

function IconSize5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p2b825400} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-start opacity-0 relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check">
        <div className="absolute inset-[18.75%_0_22.91%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9.33377">
            <g id="Path">
              <path d={svgPaths.p1287ac00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p2ad47cc0} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p385a0d00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p12a2c500} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p234e5280} fill="var(--fill-0, #969AA3)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] underline">$8K</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[14px] w-[44px]">
        <p className="leading-[16px]">{`F&I (10)`}</p>
      </div>
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#d4d5d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
        <div className="bg-[#e6e9fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
          <IconSize5 />
        </div>
        <Frame1 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame14 />
    </div>
  );
}

function IconSize6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p6569700} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start opacity-0 relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check">
        <div className="absolute inset-[18.75%_0_22.91%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9.33377">
            <g id="Path">
              <path d={svgPaths.p1287ac00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p2ad47cc0} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p385a0d00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p12a2c500} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p234e5280} fill="var(--fill-0, #969AA3)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] underline">$8K</p>
      </div>
      <Frame21 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[14px] w-full">
        <p className="leading-[16px]">Service (3)</p>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#d4d5d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
        <div className="bg-[#e1faf0] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
          <IconSize6 />
        </div>
        <Frame2 />
      </div>
    </div>
  );
}

function IconSize7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p38420100} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-start opacity-0 relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check">
        <div className="absolute inset-[18.75%_0_22.91%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9.33377">
            <g id="Path">
              <path d={svgPaths.p1287ac00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p2ad47cc0} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p385a0d00} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p12a2c500} fill="var(--fill-0, #969AA3)" />
              <path d={svgPaths.p234e5280} fill="var(--fill-0, #969AA3)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[16px] underline">$8K</p>
      </div>
      <Frame23 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[14px] w-full">
        <p className="leading-[16px]">Sales (12)</p>
      </div>
      <Frame16 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#d4d5d6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[8px] items-start p-[8px] relative size-full">
        <div className="bg-[#ffe8e0] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
          <IconSize7 />
        </div>
        <Frame3 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame22 />
    </div>
  );
}

function IconSize8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p344ce200} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">$280,453</p>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
        <IconSize8 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis w-[250px] whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Potential value from 4 other duplicates</p>
      </div>
      <Container2 />
    </div>
  );
}

function Duplicates() {
  return (
    <div className="bg-[#fff8e6] relative rounded-[4px] shrink-0 w-full" data-name="duplicates">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-[0_3.13%_3.13%_0]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
                <g id="Path">
                  <path d={svgPaths.p1eb1b280} fill="var(--fill-0, #444F5C)" />
                  <path d={svgPaths.p2f05a880} fill="var(--fill-0, #444F5C)" />
                  <path clipRule="evenodd" d={svgPaths.p238deef0} fill="var(--fill-0, #444F5C)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function BasicInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Basic Info">
      <Frame13 />
      <Frame20 />
      <Duplicates />
    </div>
  );
}

function IconSize9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p1018dd00} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Section Header">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="↳ Content">
        <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">Transactions</p>
        <div className="content-stretch flex items-start relative shrink-0" data-name="01 Tooltip Dark">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Info Button">
            <IconSize9 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="05 Link Button">
        <div className="h-[24px] min-w-[48px] relative rounded-[2px] shrink-0 w-full" data-name=".Button Base">
          <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] py-[2px] relative size-full">
              <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3373dd] text-[14px] whitespace-nowrap">View All (20)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSize10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.001 16.001">
        <g id="Icon Size">
          <path d={svgPaths.p126080f2} fill="var(--fill-0, #7A64C1)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[16px] min-w-px not-italic relative text-[14px]" data-name="Content">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Proxima_Nova:Semibold',sans-serif] overflow-hidden relative shrink-0 text-[#161616] text-ellipsis underline w-full">RO#84932029</p>
      <p className="font-['Proxima_Nova:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#444f5c] text-ellipsis w-full whitespace-nowrap">$5,000 | Aug 3, 2020</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Left">
      <div className="bg-[#e6e1f5] content-stretch flex items-center justify-center p-[8px] relative rounded-[800px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize10 />
      </div>
      <Content />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="1">
      <Left />
      <div className="content-stretch flex items-start relative shrink-0" data-name="01 Status with label">
        <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0" data-name=".Status Base">
          <div className="relative shrink-0 size-[10px]" data-name="Circle">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #B7C7D5)" id="Circle" r="5" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">Ready for Dispatch</p>
        </div>
      </div>
    </div>
  );
}

function IconSize11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.001 16.001">
        <g id="Icon Size">
          <path d={svgPaths.p126080f2} fill="var(--fill-0, #7A64C1)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[16px] min-w-px not-italic relative text-[14px]" data-name="Content">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Proxima_Nova:Semibold',sans-serif] overflow-hidden relative shrink-0 text-[#161616] text-ellipsis underline w-full">Deal#1096466</p>
      <p className="font-['Proxima_Nova:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#444f5c] text-ellipsis w-full whitespace-nowrap">$5,000 | Aug 3, 2020</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Left">
      <div className="bg-[#e6e1f5] content-stretch flex items-center justify-center p-[8px] relative rounded-[800px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize11 />
      </div>
      <Content1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="2">
      <Left1 />
      <div className="content-stretch flex items-start relative shrink-0" data-name="01 Status with label">
        <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0" data-name=".Status Base">
          <div className="relative shrink-0 size-[10px]" data-name="Circle">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #06BC75)" id="Circle" r="5" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">Closed</p>
        </div>
      </div>
    </div>
  );
}

function IconSize12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.001 16.001">
        <g id="Icon Size">
          <path d={svgPaths.p126080f2} fill="var(--fill-0, #7A64C1)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[16px] min-w-px not-italic relative text-[14px]" data-name="Content">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid font-['Proxima_Nova:Semibold',sans-serif] overflow-hidden relative shrink-0 text-[#161616] text-ellipsis underline w-full">RO#84932029</p>
      <p className="font-['Proxima_Nova:Regular',sans-serif] overflow-hidden relative shrink-0 text-[#444f5c] text-ellipsis w-full whitespace-nowrap">$5,000 | Aug 3, 2020</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Left">
      <div className="bg-[#e6e1f5] content-stretch flex items-center justify-center p-[8px] relative rounded-[800px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize12 />
      </div>
      <Content2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="3">
      <Left2 />
      <div className="content-stretch flex items-start relative shrink-0" data-name="01 Status with label">
        <div className="content-stretch flex gap-[4px] items-center relative rounded-[2px] shrink-0" data-name=".Status Base">
          <div className="relative shrink-0 size-[10px]" data-name="Circle">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #F52F1D)" id="Circle" r="5" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">In Progress</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-[#3f4757] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="Content">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">$5,000 | Aug 3, 2020</p>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[6px] relative shrink-0 w-[10px]" data-name="Arrow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
        <g id="Arrow">
          <path d={svgPaths.p2a409f00} fill="var(--fill-0, #3F4757)" id="Arrow_2" />
        </g>
      </svg>
    </div>
  );
}

function BottomLeft() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[18px] content-stretch flex flex-col items-center justify-center left-1/2" data-name="Bottom left">
      <Content3 />
      <Arrow />
    </div>
  );
}

function LatestEngagement() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Latest Engagement">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <SectionHeader />
          <Component />
          <Component1 />
          <Component2 />
          <div className="absolute content-stretch flex items-start left-[152px] size-[16px] top-[76px]" data-name="01 Tooltip Dark">
            <BottomLeft />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">Appointments</p>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Action + icon">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[71px]" data-name="05 Link Button">
        <div className="content-stretch flex flex-col h-[24px] items-center justify-center min-w-[48px] py-[2px] relative rounded-[2px] shrink-0 w-full" data-name=".Button Base">
          <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3373dd] text-[14px] whitespace-nowrap">View All (4)</p>
        </div>
      </div>
    </div>
  );
}

function ViewAll() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="View All">
      <ActionIcon />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="header">
      <Title />
      <ViewAll />
    </div>
  );
}

function AppointmentInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Appointment Info">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Nov 27, 10:30 AM • Casey Davis</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Info Icon">
        <div className="absolute inset-[3.13%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <g id="Path">
              <path d={svgPaths.p3fa75400} fill="var(--fill-0, #444F5C)" />
              <path d={svgPaths.p15625300} fill="var(--fill-0, #444F5C)" />
              <path clipRule="evenodd" d={svgPaths.p34d8cc00} fill="var(--fill-0, #444F5C)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <AppointmentInfo />
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">2020 Ford Explorer</p>
    </div>
  );
}

function AppointmentDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Appointment Details">
      <Container3 />
    </div>
  );
}

function Appointments() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Appointments">
      <div className="relative shrink-0 size-[32px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Group 14">
            <circle cx="16" cy="16" fill="var(--fill-0, #FFE0EC)" id="Oval Copy 26" r="16" />
            <path d={svgPaths.p2a4c0b80} fill="var(--fill-0, #F45191)" id="Combined Shape" />
          </g>
        </svg>
      </div>
      <AppointmentDetails />
    </div>
  );
}

function AppointmentInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Appointment Info">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Oct 5, 11:00 AM • Morgan Lee</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Info Icon">
        <div className="absolute inset-[3.13%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <g id="Path">
              <path d={svgPaths.p3fa75400} fill="var(--fill-0, #444F5C)" />
              <path d={svgPaths.p15625300} fill="var(--fill-0, #444F5C)" />
              <path clipRule="evenodd" d={svgPaths.p34d8cc00} fill="var(--fill-0, #444F5C)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <AppointmentInfo1 />
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">2020 Ford Explorer</p>
    </div>
  );
}

function AppointmentDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Appointment Details">
      <Container4 />
    </div>
  );
}

function Appointments1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Appointments">
      <div className="relative shrink-0 size-[32px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Group 14">
            <circle cx="16" cy="16" fill="var(--fill-0, #FFE0EC)" id="Oval Copy 26" r="16" />
            <path d={svgPaths.p2a4c0b80} fill="var(--fill-0, #F45191)" id="Combined Shape" />
          </g>
        </svg>
      </div>
      <AppointmentDetails1 />
    </div>
  );
}

function AppointmentInfo2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Appointment Info">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Oct 5, 11:00 AM • Casey Jordan</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Info Icon">
        <div className="absolute inset-[3.13%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <g id="Path">
              <path d={svgPaths.p3fa75400} fill="var(--fill-0, #444F5C)" />
              <path d={svgPaths.p15625300} fill="var(--fill-0, #444F5C)" />
              <path clipRule="evenodd" d={svgPaths.p34d8cc00} fill="var(--fill-0, #444F5C)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <AppointmentInfo2 />
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">2020 Ford Explorer</p>
    </div>
  );
}

function AppointmentDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Appointment Details">
      <Container5 />
    </div>
  );
}

function Appointments2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Appointments">
      <div className="relative shrink-0 size-[32px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Group 14">
            <circle cx="16" cy="16" fill="var(--fill-0, #FFE0EC)" id="Oval Copy 26" r="16" />
            <path d={svgPaths.p2a4c0b80} fill="var(--fill-0, #F45191)" id="Combined Shape" />
          </g>
        </svg>
      </div>
      <AppointmentDetails2 />
    </div>
  );
}

function Appointment() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Appointment">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Header1 />
          <Appointments />
          <Appointments1 />
          <Appointments2 />
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="01 Button">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[48px] py-[4px] relative rounded-[2px] shrink-0" data-name=".Button Base">
              <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3373dd] text-[14px] whitespace-nowrap">+ Add Appointment</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#d4d5d6] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Proxima_Nova:Regular',sans-serif] gap-[4px] items-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap" data-name="Phone Number">
      <p className="relative shrink-0 text-[#161616] text-[14px]">+1 (308) 555-0125</p>
      <p className="relative shrink-0 text-[#969aa3] text-[12px]">(M)</p>
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Number">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[10.64%_5.3%_9.37%_9.38%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.652 12.7981">
            <path clipRule="evenodd" d={svgPaths.p10dc5300} fill="var(--fill-0, #969AA3)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
      </div>
      <PhoneNumber />
    </div>
  );
}

function IconSize13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Size">
          <path d={svgPaths.p3257e980} fill="var(--fill-0, #3C8635)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-px relative rounded-[40px] shrink-0 size-[16px]">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Opt-In Status">
        <IconSize13 />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <Number />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Actions">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="star-fill">
          <div className="absolute inset-[8.14%_7.06%_9.87%_7.06%]" data-name="path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0241 11.4786">
              <path d={svgPaths.p1c6d69a0} fill="var(--fill-0, #FFB23C)" id="path" />
            </svg>
          </div>
        </div>
        <Frame5 />
      </div>
    </div>
  );
}

function PhoneNumber1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Proxima_Nova:Regular',sans-serif] gap-[4px] items-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap" data-name="Phone Number">
      <p className="relative shrink-0 text-[#161616] text-[14px]">+1 (308) 555-0125</p>
      <p className="relative shrink-0 text-[#969aa3] text-[12px]">(H)</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex items-start pl-[24px] relative shrink-0" data-name="Number">
      <PhoneNumber1 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Group 3466865">
          <g id="Rectangle 5" />
          <path d={svgPaths.p14f5db00} fill="var(--fill-0, #444F5C)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-px relative rounded-[40px] shrink-0 size-[16px]">
      <Group />
    </div>
  );
}

function IconSize14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Size">
          <path d={svgPaths.p19c017c0} fill="var(--fill-0, #F52908)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-px relative rounded-[40px] shrink-0 size-[16px]">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Opt-In Status">
        <IconSize14 />
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Number1 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Actions">
        <Frame4 />
        <Frame6 />
      </div>
    </div>
  );
}

function PhoneNumber2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Proxima_Nova:Regular',sans-serif] gap-[4px] items-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap" data-name="Phone Number">
      <p className="relative shrink-0 text-[#161616] text-[14px]">+1 (308) 555-0125</p>
      <p className="relative shrink-0 text-[#969aa3] text-[12px]">(W)</p>
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex items-start pl-[24px] relative shrink-0" data-name="Number">
      <PhoneNumber2 />
    </div>
  );
}

function IconSize15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Size">
          <path d={svgPaths.p3257e980} fill="var(--fill-0, #FFB23C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-px relative rounded-[40px] shrink-0 size-[16px]">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Opt-In Status">
        <IconSize15 />
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="3">
      <Number2 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Actions">
        <Frame7 />
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Numbers">
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function EmailAddress() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Email Address">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[19.6%_6.38%_15.72%_5.87%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.04 10.3486">
            <path clipRule="evenodd" d={svgPaths.pb4d3b00} fill="var(--fill-0, #969AA3)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">AlexP@mail.com</p>
    </div>
  );
}

function IconSize16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Size">
          <path d={svgPaths.p3257e980} fill="var(--fill-0, #3C8635)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-px relative rounded-[40px] shrink-0 size-[16px]">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Opt-In Status">
        <IconSize16 />
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="1">
      <EmailAddress />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Actions">
        <Frame8 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start pl-[24px] relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">AParker12@mail.com</p>
    </div>
  );
}

function IconSize17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon Size">
          <path d={svgPaths.p3257e980} fill="var(--fill-0, #3C8635)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-px relative rounded-[40px] shrink-0 size-[16px]">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Opt-In Status">
        <IconSize17 />
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="2">
      <Container6 />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Actions">
        <Frame9 />
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Email">
      <Component6 />
      <Component7 />
    </div>
  );
}

function Address1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Address">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[1.87%_9.38%_1.88%_9.38%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9995 15.4001">
            <g id="Path">
              <path clipRule="evenodd" d={svgPaths.p281073c0} fill="var(--fill-0, #969AA3)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1fb56200} fill="var(--fill-0, #969AA3)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Regular',sans-serif] leading-[0] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis">
        <span className="leading-[16px]">{`84 Federal Rd, New York City, New York - 10011 `}</span>
        <span className="leading-[16px]">(5.4 mi)</span>
      </p>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Address">
      <Address1 />
    </div>
  );
}

function Language1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Language">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
        <div className="absolute inset-[5.12%_1.45%_8.25%_1.45%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5374 13.8601">
            <path clipRule="evenodd" d={svgPaths.p3f5ea3c0} fill="var(--fill-0, #969AA3)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Speaks English, Spanish</p>
    </div>
  );
}

function Language() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Language">
      <Language1 />
      <div className="content-stretch flex gap-[8px] h-[16px] items-center justify-center relative shrink-0 w-[86px]" data-name="Actions" />
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Contact Details">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-[298px]" data-name="↳ Content">
            <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">Basic Details</p>
          </div>
          <Numbers />
          <Email />
          <Address />
          <Language />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Section Header">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="↳ Content">
        <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">Vehicles</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79px]" data-name="05 Link Button">
        <div className="h-[24px] min-w-[48px] relative rounded-[2px] shrink-0 w-full" data-name=".Button Base">
          <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] py-[2px] relative size-full">
              <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3373dd] text-[14px] whitespace-nowrap">View All (5)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSize18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3981c580} fill="var(--fill-0, #4285F4)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Component2ndLine() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="2nd line">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">FTFW1RG8RFB01969</p>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
        <IconSize18 />
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Owned</p>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Purchased here</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">2017 Buick Encore</p>
      <Component2ndLine />
      <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Cell Content / 08 Tags">
        <div className="bg-[#06bc75] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
          <TextContainer />
        </div>
        <div className="bg-[#6285a3] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
          <TextContainer1 />
        </div>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Left">
      <div className="relative shrink-0 size-[32px]" data-name="Vehicle compoent">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #EDEEF0)" id="Mask" r="16" />
        </svg>
        <div className="absolute flex inset-[4.17%_-66.67%_28.54%_8.33%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-1px] mask-size-[24px_24px] relative size-full" style={{ maskImage: `url("${imgBitmap}")` }} data-name="Bitmap">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content4 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="1">
      <Left3 />
    </div>
  );
}

function IconSize19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3981c580} fill="var(--fill-0, #4285F4)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Component2ndLine1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="2nd line">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">FTFW1RG8RFB09637</p>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
        <IconSize19 />
      </div>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Owned</p>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">2020 Buick Envision black</p>
      <Component2ndLine1 />
      <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Cell Content / 08 Tags">
        <div className="bg-[#06bc75] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
          <TextContainer2 />
        </div>
      </div>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Left">
      <div className="relative shrink-0 size-[32px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #EDEEF0)" id="Mask" r="16" />
        </svg>
        <div className="absolute flex inset-[4.17%_-66.67%_28.54%_8.33%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-1px] mask-size-[24px_24px] relative size-full" style={{ maskImage: `url("${imgBitmap}")` }} data-name="Bitmap">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBitmap1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content5 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="3">
      <Left4 />
    </div>
  );
}

function IconSize20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3981c580} fill="var(--fill-0, #4285F4)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Component2ndLine2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="2nd line">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">CSFW1RG8RFB07343</p>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
        <IconSize20 />
      </div>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">Purchased here</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] w-[min-content]">2018 Buick Lacrosse</p>
      <Component2ndLine2 />
      <div className="content-stretch flex gap-[4px] h-[24px] items-center relative shrink-0" data-name="Cell Content / 08 Tags">
        <div className="bg-[#6285a3] content-stretch flex gap-[4px] items-center justify-center px-[8px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
          <TextContainer3 />
        </div>
      </div>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Left">
      <div className="relative shrink-0 size-[32px]" data-name="Vehicle compoent">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #EDEEF0)" id="Mask" r="16" />
        </svg>
        <div className="absolute flex inset-[25.47%_-83.33%_24.67%_4.17%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1px_-6.113px] mask-size-[24px_24px] relative size-full" style={{ maskImage: `url("${imgBitmap}")` }} data-name="chevrolet_16silverado1500_sideview_red">
              <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgChevrolet16Silverado1500SideviewRed} />
            </div>
          </div>
        </div>
      </div>
      <Content6 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="2">
      <Left5 />
    </div>
  );
}

function LatestEngagement1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Latest Engagement">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <SectionHeader1 />
          <Component8 />
          <Component9 />
          <Component10 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="↳ Content">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">Credit Limit</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#444f5c] text-[14px] text-right">
        <p className="leading-[16px]">{` $1,000.00`}</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Label">
      <div className="content-stretch flex items-center relative shrink-0" data-name="↳ Content">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-pre">{`Available  Balance`}</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#444f5c] text-[14px] text-right">
        <p className="leading-[16px]">{` $850.00`}</p>
      </div>
    </div>
  );
}

function ChargeCustomer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Charge Customer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="↳ Content">
            <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">Charge Customer</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Credit Limit">
            <Label />
            <Content7 />
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Credit Limit Balance">
            <Label1 />
            <Content8 />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="↳ Content">
        <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[16px] whitespace-nowrap">Notes</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84px]" data-name="05 Link Button">
        <div className="h-[24px] min-w-[48px] relative rounded-[2px] shrink-0 w-full" data-name=".Button Base">
          <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
            <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4px] py-[2px] relative size-full">
              <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#3373dd] text-[14px] whitespace-nowrap">View All (12)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoteHeader() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Note Header">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-end leading-[0] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Jaylen Brown</p>
      </div>
    </div>
  );
}

function NoteContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="Note Content">
      <NoteHeader />
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-end leading-[0] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">BDC Specialist • Tachyon Motors</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Row 1">
      <div className="bg-[#ebf0f5] overflow-clip relative rounded-[800px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] absolute flex flex-col font-['Proxima_Nova:Bold',sans-serif] inset-[6.25%] justify-center leading-[0] not-italic text-[#444f5c] text-[14px] text-center uppercase">
          <p className="leading-[23px]">BD</p>
        </div>
      </div>
      <NoteContent />
    </div>
  );
}

function Note() {
  return (
    <div className="relative shrink-0 w-full" data-name="Note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[8px] items-start leading-[0] not-italic pl-[40px] relative size-full text-[#444f5c]">
          <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[min-content]">
            <p className="leading-[20px]">Man loves to carry his pet dogs on road trips on his truck summers. Remember this! He traded in her 2018 ABC Hatchback...</p>
          </div>
          <div className="flex flex-col justify-end relative shrink-0 text-[12px] whitespace-nowrap">
            <p className="leading-[16px] whitespace-pre">{`Mar 13, 2023  3:39 PM`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Note1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Note 1">
      <Row />
      <Note />
    </div>
  );
}

function NoteHeader1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Note Header">
      <div className="flex flex-[1_0_0] flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-end min-w-px overflow-hidden relative text-[#161616] text-[14px] text-ellipsis">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Cameron Lee Foster</p>
      </div>
      <div className="flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-end relative shrink-0 text-[#444f5c] text-[12px]">
        <p className="leading-[16px] whitespace-pre">{`Mar 13, 2023  3:39 PM`}</p>
      </div>
    </div>
  );
}

function NoteContent1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="Note Content">
      <NoteHeader1 />
      <div className="flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-end overflow-hidden relative shrink-0 text-[#444f5c] text-[12px] text-ellipsis">
        <p className="leading-[16px] overflow-hidden text-ellipsis">BDC Specialist • Tachyon Motors</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Row 1">
      <div className="bg-[#ebf0f5] overflow-clip relative rounded-[800px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] absolute flex flex-col font-['Proxima_Nova:Bold',sans-serif] inset-[6.25%] justify-center leading-[0] not-italic text-[#444f5c] text-[14px] text-center uppercase">
          <p className="leading-[23px]">BD</p>
        </div>
      </div>
      <NoteContent1 />
    </div>
  );
}

function Note2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[8px] items-start leading-[0] not-italic pl-[40px] relative size-full text-[#444f5c]">
          <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[min-content]">
            <p className="leading-[20px]">Please do not provide loaner vehicle to this customer.</p>
          </div>
          <div className="flex flex-col justify-end relative shrink-0 text-[12px] whitespace-nowrap">
            <p className="leading-[16px] whitespace-pre">{`Mar 13, 2023  3:39 PM`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Note4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Note 4">
      <Row1 />
      <Note2 />
    </div>
  );
}

function NoteHeader2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Note Header">
      <div className="flex flex-[1_0_0] flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-end min-w-px overflow-hidden relative text-[#161616] text-[14px] text-ellipsis">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Cameron Lee Foster</p>
      </div>
      <div className="flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-end relative shrink-0 text-[#444f5c] text-[12px]">
        <p className="leading-[16px] whitespace-pre">{`Mar 13, 2023  3:39 PM`}</p>
      </div>
    </div>
  );
}

function NoteContent2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="Note Content">
      <NoteHeader2 />
      <div className="flex flex-col font-['Proxima_Nova:Regular',sans-serif] justify-end overflow-hidden relative shrink-0 text-[#444f5c] text-[12px] text-ellipsis">
        <p className="leading-[16px] overflow-hidden text-ellipsis">BDC Specialist • Tachyon Motors</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Row 1">
      <div className="bg-[#ebf0f5] overflow-clip relative rounded-[800px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] absolute flex flex-col font-['Proxima_Nova:Bold',sans-serif] inset-[6.25%] justify-center leading-[0] not-italic text-[#444f5c] text-[14px] text-center uppercase">
          <p className="leading-[23px]">BD</p>
        </div>
      </div>
      <NoteContent2 />
    </div>
  );
}

function Note3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Note">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Proxima_Nova:Regular',sans-serif] gap-[8px] items-start leading-[0] not-italic pl-[40px] relative size-full text-[#444f5c]">
          <div className="flex flex-col justify-center min-w-full overflow-hidden relative shrink-0 text-[14px] text-ellipsis w-[min-content]">
            <p className="leading-[20px]">He is our premium customer.</p>
          </div>
          <div className="flex flex-col justify-end relative shrink-0 text-[12px] whitespace-nowrap">
            <p className="leading-[16px] whitespace-pre">{`Mar 13, 2023  3:39 PM`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Note5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Note 5">
      <Row2 />
      <Note3 />
    </div>
  );
}

function LatestEngagement2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Latest Engagement">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Header2 />
          <Note1 />
          <Note4 />
          <Note5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="bg-white relative shrink-0 w-full" data-name="Customer Value">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
            <Container1 />
            <BasicInfo />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <LatestEngagement />
      <Appointment />
      <ContactDetails />
      <LatestEngagement1 />
      <ChargeCustomer />
      <LatestEngagement2 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contact">
      <Header />
      <Component01SmallDefaultTabs />
      <Container />
    </div>
  );
}