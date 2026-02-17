const panel = document.getElementById('chatPanel');
const mainContent = document.getElementById('mainContent');
// const btnMinimize = document.getElementById('btnMinimize'); // DELETED - Element doesn't exist
// const btnRestoreMin = document.getElementById('btnRestoreMin'); // DELETED - Element doesn't exist
// const btnCloseMin = document.getElementById('btnCloseMin'); // DELETED - Element doesn't exist
// const btnFull = document.getElementById('btnFull'); // DELETED - Element doesn't exist
// const btnDock = document.getElementById('btnDock'); // DELETED - Element doesn't exist
// const btnClose = document.getElementById('btnClose'); // DELETED - Element doesn't exist
const navAiToggle = document.getElementById('navAiToggle');

// Mobile FAB
const mobileFab = document.getElementById('mobileFab');

// Context Elements
const contextRow = document.getElementById('contextRow');

// Context Menu Popups
const contextMenu = document.getElementById('contextMenu');
const contextList = document.getElementById('contextList');
const btnContextBack = document.getElementById('btnContextBack');
const contextTitle = document.getElementById('contextTitle');


const historySheet = document.getElementById('historySheet');
const btnShowHistory = document.getElementById('btnShowHistory');
const historyPlaceholder = document.getElementById('historyPlaceholder');

const emptyState = document.getElementById('emptyState');
const activeChat = document.getElementById('activeChat');
const chatScrollArea = document.querySelector('.chat-scroll-area');
const chatHeaderTitle = document.getElementById('chatHeaderTitle');

// Lists
const recentList = document.getElementById('recentList');
const suggestionsList = document.getElementById('suggestionsList');

const btnSlashMenu = document.getElementById('btnSlashMenu');
const promptSheet = document.getElementById('promptSheet');
const promptList = document.getElementById('promptList');


let editingMessageBubble = null;
const dragHandle = document.getElementById('dragHandle');

// Input
const mainInput = document.getElementById('mainInput');
const btnSend = document.getElementById('btnSend');
const btnMic = document.getElementById('btnMic');
const btnAttach = document.getElementById('btnAttach');
const fileInput = document.getElementById('fileInput');
const attachmentArea = document.getElementById('attachmentArea');
const listeningOverlay = document.getElementById('listeningOverlay');
const btnListenClose = document.getElementById('btnListenClose');
const btnListenStop = document.getElementById('btnListenStop');
const listenTimer = document.getElementById('listenTimer');
const unifiedContextPill = document.getElementById('unifiedContextPill');
const enhancedInputBox = document.getElementById('enhancedInputBox');
const phItem1 = document.getElementById('phItem1');
const phItem2 = document.getElementById('phItem2');

// Menu Elements
// const globalContextMenu = document.getElementById('globalContextMenu'); // COMMENTED OUT - Element doesn't exist yet
const pinText = document.getElementById('pinText'); // Element doesn't exist - will be null

const btnChatMenu = document.getElementById('btnChatMenu');
const chatDropdown = document.getElementById('chatDropdown');
const chatMenuContainer = document.getElementById('chatMenuContainer');
const headerPinText = document.getElementById('headerPinText');

// Header New Chat Btn
const btnHeaderNewChat = document.getElementById('btnHeaderNewChat');

// Top Bar for Aurora Effect
const chatTopBar = document.getElementById('chatTopBar');

// ========================================
// GLOBAL SEARCH - AI SEARCH FUNCTIONALITY
// ========================================

// AI Data Central Store (Consolidated from ai-data.json)
const AI_DATA = {
    "aiSuggestions": [
        { "icon": "✨", "text": "What should I focus on today?" },
        { "icon": "🔥", "text": "Summarize recent hot leads" },
        { "icon": "🚗", "text": "List high-priority test drives" }
    ],
    "thinkingSteps": {
        "last_activity_flora": [
            "Searching communication logs for Flora Fleisher...",
            "Retrieving most recent interaction...",
            "Formatting activity details..."
        ],
        "default": [
            "Analyzing user inquiry...",
            "Identifying CRM action items...",
            "Querying customer and vehicle records...",
            "Validating inventory and deal status...",
            "Synthesizing optimal response..."
        ],
        "ryan_clarify": [
            "Reading your request...",
            "Searching contact list for 'Ryan'...",
            "Found 5 people with that name.",
            "Checking who has been active recently...",
            "I need to check which Ryan you are referring to."
        ],
        "ryan_details": [
            "Looking up Ryan Carter's (customerID: 891) profile...",
            "Checking the system for active deals...",
            "Found 2 open deals for this contact.",
            "Pulling deal details...",
            "Formatting the deal summary for you."
        ],
        "appointment_report": [
            "Accessing appointment records",
            "Standardizing data",
            "Filtering scope",
            "Computing KPIs",
            "Linking outcomes",
            "Segmenting performance",
            "Correlating feedback",
            "Flagging anomalies",
            "Generating report"
        ],
        "safety_tech_query": [
            "Analyzing customer request for safety and tech features...",
            "Searching vehicle catalog for 2023 Nebula Nimbus...",
            "Extracting safety features: Proactive Collision Mitigation, Matrix LED Lighting...",
            "Extracting tech features: Nebula Connect 2.0, Holographic Display, Smart Air Filtration...",
            "Formulating summary for appointment notes...",
            "Updating appointment record..."
        ],
        "/credit-prequal": [
            "Directing secure connection to credit bureau...",
            "Retrieving soft-pull estimate for customer...",
            "Analyzing debt-to-income ratio and payment history...",
            "Calculating Tier eligibility and maximum loan amount...",
            "Preparing final pre-qualification summary..."
        ],
        "create_deal_test_drive": [
            "Analyzing request for deal creation and test drive scheduling...",
            "Detected combined intent from user instruction…",
            "Identifying necessary steps for deal creation…",
            "Identifying necessary steps for scheduling test drive appointment…",
            "Compiling action items into a checklist…"
        ],
        "focus_today": [
            "Analyzing daily schedule...",
            "Checking urgent emails and chats...",
            "Reviewing missed follow-ups...",
            "Prioritizing tasks based on urgency..."
        ],
        "quote_customers": [
            "Querying leads pending quotes...",
            "Checking communication history...",
            "Formatting customer list..."
        ],
        "vehicle_inquiry": [
            "Querying inventory for '2023 AeroVibe'...",
            "Checking vehicle specifications...",
            "Checking vehicle status and location..."
        ],
        "sarah_brief": [
            "Pulling customer profile...",
            "Analyzing recent activity...",
            "Formatting summary card..."
        ],
        "tradein_objection": [
            "Analyzing customer sentiment...",
            "Retrieving market value data for VIN...",
            "Comparing retail vs. wholesale pricing...",
            "Identifying reconditioning costs...",
            "Formulating negotiation strategy..."
        ],
        "confirm_sms": [
            "Reviewing Flora Fleisher's contact profile...",
            "Accessing dealership communication logs...",
            "Identifying Tuesday 10 AM appointment for 2023 AeroVibe...",
            "Drafting confirmation message with correct appointment details...",
            "Validating SMS channel availability..."
        ],
        "equity_alert": [
            "Analyzing customer profile for Curtis Gable...",
            "Retrieving lease/finance terms for current vehicle...",
            "Fetching current market trade-in value for 2023 Nebula Nimbus...",
            "Calculating remaining payoff and net equity status...",
            "Identifying optimal upgrade path with minimal payment change...",
            "Formulating upgrade recommendation..."
        ],
        "buy_back": [
            "Analyzing market demand for 2022 Lunar Blitz...",
            "Checking inventory stock levels for pre-owned sports models...",
            "Retrieving customer records for Tony Smehrik...",
            "Evaluating vehicle condition and KBB valuation benchmarks...",
            "Generating aggressive buy-back incentive strategy...",
            "Formatting loyalty credit offer..."
        ],
        "Summarize recent hot leads": [
            "Scanning CRM for active leads with high intent signals...",
            "Cross-referencing web activity (visits, vehicle views) with inventory data...",
            "Identifying top priority matches based on engagement and financing status...",
            "Attaching pro-active follow-up actions to identified opportunities...",
            "Consolidating lead data into actionable summary cards..."
        ],
        "List high-priority test drives": [
            "Accessing appointment calendar for Jan 27, 2026...",
            "Filtering for 'Test Drive' appointment types...",
            "Identifying high-priority leads with active vehicle interest...",
            "Cross-referencing with vehicle availability in inventory...",
            "Sorting appointments by scheduled time...",
            "Formatting the priority list for display..."
        ],
        "leads_interested_aerovibe": [
            "Analyzing request for Aerovibe leads...",
            "Querying CRM for recent Aerovibe inquiries...",
            "Found 5 matches in the last 30 days.",
            "Compiling contact details and deal status...",
            "Generating list view."
        ],
        "automate_sales_opportunities": [
            "Analyzing automation request...",
            "Identifying report type: Sales Opportunities...",
            "Checking report parameters...",
            "Asking for clarification details..."
        ],
        "automate_sales_opp_confirmed": [
            "Reading automation details...",
            "Format: PDF",
            "Schedule: 8:15 AM",
            "Delivery: Email",
            "Configuring automation rules...",
            "Saving task..."
        ],
        "automate_report_confirmed_simple": [
            "Analyzing request for Monthly Appointment Report...",
            "Setting schedule: Every Monday 9am...",
            "Setting delivery: Email...",
            "Creating automation task..."
        ]
    },
    "thinkingSummaries": {
        "default": "Analyzed your CRM inquiry and cross-referenced with your dealership records to provide the most relevant response.",
        "/credit-prequal": "I've processed the soft credit inquiry and retrieved the current qualification status and eligible rates.",
        "ryan_clarify": "Found multiple 'Ryan' contacts in your system. I've narrowed it down to 5 active matches for your review.",
        "ryan_details": "Located Ryan Carter's profile and identified 2 active deals. I've compiled the status and pricing for both vehicles.",
        "appointment_report": "Gathered and analyzed appointment performance data across all regions to generate a comprehensive monthly report.",
        "safety_tech_query": "Analyzed the safety and tech features for the 2023 Nebula Nimbus and updated the appointment notes for Ryan Carter.",
        "focus_today": "I've analyzed your schedule and communications. Here are the top 3 items requiring your attention today.",
        "quote_customers": "I've identified 5 customers who are currently waiting for a quote.",
        "vehicle_inquiry": "I've queried the inventory for 2023 AeroVibe and found matching vehicles.",
        "tradein_objection": "I've analyzed the trade-in objection. The customer is likely conflating retail and trade-in values. I recommend pivoting to tax savings.",
        "confirm_sms": "Prepared a personalized confirmation text for Flora Fleisher's upcoming appointment based on her recent AeroVibe inquiry.",
        "Summarize recent hot leads": "Analyzed your current lead funnel and identified 3 high-intent customers who require immediate attention based on their recent activity and vehicle interest.",
        "sarah_brief": "I've retrieved the latest details for Flora Fleisher, including her recent vehicle interest and lead source.",
        "create_deal_test_drive": "I've identified and assigned these tasks to an T-ONE agent…",
        "List high-priority test drives": "I've retrieved today's high-priority test drive appointments and sorted them by scheduled time for your review.",
        "equity_alert": "Analyzed Curtis Gable's equity position. He has $4,200 in positive equity on his 2023 Nebula Nimbus, making him an ideal candidate for an upgrade.",
        "buy_back": "I've formulated a buy-back strategy for Tony Smehrik's 2022 Lunar Blitz. Since we have zero similar units in stock, I recommend a 102% KBB offer plus a loyalty credit.",
        "leads_interested_aerovibe": "I've identified 5 leads who have expressed interest in the Aerovibe."
    },
    "aiResponses": {
        "leads_interested_aerovibe": `<p>Here are the leads Interested in Aerovibe:</p><div class="compact-list-container"><div class="compact-list-item"><div class="avatar-circle avatar-pink">MD</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Matilda Dayton</span><span class="item-id">#C01</span></div><div class="item-sub-row">+1 (311) 555-2368 • matildadayton@tmail.com</div></div><div class="item-meta-info"><span class="meta-date">10:30 AM</span><span class="deal-badge badge-grey">Source: Internet</span></div></div><div class="compact-list-item"><div class="avatar-circle avatar-green">CG</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Curtis Gable</span><span class="item-id">#C02</span></div><div class="item-sub-row">+1 (555) 555-2368 • curtisgable@tmail.com</div></div><div class="item-meta-info"><span class="meta-date">Yesterday</span><span class="deal-badge badge-grey">Source: Walk-In</span></div></div><div class="compact-list-item"><div class="avatar-circle avatar-grey">TS</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Tony Smehrik</span><span class="item-id">#C03</span></div><div class="item-sub-row">+1 (715) 555-0100 • tonysmehrik@tmail.com</div></div><div class="item-meta-info"><span class="meta-date">Nov 12</span><span class="deal-badge badge-grey">Source: Internet</span></div></div><div class="compact-list-item"><div class="avatar-circle avatar-blue">AD</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Arista Delgato</span><span class="item-id">#C04</span></div><div class="item-sub-row">+1 (775) 555-0101 • aristadelgato@tmail.com</div></div><div class="item-meta-info"><span class="meta-date">Oct 24</span><span class="deal-badge badge-grey">Source: Phone</span></div></div><div class="compact-list-item"><div class="avatar-circle avatar-orange">FF</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Flora Fleisher</span><span class="item-id">#C05</span></div><div class="item-sub-row">+1 (642) 555-0199 • florafleisher@tmail.com</div></div><div class="item-meta-info"><span class="meta-date">Sep 28</span><span class="deal-badge badge-grey">Source: Walk-In</span></div></div></div>`,
        "last_activity_flora": `<p style="margin-bottom: 8px; color: var(--color-text-main);">Last activity for Flora Fleisher:</p><div class="activity-card"><div class="activity-top"><div class="activity-content"><div class="activity-header-row"><span class="activity-title">Text Message <span class="activity-type-suffix">(Incoming)</span></span><span class="activity-time">Yesterday at 4:30pm</span></div><div class="activity-text">She asked about pricing for a white AeroVibe Limited trim</div></div></div><div><button class="activity-btn">View conversation</button></div></div>`,
        "ryan_clarify": `<p>Please select the correct Ryan to proceed:</p><div class="compact-list-container"><div class="compact-list-item" data-onclick="selectRyan()" data-param="2"><div class="avatar-circle avatar-pink">RC</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Ryan Carter</span><span class="item-id">#891</span></div><div class="item-sub-row">(512) 555-3421 • r.carter@techstart.io</div></div><div class="item-meta-info"><span class="meta-date">12:30 PM</span><span class="deal-badge badge-grey">2 Deals</span></div></div><div class="compact-list-item" data-onclick="selectRyan()" data-param="4"><div class="avatar-circle avatar-green">RW</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Ryan Washington</span><span class="item-id">#554</span></div><div class="item-sub-row">(202) 555-7743 • rwashington@state.gov</div></div><div class="item-meta-info"><span class="meta-date">Yesterday</span><span class="deal-badge badge-grey">1 Deal</span></div></div><div class="compact-list-item" data-onclick="selectRyan()" data-param="3"><div class="avatar-circle avatar-grey">RO</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Ryan O'Connell</span><span class="item-id">#112</span></div><div class="item-sub-row">(617) 555-9982 • ryan.oc@consulting.net</div></div><div class="item-meta-info"><span class="meta-date">Nov 12</span><span class="deal-badge badge-grey">1 Deal</span></div></div><div class="compact-list-item" data-onclick="selectRyan()" data-param="1"><div class="avatar-circle avatar-blue">RM</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Ryan Miller</span><span class="item-id">#402</span></div><div class="item-sub-row">(312) 555-0192 • ryan.miller@gmail.com</div></div><div class="item-meta-info"><span class="meta-date">Oct 24</span><span class="deal-badge badge-grey">2 Deals</span></div></div><div class="compact-list-item" data-onclick="selectRyan()" data-param="5"><div class="avatar-circle avatar-orange">RL</div><div class="item-main-info"><div class="item-name-row"><span class="item-name">Ryan Lee</span><span class="item-id">#339</span></div><div class="item-sub-row">(415) 555-6621 • ryan@leedesign.studio</div></div><div class="item-meta-info"><span class="meta-date">Sep 28</span><span class="deal-badge badge-grey">3 Deals</span></div></div></div>`,
        "ryan_details": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">I've found 2 open deals for <strong>Ryan Carter</strong>:</p><div class="premium-deals-grid"><div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 4px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"><div style="padding: 12px;"><div style="display: flex; gap: 12px; align-items: center; margin-bottom: 8px;"><div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(0, 191, 165, 0.08); color: var(--color-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h12"></path></svg></div><div><div style="font-weight: 700; color: var(--color-text-heading); font-size: 0.85rem; line-height: 1.2; padding-bottom:4px;">#DEAL-4521</div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">2024 Tesla Model Y</div></div></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 4px; padding: 8px 0; border-bottom: 1px solid #f1f3f4;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Salesperson</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Flora Fleisher</div></div><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Type</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Finance</div></div><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Status</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Quote</div></div></div><div style="display: flex; justify-content: space-between; align-items: center;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; padding-top:4px;">Last Updated</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Dec 21, 2025</div></div><button class="open-btn-compact" style="font-size: 14px; padding: 0 20px; border-radius: 2px; font-weight: 600; height: 32px;">View</button></div></div></div><div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 4px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"><div style="padding: 12px;\"><div style="display: flex; gap: 12px; align-items: center; margin-bottom: 8px;\"><div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(0, 0, 0, 0.04); color: #5f6368; display: flex; align-items: center; justify-content: center; flex-shrink: 0;\"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h12"></path></svg></div><div><div style="font-weight: 700; color: var(--color-text-heading); font-size: 0.85rem; line-height: 1.2; padding-bottom:4px;">#DEAL-9920</div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">2021 Ford F-150</div></div></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 4px; padding: 8px 0; border-bottom: 1px solid #f1f3f4;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Salesperson</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Curtis Gable</div></div><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Type</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Lease</div></div><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Status</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Booked</div></div></div><div style="display: flex; justify-content: space-between; align-items: center;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; padding-top:4px;">Last Updated</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Dec 12, 2025</div></div><button class="open-btn-compact" style="font-size: 14px; padding: 0 20px; border-radius: 2px; font-weight: 600; height: 32px;">View</button></div></div></div></div>`,
        "Summarize recent hot leads": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here is a summary of the active leads</p>
                        <div class="compact-list-container">
                            <style>
                                .compact-list-item:hover .follow-up-action {
                                    opacity: 1;
                                    pointer-events: auto;
                                }
                                .follow-up-action {
                                    opacity: 0;
                                    pointer-events: none;
                                    transition: opacity 0.2s ease;
                                }
                                .follow-up-btn-styled {
                                    background: #fff; 
                                    border: 1px solid #E5E7EB; 
                                    border-radius: 6px; 
                                    padding: 4px 10px; 
                                    font-size: 0.75rem; 
                                    font-weight: 600; 
                                    color: #2563EB; 
                                    display: inline-flex; 
                                    align-items: center; 
                                    gap: 4px; 
                                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                                    cursor: pointer;
                                    line-height: normal;
                                    white-space: nowrap;
                                }
                                .follow-up-btn-styled:hover {
                                    background: #F9FAFB;
                                    border-color: #D1D5DB;
                                }
                                .contact-row {
                                    display: flex;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: space-between;
                                    margin-bottom: 4px;
                                    row-gap: 2px;
                                }
                                .contact-info {
                                    font-size: 0.8rem; 
                                    color: #6B7280; 
                                    white-space: nowrap; 
                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    flex: 1 1 auto; 
                                    min-width: 0; 
                                    margin-right: 8px;
                                }
                                .vehicle-info {
                                    font-size: 0.8rem; 
                                    color: #6B7280; 
                                    white-space: nowrap; 
                                    flex: 0 0 auto; 
                                    margin-left: 0;
                                }
                                @media (max-width: 420px) {
                                    .contact-info {
                                        flex-basis: 100%;
                                        margin-right: 0;
                                    }
                                }
                            </style>
                            
                            <!-- Customer 1 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex;width: 100%;">
                                    <div class="avatar-circle avatar-blue" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">JD</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">John Doe</span>
                                                <span style="background: #EFF6FF; color: #2563EB; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #DBEAFE;">Hot</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('John Doe')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 012-3456 • j.doe@gmail.com">(555) 012-3456 • j.doe@gmail.com</div>
                                            <div class="vehicle-info">2024 Honda CR-V</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Financing pending. High engagement.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer 2 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle avatar-pink" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">SS</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Sarah Smith</span>
                                                <span style="background: #FFF7ED; color: #EA580C; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #FFEDD5;">Top Priority</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Sarah Smith')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 456-7890 • s.smith@outlook.com">(555) 456-7890 • s.smith@outlook.com</div>
                                            <div class="vehicle-info">Ford Explorer</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Requesting test drive. Trade-in needed.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer 3 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle avatar-grey" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">MJ</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Mike Johnson</span>
                                                <span style="background: #F3F4F6; color: #374151; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #E5E7EB;">Lease End</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Mike Johnson')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 999-8888 • m.johnson@work.com">(555) 999-8888 • m.johnson@work.com</div>
                                            <div class="vehicle-info">Toyota Camry</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Lease expiring soon. Comparing options.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`,
        "List high-priority test drives": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here are today's <strong>high-priority test drives</strong> (Jan 27, 2026) sorted by time:</p>
                        <div class="compact-list-container">
                            <!-- Item 1 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle" style="width: 36px; height: 36px; background: #EEF2FF; color: #4F46E5; flex-shrink: 0; align-items: center; justify-content: center; border-radius: 50%;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                            <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">09:30 AM • Flora Fleisher</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280;">2023 AeroVibe</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 2 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle" style="width: 36px; height: 36px; background: #EEF2FF; color: #4F46E5; flex-shrink: 0; align-items: center; justify-content: center; border-radius: 50%;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                            <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">11:00 AM • Michael Ross</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280;">2021 Ford F-150</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 3 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle" style="width: 36px; height: 36px; background: #EEF2FF; color: #4F46E5; flex-shrink: 0; align-items: center; justify-content: center; border-radius: 50%;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                            <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">01:30 PM • Jessica Miller</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280;">2025 Honda Civic</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 4 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle" style="width: 36px; height: 36px; background: #EEF2FF; color: #4F46E5; flex-shrink: 0; align-items: center; justify-content: center; border-radius: 50%;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                            <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">03:00 PM • David Wilson</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280;">2024 Jeep Grand Cherokee</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Item 5 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle" style="width: 36px; height: 36px; background: #EEF2FF; color: #4F46E5; flex-shrink: 0; align-items: center; justify-content: center; border-radius: 50%;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                            <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">04:30 PM • Amanda Davis</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280;">2026 Toyota Camry</div>
                                    </div>
                                </div>
                            </div>
                        </div>`,
        "/inventory-check": "<strong>Stock Status:</strong><br>We have 3 units matching that description at the Main Lot, and 1 in transit (ETA: 5 days).",
        "/credit-prequal": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">I've completed the soft credit pull for your customer. Here are the qualification details:</p>
<div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden; margin-bottom: 8px;">
    <div style="padding: 10px 16px; border-bottom: 1px solid #F1F5F9; background: #FAFBFC;">
<span style="font-weight: 700; font-size: 0.7rem; color: var(--color-text-subtle); letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap;">Credit Pre-Qualification</span>
    </div>
    <div style="padding: 16px;">
<div style="margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
        <div>
            <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">Score Estimate</div>
            <div style="font-size: 1.75rem; font-weight: 800; color: var(--color-text-heading); line-height: 1;">745<span style="font-size: 1rem; color: #10B981; margin-left: 2px;">+</span></div>
        </div>
        <div style="text-align: right; font-size: 0.75rem; color: #10B981; font-weight: 700;">Excellent Range</div>
    </div>
    <!-- Score Meter -->
    <div style="height: 6px; background: #F1F5F9; border-radius: 10px; display: flex; overflow: hidden; gap: 2px;">
        <div style="flex: 1.5; background: #EF4444; opacity: 0.3;"></div>
        <div style="flex: 1; background: #F59E0B; opacity: 0.3;"></div>
        <div style="flex: 2; background: #10B981;"></div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
        <div style="font-size: 0.6rem; color: var(--color-text-muted); font-weight: 600;">300 — 850</div>
        <span style="background: #ECFDF5; color: #065F46; padding: 2px 8px; border-radius: 4px; font-size: 0.65rem; font-weight: 700; border: 1px solid #A7F3D0; white-space: nowrap;">Tier 1 Qualified</span>
    </div>
</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
    <div style="background: #F8FAFC; border: 1px solid #F1F5F9; border-radius: 6px; padding: 10px;">
        <div style="font-size: 0.65rem; color: var(--color-text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Max Approval</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-text-heading);">$65,000</div>
    </div>
    <div style="background: #F8FAFC; border: 1px solid #F1F5F9; border-radius: 6px; padding: 10px;">
        <div style="font-size: 0.65rem; color: var(--color-text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Eligible APR</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: #4285F4;">3.99%</div>
    </div>
</div>
    </div>
    <div style="border-top: 1px solid #F1F5F9; padding: 12px 16px; background: #FAFBFC; display: flex; justify-content: flex-end; gap: 10px;">
<button class="open-btn-compact" style="background: white; border: 1px solid var(--color-border-muted); color: var(--color-text-main); font-size: 0.75rem; font-weight: 600; height: 32px;">Download</button>
<button class="open-btn-compact" style="font-size: 0.75rem; font-weight: 600; height: 32px;">Apply to Deal</button>
    </div>
</div>
<p style="margin-top: 12px; font-size: 0.875rem; color: var(--color-text-main); line-height: 1.5;">
    Qualified for $0 down and all current OEM loyalty incentives. Soft pull - no impact to customer credit history.
</p>`,
        "Run a soft credit qualification check for [Customer] to determine eligibility": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">I've completed the soft credit pull for your customer. Here are the qualification details:</p>
<div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden; margin-bottom: 8px;">
    <div style="padding: 10px 16px; border-bottom: 1px solid #F1F5F9; background: #FAFBFC;">
<span style="font-weight: 700; font-size: 0.7rem; color: var(--color-text-subtle); letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap;">Credit Pre-Qualification</span>
    </div>
    <div style="padding: 16px;">
<div style="margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
        <div>
            <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">Score Estimate</div>
            <div style="font-size: 1.75rem; font-weight: 800; color: var(--color-text-heading); line-height: 1;">745<span style="font-size: 1rem; color: #10B981; margin-left: 2px;">+</span></div>
        </div>
        <div style="text-align: right; font-size: 0.75rem; color: #10B981; font-weight: 700;">Excellent Range</div>
    </div>
    <!-- Score Meter -->
    <div style="height: 6px; background: #F1F5F9; border-radius: 10px; display: flex; overflow: hidden; gap: 2px;">
        <div style="flex: 1.5; background: #EF4444; opacity: 0.3;"></div>
        <div style="flex: 1; background: #F59E0B; opacity: 0.3;"></div>
        <div style="flex: 2; background: #10B981;"></div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
        <div style="font-size: 0.6rem; color: var(--color-text-muted); font-weight: 600;">300 — 850</div>
        <span style="background: #ECFDF5; color: #065F46; padding: 2px 8px; border-radius: 4px; font-size: 0.65rem; font-weight: 700; border: 1px solid #A7F3D0; white-space: nowrap;">Tier 1 Qualified</span>
    </div>
</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
    <div style="background: #F8FAFC; border: 1px solid #F1F5F9; border-radius: 6px; padding: 10px;">
        <div style="font-size: 0.65rem; color: var(--color-text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Max Approval</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: var(--color-text-heading);">$65,000</div>
    </div>
    <div style="background: #F8FAFC; border: 1px solid #F1F5F9; border-radius: 6px; padding: 10px;">
        <div style="font-size: 0.65rem; color: var(--color-text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Eligible APR</div>
        <div style="font-size: 1.1rem; font-weight: 700; color: #4285F4;">3.99%</div>
    </div>
</div>
    </div>
    <div style="border-top: 1px solid #F1F5F9; padding: 12px 16px; background: #FAFBFC; display: flex; justify-content: flex-end; gap: 10px;">
<button class="open-btn-compact" style="background: white; border: 1px solid var(--color-border-muted); color: var(--color-text-main); font-size: 0.75rem; font-weight: 600; height: 32px;">Download</button>
<button class="open-btn-compact" style="font-size: 0.75rem; font-weight: 600; height: 32px;">Apply to Deal</button>
    </div>
</div>
<p style="margin-top: 12px; font-size: 0.875rem; color: var(--color-text-main); line-height: 1.5;">
    Qualified for $0 down and all current OEM loyalty incentives. Soft pull - no impact to customer credit history.
</p>`,
        "Run a soft credit qualification check for [Customer] to determine eligibility": `< p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);" > I've completed the soft credit pull for your customer. Here are the qualification details:</p>
        <div class= "premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden; margin-bottom: 8px;" >
    <div style="padding: 10px 16px; border-bottom: 1px solid #F1F5F9; background: #FAFBFC;">
<span style="font-weight: 700; font-size: 0.7rem; color: var(--color-text-subtle); letter-spacing: 0.05em; text-transform: uppercase; white-space: nowrap;">Credit Pre-Qualification</span>
    </div>
    <div style="padding: 16px;">
<div style="margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;">
        <div>
            <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 2px;">Score Estimate</div>
            <div style="font-size: 1.5rem; font-weight: 800; color: #10B981; line-height: 1;">745+</div>
        </div>
        <div style="text-align: right;">
            <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase; margin-bottom: 4px;">Tier Status</div>
            <span style="background: #ECFDF5; color: #065F46; padding: 2px 8px; border-radius: 4px; font-size: 0.65rem; font-weight: 700; border: 1px solid #A7F3D0; white-space: nowrap;">Tier 1 Qualified</span>
        </div>
    </div>
</div>
<div style="background: #F8FAFC; border: 1px solid #F1F5F9; border-radius: 6px; padding: 12px; margin-bottom: 16px;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div>
            <div style="font-size: 0.65rem; color: var(--color-text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Eligible Rate</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-text-main);">3.99% APR</div>
        </div>
        <div>
            <div style="font-size: 0.65rem; color: var(--color-text-muted); font-weight: 700; text-transform: uppercase; margin-bottom: 2px;">Max Term</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-text-main);">72 Months</div>
        </div>
    </div>
</div>
    </div>
    <div style="border-top: 1px solid #F1F5F9; padding: 12px 16px; background: #FAFBFC; display: flex; justify-content: flex-end; gap: 8px;">
<button class="open-btn-compact" style="background: white; border: 1px solid var(--color-border-muted); color: var(--color-text-main); font-size: 0.7rem; font-weight: 600; height: 30px; padding: 0 12px;">Download Report</button>
<button class="open-btn-compact" style="font-size: 0.7rem; font-weight: 600; height: 30px; padding: 0 12px;">Apply to Deal</button>
    </div>
</div >
    <p style="margin-top: 12px; font-size: 0.875rem; color: var(--color-text-main); line-height: 1.5;">
        Qualified for $0 down and all current OEM loyalty incentives. Soft pull - no impact to customer credit history.
    </p>`,
        "/trade-in-val": "<strong>Estimated Value:</strong> $18,500 - $20,000<br>Based on 2018 model year with 45k miles and 'Good' condition.",
        "/schedule-drive": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Appointment successfully scheduled! Here are the details:</p>
<div class="task-card completed" style="padding: 0; background: #fff; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03); overflow: hidden; margin-bottom: 8px;">
    <div style="background: #F0FDF4; padding: 16px; border-bottom: 1px solid #DCFCE7; display: flex; align-items: center; gap: 12px;">
<div style="width: 32px; height: 32px; border-radius: 50%; background: #10B981; color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div>
    <div style="font-weight: 700; color: #065F46; font-size: 0.95rem; line-height: 1.2;">Test Drive Confirmed</div>
    <div style="font-size: 0.75rem; color: #059669; font-weight: 500;">SMS notification sent to customer</div>
</div>
    </div>
    <div style="padding: 16px;">
<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
    <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F3F4F6;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em;">Customer</span>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-heading);">Tony Stark</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F3F4F6;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em;">Vehicle</span>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-heading);">2024 Toyota Camry SE</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em;">Date & Time</span>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-heading);">{{TOMORROW}} • 10:00 AM</span>
    </div>
</div>
<button class="open-btn-compact" style="width: 100%; margin-top: 16px; height: 36px; font-size: 0.85rem; font-weight: 600; border-radius: 6px;">View in Calendar</button>
    </div>
</div>`,
        "Summarize recent car leads": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here is a summary of the active leads</p>
    <div class="compact-list-container">
        <style>
            .compact-list-item:hover .follow-up-action {
                opacity: 1;
            pointer-events: auto;
                                }
            .follow-up-action {
                opacity: 0;
            pointer-events: none;
            transition: opacity 0.2s ease;
                                }
            .follow-up-btn-styled {
                background: #fff;
            border: 1px solid #E5E7EB;
            border-radius: 6px;
            padding: 4px 10px;
            font-size: 0.75rem;
            font-weight: 600;
            color: #2563EB;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
            cursor: pointer;
            line-height: normal;
            white-space: nowrap;
                                }
            .follow-up-btn-styled:hover {
                background: #F9FAFB;
            border-color: #D1D5DB;
                                }
            .contact-row {
                display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 4px;
            row-gap: 2px;
                                }
            .contact-info {
                font-size: 0.8rem;
            color: #6B7280;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex: 1 1 auto;
            min-width: 0;
            margin-right: 8px;
                                }
            .vehicle-info {
                font-size: 0.8rem;
            color: #6B7280;
            white-space: nowrap;
            flex: 0 0 auto;
            margin-left: 0;
                                }
            @media (max-width: 420px) {
                                    .contact-info {
                    flex-basis: 100%;
            margin-right: 0;
                                    }
                                }
        </style>

        <!-- Customer 1 -->
        <div class="compact-list-item" style="padding: 12px; cursor: default;">
            <div style="display: flex;width: 100%;">
                <div class="avatar-circle avatar-blue" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">JD</div>
                <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">John Doe</span>
                            <span style="background: #EFF6FF; color: #2563EB; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #DBEAFE;">Hot</span>
                        </div>
                        <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('John Doe')">
                            Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </div>
                    <div class="contact-row">
                        <div class="contact-info" title="(555) 012-3456 • j.doe@gmail.com">(555) 012-3456 • j.doe@gmail.com</div>
                        <div class="vehicle-info">2024 Honda CR-V</div>
                    </div>
                    <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                        Financing pending. High engagement.
                    </div>
                </div>
            </div>
        </div>

        <!-- Customer 2 -->
        <div class="compact-list-item" style="padding: 12px; cursor: default;">
            <div style="display: flex; width: 100%;">
                <div class="avatar-circle avatar-pink" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">SS</div>
                <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Sarah Smith</span>
                            <span style="background: #FFF7ED; color: #EA580C; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #FFEDD5;">Top Priority</span>
                        </div>
                        <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Sarah Smith')">
                            Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </div>
                    <div class="contact-row">
                        <div class="contact-info" title="(555) 456-7890 • s.smith@outlook.com">(555) 456-7890 • s.smith@outlook.com</div>
                        <div class="vehicle-info">Ford Explorer</div>
                    </div>
                    <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                        Requesting test drive. Trade-in needed.
                    </div>
                </div>
            </div>
        </div>

        <!-- Customer 3 -->
        <div class="compact-list-item" style="padding: 12px; cursor: default;">
            <div style="display: flex; width: 100%;">
                <div class="avatar-circle avatar-grey" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">MJ</div>
                <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Mike Johnson</span>
                            <span style="background: #F3F4F6; color: #374151; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #E5E7EB;">Lease End</span>
                        </div>
                        <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Mike Johnson')">
                            Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </div>
                    <div class="contact-row">
                        <div class="contact-info" title="(555) 999-8888 • m.johnson@work.com">(555) 999-8888 • m.johnson@work.com</div>
                        <div class="vehicle-info">Toyota Camry</div>
                    </div>
                    <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                        Lease expiring soon. Comparing options.
                    </div>
                </div>
            </div>
        </div>
    </div>`,
        "Analyze Curtis Gables equity for Upgrade Opportunity": `<p>Loading equity data...</p>`,
        "Plan buy back strategy for Tony Smehrik Lunar Blitz": `<p>Loading buy-back data...</p>`,
        "vehicle_inquiry": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">I've found 2 matches for <strong>2023 AeroVibe</strong> under $45k:</p>
        <div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 8px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 12px; overflow: hidden;">
            <div style="padding: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                     <div>
                        <div style="font-weight: 700; color: var(--color-text-heading); font-size: 1rem; line-height: 1.2;">2023 AeroVibe SE</div>
                        <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">VIN: 4T1BF1FK5GU185432</div>
                     </div>
                     <div style="text-align: right;">
                        <div style="font-weight: 700; color: var(--color-text-heading); font-size: 1rem;">$42,500</div>
                        <div style="color: #10B981; font-size: 0.7rem; font-weight: 700; background: #ECFDF5; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 4px;">IN STOCK</div>
                     </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 12px 0; border-top: 1px solid #f1f3f4; border-bottom: 1px solid #f1f3f4; margin-bottom: 12px;">
                     <div>
                          <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Color</div>
                          <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Cosmic Blue</div>
                     </div>
                     <div>
                          <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Stock #</div>
                          <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">STK-9921</div>
                     </div>
                     <div>
                          <div style="font-size: 0.7rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Days on Lot</div>
                          <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">14 Days</div>
                     </div>
                </div>

                 <div style="display: flex; gap: 8px;">
                    <button class="open-btn-compact" style="flex: 1; height: 32px; font-size: 0.8rem; font-weight: 600;">View Details</button>
                    <button class="open-btn-compact" style="flex: 1; height: 32px; font-size: 0.8rem; font-weight: 600; background: white; border: 1px solid var(--color-border-muted); color: var(--color-text-main);">Calculate Payment</button>
                </div>
            </div>
        </div>`,
        "tradein_objection": `<p style="margin-bottom: 12px; color: var(--color-text-main);">Here is a suggested approach:</p><div style="background: #F9FAFB; padding: 12px; border-left: 3px solid #E5E7EB; margin-bottom: 12px; font-style: italic; color: #374151; font-size: 0.95rem; line-height: 1.5;">"I understand you’ve seen higher numbers online. Those are often retail prices, not trade-in values. Let me show you the reconditioning costs and market average for this specific VIN to clarify the difference."</div><div style="display: flex; gap: 8px; align-items: start; background: #ECFDF5; padding: 12px; border-radius: 6px; font-size: 0.9rem;"><span style="font-weight: 600; color: #059669; flex-shrink: 0;">Tip:</span><span style="color: #065F46; line-height: 1.4;">Shift the focus to the tax savings she gets by trading in vs. selling privately.</span></div>`,

        "appointment_report": `<p>The <strong>Monthly Appointment Performance Report</strong> for December 2025 is now ready:</p>
        <div class="report-download-card" id="report-card-latest" data-onclick="openReportDynamic()">
            <div class="report-icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div class="report-info">
                <div class="report-name">Monthly Appointment Performance Report - December 2025</div>
                <div class="report-meta"><a href="#" class="report-view-link" data-onclick="openReportDynamic()">View</a></div>
            </div>
        </div>
        <div style="height: 1px; background-color: var(--color-border-muted); margin: 16px 0;"></div>
        <div style="font-size: 0.95rem; color: var(--color-text-main);">
            <p style="margin-bottom: 8px; font-size:15px; font-weight:600; color: var(--color-text-heading)">  ⚙️ Do you want to automate this report?</p>
            <p style="margin-bottom: 8px;">Just tell me this:</p>
            <ol style="margin: 0; padding-left: 20px; list-style-type: decimal;">
                <li>When should I send it?</li>
                <li>Where to send it (On ARC, email, SMS)?</li>
            </ol>
        </div>`,
        "safety_tech_query": `<p>Loading safety and tech data...</p>`,
        "confirm_sms": `<div class="sms-draft-container">
            <div class="sms-draft-card">
                <div class="sms-draft-header">
                    <span class="sms-draft-to">To:</span>
                    <div class="sms-draft-pill">Flora Fleisher</div>
                </div>
                <div class="sms-draft-body" contenteditable="true" title="Click to edit message">Hi Flora,

Great speaking with you! I have you down for Tuesday at 10 AM to drive the 2023 AeroVibe.

See you then!
Dean</div>
                <div class="sms-draft-actions">
                    <button class="sms-btn-send" data-onclick="sendSMS(this)">Send</button>
                </div>
            </div>
            <div class="sms-draft-note">Note: Once you send this message, it cannot be undone.</div>
        </div>`,
        "sarah_brief": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main); line-height: 1.5;">Last interaction was yesterday via text. She is looking to trade in a <strong>2020 Event Horizon</strong> (likely negative equity) for a 2023 AeroVibe. Note that she owns a dog and explicitly <strong>prefers text communication</strong> over calls</p>
        <div class="premium-deals-grid">
            <div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 4px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style="padding: 12px;">
                    <div style="display: flex; gap: 12px; align-items: center;">
                         <div style="width: 36px; height: 36px; background: #FCE7F3; color: #9D174D; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; border-radius: 36px; flex-shrink: 0;">SJ</div>
                         <div>
                            <div style="font-weight: 600; color: var(--color-text-heading); font-size: 0.85rem; line-height: 1; padding-bottom:4px;">Flora Fleisher</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Active</div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 4px; padding: 8px 0; border-bottom: 1px solid #f1f3f4;">
                        <div>
                             <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Salesperson</div>
                             <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Alex Troy</div>
                        </div>
                        <div>
                             <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Lead source</div>
                             <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Internet</div>
                        </div>
                        <div>
                             <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Type</div>
                             <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main); white-space: nowrap;">Vehicle Purchase</div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; padding-top:4px;">Created date</div>
                            <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">{{YESTERDAY}}</div>
                        </div>
                        <button class="open-btn-compact" style="font-size: 14px; padding: 0 20px; border-radius: 2px; font-weight: 600; height: 32px;">View</button>
                    </div>
                </div>
            </div>
        </div>`,
        "focus_today": `<div style="font-weight: 600; font-size: 0.875rem; color: #111827; margin-bottom: 12px;">Today's Priorities</div>
                <div class="compact-list-container">
                    <div class="compact-list-item" style="cursor: pointer; display: flex; align-items: flex-start; justify-content: space-between;" data-onclick="showQuoteCustomers()">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #FEF2F2; margin-right: 12px; color: #DC2626;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div class="item-main-info" style="margin-left: 0;">
                                <div class="item-name-row">
                                    <span class="item-name" style="color: #444F5C;">Flora Fleisher</span>
                                </div>
                                <div class="item-sub-row" style="color: #4B5563;">Requested a quote yesterday</div>
                            </div>
                        </div>
                        <div style="background: #FEF2F2; color: #DC2626; padding: 2px 8px; border-radius: 99px; font-size: 0.70rem; font-weight: 600; border: 1px solid #FECACA; margin-top: 2px;">Urgent</div>
                    </div>
                    <div class="compact-list-item" style="cursor: pointer; display: flex; align-items: flex-start; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #FFF7ED; margin-right: 12px; color: #EA580C;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div class="item-main-info" style="margin-left: 0;">
                                <div class="item-name-row">
                                    <span class="item-name" style="color: #444F5C;">Curtis Gable</span>
                                </div>
                                <div class="item-sub-row" style="color: #4B5563;">Missed follow-up yesterday</div>
                            </div>
                        </div>
                        <div style="background: #FFF7ED; color: #EA580C; padding: 2px 8px; border-radius: 99px; font-size: 0.70rem; font-weight: 600; border: 1px solid #FDBA74; margin-top: 2px;">Overdue</div>
                    </div>
                    <div class="compact-list-item" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #EFF6FF; margin-right: 12px; color: #2563EB;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div>
                            <div class="item-main-info" style="margin-left: 0;">
                                <div class="item-name-row">
                                    <span class="item-name" style="color: #444F5C;">5 Appointments today</span>
                                </div>
                                <div class="item-sub-row" style="color: #4B5563;">Next: 9:00 AM with David K</div>
                            </div>
                        </div>
                    </div>
                </div>`,
        "create_deal_test_drive": `<p style="margin-bottom: 8px; font-size: 0.85rem; color: var(--color-text-main);">I've outlined the action plan for this request:</p>
        <div class="task-card" id="deal-task-card">
            <div class="task-header">
                <div class="task-header-content">
                    <div class="task-title" style="font-size: 0.85rem; font-weight: 600; color: #1E293B;">Flora Fleisher: Action Plan</div>
                </div>
                <div class="task-status">0/10 DONE</div>
            </div>
            
            <div class="task-progress-container">
                <div class="task-progress-bar" id="task-progress"></div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <div class="task-section-title">1. Create Deal</div>
                <div class="task-steps">
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select Customer</div>
                    </div>
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select Co‑buyer / Guarantor check if needed</div>
                    </div>
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select Vehicle</div>
                    </div>
                     <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Vehicle Variant / Config</div>
                    </div>
                     <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select Deal Structure</div>
                    </div>
                </div>

                <div class="task-section-title" style="margin-top: 8px; border-top: 1px solid #F1F5F9; padding-top: 12px;">2. Schedule Test Drive </div>
                <div class="task-steps">
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select appointment type: Test Drive</div>
                    </div>
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select Customer</div>
                    </div>
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Select Vehicle</div>
                    </div>
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Confirm Test Drive Date and Time</div>
                    </div>
                    <div class="task-step" onclick="completeStep(this)">
                        <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                        <div class="step-text" style="font-size: 0.8rem;">Assign Salesperson and Save Appointment</div>
                    </div>
                </div>
            </div>
        </div>`,
        "quote_customers": `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here are the customers who need the quote to be sent:</p>
                        <div class="compact-list-container">
                            <style>
                                .compact-list-item:hover .follow-up-action {
                                    opacity: 1;
                                    pointer-events: auto;
                                }
                                .follow-up-action {
                                    opacity: 0;
                                    pointer-events: none;
                                    transition: opacity 0.2s ease;
                                }
                                .follow-up-btn-styled {
                                    background: #fff; 
                                    border: 1px solid #E5E7EB; 
                                    border-radius: 6px; 
                                    padding: 4px 10px; 
                                    font-size: 0.75rem; 
                                    font-weight: 600; 
                                    color: #2563EB; 
                                    display: inline-flex; 
                                    align-items: center; 
                                    gap: 4px; 
                                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                                    cursor: pointer;
                                    line-height: normal;
                                    white-space: nowrap;
                                }
                                .follow-up-btn-styled:hover {
                                    background: #F9FAFB;
                                    border-color: #D1D5DB;
                                }
                                /* Row 2 Styles */
                                .contact-row {
                                    display: flex;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: space-between;
                                    margin-bottom: 4px;
                                    row-gap: 2px;
                                }
                                .contact-info {
                                    font-size: 0.8rem; 
                                    color: #6B7280; 
                                    white-space: nowrap; 
                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    flex: 1 1 auto; 
                                    min-width: 0; 
                                    margin-right: 8px;
                                }
                                .vehicle-info {
                                    font-size: 0.8rem; 
                                    color: #6B7280; 
                                    white-space: nowrap; 
                                    flex: 0 0 auto; 
                                    margin-left: 0;
                                }
                                @media (max-width: 420px) {
                                    .contact-info {
                                        flex-basis: 100%;
                                        margin-right: 0;
                                    }
                                }
                            </style>
                            
                            <!-- Customer 1 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex;width: 100%;">
                                    <div class="avatar-circle avatar-pink" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">SJ</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <!-- Row 1: Name + Urgent + Button -->
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Flora Fleisher</span>
                                                <span style="background: #FEF2F2; color: #DC2626; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #FECACA;">Urgent</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Flora Fleisher')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <!-- Row 2: Contact + Vehicle -->
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 123-4567 • s.jenkins@email.com">(555) 123-4567 • s.jenkins@email.com</div>
                                            <div class="vehicle-info">2023 AeroVibe</div>
                                        </div>
                                        <!-- Row 3: Notes -->
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Texted yesterday. Trading Cybertruck.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer 2 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle avatar-green" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">JC</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Jolly Chloe</span>
                                                <span style="background: #FEF2F2; color: #DC2626; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #FECACA;">Urgent</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Jolly Chloe')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 987-6543 • j.chloe@email.com">(555) 987-6543 • j.chloe@email.com</div>
                                            <div class="vehicle-info">2024 CR-V Hybrid</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Visited lot last weekend.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer 3 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle avatar-grey" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">MA</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Mill Austen</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Mill Austen')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 456-7890 • m.austen@email.com">(555) 456-7890 • m.austen@email.com</div>
                                            <div class="vehicle-info">Used Ford Explorer</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Query via Autotrader.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer 4 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle avatar-blue" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">RW</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Robert Williams</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Robert Williams')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 789-0123 • r.williams@email.com">(555) 789-0123 • r.williams@email.com</div>
                                            <div class="vehicle-info">Ford F-150</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Requires financing options.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Customer 5 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle avatar-orange" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">ES</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">Emily Stone</span>
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('Emily Stone')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="(555) 234-5678 • e.stone@email.com">(555) 234-5678 • e.stone@email.com</div>
                                            <div class="vehicle-info">Highlander Hybrid</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            Trade-in valuation pending.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`,
        "How likely is this lead to close in the next 30 days?": `<p>Based on Flora's active engagement (3 website visits in 48h) and recent text response, there is an <strong>85% probability</strong> of this lead closing within the next 30 days.</p><div style="margin-top:12px; padding:10px; background:rgba(0,191,165,0.05); border-radius:6px; border:1px solid rgba(0,191,165,0.2);"><span style="font-weight:600; color:var(--color-primary);">AI Insight:</span> She is currently comparing your offer with a competitor's AeroVibe inventory. Focus on her specific requirement to differentiate.</div>`,
        "Suggest the best next step and when I should follow up.": `<p><strong>Recommended Next Step:</strong> Send a walk-around video of the 2023 AeroVibe emphasizing the interior durability and safety features.</p><p><strong>Follow-up Timeline:</strong> If no response to the 10:00 AM test drive confirmation, follow up today at 3:30 PM via text.</p>`,
        "Compare this vehicle's pricing and incentives to similar deals we've closed recently.": `<p>This 2023 AeroVibe is priced at <strong>$44,500</strong>. Recent similar closures (last 90 days) averaged <strong>$43,800</strong> with a $500 loyalty rebate.</p><div class="ai-list-item"><span class="ai-list-number">1.</span><span><strong>Deal #4491:</strong> Sold for $43,750 (Dec 12)</span></div><div class="ai-list-item"><span class="ai-list-number">2.</span><span><strong>Deal #4485:</strong> Sold for $44,100 (Nov 28)</span></div><p style="margin-top:8px;">Your current margin is healthy, but we have room for a $400 'first-time buyer' concession if needed to close Flora.</p>`,
        "automate_sales_opportunities": `<p>Alright ! Before I set this up, I just need a few quick details:</p><ol style="margin-left: 20px; line-height: 1.6;"><li>Which file format?</li><li>What time should I send it?</li><li>Should I send it even on weekends?</li><li>Where should it be delivered (On ARC, email, SMS)?</li></ol>`,
        "automate_report_confirmed_simple": `<div style="font-weight: 500; color: var(--color-text-main); font-size: 14px; margin-bottom: 8px;">All set! Task has been created:</div><div class="task-card completed" style="padding: 12px; background: #fff; border: 1px solid var(--color-border-muted); border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); display: flex; flex-direction: row; align-items: stretch; gap: 12px; max-width: 380px;"><div style="width: 48px; background: #EBF4FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="6" rx="1"></rect><rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect><path d="M12 9v3"></path><path d="M6 15v-3h12v3"></path></svg></div><div style="flex: 1; display: flex; flex-direction: column;"><div style="font-weight: 600; color: var(--color-text-heading); font-size: 14px; margin-bottom: 4px;">Automated: Monthly Appointment Report</div><div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; color: var(--color-text-muted); font-size: 13px; margin-bottom: 4px;"><div style="display: flex; align-items: center; gap: 4px;"><span>Every Monday @ 9:00 am</span></div><span style="color: #D1D5DB;">•</span><span>Email</span></div><div style="display: flex; gap: 12px; margin-top: 4px;"><div style="font-weight: 600; color: #3B82F6; font-size: 14px; cursor: pointer;">Edit</div><div style="font-weight: 600; color: #3B82F6; font-size: 14px; cursor: pointer;">Delete</div></div></div></div>`,
        "automate_sales_opp_confirmed": `<div style="font-weight: 500; color: var(--color-text-main); font-size: 14px; margin-bottom: 8px;">All set! Task has been created:</div><div class="task-card completed" style="padding: 12px; background: #fff; border: 1px solid var(--color-border-muted); border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); display: flex; flex-direction: row; align-items: stretch; gap: 12px; max-width: 380px;"><div style="width: 48px; background: #EBF4FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="6" rx="1"></rect><rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect><path d="M12 9v3"></path><path d="M6 15v-3h12v3"></path></svg></div><div style="flex: 1; display: flex; flex-direction: column;"><div style="font-weight: 600; color: var(--color-text-heading); font-size: 14px; margin-bottom: 4px;">Automated: Sales Opportunities Report</div><div style="display: flex; flex-wrap: wrap; align-items: center; gap: 6px; color: var(--color-text-muted); font-size: 13px; margin-bottom: 4px;"><div style="display: flex; align-items: center; gap: 4px;"><span>Daily @ 8:15 am</span></div><span style="color: #D1D5DB;">•</span><span>PDF</span><span style="color: #D1D5DB;">•</span><span>Email</span></div><div style="display: flex; gap: 12px; margin-top: 4px;"><div style="font-weight: 600; color: #3B82F6; font-size: 14px; cursor: pointer;">Edit</div><div style="font-weight: 600; color: #3B82F6; font-size: 14px; cursor: pointer;">Delete</div></div></div></div>`,
    },
    "searchOverrides": {
        "isTestDriveQuery": {
            "pills": [
                "Appointment type: Test Drive",
                "Appointment Date: Jan 14, 2026"
            ],
            "resultsCount": "Showing 1 out of 1 Results.",
            "html": "<tr><td><div class=\"name-cell\"><span>Ryan Carter</span><span class=\"customer-id\">#0125</span></div></td><td><div class=\"contact-info\"><div class=\"contact-email\">r.carter@techstart.io</div><div class=\"contact-phone\">(512) 555-3421</div></div></td><td>Sophia Mitchell</td><td>2026 Toyota Camry</td><td>310891</td><td>4102<div class=\"row-ai-icon\"><img src=\"https://tekiondesignteam.github.io/design-experimentations/ai-logo.svg\" alt=\"AI\"></div></td></tr>"
        },
        "isSUVQuery": {
            "pills": [
                "Last contacted : <7 days",
                "Vehicle Type: SUV"
            ],
            "resultsCount": "Showing 5 out of 5 Results.",
            "html": "<tr><td><div class=\"name-cell\"><span>Ryan Washington</span><span class=\"customer-id\">#4412</span></div></td><td><div class=\"contact-info\"><div class=\"contact-email\">rwashington@state.gov</div><div class=\"contact-phone\">(202) 555-7743</div></div></td><td>Benjamin Parker</td><td>2023 Toyota RAV4</td><td>310892</td><td>4103<div class=\"row-ai-icon\"><img src=\"https://tekiondesignteam.github.io/design-experimentations/ai-logo.svg\" alt=\"AI\"></div></td></tr><tr><td><div class=\"name-cell\"><span>Ryan O'Connell</span><span class=\"customer-id\">#8821</span></div></td><td><div class=\"contact-info\"><div class=\"contact-email\">ryan.oc@consulting.net</div><div class=\"contact-phone\">(617) 555-9982</div></div></td><td>William Sullivan</td><td>2024 Toyota Sequoia</td><td>310893</td><td>4104<div class=\"row-ai-icon\"><img src=\"https://tekiondesignteam.github.io/design-experimentations/ai-logo.svg\" alt=\"AI\"></div></td></tr><tr><td><div class=\"name-cell\"><span>Ryan Carter</span><span class=\"customer-id\">#0125</span></div></td><td><div class=\"contact-info\"><div class=\"contact-email\">r.carter@techstart.io</div><div class=\"contact-phone\">(512) 555-3421</div></div></td><td>Sophia Mitchell</td><td>2024 Toyota Highlander</td><td>310891</td><td>4102<div class=\"row-ai-icon\"><img src=\"https://tekiondesignteam.github.io/design-experimentations/ai-logo.svg\" alt=\"AI\"></div></td></tr><tr><td><div class=\"name-cell\"><span>Ryan Miller</span><span class=\"customer-id\">#1290</span></div></td><td><div class=\"contact-info\"><div class=\"contact-email\">ryan.miller@gmail.com</div><div class=\"contact-phone\">(312) 555-0192</div></div></td><td>Ava Ramirez</td><td>2023 Toyota 4Runner</td><td>310894</td><td>4105<div class=\"row-ai-icon\"><img src=\"https://tekiondesignteam.github.io/design-experimentations/ai-logo.svg\" alt=\"AI\"></div></td></tr><tr><td><div class=\"name-cell\"><span>Ryan Lee</span><span class=\"customer-id\">#5532</span></div></td><td><div class=\"contact-info\"><div class=\"contact-email\">ryan@leedesign.studio</div><div class=\"contact-phone\">(415) 555-6621</div></div></td><td>Elijah Reed</td><td>2022 Toyota Venza</td><td>310895</td><td>4106<div class=\"row-ai-icon\"><img src=\"https://tekiondesignteam.github.io/design-experimentations/ai-logo.svg\" alt=\"AI\"></div></td></tr>"
        }
    },
    "ryanMap": {
        "1": "Ryan Miller (#402)",
        "2": "Ryan Carter (#891)",
        "3": "Ryan O'Connell (#112)",
        "4": "Ryan Washington (#554)",
        "5": "Ryan Lee (#339)"
    },
    "chatSuggestions": [
        "What should I focus on today?",
        "Summarize recent hot leads",
        "List high-priority test drives"
    ],
    "history": {
        "summary": "Accessed conversation history and internal records to prepare the summary for {title} accurately.",
        "response": "<p>Loading deal details for <strong>{title}</strong>...</p>",
        "mockSources": {
            "count": 1,
            "contextItems": ["Internal record: #882"],
            "attachmentItems": []
        }
    },
    "aiResponsesDefault": "<p>Analyzing data for <strong>{logicKey}</strong>...</p>",
    "aiInsights": [
        {
            "label": "HIGH EQUITY ALERT",
            "title": "Upgrade Opportunity",
            "description": "Ryan Miller's 2020 Corolla has reached peak trade value. Estimated <strong>$4,200 positive equity</strong> available.",
            "ctaText": "Draft Offer",
            "ctaQuery": "Analyze Ryan Millers equity for Upgrade Opportunity",
            "iconType": "equity"
        },
        {
            "label": "CRITICAL INVENTORY NEED",
            "title": "Upgrade Opportunity",
            "description": "Ryan Brooks owns a <strong>2022 Supra</strong>. This model is currently out of stock in pre-owned. Demand is high.",
            "ctaText": "Plan Buy Back",
            "ctaQuery": "Plan buy back strategy for Ryan Brooks Supra",
            "iconType": "inventory"
        }
    ],
    "leadDetailSuggestions": [
        "How likely is this lead to close in the next 30 days?",
        "Suggest the best next step and when I should follow up.",
        "Compare this vehicle's pricing and incentives to similar deals we've closed recently."
    ],
    "roleGuidelines": {
        sales_manager: `Role & Persona: 
Act as a Senior Automotive Retail Strategist and Data Scientist. Your goal is to maximize Front-End Gross, PVR (Profit Per Vehicle Retail), and Inventory Velocity across our dealer group.

Operational Context:
Primary KPIs: Always prioritize Days-to-Turn (aiming for <30 days), Lead-to-Close ratios (target 15%+), and Finance & Insurance (F&I) penetration.
Data Synthesis: 
When I ask about sales, cross-reference our CRM (lead volume) with our DMS (actual deals) and current Market Days Supply (MDS).
Tone: 
Be direct, proactive, and 'bottom-line' oriented. If you see a red flag in the data, lead with it.

Response Framework:
The 'So What?': 
Start with the single most important insight.
The Visual Logic: 
Use tables to compare 'Actual vs. Goal' or 'Year-over-Year' performance.
The Tactical Move: 
End every response with three 'Action Items' for my desk managers (e.g., 'Lower the price on the aged Jeep units' or 'Re-assign stale internet leads').`,
        bdc_manager: `Role & Persona: 
Act as a High-Performance BDC Operations Consultant and Communications Coach. Your obsession is the 'Lead-to-Appointment' funnel and 'Speed-to-Lead' metrics.

Operational Context:
Primary KPIs: Focus on Speed to Lead (Target: <5 mins), Set Rate (Target: 40% of leads), Show Rate (Target: 50% of sets), and Sold Rate (Target: 15% of total leads).
Lead Management: You have visibility into CRM workflows, call recordings, and third-party lead sources (Autotrader, Cars.com, OEM).
Tone: High-energy, analytical, and coach-like. If a lead source has a 0% show rate, call it out as 'garbage' and suggest reallocation.

Response Framework:
The Funnel Audit: Whenever I ask for a status update, break it down by Set/Show/Sold.
The 'Agent Spotlight': Identify the top-performing agent and the one who is struggling based on 'Outbound Effort vs. Appointment Result.'
The Script Fix: Provide one specific, high-converting talk track or text-template adjustment based on current inventory or market trends.`
    },
    "voicesData": [
        { id: 'Alloy', name: 'Alloy', desc: 'Neutral, Versatile', avatarClass: 'avatar-alloy' },
        { id: 'Echo', name: 'Echo', desc: 'Soft, Warm', avatarClass: 'avatar-echo' },
        { id: 'Fable', name: 'Fable', desc: 'British, Expressive', avatarClass: 'avatar-fable' },
        { id: 'Onyx', name: 'Onyx', desc: 'Deep, Authoritative', avatarClass: 'avatar-onyx' },
        { id: 'Nova', name: 'Nova', desc: 'Professional, Energetic', avatarClass: 'avatar-nova' },
        { id: 'Shimmer', name: 'Shimmer', desc: 'Clear, Bright', avatarClass: 'avatar-shimmer' }
    ],
    "inputPlaceholders": [
        "Ask • Find • Summarize",
        "Ask Anything...",
        "Find this customer...",
        "Summarize this page..."
    ],
    "slashCommands": [
        { name: "/book-test-drive", desc: "Book a test drive appointment for [Customer] on [Vehicle] for [Date & Time].", text: "Book a test drive appointment for [Customer] on [Vehicle] for [Date & Time]" },
        { name: "/credit-pre-qual", desc: "Run a soft credit qualification check for [Customer] to determine eligibility.", text: "Run a soft credit qualification check for [Customer] to determine eligibility" },
        { name: "/inventory-check", desc: "Check stock availability for [Vehicle] across all lots available in the region.", text: "Check stock availability for [Vehicle] across all lots" },
        { name: "/trade-in-value", desc: "Estimate trade-in value for [VIN] assuming good condition.", text: "Estimate trade-in value for [VIN] assuming good condition" }
    ],
    "customers": ["James T. Kirk", "Sarah Connor", "Marty McFly", "Ellen Ripley", "Tony Stark"],
    "vehicles": ["2024 Toyota Camry SE", "2023 Ford F-150 XLT", "2024 Honda CR-V EX-L", "2023 Tesla Model Y Long Range", "2024 Chevrolet Silverado 1500 RST"],
    "vins": [
        { vin: "1G1RC6E45LU125678", desc: "2020 Chevy Malibu LT" },
        { vin: "5XYKTCA23MG112345", desc: "2021 Kia Telluride SX" },
        { vin: "JTEZU5JR8K3098765", desc: "2019 Toyota RAV4 LE" },
        { vin: "1FM5K8GC4LGB43210", desc: "2022 Ford Explorer ST" },
        { vin: "1N4AL3AP0NC155555", desc: "2023 Nissan Altima SR" }
    ],
    "datetimes": [
        "Jan 28, 2026 at 10:00 AM",
        "Jan 28, 2026 at 2:00 PM",
        "Jan 28, 2026 at 4:30 PM",
        "Jan 29, 2026 at 9:30 AM",
        "Jan 29, 2026 at 11:00 AM"
    ],
    "contextItems": [
        { id: 'deal1', label: "Deal #4492: 2024 Ford F-150", type: 'deal' },
        { id: 'ro1', label: "RO #10234: Brake Squeal Diag", type: 'service' },
        { id: 'inv1', label: "Stock #F22-001: 2022 Mustang GT", type: 'car' },
        { id: 'rpt1', label: "Report: EOM Sales Oct", type: 'report' },
        { id: 'lead1', label: "Lead #1023: John Doe (Model Y)", type: 'lead' }
    ],
    "leadsItem": { id: 'curr1', label: "Leads", type: 'page', isCurrent: true },
    "historyTitles": [
        "Monthly Sales Review", "Nebula Nimbus Fleet Inquiry", "Lunar Blitz Pricing", "Product Specs - Galactic Mirage",
        "Sales Strategy Q4", "Customer Feedback Rev", "Inventory Check", "Service Appointment FAQ",
        "Warranty Terms Update", "Lease Options 2024", "Referral Program Details", "Insurance Partners",
        "Charging Station Map", "Mobile App Setup", "Test Drive Protocol", "Stealth Nebula Comparison",
        "Q3 Earnings Analysis", "Staff Schedule Draft", "Holiday Promo Copy", "Email Campaign Iteration",
        "Client Meeting Notes", "Bug Report: Login", "Feature Request: Dark Mode", "API Documentation",
        "Deployment Checklist"
    ],
    "mockFilters": [
        { label: 'Status', value: 'Open' },
        { label: 'Customer ID', value: '#891' }
    ]
};

(async function updateHotLeadsFromCSV() {
    try {
        console.log("Fetching marketing-data-formats.csv...");
        const response = await fetch('marketing-data-formats.csv');
        if (!response.ok) {
            console.warn(`Failed to fetch CSV: ${response.status} ${response.statusText}`);
            return;
        }
        const csvText = await response.text();

        // Parse CSV
        const lines = csvText.split('\n');
        let section = '';
        const customers = [];
        const vehicles = [];
        const employees = [];

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            if (line.startsWith('#')) {
                section = line.replace('#', '').trim();
                continue;
            }

            // Simple split handling (assuming no commas in the relevant fields for now)
            const parts = line.split(',');

            if (section === 'CUSTOMERS' && parts[0] === 'Customer') {
                // Format: Customer,1,Matilda Dayton,+1 (311) 555-2368,matildadayton@tmail.com
                if (parts.length >= 5) {
                    customers.push({
                        id: parts[1],
                        name: parts[2],
                        phone: parts[3],
                        email: parts[4]
                    });
                }
            }
            else if (section === 'DEALERSHIP EMPLOYEES' && parts[0] === 'Employee') {
                // Format: Employee,1,William Florez,+1 (555) 755-2099,w.florez@tachyonmotors.com
                if (parts.length >= 5) {
                    employees.push({
                        id: parts[1],
                        name: parts[2],
                        phone: parts[3],
                        email: parts[4]
                    });
                }
            }
            else if (section === 'DEALERSHIP VEHICLES' && parts[0] === 'Vehicle') {
                // Format: Vehicle,1,2023 Nebula Nimbus,1HGCM82633A004352,
                if (parts.length >= 4) {
                    vehicles.push({
                        id: parts[1],
                        name: parts[2],
                        vin: parts[3]
                    });
                }
            }
        }

        if (customers.length === 0) {
            console.warn("No customers found in CSV");
            return;
        }

        // Use top 3 customers
        const topCustomers = customers.slice(0, 3);

        // Static tags and descriptions to maintain UI richness
        const tags = [
            { label: 'Hot', bg: '#EFF6FF', color: '#2563EB', border: '#DBEAFE' },
            { label: 'Top Priority', bg: '#FFF7ED', color: '#EA580C', border: '#FFEDD5' },
            { label: 'Lease End', bg: '#F3F4F6', color: '#374151', border: '#E5E7EB' }
        ];

        const descriptions = [
            "Financing pending. High engagement.",
            "Requesting test drive. Trade-in needed.",
            "Lease expiring soon. Comparing options."
        ];

        const avatarColors = ['avatar-blue', 'avatar-pink', 'avatar-grey'];

        // Build HTML
        let html = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here is a summary of the active leads from your uploaded data</p>
                    <div class="compact-list-container">
                        <style>
                            .compact-list-item:hover .follow-up-action {
                                opacity: 1;
                                pointer-events: auto;
                            }
                            .follow-up-action {
                                opacity: 0;
                                pointer-events: none;
                                transition: opacity 0.2s ease;
                            }
                            .follow-up-btn-styled {
                                background: #fff; 
                                border: 1px solid #E5E7EB; 
                                border-radius: 6px; 
                                padding: 4px 10px; 
                                font-size: 0.75rem; 
                                font-weight: 600; 
                                color: #2563EB; 
                                display: inline-flex; 
                                align-items: center; 
                                gap: 4px; 
                                box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                                cursor: pointer;
                                line-height: normal;
                                white-space: nowrap;
                            }
                            .follow-up-btn-styled:hover {
                                background: #F9FAFB;
                                border-color: #D1D5DB;
                            }
                            .contact-row {
                                display: flex;
                                flex-wrap: wrap;
                                align-items: center;
                                justify-content: space-between;
                                margin-bottom: 4px;
                                row-gap: 2px;
                            }
                            .contact-info {
                                font-size: 0.8rem; 
                                color: #6B7280; 
                                white-space: nowrap; 
                                overflow: hidden; 
                                text-overflow: ellipsis; 
                                flex: 1 1 auto; 
                                min-width: 0; 
                                margin-right: 8px;
                            }
                            .vehicle-info {
                                font-size: 0.8rem; 
                                color: #6B7280; 
                                white-space: nowrap; 
                                flex: 0 0 auto; 
                                margin-left: 0;
                            }
                            @media (max-width: 420px) {
                                .contact-info {
                                    flex-basis: 100%;
                                    margin-right: 0;
                                }
                            }
                        </style>`;

        topCustomers.forEach((cust, index) => {
            const vehicle = vehicles[index] || { name: 'Unknown Vehicle' };
            const tag = tags[index % tags.length];
            const desc = descriptions[index % descriptions.length];
            const avatarColor = avatarColors[index % avatarColors.length];
            // Initials
            const initials = cust.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

            html += `
            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                <div style="display: flex; width: 100%;">
                    <div class="avatar-circle ${avatarColor}" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">${initials}</div>
                    <div style="flex: 1; min-width: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">${cust.name}</span>
                                <span style="background: ${tag.bg}; color: ${tag.color}; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid ${tag.border};">${tag.label}</span>
                            </div>
                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('${cust.name.replace(/'/g, "\\'")}')">
                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>
                        <div class="contact-row">
                            <div class="contact-info" title="${cust.phone} • ${cust.email}">${cust.phone} • ${cust.email}</div>
                            <div class="vehicle-info">${vehicle.name}</div>
                        </div>
                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                            ${desc}
                        </div>
                    </div>
                </div>
            </div>`;
        });

        html += `</div>`;

        // --- Update focus_today response ---
        const focusCust1 = customers[4] || { name: 'Flora Fleisher' };
        const focusCust2 = customers[5] || { name: 'Mike Sernandez' };
        const focusCust3 = customers[6] || { name: 'Shakil Omar' };
        const focusFirstName3 = focusCust3.name.split(' ')[0];

        const focusHtml = `<div style="font-weight: 600; font-size: 0.875rem; color: #111827; margin-bottom: 12px;">Today's Priorities</div>
                <div class="compact-list-container">
                    <div class="compact-list-item" style="cursor: pointer; display: flex; align-items: flex-start; justify-content: space-between;" data-onclick="showQuoteCustomers()">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #FEF2F2; margin-right: 12px; color: #DC2626;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div class="item-main-info" style="margin-left: 0;">
                                <div class="item-name-row">
                                    <span class="item-name" style="color: #444F5C;">${focusCust1.name}</span>
                                </div>
                                <div class="item-sub-row" style="color: #4B5563;">Requested a quote yesterday</div>
                            </div>
                        </div>
                        <div style="background: #FEF2F2; color: #DC2626; padding: 2px 8px; border-radius: 99px; font-size: 0.70rem; font-weight: 600; border: 1px solid #FECACA; margin-top: 2px;">Urgent</div>
                    </div>
                    <div class="compact-list-item" style="cursor: pointer; display: flex; align-items: flex-start; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #FFF7ED; margin-right: 12px; color: #EA580C;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div class="item-main-info" style="margin-left: 0;">
                                <div class="item-name-row">
                                    <span class="item-name" style="color: #444F5C;">${focusCust2.name}</span>
                                </div>
                                <div class="item-sub-row" style="color: #4B5563;">Missed follow-up yesterday</div>
                            </div>
                        </div>
                        <div style="background: #FFF7ED; color: #EA580C; padding: 2px 8px; border-radius: 99px; font-size: 0.70rem; font-weight: 600; border: 1px solid #FDBA74; margin-top: 2px;">Overdue</div>
                    </div>
                    <div class="compact-list-item" style="cursor: pointer; display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; align-items: center;">
                            <div style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 8px; background: #EFF6FF; margin-right: 12px; color: #2563EB;">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                            </div>
                            <div class="item-main-info" style="margin-left: 0;">
                                <div class="item-name-row">
                                    <span class="item-name" style="color: #444F5C;">5 Appointments today</span>
                                </div>
                                <div class="item-sub-row" style="color: #4B5563;">Next: 9:00 AM with ${focusFirstName3}</div>
                            </div>
                        </div>
                    </div>
                </div>`;

        // Update AI_DATA
        if (typeof AI_DATA !== 'undefined' && AI_DATA.aiResponses) {
            AI_DATA.aiResponses["Summarize recent hot leads"] = html;
            AI_DATA.aiResponses["focus_today"] = focusHtml;

            // --- Update sarah_brief response (now targeting Flora Fleisher) ---
            const flora = customers[4] || { name: 'Flora Fleisher', phone: '+1 (642) 555-0199', email: 'florafleisher@tmail.com' };
            const floraVehicle = vehicles[4] || { name: '2023 AeroVibe' };
            const floraInitials = flora.name.split(' ').map(n => n[0]).join('').toUpperCase();

            const employee = employees[0] || { name: 'William Florez' };

            const sarahBriefHtml = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main); line-height: 1.5;">Last interaction was yesterday via text. She is looking to trade in a <strong>2020 Event Horizon</strong> (likely negative equity) for a ${floraVehicle.name} under $45k. Note that she explicitly <strong>prefers text communication</strong> over calls.</p>
        <div class="premium-deals-grid">
            <div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 4px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style="padding: 12px;">
                    <div style="display: flex; gap: 12px; align-items: center;">
                         <div style="width: 36px; height: 36px; background: #FCE7F3; color: #9D174D; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 13px; border-radius: 36px; flex-shrink: 0;">${floraInitials}</div>
                         <div>
                            <div style="font-weight: 600; color: var(--color-text-heading); font-size: 0.85rem; line-height: 1; padding-bottom:4px;">${flora.name}</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Active</div>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 4px; padding: 8px 0; border-bottom: 1px solid #f1f3f4;">
                        <div>
                             <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Salesperson</div>
                             <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">${employee.name}</div>
                        </div>
                        <div>
                             <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Lead source</div>
                             <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Internet</div>
                        </div>
                        <div>
                             <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Type</div>
                             <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main); white-space: nowrap;">Vehicle Purchase</div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; padding-top:4px;">Created date</div>
                            <div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Jan 27, 2026</div>
                        </div>
                        <button class="open-btn-compact" style="font-size: 14px; padding: 0 20px; border-radius: 2px; font-weight: 600; height: 32px;">View</button>
                    </div>
                </div>
            </div>
        </div>`;

            AI_DATA.aiResponses["sarah_brief"] = sarahBriefHtml;

            // --- Update quote_customers response (Customers 7-11) ---
            const quoteCustomers = [
                customers[7] || { name: 'Deshaun Williams', phone: '+1 (323) 555-0199', email: 'deshaunwilliams@tmail.com' },
                customers[8] || { name: 'Jerome Hendrix', phone: '+1 (963) 555-0106', email: 'jeromehendriz@tmail.com' },
                customers[9] || { name: 'Vincent Lamar', phone: '+1 (852) 555-0157', email: 'vincentlamar@tmail.com' },
                customers[10] || { name: 'Brandon Davis', phone: '+1 (741) 555-0168', email: 'brandondavis@tmail.com' },
                customers[11] || { name: 'Joshua Wright', phone: '+1 (715) 555-0179', email: 'joshuawright@tmail.com' }
            ];

            const quoteVehicles = [
                vehicles[7] || { name: '2023 Lunar Flare' },
                vehicles[8] || { name: '2020 Event Horizon' },
                vehicles[9] || { name: '2018 Alpha Quadrant' },
                vehicles[0] || { name: '2023 Nebula Nimbus' },
                vehicles[1] || { name: '2022 Lunar Blitz' }
            ];

            const quoteNotes = [
                "Texted yesterday. Trading Cybertruck.",
                "Visited lot last weekend.",
                "Query via Autotrader.",
                "Requires financing options.",
                "Trade-in valuation pending."
            ];

            const quoteAvatarColors = ['avatar-pink', 'avatar-green', 'avatar-grey', 'avatar-blue', 'avatar-orange'];

            let quoteHtml = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here are the customers who need the quote to be sent:</p>
                        <div class="compact-list-container">
                            <style>
                                .compact-list-item:hover .follow-up-action {
                                    opacity: 1;
                                    pointer-events: auto;
                                }
                                .follow-up-action {
                                    opacity: 0;
                                    pointer-events: none;
                                    transition: opacity 0.2s ease;
                                }
                                .follow-up-btn-styled {
                                    background: #fff; 
                                    border: 1px solid #E5E7EB; 
                                    border-radius: 6px; 
                                    padding: 4px 10px; 
                                    font-size: 0.75rem; 
                                    font-weight: 600; 
                                    color: #2563EB; 
                                    display: inline-flex; 
                                    align-items: center; 
                                    gap: 4px; 
                                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                                    cursor: pointer;
                                    line-height: normal;
                                    white-space: nowrap;
                                }
                                .follow-up-btn-styled:hover {
                                    background: #F9FAFB;
                                    border-color: #D1D5DB;
                                }
                                .contact-row {
                                    display: flex;
                                    flex-wrap: wrap;
                                    align-items: center;
                                    justify-content: space-between;
                                    margin-bottom: 4px;
                                    row-gap: 2px;
                                }
                                .contact-info {
                                    font-size: 0.8rem; 
                                    color: #6B7280; 
                                    white-space: nowrap; 
                                    overflow: hidden; 
                                    text-overflow: ellipsis; 
                                    flex: 1 1 auto; 
                                    min-width: 0; 
                                    margin-right: 8px;
                                }
                                .vehicle-info {
                                    font-size: 0.8rem; 
                                    color: #6B7280; 
                                    white-space: nowrap; 
                                    flex: 0 0 auto; 
                                    margin-left: 0;
                                }
                                @media (max-width: 420px) {
                                    .contact-info {
                                        flex-basis: 100%;
                                        margin-right: 0;
                                    }
                                }
                            </style>`;

            quoteCustomers.forEach((cust, i) => {
                const vehicle = quoteVehicles[i];
                const note = quoteNotes[i];
                const color = quoteAvatarColors[i];
                const initials = cust.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
                const isUrgent = i < 2;

                quoteHtml += `
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle ${color}" style="width: 36px; height: 36px; font-size: 13px; flex-shrink: 0;">${initials}</div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; height: 24px; margin-bottom: 2px;">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: 0.9rem; font-weight: 600; color: #111827;">${cust.name}</span>
                                                ${isUrgent ? '<span style="background: #FEF2F2; color: #DC2626; padding: 1px 8px; border-radius: 99px; font-size: 0.7rem; font-weight: 600; border: 1px solid #FECACA;">Urgent</span>' : ''}
                                            </div>
                                            <div class="follow-up-action follow-up-btn-styled" data-onclick="showFollowUpContext('${cust.name.replace(/'/g, "\\'")}')">
                                                Ask follow up <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                            </div>
                                        </div>
                                        <div class="contact-row">
                                            <div class="contact-info" title="${cust.phone} • ${cust.email}">${cust.phone} • ${cust.email}</div>
                                            <div class="vehicle-info">${vehicle.name}</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280; line-height: 1.3;">
                                            ${note}
                                        </div>
                                    </div>
                                </div>
                            </div>`;
            });

            quoteHtml += `</div>`;
            AI_DATA.aiResponses["quote_customers"] = quoteHtml;

            console.log("Successfully updated AI responses from CSV data.");
        } else {
            console.error("AI_DATA structure not found.");
        }

    } catch (err) {
        console.error("Error processing CSV data:", err);
    }
})();

// ========================================
// HELPER FUNCTIONS
// ========================================

// Cancel Edit Mode - exits editing state and clears input
function cancelEditMode() {
    if (editingMessageBubble) {
        editingMessageBubble.classList.remove('is-editing');
    }
    editingMessageBubble = null;
    const editingBanner = document.getElementById('editingBanner');
    const mainInput = document.getElementById('mainInput');
    if (editingBanner) editingBanner.classList.remove('visible');
    if (mainInput) {
        mainInput.innerText = '';
        updateSendButton();
    }
}

// Set Search Mode (AI vs Normal Search)
function setSearchMode(mode) {
    const switchEl = document.getElementById('searchModeSwitch');
    const searchInputWrapper = document.getElementById('searchInputWrapper');
    const searchInput = document.getElementById('topSearchInput');
    const suggestions = document.getElementById('aiSearchSuggestions');

    if (!switchEl || !searchInputWrapper || !searchInput || !suggestions) return;

    // Update Switch State
    switchEl.setAttribute('data-mode', mode);

    // Update active class on options
    const aiOption = switchEl.querySelector('.option-ai');
    const searchOption = switchEl.querySelector('.option-search');

    if (mode === 'ai') {
        aiOption.classList.add('active');
        searchOption.classList.remove('active');

        // Activate AI Search Bar Styles
        searchInputWrapper.classList.add('ai-active');
        searchInput.placeholder = "Ask • Find • Summarize";

        // Show Suggestions & Focus
        // Check if we're on a lead detail page
        const leadDetailPage = document.getElementById('leadDetailPage');
        const isOnLeadDetail = leadDetailPage && leadDetailPage.classList.contains('active');

        if (isOnLeadDetail && window.currentLeadContext) {
            renderSuggestions(AI_DATA.leadDetailSuggestions);
        } else {
            renderSuggestions(AI_DATA.aiSuggestions);
        }

        suggestions.classList.add('visible');
        searchInput.focus();
    } else {
        searchOption.classList.add('active');
        aiOption.classList.remove('active');

        // Deactivate AI Search Bar Styles
        searchInputWrapper.classList.remove('ai-active');
        searchInput.placeholder = "Search here...";

        // Hide Suggestions
        suggestions.classList.remove('visible');
    }
}

// Helper to render Chat Panel Suggestions (not search bar)
function renderChatSuggestions(suggestionsList) {
    const container = document.getElementById('suggestionsList');
    if (!container) return;

    // Clear existing suggestions
    container.innerHTML = '';

    // Render new suggestions
    suggestionsList.forEach(suggestion => {
        const text = typeof suggestion === 'string' ? suggestion : suggestion.text;

        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.onclick = () => startChat(text);

        item.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>${text}</span>
        `;

        container.appendChild(item);
    });
}

// Render AI Suggestions
function renderSuggestions(suggestions, query = '') {
    const container = document.getElementById('aiSearchSuggestions');
    if (!container) return;

    if (query) {
        // Query-based suggestions
        container.innerHTML = `
            <div class="suggestion-item" onclick="applySuggestion('${query} Summary')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span><span class="query-text">${query}</span> <span class="action-text">Summary</span></span>
            </div>
            <div class="suggestion-item" onclick="applySuggestion('${query} open deals?')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span><span class="query-text">${query}</span> <span class="action-text">open deals?</span></span>
            </div>
            <div class="suggestion-item" onclick="applySuggestion('${query} Analyze')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span><span class="query-text">${query}</span> <span class="action-text">Analyze</span></span>
            </div>
            <div class="suggestion-item" onclick="applySuggestion('Ask about ${query}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span class="action-text">Ask about <span class="query-text">${query}</span></span>
            </div>
        `;
    } else {
        // Default suggestions
        container.innerHTML = suggestions.map(s => {
            const text = typeof s === 'string' ? s : s.text;
            const escapedText = text.replace(/'/g, "\\'");
            return `
            <div class="suggestion-item" onclick="applySuggestion('${escapedText}')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span class="action-text">${text}</span>
            </div>`;
        }).join('');
    }
}

// Apply Suggestion
function applySuggestion(text) {
    const searchInput = document.getElementById('topSearchInput');
    if (searchInput) {
        searchInput.value = text;
        handleAIAsk();
    }
}

// Handle AI Ask Button Click
function handleAIAsk() {
    const searchInput = document.getElementById('topSearchInput');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    if (!query) return;

    // Switch to fullscreen AI chat
    if (typeof setState === 'function') {
        setState('fullscreen');
    }
    if (typeof resetChat === 'function') {
        resetChat();
    }

    // Automatically send the message
    if (typeof handleSend === 'function') {
        handleSend(query);
    }

    // Clear input and reset search state
    searchInput.value = '';

    // Disable Ask button again
    const askBtn = document.getElementById('aiSearchAskBtn');
    if (askBtn) askBtn.disabled = true;

    // Hide suggestions popover
    const suggestions = document.getElementById('aiSearchSuggestions');
    if (suggestions) suggestions.classList.remove('visible');

    // Update chat panel suggestions
    if (typeof updateChatPanelSuggestions === 'function') {
        updateChatPanelSuggestions(query);
    }
}

// Search Input Listeners
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('topSearchInput');
    const suggestions = document.getElementById('aiSearchSuggestions');
    let typingTimer;

    if (searchInput && suggestions) {
        searchInput.addEventListener('input', function () {
            const searchWrapper = document.getElementById('searchInputWrapper');
            if (!searchWrapper || !searchWrapper.classList.contains('ai-active')) return;

            const query = this.value.trim();
            const askBtn = document.getElementById('aiSearchAskBtn');
            if (askBtn) askBtn.disabled = query.length === 0;

            clearTimeout(typingTimer);
            if (query.length === 0) {
                renderSuggestions(AI_DATA.aiSuggestions);
                suggestions.classList.add('visible');
            } else {
                suggestions.classList.remove('visible');
                typingTimer = setTimeout(() => {
                    if (this.value.trim().length > 0) {
                        renderSuggestions([], this.value.trim());
                        suggestions.classList.add('visible');
                    }
                }, 300);
            }
        });

        searchInput.addEventListener('keydown', function (e) {
            const searchWrapper = document.getElementById('searchInputWrapper');
            if (e.key === 'Enter' && searchWrapper && searchWrapper.classList.contains('ai-active')) {
                e.preventDefault();
                handleAIAsk();
            }
        });

        searchInput.addEventListener('focus', function () {
            const searchWrapper = document.getElementById('searchInputWrapper');
            if (searchWrapper && searchWrapper.classList.contains('ai-active') && this.value.trim().length === 0) {
                renderSuggestions(AI_DATA.aiSuggestions);
                suggestions.classList.add('visible');
            }
        });
    }

    // Click outside to close AI popover
    document.addEventListener('click', function (event) {
        const searchWrapper = document.getElementById('searchInputWrapper');
        const suggestions = document.getElementById('aiSearchSuggestions');
        const switchEl = document.getElementById('searchModeSwitch');

        if (!searchWrapper || !suggestions) return;

        const isClickInside = searchWrapper.contains(event.target) ||
            suggestions.contains(event.target) ||
            (switchEl && switchEl.contains(event.target));

        if (suggestions.classList.contains('visible') && !isClickInside) {
            suggestions.classList.remove('visible');
        }
    });
});

// ========================================
// NORMAL SEARCH RESULTS FUNCTIONALITY
// ========================================

function addFilterPill(label) {
    const filtersAppliedSection = document.getElementById('filtersAppliedSection');
    if (!filtersAppliedSection) return;
    const filterPills = filtersAppliedSection.querySelector('.filter-pills');
    if (!filterPills) return;

    // Simple deduplication
    const existing = Array.from(filterPills.querySelectorAll('.filter-pill'));
    const isDuplicate = existing.some(p => p.textContent.includes(label));
    if (isDuplicate) return;

    const div = document.createElement('div');
    div.className = 'filter-pill';
    div.innerHTML = `
        ${label}
        <span class="close-icon" onclick="this.parentElement.remove(); if(document.querySelectorAll('.filter-pill').length === 0) document.getElementById('filtersAppliedSection').classList.remove('active');">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </span>
    `;
    filterPills.appendChild(div);
    filtersAppliedSection.classList.add('active');
}

function showSearchResults(query, fromRefine = false) {
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const leadsListViewSkeleton = document.getElementById('leadsListViewSkeleton');
    const aiSummaryBanner = document.getElementById('aiSummaryBanner');
    const filtersAppliedSection = document.getElementById('filtersAppliedSection');
    const resultsCount = document.getElementById('searchResultsCount');
    const tableBody = document.getElementById('searchResultsTableBody');
    const filterPills = filtersAppliedSection ? filtersAppliedSection.querySelector('.filter-pills') : null;

    if (searchResultsContainer) {
        searchResultsContainer.classList.add('active');
    }

    // Close lead detail page if it's open
    const leadDetailPage = document.getElementById('leadDetailPage');
    if (leadDetailPage) {
        leadDetailPage.classList.remove('active');
    }

    // Reset banner to initial state for the new query
    resetSearchAIBanner(query, fromRefine);

    const searchInputWrapper = document.getElementById('searchInputWrapper');
    if (searchInputWrapper) {
        searchInputWrapper.classList.add('results-active');
    }

    // If it's a fresh search, clear previous smart filters
    if (!fromRefine && filterPills) {
        filterPills.innerHTML = '';
        if (filtersAppliedSection) filtersAppliedSection.classList.remove('active');
    }

    // Hide other main content
    if (aiSummaryBanner) {
        aiSummaryBanner.style.display = 'none';
    }

    const lowQuery = query.toLowerCase();
    const isSUVQuery = lowQuery.includes('ryans') || lowQuery.includes('contacted in last 7 days') || lowQuery.includes('suv');
    const isTestDriveQuery = lowQuery.includes('test drive') && (lowQuery.includes('tomorrow') || lowQuery.includes('jan 14'));

    let override = null;
    if (isTestDriveQuery) override = AI_DATA.searchOverrides.isTestDriveQuery;
    else if (isSUVQuery) override = AI_DATA.searchOverrides.isSUVQuery;

    if (override) {
        if (override.pills) override.pills.forEach(p => addFilterPill(p));
        if (resultsCount) resultsCount.textContent = override.resultsCount;
        if (tableBody) {
            if (!tableBody.getAttribute('data-original-html')) {
                tableBody.setAttribute('data-original-html', tableBody.innerHTML);
            }
            tableBody.innerHTML = override.html;
        }
    } else {
        // If not explicitly a refined hardcoded query, we don't clear pills here if fromRefine is true
        if (!fromRefine && filtersAppliedSection) filtersAppliedSection.classList.remove('active');
        if (resultsCount) resultsCount.textContent = 'Showing 1 - 15 out of 144 Results.';
        if (tableBody && tableBody.getAttribute('data-original-html')) {
            tableBody.innerHTML = tableBody.getAttribute('data-original-html');
        }
    }

    console.log('Showing search results for:', query);
}

function hideSearchResults() {
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const leadsListViewSkeleton = document.getElementById('leadsListViewSkeleton');
    const aiSummaryBanner = document.getElementById('aiSummaryBanner');
    const searchInput = document.getElementById('topSearchInput');

    if (searchResultsContainer) {
        searchResultsContainer.classList.remove('active');
    }

    const searchInputWrapper = document.getElementById('searchInputWrapper');
    if (searchInputWrapper) {
        searchInputWrapper.classList.remove('results-active');
    }

    // Show main content again
    if (leadsListViewSkeleton) {
        leadsListViewSkeleton.classList.add('active');
    }
    if (aiSummaryBanner) {
        aiSummaryBanner.style.display = 'block';
    }

    // Clear search input and reset filters/banner
    if (searchInput) {
        searchInput.value = '';
    }
    clearAllFilters();
    resetSearchAIBanner();
}

// Lead Detail Page Functions
function openLeadDetail(leadData) {
    const chatPanel = document.getElementById('chatPanel');
    if (chatPanel) {
        if (chatPanel.classList.contains('state-docked')) {
            window.lastChatPanelState = 'docked';
        } else if (chatPanel.classList.contains('state-minimized')) {
            window.lastChatPanelState = 'minimized';
        } else if (chatPanel.classList.contains('state-fullscreen')) {
            window.lastChatPanelState = 'fullscreen';
        } else if (chatPanel.classList.contains('state-closed')) {
            window.lastChatPanelState = 'closed';
        } else {
            window.lastChatPanelState = null; // Default or unknown state
        }
    } else {
        window.lastChatPanelState = null;
    }
    const page = document.getElementById('leadDetailPage');

    if (!page) return;

    // Clear search input and reset search input wrapper
    const searchInput = document.getElementById('topSearchInput');
    const searchInputWrapper = document.getElementById('searchInputWrapper');

    if (searchInput) {
        searchInput.value = '';
    }

    if (searchInputWrapper) {
        searchInputWrapper.classList.remove('results-active');
    }

    // Update AI context for lead detail
    if (leadData && leadData.name) {
        // Remove old leads context
        if (typeof selectedContexts !== 'undefined') {
            selectedContexts.delete('curr1');
        }

        // Update the context item to show lead name
        AI_DATA.leadsItem = {
            id: 'lead-detail',
            label: leadData.name,  // Just the name, not "Leads - Name"
            type: 'page',
            isCurrent: true
        };

        // Add new lead detail context
        if (typeof selectedContexts !== 'undefined') {
            selectedContexts.add('lead-detail');
            // Re-render context pills to show updated label
            if (typeof renderContextPills === 'function') {
                renderContextPills();
            }
        }

        // Store current lead data globally for AI to access
        window.currentLeadContext = leadData;

        // Update Chat Panel Suggestions
        if (typeof renderChatSuggestions === 'function') {
            renderChatSuggestions(AI_DATA.leadDetailSuggestions);
        }

        // Trigger AI context update if AI is active
        const suggestions = document.getElementById('aiSuggestions');
        const switchEl = document.querySelector('.ai-search-switch');
        if (switchEl && switchEl.getAttribute('data-mode') === 'ai' && suggestions) {
            renderSuggestions(AI_DATA.leadDetailSuggestions);
        }
    }

    // Show the full page
    page.classList.add('active');

    // Scroll content to top
    // The lead detail page is inside .search-results-content which scrolls.
    // We need to scroll the parent to top, but save position first.
    const resultsContent = document.querySelector('.search-results-content');
    if (resultsContent) {
        window.lastResultsScrollTop = resultsContent.scrollTop;
        resultsContent.scrollTop = 0;
    }

    const mainContent = page.querySelector('.lead-detail-main');
    const rightPanel = page.querySelector('.lead-detail-right-panel');
    if (mainContent) mainContent.scrollTop = 0;
    if (rightPanel) rightPanel.scrollTop = 0;

    // Update To-Do date to tomorrow
    const tomorrowEl = document.getElementById('todoTomorrowDate');
    if (tomorrowEl) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        // Format: Jan 23, 2026
        tomorrowEl.textContent = tomorrow.toLocaleDateString('en-US', options);
    }
}

function closeLeadDetail() {
    const page = document.getElementById('leadDetailPage');
    const mainContent = document.getElementById('mainContent');

    if (mainContent) {
        mainContent.classList.remove('pushed-by-dock');
    }

    // Restore scroll position
    if (typeof window.lastResultsScrollTop !== 'undefined') {
        const resultsContent = document.querySelector('.search-results-content');
        if (resultsContent) {
            resultsContent.scrollTop = window.lastResultsScrollTop;
        }
    }

    if (page) {
        page.classList.remove('active');
    }

    // Reset AI context back to general Leads
    // Remove lead detail context
    if (typeof selectedContexts !== 'undefined') {
        selectedContexts.delete('lead-detail');
    }

    AI_DATA.leadsItem = {
        id: 'curr1',
        label: "Leads",
        type: 'page',
        isCurrent: true
    };

    // Add back default leads context
    if (typeof selectedContexts !== 'undefined') {
        selectedContexts.add('curr1');
        // Re-render context pills to show updated label
        if (typeof renderContextPills === 'function') {
            renderContextPills();
        }
    }

    // Clear current lead context
    window.currentLeadContext = null;

    // Reset Chat Panel Suggestions
    if (typeof renderChatSuggestions === 'function') {
        renderChatSuggestions(AI_DATA.aiSuggestions);
    }

    // Reset suggestions if AI is active
    const suggestions = document.getElementById('aiSuggestions');
    const switchEl = document.querySelector('.ai-search-switch');
    if (switchEl && switchEl.getAttribute('data-mode') === 'ai' && suggestions) {
        renderSuggestions(AI_DATA.aiSuggestions);
    }

    // Navigate back to leads list page
    hideSearchResults();

    const chatPanel = document.getElementById('chatPanel');

    if (chatPanel) {
        // Remove all state classes
        chatPanel.classList.remove('state-closed', 'state-minimized', 'state-fullscreen', 'state-docked');

        if (window.lastChatPanelState) {
            chatPanel.classList.add(`state-${window.lastChatPanelState}`);
            if (window.lastChatPanelState === 'docked' && window.innerWidth >= 1600) {
                if (mainContent) mainContent.classList.add('pushed-by-dock');
            } else {
                if (mainContent) mainContent.classList.remove('pushed-by-dock');
            }
        } else {
            // Default to closed if no previous state was saved
            chatPanel.classList.add('state-closed');
            if (mainContent) mainContent.classList.remove('pushed-by-dock');
        }
    } else {
        if (mainContent) mainContent.classList.remove('pushed-by-dock');
    }

    // Clear the saved state
    window.lastChatPanelState = null;
}

function goToPage(pageNumber) {
    console.log('Going to page:', pageNumber);
    // Update active state
    const buttons = document.querySelectorAll('.pagination-btn');
    buttons.forEach(btn => {
        if (btn.textContent.trim() === pageNumber.toString()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    // In a real implementation, this would load the data for that page
}

// Add click handlers to table rows
document.addEventListener('DOMContentLoaded', function () {
    // Use event delegation for table rows
    const tableBody = document.getElementById('searchResultsTableBody');
    if (tableBody) {
        tableBody.addEventListener('click', function (e) {
            const row = e.target.closest('tr');
            if (!row) return;

            // Don't trigger if clicking on the AI icon
            if (e.target.closest('.row-ai-icon')) return;

            // Extract data from the row
            const nameCell = row.querySelector('.name-cell span:first-child');
            const customerIdCell = row.querySelector('.customer-id');
            const emailCell = row.querySelector('.contact-email');
            const phoneCell = row.querySelector('.contact-phone');
            const salespersonCell = row.querySelectorAll('td')[2];
            const vehicleCell = row.querySelectorAll('td')[3];
            const dealCell = row.querySelectorAll('td')[4];
            const stockCell = row.querySelectorAll('td')[5];

            if (!nameCell) return;

            const leadData = {
                name: nameCell.textContent.trim(),
                customerId: customerIdCell ? customerIdCell.textContent.trim() : 'N/A',
                email: emailCell ? emailCell.textContent.trim() : 'N/A',
                phone: phoneCell ? phoneCell.textContent.trim() : 'N/A',
                salesperson: salespersonCell ? salespersonCell.textContent.trim() : 'N/A',
                vehicle: vehicleCell ? vehicleCell.textContent.trim() : 'N/A',
                dealNumber: dealCell ? dealCell.textContent.trim().replace(/\s+/g, ' ') : 'N/A',
                stockNumber: stockCell ? stockCell.textContent.trim().replace(/\s+/g, ' ') : 'N/A'
            };

            openLeadDetail(leadData);
        });
    }
});

function switchSearchTab(tabName) {
    const tabs = document.querySelectorAll('.search-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().replace(/\s+/g, '-') === tabName) {
            tab.classList.add('active');
        }
    });
    console.log('Switched to tab:', tabName);
}

function applyFilters() {
    const salesperson = document.getElementById('filterSalesperson')?.value || '';
    const leadStatus = document.getElementById('filterLeadStatus')?.value || '';
    const stock = document.getElementById('filterStock')?.value || '';
    const year = document.getElementById('filterYear')?.value || '';
    const make = document.getElementById('filterMake')?.value || '';

    console.log('Applying filters:', { salesperson, leadStatus, stock, year, make });

    // Removed static count update logic as per user request
}

function clearAllFilters() {
    if (document.getElementById('filterSalesperson')) document.getElementById('filterSalesperson').value = '';
    if (document.getElementById('filterLeadStatus')) document.getElementById('filterLeadStatus').value = '';
    if (document.getElementById('filterStock')) document.getElementById('filterStock').value = '';
    if (document.getElementById('filterYear')) document.getElementById('filterYear').value = '';
    if (document.getElementById('filterMake')) document.getElementById('filterMake').value = '';

    applyFilters();
}

function startChatWithContext(text) {
    const searchInput = document.getElementById('topSearchInput');
    if (searchInput) {
        searchInput.value = text;
        if (typeof handleAIAsk === 'function') {
            handleAIAsk();
        } else {
            if (typeof setState === 'function') setState('fullscreen');
            searchInput.focus();
        }
    }
}



function submitRefineSearch() {
    const input = document.getElementById('enhancedRefineInput');
    const banner = document.querySelector('.refine-results-banner');
    const wrapper = document.querySelector('.refine-results-banner .input-border-wrapper');
    const thinking = document.querySelector('.refine-input-thinking');
    const sendBtn = document.querySelector('.refine-results-banner .send-btn-square');

    if (input && input.value.trim() !== "") {
        const query = input.value.trim();

        // Keep the text but disable typing during processing
        input.disabled = true;
        input.style.opacity = "0.7";
        input.style.cursor = "not-allowed";

        if (wrapper) wrapper.classList.add('glow-active');
        if (banner) banner.classList.add('aurora-active');
        if (thinking) thinking.classList.add('active');
        if (sendBtn) {
            sendBtn.classList.add('stop');
            sendBtn.innerHTML = btnStopIcon;
        }

        setTimeout(() => {
            if (wrapper) wrapper.classList.remove('glow-active');
            if (banner) banner.classList.remove('aurora-active');
            if (thinking) thinking.classList.remove('active');
            if (sendBtn) {
                sendBtn.classList.remove('stop');
                sendBtn.innerHTML = btnSendIcon;
            }

            // Intermediate "Loading results..." state
            const loadingState = document.getElementById('resultsLoadingState');
            const resultsTable = document.querySelector('.search-results-table');
            const resultsHeader = document.querySelector('.results-header');

            if (loadingState && resultsTable) {
                resultsTable.style.display = 'none';
                if (resultsHeader) resultsHeader.style.display = 'none';
                loadingState.classList.add('active');

                setTimeout(() => {
                    loadingState.classList.remove('active');
                    resultsTable.style.display = '';
                    if (resultsHeader) resultsHeader.style.display = '';

                    // Reset input to default once results are fully loaded
                    input.value = "";
                    input.disabled = false;
                    input.style.opacity = "1";
                    input.style.cursor = "text";
                    if (sendBtn) sendBtn.classList.remove('active');

                    showSearchResults(query, true);
                }, 2500);
            } else {
                // Fallback if elements not found
                input.value = "";
                input.disabled = false;
                input.style.opacity = "1";
                input.style.cursor = "text";
                if (sendBtn) sendBtn.classList.remove('active');
                showSearchResults(query, true);
            }
        }, 4500);
    }
}

function showRefineEnhancedInput() {
    const banner = document.querySelector('.refine-results-banner');
    if (!banner) return;

    banner.classList.add('input-mode');

    banner.innerHTML = `
        <div class="input-wrapper" style="padding: 0; width: 100%;">
            <div class="input-border-wrapper">
                <div class="enhanced-input-box">
                            <input type="text" 
                                   id="enhancedRefineInput"
                                   class="enhanced-refine-input" 
                                   placeholder="Refine results by providing more context" 
                                   style="flex: 1; border: none; outline: none; font-size: 16px; background: transparent; padding: 8px 0;"
                                   onkeypress="if(event.key === 'Enter') submitRefineSearch()"
                                   oninput="toggleRefineSendBtn(this.value)"
                                   autofocus>
                            <div class="toolbar-right">
                                <div class="refine-input-thinking">
                                    <span>Thinking...</span>
                                </div>
                                <button class="tool-icon-btn" title="Voice Search">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                        <line x1="12" y1="19" x2="12" y2="22"></line>
                                    </svg>
                                </button>
                                <button class="send-btn-square" id="refineSendBtn" title="Send" onclick="submitRefineSearch()">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="19" x2="12" y2="5"></line>
                                        <polyline points="5 12 12 5 19 12"></polyline>
                                    </svg>
                                </button>
                            </div>
                </div>
            </div>
        </div>
    `;

    const input = banner.querySelector('.enhanced-refine-input');
    if (input) input.focus();
}

function toggleRefineSendBtn(val) {
    const btn = document.getElementById('refineSendBtn');
    if (btn) {
        if (val.trim().length > 0) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }
}

function resetSearchAIBanner(query = "keyword", fromRefine = false) {
    // Reset AI Suggestion Banner
    const suggestionBanner = document.querySelector('.search-results-container .ai-suggestion-banner');
    if (suggestionBanner) {
        suggestionBanner.classList.remove('expanded');
        suggestionBanner.classList.remove('aurora-active');
        suggestionBanner.style.height = '';
        suggestionBanner.style.minHeight = '';
        suggestionBanner.innerHTML = `
            <div class="banner-text">
                <div class="banner-title" id="aiBannerHeadline">Want deeper insights on "<strong>${query}</strong>"?</div>
                <div class="banner-subtitle">T-ONE can summarize these results or provide comparative insights.</div>
            </div>
            <button class="initiate-chat-btn" onclick="switchToAIFromSearch()">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.94922 14.2996C8.41854 14.2998 8.79948 14.6805 8.79948 15.1498C8.79934 15.619 8.41845 15.9999 7.94922 16C7.47986 16 7.0991 15.6191 7.09896 15.1498C7.09896 14.6804 7.47978 14.2996 7.94922 14.2996Z" fill="white" />
                    <path d="M12.1497 13.3973C12.5086 13.3973 12.7993 13.6882 12.7995 14.047C12.7995 14.406 12.5087 14.6967 12.1497 14.6967C11.7909 14.6966 11.5 14.4059 11.5 14.047C11.5001 13.6883 11.791 13.3975 12.1497 13.3973Z" fill="white" />
                    <path d="M3.45052 12.7997C3.86473 12.7997 4.20052 13.1355 4.20052 13.5497C4.20052 13.9639 3.86473 14.2996 3.45052 14.2996C3.03631 14.2996 2.70052 13.9639 2.70052 13.5497C2.70052 13.1355 3.03631 12.7997 3.45052 12.7997Z" fill="white" />
                    <path d="M6.25 10.3976C6.94036 10.3976 7.5 10.9572 7.5 11.6475C7.5 12.3378 6.94036 12.8974 6.25 12.8974C5.55964 12.8974 5 12.3378 5 11.6475C5 10.9572 5.55964 10.3976 6.25 10.3976Z" fill="white" />
                    <path d="M10.3503 10.3976C10.9853 10.3976 11.4999 10.9123 11.5 11.5472C11.5 12.1823 10.9854 12.6969 10.3503 12.6969C9.71525 12.6967 9.20052 12.1822 9.20052 11.5472C9.20066 10.9124 9.71534 10.3977 10.3503 10.3976Z" fill="white" />
                    <path d="M13.6497 10.1984C14.1191 10.1985 14.5 10.5793 14.5 11.0486C14.4999 11.5178 14.119 11.8986 13.6497 11.8988C13.1804 11.8988 12.7996 11.5179 12.7995 11.0486C12.7995 10.5792 13.1803 10.1984 13.6497 10.1984Z" fill="white" />
                    <path d="M3.41667 6.86923C3.73903 6.32538 4.45228 6.13871 5.01042 6.4526C5.56871 6.7668 5.75983 7.46295 5.4375 8.00716C5.36588 8.12803 5.27483 8.23174 5.17057 8.31573C4.68818 8.70417 3.97429 8.90987 3.66146 9.43803L3.625 9.49923C3.39616 9.88587 3.47637 10.4224 3.2474 10.809C3.0482 11.1453 2.60674 11.2609 2.26172 11.0668C1.91679 10.8727 1.79845 10.4422 1.9974 10.1059C2.23484 9.70506 2.78461 9.50557 3.02214 9.10473L3.04948 9.05656C3.35255 8.54486 3.18708 7.86584 3.27083 7.28066C3.291 7.13974 3.3392 7.00003 3.41667 6.86923Z" fill="white" />
                    <path d="M8.2487 6.60103C9.15988 6.60103 9.8983 7.33955 9.89844 8.25063C9.89844 9.16183 9.15997 9.90024 8.2487 9.90024C7.33755 9.9001 6.59896 9.16174 6.59896 8.25063C6.5991 7.33964 7.33763 6.60117 8.2487 6.60103Z" fill="white" />
                    <path d="M9.68229 3.55049C10.2406 3.23631 10.955 3.42298 11.2773 3.96713C11.3936 4.16346 11.4428 4.38 11.4323 4.59077C11.4095 5.04569 11.3042 5.54911 11.5378 5.94353C11.7715 6.33786 12.272 6.50082 12.6875 6.70909C12.8796 6.8055 13.0466 6.95463 13.1628 7.15046C13.4851 7.69466 13.294 8.39082 12.7357 8.70502C12.1774 9.01922 11.4643 8.8326 11.1419 8.28839C11.0257 8.09219 10.9752 7.87667 10.9857 7.66604C11.0084 7.21104 11.1152 6.7065 10.8815 6.31199C10.6478 5.91782 10.1472 5.75593 9.73177 5.54773C9.53925 5.45123 9.3715 5.30139 9.25521 5.10505C8.93305 4.56095 9.12424 3.86473 9.68229 3.55049Z" fill="white" />
                    <path d="M0.75 7.30019C1.16421 7.30019 1.5 7.63595 1.5 8.05013C1.5 8.46431 1.16421 8.80007 0.75 8.80007C0.335786 8.80007 0 8.46431 0 8.05013C0 7.63595 0.335786 7.30019 0.75 7.30019Z" fill="white" />
                    <path d="M15.25 7.30019C15.6642 7.30019 16 7.63595 16 8.05013C16 8.46431 15.6642 8.80007 15.25 8.80007C14.8358 8.80007 14.5 8.46431 14.5 8.05013C14.5 7.63595 14.8358 7.30019 15.25 7.30019Z" fill="white" />
                    <path d="M2.04948 3.49972C2.6292 3.49972 3.09998 3.9695 3.10026 4.54911C3.10026 5.12896 2.62938 5.5998 2.04948 5.5998C1.46982 5.59952 1 5.12879 1 4.54911C1.00028 3.96967 1.46999 3.5 2.04948 3.49972Z" fill="white" />
                    <path d="M6.54948 2.8982C7.23984 2.8982 7.79948 3.4578 7.79948 4.1481C7.79948 4.8384 7.23984 5.398 6.54948 5.398C5.85912 5.398 5.29948 4.8384 5.29948 4.1481C5.29948 3.4578 5.85912 2.8982 6.54948 2.8982Z" fill="white" />
                    <path d="M13.2005 2.4998C13.7528 2.4998 14.2005 2.94748 14.2005 3.49972C14.2005 4.05196 13.7528 4.49963 13.2005 4.49963C12.6482 4.49963 12.2005 4.05196 12.2005 3.49972C12.2005 2.94748 12.6482 2.4998 13.2005 2.4998Z" fill="white" />
                    <path d="M4.55078 0.800716C4.90968 0.800716 5.20038 1.09157 5.20052 1.4504C5.20052 1.80936 4.90977 2.10009 4.55078 2.10009C4.19192 2.09995 3.90104 1.80927 3.90104 1.4504C3.90118 1.09165 4.192 0.800857 4.55078 0.800716Z" fill="white" />
                    <path d="M8.75 0C9.16421 0 9.5 0.335759 9.5 0.749939C9.5 1.16412 9.16421 1.49988 8.75 1.49988C8.33579 1.49988 8 1.16412 8 0.749939C8 0.335759 8.33579 0 8.75 0Z" fill="white" />
                </svg>
                Generate Insights
            </button>
        `;
    }

    // Reset Refine Results Banner (Smarter)
    const refineBanner = document.querySelector('.refine-results-banner');
    if (refineBanner) {
        if (fromRefine) {
            // Stay in input mode but keep it at default placeholder
            showRefineEnhancedInput();
            const input = refineBanner.querySelector('.enhanced-refine-input');
            if (input) {
                input.value = ""; // Reset to placeholder
            }
            toggleRefineSendBtn(""); // Ensure button is deactivated
        } else {
            // Reset to banner button state - always remove input-mode class
            refineBanner.classList.remove('input-mode');
            refineBanner.classList.remove('aurora-active');
            refineBanner.innerHTML = `
                <div class="refine-banner-content">
                    <img src="https://tekiondesignteam.github.io/design-experimentations/ai-logo2.svg"
                        width="40" height="40" alt="T-ONE">
                    <div class="refine-banner-text">
                        <div class="refine-banner-title">Not the results you expected?</div>
                        <div class="refine-banner-subtitle">T-ONE can help surface results
                            that better match your intent.</div>
                    </div>
                </div>
                <button class="refine-banner-btn" onclick="showRefineEnhancedInput()">Refine
                    Results</button>
            `;
        }
    }
}

function switchToAIFromSearch() {
    const banner = document.querySelector('.search-results-container .ai-suggestion-banner');
    if (!banner) return;

    // Maintain current height for thinking state
    const currentHeight = banner.offsetHeight;
    banner.style.height = currentHeight + 'px';
    banner.style.minHeight = currentHeight + 'px';

    // Add expanded class to banner (removes padding)
    banner.classList.add('expanded');
    banner.classList.add('aurora-active');

    // Show analyzing state
    banner.innerHTML = `
        <div class="banner-thinking">
            <div class="thinking-avatar">
                ${AI_LOGO_SVG}
            </div>
            <span>Generating Insights...</span>
        </div>
    `;

    // After 5-8s, show the Insights Slider and allow height to expand naturally
    const loadingDuration = Math.floor(Math.random() * 3001) + 5000;
    setTimeout(() => {
        banner.style.height = '';
        banner.style.minHeight = '';
        banner.classList.remove('aurora-active');

        window.currentInsightSlide = 0;
        const insights = AI_DATA.aiInsights;
        const totalSlides = insights.length;

        const iconMap = {
            equity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
            inventory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
            retention: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
        };

        banner.innerHTML = `
            <div class="ai-slider-container">
                <div class="ai-slider" id="aiInsightsSlider" style="width: ${totalSlides * 100}%">
                    ${insights.map(insight => `
                        <div class="ai-slide" style="width: ${100 / totalSlides}%">
                            <div class="ai-slide-content">
                                <div class="ai-slide-label">
                                    ${iconMap[insight.iconType] || ''}
                                    <span>${insight.label}</span>
                                </div>
                                <div class="ai-slide-body">
                                    <div class="ai-slide-title">${insight.title}</div>
                                    <div class="ai-slide-description">${insight.description}</div>
                                </div>
                            </div>
                            <button class="ai-slide-cta" onclick="startChatWithContext('${insight.ctaQuery.replace(/'/g, "\\\'")}')">
                                ${AI_LOGO_SVG}
                                ${insight.ctaText}
                            </button>
                        </div>
                    `).join('')}
                </div>
                <div class="ai-slider-nav">
                    <div class="slide-indicator" id="aiSlideIndicator">1 of ${totalSlides}</div>
                    <button class="nav-arrow-btn" onclick="moveSlide(-1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button class="nav-arrow-btn" onclick="moveSlide(1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>
            </div>
        `;
    }, loadingDuration);
}

window.moveSlide = function (direction) {
    const insights = AI_DATA.aiInsights;
    const totalSlides = insights.length;
    window.currentInsightSlide = (window.currentInsightSlide + direction + totalSlides) % totalSlides;

    const slider = document.getElementById('aiInsightsSlider');
    const indicator = document.getElementById('aiSlideIndicator');

    if (slider) {
        slider.style.transform = `translateX(-${window.currentInsightSlide * (100 / totalSlides)}%)`;
    }
    if (indicator) {
        indicator.innerText = `${window.currentInsightSlide + 1} of ${totalSlides}`;
    }
};

function addSalesLead() {
    alert('Add Sales Lead functionality would open a modal/form here');
}

function addServiceLead() {
    alert('Add Service Lead functionality would open a modal/form here');
}

// Listen for normal search input in DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('topSearchInput');
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            const searchWrapper = document.getElementById('searchInputWrapper');
            if (searchWrapper && !searchWrapper.classList.contains('ai-active')) {
                clearTimeout(searchTimeout);
                const query = this.value.trim();
                if (query.length > 0) {
                    searchTimeout = setTimeout(() => showSearchResults(query), 500);
                } else {
                    hideSearchResults();
                }
            }
        });

        // Also trigger on Enter key
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                const searchWrapper = document.getElementById('searchInputWrapper');
                if (query.length > 0 && searchWrapper && !searchWrapper.classList.contains('ai-active')) {
                    showSearchResults(query);
                }
            }
        });
    }
});

// Modals
const renameModal = document.getElementById('renameModal');
const renameInput = document.getElementById('renameInput');
const deleteModal = document.getElementById('deleteModal');

const customerMenu = document.getElementById('customerMenu');
const customerList = document.getElementById('customerList');

const vehicleMenu = document.getElementById('vehicleMenu');
const vehicleList = document.getElementById('vehicleList');

const vinMenu = document.getElementById('vinMenu');
const vinList = document.getElementById('vinList');
const datetimeMenu = document.getElementById('datetimeMenu');
const datetimeList = document.getElementById('datetimeList');

// History & Overlay Elements
const historyOverlay = document.getElementById('historyOverlay');
// const historySearchBtn = document.getElementById('historySearchBtn'); // DELETED - Element doesn't exist
// const historySearchWrapper = document.getElementById('historySearchWrapper'); // DELETED - Element doesn't exist
const historySearchInput = document.getElementById('historySearchInput');
// const historyNewChatBtn = document.getElementById('historyNewChatBtn'); // DELETED - Element doesn't exist

// History Toggle Function (Moved up to avoid TDZ)
window.toggleHistory = function (forceOpen = null) {
    if (!historySheet || !historyOverlay) return;
    let isOpen;
    if (forceOpen === true) {
        historySheet.classList.add('open');
        isOpen = true;
    } else if (forceOpen === false) {
        historySheet.classList.remove('open');
        isOpen = false;
    } else {
        isOpen = historySheet.classList.toggle('open');
    }

    if (isOpen) {
        historyOverlay.classList.add('visible');
    } else {
        historyOverlay.classList.remove('visible');
    }
};



let historyAdded = false;
let chatSessions = {};
let activeChatTitle = null;
let currentItem = null;

let isDragging = false;
let startX, startLeft;

let activePromptVar = null;
let currentActiveMenu = null;

// Rotating Placeholder Logic
const placeholders = AI_DATA.inputPlaceholders;
let placeholderIndex = 0;
let placeholderInterval;
function rotatePlaceholder() {
    // Find all placeholder wrappers to support multiple input boxes
    const wrappers = document.querySelectorAll('.placeholder-wrapper');
    if (wrappers.length === 0) return;

    const initialView = document.getElementById('initialView');
    const isInitialState = initialView && initialView.style.display !== 'none';

    let hasPageContext = false;
    if (typeof selectedContexts !== 'undefined' && typeof dmsContextItems !== 'undefined') {
        const allContexts = [...dmsContextItems, AI_DATA.leadsItem];
        hasPageContext = Array.from(selectedContexts).some(id => {
            const item = allContexts.find(i => i.id === id);
            return item && item.type === 'page';
        });
    }

    wrappers.forEach(wrapper => {
        const phCurrent = wrapper.querySelector('.placeholder-item.visible');
        const phNext = wrapper.querySelector('.placeholder-item:not(.visible)');
        const inputId = wrapper.id.replace('placeholderWrapper', 'mainInput');
        const input = document.getElementById(inputId);

        if (!phCurrent || !phNext || !input) return;

        // If not in initial state, show static "Follow up" or "Ask about page"
        if (!isInitialState) {
            const baseText = hasPageContext ? "Ask a question about this page..." : "Follow up / ask anything";
            if (phCurrent.innerText !== baseText) phCurrent.innerText = baseText;
            phCurrent.className = 'placeholder-item visible no-placeholder-transition';
            phNext.className = 'placeholder-item hidden-down no-placeholder-transition';
            return;
        }

        // Normal rotation logic
        if (input.textContent.trim() === "") {
            // Update index once per whole rotation call (it's called every 3s)
            // We'll calculate the index based on time or a global, but since we loop wrappers, 
            // we should increment the global index ONLY ONCE.
        }
    });

    // Increment global index once per interval
    if (wrappers[0]) {
        const firstInput = document.getElementById(wrappers[0].id.replace('placeholderWrapper', 'mainInput'));
        if (firstInput && firstInput.textContent.trim() === "") {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        }
    }

    wrappers.forEach(wrapper => {
        const phCurrent = wrapper.querySelector('.placeholder-item.visible');
        const phNext = wrapper.querySelector('.placeholder-item:not(.visible)');
        const inputId = wrapper.id.replace('placeholderWrapper', 'mainInput');
        const input = document.getElementById(inputId);

        if (!phCurrent || !phNext || !input) return;

        if (input.textContent.trim() === "") {
            phNext.classList.add('no-placeholder-transition');
            let text = placeholders[placeholderIndex];
            if (hasPageContext && text === "Ask Anything...") {
                text = "Ask a question about this page...";
            }
            phNext.innerText = text;
            phNext.className = 'placeholder-item hidden-down no-placeholder-transition';

            phNext.offsetHeight; // Reflow
            phNext.classList.remove('no-placeholder-transition');
            phCurrent.className = 'placeholder-item hidden-up';
            phNext.className = 'placeholder-item visible';

            // Roles for next time are handled by the next querySelector naturally
        }
    });
}

// Typing Controller
let typingController = null;
const btnSendIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
const btnStopIcon = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="5" y="5" width="14" height="14" rx="1.5" ry="1.5"></rect></svg>';
const HEADER_NEW_CHAT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>';
const HEADER_ADD_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
const AI_LOGO_SVG = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94922 14.2996C8.41854 14.2998 8.79948 14.6805 8.79948 15.1498C8.79934 15.619 8.41845 15.9999 7.94922 16C7.47986 16 7.0991 15.6191 7.09896 15.1498C7.09896 14.6804 7.47978 14.2996 7.94922 14.2996Z" fill="url(#aiLogoGradient)"/><path d="M12.1497 13.3973C12.5086 13.3973 12.7993 13.6882 12.7995 14.047C12.7995 14.406 12.5087 14.6967 12.1497 14.6967C11.7909 14.6966 11.5 14.4059 11.5 14.047C11.5001 13.6883 11.791 13.3975 12.1497 13.3973Z" fill="url(#aiLogoGradient)"/><path d="M3.45052 12.7997C3.86473 12.7997 4.20052 13.1355 4.20052 13.5497C4.20052 13.9639 3.86473 14.2996 3.45052 14.2996C3.03631 14.2996 2.70052 13.9639 2.70052 13.5497C2.70052 13.1355 3.03631 12.7997 3.45052 12.7997Z" fill="url(#aiLogoGradient)"/><path d="M6.25 10.3976C6.94036 10.3976 7.5 10.9572 7.5 11.6475C7.5 12.3378 6.94036 12.8974 6.25 12.8974C5.55964 12.8974 5 12.3378 5 11.6475C5 10.9572 5.55964 10.3976 6.25 10.3976Z" fill="url(#aiLogoGradient)"/><path d="M10.3503 10.3976C10.9853 10.3976 11.4999 10.9123 11.5 11.5472C11.5 12.1823 10.9854 12.6969 10.3503 12.6969C9.71525 12.6967 9.20052 12.1822 9.20052 11.5472C9.20066 10.9124 9.71534 10.3977 10.3503 10.3976Z" fill="url(#aiLogoGradient)"/><path d="M13.6497 10.1984C14.1191 10.1985 14.5 10.5793 14.5 11.0486C14.4999 11.5178 14.119 11.8986 13.6497 11.8988C13.1804 11.8988 12.7996 11.5179 12.7995 11.0486C12.7995 10.5792 13.1803 10.1984 13.6497 10.1984Z" fill="url(#aiLogoGradient)"/><path d="M3.41667 6.86923C3.73903 6.32538 4.45228 6.13871 5.01042 6.4526C5.56871 6.7668 5.75983 7.46295 5.4375 8.00716C5.36588 8.12803 5.27483 8.23174 5.17057 8.31573C4.68818 8.70417 3.97429 8.90987 3.66146 9.43803L3.625 9.49923C3.39616 9.88587 3.47637 10.4224 3.2474 10.809C3.0482 11.1453 2.60674 11.2609 2.26172 11.0668C1.91679 10.8727 1.79845 10.4422 1.9974 10.1059C2.23484 9.70506 2.78461 9.50557 3.02214 9.10473L3.04948 9.05656C3.35255 8.54486 3.18708 7.86584 3.27083 7.28066C3.291 7.13974 3.3392 7.00003 3.41667 6.86923Z" fill="url(#aiLogoGradient)"/><path d="M8.2487 6.60103C9.15988 6.60103 9.8983 7.33955 9.89844 8.25063C9.89844 9.16183 9.15997 9.90024 8.2487 9.90024C7.33755 9.9001 6.59896 9.16174 6.59896 8.25063C6.5991 7.33964 7.33763 6.60117 8.2487 6.60103Z" fill="url(#aiLogoGradient)"/><path d="M9.68229 3.55049C10.2406 3.23631 10.955 3.42298 11.2773 3.96713C11.3936 4.16346 11.4428 4.38 11.4323 4.59077C11.4095 5.04569 11.3042 5.54911 11.5378 5.94353C11.7715 6.33786 12.272 6.50082 12.6875 6.70909C12.8796 6.8055 13.0466 6.95463 13.1628 7.15046C13.4851 7.69466 13.294 8.39082 12.7357 8.70502C12.1774 9.01922 11.4643 8.8326 11.1419 8.28839C11.0257 8.09219 10.9752 7.87667 10.9857 7.66604C11.0084 7.21104 11.1152 6.7065 10.8815 6.31199C10.6478 5.91782 10.1472 5.75593 9.73177 5.54773C9.53925 5.45123 9.3715 5.30139 9.25521 5.10505C8.93305 4.56095 9.12424 3.86473 9.68229 3.55049Z" fill="url(#aiLogoGradient)"/><path d="M0.75 7.30019C1.16421 7.30019 1.5 7.63595 1.5 8.05013C1.5 8.46431 1.16421 8.80007 0.75 8.80007C0.335786 8.80007 0 8.46431 0 8.05013C0 7.63595 0.335786 7.30019 0.75 7.30019Z" fill="url(#aiLogoGradient)"/><path d="M15.25 7.30019C15.6642 7.30019 16 7.63595 16 8.05013C16 8.46431 15.6642 8.80007 15.25 8.80007C14.8358 8.80007 14.5 8.46431 14.5 8.05013C14.5 7.63595 14.8358 7.30019 15.25 7.30019Z" fill="url(#aiLogoGradient)"/><path d="M2.04948 3.49972C2.6292 3.49972 3.09998 3.9695 3.10026 4.54911C3.10026 5.12896 2.62938 5.5998 2.04948 5.5998C1.46982 5.59952 1 5.12879 1 4.54911C1.00028 3.96967 1.46999 3.5 2.04948 3.49972Z" fill="url(#aiLogoGradient)"/><path d="M6.54948 2.8982C7.23984 2.8982 7.79948 3.4578 7.79948 4.1481C7.79948 4.8384 7.23984 5.398 6.54948 5.398C5.85912 5.398 5.29948 4.8384 5.29948 4.1481C5.29948 3.4578 5.85912 2.8982 6.54948 2.8982Z" fill="url(#aiLogoGradient)"/><path d="M13.2005 2.4998C13.7528 2.4998 14.2005 2.94748 14.2005 3.49972C14.2005 4.05196 13.7528 4.49963 13.2005 4.49963C12.6482 4.49963 12.2005 4.05196 12.2005 3.49972C12.2005 2.94748 12.6482 2.4998 13.2005 2.4998Z" fill="url(#aiLogoGradient)"/><path d="M4.55078 0.800716C4.90968 0.800716 5.20038 1.09157 5.20052 1.4504C5.20052 1.80936 4.90977 2.10009 4.55078 2.10009C4.19192 2.09995 3.90104 1.80927 3.90104 1.4504C3.90118 1.09165 4.192 0.800857 4.55078 0.800716Z" fill="url(#aiLogoGradient)"/><path d="M8.75 0C9.16421 0 9.5 0.335759 9.5 0.749939C9.5 1.16412 9.16421 1.49988 8.75 1.49988C8.33579 1.49988 8 1.16412 8 0.749939C8 0.335759 8.33579 0 8.75 0Z" fill="url(#aiLogoGradient)"/></svg>';

// Data references from AI_DATA
let customers = AI_DATA.customers;
let vehicles = AI_DATA.vehicles;
let vins = AI_DATA.vins;
const datetimes = AI_DATA.datetimes;
const promptsData = AI_DATA.slashCommands;
const dmsContextItems = AI_DATA.contextItems;
const leadsItem = AI_DATA.leadsItem;
let selectedContexts = new Set();


// --- GLOBAL SEND DISABLE STATE ---
let isListening = false;



// --- FILTER LOGIC ---


// --- RENDER PROMPTS ---
// Helper function to create empty state
function createEmptyState(title, description) {
    return `
        <div class="search-empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
            <div class="search-empty-state-title">${title}</div>
            <div class="search-empty-state-desc">${description}</div>
        </div>
    `;
}


window.filterPrompts = function (btn, filterName) {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
}

function renderPromptList(filter = "") {
    promptList.innerHTML = '';
    const filtered = promptsData.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()) || p.desc.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
        promptList.innerHTML = createEmptyState(
            'No templates found',
            filter ? `No templates match "${filter}"` : 'No prompt templates available'
        );
        return;
    }

    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'prompt-item';
        div.onclick = () => fillInput(p.text);
        div.innerHTML = `
            <div class="prompt-item-name">${p.name}</div>
            <div class="prompt-item-desc">${p.desc}</div>
        `;
        promptList.appendChild(div);
    });
}
// Initial Render
renderPromptList();


// --- MENU LOGIC ---
function renderCustomerList(filter = "") {
    customerList.innerHTML = '';
    const filtered = customers.filter(c => c.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
        customerList.innerHTML = createEmptyState(
            'No customers found',
            filter ? `No customers match "${filter}"` : 'No customers available'
        );
        return;
    }

    filtered.forEach(c => {
        const div = document.createElement('div');
        div.className = 'popup-item';
        div.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> ${c}`;
        div.onclick = () => selectItem(c);
        customerList.appendChild(div);
    });
}

function renderVehicleList(filter = "") {
    vehicleList.innerHTML = '';
    const filtered = vehicles.filter(v => v.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
        vehicleList.innerHTML = createEmptyState(
            'No vehicles found',
            filter ? `No vehicles match "${filter}"` : 'No vehicles available'
        );
        return;
    }

    filtered.forEach(v => {
        const div = document.createElement('div');
        div.className = 'popup-item';
        div.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg> ${v}`;
        div.onclick = () => selectItem(v);
        vehicleList.appendChild(div);
    });
}

function renderVinList(filter = "") {
    vinList.innerHTML = '';
    const filtered = vins.filter(item => item.vin.toLowerCase().includes(filter.toLowerCase()) || item.desc.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
        vinList.innerHTML = createEmptyState(
            'No VINs found',
            filter ? `No VINs match "${filter}"` : 'No VINs available'
        );
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'vin-item';
        div.innerHTML = `
            <div class="vin-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 19H5v-5h14v5z"/></svg></div>
            <div class="vin-details">
                <div class="vin-text">${item.vin}</div>
                <div class="vin-desc">${item.desc}</div>
            </div>
        `;
        div.onclick = () => selectItem(item.vin);
        vinList.appendChild(div);
    });
}

function renderDateTimeList(filter = "") {
    datetimeList.innerHTML = '';
    const filtered = datetimes.filter(d => d.toLowerCase().includes(filter.toLowerCase()));

    if (filtered.length === 0) {
        datetimeList.innerHTML = createEmptyState(
            'No dates found',
            filter ? `No dates match "${filter}"` : 'No dates available'
        );
        return;
    }

    filtered.forEach(d => {
        const div = document.createElement('div');
        div.className = 'popup-item';
        div.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${d}`;
        div.onclick = () => selectItem(d);
        datetimeList.appendChild(div);
    });
}

function showMenu(menu, renderFn, targetElement) {
    closeAllMenus();

    // Clear any previous search text
    const searchInput = menu.querySelector('.popup-search-input');
    if (searchInput) {
        searchInput.value = '';
    }

    if (renderFn) renderFn();

    // Reveal it
    menu.classList.add('visible');
    enhancedInputBox.classList.add('menu-open');

    currentActiveMenu = menu;

    // Focus search if it exists
    if (searchInput) {
        setTimeout(() => searchInput.focus(), 50);
    }

    // Ensure last message is visible if input expands
    setTimeout(() => {
        const scrollArea = document.querySelector('.chat-scroll-area');
        if (scrollArea) {
            scrollArea.scrollTo({
                top: scrollArea.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, 100);
}

function selectItem(text) {
    if (activePromptVar) {
        activePromptVar.innerText = text;
        activePromptVar.classList.remove('prompt-var');
        activePromptVar.classList.add('filled-var');
        closeAllMenus();
        activePromptVar = null;
        updateSendButton();

        // Auto-trigger next menu if available (Chaining)
        setTimeout(() => {
            const nextVar = mainInput.querySelector('.prompt-var');
            if (nextVar) {
                const originalValue = nextVar.getAttribute('data-var') || nextVar.innerText;
                const txt = originalValue.toLowerCase();
                activePromptVar = nextVar;

                setTimeout(() => {
                    if (txt === '[customer]') showMenu(customerMenu, () => renderCustomerList(), nextVar);
                    else if (txt === '[vehicle]') showMenu(vehicleMenu, () => renderVehicleList(), nextVar);
                    else if (txt === '[vin]') showMenu(vinMenu, () => renderVinList(), nextVar);
                    else if (txt === '[date & time]') showMenu(datetimeMenu, () => renderDateTimeList(), nextVar);
                }, 600); // 600ms
            }
        }, 150); // 150ms
    }
}

function closeAllMenus() {
    if (customerMenu) customerMenu.classList.remove('visible');
    if (vehicleMenu) vehicleMenu.classList.remove('visible');
    if (vinMenu) vinMenu.classList.remove('visible');
    if (datetimeMenu) datetimeMenu.classList.remove('visible');
    if (promptSheet) promptSheet.classList.remove('visible');

    if (contextMenu) contextMenu.classList.remove('visible');
    if (enhancedInputBox) enhancedInputBox.classList.remove('menu-open');
    currentActiveMenu = null;
}

// --- CONTEXT LOGIC (MULTI-SELECT) ---
function showContextMenu(e) {
    if (e) e.stopPropagation();
    if (contextMenu.classList.contains('visible')) {
        closeAllMenus();
    } else {
        showMenu(contextMenu, () => renderContextList());
    }
}

window.showContextMenu = showContextMenu;

function getIconForType(type) {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
}

function getIconForItem(item) {
    // If item has a favicon URL, use it with globe fallback
    if (item.favIconUrl) {
        return `<img src="${item.favIconUrl}" width="16" height="16" style="border-radius: 2px; flex-shrink: 0;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">` +
            `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>`;
    }
    // For page type items without favicon, use globe icon
    if (item.type === 'page') {
        return `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>`;
    }
    // Otherwise use the default icon for the type
    return getIconForType(item.type);
}

const iconSquare = `<svg class="context-checkbox" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;
const iconChecked = `<svg class="context-checkbox" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`;

function renderContextList(filter = "") {
    if (!contextList) return;
    contextList.innerHTML = '';
    if (contextTitle) contextTitle.innerText = "Add Context";
    if (btnContextBack) btnContextBack.style.display = 'none';

    const filterText = filter.toLowerCase();
    const allItems = [...dmsContextItems, AI_DATA.leadsItem];
    const filteredItems = allItems.filter(item => item.label.toLowerCase().includes(filterText));

    if (filteredItems.length === 0) {
        contextList.innerHTML = createEmptyState(
            'No context found',
            filter ? `No context items match "${filter}"` : 'No context items available'
        );
        return;
    }

    filteredItems.forEach(item => {
        const isSelected = selectedContexts.has(item.id);
        const div = document.createElement('div');
        div.className = `popup-item context-row-item ${isSelected ? 'selected' : ''}`;
        let rightContent = '';
        if (item.isCurrent) {
            rightContent = `<span class="muted-tag">Current Tab</span>`;
        }
        div.innerHTML = `
            <div class="popup-item-left-group">
                ${isSelected ? iconChecked : iconSquare}
                ${getIconForItem(item)}
                <span title="${item.label}">${item.label}</span>
            </div>
            <div class="popup-item-right">
                ${rightContent}
            </div>
        `;
        div.onclick = (e) => {
            e.stopPropagation();
            toggleContextItem(item);
        };
        contextList.appendChild(div);
    });

}

window.goBackContext = function () {
    history.back();
}

function toggleContextItem(item) {
    if (selectedContexts.has(item.id)) {
        selectedContexts.delete(item.id);
    } else {
        selectedContexts.add(item.id);
    }
    renderContextList();
    renderContextPills();
}

window.clearContext = function (e) {
    if (e) e.stopPropagation();
    selectedContexts.clear();
    renderContextPills();
    if (contextMenu.classList.contains('visible')) {
        renderContextList();
    }
}

function renderContextPills() {
    const pillConfigs = [
        { pill: document.getElementById('unifiedContextPill'), row: document.getElementById('contextRow') },
        { pill: document.getElementById('unifiedContextPillHome2'), row: document.getElementById('contextRowHome2') }
    ];

    const count = selectedContexts.size;

    pillConfigs.forEach(({ pill, row }) => {
        if (!pill) return;

        let displayCount = count;

        // Ensure visibility of the context row
        if (row) {
            row.style.display = 'flex';
        }

        pill.className = 'unified-pill unified-pill-compact';
        pill.onclick = null;

        if (displayCount === 0) {
            pill.classList.add('empty');
            pill.innerHTML = `
                    <div class="pill-part main">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> 
                        <span>Add Context</span>
                    </div>
                `;
            pill.onclick = (e) => { e.stopPropagation(); showContextMenu(); };
        } else {
            const allItems = [...dmsContextItems, AI_DATA.leadsItem];
            let contentHTML = '';

            if (count === 1) {
                const id = [...selectedContexts][0];
                const item = allItems.find(i => i.id === id);
                const label = item ? item.label : 'Unknown';
                const isFullscreen = panel.classList.contains('state-fullscreen');
                const maxChars = isFullscreen ? 25 : 8;
                const truncateAt = isFullscreen ? 23 : 8;
                const displayLabel = label.length > maxChars ? label.substring(0, truncateAt) + '...' : label;

                // Get icon - use favicon if available, otherwise use globe for page type
                let iconHTML = '';
                if (item && item.favIconUrl) {
                    iconHTML = `<img src="${item.favIconUrl}" width="14" height="14" style="border-radius: 2px; flex-shrink: 0;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">` +
                        `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>`;
                } else if (item && item.type === 'page') {
                    iconHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>`;
                } else {
                    iconHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
                }

                contentHTML = `
                        ${iconHTML}
                        <span title="${label}">${displayLabel}</span>
                    `;
            } else {
                contentHTML = `
                        <span>${count} Context selected</span>
                    `;
            }

            pill.innerHTML = `
                    <div class="pill-part content" data-onclick="showContextMenu(event)">
                        ${contentHTML}
                    </div>
                    <div class="pill-divider"></div>
                    <div class="pill-part close" data-onclick="clearContext(event)">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </div>
                `;
        }
    });

    if (typeof rotatePlaceholder === 'function') rotatePlaceholder();
}

// Initialize Context Pill (moved to window.onload)
// selectedContexts.add(leadsItem.id);
// renderContextPills();


function filterHistoryList(query) {
    const q = query.toLowerCase().trim();
    const items = document.querySelectorAll('.history-item');
    let visibleCount = 0;

    items.forEach(item => {
        const text = item.querySelector('.history-text').innerText.toLowerCase();
        if (text.includes(q)) {
            item.style.display = 'flex';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Handle section headers and placeholder
    const sectionHeaders = document.querySelectorAll('.history-section-header');
    const historyPlaceholder = document.getElementById('historyPlaceholder');
    const newChatBtn = document.querySelector('.history-nav-item.new-chat');

    if (q.length > 0) {
        if (newChatBtn) newChatBtn.style.display = 'none';
        sectionHeaders.forEach(t => t.style.display = 'none');

        if (visibleCount === 0) {
            if (historyPlaceholder) {
                historyPlaceholder.style.display = 'block';
                historyPlaceholder.innerHTML = `
                    <div class="tab-empty-state" style="text-align: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 12px; color: var(--color-text-muted); opacity: 0.5;">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <div style="font-weight: 600; color: var(--color-text-main);">No results found</div>
                        <div style="font-size: var(--font-sm); color: var(--color-text-muted); margin-top: 4px;">No chats match "${query}"</div>
                    </div>
                `;
            }
        } else {
            if (historyPlaceholder) historyPlaceholder.style.display = 'none';
        }
    } else {
        if (newChatBtn) newChatBtn.style.display = 'flex';
        sectionHeaders.forEach(t => t.style.display = 'block');
        if (historyPlaceholder) historyPlaceholder.style.display = 'none';
    }
}

// --- HELPER: Find History Item by Title ---
function getActiveHistoryItem() {
    if (!chatHeaderTitle) return null;
    const title = chatHeaderTitle.innerText.trim();
    const items = document.querySelectorAll('.history-text');
    for (let span of items) {
        if (span.innerText.trim() === title) {
            return span.closest('.history-item');
        }
    }
    return null;
}

// --- HELPER: Check Empty List ---
function checkEmptyHistory() {
    if (!historyPlaceholder) return;
    if (recentList.children.length === 0) {
        historyPlaceholder.classList.add('visible');
    } else {
        historyPlaceholder.classList.remove('visible');
    }
}

// --- MENU LOGIC ---
// Store original parent for restoring later
let chatDropdownOriginalParent = null;

window.showItemMenu = function (e, btn) {
    e.stopPropagation();
    currentItem = btn.closest('.history-item');

    if (currentItem && chatDropdown && headerPinText) {
        const isPinned = currentItem.classList.contains('is-pinned');
        headerPinText.innerText = isPinned ? 'Unpin Chat' : 'Pin Chat';

        // Store original parent if not already stored
        if (!chatDropdownOriginalParent) {
            chatDropdownOriginalParent = chatDropdown.parentElement;
        }

        // Move dropdown to body to escape stacking context
        document.body.appendChild(chatDropdown);

        // Position the dropdown near the clicked button using fixed positioning
        const rect = btn.getBoundingClientRect();
        chatDropdown.style.position = 'fixed';
        chatDropdown.style.top = (rect.bottom + 5) + 'px';
        chatDropdown.style.left = (rect.left - 120) + 'px';
        chatDropdown.style.zIndex = '9999'; // Ensure it's above history-sheet
        chatDropdown.classList.add('visible');
    }
};

window.openRenameModalFromHeader = function () {
    // Use currentItem if set (from kebab menu), otherwise get active item (from header menu)
    if (!currentItem) {
        currentItem = getActiveHistoryItem();
    }
    openRenameModal();
}

window.openDeleteModalFromHeader = function () {
    // Use currentItem if set (from kebab menu), otherwise get active item (from header menu)
    if (!currentItem) {
        currentItem = getActiveHistoryItem();
    }
    openDeleteModal();
}

window.togglePinFromHeader = function () {
    // Use currentItem if set (from kebab menu), otherwise get active item (from header menu)
    if (!currentItem) {
        currentItem = getActiveHistoryItem();
    }
    if (currentItem) togglePin();

    if (chatDropdown) {
        // Restore dropdown to original parent before closing
        if (chatDropdownOriginalParent && chatDropdown.parentElement !== chatDropdownOriginalParent) {
            chatDropdownOriginalParent.appendChild(chatDropdown);
            chatDropdown.style.position = '';
            chatDropdown.style.top = '';
            chatDropdown.style.left = '';
            chatDropdown.style.zIndex = '';
        }
        chatDropdown.classList.remove('visible');
    }
};

// --- HELPER: Sort History List (Pinned First) ---
function sortHistoryList() {
    const items = Array.from(recentList.querySelectorAll('.history-item'));
    const pinned = items.filter(item => item.classList.contains('is-pinned'));
    const unpinned = items.filter(item => !item.classList.contains('is-pinned'));

    // Clear the list
    recentList.innerHTML = '';

    if (pinned.length > 0) {
        const pinnedHeader = document.createElement('div');
        pinnedHeader.className = 'history-section-header';
        pinnedHeader.innerText = 'Pinned Chats';
        recentList.appendChild(pinnedHeader);
        pinned.forEach(item => recentList.appendChild(item));
    }

    const recentHeader = document.createElement('div');
    recentHeader.className = 'history-section-header';
    recentHeader.innerText = 'Recent Chats';
    if (pinned.length > 0) {
        recentHeader.style.marginTop = '0px';
    }
    recentList.appendChild(recentHeader);
    unpinned.forEach(item => recentList.appendChild(item));
}

window.togglePin = function () {
    if (!currentItem) return;
    const isPinned = currentItem.classList.contains('is-pinned');

    if (isPinned) {
        currentItem.classList.remove('is-pinned');
    } else {
        currentItem.classList.add('is-pinned');
    }
    sortHistoryList();
    // globalContextMenu.classList.remove('visible'); // COMMENTED OUT - element doesn't exist yet
    checkEmptyHistory();
    currentItem = null; // Reset currentItem after toggling pin
};

// --- CONTEXT LOGIC (MULTI-SELECT) ---


// --- PROMPT SHEET LOGIC (UPDATED TOGGLE) ---
btnSlashMenu.onclick = (e) => {
    e.stopPropagation();
    if (promptSheet.classList.contains('visible')) {
        // If already visible, close it (toggle OFF)
        closePromptSheet();
    } else {
        // If not visible, open it (toggle ON)
        showMenu(promptSheet, () => renderPromptList());
    }
}

window.closePromptSheet = function () {
    promptSheet.classList.remove('visible');
    enhancedInputBox.classList.remove('menu-open');
}

// Fill Input with Variable Styling
window.fillInput = function (text) {
    // Regex to replace [text] with styled span
    const formattedHTML = text.replace(/\[(.*?)\]/g, '<span class="prompt-var" data-var="[$1]">[$1]</span>');
    mainInput.innerHTML = formattedHTML;

    promptSheet.classList.remove('visible');
    enhancedInputBox.classList.remove('menu-open');
    mainInput.focus();

    // Move cursor to end (contenteditable quirk)
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(mainInput);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);

    updateSendButton();

    // Menu Triggers Logic (Sequential)
    setTimeout(() => {
        const vars = mainInput.querySelectorAll('.prompt-var');
        // Only trigger the FIRST one found to start the sequence
        for (const span of vars) {
            const txt = span.innerText.toLowerCase();
            activePromptVar = span;

            if (txt === '[customer]') {
                showMenu(customerMenu, () => renderCustomerList(), span);
                break;
            } else if (txt === '[vehicle]') {
                showMenu(vehicleMenu, () => renderVehicleList(), span);
                break;
            } else if (txt === '[vin]') {
                showMenu(vinMenu, () => renderVinList(), span);
                break;
            } else if (txt === '[date & time]') {
                showMenu(datetimeMenu, () => renderDateTimeList(), span);
                break;
            }
        }
    }, 750);
};


// --- ATTACHMENT LOGIC ---
window.removeFileAttachment = function (element, event) {
    if (event) event.stopPropagation();

    // Remove the attachment pill
    element.parentElement.remove();

    // Hide attachment area if empty
    if (attachmentArea && attachmentArea.children.length === 0) {
        attachmentArea.style.display = 'none';
        // Also hide context row if no contexts are selected
        if (contextRow && selectedContexts.size === 0) {
            contextRow.style.display = 'none';
        }
    }

    // Update send button state
    updateSendButton();
};

btnAttach.onclick = () => {
    fileInput.click();
};

fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        // Show area
        if (contextRow) contextRow.style.display = 'flex';
        if (attachmentArea) attachmentArea.style.display = 'flex';

        // Create Pill
        const pill = document.createElement('span');
        pill.className = 'attachment-pill';
        // pill.contentEditable is not needed since it's outside mainInput
        pill.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>${file.name}</span>
            <span class="attachment-remove" data-onclick="removeFileAttachment(this, event)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </span>
        `;

        // Append to Attachment Area
        if (attachmentArea) attachmentArea.appendChild(pill);

        // Focus Input and Update Button
        mainInput.focus();
        updateSendButton();
    }
    // Reset input
    fileInput.value = '';
};

// --- MIC LOGIC ---
let listeningInterval;
let listeningTime = 0;

btnMic.onclick = function () {
    if (isListening) return;

    // Show Overlay
    listeningOverlay.classList.add('active');
    isListening = true;
    updateSendButton();

    // Reset & Start Timer
    listeningTime = 0;
    listenTimer.innerText = "00:00";
    listeningInterval = setInterval(() => {
        listeningTime++;
        const mins = Math.floor(listeningTime / 60).toString().padStart(2, '0');
        const secs = (listeningTime % 60).toString().padStart(2, '0');
        listenTimer.innerText = `${mins}:${secs}`;
    }, 1000);

    // Auto-finish after 4 seconds (Simulator)
    this.autoStopTimeout = setTimeout(() => {
        finishListening("List high-priority test drives for today");
    }, 4000);
}

// Close = Cancel
btnListenClose.onclick = () => {
    stopListeningState();
    if (btnMic.autoStopTimeout) clearTimeout(btnMic.autoStopTimeout);
}

// Stop = Finish immediately
btnListenStop.onclick = () => {
    if (btnMic.autoStopTimeout) clearTimeout(btnMic.autoStopTimeout);
    finishListening("List high-priority test drives for today");
}

function stopListeningState() {
    isListening = false;
    clearInterval(listeningInterval);
    listeningOverlay.classList.remove('active');
    updateSendButton();
}

function finishListening(text) {
    stopListeningState();
    mainInput.innerHTML = text;

    // Ensure focus and cursor placement
    mainInput.focus();
    setTimeout(() => {
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(mainInput);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        updateSendButton();
    }, 10);
}

// --- BUTTON DISABLE LOGIC ---
function updateSendButton() {
    // STOP MODE: Always enabled with stop icon
    if (typingController) {
        btnSend.disabled = false;
        btnSend.classList.add('active');
        btnSend.innerHTML = btnStopIcon;
        return;
    }

    // INPUT/LISTENING MODE: Send icon
    btnSend.innerHTML = btnSendIcon;

    const hasText = mainInput.innerText.trim().length > 0;
    const canSend = hasText && !isListening;

    btnSend.disabled = !canSend;
    if (canSend) {
        btnSend.classList.add('active');
    } else {
        btnSend.classList.remove('active');
    }
}



// --- MODAL LOGIC ---
window.openRenameModal = function () {
    let initialName = "";
    if (currentItem) {
        initialName = currentItem.querySelector('.history-text').innerText;
    } else {
        initialName = chatTitle.innerText;
    }
    renameInput.value = initialName;
    renameModal.classList.add('visible');
    // globalContextMenu.classList.remove('visible'); // COMMENTED OUT - element doesn't exist yet

    if (chatDropdown) {
        // Restore dropdown to original parent before closing
        if (chatDropdownOriginalParent && chatDropdown.parentElement !== chatDropdownOriginalParent) {
            chatDropdownOriginalParent.appendChild(chatDropdown);
            chatDropdown.style.position = '';
            chatDropdown.style.top = '';
            chatDropdown.style.left = '';
            chatDropdown.style.zIndex = '';
        }
        chatDropdown.classList.remove('visible');
    }
    renameInput.focus();
};

window.saveRename = function () {
    if (renameInput.value.trim() !== "") {
        const newName = renameInput.value;
        if (currentItem) {
            const textSpan = currentItem.querySelector('.history-text');
            const oldName = textSpan.innerText;
            textSpan.innerText = newName;

            if (chatSessions[oldName]) {
                chatSessions[newName] = chatSessions[oldName];
                delete chatSessions[oldName];
            }
            if (activeChatTitle === oldName) activeChatTitle = newName;

            if (chatHeaderTitle.innerText === oldName || getActiveHistoryItem() === currentItem) {
                chatHeaderTitle.innerText = newName;
            }
        } else {
            chatHeaderTitle.innerText = newName;
        }
    }
    closeModals();
};

window.openDeleteModal = function () {
    deleteModal.classList.add('visible');
    // globalContextMenu.classList.remove('visible'); // COMMENTED OUT - element doesn't exist yet

    if (chatDropdown) {
        // Restore dropdown to original parent before closing
        if (chatDropdownOriginalParent && chatDropdown.parentElement !== chatDropdownOriginalParent) {
            chatDropdownOriginalParent.appendChild(chatDropdown);
            chatDropdown.style.position = '';
            chatDropdown.style.top = '';
            chatDropdown.style.left = '';
            chatDropdown.style.zIndex = '';
        }
        chatDropdown.classList.remove('visible');
    }
};

window.confirmDelete = function () {
    if (currentItem) {
        const textSpan = currentItem.querySelector('.history-text');
        const oldName = textSpan.innerText;
        if (chatSessions[oldName]) delete chatSessions[oldName];

        if (chatHeaderTitle.innerText === oldName) {
            activeChatTitle = null; // Prevent saving a deleted chat
            resetChat();
        }
        currentItem.remove();
        checkEmptyHistory();
    } else {
        activeChatTitle = null;
        resetChat();
    }
    closeModals();
};

window.closeModals = function () {
    renameModal.classList.remove('visible');
    deleteModal.classList.remove('visible');
    const voiceModal = document.getElementById('voiceModal');
    if (voiceModal) voiceModal.classList.remove('visible');
    currentItem = null; // Reset currentItem after modal closes
};

// --- LAZY LOADING HISTORY ---
// --- LAZY LOADING HISTORY ON SCROLL ---
const historyTabContent = document.querySelector('.history-tab-content');
if (historyTabContent) {
    historyTabContent.addEventListener('scroll', () => {
        // Check if near bottom
        if (historyTabContent.scrollTop + historyTabContent.clientHeight >= historyTabContent.scrollHeight - 50) {
            const lazyItems = document.querySelectorAll('.lazy-item');
            if (lazyItems.length > 0) {
                lazyItems.forEach(item => {
                    item.style.display = 'flex';
                    item.classList.remove('lazy-item');
                });
            }
        }
    });
}

// --- DRAG HANDLER ---
if (dragHandle) {
    dragHandle.onmousedown = function (e) {
        if (!panel.classList.contains('state-minimized')) return;
        isDragging = true;
        startX = e.clientX;
        const style = window.getComputedStyle(panel);
        startLeft = parseInt(style.left);
        panel.style.transition = 'none';
        document.body.style.cursor = 'grabbing';
        e.preventDefault();
    };
}

document.onmousemove = function (e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    let newLeft = startLeft + dx;
    const maxLeft = window.innerWidth - panel.offsetWidth - 20;
    if (newLeft < 20) newLeft = 20;
    if (newLeft > maxLeft) newLeft = maxLeft;
    panel.style.left = newLeft + 'px';
};

document.onmouseup = function () {
    if (isDragging) {
        isDragging = false;
        panel.style.transition = '';
        document.body.style.cursor = '';
    }
};

function scrollToBottom() {
    chatScrollArea.scrollTop = chatScrollArea.scrollHeight;
}

window.toggleThoughts = function (el) {
    // Try to find either reasoning-container or agents-steps-reasoning-container
    let container = el.closest('.reasoning-container');
    if (!container) {
        container = el.closest('.agents-steps-reasoning-container');
    }
    if (container) {
        container.classList.toggle('expanded');
    }
};






// --- INPUT EVENT HANDLING (DIV) ---
mainInput.addEventListener('input', function (e) {
    let filterTerm = "";
    const text = this.innerText.replace(/\n/g, '').trim();

    if (text === '/') {
        showMenu(promptSheet, () => renderPromptList());
    } else if (text.startsWith('/')) {
        filterTerm = text.substring(1);
        if (!currentActiveMenu) showMenu(promptSheet, () => renderPromptList(filterTerm));
        else if (currentActiveMenu === promptSheet) renderPromptList(filterTerm);
    } else if (activePromptVar) {
        filterTerm = activePromptVar.innerText.trim();
        if (currentActiveMenu === customerMenu) renderCustomerList(filterTerm);
        else if (currentActiveMenu === vehicleMenu) renderVehicleList(filterTerm);
        else if (currentActiveMenu === vinMenu) renderVinList(filterTerm);
        else if (currentActiveMenu === datetimeMenu) renderDateTimeList(filterTerm);
    } else if (currentActiveMenu === contextMenu) {
        filterTerm = text;
        renderContextList(filterTerm);
    }

    if (this.textContent.trim() === '') {
        this.innerHTML = '';
        if (currentActiveMenu) closeAllMenus();
    }

    updateSendButton();
});

// Delegate clicks for variables (both prompt-var and filled-var)
mainInput.addEventListener('click', (e) => {
    const span = e.target.closest('.prompt-var, .filled-var');
    if (span) {
        e.stopPropagation();
        const originalValue = span.getAttribute('data-var') || span.innerText;
        const txt = originalValue.toLowerCase();
        activePromptVar = span;

        if (txt === '[customer]') showMenu(customerMenu, () => renderCustomerList(), span);
        else if (txt === '[vehicle]') showMenu(vehicleMenu, () => renderVehicleList(), span);
        else if (txt === '[vin]') showMenu(vinMenu, () => renderVinList(), span);
        else if (txt === '[date & time]') showMenu(datetimeMenu, () => renderDateTimeList(), span);
    }
});

mainInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        triggerMainSend();
    }
});

// --- RENDER ACTION ICONS HELPER ---
function renderActionIcons(textWrapper, sourcesData = { count: 0 }) {
    const actionRow = document.createElement('div');
    actionRow.className = 'ai-actions-row';

    // Hide action row if there's an incomplete task card (simulation in progress)
    if (textWrapper.querySelector('.task-card:not(.completed)')) {
        actionRow.style.display = 'none';
    }

    const icons = [
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>'
    ];

    // Standard Icons
    icons.forEach(svg => {
        const btn = document.createElement('button');
        btn.className = 'ai-action-btn';
        btn.innerHTML = svg;
        actionRow.appendChild(btn);
    });

    // Compact Spacer or Margin
    const pillWrapper = document.createElement('div');
    pillWrapper.className = 'pill-wrapper';
    pillWrapper.style.display = 'flex';
    pillWrapper.style.gap = '8px';
    pillWrapper.style.marginLeft = '8px';
    actionRow.appendChild(pillWrapper);

    // Filters Pill
    const filterCount = (sourcesData && sourcesData.contextItems) ? sourcesData.contextItems.length : 0;
    if (filterCount > 0) {
        const filterPill = document.createElement('div');
        filterPill.className = 'reasoning-pill';
        filterPill.style.display = 'flex';
        filterPill.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3H2l8 9v6l4 2v-8l8-9z"></path></svg>
            <span class="pill-label">${filterCount} Filter${filterCount !== 1 ? 's' : ''} Applied</span>
            <span class="pill-count-only">${filterCount}</span>
        `;
        filterPill.onclick = (e) => toggleFilterPopover(e, filterPill, sourcesData);
        pillWrapper.appendChild(filterPill);
    }

    // Sources Pill
    if (sourcesData && sourcesData.count > 0) {
        const sourcePill = document.createElement('div');
        sourcePill.className = 'reasoning-pill';
        sourcePill.style.display = 'flex';
        sourcePill.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            <span class="pill-label">${sourcesData.count} Source${sourcesData.count > 1 ? 's' : ''}</span>
            <span class="pill-count-only">${sourcesData.count}</span>
        `;
        sourcePill.onclick = (e) => toggleSourcesPopover(e, sourcePill, sourcesData);
        pillWrapper.appendChild(sourcePill);
    }

    textWrapper.appendChild(actionRow);
    scrollToBottom();
}

// Monitor input changes to update send button state
mainInput.addEventListener('input', updateSendButton);

// Strip formatting when pasting into mainInput
mainInput.addEventListener('paste', function (e) {
    e.preventDefault();

    // Get plain text from clipboard
    const text = (e.clipboardData || window.clipboardData).getData('text/plain');

    // Insert plain text at cursor position
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    selection.deleteFromDocument();
    const range = selection.getRangeAt(0);
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);

    // Move cursor to end of inserted text
    range.setStartAfter(textNode);
    range.setEndAfter(textNode);
    selection.removeAllRanges();
    selection.addRange(range);

    // Trigger input event to update send button
    mainInput.dispatchEvent(new Event('input', { bubbles: true }));
});

// Combined Send/Stop Click Handler
btnSend.onclick = () => {
    if (typingController) {
        // STOP LOGIC
        typingController.stopped = true;

        // Reset UI for all stop scenarios
        typingController = null;
        btnSend.classList.remove('stop');
        btnSend.innerHTML = btnSendIcon;

        // Stop any thinking animations on avatars
        document.querySelectorAll('.ai-avatar.thinking').forEach(el => el.classList.remove('thinking'));

        updateSendButton();
        return;
    }

    triggerMainSend();
};

function triggerMainSend() {
    if (!mainInput) return;
    const text = mainInput.innerText.trim();
    if (text !== '') {
        mainInput.innerHTML = '';
        updateSendButton();
        if (editingMessageBubble) {
            handleEditSend(text);
        } else {
            handleSend(text);
        }
    }
}

function saveCurrentSession() {
    if (activeChatTitle && activeChat && activeChat.innerHTML.trim() !== "") {
        chatSessions[activeChatTitle] = activeChat.innerHTML;
    }
}

function showAutomationProcess(container, finalHTML, reportName = 'Hot Leads Report') {
    // 1. Render Processing Card
    container.innerHTML = `
<div class="processing-card">
    <div class="spinner-container">
         <div class="spinner-blue"></div>
    </div>
    
    <div style="flex: 1;">
        <div style="font-weight: 600; color: var(--color-text-heading); font-size: 14px;">
            Creating Automation for "${reportName}"
        </div>
        
        <div class="process-steps">
            <div class="process-step" id="proc-step-1">
                <div class="step-icon waiting"></div>
                <span class="step-text">Fetching report format</span>
            </div>
             <div class="process-step" id="proc-step-2">
                <div class="step-icon waiting"></div>
                <span class="step-text">Creating parameters</span>
            </div>
             <div class="process-step" id="proc-step-3">
                <div class="step-icon waiting"></div>
                <span class="step-text">Setting rules</span>
            </div>
             <div class="process-step" id="proc-step-4">
                <div class="step-icon waiting"></div>
                <span class="step-text">Scheduling Report</span>
            </div>
        </div>

        <div style="display: flex; gap: 16px; margin-top: 16px; font-size: 0.85rem; font-weight: 600;">
            <span style="color: #6B7280; cursor: pointer;">Stop</span>
            <span style="color: #2563EB; cursor: pointer;">Notify when done</span>
        </div>
    </div>
</div>
    `;

    // 2. Animate Steps
    const steps = [1, 2, 3, 4];
    let currentStep = 0;

    function runStep() {
        if (currentStep >= steps.length) {
            // Done -> Show Final Card
            setTimeout(() => {
                container.innerHTML = finalHTML;

                const textWrapper = container.closest('.ai-text-wrapper');
                if (textWrapper) renderActionIcons(textWrapper);

                const messageList = document.querySelector('.chat-messages');
                if (messageList) messageList.scrollTop = messageList.scrollHeight;

                // Reset Send Button
                if (typingController) {
                    typingController = null;
                    if (btnSend) {
                        btnSend.innerHTML = btnSendIcon; // Variable btnSendIcon must be available in scope
                        btnSend.classList.remove('stop');
                        btnSend.classList.remove('active');
                    }
                    updateSendButton();
                }
            }, 800);
            return;
        }

        const stepId = `proc-step-${steps[currentStep]}`;
        const stepEl = container.querySelector('#' + stepId);
        if (!stepEl) return;
        const iconEl = stepEl.querySelector('.step-icon');

        // 1. Mark current as active
        stepEl.classList.add('active');
        iconEl.classList.remove('waiting');
        iconEl.classList.add('active');

        // Simulate work
        setTimeout(() => {
            // 2. Mark as completed
            iconEl.classList.remove('active');
            iconEl.classList.add('completed');
            iconEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            stepEl.classList.remove('active');

            // Move to next
            currentStep++;
            runStep();
        }, 800);
    }

    // Start the sequence
    runStep();
}

// Main Logic Function
function getLogicKey(text) {
    // Normalize text: lowercase, replace non-breaking spaces, trim, and collapse multiple spaces
    const lower = text.toLowerCase().replace(/\u00a0/g, ' ').trim().replace(/\s+/g, ' ');






    // 0. Specific Matches (High Priority)
    if (window.CreateDealFlow && window.CreateDealFlow.matches(text)) return 'create_deal_test_drive';
    if (lower.includes('show') && lower.includes('leads') && lower.includes('aerovibe')) return 'leads_interested_aerovibe';
    if (lower.includes('last activity') && lower.includes('flora fleisher')) return 'last_activity_flora';
    if (lower.includes('flora fleisher')) return 'sarah_brief';
    if (lower.includes('white aerovibes') && (lower.includes('arriving') || lower.includes('soon'))) return 'white_aerovibes_check';
    if (lower.includes('aerovibe') || lower.includes('2023 aerovibe')) return 'vehicle_inquiry';
    if (lower.includes('stock availability') || lower.includes('inventory')) return '/inventory-check';
    if (lower.includes('nebula nimbus') || lower.includes('2023 nebula nimbus')) return 'safety_tech_query';
    if (lower.includes("trade-in") && lower.includes("worth more")) return 'tradein_objection';
    if (lower.includes('customers needing quotes') || lower.includes('quote customers')) return 'quote_customers';
    if (lower.includes('confirming') && lower.includes('appointment') && (lower.includes('draft') || lower.includes('text'))) return 'confirm_sms';

    if (lower.includes('sales opportunities') && lower.includes('automate') && lower.includes('report')) return 'automate_sales_opportunities';
    if (lower.includes('pdf') && lower.includes('8:15') && (lower.includes('no') || lower.includes('email'))) return 'automate_sales_opp_confirmed';
    if (lower.includes('9am') && lower.includes('monday') && lower.includes('email')) return 'automate_report_confirmed_simple';


    if (lower.includes('remind me') && lower.includes('trade-in') && (lower.includes('status') || lower.includes('check'))) return 'tradein_reminder';

    // 1. High-Fidelity Action: Summarize Leads
    if (lower.includes('summarize') && (lower.includes('leads') || lower.includes('hot'))) {
        return 'Summarize recent hot leads';
    }
    if (lower === 'summarize') return 'Summarize recent hot leads';



    // 2. Specialized Flow: Ryan / Deals
    if (lower.includes('ryan')) {
        const hasSpecificId = lower.includes('#891') || lower.includes('carter');
        if (lower.includes('open deal') || lower.includes('active deal')) {
            // Only go to details if there's a specific ID/Name
            if (hasSpecificId && (lower.includes('show') || lower.includes('list') || lower.includes('view') || lower.includes('details'))) {
                return 'ryan_details';
            }
            return 'ryan_clarify';
        }
    }

    // 3. Slash Commands & Utility Actions

    if (lower.includes('soft credit') || lower.includes('credit')) return '/credit-prequal';
    if (lower.includes("trade-in") && (lower.includes("worth") || lower.includes("value")) && (lower.includes("more") || lower.includes("higher"))) return 'tradein_objection';
    if (lower.includes('trade-in') || lower.includes('estimate value')) return '/trade-in-val';
    if (lower.includes('list') || lower.includes('high-priority')) return 'List high-priority test drives';
    if (lower.includes('test drive') || lower.includes('book')) return '/schedule-drive';
    if (lower.includes('generate') && lower.includes('report')) return 'appointment_report';
    if (lower.includes('equity') && lower.includes('upgrade')) return 'equity_alert';
    if (lower.includes('buy back') || lower.includes('buy-back')) return 'buy_back';
    // Removed duplicate safety check for Camry
    if ((lower.includes('focus') && lower.includes('today')) || lower.includes('what should i focus on today') || lower.includes('what should i focus')) return 'focus_today';
    if (lower.includes("aerovibe") || lower.includes("2023 aerovibe")) return 'vehicle_inquiry';
    if (lower.includes('brief me on flora')) return 'sarah_brief';
    if (lower.includes('customers needing quotes') || lower.includes('quote customers')) return 'quote_customers';

    // Fallback to original text
    return text;
}

function handleEditSend(text) {
    if (!editingMessageBubble) return;

    // 1. Update text in original bubble
    const textDiv = editingMessageBubble.querySelector('div:not(.user-message-actions):not(.bubble-attachments)');
    if (textDiv) {
        textDiv.innerText = text;
    }

    // 2. Delete all messages below the edited message
    while (editingMessageBubble.nextElementSibling) {
        editingMessageBubble.nextElementSibling.remove();
    }

    const logicKey = getLogicKey(text);

    // 3. Trigger AI Response
    startAIResponse(text, logicKey);

    // 4. Exit edit mode
    cancelEditMode();
}

function handleSend(text) {
    // Capture Attachments
    let attachmentHTML = '';
    if (attachmentArea && attachmentArea.children.length > 0) {
        const clones = Array.from(attachmentArea.children).map(child => {
            const clone = child.cloneNode(true);
            const removeBtn = clone.querySelector('.attachment-remove');
            if (removeBtn) removeBtn.remove();
            return clone.outerHTML;
        });
        attachmentHTML = clones.join('');
    }

    // Clear Attachments (KEEP Persistent ones)
    if (attachmentArea) {
        // Identify persistent items
        const persistentItems = Array.from(attachmentArea.children).filter(child => child.getAttribute('data-persistent') === 'true');

        // Clear all
        attachmentArea.innerHTML = '';

        // Re-add persistent items
        if (persistentItems.length > 0) {
            persistentItems.forEach(item => attachmentArea.appendChild(item));
            attachmentArea.style.display = 'flex';
        } else {
            attachmentArea.style.display = 'none';
        }
    }

    const logicKey = getLogicKey(text);
    startChat(text, logicKey, attachmentHTML);
}

window.handleTryAsking = function (text) {
    handleSend(text);
};

// NEW CHAT BTN HANDLER
btnHeaderNewChat.onclick = () => {
    resetChat();
};

if (btnChatMenu) {
    btnChatMenu.onclick = (e) => {
        e.stopPropagation();
        const item = getActiveHistoryItem();
        if (headerPinText) {
            if (item && item.classList) {
                const isPinned = item.classList.contains('is-pinned');
                headerPinText.innerText = isPinned ? 'Unpin Chat' : 'Pin Chat';
            } else {
                headerPinText.innerText = 'Pin Chat';
            }
        }
        if (chatDropdown) {
            // Restore dropdown to original parent if it was moved
            if (chatDropdownOriginalParent && chatDropdown.parentElement !== chatDropdownOriginalParent) {
                chatDropdownOriginalParent.appendChild(chatDropdown);
            }

            // Clear inline positioning styles to use default CSS positioning
            chatDropdown.style.position = '';
            chatDropdown.style.top = '';
            chatDropdown.style.left = '';
            chatDropdown.style.zIndex = '';
            chatDropdown.classList.toggle('visible');
        }
        // globalContextMenu.classList.remove('visible'); // COMMENTED OUT - element doesn't exist yet
    };
}

document.addEventListener('click', (e) => {
    const inputBorderWrapper = document.querySelector('.input-border-wrapper');
    if (inputBorderWrapper && !inputBorderWrapper.contains(e.target)) {
        closeAllMenus();
    }
    // COMMENTED OUT - globalContextMenu element doesn't exist yet
    // if (!globalContextMenu.contains(e.target) && !e.target.closest('.history-item-menu-btn')) {
    //     globalContextMenu.classList.remove('visible');
    // }

    // Null-safety check before using chatDropdown and btnChatMenu
    if (chatDropdown && btnChatMenu) {
        if (!chatDropdown.contains(e.target) &&
            !btnChatMenu.contains(e.target) &&
            !e.target.closest('.history-item-menu-btn')) {

            // Restore dropdown to original parent before closing
            if (chatDropdownOriginalParent && chatDropdown.parentElement !== chatDropdownOriginalParent) {
                chatDropdownOriginalParent.appendChild(chatDropdown);
                chatDropdown.style.position = '';
                chatDropdown.style.top = '';
                chatDropdown.style.left = '';
                chatDropdown.style.zIndex = '';
            }

            chatDropdown.classList.remove('visible');
        }
    }

    // Close custom selects
    if (!e.target.closest('.custom-select-container')) {
        document.querySelectorAll('.custom-select-container').forEach(c => {
            c.classList.remove('open');
        });
    }
    if (e.target === renameModal) closeModals();
    if (e.target === deleteModal) closeModals();
});

async function typeWriter(container, htmlString, controller, sourcesData = { count: 0 }) {
    // Check stop before starting typing
    if (controller.stopped) {
        container.innerHTML = '<div style="color:var(--color-text-muted); padding-top: 12px;">Response stopped by you</div>';
        // Add icons
        renderActionIcons(container.parentElement, sourcesData);

        typingController = null;
        btnSend.innerHTML = btnSendIcon;
        btnSend.classList.remove('stop');
        updateSendButton();
        return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const nodes = Array.from(doc.body.childNodes);
    container.innerHTML = '';

    async function typeNode(node, parent) {
        // Check stop inside recursion
        if (controller.stopped) return;

        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            const textNode = document.createTextNode('');
            parent.appendChild(textNode);
            for (let char of text) {
                if (controller.stopped) return; // Immediate break
                textNode.textContent += char;
                await new Promise(r => setTimeout(r, 1));
                scrollToBottom();
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const newElement = document.createElement(node.tagName);
            Array.from(node.attributes).forEach(attr => newElement.setAttribute(attr.name, attr.value));
            parent.appendChild(newElement);

            // Speed Up for Cards: If it's a complex card container, just inject full HTML
            if (node.classList.contains('compact-list-container') ||
                node.classList.contains('compact-list-item') ||
                node.classList.contains('premium-deals-grid') ||
                node.classList.contains('premium-deal-card') ||
                node.classList.contains('task-card') ||
                node.classList.contains('report-download-card')) {
                await new Promise(r => setTimeout(r, 250)); // Artificial delay for better feel
                newElement.innerHTML = node.innerHTML;
                scrollToBottom();

                // AUTO SIMULATION TRIGGER: If it's the task card, start checking steps after 0.5s
                if (node.classList.contains('task-card')) {
                    setTimeout(() => {
                        if (window.simulateTaskSteps) window.simulateTaskSteps(newElement, controller);
                    }, 500);
                }

                return;
            }

            const children = Array.from(node.childNodes);
            for (const child of children) {
                await typeNode(child, newElement);
            }
        }
    }

    for (const node of nodes) {
        if (controller.stopped) break;
        await typeNode(node, container);
    }

    // Cleanup if stopped or finished
    if (controller.stopped) {
        container.innerHTML += '<div style="color:var(--color-text-muted); padding-top: 12px;">Response stopped by you</div>';
        renderActionIcons(container.parentElement, sourcesData);
    } else {
        // Normal Finish
        renderActionIcons(container.parentElement, sourcesData);
    }

    // Report toast trigger removed


    // Reset UI state only if this task is still the active one
    if (controller === typingController) {
        // If there's an active task card simulation, don't clear the 'thinking'/'stop' state yet
        if (container.querySelector('.task-card:not(.completed)')) {
            // completion will be handled by simulateTaskSteps completion
        } else {
            typingController = null;
            btnSend.innerHTML = btnSendIcon;
            btnSend.classList.remove('stop');
            updateSendButton();
        }
    }
    scrollToBottom();
    saveCurrentSession();
}

window.completeStep = function (element) {
    if (element.classList.contains('done') || element.classList.contains('processing')) return;

    element.classList.add('processing');

    // Simulate processing
    setTimeout(() => {
        element.classList.remove('processing');
        element.classList.add('done');

        // Check if all steps are done
        const card = element.closest('.task-card');
        const totalSteps = card.querySelectorAll('.task-step').length;
        const doneSteps = card.querySelectorAll('.task-step.done').length;

        const statusBadge = card.querySelector('.task-status');
        if (statusBadge) {
            statusBadge.innerText = `${doneSteps}/${totalSteps} DONE`;
        }

        const progressBar = card.querySelector('.task-progress-bar');
        if (progressBar) {
            const percent = (doneSteps / totalSteps) * 100;
            progressBar.style.width = percent + '%';
        }

        if (doneSteps === totalSteps) {
            card.classList.add('completed');
            if (statusBadge) {
                statusBadge.innerText = 'COMPLETED';
                statusBadge.className = 'task-status status-completed';
                statusBadge.style.color = '#10B981';
            }

            // Show AI action row now that we are done
            const messageRow = card.closest('.ai-message-row');
            if (messageRow) {
                const actionRow = messageRow.querySelector('.ai-actions-row');
                if (actionRow) actionRow.style.display = 'flex';
            }

            // Append the success cards similar to report view
            const container = card.parentElement;

            const dealCard = document.createElement('div');
            dealCard.className = 'report-download-card';
            dealCard.style.marginTop = '12px';
            dealCard.innerHTML = `
                <div class="report-icon-box" style="background: rgba(0, 191, 165, 0.08);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <div class="report-info">
                    <div class="report-name" style="margin-bottom: 2px;">Deal #13455</div>
                    <div style="font-size: 0.8125rem; color: var(--color-text-muted); margin-bottom: 2px;">2023 AeroVibe</div>
                    <div class="report-meta"><a href="#" class="report-view-link">View</a></div>
                </div>
            `;
            container.appendChild(dealCard);

            const testDriveCard = document.createElement('div');
            testDriveCard.className = 'report-download-card';
            testDriveCard.style.marginTop = '12px';
            testDriveCard.innerHTML = `
                <div class="report-icon-box" style="background: rgba(59, 130, 246, 0.08);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display: block;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div class="report-info">
                    <div class="report-name" style="margin-bottom: 2px;">Test Drive Appointment</div>
                    <div style="font-size: 0.8125rem; color: var(--color-text-muted); margin-bottom: 2px;">Feb 10, 2026  |  10:00 AM to 11:00 AM</div>
                    <div class="report-meta"><a href="#" class="report-view-link">View</a></div>
                </div>
            `;
            container.appendChild(testDriveCard);

            // Final cleanup for AI response state
            if (typingController) {
                typingController = null;
                btnSend.innerHTML = btnSendIcon;
                btnSend.classList.remove('stop');
                updateSendButton();
            }
            scrollToBottom();
        }
    }, 800);
};

window.sendSMS = async function (btn) {
    if (btn.classList.contains('sending')) return;

    const originalText = btn.innerText;
    btn.classList.add('sending');
    btn.innerText = 'Sending...';

    // Simulate network delay
    await new Promise(r => setTimeout(r, 1500));

    const card = btn.closest('.sms-draft-card');
    const actionsContainer = btn.closest('.sms-draft-actions');

    if (actionsContainer) {
        const banner = document.createElement('div');
        banner.className = 'sent-success-banner';
        banner.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Text successfully sent to Flora Fleisher</span>
        `;

        // Replace the entire actions container with the banner
        actionsContainer.replaceWith(banner);

        // Make the text body no longer editable after sending
        const body = card.querySelector('.sms-draft-body');
        if (body) {
            body.contentEditable = "false";
            body.style.cursor = "default";
            body.style.background = "transparent";
            body.style.border = "none";
        }
    }
};

window.simulateTaskSteps = async function (card, controller) {
    if (!card) return;
    const steps = Array.from(card.querySelectorAll('.task-step:not(.done)'));

    for (const step of steps) {
        if (controller && controller.stopped) {
            const container = card.parentElement;
            // Add delay to match feeling of stopping
            await new Promise(r => setTimeout(r, 100));

            if (!container.querySelector('.stopped-by-you')) {
                const stopDiv = document.createElement('div');
                stopDiv.className = 'stopped-by-you';
                stopDiv.style.color = 'var(--color-text-muted)';
                stopDiv.style.paddingTop = '12px';
                stopDiv.style.fontSize = '0.85rem';
                stopDiv.innerText = 'Task execution stopped by you';
                container.appendChild(stopDiv);
                renderActionIcons(container.parentElement);
                scrollToBottom();
            }
            return;
        }
        completeStep(step);
        // Wait for the step's own animation (800ms) + longer buffer (now ~2.5s total)
        await new Promise(r => setTimeout(r, 2500));
    }
};

function loadHistoryChat(title, callback) {
    cancelEditMode();
    saveCurrentSession();

    // Highlight Active History Item & Clear Nav Items
    document.querySelectorAll('.history-nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.history-item').forEach(el => {
        el.classList.remove('active');
        const textEl = el.querySelector('.history-text');
        if (textEl && textEl.textContent.trim() === title) {
            el.classList.add('active');
        }
    });

    openMainView('activeChat');
    closeAllMenus();

    if (chatHeaderTitle) chatHeaderTitle.innerText = title;
    activeChatTitle = title;

    if (chatSessions[title]) {
        activeChat.innerHTML = chatSessions[title];
    } else {
        activeChat.innerHTML = '';

        if (btnHeaderNewChat) btnHeaderNewChat.disabled = false;
        if (btnChatMenu) btnChatMenu.disabled = false;

        const userBubble = document.createElement('div');
        userBubble.className = 'message-bubble user';
        userBubble.innerText = title;
        activeChat.appendChild(userBubble);

        const aiRow = document.createElement('div');
        aiRow.className = 'ai-message-row';
        const avatar = document.createElement('div');
        avatar.className = 'ai-avatar';
        avatar.innerHTML = AI_LOGO_SVG;
        aiRow.appendChild(avatar);

        const textWrapper = document.createElement('div');
        textWrapper.className = 'ai-text-wrapper';

        const aiContent = document.createElement('div');
        aiContent.className = 'ai-content';

        // Mock load logic (history doesn't re-animate)
        const thoughtSeconds = (Math.random() * 2 + 1).toFixed(1);
        let summaryText = `Accessed conversation history and internal records to prepare the summary for ${title} accurately.`;
        let responseHTML = `<p>Loading deal details for <strong>${title}</strong>...</p>`;

        // Check if this is the appointment report
        if (title.toLowerCase().includes('appointment performance report') || title.toLowerCase().includes('monthly appointment')) {
            summaryText = AI_DATA.thinkingSummaries.appointment_report;
            responseHTML = AI_DATA.aiResponses.appointment_report;
        }

        const thoughtHeader = `
            <div class="reasoning-container finished">
                <div class="reasoning-header" onclick="toggleThoughts(this)">
                    <span style="font-weight:500">Thought for</span>
                    <span class="timer">(${thoughtSeconds}s)</span>
                </div>
                <div class="reasoning-summary-wrapper" onclick="toggleThoughts(this)">
                    <div class="reasoning-summary">${summaryText}</div>
                    <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
        `;

        const responseBody = document.createElement('div');
        responseBody.innerHTML = responseHTML;

        aiContent.innerHTML = thoughtHeader;
        aiContent.appendChild(responseBody);

        textWrapper.appendChild(aiContent);
        aiRow.appendChild(textWrapper);
        activeChat.appendChild(aiRow);

        // Add action row with sources for history
        const mockSources = { count: 1, contextItems: ['Internal record: #882'], attachmentItems: [] };
        renderActionIcons(textWrapper, mockSources);

        saveCurrentSession();
    }

    if (!panel.classList.contains('state-fullscreen') || window.innerWidth <= 768) {
        historySheet.classList.remove('open');
    }

    scrollToBottom();
    mainInput.focus();
    if (callback) callback();
}
// --- HOME HUB LOGIC (Blank for now) ---


function startChat(userText, logicKey, attachmentHTML = '') {
    if (!logicKey) logicKey = getLogicKey(userText);

    // Transition to active chat using central view manager
    openMainView('activeChat');
    document.getElementById('activeChat').style.display = 'flex'; // Force visibility

    const activeChatEl = document.getElementById('activeChat');
    const suggestionsListEl = document.getElementById('suggestionsList');
    const chatHeaderTitleEl = document.getElementById('chatHeaderTitle');
    const btnHeaderNewChatEl = document.getElementById('btnHeaderNewChat');
    const btnChatMenuEl = document.getElementById('btnChatMenu');
    const recentListEl = document.getElementById('recentList');
    const mainInputEl = document.getElementById('mainInput');
    const btnSendEl = document.getElementById('btnSend');

    if (btnHeaderNewChatEl) btnHeaderNewChatEl.disabled = false;
    if (btnChatMenuEl) btnChatMenuEl.disabled = false;

    if (!historyAdded) {
        saveCurrentSession();
        let historyTitle = userText;
        if (historyTitle.length > 25) historyTitle = historyTitle.substring(0, 25) + "...";

        activeChatTitle = historyTitle;
        if (chatHeaderTitleEl) chatHeaderTitleEl.innerText = historyTitle;

        const newItem = document.createElement('div');
        newItem.className = 'history-item active'; // Set active highlight immediately
        newItem.onclick = () => loadHistoryChat(historyTitle);

        newItem.innerHTML = `
            <div class="history-item-left">
                <span class="history-text">${historyTitle}</span>
            </div>
            <div class="history-item-actions">
                <button class="history-item-menu-btn" data-onclick="showItemMenu(event, this)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                </button>
            </div>
        `;

        // Insert new item after pinned items
        const pinnedItems = recentListEl.querySelectorAll('.history-item.is-pinned');
        if (pinnedItems.length > 0) {
            // Insert after the last pinned item
            const lastPinned = pinnedItems[pinnedItems.length - 1];
            lastPinned.insertAdjacentElement('afterend', newItem);
        } else {
            // No pinned items, add to the beginning
            recentListEl.insertAdjacentElement('afterbegin', newItem);
        }

        historyAdded = true;
        sortHistoryList();
        checkEmptyHistory();
    }

    const userBubble = document.createElement('div');
    userBubble.className = 'message-bubble user';

    let bubbleContent = '';
    if (attachmentHTML) {
        bubbleContent += `<div class="bubble-attachments" style="display:flex; gap:4px; flex-wrap:wrap; margin-bottom:8px;">${attachmentHTML}</div>`;
    }
    // Add Text
    if (userText.includes('<span')) bubbleContent += `<div>${userText}</div>`;
    else bubbleContent += `<div>${userText}</div>`;

    // Add Actions
    bubbleContent += `
        <div class="user-message-actions">
            <button class="user-message-action-btn" title="Edit" data-onclick="enterEditMode(this)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
            </button>
            <button class="user-message-action-btn" title="Copy" data-onclick="copyMessageText(this)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </button>
        </div>
    `;

    userBubble.innerHTML = bubbleContent;

    if (activeChatEl) activeChatEl.appendChild(userBubble);
    scrollToBottom();
    saveCurrentSession();

    startAIResponse(userText, logicKey, attachmentHTML);
};

async function startAIResponse(userText, logicKey, attachmentHTML = '') {
    const activeChatEl = document.getElementById('activeChat');
    const chatHeaderTitleEl = document.getElementById('chatHeaderTitle');
    const btnSendEl = document.getElementById('btnSend');

    // --- START STREAMING STATE ---
    const jobId = 'job-' + Date.now();
    let currentChatTitle = chatHeaderTitleEl ? chatHeaderTitleEl.innerText : userText;
    typingController = { stopped: false, chatTitle: currentChatTitle, jobId: jobId };
    const currentController = typingController;
    if (btnSendEl) {
        btnSendEl.innerHTML = btnStopIcon; // Change to Stop Icon
        btnSendEl.disabled = false; // Force Enable
        btnSendEl.classList.add('active'); // Keep it colored
        btnSendEl.classList.add('stop'); // Add Stop Style
    }

    const delay = 300; // Natural transition after thinking

    const thinkingRow = document.createElement('div');
    thinkingRow.className = 'ai-message-row';
    const thinkingAvatar = document.createElement('div');
    thinkingAvatar.className = 'ai-avatar thinking';
    thinkingAvatar.innerHTML = AI_LOGO_SVG;
    thinkingRow.appendChild(thinkingAvatar);

    const textWrapper = document.createElement('div');
    textWrapper.className = 'ai-text-wrapper';

    // --- REASONING COMPONENT ---
    // Check agent action mode to determine which reasoning component to use
    const agentMode = window.agentActionMode || 'ask';
    const useAgentSteps = (agentMode === 'ask' || agentMode === 'auto');

    const reasoningContainer = document.createElement('div');
    reasoningContainer.className = useAgentSteps ? 'agents-steps-reasoning-container expanded' : 'reasoning-container expanded';

    const reasoningHeader = document.createElement('div');
    reasoningHeader.className = useAgentSteps ? 'agents-steps-reasoning-header' : 'reasoning-header';
    reasoningHeader.onclick = () => window.toggleThoughts(reasoningHeader);
    reasoningHeader.innerHTML = `
        <span class="status-text" style="font-weight:500">Thinking...</span>
        <span class="timer">0.0s</span>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    `;

    const reasoningSummaryWrapper = document.createElement('div');
    reasoningSummaryWrapper.className = useAgentSteps ? 'agents-steps-reasoning-summary-wrapper' : 'reasoning-summary-wrapper';
    reasoningSummaryWrapper.onclick = () => window.toggleThoughts(reasoningSummaryWrapper);
    reasoningSummaryWrapper.innerHTML = `
        <div class="${useAgentSteps ? 'agents-steps-reasoning-summary' : 'reasoning-summary'}"></div>
        <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    `;
    const reasoningSummary = reasoningSummaryWrapper.querySelector(useAgentSteps ? '.agents-steps-reasoning-summary' : '.reasoning-summary');

    const reasoningContent = document.createElement('div');
    reasoningContent.className = useAgentSteps ? 'agents-steps-reasoning-content' : 'reasoning-content';


    reasoningContainer.appendChild(reasoningHeader);
    reasoningContainer.appendChild(reasoningSummaryWrapper);
    reasoningContainer.appendChild(reasoningContent);
    textWrapper.appendChild(reasoningContainer);
    thinkingRow.appendChild(textWrapper);
    thinkingRow.setAttribute('data-job-id', jobId);

    if (activeChatEl) activeChatEl.appendChild(thinkingRow);
    scrollToBottom();

    // Timer Logic
    const timerEl = reasoningHeader.querySelector('.timer');
    const startTime = Date.now();
    const timerInterval = setInterval(() => {
        const liveTimer = document.querySelector(`[data-job-id="${jobId}"] .timer`);
        const timeStr = ((Date.now() - startTime) / 1000).toFixed(1) + 's';
        if (liveTimer) liveTimer.textContent = timeStr;
    }, 100);
    currentController.timerId = timerInterval;

    let thinkingSteps = AI_DATA.thinkingSteps[logicKey] || AI_DATA.thinkingSteps.default;

    // Dynamic Response Processing
    let responseHTML = AI_DATA.aiResponses[logicKey] || `<p>I'm not sure how to handle specific request "${userText}". Here is a standard response.</p>`;

    if (responseHTML.includes('{{YESTERDAY}}')) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yStr = yesterday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        responseHTML = responseHTML.replace(/{{YESTERDAY}}/g, yStr);
    }
    if (responseHTML.includes('{{TOMORROW}}')) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tStr = tomorrow.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        responseHTML = responseHTML.replace(/{{TOMORROW}}/g, tStr);
    }

    const isLongReport = (logicKey === 'appointment_report');

    // Helper function to get icon SVG for action type
    const getActionIcon = (type) => {
        const icons = {
            'click': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 9h.01M9 12h.01M9 15h.01M12 9h.01M12 12h.01M12 15h.01M15 9h.01M15 12h.01M15 15h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path></svg>',
            'typing': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M9 16h6"></path></svg>',
            'scrolling': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>',
            'reading': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
            'screenshot': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>',
            'wait': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
            'opening-tab': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
        };
        return icons[type] || icons['click'];
    };

    // Helper function to create an action step
    const createActionStep = async (text, type = 'click', parentElement) => {
        const actionStep = document.createElement('div');
        actionStep.className = `action-step type-${type} active`;

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'action-step-icon';
        iconWrapper.innerHTML = getActionIcon(type);

        const textSpan = document.createElement('span');
        textSpan.className = 'action-step-text';

        const cursor = document.createElement('span');
        cursor.className = 'cursor';

        actionStep.appendChild(iconWrapper);
        actionStep.appendChild(textSpan);
        textSpan.appendChild(cursor);
        parentElement.appendChild(actionStep);

        parentElement.scrollTop = parentElement.scrollHeight;
        scrollToBottom();

        // Type out the text
        const charDelay = 15;
        for (let j = 0; j < text.length; j++) {
            if (currentController.stopped) break;
            textSpan.insertBefore(document.createTextNode(text[j]), cursor);
            await new Promise(r => setTimeout(r, charDelay));
        }
        cursor.remove();
        actionStep.classList.remove('active');
        actionStep.classList.add('completed');

        await new Promise(r => setTimeout(r, 300));
    };

    const runSteps = async () => {
        const totalSteps = thinkingSteps.length;
        for (let i = 0; i < totalSteps; i++) {
            if (currentController.stopped) break;

            const stepRow = document.createElement('div');
            stepRow.className = 'step active';

            const stepTextSpan = document.createElement('span');
            stepTextSpan.className = 'step-text';

            const cursor = document.createElement('span');
            cursor.className = 'cursor';

            stepRow.appendChild(stepTextSpan);
            stepTextSpan.appendChild(cursor);
            reasoningContent.appendChild(stepRow);

            reasoningContent.scrollTop = reasoningContent.scrollHeight;
            scrollToBottom();

            const txt = thinkingSteps[i];
            // Adjust typing speed for long report
            const charDelay = isLongReport ? 40 : 20;
            for (let j = 0; j < txt.length; j++) {
                if (currentController.stopped) break;
                stepTextSpan.insertBefore(document.createTextNode(txt[j]), cursor);
                await new Promise(r => setTimeout(r, charDelay));
            }
            cursor.remove();
            stepRow.classList.remove('active');
            stepRow.classList.add('completed');

            // If using agent steps mode, add action steps after each reasoning step
            if (useAgentSteps) {
                await new Promise(r => setTimeout(r, 400));

                // All 7 action types - ensuring each type appears at least once
                const allActionTypes = [
                    { text: 'Clicking on the search button', type: 'click' },
                    { text: 'Typing "user authentication" in search field', type: 'typing' },
                    { text: 'Scrolling to view results', type: 'scrolling' },
                    { text: 'Reading file: auth.js', type: 'reading' },
                    { text: 'Taking screenshot of current state', type: 'screenshot' },
                    { text: 'Waiting for 2 seconds', type: 'wait' },
                    { text: 'Opening new tab with documentation', type: 'opening-tab' }
                ];

                // Additional varied actions for randomness
                const extraActions = [
                    { text: 'Clicking on navigation menu', type: 'click' },
                    { text: 'Typing query in input field', type: 'typing' },
                    { text: 'Scrolling down the page', type: 'scrolling' },
                    { text: 'Reading component code', type: 'reading' },
                    { text: 'Capturing visual state', type: 'screenshot' },
                    { text: 'Waiting for page load', type: 'wait' },
                    { text: 'Opening settings panel', type: 'opening-tab' }
                ];

                // Combine all actions
                const allActions = [...allActionTypes, ...extraActions];

                // Strategy: Distribute all 7 action types across all reasoning steps
                // Calculate how many actions to show per step to ensure all 7 types appear
                let actionsToShow = [];

                // Always include the action type corresponding to this step index (cycling through all 7)
                const guaranteedActionIndex = i % 7;
                actionsToShow.push(allActionTypes[guaranteedActionIndex]);

                // Add 1-2 more random actions for variety
                const numExtra = Math.floor(Math.random() * 2) + 1;
                for (let e = 0; e < numExtra; e++) {
                    const randomAction = allActions[Math.floor(Math.random() * allActions.length)];
                    actionsToShow.push(randomAction);
                }

                // Create the action steps
                for (const action of actionsToShow) {
                    if (currentController.stopped) break;
                    await createActionStep(action.text, action.type, reasoningContent);
                }
            }

            if (i < totalSteps - 1) {
                // Ensure total thinking takes ~60s for long reports
                // total time (60000ms) / totalSteps (9) = ~6666ms per step
                const typingTime = txt.length * charDelay;
                const stepRest = isLongReport ? Math.max(6666 - typingTime, 1000) : 600;
                await new Promise(r => setTimeout(r, stepRest));
            }
        }
    };

    // Requirement: show card after 8 seconds if taking longer
    if (isLongReport) {
        setTimeout(() => {
            if (currentController.stopped) return;
            if (!reasoningContainer.classList.contains('finished')) {
                const delayCard = document.createElement('div');
                delayCard.className = 'ai-delay-card';
                delayCard.innerHTML = `
                    <div class="delay-card-content">
                        <div class="delay-icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <div class="delay-card-body">
                            <div class="delay-title">Generating this report is taking more time than usual.</div>
                            <div class="delay-desc">We'll notify you as soon as the report is generated.</div>
                        </div>
                    </div>
                    <button class="notify-btn" data-onclick="handleNotifyReport(this)">Notify me when ready</button>
                `;
                textWrapper.appendChild(delayCard);
                scrollToBottom();
            }
        }, 8000);
    }

    // --- AURORA GLOW EFFECT ---
    // Activate aurora effect when AI starts thinking
    if (panel) panel.classList.add('aurora-active');
    // const mobileHandle = document.getElementById('mobileSheetHandle'); // COMMENTED OUT - element doesn't exist
    // if (mobileHandle) mobileHandle.classList.add('aurora-active');


    // Start the sequence
    runSteps().then(() => {
        // Once steps complete, or if stopped
        clearInterval(timerInterval);
        const finalTime = ((Date.now() - startTime) / 1000).toFixed(1);

        // stale-safe updates
        const updateThinkingPart = (selector, action) => {
            const items = [thinkingRow.querySelector(selector)];
            const live = document.querySelector(`[data-job-id="${jobId}"] ${selector}`);
            if (live && !items.includes(live)) items.push(live);
            items.forEach(el => el && action(el));
        };

        updateThinkingPart('.timer', el => el.textContent = `${finalTime}s`);
        updateThinkingPart('.status-text', el => el.textContent = 'Thought for');

        // Update summary for both reasoning types
        const summarySelector = useAgentSteps ? '.agents-steps-reasoning-summary' : '.reasoning-summary';
        updateThinkingPart(summarySelector, el => {
            el.textContent = AI_DATA.thinkingSummaries[logicKey] || AI_DATA.thinkingSummaries.default;
        });

        // Step 1: Collapse steps first
        const containerSelector = useAgentSteps ? '.agents-steps-reasoning-container' : '.reasoning-container';
        updateThinkingPart(containerSelector, el => el.classList.remove('expanded'));

        // Step 2: After collapse, show summary and start typing AI response
        setTimeout(async () => {
            updateThinkingPart(containerSelector, el => el.classList.add('finished'));

            // Small delay before starting the main response
            setTimeout(async () => {
                // Remove aurora effect only if this task is still active
                if (currentController === typingController) {
                    if (panel) panel.classList.remove('aurora-active');
                    // if (mobileHandle) mobileHandle.classList.remove('aurora-active'); // DELETED - element doesn't exist
                }

                // Always stop the blink for THIS specific response row
                thinkingAvatar.classList.remove('thinking');

                // If stopped during thinking phase
                if (currentController.stopped) {
                    textWrapper.innerHTML = '<div class="ai-content"><div style="color:var(--color-text-muted); padding-top: 0px;">Response stopped by you</div></div>';

                    // Reset UI only if this task is active
                    if (currentController === typingController) {
                        typingController = null;
                        if (btnSendEl) {
                            btnSendEl.innerHTML = btnSendIcon;
                            btnSendEl.classList.remove('stop');
                        }
                        updateSendButton();
                    }
                    return;
                }

                // Replace delay card if it exists for the report flow
                const existingDelayCard = textWrapper.querySelector('.ai-delay-card');
                if (existingDelayCard) {
                    existingDelayCard.remove();
                }

                const aiContent = document.createElement('div');
                aiContent.className = 'ai-content';

                // Calculate Sources (Context + Attachments)
                let attachmentItems = [];
                if (attachmentHTML) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = attachmentHTML;
                    tempDiv.querySelectorAll('.attachment-pill span').forEach(span => {
                        attachmentItems.push(span.innerText);
                    });
                }

                let contextLabels = [];
                if (typeof selectedContexts !== 'undefined' && selectedContexts.size > 0) {
                    const allItems = [...dmsContextItems, AI_DATA.leadsItem];
                    selectedContexts.forEach(id => {
                        const item = allItems.find(i => i.id === id);
                        if (item) contextLabels.push(item.label);
                    });
                }

                let totalSources = attachmentItems.length + contextLabels.length;

                // Inject Relevant context if none present for specific queries
                if (totalSources === 0) {
                    if (logicKey === 'List high-priority test drives') {
                        contextLabels = ['Appointment Calendar', 'Today\'s Schedule'];
                    } else if (logicKey === 'appointment_report') {
                        contextLabels = ['Dealership Performance Records', 'Dec 2025'];
                    } else if (logicKey === 'focus_today') {
                        contextLabels = ['CRM Feed', 'Outlook Calendar'];
                    } else if (logicKey === 'Summarize recent hot leads') {
                        contextLabels = ['Lead Management System', 'High Intent Signals'];
                    }
                    totalSources = contextLabels.length;
                }

                const sourcesData = { count: totalSources, contextItems: contextLabels, attachmentItems: attachmentItems };

                // Content Body for Typewriter
                const contentBody = document.createElement('div');
                aiContent.appendChild(contentBody);
                textWrapper.appendChild(aiContent);

                let responseHTML = AI_DATA.aiResponses[logicKey] || AI_DATA.aiResponses[userText] || AI_DATA.aiResponsesDefault.replace('{logicKey}', logicKey);

                if (logicKey === 'automate_report_confirmed_simple') {
                    showAutomationProcess(contentBody, responseHTML, 'Monthly Appointment Report');
                    return;
                }

                if (logicKey === 'automate_sales_opp_confirmed') {
                    showAutomationProcess(contentBody, responseHTML, 'Sales Opportunities Report');
                    // Update sources logic same as above
                    if (sourcesData.count > 0 || sourcesData.attachmentItems.length > 0) {
                        // optional source pill logic
                    }
                    return;
                }

                if (['vehicle_inquiry', 'ryan_details', 'safety_tech_query', 'List high-priority test drives', '/schedule-drive', 'equity_alert', 'buy_back', '/inventory-check'].includes(logicKey)) {
                    try {
                        const res = await fetch('marketing-data-formats.csv');
                        if (res.ok) {
                            const text = await res.text();
                            const lines = text.split('\n');

                            if (logicKey === 'vehicle_inquiry') {
                                const match = lines.find(l => l.includes('2023 AeroVibe'));
                                if (match) {
                                    const parts = match.split(',');
                                    const vName = parts[2];
                                    const vVin = parts[3];
                                    responseHTML = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here are the matching vehicles found in inventory:</p><div class="compact-list-container" style="max-height: 400px; overflow-y: auto;"><div class="compact-list-item" style="align-items: flex-start; padding: 16px;"><div class="vehicle-icon-wrapper avatar-circle" style="background: #F3F4F6; margin-top: 4px; color: #4B5563; flex-shrink: 0;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h12"></path></svg></div><div class="item-main-info" style="flex: 1; margin-right: 16px; min-width: 0;"><div class="item-name-row" style="margin-bottom: 4px;"><span class="item-name">${vName}</span></div><div class="item-sub-row" style="color: #6B7280; font-size: 0.8rem;"><span style="text-decoration: underline;">${vVin}</span> <span style="margin: 0 6px;">•</span> 12 days on lot <span style="margin: 0 6px;">•</span> White</div></div><div class="item-right-info" style="text-align: right; font-size: 0.85rem; color: #6B7280; flex-shrink: 0;"><div style="margin-bottom: 4px;">Available</div><div style="font-weight: 600; color: #111827; font-size: 14px;">$42,500</div></div></div></div>`;
                                }


                            } else if (logicKey === 'ryan_details') {
                                const v1 = lines.find(l => l.startsWith('Vehicle,1,'))?.split(',') || [];
                                const v2 = lines.find(l => l.startsWith('Vehicle,2,'))?.split(',') || [];
                                const s1 = lines.find(l => l.startsWith('Employee,1,'))?.split(',') || [];
                                const s2 = lines.find(l => l.startsWith('Employee,2,'))?.split(',') || [];

                                responseHTML = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">I've found 2 open deals for <strong>Ryan Carter</strong>:</p><div class="premium-deals-grid"><div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 4px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"><div style="padding: 12px;"><div style="display: flex; gap: 12px; align-items: center; margin-bottom: 8px;"><div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(0, 191, 165, 0.08); color: var(--color-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h12"></path></svg></div><div><div style="font-weight: 700; color: var(--color-text-heading); font-size: 0.85rem; line-height: 1.2; padding-bottom:4px;">#DEAL-4521</div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">${v1[2] || '2023 Nebula Nimbus'}</div></div></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 4px; padding: 8px 0; border-bottom: 1px solid #f1f3f4;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Salesperson</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">${s1[2] || 'William Florez'}</div></div><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Type</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Finance</div></div><div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Status</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Quote</div></div></div><div style="display: flex; justify-content: space-between; align-items: center;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; padding-top:4px;">Last Updated</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Dec 21, 2025</div></div><button class="open-btn-compact" style="font-size: 14px; padding: 0 20px; border-radius: 2px; font-weight: 600; height: 32px;">View</button></div></div></div><div class="premium-deal-card" style="border: 1px solid var(--color-border-muted); border-radius: 4px; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"><div style="padding: 12px;"><div style="display: flex; gap: 12px; align-items: center; margin-bottom: 8px;"><div style="width: 32px; height: 32px; border-radius: 8px; background: rgba(0, 0, 0, 0.04); color: #5f6368; display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M5 17h12"></path></svg></div><div><div style="font-weight: 700; color: var(--color-text-heading); font-size: 0.85rem; line-height: 1.2; padding-bottom:4px;">#DEAL-9920</div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">${v2[2] || '2022 Lunar Blitz'}</div></div></div><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 4px; padding: 8px 0; border-bottom: 1px solid #f1f3f4;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Salesperson</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">${s2[2] || 'Celine Morris'}</div></div><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">Type</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Lease</div></div><div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Status</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Booked</div></div></div><div style="display: flex; justify-content: space-between; align-items: center;"><div><div style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; padding-top:4px;">Last Updated</div><div style="font-size: 0.8rem; font-weight: 500; color: var(--color-text-main);">Dec 12, 2025</div></div><button class="open-btn-compact" style="font-size: 14px; padding: 0 20px; border-radius: 2px; font-weight: 600; height: 32px;">View</button></div></div></div></div>`;
                            } else if (logicKey === 'safety_tech_query') {
                                const match = lines.find(l => l.includes('Nebula Nimbus'));
                                if (match) {
                                    const parts = match.split(',');
                                    const vName = parts[2];
                                    const vVin = parts[3];
                                    responseHTML = `<p>I've analyzed the <strong>safety and tech features</strong> for the ${vName} as requested.</p><p>I have also updated the <strong>Appointment Notes</strong> for Ryan Carter with the following details:</p><ul><li><strong>Safety:</strong> Proactive Collision Mitigation, Matrix LED Lighting, Blind Spot Surveillance.</li><li><strong>Tech:</strong> Nebula Connect 2.0, Holographic Display, Smart Air Filtration (VIN: ${vVin}).</li></ul>`;
                                }
                            } else if (logicKey === 'List high-priority test drives') {
                                const vehicles = [];
                                const customers = [];
                                lines.forEach(l => {
                                    if (l.startsWith('Vehicle,')) {
                                        const parts = l.split(',');
                                        if (parts[2]) vehicles.push(parts[2].trim());
                                    }
                                    if (l.startsWith('Customer,')) {
                                        const parts = l.split(',');
                                        if (parts[2]) customers.push(parts[2].trim());
                                    }
                                });

                                const times = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'];
                                let listItems = '';

                                for (let i = 0; i < 5; i++) {
                                    const time = times[i];
                                    const cust = customers.length > 0 ? customers[i % customers.length] : 'Unknown Customer';
                                    const veh = vehicles.length > 0 ? vehicles[i % vehicles.length] : 'Unknown Vehicle';

                                    listItems += `
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%;">
                                    <div class="avatar-circle" style="width: 36px; height: 36px; background: #EEF2FF; color: #4F46E5; flex-shrink: 0; align-items: center; justify-content: center; border-radius: 50%;">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                            <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">${time} • ${cust}</div>
                                        </div>
                                        <div style="font-size: 0.8rem; color: #6B7280;">${veh}</div>
                                    </div>
                                </div>
                            </div>`;
                                }

                                responseHTML = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Here are today's <strong>high-priority test drives</strong> (Jan 27, 2026) sorted by time:</p>
                        <div class="compact-list-container">
                            ${listItems}
                        </div>`;
                            } else if (logicKey === '/schedule-drive') {
                                let customer = 'Tony Stark';
                                let vehicle = '2024 Toyota Camry SE';
                                let dateTime = 'Tomorrow • 10:00 AM';

                                const match = userText.match(/for\s+(.+?)\s+on\s+(.+?)\s+for\s+(.+)/i);
                                if (match) {
                                    customer = match[1].trim();
                                    vehicle = match[2].trim();
                                    dateTime = match[3].trim();
                                }

                                responseHTML = `<p style="margin-bottom: 16px; font-size: 0.875rem; color: var(--color-text-main);">Appointment successfully scheduled! Here are the details:</p>
<div class="task-card completed" style="padding: 0; background: #fff; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03); overflow: hidden; margin-bottom: 8px;">
    <div style="background: #F0FDF4; padding: 16px; border-bottom: 1px solid #DCFCE7; display: flex; align-items: center; gap: 12px;">
<div style="width: 32px; height: 32px; border-radius: 50%; background: #10B981; color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div>
    <div style="font-weight: 700; color: #065F46; font-size: 0.95rem; line-height: 1.2;">Test Drive Confirmed</div>
    <div style="font-size: 0.75rem; color: #059669; font-weight: 500;">SMS notification sent to customer</div>
</div>
    </div>
    <div style="padding: 16px;">
<div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
    <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F3F4F6;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em;">Customer</span>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-heading);">${customer}</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F3F4F6;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em;">Vehicle</span>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-heading);">${vehicle}</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.025em;">Date & Time</span>
        <span style="font-size: 0.9rem; font-weight: 600; color: var(--color-text-heading);">${dateTime}</span>
    </div>
</div>
<button class="open-btn-compact" style="width: 100%; margin-top: 16px; height: 36px; font-size: 0.85rem; font-weight: 600; border-radius: 6px;">View in Calendar</button>
    </div>
</div>`;
                            } else if (logicKey === 'equity_alert') {
                                const custMatch = lines.find(l => l.includes('Curtis Gable'));
                                const vehMatch = lines.find(l => l.startsWith('Vehicle,1,'));
                                const cName = custMatch ? custMatch.split(',')[2] : 'Curtis Gable';
                                const vName = vehMatch ? vehMatch.split(',')[2] : '2023 Nebula Nimbus';
                                responseHTML = `<p>Based on current market data, <strong>${cName}'s ${vName}</strong> has a trade value of $18,400. With a remaining payoff of $14,200, he has <strong>$4,200 in positive equity</strong>.</p><p>I recommend an offer for a 2024 Nebula Premier with a monthly payment within $25 of his current obligation.</p>`;
                            } else if (logicKey === 'buy_back') {
                                const custMatch = lines.find(l => l.includes('Tony Smehrik'));
                                const vehMatch = lines.find(l => l.startsWith('Vehicle,2,'));
                                const cName = custMatch ? custMatch.split(',')[2] : 'Tony Smehrik';
                                const vName = vehMatch ? vehMatch.split(',')[2] : '2022 Lunar Blitz';
                                responseHTML = `<p>We currently have <strong>zero</strong> pre-owned ${vName}s in stock, and market demand is at an all-time high. I recommend a premium buy-back offer for <strong>${cName}</strong>.</p><p><strong>Step 1:</strong> Offer 102% of KBB Value.<br><strong>Step 2:</strong> Provide a $1,000 loyalty credit towards a new inventory unit.</p>`;
                            } else if (logicKey === '/inventory-check') {
                                responseHTML = `<p>We have 3 units matching that description at the Main Lot, and 1 in transit (ETA: 5 days).</p>`;
                            }
                        }
                    } catch (e) {
                        console.error('CSV Fetch Error', e);
                    }
                }

                if (logicKey === 'tradein_reminder') {
                    responseHTML = `
                                    <div style="font-weight: 500; color: var(--color-text-main); font-size: 14px; margin-bottom: 8px;">All set! Task has been created:</div>
                                    <div class="task-card completed" style="padding: 12px; background: #fff; border: 1px solid var(--color-border-muted); border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); display: flex; flex-direction: row; align-items: stretch; gap: 12px; max-width: 380px;">
                                        <div style="width: 48px; background: #EBF4FF; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="9" y="3" width="6" height="6" rx="1"></rect>
                                                <rect x="3" y="15" width="6" height="6" rx="1"></rect>
                                                <rect x="15" y="15" width="6" height="6" rx="1"></rect>
                                                <path d="M12 9v3"></path>
                                                <path d="M6 15v-3h12v3"></path>
                                            </svg>
                                        </div>
                                        <div style="flex: 1; display: flex; flex-direction: column;">
                                            <div style="font-weight: 400; color: var(--color-text-heading); font-size: 14px; margin-bottom: 4px;">Check Flora's Trade-In Status</div>
                                            <div style="display: flex; align-items: center; gap: 8px; color: var(--color-text-muted); font-size: 13px; margin-bottom: 4px;">
                                                <div style="display: flex; align-items: center; gap: 4px;">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    <span>Tomorrow</span>
                                                </div>
                                                <span style="color: #D1D5DB;">•</span>
                                                <div style="display: flex; align-items: center; gap: 4px;">
                                                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                    <span>10:00AM</span>
                                                </div>
                                            </div>
                                            <div style="display: flex; gap: 12px; margin-top: 4px;">
                                                <div style="font-weight: 600; color: #3B82F6; font-size: 14px; cursor: pointer;">Edit</div>
                                                <div style="font-weight: 600; color: #3B82F6; font-size: 14px; cursor: pointer;">Delete</div>
                                            </div>
                                        </div>
                                    </div>
                                `;
                }

                if (logicKey === 'white_aerovibes_check') {
                    responseHTML = `
                        <div style="font-weight: 500; color: var(--color-text-main); font-size: 14px; margin-bottom: 8px;">I found 3 White AeroVibes that match your criteria:</div>
                        <div class="compact-list-container" style="background: #fff; border: 1px solid var(--color-border-muted); border-radius: 8px; overflow: hidden;">
                            <!-- Row 1 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default; border-bottom: 1px solid var(--color-border-muted);">
                                <div style="display: flex; width: 100%; align-items: center;">
                                    <div class="avatar-circle" style="width: 40px; height: 40px; background: #F3F4F6; color: #4B5563; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-right: 12px;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                            <div>
                                                 <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">2023 AeroVibe SR5</div>
                                                 <div style="font-size: 0.8rem; color: #6B7280; margin-top: 2px;">
                                                     <span style="text-decoration: underline; color: #4B5563;">Stock 1234</span> • Arriving Tuesday • White
                                                 </div>
                                            </div>
                                            <div style="text-align: right;">
                                                <div style="font-size: 0.8rem; color: #6B7280; font-weight: 500;">Available</div>
                                                <div style="font-size: 16px; font-weight: 600; color: #111827;">$42,500</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Row 2 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default; border-bottom: 1px solid var(--color-border-muted);">
                                <div style="display: flex; width: 100%; align-items: center;">
                                     <div class="avatar-circle" style="width: 40px; height: 40px; background: #F3F4F6; color: #4B5563; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-right: 12px;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                            <div>
                                                 <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">2024 AeroVibe TRD</div>
                                                 <div style="font-size: 0.8rem; color: #6B7280; margin-top: 2px;">
                                                     <span style="text-decoration: underline; color: #4B5563;">Stock 5748</span> • Arriving on 10 Feb • White
                                                 </div>
                                            </div>
                                            <div style="text-align: right;">
                                                <div style="font-size: 0.8rem; color: #6B7280; font-weight: 500;">Pending</div>
                                                <div style="font-size: 16px; font-weight: 600; color: #111827;">$45,200</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Row 3 -->
                            <div class="compact-list-item" style="padding: 12px; cursor: default;">
                                <div style="display: flex; width: 100%; align-items: center;">
                                     <div class="avatar-circle" style="width: 40px; height: 40px; background: #F3F4F6; color: #4B5563; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-right: 12px;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle></svg>
                                    </div>
                                    <div style="flex: 1; min-width: 0;">
                                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                                            <div>
                                                 <div style="font-size: 0.9rem; font-weight: 600; color: #111827;">2024 AeroVibe Limited</div>
                                                 <div style="font-size: 0.8rem; color: #6B7280; margin-top: 2px;">
                                                     <span style="text-decoration: underline; color: #4B5563;">Stock: 4875</span> • Arriving 12 Feb • White
                                                 </div>
                                            </div>
                                            <div style="text-align: right;">
                                                <div style="font-size: 0.8rem; color: #6B7280; font-weight: 500;">Arriving</div>
                                                <div style="font-size: 16px; font-weight: 600; color: #111827;">$46,900</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }


                if (responseHTML.includes('{{YESTERDAY}}')) {
                    const d = new Date();
                    d.setDate(d.getDate() - 1);
                    const options = { year: 'numeric', month: 'short', day: 'numeric' };
                    responseHTML = responseHTML.replace(/{{YESTERDAY}}/g, d.toLocaleDateString('en-US', options));
                }

                if (responseHTML.includes('{{TOMORROW}}')) {
                    const d = new Date();
                    d.setDate(d.getDate() + 1);
                    const options = { year: 'numeric', month: 'short', day: 'numeric' };
                    responseHTML = responseHTML.replace(/{{TOMORROW}}/g, d.toLocaleDateString('en-US', options));
                }



                if (logicKey === 'tradein_reminder' || logicKey === 'white_aerovibes_check') {
                    sourcesData.count = 0;
                    sourcesData.contextItems = [];
                    sourcesData.attachmentItems = [];
                }

                await typeWriter(contentBody, responseHTML, currentController, sourcesData);

                // If this was the safety/tech query, update the appointment notes in lead detail
                if (logicKey === 'safety_tech_query') {
                    const notesContainer = document.getElementById('todoNotesContainer');
                    if (notesContainer) {
                        // Clean up userText for display
                        let displayText = userText.replace(/,\s*add this to appointment notes/i, '.')
                            .replace(/\s*add this to appointment notes/i, '.')
                            .replace(/\.\.+$/, '.'); // Avoid double dots

                        notesContainer.innerHTML = `
                            <div class="todo-notes-box">
                                <div class="todo-notes-header">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    Appointment Notes
                                </div>
                                <div class="todo-notes-query">${displayText}</div>
                                <div class="todo-notes-details">
                                    <div><strong>Safety:</strong> Toyota Safety Sense™ 3.0 (TSS 3.0), Proactive Driving Assist, Blind Spot Monitor.</div>
                                    <div><strong>Tech:</strong> 12.3-in. Toyota Audio Multimedia, Wireless Apple CarPlay® & Android Auto™, Digital Key.</div>
                                </div>
                                <div class="todo-notes-ai-row">
                                    ${AI_LOGO_SVG}
                                    Insights powered by T-ONE
                                </div>
                            </div>
                        `;
                    }
                }

                // Sync with session storage if backgrounded or if we switched chats
                const syncTitle = currentController.chatTitle;
                if (syncTitle && chatSessions[syncTitle]) {
                    const temp = document.createElement('div');
                    temp.innerHTML = chatSessions[syncTitle];
                    const placeholder = temp.querySelector(`[data-job-id="${currentController.jobId}"]`);
                    if (placeholder) {
                        placeholder.innerHTML = thinkingRow.innerHTML;
                        chatSessions[syncTitle] = temp.innerHTML;
                    }
                }

                // If user is currently looking at this chat (even if not active task), update live DOM
                if (activeChatTitle === syncTitle) {
                    const livePlaceholder = document.querySelector(`[data-job-id="${currentController.jobId}"]`);
                    if (livePlaceholder && livePlaceholder !== thinkingRow) {
                        livePlaceholder.innerHTML = thinkingRow.innerHTML;
                    }
                }

            }, 300); // Step 3: Response delay after summary appears
        }, 600); // Timing for step 2 (summary reveal) after step 1 (collapse) completes
    });
};

window.selectRyan = function (id) {
    const details = AI_DATA.ryanMap[id] || "Ryan Carter (#891)";
    const text = "Show open deals for " + details;
    startChat(text, "ryan_details");
};

window.showQuoteCustomers = function () {
    startChat("Show customers needing quotes", "quote_customers");
};

window.showFollowUpContext = function (name) {
    const contextRow = document.getElementById('contextRow');
    const attachmentArea = document.getElementById('attachmentArea');

    // Create pill matching context chip UI
    const pill = document.createElement('span');
    pill.className = 'attachment-pill';
    pill.setAttribute('data-persistent', 'true');
    pill.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 10 20 15 15 20"></polyline>
            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
        </svg>
        <span>${name}</span>
        <span class="attachment-remove" data-onclick="this.parentElement.remove(); if(attachmentArea && attachmentArea.children.length === 0) { if(attachmentArea) attachmentArea.style.display='none'; } event.stopPropagation();">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </span>
    `;

    // Insert into attachmentArea
    if (attachmentArea) {
        attachmentArea.style.display = 'flex';
        attachmentArea.appendChild(pill);
    }
    if (contextRow) contextRow.style.display = 'flex';

    // Focus input
    document.getElementById('mainInput').focus();
};

window.openReportDynamic = function () {
    const fallbackFileUrl = 'file:///Users/sougata/Projects/design-experimentations/report.html';

    // Try to get the current active tab's URL to determine the environment
    if (typeof chrome !== 'undefined' && chrome.tabs) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let reportUrl = fallbackFileUrl;

            if (tabs && tabs[0] && tabs[0].url) {
                try {
                    const currentUrl = new URL(tabs[0].url);
                    // If the current tab is on localhost or a real website (http/https)
                    if (currentUrl.protocol === 'http:' || currentUrl.protocol === 'https:') {
                        reportUrl = `${currentUrl.origin}/report.html`;
                    }
                } catch (e) {
                    // If URL parsing fails, use fallback
                    console.log('URL parsing failed, using fallback');
                }
            }

            // Open the report in a new tab
            chrome.tabs.create({ url: reportUrl });
        });
    } else {
        // Fallback if chrome.tabs is not available
        window.open(fallbackFileUrl, '_blank');
    }
};

window.handleNotifyReport = function (btn) {
    const card = btn.closest('.ai-delay-card');
    if (!card) return;

    card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; color: #444F5C; font-size: 0.875rem; font-weight: 500;">
            <div style="width: 24px; height: 24px; border-radius: 50%; background: #4285f4; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" style="width:12px;height:12px;">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            We'll notify when the report is generated.
        </div>
    `;
    card.style.setProperty('padding', '14px 16px', 'important');
    card.style.setProperty('background', 'rgba(0, 191, 165, 0.04)', 'important');
    card.style.setProperty('border-color', '#4285f4', 'important');

    // Also collapse the thinking section to give it a "backgrounded" feel
    const aiRow = btn.closest('.ai-message-row');
    if (aiRow) {
        const reasoningContainer = aiRow.querySelector('.reasoning-container');
        if (reasoningContainer) {
            reasoningContainer.classList.remove('expanded');
            const statusText = reasoningContainer.querySelector('.status-text');
            if (statusText) statusText.textContent = 'Generating in background...';
        }
    }

    // Save the session state so it persists if we switch chats
    saveCurrentSession();

    // Background the task
    typingController = null;

    // Reset UI for new messages
    if (btnSend) {
        btnSend.innerHTML = btnSendIcon;
        btnSend.classList.remove('stop');
    }
    if (panel) panel.classList.remove('aurora-active');
    // const mobileHandle = document.getElementById('mobileSheetHandle'); // COMMENTED OUT - element doesn't exist
    // if (mobileHandle) mobileHandle.classList.remove('aurora-active');

    // Find thinking avatar and stop blink
    const allAvatars = document.querySelectorAll('.ai-avatar');
    const latestAvatar = allAvatars[allAvatars.length - 1];
    if (latestAvatar) latestAvatar.classList.remove('thinking');

    if (mainInput) {
        mainInput.focus();
    }
    updateSendButton();
};

// --- FILTER MODAL LOGIC ---
window.toggleFilterPopover = function (event, element, data) {
    event.stopPropagation();

    const modal = document.getElementById('filterModal');
    const content = document.getElementById('filterModalContent');

    if (!modal || !content) return;

    // Use contextItems from data, or fallback to mock
    let filters = [];
    if (data && data.contextItems) {
        filters = data.contextItems.map(item => ({ label: 'Context', value: item }));
    } else {
        filters = AI_DATA.mockFilters;
    }

    // Update Header Count
    const titleEl = modal.querySelector('.detail-modal-title');
    if (titleEl) {
        const icon = titleEl.querySelector('svg');
        if (icon) {
            titleEl.innerHTML = '';
            titleEl.appendChild(icon);
            titleEl.appendChild(document.createTextNode(` Applied Filters (${filters.length})`));
        }
    }

    // Populate modal content
    let html = '';
    filters.forEach((item, index) => {
        const isLast = index === filters.length - 1;
        const borderStyle = isLast ? '' : 'border-bottom: 1px solid var(--color-border); padding-bottom: 12px; margin-bottom: 12px;';

        html += `
        <div style="${borderStyle}">
            <div style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 4px;">${item.label}</div>
            <div style="font-size: 0.95rem; font-weight: 500; color: var(--color-text-heading);">${item.value}</div>
        </div>
        `;
    });

    content.innerHTML = html;

    // Show modal
    modal.classList.add('visible');
};

window.closeFilterModal = function () {
    const modal = document.getElementById('filterModal');
    if (modal) modal.classList.remove('visible');
};

// Close modal on overlay click
document.addEventListener('click', function (e) {
    const filterModal = document.getElementById('filterModal');
    if (filterModal && e.target === filterModal) {
        closeFilterModal();
    }
});

window.resetChat = function () {
    cancelEditMode();
    saveCurrentSession();
    // Clear all highlights
    document.querySelectorAll('.history-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.history-nav-item').forEach(el => {
        el.classList.remove('active');
        // Highlight "New Chat" Specifically
        if (el.innerText.trim() === "New Chat") el.classList.add('active');
    });

    openMainView('emptyState');
    activeChat.innerHTML = '';
    activeChatTitle = null;
    if (contextRow) renderContextPills();
    if (chatHeaderTitle) chatHeaderTitle.innerText = "New Chat";

    if (btnHeaderNewChat) btnHeaderNewChat.disabled = true;
    if (btnChatMenu) btnChatMenu.disabled = true;

    historyAdded = false;
    mainInput.innerHTML = '';
    updateSendButton();

    // Clear attachment area
    const attachmentArea = document.getElementById('attachmentArea');
    if (attachmentArea) {
        attachmentArea.innerHTML = '';
        attachmentArea.style.display = 'none';
    }

    // STOP ANY STREAMING
    if (typingController) {
        typingController.stopped = true;
        if (typingController.timerId) clearTimeout(typingController.timerId);
        typingController = null;
    }
    btnSend.innerHTML = btnSendIcon;
    btnSend.classList.remove('stop');

    // Remove aurora glow
    if (panel) panel.classList.remove('aurora-active');
    // const mobileHandle = document.getElementById('mobileSheetHandle'); // COMMENTED OUT - element doesn't exist
    // if (mobileHandle) mobileHandle.classList.remove('aurora-active');

    if (panel && !panel.classList.contains('state-closed')) {
        mainInput.focus();
    }
};

const roleGuidelines = AI_DATA.roleGuidelines;

// --- CUSTOM SELECT LOGIC ---
window.toggleCustomSelect = function (event, containerId) {
    event.stopPropagation();
    const container = document.getElementById(containerId);
    const isOpen = container.classList.contains('open');

    // Close all other custom selects
    document.querySelectorAll('.custom-select-container').forEach(c => {
        if (c.id !== containerId) c.classList.remove('open');
    });

    container.classList.toggle('open');
};

window.handleCustomSelect = function (containerId, value, text) {
    const container = document.getElementById(containerId);
    const valueSpan = container.querySelector('.custom-select-value');
    const hiddenSelect = container.querySelector('select');

    if (valueSpan) valueSpan.innerText = text;
    if (hiddenSelect) {
        hiddenSelect.value = value;
        // Trigger change event on hidden select
        hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }

    container.classList.remove('open');
};


// View Management
window.openMainView = function (viewId) {
    if (viewId !== 'activeChat') {
        cancelEditMode();
    }
    const views = ['initialView', 'activeChat'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    const finalViewId = (viewId === 'emptyState') ? 'initialView' : viewId;
    const targetEl = document.getElementById(finalViewId);
    if (targetEl) targetEl.style.display = 'flex';



    // Update Sidebar Highlights
    const navItems = document.querySelectorAll('.history-nav-item');
    navItems.forEach(item => {
        const text = item.innerText.trim();
        const viewMapping = {
            "New Chat": "emptyState"
        };
        if (viewMapping[text] === viewId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // If navigating to a non-chat view, clear history item highlights
    if (viewId !== 'activeChat') {
        document.querySelectorAll('.history-item').forEach(el => el.classList.remove('active'));
    }

    const suggest = document.getElementById('suggestionsList');
    const footer = document.querySelector('.footer-container');
    const chatHeaderTitle = document.getElementById('chatHeaderTitle');
    const btnHeaderNewChat = document.getElementById('btnHeaderNewChat');
    const btnHeaderRefresh = document.getElementById('btnHeaderRefresh');
    const chatMenuContainer = document.getElementById('chatMenuContainer');
    const btnShowHistory = document.getElementById('btnShowHistory');
    const disclaimer = document.querySelector('.disclaimer-text');

    const isDashView = [].includes(viewId);

    // Default State
    if (btnHeaderNewChat) {
        btnHeaderNewChat.style.display = 'flex';
        btnHeaderNewChat.innerHTML = HEADER_NEW_CHAT_ICON;
    }
    if (chatMenuContainer) chatMenuContainer.style.display = 'flex';
    if (btnHeaderRefresh) btnHeaderRefresh.style.display = 'none';

    if (viewId === 'activeChat') {
        if (btnShowHistory) {
            btnShowHistory.onclick = () => {
                toggleHistory(true);
            };
        }
    } else {
        if (suggest) suggest.style.display = (viewId === 'emptyState') ? 'flex' : 'none';
        if (footer) footer.style.display = 'block';
        if (disclaimer) disclaimer.style.display = 'block';
        if (viewId === 'emptyState') {
            if (chatHeaderTitle) chatHeaderTitle.innerText = "New Chat";
            if (btnHeaderNewChat) btnHeaderNewChat.disabled = true;
            if (btnChatMenu) btnChatMenu.disabled = true;
        }

        // Restore default back button behavior
        if (btnShowHistory) {
            btnShowHistory.onclick = () => toggleHistory();
        }
    }

    const target = document.getElementById(viewId);
    if (target) {
        target.style.display = 'flex';

    }

    toggleHistory(false);
    if (typeof renderContextPills === 'function') renderContextPills();
    if (typeof rotatePlaceholder === 'function') rotatePlaceholder();
}

// FAB Button for New Chat - DELETED (element doesn't exist)
// if (historyNewChatBtn) {
//     historyNewChatBtn.onclick = () => {
//         resetChat();
//         toggleHistory(false);
//     };
// }

// Tab Switching Function
window.switchHistoryTab = function (tabName) {
    let mainViewId;
    switch (tabName) {

        case 'chats':
            // Just close history for chats or show empty state if no active chat
            mainViewId = 'emptyState';
            break;
    }

    if (mainViewId) openMainView(mainViewId);
};

mainContent.onclick = () => {
    if (emptyState.style.display !== 'none') {
        if (contextRow) renderContextPills();
        suggestionsList.style.display = 'flex';
    }
};

// Window Controls - DELETED all window control buttons (elements don't exist)
document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('btnMinimize').onclick = () => setState('minimized'); // DELETED
    // document.getElementById('btnRestoreMin').onclick = () => setState('docked'); // DELETED
    // document.getElementById('btnCloseMin').onclick = () => { // DELETED
    //     // Disable transition for instant close from minimized state
    //     panel.style.transition = 'none';
    //     setState('closed');
    //     // Re-enable transition after a brief delay
    //     setTimeout(() => {
    //         panel.style.transition = '';
    //     }, 50);
    // };
    // document.getElementById('btnFull').onclick = () => setState('fullscreen'); // DELETED
    // document.getElementById('btnDock').onclick = () => setState('docked'); // DELETED
    // document.getElementById('btnClose').onclick = () => setState('closed'); // DELETED

    // Open the panel by default - DISABLED to prevent automatic state-docked class
    // setState('docked');

    // Initial mobile check
    if (mobileFab && window.innerWidth <= 768 && panel.classList.contains('state-closed')) {
        mobileFab.classList.add('visible');
    }

    // Handle resize for FAB visibility
    window.addEventListener('resize', () => {
        if (mobileFab) {
            if (window.innerWidth <= 768 && panel.classList.contains('state-closed')) {
                mobileFab.classList.add('visible');
            } else if (window.innerWidth > 768) {
                mobileFab.classList.remove('visible');
            }
        }
    });
});

/* --- SOURCES MODAL LOGIC --- */
window.toggleSourcesPopover = function (event, element, data) {
    event.stopPropagation();

    const modal = document.getElementById('sourcesModal');
    const content = document.getElementById('sourcesModalContent');

    if (!modal || !content) return;

    // Prepare Data
    const allSources = [];
    if (data.contextItems) data.contextItems.forEach(i => allSources.push({ title: i, type: 'Record' }));
    if (data.attachmentItems) data.attachmentItems.forEach(i => allSources.push({ title: i, type: 'File' }));

    // Update Header Count
    const titleEl = modal.querySelector('.detail-modal-title');
    if (titleEl) {
        // Preserve existing icon if present
        const icon = titleEl.querySelector('svg');
        if (icon) {
            titleEl.innerHTML = '';
            titleEl.appendChild(icon);
            titleEl.appendChild(document.createTextNode(` Sources(${allSources.length
                })`));
        }
    }

    // Build Content
    let html = '';

    if (allSources.length === 0) {
        html = '<div style="color:var(--color-text-muted); font-size:0.9rem; text-align:center; padding:20px;">No sources found.</div>';
    } else {
        allSources.forEach((source, index) => {
            const isLast = index === allSources.length - 1;
            const borderStyle = isLast ? '' : 'border-bottom: 1px solid var(--color-border); padding-bottom: 12px; margin-bottom: 12px;';

            // Generate Fake URL
            const slug = source.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const url = source.type === 'File'
                ? `https://crm.example.com/storage/attachments/${slug}.pdf`
                : `https://crm.example.com/records/${slug}`;

            html += `
            <div style="${borderStyle}; display: flex; gap: 8px;">
                <div style="font-weight: 500; color: var(--color-text-heading); min-width: 14px; font-size: 0.95rem;">
                    ${index + 1}.
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="font-weight: 600; font-size: 0.95rem; color: var(--color-text-heading); margin-bottom: 2px;">${source.title}</div>
                    <div style="font-size: 0.85rem; color: var(--color-text-muted); text-decoration: underline; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;" title="${url}">
                        ${url}
                    </div>
                </div>
            </div>
            `;
        });
    }

    content.innerHTML = html;

    // Show modal
    modal.classList.add('visible');
};

window.closeSourcesModal = function () {
    const modal = document.getElementById('sourcesModal');
    if (modal) modal.classList.remove('visible');
};

// Close modal on overlay click
document.addEventListener('click', function (e) {
    const sourcesModal = document.getElementById('sourcesModal');
    if (sourcesModal && e.target === sourcesModal) {
        closeSourcesModal();
    }
});

window.closeVoiceModal = function () {
    const modal = document.getElementById('voiceModal');
    if (modal) modal.classList.remove('visible');
};

// Close modal on overlay click
document.addEventListener('click', function (e) {
    const voiceModal = document.getElementById('voiceModal');
    if (voiceModal && e.target === voiceModal) {
        closeVoiceModal();
    }
});


// Populate Dummy History
function populateDummyHistory() {
    const list = document.getElementById('recentList');
    if (!list) return;
    list.innerHTML = ''; // Start Fresh
    const titles = AI_DATA.historyTitles;

    titles.forEach((title, i) => {
        const item = document.createElement('div');
        item.className = 'history-item';
        if (i < 2) {
            item.classList.add('is-pinned');
        }

        let pinHtml = '';
        // Icon removed by user request

        item.innerHTML = `
            <div class="history-item-left">
                ${pinHtml}
                <span class="history-text">${title}</span>
            </div>
            <div class="history-item-actions">
                <button class="history-item-menu-btn" data-onclick="showItemMenu(event, this)">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                </button>
            </div>
        `;

        item.onclick = (e) => {
            if (e.target.closest('.history-item-menu-btn')) return;
            loadHistoryChat(title);
            toggleHistory(false);
        };
        list.appendChild(item);
    });
    sortHistoryList(); // Apply sections
}

document.addEventListener('DOMContentLoaded', populateDummyHistory);
// Global State Logic
function setState(state) {
    const wasFullscreen = panel.classList.contains('state-fullscreen');

    // Logic for CLOSING FULLSCREEN smoothly: Slide out as full width, then reset.
    if (wasFullscreen && state !== 'fullscreen') {
        // force 100% width so it slides out completely instead of snapping to 400px then sliding
        panel.style.width = '100%';

        // Clean classes
        panel.classList.remove('state-docked', 'state-minimized', 'state-fullscreen', 'state-closed');

        // Add new state class
        if (state === 'closed') panel.classList.add('state-closed');
        else if (state === 'docked') panel.classList.add('state-docked');
        else if (state === 'minimized') panel.classList.add('state-minimized');

        // Provide a cleanup after transition
        const cleanup = () => {
            panel.style.width = ''; // revert to CSS default (400px usually)
            panel.removeEventListener('transitionend', cleanup);
        };
        panel.addEventListener('transitionend', cleanup, { once: true });
        // Fallback in case transition fails or is interrupted
        setTimeout(cleanup, 1000);

    } else {
        // Normal class cleaning
        panel.classList.remove('state-docked', 'state-minimized', 'state-fullscreen', 'state-closed');
    }

    if (mainContent) mainContent.classList.remove('pushed-by-dock', 'full-hidden');
    // if (btnFull) btnFull.style.display = 'flex'; // DELETED - Element doesn't exist
    // if (btnDock) btnDock.style.display = 'none'; // DELETED - Element doesn't exist

    // Ensure history overlay is gone if we change main state
    if (historySheet && historySheet.classList.contains('open')) {
        toggleHistory(false);
    }


    if (state === 'closed') {
        if (navAiToggle) navAiToggle.classList.remove('active');
        panel.classList.add('state-closed');
        panel.style.left = '';

        // Show FAB if on mobile
        if (mobileFab && window.innerWidth <= 768) {
            mobileFab.classList.add('visible');
        }
    } else {
        if (navAiToggle) navAiToggle.classList.add('active');
        if (mobileFab) mobileFab.classList.remove('visible'); // Hide FAB when chat opens
    }

    if (state === 'docked') {
        panel.classList.add('state-docked');
        if (window.innerWidth >= 1600) {
            mainContent.classList.add('pushed-by-dock');
        }
        panel.style.left = '';
        mainInput.focus();
    } else if (state === 'minimized') {
        panel.classList.add('state-minimized');
        if (!panel.style.left) panel.style.left = '100px';
    } else if (state === 'fullscreen') {
        // OPENING FULLSCREEN LOGIC for Smooth Slide
        // We want to snap to 100% width instantly (offscreen) then slide in.
        // Prevent transition on width property.

        panel.style.transition = 'none'; // Disable all transitions momentarily
        panel.classList.add('state-fullscreen');

        // Force transform to -100% to ensure it starts fully offscreen at new 100% width
        panel.style.transform = 'translateX(-100%)';

        // Force reflow/repaint
        void panel.offsetHeight;

        // Re-enable CSS transitions
        panel.style.transition = '';
        // Clear inline transform so CSS rule (translateX(0)) takes effect and animates
        panel.style.transform = '';

        mainContent.classList.add('full-hidden');
        // if (btnFull) btnFull.style.display = 'none'; // DELETED - Element doesn't exist
        // if (btnDock) btnDock.style.display = 'flex'; // DELETED - Element doesn't exist
        panel.style.left = '';
        mainInput.focus();
    }
}

if (navAiToggle) {
    navAiToggle.onclick = () => {
        if (panel.classList.contains('state-closed')) setState('docked');
        else setState('closed');
    };
}

// AI Logo toggle handlers
const aiLogo1 = document.getElementById('aiLogo1');
const aiLogo2 = document.getElementById('aiLogo2');

if (aiLogo1) {
    aiLogo1.onclick = () => {
        if (panel.classList.contains('state-closed')) setState('docked');
        else setState('closed');
    };
}

if (aiLogo2) {
    aiLogo2.onclick = () => {
        if (panel.classList.contains('state-closed')) setState('docked');
        else setState('closed');
    };
}

// Mobile FAB Toggle Function
window.toggleMobileChat = function () {
    setState('fullscreen'); // Open as full screen on mobile
};

if (historyOverlay) {
    historyOverlay.onclick = () => toggleHistory(false);
}

// Search UI Logic - DELETED (historySearchBtn and historySearchWrapper elements don't exist)
// if (historySearchBtn && historySearchWrapper && historySearchInput) {
//     historySearchBtn.addEventListener('click', (e) => {
//         e.stopPropagation();
//         if (historySearchWrapper.classList.contains('active')) {
//             historySearchWrapper.classList.remove('active');
//             historySearchInput.value = '';
//             filterHistoryList('');
//         } else {
//             historySearchWrapper.classList.add('active');
//             historySearchInput.focus();
//         }
//     });
//
//     // (Duplicate handler removed)
//
//     historySearchInput.addEventListener('input', (e) => {
//         filterHistoryList(e.target.value);
//     });
//
//     document.addEventListener('click', (e) => {
//         if (historySearchWrapper.classList.contains('active') && !historySearchWrapper.contains(e.target)) {
//             historySearchWrapper.classList.remove('active');
//             historySearchInput.value = '';
//             filterHistoryList('');
//         }
//     });
// }




// Placeholder logic has been moved to the top of script to avoid TDZ issues.

function startPlaceholderRotation() {
    if (placeholderInterval) clearInterval(placeholderInterval);
    placeholderInterval = setInterval(rotatePlaceholder, 3000);
}

// Mobile Bottom Sheet Resize Logic - DELETED (mobileSheetHandle element doesn't exist)
// const mobileSheetHandle = document.getElementById('mobileSheetHandle');
// let isResizingSheet = false;
// let startY, startHeight;
//
// mobileSheetHandle.addEventListener('mousedown', startResizing);
// mobileSheetHandle.addEventListener('touchstart', startResizing, { passive: false });
//
// function startResizing(e) {
//     if (window.innerWidth > 768) return;
//     isResizingSheet = true;
//     startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
//     startHeight = chatPanel.offsetHeight;
//     chatPanel.classList.add('resizing');
//
//     document.addEventListener('mousemove', handleResizing);
//     document.addEventListener('touchmove', handleResizing, { passive: false });
//     document.addEventListener('mouseup', stopResizing);
//     document.addEventListener('touchend', stopResizing);
//
//     if (e.cancelable) e.preventDefault();
// }
//
// function handleResizing(e) {
//     if (!isResizingSheet) return;
//     const currentY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
//     const dy = startY - currentY;
//     const newHeight = startHeight + dy;
//
//     // Min height 480px, Max 95vh
//     if (newHeight >= 480 && newHeight <= window.innerHeight * 0.95) {
//         chatPanel.style.height = newHeight + 'px';
//     }
//
//     if (e.cancelable) e.preventDefault();
// }
//
// function stopResizing() {
//     isResizingSheet = false;
//     chatPanel.classList.remove('resizing');
//     document.removeEventListener('mousemove', handleResizing);
//     document.removeEventListener('touchmove', handleResizing);
//     document.removeEventListener('mouseup', stopResizing);
//     document.removeEventListener('touchend', stopResizing);
// }



// Load directly into a new conversation
// Initialize Application
async function initApp() {
    console.log('initApp starting.');
    try {
        // Dynamic Data Load from CSV
        try {
            const res = await fetch('marketing-data-formats.csv');
            if (res.ok) {
                const csvText = await res.text();
                const lines = csvText.split('\n');
                const newVehicles = [];
                const newVins = [];
                const newCustomers = [];

                lines.forEach(line => {
                    if (line.startsWith('Vehicle,')) {
                        const parts = line.split(',');
                        if (parts.length >= 4) {
                            const vName = parts[2].trim();
                            const vVin = parts[3].trim();
                            if (vName) newVehicles.push(vName);
                            if (vVin) newVins.push({ vin: vVin, desc: vName });
                        }
                    } else if (line.startsWith('Customer,')) {
                        const parts = line.split(',');
                        if (parts.length >= 3) {
                            const cName = parts[2].trim();
                            if (cName) newCustomers.push(cName);
                        }
                    }
                });

                if (newVehicles.length > 0) {
                    AI_DATA.vehicles = newVehicles;
                    vehicles = newVehicles;
                }
                if (newVins.length > 0) {
                    AI_DATA.vins = newVins;
                    vins = newVins;
                }
                if (newCustomers.length > 0) {
                    AI_DATA.customers = newCustomers;
                    customers = newCustomers;
                }
            }
        } catch (csvError) {
            console.error('Error loading dynamic CSV data:', csvError);
        }

        if (typeof leadsItem !== 'undefined') {
            selectedContexts.add(leadsItem.id);
        } else if (typeof AI_DATA !== 'undefined' && AI_DATA.leadsItem) {
            selectedContexts.add(AI_DATA.leadsItem.id);
        }

        if (typeof renderContextPills === 'function') renderContextPills();
        if (typeof resetChat === 'function') resetChat();
        if (typeof startPlaceholderRotation === 'function') startPlaceholderRotation();
        if (typeof sortHistoryList === 'function') sortHistoryList();

        // Handle URL params
        console.log('initApp calling handleUrlParams.');
        if (typeof window.handleUrlParams === 'function') {
            window.handleUrlParams();
        }
    } catch (e) {
        console.error('Error during initApp:', e);
        // Try to handle params anyway if it's a non-fatal error
        if (typeof window.handleUrlParams === 'function') window.handleUrlParams();
    }
}



window.handleUrlParams = function () {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');
    const open = params.get('open');

    console.log('handleUrlParams executing. action:', action, 'open:', open);

    // Explicit Open Request
    if (open === 'true') {
        if (typeof setState === 'function') setState('docked');
        return true;
    }

    if (action) {
        const actionMap = {
            'summarize_leads': 'Summarize recent hot leads',
            'summarize_hot_leads': 'Summarize recent hot leads',
            'focus_today': 'What should I focus on today',
            'test_drive': 'List high-priority test drives',
            'inventory_audit': 'Check stock availability for [Vehicle] across all lots',
            'inventory_check': 'Check stock availability for [Vehicle] across all lots',
            'trade_value': 'Estimate trade-in value for [VIN] assuming good condition',
            'trade_in_val': 'Estimate trade-in value for [VIN] assuming good condition',
            'credit_check': 'Run a soft credit qualification check for [Customer] to determine eligibility',
            'credit_prequal': 'Run a soft credit qualification check for [Customer] to determine eligibility',
            'equity_alert': 'Analyze Curtis Gables equity for Upgrade Opportunity',
            'buy_back': 'Plan buy back strategy for Tony Smehrik Lunar Blitz',

            'ryan_deals': "Show ryan's open deals",
            'appointment_report': 'Generate appointment performance report',
            'schedule_drive': 'Book a test drive appointment for [Customer] on [Vehicle] for [Date & Time]',
            'vehicle_inquiry': 'Check inventory for 2023 AeroVibe under $45k',
            'tradein_objection': 'Spoke to the customer. She thinks her trade-in is worth $5k more than our appraisal. How do I handle this?',
            'quote_customers': 'Show me customers needing quotes',
            'safety_tech_query': 'Tell me about safety and tech features in 2023 Nebula Nimbus',
            'sarah_brief': 'Brief me on Flora Fleisher',
            'create_deal_test_drive': 'Create a deal for Flora on the AeroVibe and schedule a test drive for Tuesday at 10 AM.',
            'confirm_sms': 'Draft a text to her confirming the appointment',
            'lead_closure_probability': 'How likely is this lead to close in the next 30 days?',
            'best_next_step': 'Suggest the best next step and when I should follow up.',
            'deal_pricing_comparison': 'Compare this vehicle\'s pricing and incentives to similar deals we\'ve closed recently.',
            'leads_interested_aerovibe': 'Show leads interested in Aerovibe',
            'last_activity_flora': 'What was the last activity with Flora Fleisher?',
            'white_aerovibes_check': 'Any white Aerovibes arriving soon?',
            'tradein_reminder': 'Remind me to check trade-in status',
            'automate_sales_opportunities': 'Automate sales opportunities report for me everyday ',
            'automate_sales_opp_confirmed': '1. pdf 2. 8:15am 3. no 4. Email it to me',
            'automate_report_confirmed_simple': '1. Every Monday 9am 2. Email it to me'
        };

        const prompt = actionMap[action] || decodeURIComponent(action);
        if (prompt) {
            console.log('Initiating prompt:', prompt);

            // Force state and view
            if (typeof setState === 'function') setState('docked');
            if (typeof openMainView === 'function') openMainView('activeChat');

            const mainInput = document.getElementById('mainInput');
            const chatScrollArea = document.querySelector('.chat-scroll-area');

            // Check if it's a template (starts with / or has variables)
            const isTemplate = prompt.startsWith('/') || prompt.includes('[');

            if (isTemplate) {
                // Use fillInput to handle variable styling and menu triggers
                if (typeof fillInput === 'function') {
                    fillInput(prompt);
                } else if (mainInput) {
                    mainInput.innerHTML = prompt;
                }
                return true;
            }

            if (mainInput) {
                mainInput.innerHTML = prompt;
                mainInput.focus();
                mainInput.dispatchEvent(new Event('input', { bubbles: true }));
            }

            // Delay to ensure startChat and its internal logic are fully available
            setTimeout(() => {
                if (typeof startChat === 'function') {
                    console.log('Calling startChat automatically for:', prompt);
                    startChat(prompt);

                    // Clear input after sending
                    if (mainInput) {
                        mainInput.innerHTML = '';
                        if (typeof updateSendButton === 'function') updateSendButton();
                    }

                    if (chatScrollArea) {
                        chatScrollArea.scrollTo({ top: chatScrollArea.scrollHeight, behavior: 'smooth' });
                    }
                } else {
                    console.error('startChat is not a function!');
                }
            }, 500);

            return true;
        }
    }
    return false;
}

// Run on load or immediately if already loaded
if (document.readyState === 'complete') {
    initApp();
} else {
    window.addEventListener('load', initApp);
}

// --- Message Actions Helpers ---
window.copyMessageText = function (btn) {
    const bubble = btn.closest('.message-bubble');
    if (!bubble) return;
    // Clone to avoid removing actual elements
    const clone = bubble.cloneNode(true);
    const actions = clone.querySelector('.user-message-actions');
    if (actions) actions.remove();
    const attachments = clone.querySelector('.bubble-attachments');
    if (attachments) attachments.remove();

    const text = clone.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
        const originalIcon = btn.innerHTML;
        btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        btn.style.color = 'var(--color-primary)';
        setTimeout(() => {
            btn.innerHTML = originalIcon;
            btn.style.color = '';
        }, 2000);
    });
};

window.showQuoteCustomers = function () {
    startChat('Brief me on Flora Fleisher');
};


window.enterEditMode = function (btn) {
    const bubble = btn.closest('.message-bubble');
    if (!bubble) return;

    cancelEditMode(); // Clear any existing edit mode first

    editingMessageBubble = bubble;
    bubble.classList.add('is-editing');
    const clone = bubble.cloneNode(true);
    const actions = clone.querySelector('.user-message-actions');
    if (actions) actions.remove();
    const attachments = clone.querySelector('.bubble-attachments');
    if (attachments) attachments.remove();

    const text = clone.innerText.trim();
    const mainInput = document.getElementById('mainInput');
    const editingBanner = document.getElementById('editingBanner');

    if (mainInput) {
        mainInput.innerText = text; // For contenteditable
        mainInput.focus();
        updateSendButton();
        // Trigger input event to resize if needed (though basic div doesn't auto-resize height strictly like textarea, CSS handles it)

        // Show Banner
        if (editingBanner) editingBanner.classList.add('visible');

        // Move cursor to end
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(mainInput);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    }
};

// Report toast logic removed


// Update Placeholder for updating chat panel suggestions based on search query
window.updateChatPanelSuggestions = function (query) {
    console.log('Updating chat panel suggestions for:', query);
    // In a real implementation, this would fetch or generate relevant suggestions
};

// Home Hero Input logic

// Event delegation for inline onclick handlers (CSP compliance)
document.addEventListener('DOMContentLoaded', function () {
    // Helper function to parse and execute onclick handlers
    function executeOnclick(onclickStr, element, event) {
        // Handle multiple statements separated by semicolons
        const statements = onclickStr.split(';').map(s => s.trim()).filter(s => s);

        for (const statement of statements) {
            // Match function calls: functionName(args)
            const match = statement.match(/^(\w+)\((.*)\)$/);
            if (match) {
                const funcName = match[1];
                const argsStr = match[2];

                // Get the function from window
                const func = window[funcName];
                if (typeof func === 'function') {
                    // Parse arguments
                    const args = [];
                    if (argsStr) {
                        // Handle simple cases: strings, numbers, booleans, 'this', 'event'
                        if (argsStr === 'this') {
                            args.push(element);
                        } else if (argsStr === 'event') {
                            args.push(event);
                        } else if (argsStr === 'true' || argsStr === 'false') {
                            // Boolean argument
                            args.push(argsStr === 'true');
                        } else if (argsStr.startsWith("'") || argsStr.startsWith('"')) {
                            // String argument - remove quotes
                            args.push(argsStr.slice(1, -1));
                        } else if (!isNaN(argsStr)) {
                            // Number argument
                            args.push(Number(argsStr));
                        } else if (argsStr.includes(',')) {
                            // Multiple arguments
                            argsStr.split(',').forEach(arg => {
                                arg = arg.trim();
                                if (arg === 'this') {
                                    args.push(element);
                                } else if (arg === 'event') {
                                    args.push(event);
                                } else if (arg === 'true' || arg === 'false') {
                                    // Boolean argument
                                    args.push(arg === 'true');
                                } else if (arg.startsWith("'") || arg.startsWith('"')) {
                                    args.push(arg.slice(1, -1));
                                } else if (!isNaN(arg)) {
                                    args.push(Number(arg));
                                }
                            });
                        }
                    }

                    // Call the function
                    func.apply(element, args);
                }
            }
        }
    }

    // Use event delegation on document body to handle all clicks (CSP-compliant)
    document.body.addEventListener('click', function (event) {
        const target = event.target.closest('[data-onclick]');

        if (target) {
            const onclickAttr = target.getAttribute('data-onclick');

            if (onclickAttr) {
                // Prevent default behavior
                event.preventDefault();

                // Execute the onclick code
                try {
                    executeOnclick(onclickAttr, target, event);
                } catch (error) {
                    console.error('Error executing data-onclick handler:', error, onclickAttr);
                }
            }
        }
    });

    // Handle oninput events (CSP-compliant)
    document.body.addEventListener('input', function (event) {
        const target = event.target;
        const oninputAttr = target.getAttribute('data-oninput');

        if (oninputAttr) {
            try {
                executeOnclick(oninputAttr, target, event);
            } catch (error) {
                console.error('Error executing data-oninput handler:', error, oninputAttr);
            }
        }
    });

    // Handle onchange events (CSP-compliant)
    document.body.addEventListener('change', function (event) {
        const target = event.target;
        const onchangeAttr = target.getAttribute('data-onchange');

        if (onchangeAttr) {
            try {
                executeOnclick(onchangeAttr, target, event);
            } catch (error) {
                console.error('Error executing data-onchange handler:', error, onchangeAttr);
            }
        }
    });

    // CSP-compliant event handlers using data attributes
    // Handle suggestion items
    document.addEventListener('click', function (event) {
        const suggestionItem = event.target.closest('.suggestion-item[data-action="startChat"]');
        if (suggestionItem) {
            const prompt = suggestionItem.getAttribute('data-prompt');
            if (prompt && typeof startChat === 'function') {
                startChat(prompt);
            }
        }

        // Handle all data-action attributes (CSP-compliant alternative to onclick)
        const actionElement = event.target.closest('[data-action]');
        if (actionElement) {
            const action = actionElement.getAttribute('data-action');
            const param = actionElement.getAttribute('data-param');

            // Map of action names to functions
            const actionMap = {
                'togglePinFromHeader': togglePinFromHeader,
                'openRenameModalFromHeader': openRenameModalFromHeader,
                'openDeleteModalFromHeader': openDeleteModalFromHeader,
                'resetChatAndHistory': () => { resetChat(); toggleHistory(false); },
                'cancelEditMode': cancelEditMode,
                'showContextMenu': showContextMenu,
                'closeAllMenus': closeAllMenus,
                'closePromptSheet': closePromptSheet,
                'filterPrompts': (el) => filterPrompts(el, el.getAttribute('data-param')),
                'goBackContext': goBackContext,
                'closeModals': closeModals,
                'saveRename': saveRename,
                'confirmDelete': confirmDelete,
                'closeFilterModal': closeFilterModal,
                'closeSourcesModal': closeSourcesModal,
                'closeVoiceModal': closeVoiceModal,
                'switchSearchTab': (el) => switchSearchTab(el.getAttribute('data-param')),
                'clearAllFilters': clearAllFilters,
                'switchToAIFromSearch': switchToAIFromSearch,
                'showRefineEnhancedInput': showRefineEnhancedInput,
                'goToPage': (el) => goToPage(parseInt(el.getAttribute('data-param'))),
                'closeLeadDetail': closeLeadDetail,
                'selectRyan': (el) => selectRyan(el.getAttribute('data-param')),
                'showQuoteCustomers': showQuoteCustomers,
                'copyMessageText': (el) => copyMessageText(el),
                'enterEditMode': (el) => enterEditMode(el),
                'showFollowUpContext': showFollowUpContext,
                'clearContext': (el, event) => clearContext(event),
                'removeFileAttachment': (el, event) => removeFileAttachment(el, event),
                'handleNotifyReport': (el) => handleNotifyReport(el),
                'sendSMS': (el) => sendSMS(el),
                'openReportDynamic': () => openReportDynamic()
            };

            if (actionMap[action]) {
                event.preventDefault();
                if (typeof actionMap[action] === 'function') {
                    // Pass the element itself for actions that need it (like filterPrompts)
                    if (action === 'filterPrompts' || action === 'switchSearchTab' || action === 'goToPage') {
                        actionMap[action](actionElement);
                    } else if (action === 'showContextMenu') {
                        actionMap[action](event);
                    } else {
                        actionMap[action]();
                    }
                }
            }
        }
    });
});

