import svgPaths from "./svg-wjdb8pe8xy";
import imgWhiteCarSaleswomenLookingATheCameraTryingT11 from "./159e45f3bb7a84d1f45dac082cfd36e0e65900c3.png";
import imgAutomotiveEmotionIntelligenceCarBuyingJourneyE15602676838311 from "./50463c208b63e56f5329351b2e8a4dce833459e7.png";

function MinWidth() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function InternalSegment() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Internal Segment">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Internal</p>
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Internal Badge">
        <MinWidth />
        <Container />
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
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function CustomerSegment() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] relative shrink-0" data-name="Customer Segment">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">Customer</p>
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Customer Badge">
        <MinWidth1 />
        <Container1 />
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
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function LiveSegment() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[12px] relative shrink-0" data-name="Live Segment">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Live</p>
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Live Badge">
        <MinWidth2 />
        <Container2 />
      </div>
    </div>
  );
}

function HeaderSegment() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Header Segment">
      <InternalSegment />
      <div className="bg-[#152532] h-[16px] opacity-30 relative rounded-[2px] shrink-0 w-px" data-name="Spacer" />
      <CustomerSegment />
      <div className="bg-[#152532] h-[16px] opacity-30 relative rounded-[2px] shrink-0 w-px" data-name="Spacer" />
      <LiveSegment />
    </div>
  );
}

function SettingsTextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Settings Text Container">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Settings</p>
    </div>
  );
}

function IconSize() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3c5381a0} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function SettingsButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[76px]" data-name="Settings Button">
      <SettingsTextContainer />
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
        <IconSize />
      </div>
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center min-w-[48px] px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name=".Button Base">
      <SettingsButton />
    </div>
  );
}

function WindowControls() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Window Controls">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Minimize Button">
        <div className="absolute inset-[0.06%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9805 15.9805">
            <g id="Path">
              <path d={svgPaths.p4240b80} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p3de55c80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Expand Button">
        <div className="absolute inset-[3.09%_3.12%_3.05%_3.13%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0001 15.0181">
            <g id="Path">
              <path d={svgPaths.p1ad9e580} fill="var(--fill-0, white)" />
              <path d={svgPaths.p37c15a80} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close Button">
        <div className="absolute inset-[12.5%]" data-name="path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <g id="path">
              <path clipRule="evenodd" d={svgPaths.p19ac8e40} fill="var(--fill-0, white)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p404d200} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Button Container">
      <ButtonBase />
      <div className="content-stretch flex h-[16px] items-center relative shrink-0 w-px" data-name="Separator">
        <div className="absolute bottom-0 left-[0.5px] top-0 w-0" data-name="Separator Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
              <path d="M0.5 0V16" id="Separator Line" stroke="var(--stroke-0, #152532)" />
            </svg>
          </div>
        </div>
      </div>
      <WindowControls />
    </div>
  );
}

function TextHeader() {
  return (
    <div className="bg-[#202631] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="text header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <div className="absolute bg-white bottom-0 h-[34px] left-[125px] rounded-tl-[8px] rounded-tr-[8px] w-[105px]" data-name="Filter" />
          <HeaderSegment />
          <ButtonContainer />
        </div>
      </div>
    </div>
  );
}

function IconSize1() {
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

function IconSize2() {
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
            <IconSize2 />
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
    <div className="bg-white relative shrink-0 w-full" data-name="Search Area">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
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
              <IconSize1 />
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col isolate items-start justify-center min-w-px relative rounded-[2px]" data-name="04 Search input">
            <TextInput />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconSize3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pd648880} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
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
        <p className="leading-[16px]">6</p>
      </div>
    </div>
  );
}

function SideNavigationButton() {
  return (
    <div className="bg-[#dbebff] h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div aria-hidden className="absolute border-[#4285f4] border-l-5 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize3 />
          </div>
          <div className="absolute bg-[#4285f4] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] rounded-[99px] top-[8px]" data-name="01 Badge">
            <MinWidth3 />
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function MinWidth4() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">16</p>
      </div>
    </div>
  );
}

function SideNavigationButton1() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chat">
            <div className="absolute inset-[0_0_9.38%_0]" data-name="path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 14.5">
                <g id="path">
                  <path clipRule="evenodd" d={svgPaths.p3b0b3d80} fill="var(--fill-0, #444F5C)" fillRule="evenodd" />
                  <path d={svgPaths.p2da18400} fill="var(--fill-0, #444F5C)" />
                  <path d={svgPaths.p1230fe00} fill="var(--fill-0, #444F5C)" />
                  <path d={svgPaths.p24138ac0} fill="var(--fill-0, #444F5C)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute bg-[#ebf0f5] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] rounded-[99px] top-[8px] w-[16px]" data-name="01 Badge">
            <MinWidth4 />
            <Container4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SideNavigationButton2() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="AI Logo">
            <div className="absolute inset-[10.55%_6.24%_10.56%_6.25%]" data-name="Union">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0012 12.6224">
                <path d={svgPaths.p3e548a00} fill="url(#paint0_linear_1_29015)" id="Union" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_29015" x1="-4.47904e-10" x2="15.8697" y1="-5.28238e-09" y2="3.1208">
                    <stop stopColor="#25C8A5" />
                    <stop offset="0.5" stopColor="#1B90B4" />
                    <stop offset="1" stopColor="#1A6CC4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconSize4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p9d4f4c0} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
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
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function SideNavigationButton3() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize4 />
          </div>
          <div className="absolute bg-[#4285f4] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] rounded-[99px] top-[8px]" data-name="01 Badge">
            <MinWidth5 />
            <Container5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SideNavigationButton />
      <SideNavigationButton1 />
      <SideNavigationButton2 />
      <SideNavigationButton3 />
    </div>
  );
}

function IconSize5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pd648880} fill="var(--fill-0, #969AA3)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth6() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">5</p>
      </div>
    </div>
  );
}

function SideNavigationButton4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[12px] pt-[16px] px-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize5 />
          </div>
          <div className="absolute bg-[#ebf0f5] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] rounded-[99px] top-[8px]" data-name="01 Badge">
            <MinWidth6 />
            <Container6 />
          </div>
          <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Routed Live Chat</p>
        </div>
      </div>
    </div>
  );
}

function IconSize6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pd648880} fill="var(--fill-0, #969AA3)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth7() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SideNavigationButton5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[12px] pt-[16px] px-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize6 />
          </div>
          <div className="absolute bg-[#ebf0f5] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] rounded-[99px] top-[8px]" data-name="01 Badge">
            <MinWidth7 />
            <Container7 />
          </div>
          <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Customer Feedbacka</p>
        </div>
      </div>
    </div>
  );
}

function IconSize7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pd648880} fill="var(--fill-0, #969AA3)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth8() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function SideNavigationButton6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center pb-[12px] pt-[16px] px-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
            <IconSize7 />
          </div>
          <div className="absolute bg-[#ebf0f5] content-stretch flex flex-col items-center justify-center left-[26px] px-[4px] rounded-[99px] top-[8px]" data-name="01 Badge">
            <MinWidth8 />
            <Container8 />
          </div>
          <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[12px] text-center text-ellipsis w-[min-content] whitespace-nowrap">Support</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-white relative shrink-0 w-full" data-name="Side Navigation Button">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">FAVORITES</p>
            </div>
          </div>
        </div>
      </div>
      <SideNavigationButton4 />
      <SideNavigationButton5 />
      <SideNavigationButton6 />
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-white h-[612px] relative shrink-0 w-[48px]" data-name="Menu">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip py-[16px] relative rounded-[inherit] size-full">
        <Frame21 />
        <Frame20 />
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

function IconSize8() {
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
        <IconSize8 />
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
    <div className="bg-white relative shrink-0 w-full" data-name="Filters List">
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-start flex flex-wrap gap-[8px] items-start px-[12px] py-[8px] relative size-full">
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
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Contact Header">
      <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Name">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Jaxon Smith</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:15 PM</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0" data-name="Comms Icon">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="text-left-pointer">
          <div className="absolute inset-[8.89%_0_8.9%_0]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.86594">
              <path d={svgPaths.p2ae49380} fill="var(--fill-0, #969AA3)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[16px] relative shrink-0 w-[104px]" data-name="Source">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">+1 602-123-4567</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="phone-blocked">
        <div className="absolute inset-[4.52%_11.24%_4.39%_3.13%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2764 10.9316">
            <g id="Path">
              <path clipRule="evenodd" d={svgPaths.p69b2800} fill="var(--fill-0, #969AA3)" fillRule="evenodd" />
              <path d={svgPaths.p1ea13230} fill="var(--fill-0, #969AA3)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function MinWidth9() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">1</p>
      </div>
    </div>
  );
}

function PhoneNo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame5 />
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Unread">
        <MinWidth9 />
        <Container9 />
      </div>
    </div>
  );
}

function CustomerDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <ContactHeader />
      <PhoneNo />
    </div>
  );
}

function StatusContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Assignee">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Stevie Rain</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Conversation status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic opacity-0 relative shrink-0 text-[12px] text-white whitespace-nowrap">Resolved</p>
      </div>
    </div>
  );
}

function ContactHeader1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Contact Header">
      <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Name">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">Unknown</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:15 PM</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0" data-name="Comms Icon">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="text-left-pointer">
          <div className="absolute inset-[8.89%_0_8.9%_0]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.86594">
              <path d={svgPaths.p2ae49380} fill="var(--fill-0, #969AA3)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[16px] relative shrink-0 w-[104px]" data-name="Source">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">+1 602-123-4567</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="phone-blocked">
        <div className="absolute inset-[4.52%_11.24%_4.39%_3.13%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2764 10.9316">
            <g id="Path">
              <path clipRule="evenodd" d={svgPaths.p69b2800} fill="var(--fill-0, #969AA3)" fillRule="evenodd" />
              <path d={svgPaths.p1ea13230} fill="var(--fill-0, #969AA3)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PhoneNo1() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame6 />
    </div>
  );
}

function CustomerDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <ContactHeader1 />
      <PhoneNo1 />
    </div>
  );
}

function StatusContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Assignee">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Stevie Rain</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Conversation status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic opacity-0 relative shrink-0 text-[12px] text-white whitespace-nowrap">Resolved</p>
      </div>
    </div>
  );
}

function ContactHeader2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Contact Header">
      <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Name">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">Unknown</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:15 PM</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0" data-name="Comms Icon">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="email-filled">
          <div className="absolute inset-[15.9%_0_15.91%_0]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.1825">
              <path d={svgPaths.p93b8a00} fill="var(--fill-0, #969AA3)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[16px] relative shrink-0 w-[104px]" data-name="Source">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">jaxonsmith@email.com</p>
      </div>
    </div>
  );
}

function PhoneNo2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full" data-name="Phone No.">
      <Frame7 />
    </div>
  );
}

function CustomerDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <ContactHeader2 />
      <PhoneNo2 />
    </div>
  );
}

function StatusContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Assignee">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Stevie Rain</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Conversation status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic opacity-0 relative shrink-0 text-[12px] text-white whitespace-nowrap">Resolved</p>
      </div>
    </div>
  );
}

function ContactHeader3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Contact Header">
      <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Name">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Jaxon Smith</p>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">3:15 PM</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center p-[2px] relative shrink-0" data-name="Comms Icon">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="email-filled">
          <div className="absolute inset-[15.9%_0_15.91%_0]" data-name="Path">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.1825">
              <path d={svgPaths.p93b8a00} fill="var(--fill-0, #969AA3)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[16px] relative shrink-0 w-[104px]" data-name="Source">
        <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">jaxonsmith@email.com</p>
      </div>
    </div>
  );
}

function MinWidth10() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container10() {
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
      <Frame8 />
      <div className="bg-[#4285f4] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[99px] shrink-0" data-name="Unread">
        <MinWidth10 />
        <Container10 />
      </div>
    </div>
  );
}

function CustomerDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="customer details">
      <ContactHeader3 />
      <PhoneNo3 />
    </div>
  );
}

function StatusContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Status Container">
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Assignee">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Stevie Rain</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-name="Conversation status">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic opacity-0 relative shrink-0 text-[12px] text-white whitespace-nowrap">Resolved</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-[#dbebff] relative shrink-0 w-full" data-name="Customer card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative size-full">
            <CustomerDetails />
            <StatusContainer />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Customer card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative size-full">
            <CustomerDetails1 />
            <StatusContainer1 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Customer card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative size-full">
            <CustomerDetails2 />
            <StatusContainer2 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="bg-white relative shrink-0 w-full" data-name="Customer card">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative size-full">
            <CustomerDetails3 />
            <StatusContainer3 />
          </div>
        </div>
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function CustomerList() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative" data-name="customer list">
      <Header />
      <FiltersList />
      <Frame23 />
    </div>
  );
}

function IconSize9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p9d4f4c0} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth11() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">3</p>
      </div>
    </div>
  );
}

function IconSize10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3fddaec0} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth12() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">6</p>
      </div>
    </div>
  );
}

function IconSize11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pd648880} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth13() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function SideNavigationButton7() {
  return (
    <div className="h-[192px] relative shrink-0 w-[48px]" data-name="Side Navigation Button">
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-[144px]" data-name="Quick access navigation">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize9 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#4285f4] content-stretch flex flex-col items-center justify-center left-[calc(50%+8px)] px-[4px] rounded-[99px] top-[calc(50%-8px)]" data-name="01 Badge">
          <MinWidth11 />
          <Container11 />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-[96px]" data-name="Quick access navigation">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="AI Logo">
          <div className="absolute inset-[10.55%_6.24%_10.56%_6.25%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0012 12.6224">
              <path d={svgPaths.p3e548a00} fill="url(#paint0_linear_1_29015)" id="Union" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_29015" x1="-4.47904e-10" x2="15.8697" y1="-5.28238e-09" y2="3.1208">
                  <stop stopColor="#25C8A5" />
                  <stop offset="0.5" stopColor="#1B90B4" />
                  <stop offset="1" stopColor="#1A6CC4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-[48px]" data-name="Quick access navigation">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize10 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e1ecf5] content-stretch flex flex-col items-center justify-center left-[calc(50%+8px)] px-[4px] rounded-[99px] top-[calc(50%-8px)]" data-name="01 Badge">
          <MinWidth12 />
          <Container12 />
        </div>
      </div>
      <div className="absolute bg-[#dbebff] content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-0" data-name="Quick access navigation">
        <div aria-hidden className="absolute border-[#4285f4] border-l-4 border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize11 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#4285f4] content-stretch flex flex-col items-center justify-center left-[calc(50%+8px)] px-[4px] rounded-[99px] top-[calc(50%-8px)]" data-name="01 Badge">
          <MinWidth13 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function SideNavigationButton8() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center py-[14px] relative shrink-0 w-full" data-name="Side Navigation Button">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 1">
            <line id="Line 9" stroke="var(--stroke-0, #E8E9EB)" x2="48" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconSize12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p2653f600} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p2653f600} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth14() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">2</p>
      </div>
    </div>
  );
}

function IconSize14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p2653f600} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth15() {
  return <div className="h-0 relative shrink-0 w-[8px]" data-name="Min Width" />;
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">9</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[144px] relative shrink-0 w-full">
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-[96px]" data-name="Quick access navigation">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize12 />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-[48px]" data-name="Quick access navigation">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize13 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e1ecf5] content-stretch flex flex-col items-center justify-center left-[calc(50%+8px)] px-[4px] rounded-[99px] top-[calc(50%-8px)]" data-name="01 Badge">
          <MinWidth14 />
          <Container14 />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[8px] items-center justify-center left-0 p-[16px] size-[48px] top-0" data-name="Quick access navigation">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize14 />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e1ecf5] content-stretch flex flex-col items-center justify-center left-[calc(50%+8px)] px-[4px] rounded-[99px] top-[calc(50%-8px)]" data-name="01 Badge">
          <MinWidth15 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <SideNavigationButton8 />
      <Frame24 />
    </div>
  );
}

function Components() {
  return (
    <div className="absolute bg-white h-[612px] left-0 top-0 w-[48px]" data-name="Components">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip py-[8px] relative rounded-[inherit] size-full">
        <SideNavigationButton7 />
        <Frame25 />
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex h-[612px] items-start relative shrink-0 w-[340px]" data-name="Option 2">
      <Menu />
      <CustomerList />
      <Components />
    </div>
  );
}

function ModalNav() {
  return (
    <div className="h-full relative shrink-0 z-[3]" data-name="modal_nav">
      <div className="content-stretch flex flex-col items-end overflow-clip relative rounded-[inherit] size-full">
        <SearchArea />
        <Option />
      </div>
      <div aria-hidden className="absolute border-[#d4d5d6] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconSize15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pb60b000} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function ContactHeader4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Contact Header">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">Jaxon Smith</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="call">
        <div className="absolute inset-[10.64%_5.3%_9.37%_9.38%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.652 12.7981">
            <path clipRule="evenodd" d={svgPaths.p10dc5300} fill="var(--fill-0, #444F5C)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconSize16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3168f480} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[16px] relative shrink-0 w-px">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
        <g id="Frame 1948756447">
          <rect fill="var(--fill-0, #EDEEF0)" height="16" rx="0.5" width="1" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start py-[4px] relative shrink-0" data-name="Container">
      <p className="[word-break:break-word] bg-clip-text font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(110.643deg, rgb(26, 108, 196) 0%, rgb(27, 144, 180) 50%, rgb(37, 200, 165) 100%)" }}>
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
              <path d={svgPaths.p2273b300} fill="url(#paint0_linear_1_29158)" id="Union" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_29158" x1="4.30743e-09" x2="11.9019" y1="4.54025e-09" y2="2.34052">
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
        <Container16 />
      </div>
    </div>
  );
}

function IconSize17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.pc674700} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[16px] relative shrink-0 w-px">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
        <g id="Frame 1948756447">
          <rect fill="var(--fill-0, #EDEEF0)" height="16" rx="0.5" width="1" />
        </g>
      </svg>
    </div>
  );
}

function IconSize18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3851af80} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0" data-name="Marking as read">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize16 />
        </div>
      </div>
      <Frame4 />
      <div className="content-stretch flex gap-[4px] items-center justify-end pl-[6px] pr-[4px] py-[2px] relative rounded-[24px] shrink-0" style={{ backgroundImage: "linear-gradient(112.67deg, rgb(231, 247, 249) 0%, rgb(251, 248, 242) 100%)" }} data-name="AI Toggle">
        <div aria-hidden className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <ToggleButton />
        <div className="h-[24px] overflow-clip relative shrink-0 w-[36px]" data-name="_Toggle Base">
          <div className="-translate-y-1/2 absolute bg-white border border-[#e8e9eb] border-solid h-[20px] left-0 right-0 rounded-[18px] top-1/2" data-name="BG" />
          <div className="-translate-y-1/2 absolute bg-[#969aa3] left-[3px] rounded-[16px] size-[14px] top-1/2" data-name="Switch" />
        </div>
      </div>
      <div className="content-stretch flex isolate items-center relative shrink-0" data-name="Assignee">
        <div className="bg-[#dde4eb] mr-[-4px] relative rounded-[800px] shrink-0 size-[24px] z-[2]" data-name="Avatar">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute bg-[#ffaa6c] inset-0 opacity-0 overflow-clip rounded-[12px]" data-name="background Orange">
              <div className="absolute flex inset-[-67.86%_-24.01%_-20.44%_-64.29%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[hypot(-65.7998cqw,65.7998cqh)] rotate-45 w-[hypot(34.2002cqw,34.2002cqh)]">
                  <div className="bg-[#ff9f68] relative size-full" />
                </div>
              </div>
              <div className="absolute flex inset-[35.71%_-36.26%_-132.69%_-60.71%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[hypot(-50.9615cqw,50.9615cqh)] rotate-45 w-[hypot(49.0385cqw,49.0385cqh)]">
                  <div className="bg-[#fe7a50] relative size-full" />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute flex flex-col font-['Proxima_Nova:Bold',sans-serif] inset-[8.33%] justify-center leading-[0] not-italic text-[#535860] text-[10px] text-center uppercase">
              <p className="leading-[23px]">SR</p>
            </div>
          </div>
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[800px]" />
        </div>
        <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[800px] shrink-0 z-[1]" data-name="02 Icon Placeholder (Filled)">
          <IconSize17 />
        </div>
      </div>
      <Frame3 />
      <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="collapse panel">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
          <IconSize18 />
        </div>
      </div>
    </div>
  );
}

function IconSize19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3ce08500} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function LeadDetail() {
  return (
    <div className="content-stretch flex gap-[8px] items-start pr-[16px] relative shrink-0" data-name="Lead Detail">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Leading Icon">
        <IconSize19 />
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">RO# - 220190</p>
    </div>
  );
}

function IconSize20() {
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

function Icons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icons">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading Icon">
        <IconSize20 />
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Tag">
      <div aria-hidden className="absolute border-[#d4d5d6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <LeadDetail />
          <Icons />
        </div>
      </div>
    </div>
  );
}

function NameHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Name header">
      <div className="bg-white relative shrink-0 w-full" data-name="Conversation view header">
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">
            <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0" data-name="collapse panel">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
                <IconSize15 />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name & Source">
              <ContactHeader4 />
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">+1 602-123-4567</p>
            </div>
            <Frame22 />
          </div>
        </div>
      </div>
      <Tag />
    </div>
  );
}

function Assignee() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Assignee">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="AI logo">
        <div className="absolute left-0 overflow-clip size-[12px] top-0" data-name="AI Logo">
          <div className="absolute inset-[10.55%_6.24%_10.55%_6.25%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5006 9.4665">
              <path d={svgPaths.p2273b300} fill="url(#paint0_linear_1_29158)" id="Union" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_29158" x1="4.30743e-09" x2="11.9019" y1="4.54025e-09" y2="2.34052">
                  <stop stopColor="#25C8A5" />
                  <stop offset="0.5" stopColor="#1B90B4" />
                  <stop offset="1" stopColor="#1A6CC4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] max-w-[120px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[12px] text-ellipsis whitespace-nowrap">Amanda (AI)</p>
    </div>
  );
}

function TextToCustomer() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="text-to-customer">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="text-to-customer">
          <path d={svgPaths.p3722f0b0} fill="var(--fill-0, #969AA3)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="bg-[#edeef0] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0" data-name="Event pill">
        <div className="content-stretch flex items-center relative shrink-0" data-name="assignee">
          <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Stevie Rain</p>
        </div>
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">is assigned to this conversation</p>
      </div>
    </div>
  );
}

function TextToCustomer1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="text-to-customer">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="text-to-customer">
          <path d={svgPaths.p3722f0b0} fill="var(--fill-0, #969AA3)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function TextToCustomer2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="text-to-customer">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="text-to-customer">
          <path d={svgPaths.p3722f0b0} fill="var(--fill-0, #969AA3)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function TextToCustomer3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="text-to-customer">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="text-to-customer">
          <path d={svgPaths.p3722f0b0} fill="var(--fill-0, #969AA3)" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-center relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 368.5 1">
            <line id="Line 4" stroke="var(--stroke-0, #FC602B)" x2="368.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#fc602b] text-[12px] whitespace-nowrap">New Message</p>
      <div className="flex-[1_0_0] h-0 min-w-px relative">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 368.5 1">
            <line id="Line 4" stroke="var(--stroke-0, #FC602B)" x2="368.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Customer Name</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="text-left-pointer">
        <div className="absolute inset-[8.89%_0_8.9%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.86594">
            <path d={svgPaths.p2ae49380} fill="var(--fill-0, #969AA3)" id="Path" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jan 9 2026 2:10 PM</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame15 />
      <div className="bg-[#edeef0] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] w-[366px]">{`I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday.`}</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">User Name</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="text-to-customer">
        <div className="absolute inset-[8.89%_0_8.9%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.86594">
            <path d={svgPaths.p295d0180} fill="var(--fill-0, #969AA3)" id="Path" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jan 9 2026 2:10 PM</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex items-center p-[4px] right-0 rounded-bl-[4px] top-0">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="redirect">
        <div className="absolute inset-[11.5%_11.99%_6.63%_6.34%]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.80069 9.82496">
            <g id="Path">
              <path d={svgPaths.p2633000} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3b2b4f00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full">
      <Frame16 />
      <div className="bg-[#4285f4] content-stretch flex flex-col gap-[8px] items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="text">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white underline whitespace-nowrap">cloud/link/file_name.com</p>
        <div className="bg-white overflow-clip relative rounded-[6px] shrink-0 size-[96px]" data-name="filethumbnail/vid_link">
          <div className="absolute h-[373px] left-[-127px] top-[-79px] w-[224px]" data-name="white-car-saleswomen-looking-a-the-camera-trying-t (1) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteCarSaleswomenLookingATheCameraTryingT11} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.7)] inset-[-5.56%]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%+0.5px)] top-1/2 w-[13px]" data-name="Path">
            <div className="absolute inset-[4.92%_6.98%_4.92%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.092 14.424">
                <path d={svgPaths.p5133d00} fill="var(--fill-0, white)" id="Path" />
              </svg>
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">User Name</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="text-to-customer">
        <div className="absolute inset-[8.89%_0_8.9%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.86594">
            <path d={svgPaths.p295d0180} fill="var(--fill-0, #969AA3)" id="Path" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jan 9 2026 2:10 PM</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center justify-center left-0 px-[8px] py-[12px] right-0">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[12px] text-ellipsis whitespace-nowrap">+4 More</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-white overflow-clip relative rounded-[4px] shrink-0 size-[96px]" data-name="filethumbnail">
        <div className="absolute h-[216px] left-[-114px] top-[-29px] w-[324px]" data-name="Automotive-Emotion-Intelligence-Car-Buying-Journey-e1560267683831 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAutomotiveEmotionIntelligenceCarBuyingJourneyE15602676838311} />
        </div>
      </div>
      <div className="bg-white overflow-clip relative rounded-[6px] shrink-0 size-[96px]" data-name="filethumbnail">
        <div className="absolute h-[373px] left-[-127px] top-[-80px] w-[224px]" data-name="white-car-saleswomen-looking-a-the-camera-trying-t (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteCarSaleswomenLookingATheCameraTryingT11} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-[-5.56%]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%+0.5px)] top-1/2 w-[13px]" data-name="Path">
          <div className="absolute inset-[4.92%_6.98%_4.92%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.092 14.424">
              <path d={svgPaths.p5133d00} fill="var(--fill-0, white)" id="Path" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white overflow-clip relative rounded-[6px] shrink-0 size-[96px]" data-name="filethumbnail">
        <div className="absolute h-[547px] left-[-202px] top-[-127px] w-[328px]" data-name="white-car-saleswomen-looking-a-the-camera-trying-t (1) 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhiteCarSaleswomenLookingATheCameraTryingT11} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.7)] inset-[-5.56%]" />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full">
      <Frame17 />
      <div className="bg-[#4285f4] content-stretch flex flex-col gap-[8px] items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[328px]" data-name="text">
        <Frame19 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Customer Name</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="text-left-pointer">
        <div className="absolute inset-[8.89%_0_8.9%_0]" data-name="Path">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.86594">
            <path d={svgPaths.p2ae49380} fill="var(--fill-0, #969AA3)" id="Path" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jan 9 2026 2:10 PM</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame18 />
      <div className="bg-[#edeef0] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">great day</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start opacity-0 relative shrink-0 w-full">
      <div className="bg-[#edeef0] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] shrink-0" data-name="text">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-nowrap">great day</p>
      </div>
    </div>
  );
}

function Convo() {
  return (
    <div className="bg-white h-[456px] relative shrink-0 w-full" data-name="convo">
      <div className="overflow-x-clip overflow-y-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Chat bubble type">
            <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Metadata">
              <Assignee />
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data ↪ [Comms Icon type]">
                <TextToCustomer />
                <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
              </div>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Dec 26 2025 11:53 AM</p>
            </div>
            <div className="bg-[#4285f4] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[2px] shrink-0" data-name="text type">
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[366px]">{`I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday.`}</p>
            </div>
          </div>
          <Frame1 />
          <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Chat bubble type">
            <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Metadata">
              <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Stevie Rain</p>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data ↪ [Comms Icon type]">
                <TextToCustomer1 />
                <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
              </div>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Dec 26 2025 11:54 AM</p>
            </div>
            <div className="bg-[#4285f4] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[2px] shrink-0" data-name="text type">
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white w-[366px]">{`I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday. I just want to ensure everything is clear, including MSRP, dealer discounts, applicable incentives, taxes, and ...Read More`}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Chat bubble type">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Metadata">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data ↪ [Comms Icon type]">
                <TextToCustomer2 />
                <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
              </div>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Dec 26 2025 11:52 AM</p>
            </div>
            <div className="bg-[#edeef0] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[2px] rounded-tr-[12px] shrink-0 w-[229px]" data-name="Inbound Message type">
              <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[0px] w-full">
                <span className="leading-[20px] text-[14px]">{`Hello! I wanted to follow up regarding the quote I received for the 2024 Lexus RX 350. I appreciate the details you provided, including the MSRP, dealer discounts, incentives, and taxes. If there's anything else, please let me know!`}</span>
                <span className="leading-[20px] text-[14px]">...</span>
                <span className="font-['Proxima_Nova:Semibold',sans-serif] leading-[20px] text-[#3373dd] text-[14px]">Read More</span>
              </p>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Chat bubble type">
            <div className="flex flex-col items-end size-full">
              <div className="content-stretch flex flex-col gap-[4px] items-end px-[16px] relative size-full">
                <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Metadata">
                  <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Jafaar Jackson</p>
                  <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Meta data ↪ [Comms Icon type]">
                    <TextToCustomer3 />
                    <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Text</p>
                  </div>
                  <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] whitespace-nowrap">•</p>
                  <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">Dec 26 2025 11:54 AM</p>
                </div>
                <div className="bg-[#4285f4] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[2px] shrink-0" data-name="text type">
                  <div className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[366px] whitespace-pre-wrap">
                    <p className="leading-[20px] mb-0">{`I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday. I just want to ensure everything is clear, including MSRP, dealer discounts, applicable incentives, taxes, and registration fees.`}</p>
                    <p className="leading-[20px] mb-0">​</p>
                    <p className="leading-[20px] mb-0">{`At the moment, the vehicle you selected is available in Atomic Silver with black interior. If you'd like, I can also prepare a lease vs. finance comparison based on different down payment scenarios.`}</p>
                    <p className="leading-[20px]">
                      Best regards,
                      <br aria-hidden />
                      Nathan Morris
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Frame2 />
          <Frame12 />
          <Frame10 />
          <Frame11 />
          <Frame13 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function IconSize21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p31e1f500} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p236ae6c0} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p3e56aa00} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p10df17f0} fill="var(--fill-0, #444F5C)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function MessageIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Message Icons">
      <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize21 />
      </div>
      <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[800px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize22 />
      </div>
      <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize23 />
      </div>
      <div className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="02 Icon Placeholder (Filled)">
        <IconSize24 />
      </div>
    </div>
  );
}

function IconSize25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p73df240} fill="var(--fill-0, #4285F4)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function SendButton() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Send Button">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Leading Icon">
        <IconSize25 />
      </div>
    </div>
  );
}

function SendButtonContainer() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Send Button Container">
      <SendButton />
    </div>
  );
}

function MessageOptions() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Message Options">
      <MessageIcons />
      <SendButtonContainer />
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative" data-name="Icons">
      <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[14px] w-full">Press # to select a template, or start typing</p>
      <MessageOptions />
    </div>
  );
}

function MessageBox1() {
  return (
    <div className="bg-white h-[88px] relative rounded-[4px] shrink-0 w-full" data-name="Message Box">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end p-[8px] relative size-full">
          <Icons1 />
        </div>
      </div>
    </div>
  );
}

function MessageInstructions() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Proxima_Nova:Regular',sans-serif] gap-[16px] h-[16px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[0px] text-right w-full whitespace-nowrap" data-name="Message Instructions">
      <p className="relative shrink-0">
        <span className="leading-[16px] text-[12px]">Use</span>
        <span className="font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[12px]">{` Enter`}</span>
        <span className="leading-[16px] text-[12px]">{` to send message`}</span>
      </p>
      <p className="relative shrink-0">
        <span className="leading-[16px] text-[12px]">{`Use `}</span>
        <span className="font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[12px]">Shift+Enter</span>
        <span className="leading-[16px] text-[12px]">{` to add new line`}</span>
      </p>
    </div>
  );
}

function MessageBox() {
  return (
    <div className="bg-[#edeef0] relative shrink-0 w-full" data-name="Message box">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[8px] relative size-full">
        <MessageBox1 />
        <MessageInstructions />
      </div>
    </div>
  );
}

function MessageBox2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Message box 3">
      <MessageBox />
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative z-[2]" data-name="chat">
      <NameHeader />
      <Convo />
      <MessageBox2 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] isolate items-start min-h-px relative w-full" data-name="Main Content Area">
      <ModalNav />
      <Chat />
    </div>
  );
}

export default function ModalServiceAi() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_8px_8px_rgba(22,22,26,0.08),0px_24px_24px_rgba(22,22,26,0.12)] flex flex-col items-start relative rounded-[8px] size-full" data-name="Modal_Service Ai">
      <TextHeader />
      <MainContentArea />
    </div>
  );
}