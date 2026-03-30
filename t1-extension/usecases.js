/* COMPONENT LOGIC from plan.md */
window.CreateDealFlow = {
    paramKey: 'create_deal_test_drive',

    thinkingSteps: [
        "Analyzing request for deal creation and test drive scheduling...",
        "Detected combined intent from user instruction…",
        "Identifying necessary steps for deal creation…",
        "Identifying necessary steps for scheduling test drive appointment…",
        "Compiling action items into a checklist…"
    ],
    thinkingSummary: "I've identified and assigned these tasks to an T-ONE agent…",

    matches: function (text) {
        if (!text) return false;
        const lower = text.toLowerCase();
        return lower.includes('create') && lower.includes('deal') && lower.includes('flora');
    },

    getTemplate: function () {
        return `
    <p style="margin-bottom: 8px; font-size: 0.85rem; color: #444F5C;">I've outlined the action plan for this request:</p>
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
            <!-- Section 1 -->
            <div class="task-section-title" style="font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase; margin: 4px 0;">1. Create Deal</div>
            <div class="task-steps">
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select Customer</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select Co‑buyer / Guarantor check if needed</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select Vehicle</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Vehicle Variant / Config</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select Deal Structure</div>
                </div>
             </div>

            <!-- Section 2 -->
            <div class="task-section-title" style="margin-top: 8px; border-top: 1px solid #F1F5F9; padding-top: 12px; font-size: 0.75rem; font-weight: 700; color: #64748B; text-transform: uppercase;">2. Schedule Test Drive </div>
            <div class="task-steps">
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select appointment type: Test Drive</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select Customer</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Select Vehicle</div>
                </div>
                <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Confirm Test Drive Date and Time</div>
                </div>
                 <div class="task-step" onclick="CreateDealFlow.handleStepClick(this)">
                    <div class="step-checkbox"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div class="step-text" style="font-size: 0.8rem;">Assign Salesperson and Save Appointment</div>
                </div>
            </div>
        </div>
    </div>`;
    },

    handleStepClick: function (element) {
        if (element.classList.contains('done') || element.classList.contains('processing')) return;

        element.classList.add('processing');

        // Simulate async work
        setTimeout(() => {
            element.classList.remove('processing');
            element.classList.add('done');
            this.updateProgress(element);
        }, 500);
    },

    updateProgress: function (element) {
        const card = element.closest('.task-card');
        const totalSteps = card.querySelectorAll('.task-step').length;
        const doneSteps = card.querySelectorAll('.task-step.done').length;

        // Update Badge
        const statusBadge = card.querySelector('.task-status');
        if (statusBadge) statusBadge.innerText = `${doneSteps}/${totalSteps} DONE`;

        // Update Bar
        const progressBar = card.querySelector('.task-progress-bar');
        if (progressBar) progressBar.style.width = ((doneSteps / totalSteps) * 100) + '%';

        // Check Complete
        if (doneSteps === totalSteps) {
            card.classList.add('completed');
            if (statusBadge) {
                statusBadge.innerText = 'COMPLETED';
                statusBadge.style.color = '#10B981';
            }
            this.showSuccessState(card);
        }
    },

    showSuccessState: function (card) {
        const container = card.parentElement;

        // 1. Deal Card
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

        // 2. Test Drive Card
        const testDriveCard = document.createElement('div');
        testDriveCard.className = 'report-download-card';
        testDriveCard.style.marginTop = '8px';
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

        // Append with animation
        container.appendChild(dealCard);
        container.appendChild(testDriveCard);

        if (typeof scrollToBottom === 'function') scrollToBottom();
    }
};

// Patch existing logic
if (typeof AI_DATA !== 'undefined') {
    AI_DATA.thinkingSteps.create_deal_test_drive = CreateDealFlow.thinkingSteps;
    AI_DATA.thinkingSummaries.create_deal_test_drive = CreateDealFlow.thinkingSummary;
    AI_DATA.aiResponses.create_deal_test_drive = CreateDealFlow.getTemplate();
}
