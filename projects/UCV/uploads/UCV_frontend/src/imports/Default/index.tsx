import svgPaths from "./svg-g9jrlpnryo";
import imgImage1 from "./63ca08b2a53c98790937830c4afbce9521a0ebcf.png";

function AppNameTile() {
  return (
    <div className="absolute bg-[#6f7884] content-stretch flex h-[36px] items-center justify-center left-[12px] overflow-clip rounded-tl-[2px] rounded-tr-[2px] top-[12px] w-[40px]" data-name="App name tile">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">C</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Container">
      <AppNameTile />
      <div className="absolute bg-[#fae3e1] h-[4px] left-[12px] rounded-bl-[2px] rounded-br-[2px] top-[48px] w-[40px]" data-name="Color Indicator" />
    </div>
  );
}

function AppNameTile1() {
  return (
    <div className="absolute bg-[#6f7884] content-stretch flex h-[36px] items-center justify-center left-[12px] overflow-clip rounded-tl-[2px] rounded-tr-[2px] top-[12px] w-[40px]" data-name="App name tile">
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">L</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Container">
      <AppNameTile1 />
      <div className="absolute bg-[#dcfaf6] h-[4px] left-[12px] rounded-bl-[2px] rounded-br-[2px] top-[48px] w-[40px]" data-name="Color Indicator" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
        <Container1 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
        <Container2 />
      </div>
    </div>
  );
}

function IconSize() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p15865d00} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function AppNameTile2() {
  return (
    <div className="absolute bg-[#6f7884] content-stretch flex h-[36px] items-center justify-center left-[12px] overflow-clip rounded-tl-[2px] rounded-tr-[2px] top-[8px] w-[40px]" data-name="App name tile">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
        <IconSize />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[72px] relative shrink-0 w-[64px]" data-name="Container">
      <AppNameTile2 />
      <div className="absolute bg-[#fae3e1] h-[4px] left-[12px] rounded-bl-[2px] rounded-br-[2px] top-[44px] w-[40px]" data-name="Color Indicator" />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[12px] text-center text-white top-[60px] w-[64px]">
        <p className="leading-[16px]">00.00 Hrs</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center py-[8px] relative shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#152532] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-center relative shrink-0" data-name=".Favbar Tile Button">
        <Container5 />
      </div>
      <div className="bg-[#edeef0] content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[1000px] shrink-0" data-name="01 Avatar">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#6d707a] text-[15px] text-center">
          <p className="leading-[18.333px]">AP</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
            <p className="leading-[16px]">12:50 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function IconSize1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p7be8700} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[16px] relative shrink-0 w-[120px]" data-name="Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 16">
        <g id="Logo">
          <path d={svgPaths.p2106fc40} fill="var(--fill-0, #00BFA5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navigation">
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Top Menu Icon Button">
        <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[2px] shrink-0 size-[32px]" data-name=".Button Base">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
            <IconSize1 />
          </div>
        </div>
      </div>
      <Logo />
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
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Text Wrapper">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#969aa3] text-[14px]">Search</p>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Text Field">
      <TextWrapper />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start max-w-[688px] min-w-px relative z-[2]" data-name="Container">
      <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name=".Top Menu Search">
        <div className="bg-white flex-[1_0_0] h-[32px] min-w-px relative" data-name="_Text Field Base">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
              <div className="content-stretch flex items-center relative shrink-0" data-name="_Prefix Suffix Base">
                <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
                  <IconSize2 />
                </div>
              </div>
              <TextField />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex flex-[1_0_0] isolate items-center justify-end min-w-px overflow-clip relative rounded-[2px]" data-name="Search">
      <Container7 />
    </div>
  );
}

function IconSize3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Size">
          <path d={svgPaths.p12b69700} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Icon">
        <IconSize3 />
      </div>
      <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Get Help</p>
    </div>
  );
}

function IconSize4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p298b7b80} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p22a56180} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p1169980} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p4646100} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function IconSize8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon Size">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Size">
          <path d={svgPaths.p37f2de80} fill="var(--fill-0, white)" id="Icon Color" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex gap-px items-start relative shrink-0" data-name=".Top Menu Split Button">
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Top Menu Split Action Text">
          <div className="bg-[#152532] content-stretch flex flex-col h-[32px] items-center justify-center min-w-[48px] pl-[12px] pr-[16px] py-[4px] relative rounded-bl-[2px] rounded-tl-[2px] shrink-0" data-name=".Button Base">
            <Container9 />
          </div>
        </div>
        <div className="content-stretch flex items-start relative shrink-0" data-name=".Top Menu Split Action Icon">
          <div className="bg-[#152532] content-stretch flex items-center justify-center px-[4px] relative rounded-br-[2px] rounded-tr-[2px] shrink-0 size-[32px]" data-name=".Button Base">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
              <IconSize4 />
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Top Menu Icon Button">
        <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[2px] shrink-0 size-[32px]" data-name=".Button Base">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
            <IconSize5 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Top Menu Icon Button">
        <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[2px] shrink-0 size-[32px]" data-name=".Button Base">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
            <IconSize6 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Top Menu Icon Button">
        <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[2px] shrink-0 size-[32px]" data-name=".Button Base">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
            <IconSize7 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-name=".Top Menu Icon Button">
        <div className="content-stretch flex items-center justify-center px-[4px] relative rounded-[2px] shrink-0 size-[32px]" data-name=".Button Base">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".Icon Wrapper">
            <IconSize8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] h-[64px] min-w-px relative" data-name="Main">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
          <Navigation />
          <Search />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function EditText() {
  return (
    <div className="h-[10.005px] relative shrink-0 w-[19.697px]" data-name="Edit Text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6972 10.005">
        <g id="Edit Text">
          <path d={svgPaths.p3506ea00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p356d5680} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[16px] min-w-px not-italic pt-[2px] relative text-white whitespace-nowrap" data-name="Container">
      <p className="font-['Proxima_Nova:Semibold',sans-serif] overflow-hidden relative shrink-0 text-[16px] text-ellipsis w-full">Tachyon Motors</p>
      <p className="font-['Proxima_Nova:Regular',sans-serif] opacity-80 overflow-hidden relative shrink-0 text-[12px] text-ellipsis w-full">Main site</p>
    </div>
  );
}

function IconSize9() {
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

export default function Default() {
  return (
    <div className="bg-[#f4f5f6] overflow-clip relative rounded-[12px] size-full" data-name="Default">
      <div className="absolute blur-[1px] h-[872px] left-[64px] opacity-80 top-[64px] w-[1376px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[98.68%] left-0 max-w-none top-0 w-full" src={imgImage1} />
        </div>
      </div>
      <div className="absolute bg-[#3f4757] bottom-0 content-stretch flex flex-col items-center left-0 top-[64px]" data-name="01 Favbar">
        <Container />
        <Container3 />
      </div>
      <div className="absolute bg-[#3f4757] content-stretch flex items-center left-0 top-0 w-[1440px]" data-name="01 Menubar">
        <Main />
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex gap-[8px] h-full items-center px-[16px] relative shrink-0 w-[296px]" data-name="Workspace Section">
            <div aria-hidden className="absolute border-[#152532] border-l border-solid inset-0 pointer-events-none" />
            <div className="bg-[#6285a3] content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="Workspace Icon">
              <EditText />
            </div>
            <Container10 />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="01 Icon Placeholder">
              <IconSize9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}