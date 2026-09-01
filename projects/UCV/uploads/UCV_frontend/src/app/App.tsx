import { useState, useRef, useEffect, KeyboardEvent } from "react";
import PageChrome from "@/imports/Example2-1/index";
import AiToggleOn from "@/imports/AiBdcToggle/index";
import AiToggleOff from "@/imports/AiBdcToggle-1/index";
import Contact from "@/imports/Contact/index";
import MyInboxIcon from "@/imports/MyInbox/index";
import AllInboxIcon from "@/imports/AllInbox/index";
import UnassignedIcon from "@/imports/Unassigned/index";
import TekionAiIcon from "@/imports/TekionAi/index";
import TextChannelIcon from "@/imports/Text12Px/index";
import EmailChannelIcon from "@/imports/Email12Px/index";
import LiveChatChannelIcon from "@/imports/LiveChat12Px/index";
import CallChannelIcon from "@/imports/Call12Px/index";
import svgPaths from "@/imports/ModalServiceAi/svg-wjdb8pe8xy";
import navSvgPaths from "@/imports/Components-1/svg-9idzqpzide";
import imgCar1 from "@/imports/ModalServiceAi/50463c208b63e56f5329351b2e8a4dce833459e7.png";
import imgCar2 from "@/imports/ModalServiceAi/159e45f3bb7a84d1f45dac082cfd36e0e65900c3.png";

// ─────────────────────────────────────────────────────────────────────────────
// TYPES & DATA
// ─────────────────────────────────────────────────────────────────────────────
type Channel   = "phone" | "email";
type Filter    = "all" | "unread" | "ai-routed" | "ai-paused" | "unknown";
type HeaderTab = "internal" | "customer" | "live";
type NavKey    = "inbox" | "chat" | "ai" | "alerts" | "saved-chat" | "saved-email" | "saved-vip";

interface Conv { id:number; name:string; contact:string; channel:Channel; time:string; unread:number; assignee:string; navTags:NavKey[]; filter:Filter; bold:boolean; }
interface Msg  { id:number; author:string; isOutbound:boolean; isAI:boolean; text:string; time:string; image?:string; }

const CONVS: Conv[] = [
  { id:1,  name:"Jaxon Smith",  contact:"+1 602-123-4567",      channel:"phone", time:"3:15 PM",  unread:1, assignee:"Stevie Rain", navTags:["inbox","chat"],        filter:"unread",    bold:true  },
  { id:2,  name:"Unknown",      contact:"+1 602-123-4567",      channel:"phone", time:"3:15 PM",  unread:0, assignee:"Stevie Rain", navTags:["inbox","chat"],        filter:"ai-routed", bold:false },
  { id:3,  name:"Unknown",      contact:"jaxonsmith@email.com", channel:"email", time:"3:15 PM",  unread:0, assignee:"Stevie Rain", navTags:["inbox","chat"],        filter:"ai-paused", bold:false },
  { id:4,  name:"Jaxon Smith",  contact:"jaxonsmith@email.com", channel:"email", time:"3:15 PM",  unread:1, assignee:"Stevie Rain", navTags:["inbox","chat"],        filter:"unknown",   bold:true  },
  { id:5,  name:"Maria Torres", contact:"+1 555-987-6543",      channel:"phone", time:"1:20 PM",  unread:2, assignee:"Mike Chen",   navTags:["chat"],                filter:"unread",    bold:true  },
  { id:6,  name:"Ryan Park",    contact:"ryan.park@gmail.com",  channel:"email", time:"12:05 PM", unread:0, assignee:"Mike Chen",   navTags:["chat"],                filter:"ai-routed", bold:false },
  { id:7,  name:"Sarah Liu",    contact:"+1 602-555-1111",      channel:"phone", time:"11:30 AM", unread:1, assignee:"Amanda (AI)", navTags:["ai","chat"],           filter:"ai-routed", bold:true  },
  { id:8,  name:"Tom Brady",    contact:"tom@example.com",      channel:"email", time:"10:45 AM", unread:0, assignee:"Amanda (AI)", navTags:["ai","chat"],           filter:"ai-paused", bold:false },
  { id:9,  name:"Alex Johnson", contact:"+1 800-555-0001",      channel:"phone", time:"10:00 AM", unread:3, assignee:"Unassigned",  navTags:["alerts","chat"],       filter:"unknown",   bold:true  },
  { id:10, name:"Jamie Lee",    contact:"jamie@corp.com",        channel:"email", time:"9:30 AM",  unread:1, assignee:"Unassigned",  navTags:["alerts","chat"],       filter:"unread",    bold:true  },
  { id:11, name:"Chris Doe",    contact:"+1 602-777-8888",      channel:"phone", time:"9:00 AM",  unread:0, assignee:"Stevie Rain", navTags:["saved-chat","chat"],   filter:"all",       bold:false },
  { id:12, name:"Diana Prince", contact:"diana@email.com",       channel:"email", time:"8:45 AM",  unread:2, assignee:"Mike Chen",   navTags:["saved-email","chat"],  filter:"unread",    bold:true  },
  { id:13, name:"CEO Feedback", contact:"ceo@tachyon.com",       channel:"email", time:"8:00 AM",  unread:1, assignee:"Stevie Rain", navTags:["saved-vip","chat"],    filter:"unknown",   bold:true  },
];

const MSGS: Record<number, Msg[]> = {
  1:[
    { id:1, author:"Amanda (AI)", isOutbound:true,  isAI:true,  text:"I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday.", time:"Dec 26 2025 11:53 AM" },
    { id:2, author:"Stevie Rain", isOutbound:true,  isAI:false, text:"I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday. I just want to ensure everything is clear, including MSRP, dealer discounts, applicable incentives, taxes, and registration fees.", time:"Dec 26 2025 11:54 AM" },
    { id:3, author:"",            isOutbound:false, isAI:false, text:"Hello! I wanted to follow up regarding the quote I received for the 2024 Lexus RX 350. I appreciate the details you provided, including the MSRP, dealer discounts, incentives, and taxes. If there's anything else, please let me know!", time:"Dec 26 2025 11:52 AM" },
    { id:4, author:"Jafaar Jackson", isOutbound:true, isAI:false, text:"I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350.\n\nAt the moment, the vehicle is available in Atomic Silver with black interior. I can also prepare a lease vs. finance comparison.\n\nBest regards,\nNathan Morris", time:"Dec 26 2025 11:55 AM" },
  ],
  4:[
    { id:1, author:"Customer Name", isOutbound:false, isAI:false, text:"I hope you're having a great day. I wanted to follow up on your recent inquiry regarding the 2024 Lexus RX 350 and the quote I shared yesterday.", time:"Jan 9 2026 2:10 PM" },
    { id:2, author:"User Name",     isOutbound:true,  isAI:false, text:"cloud/link/file_name.com", time:"Jan 9 2026 2:10 PM", image:imgCar2 },
    { id:3, author:"User Name",     isOutbound:true,  isAI:false, text:"", time:"Jan 9 2026 2:10 PM", image:imgCar1 },
    { id:4, author:"Customer Name", isOutbound:false, isAI:false, text:"great day", time:"Jan 9 2026 2:11 PM" },
  ],
};
const FALLBACK_MSGS: Msg[] = [
  { id:1, author:"Stevie Rain", isOutbound:true,  isAI:false, text:"Hi there, how can I help you today?", time:"9:00 AM" },
  { id:2, author:"",            isOutbound:false, isAI:false, text:"I have a question about my account.", time:"9:02 AM" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ICON HELPERS
// ─────────────────────────────────────────────────────────────────────────────
// Maps channel string to the correct 12px Figma icon
type ChannelType = "phone" | "email" | "text" | "live-chat";
function ChannelIcon({ type }: { type: ChannelType }) {
  if (type === "email")     return <EmailChannelIcon />;
  if (type === "live-chat") return <LiveChatChannelIcon />;
  if (type === "phone")     return <CallChannelIcon />;
  return <TextChannelIcon />;
}

function Ico({ d, fill="#444F5C", vb="0 0 16 16" }: { d:string; fill?:string; vb?:string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox={vb}>
        <path d={d} fill={fill}/>
      </svg>
    </div>
  );
}

function AiLogo({ size=16 }: { size?:number }) {
  const id = `aig${size}`;
  return (
    <div className="overflow-clip relative shrink-0" style={{width:size,height:size}}>
      <div className="absolute" style={{inset:"10.55% 6.24% 10.56% 6.25%"}}>
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14.0012 12.6224">
          <defs>
            <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" x2="15.8697" y1="0" y2="3.1208">
              <stop stopColor="#25C8A5"/><stop offset=".5" stopColor="#1B90B4"/><stop offset="1" stopColor="#1A6CC4"/>
            </linearGradient>
          </defs>
          <path d={navSvgPaths.p3e548a00} fill={`url(#${id})`}/>
        </svg>
      </div>
    </div>
  );
}

function NavBadge({ n, blue }: { n:number; blue?:boolean }) {
  return (
    <div className={`content-stretch flex flex-col items-center justify-center px-[4px] rounded-[99px] shrink-0 ${blue?"bg-[#4285f4]":"bg-[#e1ecf5]"}`}>
      <div className="h-0 w-[8px]"/>
      <div className="content-stretch flex flex-col h-[16px] items-center justify-center pt-px shrink-0">
        <p className={`font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[12px] text-center whitespace-nowrap ${blue?"text-white":"text-[#444f5c]"}`}>{n}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TEXT HEADER (dark bar with tabs)
// ─────────────────────────────────────────────────────────────────────────────
const TAB_LEFT: Record<HeaderTab, number> = { internal:0, customer:113, live:226 };
const TABS: { key:HeaderTab; label:string }[] = [
  { key:"internal", label:"Internal" },
  { key:"customer", label:"Customer" },
  { key:"live",     label:"Live"     },
];

function TextHeader({ tab, onTab }: { tab:HeaderTab; onTab:(t:HeaderTab)=>void }) {
  return (
    <div className="bg-[#202631] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" style={{height:42}}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          {/* Active-tab white background pill */}
          <div className="absolute bottom-0 bg-white rounded-tl-[8px] rounded-tr-[8px] pointer-events-none transition-[left] duration-200"
            style={{ left: 16 + TAB_LEFT[tab], width:105, height:34 }}
          />
          {/* Tabs */}
          <div className="content-stretch flex gap-[8px] items-center relative z-10">
            {TABS.map((t,i) => (
              <div key={t.key} className="flex gap-[8px] items-center">
                {i>0 && <div className="bg-[#152532] h-[16px] opacity-30 rounded-[2px] w-px"/>}
                {t.key !== "live" && (
                  <button onClick={()=>onTab(t.key)}
                    className="content-stretch flex gap-[4px] items-center px-[12px] cursor-pointer"
                  >
                    <p className={`font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[14px] whitespace-nowrap ${tab===t.key?"text-[#161616]":"text-white"}`}>{t.label}</p>
                    <NavBadge n={2} blue/>
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Settings + window controls */}
          
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SEARCH AREA
// ─────────────────────────────────────────────────────────────────────────────
function SearchArea({ query, onChange }: { query:string; onChange:(v:string)=>void }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          {/* Dept selector */}
          <div className="bg-[#f4f5f6] content-stretch flex gap-[2px] items-end px-[6px] py-[8px] relative rounded-[4px] shrink-0">
            <div className="relative shrink-0 size-[16px]">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3fd6a7f0} fill="#FC602B"/>
              </svg>
            </div>
            <p className="[word-break:break-word] absolute font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[12px] text-white tracking-[0.024px] whitespace-nowrap" style={{left:16,top:13}}>R</p>
            <Ico d={svgPaths.p3c5381a0} fill="#444F5C"/>
          </div>
          {/* Real search input */}
          <div className="bg-[#f4f5f6] content-stretch flex flex-[1_0_0] flex-col isolate items-start justify-center min-w-px relative rounded-[2px]">
            <div className="bg-[#f4f5f6] relative rounded-[3px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center p-px relative size-full">
                  <div className="flex-[1_0_0] min-w-px relative">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[7px] relative size-full">
                        <input value={query} onChange={e=>onChange(e.target.value)} placeholder="Search"
                          className="flex-[1_0_0] min-w-px bg-transparent outline-none font-['Proxima_Nova:Regular',sans-serif] text-[14px] text-[#161616] placeholder-[#969aa3] leading-[16px]"
                        />
                        <Ico d={svgPaths.p86fdb00} fill="#969AA3"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none"/>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPACT NAV + EXPANDED NAV (hover)
// ─────────────────────────────────────────────────────────────────────────────
const MAIN_NAV_ITEMS: { key:NavKey; label:string; badge:number; blue:boolean; icon:(a:boolean)=>JSX.Element }[] = [
  { key:"inbox",  label:"My Inbox",    badge:2, blue:true,  icon:_a=><MyInboxIcon /> },
  { key:"chat",   label:"All Inbox",   badge:6, blue:false, icon:_a=><AllInboxIcon /> },
  { key:"ai",     label:"AI Activity", badge:5, blue:false, icon:_a=><TekionAiIcon /> },
  { key:"alerts", label:"Unassigned",  badge:3, blue:true,  icon:_a=><UnassignedIcon /> },
];
const QUICK_NAV_ITEMS: { key:NavKey; label:string; badge:number }[] = [
  { key:"saved-chat",  label:"Routed live chat", badge:9 },
  { key:"saved-email", label:"Routed emails",    badge:2 },
  { key:"saved-vip",   label:"VIP emails",       badge:0 },
];

function CompactNavButton({ isActive, onClick, children }: { isActive:boolean; onClick:()=>void; children:React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`relative flex items-center justify-center w-full h-[48px] cursor-pointer transition-colors ${isActive?"bg-[#dbebff]":"bg-white hover:bg-[#f4f5f6]"}`}
    >
      {isActive && <div aria-hidden className="absolute border-[#4285f4] border-l-[5px] border-solid inset-0 pointer-events-none"/>}
      {children}
    </button>
  );
}

function ExpandedNavRow({ isActive, onClick, icon, label, badge, blue }:
  { isActive:boolean; onClick:()=>void; icon:JSX.Element; label:string; badge:number; blue?:boolean }) {
  return (
    <button onClick={onClick}
      className={`relative flex gap-[8px] h-[48px] items-center pl-[16px] pr-[8px] w-full cursor-pointer transition-colors ${isActive?"bg-[#dbebff]":"bg-white hover:bg-[#f4f5f6]"}`}
    >
      {isActive && <div aria-hidden className="absolute border-[#4285f4] border-l-[4px] border-solid inset-0 pointer-events-none"/>}
      {/* Icon — fixed 16px so all labels share the same left edge */}
      <div className="shrink-0 flex items-center justify-center size-[16px]">{icon}</div>
      {/* Label — left-aligned text */}
      <p className={`flex-1 min-w-0 text-[14px] leading-[16px] text-left overflow-hidden text-ellipsis whitespace-nowrap text-[#161616] ${
        isActive ? "font-['Proxima_Nova:Semibold',sans-serif]" : "font-['Proxima_Nova:Regular',sans-serif]"
      }`}>{label}</p>
      {badge>0 && <NavBadge n={badge} blue={blue}/>}
    </button>
  );
}

// When alwaysExpanded is true the compact strip is skipped entirely — the
// expanded view is rendered as a regular fixed column (no hover logic needed).
function NavPanel({ active, onSelect, alwaysExpanded = false }: { active:NavKey; onSelect:(k:NavKey)=>void; alwaysExpanded?:boolean }) {
  const [hovered, setHovered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const open  = () => { clearTimeout(timer.current); setHovered(true); };
  const close = () => { timer.current = setTimeout(()=>setHovered(false), 120); };
  const expanded = alwaysExpanded || hovered;

  // ── Always-expanded mode: render as a plain fixed column, no overlay needed ──
  if (alwaysExpanded) {
    return (
      <div className="shrink-0 bg-white h-full flex flex-col overflow-y-auto border-r border-[#e8e9eb]" style={{width:140}}>
        <div className="flex flex-col py-[8px]">
          {/* Main nav items */}
          {MAIN_NAV_ITEMS.map(item => (
            <ExpandedNavRow key={item.key} isActive={active===item.key} onClick={()=>onSelect(item.key)}
              icon={item.icon(active===item.key)} label={item.label} badge={item.badge} blue={item.blue}
            />
          ))}
          {/* Separator */}
          <div className="mx-[12px] my-[6px] border-t border-[#e8e9eb]"/>
          {/* Quick access label */}
          <div className="px-[16px] py-[6px]">
            <p className="font-['Proxima_Nova:Semibold',sans-serif] text-[11px] text-[#969aa3] tracking-wider">QUICK ACCESS</p>
          </div>
          {/* Quick access items */}
          {QUICK_NAV_ITEMS.map(item => (
            <ExpandedNavRow key={item.key} isActive={active===item.key} onClick={()=>onSelect(item.key)}
              icon={<Ico d={navSvgPaths.p2653f600} fill={active===item.key?"#444F5C":"#969AA3"}/>}
              label={item.label} badge={item.badge}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── Hover-expand mode: compact strip with flyout overlay ──
  return (
    <div
      className="relative shrink-0"
      style={{ width: 48 }}
      onMouseEnter={open}
      onMouseLeave={close}
    >
      {/* Compact icon strip */}
      <div className="bg-white h-full relative border-r border-[#e8e9eb]">
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip py-[8px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            {MAIN_NAV_ITEMS.map(item => (
              <CompactNavButton key={item.key} isActive={active===item.key} onClick={()=>onSelect(item.key)}>
                {item.icon(active===item.key)}
                {item.badge>0 && (
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+8px)] top-[calc(50%-8px)]">
                    <NavBadge n={item.badge} blue={item.blue}/>
                  </div>
                )}
              </CompactNavButton>
            ))}
          </div>
          <div className="bg-white content-stretch flex gap-[8px] items-center py-[14px] relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-0 min-w-px relative">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" viewBox="0 0 48 1">
                  <line stroke="#E8E9EB" x2="48" y1="0.5" y2="0.5"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-[144px] relative shrink-0 w-full">
            {QUICK_NAV_ITEMS.map((item,i) => (
              <div key={item.key} className="absolute left-0 right-0" style={{top:i*48}}>
                <CompactNavButton isActive={active===item.key} onClick={()=>onSelect(item.key)}>
                  <Ico d={navSvgPaths.p2653f600} fill={active===item.key?"#444F5C":"#969AA3"}/>
                  {item.badge>0 && (
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+8px)] top-[calc(50%-8px)]">
                      <NavBadge n={item.badge}/>
                    </div>
                  )}
                </CompactNavButton>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded flyout overlay */}
      <div
        className="absolute top-0 left-0 bottom-0 z-50 overflow-hidden bg-white border-r border-[#d4d5d6]"
        style={{
          width: 172,
          opacity: expanded ? 1 : 0,
          pointerEvents: expanded ? "auto" : "none",
          transition: "opacity 140ms ease",
          boxShadow: expanded ? "4px 0 16px rgba(0,0,0,0.10)" : "none",
        }}
        onMouseEnter={open}
        onMouseLeave={close}
      >
        <div className="flex flex-col py-[8px] h-full overflow-y-auto">
          {MAIN_NAV_ITEMS.map(item => (
            <ExpandedNavRow key={item.key} isActive={active===item.key} onClick={()=>onSelect(item.key)}
              icon={item.icon(active===item.key)} label={item.label} badge={item.badge} blue={item.blue}
            />
          ))}
          <div className="mx-[12px] my-[6px] border-t border-[#e8e9eb]"/>
          <div className="px-[16px] py-[6px]">
            <p className="font-['Proxima_Nova:Semibold',sans-serif] text-[11px] text-[#969aa3] tracking-wider">QUICK ACCESS</p>
          </div>
          {QUICK_NAV_ITEMS.map(item => (
            <ExpandedNavRow key={item.key} isActive={active===item.key} onClick={()=>onSelect(item.key)}
              icon={<Ico d={navSvgPaths.p2653f600} fill="#444F5C"/>}
              label={item.label} badge={item.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOMER LIST
// ─────────────────────────────────────────────────────────────────────────────
const FILTERS: { key:Filter; label:string }[] = [
  { key:"all",       label:"All"          },
  { key:"unread",    label:"Unread (1)"   },
  { key:"ai-routed", label:"AI Routed (1)"},
  { key:"ai-paused", label:"AI Paused (1)"},
  { key:"unknown",   label:"Unknown (1)"  },
];

function ConvCard({ conv, isActive, onClick }: { conv:Conv; isActive:boolean; onClick:()=>void }) {
  const isPhone = conv.channel==="phone";
  return (
    <button onClick={onClick}
      className={`relative shrink-0 w-full text-left cursor-pointer transition-colors ${isActive?"bg-[#dbebff]":"bg-white hover:bg-[#f4f5f6]"}`}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start px-[12px] py-[16px] relative size-full">
          {/* Name + time */}
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[16px] min-w-px relative">
              <p className={`[word-break:break-word] absolute inset-0 leading-[16px] not-italic overflow-hidden text-[14px] text-ellipsis whitespace-nowrap ${
                conv.bold ? "font-['Proxima_Nova:Semibold',sans-serif] text-[#161616]" : "font-['Proxima_Nova:Regular',sans-serif] text-[#444f5c]"
              }`}>{conv.name}</p>
            </div>
            <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#969aa3] text-[12px] text-right whitespace-nowrap">{conv.time}</p>
          </div>
          {/* Contact + unread badge */}
          <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
              <div className="flex items-center justify-center shrink-0 opacity-60">
                <ChannelIcon type={isPhone ? "phone" : "email"} />
              </div>
              <div className="h-[16px] relative shrink-0 w-[104px]">
                <p className={`[word-break:break-word] absolute font-['Proxima_Nova:Regular',sans-serif] inset-0 leading-[16px] not-italic overflow-hidden ${conv.bold?"font-['Proxima_Nova:Semibold',sans-serif] text-[#161616]":"text-[#444f5c]"} text-[14px] text-ellipsis whitespace-nowrap`}>{conv.contact}</p>
              </div>
            </div>
            {conv.unread>0 && <NavBadge n={conv.unread} blue/>}
          </div>
          {/* Assignee */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">{conv.assignee}</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none"/>
    </button>
  );
}

const NAV_HEADING: Record<NavKey, string> = {
  inbox:        "My Inbox",
  chat:         "All Inbox",
  ai:           "AI Activity",
  alerts:       "Unassigned",
  "saved-chat": "Routed Live Chat",
  "saved-email":"Routed Emails",
  "saved-vip":  "VIP Emails",
};

function CustomerList({ navKey, convs, activeId, activeFilter, onSelect, onFilter }:
  { navKey:NavKey; convs:Conv[]; activeId:number; activeFilter:Filter; onSelect:(id:number)=>void; onFilter:(f:Filter)=>void }) {
  const shown = activeFilter==="all" ? convs : convs.filter(c=>c.filter===activeFilter);
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative">
      {/* Header */}
      <div className="bg-white relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">
              <span className="leading-[16px] overflow-hidden text-ellipsis">{NAV_HEADING[navKey]}</span>
            </p>
            <button className="content-stretch flex gap-[4px] items-center relative shrink-0 hover:opacity-70 cursor-pointer">
              <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">All Channels</p>
              <Ico d={svgPaths.p332afc00} fill="#444F5C"/>
            </button>
          </div>
        </div>
      </div>
      {/* Filter pills */}
      <div className="bg-white relative shrink-0 w-full">
        <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none"/>
        <div className="content-start flex flex-wrap gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          {FILTERS.map(f => (
            <button key={f.key} onClick={()=>onFilter(f.key)}
              className={`content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[4px] rounded-[1000px] shrink-0 cursor-pointer transition-colors ${
                activeFilter===f.key ? "bg-[#dbebff]" : "bg-[#edeef0] hover:bg-[#d8d9db]"
              }`}
            >
              <p className={`[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center whitespace-nowrap ${
                activeFilter===f.key ? "text-[#0060ff]" : "text-[#444f5c]"
              }`}>{f.label}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className="flex-1 overflow-y-auto w-full">
        {shown.length===0
          ? <div className="flex items-center justify-center h-[100px]">
              <p className="font-['Proxima_Nova:Regular',sans-serif] text-[14px] text-[#969aa3]">No conversations found</p>
            </div>
          : shown.map(c=><ConvCard key={c.id} conv={c} isActive={c.id===activeId} onClick={()=>onSelect(c.id)}/>)
        }
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CHAT PANEL
// ─────────────────────────────────────────────────────────────────────────────
function AiGradientText() {
  return (
    <p className="[word-break:break-word] bg-clip-text font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-[transparent] whitespace-nowrap"
      style={{backgroundImage:"linear-gradient(110.643deg, rgb(26,108,196) 0%, rgb(27,144,180) 50%, rgb(37,200,165) 100%)"}}>AI</p>
  );
}

function MsgBubble({ msg }: { msg:Msg }) {
  if (msg.isOutbound) return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
        {msg.isAI && <><AiLogo size={12}/><AiGradientText/></>}
        {!msg.isAI && <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[12px] whitespace-nowrap">{msg.author}</p>}
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#969aa3] text-[12px]">•</p>
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <ChannelIcon type="text" />
          <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#444f5c] text-[12px]">Text</p>
        </div>
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#969aa3] text-[12px]">•</p>
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#444f5c] text-[12px] whitespace-nowrap">{msg.time}</p>
      </div>
      <div className="bg-[#4285f4] content-stretch flex flex-col gap-[8px] items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[2px] shrink-0">
        {msg.text && <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-pre-line">{msg.text}</p>}
        {msg.image && (
          <div className="bg-white overflow-clip relative rounded-[6px] shrink-0 size-[96px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={msg.image}/>
          </div>
        )}
      </div>
    </div>
  );
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <ChannelIcon type="text" />
          <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#444f5c] text-[12px]">Text</p>
        </div>
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#969aa3] text-[12px]">•</p>
        <p className="font-['Proxima_Nova:Regular',sans-serif] leading-[16px] text-[#444f5c] text-[12px] whitespace-nowrap">{msg.time}</p>
      </div>
      <div className="bg-[#edeef0] content-stretch flex flex-col items-start max-w-[420px] p-[12px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[2px] rounded-tr-[12px] shrink-0">
        <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] whitespace-pre-line">{msg.text}</p>
      </div>
    </div>
  );
}

function ChatPanel({ conv, msgs, aiOn, onToggleAI, onSend }:
  { conv:Conv; msgs:Msg[]; aiOn:boolean; onToggleAI:()=>void; onSend:(t:string)=>void }) {
  const [draft, setDraft] = useState("");
  const threadRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{ threadRef.current?.scrollTo({top:threadRef.current.scrollHeight,behavior:"smooth"}); },[msgs]);

  function send() { const t=draft.trim(); if(!t) return; onSend(t); setDraft(""); }
  function onKey(e:KeyboardEvent<HTMLTextAreaElement>) { if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();} }

  return (
    <div className="flex flex-1 min-w-0 flex-col h-full overflow-hidden relative">
      {/* Name header */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden className="absolute border-[#e8e9eb] border-b border-solid inset-0 pointer-events-none"/>
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[8px] relative size-full">
              <button className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 hover:bg-[#f4f5f6] cursor-pointer">
                <Ico d={svgPaths.pb60b000} fill="#444F5C"/>
              </button>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <p className="[word-break:break-word] font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis whitespace-nowrap">{conv.name}</p>
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute inset-[10.64%_5.3%_9.37%_9.38%]">
                      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 13.65 12.8">
                        <path clipRule="evenodd" d={svgPaths.p10dc5300} fill="#444F5C" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#444f5c] text-[14px] text-ellipsis whitespace-nowrap">{conv.contact}</p>
              </div>
              {/* Right controls */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {/* Checkmark */}
                <div className="content-stretch flex gap-[8px] items-center p-[4px] relative shrink-0 hover:bg-[#f4f5f6] rounded-[2px] cursor-pointer">
                  <Ico d={svgPaths.p3168f480} fill="#444F5C"/>
                </div>
                {/* Separator */}
                <div className="h-[16px] relative shrink-0 w-px">
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 1 16">
                    <rect fill="#EDEEF0" height="16" rx="0.5" width="1"/>
                  </svg>
                </div>
                {/* AI toggle — ON uses AiBdcToggle, OFF uses AiBdcToggle-1 */}
                <div onClick={onToggleAI} className="shrink-0 cursor-pointer">
                  {aiOn ? <AiToggleOn /> : <AiToggleOff />}
                </div>
                {/* Assignee */}
                <div className="content-stretch flex isolate items-center relative shrink-0">
                  <div className="bg-[#dde4eb] mr-[-4px] relative rounded-[800px] shrink-0 size-[24px] z-[2] flex items-center justify-center border border-white">
                    <p className="font-['Proxima_Nova:Semibold',sans-serif] text-[10px] text-[#535860] uppercase">SR</p>
                  </div>
                  <button className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[800px] shrink-0 z-[1] hover:bg-[#e8e9eb] cursor-pointer">
                    <Ico d={svgPaths.pc674700} fill="#444F5C"/>
                  </button>
                </div>
                {/* Separator */}
                <div className="h-[16px] relative shrink-0 w-px">
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 1 16">
                    <rect fill="#EDEEF0" height="16" rx="0.5" width="1"/>
                  </svg>
                </div>
                <button className="content-stretch flex items-center justify-center p-[4px] relative rounded-[2px] shrink-0 hover:bg-[#f4f5f6] cursor-pointer">
                  <Ico d={svgPaths.p3851af80} fill="#444F5C"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Context tag bar */}
        <div className="bg-white relative shrink-0 w-full">
          <div aria-hidden className="absolute border-[#d4d5d6] border-b border-solid inset-0 pointer-events-none"/>
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-start pr-[16px] relative shrink-0">
                <Ico d={svgPaths.p3ce08500} fill="#444F5C"/>
                <p className="[word-break:break-word] font-['Proxima_Nova:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#444f5c] text-[14px] whitespace-nowrap">RO# - 220190</p>
              </div>
              <button className="content-stretch flex items-center relative shrink-0 hover:opacity-70 cursor-pointer">
                <Ico d={svgPaths.p3c5381a0} fill="#444F5C"/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Message thread */}
      <div ref={threadRef} className="bg-white flex-1 overflow-y-auto w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative">
          {msgs.map(m=><MsgBubble key={m.id} msg={m}/>)}
        </div>
      </div>

      {/* Composer */}
      <div className="bg-[#edeef0] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[8px] relative size-full">
          <div className="bg-white relative rounded-[4px] shrink-0 w-full" style={{minHeight:88}}>
            <div className="flex flex-row items-end size-full">
              <div className="content-stretch flex items-end p-[8px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-w-px relative">
                  <textarea value={draft} onChange={e=>setDraft(e.target.value)} onKeyDown={onKey}
                    placeholder="Press # to select a template, or start typing"
                    className="w-full flex-1 resize-none outline-none bg-transparent font-['Proxima_Nova:Regular',sans-serif] text-[14px] text-[#161616] placeholder-[#969aa3] leading-[16px] min-h-[40px]"
                  />
                  {/* Message options */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                      {[
                        [svgPaths.p31e1f500,"Add"],[svgPaths.p236ae6c0,"Emoji"],
                        [svgPaths.p3e56aa00,"Video"],[svgPaths.p10df17f0,"Note"],
                      ].map(([d,t])=>(
                        <button key={t as string} title={t as string}
                          className="bg-[#f4f5f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[4px] shrink-0 hover:bg-[#e8e9eb] cursor-pointer">
                          <Ico d={d as string} fill="#444F5C"/>
                        </button>
                      ))}
                    </div>
                    {/* Send */}
                    <button onClick={send}
                      className={`content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-opacity ${draft.trim()?"opacity-100 hover:opacity-80":"opacity-40 cursor-not-allowed"}`}
                    >
                      <div className="relative size-[24px]">
                        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 24 24">
                          <path d={svgPaths.p73df240} fill="#4285F4"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Key hints */}
          <div className="[word-break:break-word] content-stretch flex font-['Proxima_Nova:Regular',sans-serif] gap-[16px] h-[16px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#444f5c] text-[0px] text-right w-full whitespace-nowrap">
            <p className="relative shrink-0">
              <span className="leading-[16px] text-[12px]">Use</span>
              <span className="font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[12px]"> Enter</span>
              <span className="leading-[16px] text-[12px]"> to send message</span>
            </p>
            <p className="relative shrink-0">
              <span className="leading-[16px] text-[12px]">Use </span>
              <span className="font-['Proxima_Nova:Semibold',sans-serif] leading-[16px] text-[12px]">Shift+Enter</span>
              <span className="leading-[16px] text-[12px]"> to add new line</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LEFT SIDEBAR — dark compact app bar (matches screenshot far-left column)

// ─────────────────────────────────────────────────────────────────────────────
// RIGHT CUSTOMER DETAIL PANEL
//
// Renders the Figma Contact import faithfully.
// Scoped CSS achieves the required behaviour without touching the import:
//   • Header (avatar + name)   → sticky top: 0
//   • Tabs (Spends / About)    → sticky top: 88px  (below header)
//   • Container (all content)  → scrollable inside the same overflow-y parent
// ─────────────────────────────────────────────────────────────────────────────
function RightDetailPanel({ conv: _conv }: { conv: Conv }) {
  return (
    <>
      <style>{`
        /* Scope everything to this wrapper */
        .rp-contact-outer {
          width: 280px;
          flex-shrink: 0;
          height: 100%;
          overflow: hidden;
          border-left: 1px solid #e8e9eb;
          display: flex;
          flex-direction: column;
        }

        /* Make Contact's root div the scroll container */
        .rp-contact-outer [data-name="contact"] {
          height: 100%;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        /* Sticky: avatar + name header */
        .rp-contact-outer [data-name="contact"] > [data-name="Header"] {
          position: sticky;
          top: 0;
          z-index: 20;
          background: white;
          flex-shrink: 0;
        }

        /* Sticky: Spends / About tabs — sits flush below the header (~88px) */
        .rp-contact-outer [data-name="contact"] > [data-name="01 Small Default Tabs"] {
          position: sticky;
          top: 88px;
          z-index: 19;
          background: white;
          flex-shrink: 0;
        }

        /* Scrollable body — the Container with all sections */
        .rp-contact-outer [data-name="contact"] > [data-name="Container"] {
          flex: 1 0 auto;
        }
      `}</style>

      <div className="rp-contact-outer">
        <Contact />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// APP ROOT — fullscreen layout matching the screenshot
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [tab,    setTab]    = useState<HeaderTab>("customer");
  const [query,  setQuery]  = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [navKey, setNavKey] = useState<NavKey>("inbox");
  const [convId, setConvId] = useState(1);
  const [aiOn,   setAiOn]   = useState(true);
  const [msgMap, setMsgMap] = useState(MSGS);

  const visibleConvs = CONVS.filter(c => {
    const matchNav    = c.navTags.includes(navKey);
    const matchSearch = !query || c.name.toLowerCase().includes(query.toLowerCase()) || c.contact.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter==="all" || c.filter===filter;
    return matchNav && matchSearch && matchFilter;
  });

  function handleNavSelect(k: NavKey) {
    setNavKey(k); setFilter("all");
    const first = CONVS.find(c=>c.navTags.includes(k));
    if(first) setConvId(first.id);
  }

  const conv = CONVS.find(c=>c.id===convId) ?? CONVS[0];
  const msgs = msgMap[convId] ?? FALLBACK_MSGS;

  function handleSend(text: string) {
    setMsgMap(prev => ({
      ...prev,
      [convId]: [...(prev[convId]??FALLBACK_MSGS), {
        id:Date.now(), author:"Stevie Rain", isOutbound:true, isAI:false,
        text, time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),
      }],
    }));
  }

  return (
    // Root: fills the full viewport
    <div className="relative w-full h-full overflow-hidden bg-white">

      {/* ── Layer 1: Page chrome (non-interactive) ─────────────────
          TEKION menubar: absolute top-0, h=64px, full width
          Favorite bar:   absolute top-64px, left-0, w=64px, full height
      ─────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PageChrome />
      </div>

      {/* ── Layer 2: Communication interface ───────────────────────
          Starts after menubar (top:64px) and after favbar (left:64px)
      ─────────────────────────────────────────────────────────── */}
      <div className="absolute flex flex-col overflow-hidden" style={{top:64, left:64, right:0, bottom:0}}>

        {/* Tab bar: Internal / Customer / Live */}
        <TextHeader tab={tab} onTab={setTab}/>

        {/* Main content row */}
        <div className="flex flex-1 overflow-hidden">

          {/* Left panel: SearchArea spans full width above nav + list */}
          <div className="flex flex-col shrink-0 border-r border-[#d4d5d6]" style={{width:412}}>
            <SearchArea query={query} onChange={setQuery}/>
            <div className="flex flex-1 overflow-hidden">
              <NavPanel active={navKey} onSelect={handleNavSelect} alwaysExpanded />
              <CustomerList
                navKey={navKey}
                convs={visibleConvs} activeId={convId}
                activeFilter={filter} onSelect={setConvId} onFilter={setFilter}
              />
            </div>
          </div>

          {/* Chat panel — responsive, fills remaining width */}
          <ChatPanel
            conv={conv} msgs={msgs}
            aiOn={aiOn} onToggleAI={()=>setAiOn(v=>!v)}
            onSend={handleSend}
          />

          {/* Right customer detail panel */}
          <RightDetailPanel conv={conv}/>

        </div>
      </div>
    </div>
  );
}
