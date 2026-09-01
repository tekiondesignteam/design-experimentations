import svgPaths from "./svg-xg6awdivg0";

function IconSize() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3c5381a0} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] h-[16px] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#969aa3] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden text-ellipsis">Search</p>
      </div>
    </div>
  );
}

function IconSize1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p86fdb00} fill="var(--fill-0, #969AA3)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text Wrapper">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7px] relative size-full">
          <Text />
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Trail icon">
            <IconSize1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f4f5f6] relative rounded-[3px] shrink-0 w-full z-[2]" data-name="Text Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-px relative size-full">
          <TextWrapper />
        </div>
      </div>
    </div>
  );
}

function SearchArea() {
  return (
    <div className="bg-white relative shrink-0 w-[440px]" data-name="Search Area">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <div className="bg-[#f4f5f6] content-stretch flex gap-[2px] items-end px-[6px] py-[8px] relative rounded-[4px] shrink-0" data-name="Department">
          <div className="relative shrink-0 size-[16px]" data-name="Department">
            <div className="absolute left-0 size-[16px] top-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3fd6a7f0} fill="var(--fill-0, #FC602B)" id="Rectangle 4340" />
              </svg>
            </div>
            <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] left-[4px] not-italic text-[12px] text-white top-px tracking-[0.024px] whitespace-nowrap">R</p>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize />
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start justify-center min-w-px relative rounded-[2px]" data-name="04 Search input">
          <TextInput />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[15.71%_15.62%_15.54%_15.63%]">
      <div className="absolute inset-[-4.55%_-4.55%_-4.47%_-4.55%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.9919">
          <g id="Group 3466911">
            <path d={svgPaths.p30035f40} id="Vector 12" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" />
            <path d={svgPaths.p16307e00} id="Vector 23" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MinWidth() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SideNavigationButton() {
  return (
    <div className="bg-[#dbebff] h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div aria-hidden className="absolute border-[#4285f4] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="My inbox">
            <Group />
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#161616] text-[14px]">
            <p className="leading-[16px]">My Inbox</p>
          </div>
          <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="01 Badge">
            <MinWidth />
            <Container />
          </div>
        </div>
      </div>
    </div>
  );
}

function MinWidth1() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SideNavigationButton1() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="All inbox">
            <div className="absolute bottom-1/4 left-1/4 right-[12.5%] top-[12.5%]">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <path d={svgPaths.p286053f0} id="Vector 12" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[37.5%] left-1/4 right-[12.5%] top-1/2">
              <div className="absolute inset-[-25%_-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 3">
                  <path d={svgPaths.p42a98a0} id="Vector 24" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute aspect-[9/9] left-[12.5%] right-[31.25%] top-[calc(50%+1.5px)]">
              <div className="absolute inset-[-5.56%_-5.56%_-5.56%_-5.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.99995 10">
                  <path d={svgPaths.p31c11080} id="Vector 999" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#161616] text-[14px]">
            <p className="leading-[16px]">All Inbox</p>
          </div>
          <div className="bg-[#ebf0f5] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="01 Badge">
            <MinWidth1 />
            <Container1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavigationButton2() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="AI activity">
            <div className="absolute inset-[12.5%_8.44%_12.51%_8.44%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3004 11.9981">
                <path d={svgPaths.p3aba7380} fill="url(#paint0_linear_20_7810)" id="Union" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_7810" x1="-2.33919e-10" x2="15.0759" y1="-6.31847e-09" y2="2.96282">
                    <stop stopColor="#25C8A5" />
                    <stop offset="0.5" stopColor="#1B90B4" />
                    <stop offset="1" stopColor="#1A6CC4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#161616] text-[14px]">
            <p className="leading-[16px]">AI Activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MinWidth2() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SideNavigationButton3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[16px] pr-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Unassigned">
            <div className="absolute bottom-[2.5px] h-[2px] left-[2.5px] w-[11px]">
              <div className="absolute inset-[-25%_-4.55%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
                  <path d={svgPaths.p12d3f098} id="Vector 986" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute flex items-center justify-center left-[2.5px] size-[2px] top-[2.5px]">
              <div className="-scale-y-100 flex-none">
                <div className="relative size-[2px]">
                  <div className="absolute inset-[-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
                      <path d={svgPaths.p35175300} id="Vector 1001" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center right-[2.5px] size-[2px] top-[2.5px]">
              <div className="flex-none rotate-180">
                <div className="relative size-[2px]">
                  <div className="absolute inset-[-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
                      <path d={svgPaths.p25513d00} id="Vector 1003" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute left-1/2 rounded-[4px] size-[3px] top-[5px]">
              <div aria-hidden className="absolute border border-[#444f5c] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
            </div>
            <div className="-translate-x-1/2 absolute h-[3px] left-1/2 top-[10px] w-[6px]">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
                  <path d={svgPaths.p2777ac00} id="Rectangle 3468609" stroke="var(--stroke-0, #444F5C)" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute h-[2px] left-[2.5px] top-1/2 w-0">
              <div className="absolute inset-[-25%_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
                  <path d="M0.5 0.5V2.08143V2.5" id="Vector 996" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute h-[2px] left-[13.5px] top-1/2 w-0">
              <div className="absolute inset-[-25%_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
                  <path d="M0.5 0.5L0.5 2.08143L0.5 2.5" id="Vector 1002" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-0 items-center justify-center left-1/2 top-[calc(50%-5.5px)] w-[2px]">
              <div className="flex-none rotate-90">
                <div className="h-[2px] relative w-0">
                  <div className="absolute inset-[-25%_-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
                      <path d={svgPaths.pf6d9ed8} id="Vector 999" stroke="var(--stroke-0, #444F5C)" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Proxima_Nova:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#161616] text-[14px]">
            <p className="leading-[16px]">Unassigned</p>
          </div>
          <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="01 Badge">
            <MinWidth2 />
            <Container2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SideNavigationButton />
      <SideNavigationButton1 />
      <SideNavigationButton2 />
      <SideNavigationButton3 />
    </div>
  );
}

function SideNavigation() {
  return (
    <div className="bg-white h-[748px] relative shrink-0 w-[160px]" data-name="Side Navigation">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Frame5 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NavigationValueSize() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name=".Navigation Value-Size">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">All Channels</p>
    </div>
  );
}

function IconSize2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p332afc00} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function ChannelsDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Channels Dropdown">
      <NavigationValueSize />
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
        <IconSize2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[16px] overflow-hidden text-ellipsis">My Inbox</p>
          </div>
          <ChannelsDropdown />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0060ff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">All</p>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Unread (1)</p>
      </div>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">AI Routed (1)</p>
      </div>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">AI Paused (1)</p>
      </div>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Text Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Unknown (1)</p>
      </div>
    </div>
  );
}

function FiltersList() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-[8px] items-start px-[12px] py-[8px] relative shrink-0 w-[280px]" data-name="Filters List">
      <div className="bg-[#dbebff] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
        <TextContainer />
      </div>
      <div className="bg-[#edeef0] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
        <TextContainer1 />
      </div>
      <div className="bg-[#edeef0] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
        <TextContainer2 />
      </div>
      <div className="bg-[#edeef0] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
        <TextContainer3 />
      </div>
      <div className="bg-[#edeef0] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0" data-name="01 Lozenge">
        <TextContainer4 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[16px] max-w-[200px] relative shrink-0 w-[188px]" data-name="Type">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Isaac Thompson</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:04 PM</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] max-w-[180px] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">+1 415-456-7890</p>
    </div>
  );
}

function MinWidth3() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">4</p>
      </div>
    </div>
  );
}

function PhoneNo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame />
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Unread">
        <MinWidth3 />
        <Container3 />
      </div>
    </div>
  );
}

function CustomerDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <Frame7 />
      <PhoneNo />
    </div>
  );
}

function AiLogo() {
  return (
    <div className="absolute inset-[12.5%]" data-name="AI logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_20_7764)" id="AI logo">
          <path d={svgPaths.p4fa6e00} fill="url(#paint0_linear_20_7764)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_7764" x1="10.4634" x2="-1.69122" y1="13.8746" y2="1.24842">
            <stop offset="0.01" stopColor="#2157F5" />
            <stop offset="0.371064" stopColor="#258DFF" />
            <stop offset="1" stopColor="#86FFBB" />
          </linearGradient>
          <clipPath id="clip0_20_7764">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Assignee() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Assignee">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="AI logo (Old)">
        <AiLogo />
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Amanda (AI)</p>
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <Assignee />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Routed</p>
      </div>
    </div>
  );
}

function CustomerCard() {
  return (
    <div className="bg-[#ebf4ff] relative shrink-0 w-[280px]" data-name="customer card">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[inherit] size-full">
        <CustomerDetails />
        <StatusContainer />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[16px] max-w-[200px] relative shrink-0 w-[188px]" data-name="Type">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Brandon Michael Hernandez</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:04 PM</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] max-w-[180px] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">scarlett.turner@mail.com</p>
    </div>
  );
}

function PhoneNo1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame1 />
    </div>
  );
}

function CustomerDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <Frame8 />
      <PhoneNo1 />
    </div>
  );
}

function Assignee1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Assignee">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jafaar Jackson</p>
    </div>
  );
}

function StatusContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <Assignee1 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic opacity-0 relative shrink-0 text-[12px] text-white whitespace-nowrap">Routed</p>
      </div>
    </div>
  );
}

function CustomerCard1() {
  return (
    <div className="bg-white h-[94px] relative shrink-0 w-[280px]" data-name="customer card">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[inherit] size-full">
        <CustomerDetails1 />
        <StatusContainer1 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0 w-[188px]" data-name="Type">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Ava Thompson</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:04 PM</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">webbhyundai.com</p>
    </div>
  );
}

function MinWidth4() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function PhoneNo2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame2 />
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Unread">
        <MinWidth4 />
        <Container4 />
      </div>
    </div>
  );
}

function CustomerDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <Frame6 />
      <PhoneNo2 />
    </div>
  );
}

function AiLogo1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="AI logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_20_7764)" id="AI logo">
          <path d={svgPaths.p4fa6e00} fill="url(#paint0_linear_20_7764)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_7764" x1="10.4634" x2="-1.69122" y1="13.8746" y2="1.24842">
            <stop offset="0.01" stopColor="#2157F5" />
            <stop offset="0.371064" stopColor="#258DFF" />
            <stop offset="1" stopColor="#86FFBB" />
          </linearGradient>
          <clipPath id="clip0_20_7764">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Assignee2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Assignee">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="AI logo (Old)">
        <AiLogo1 />
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Amanda (AI)</p>
    </div>
  );
}

function StatusContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <Assignee2 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Routed</p>
      </div>
    </div>
  );
}

function CustomerCard2() {
  return (
    <div className="bg-white relative shrink-0 w-[280px]" data-name="customer card">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[inherit] size-full">
        <CustomerDetails2 />
        <StatusContainer2 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[16px] relative shrink-0 w-[188px]" data-name="Type">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Austin Reed</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:04 PM</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">brandonhyundai.com</p>
    </div>
  );
}

function MinWidth5() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function PhoneNo3() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame3 />
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Unread">
        <MinWidth5 />
        <Container5 />
      </div>
    </div>
  );
}

function CustomerDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <Frame9 />
      <PhoneNo3 />
    </div>
  );
}

function AiLogo2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="AI logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_20_7764)" id="AI logo">
          <path d={svgPaths.p4fa6e00} fill="url(#paint0_linear_20_7764)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_20_7764" x1="10.4634" x2="-1.69122" y1="13.8746" y2="1.24842">
            <stop offset="0.01" stopColor="#2157F5" />
            <stop offset="0.371064" stopColor="#258DFF" />
            <stop offset="1" stopColor="#86FFBB" />
          </linearGradient>
          <clipPath id="clip0_20_7764">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Assignee3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Assignee">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="AI logo (Old)">
        <AiLogo2 />
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Amanda (AI)</p>
    </div>
  );
}

function StatusContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <Assignee3 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Routed</p>
      </div>
    </div>
  );
}

function CustomerCard3() {
  return (
    <div className="bg-white relative shrink-0 w-[280px]" data-name="customer card">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[inherit] size-full">
        <CustomerDetails3 />
        <StatusContainer3 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="h-[16px] max-w-[200px] relative shrink-0 w-[188px]" data-name="Type">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Andrew Martinez</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:04 PM</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] max-w-[180px] min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">jimellis@porsche.com</p>
    </div>
  );
}

function PhoneNo4() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame4 />
    </div>
  );
}

function CustomerDetails4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <Frame10 />
      <PhoneNo4 />
    </div>
  );
}

function Assignee4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Assignee">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jafaar Jackson</p>
    </div>
  );
}

function StatusContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <Assignee4 />
      <div className="content-stretch flex items-center relative shrink-0" data-name="Status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic opacity-0 relative shrink-0 text-[12px] text-white whitespace-nowrap">Routed</p>
      </div>
    </div>
  );
}

function CustomerCard4() {
  return (
    <div className="bg-white h-[94px] relative shrink-0 w-[280px]" data-name="customer card">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[12px] py-[16px] relative rounded-[inherit] size-full">
        <CustomerDetails4 />
        <StatusContainer4 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChatList() {
  return (
    <div className="h-[700px] relative shrink-0 w-[280px]" data-name="chat list">
      <div className="content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto relative rounded-[inherit] size-full">
        <CustomerCard />
        <CustomerCard1 />
        <CustomerCard2 />
        <CustomerCard3 />
        <CustomerCard4 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function CustomerList() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="customer list">
      <Header />
      <FiltersList />
      <ChatList />
    </div>
  );
}

export default function LeftNav() {
  return (
    <div className="relative size-full" data-name="left nav">
      <div className="content-stretch flex flex-col items-end relative size-full">
        <SearchArea />
        <div className="content-stretch flex h-[748px] items-start relative shrink-0 w-[440px]" data-name="Side Navigation">
          <SideNavigation />
          <CustomerList />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#d4d5d6] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}