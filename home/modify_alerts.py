import re

with open('latesthome.html', 'r') as f:
    html = f.read()

# 1. Add CSS class for .alert-btn-redirect
css_to_add = """
        .alert-btn-redirect {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            padding: 0 12px;
            border-radius: 4px;
            border: 1px solid #E5E7EB;
            background: #fff;
            color: var(--color-text-heading);
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            font-family: 'Manrope', sans-serif;
            white-space: nowrap;
            transition: all 0.12s;
            flex-shrink: 0;
        }

        .alert-btn-redirect:hover {
            background: #F9FAFB;
            border-color: var(--color-text-muted);
        }

        .alert-btn-ai-sm {"""

html = html.replace("        .alert-btn-ai-sm {", css_to_add, 1)

# 2. Modify HOME_ALERTS array to add actionConfig
actions_map = {
    "Appointment unconfirmed — 2 hrs to go": "actionType: 'ai', actionText: 'Confirm appt'",
    "No-show — reschedule before lead goes cold": "actionType: 'ai', actionText: 'Reschedule'",
    "High-intent lead — no contact in 22 min": "actionType: 'ai', actionText: 'Draft text'",
    "Lead going cold — 4 days no response": "actionType: 'ai', actionText: 'Draft email'",
    "Payment quote replied to — awaiting response": "actionType: 'ai', actionText: 'Draft reply'",
    "Trade-in offer email unanswered — 5 hrs": "actionType: 'ai', actionText: 'Follow up'",
    "1-star review posted — response needed": "actionType: 'ai', actionText: 'Draft response'",
    "Vehicle on recall hold — customer deal blocked": "actionType: 'redirect', actionText: 'Go to RO page'",
    "Follow-up task overdue by 3 days": "actionType: 'redirect', actionText: 'View task'",
    "Paperwork not submitted — deal on hold": "actionType: 'redirect', actionText: 'Upload docs'"
}

for why, action in actions_map.items():
    pattern = r'(why:\s*"' + why + r'".*?viewSub:\s*".*?")'
    html = re.sub(pattern, r'\1,\n                ' + action, html, flags=re.DOTALL)

# 3. Replace JS HTML generation
js_old = """                    html += '<button class="alert-btn-ai-sm" onclick="event.stopPropagation();resetChat();startChat(\\'Help me with ' + contextName + '\\')">';
                    html += '<svg width="13" height="13" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0"><path d="M10.7314 33.3897C11.9876 31.2145 14.7702 30.4689 16.9458 31.7246C19.1201 32.9808 19.8654 35.761 18.6108 37.9363C17.3546 40.1121 14.5722 40.8576 12.3965 39.6014C10.2214 38.3449 9.47587 35.565 10.7314 33.3897Z" fill="url(#g0)"/><path d="M27.0944 31.7246C29.2699 30.4687 32.0523 31.2145 33.3088 33.3897C34.5639 35.565 33.8184 38.3449 31.6437 39.6014C29.4679 40.8576 26.6856 40.1121 25.4294 37.9363C24.1746 35.7608 24.9195 32.9805 27.0944 31.7246Z" fill="url(#g0)"/><path d="M5.02464 18.9172C7.19994 17.6613 9.98242 18.4076 11.239 20.5823C12.4952 22.758 11.7497 25.5404 9.57396 26.7966C7.39819 28.0528 4.61577 27.3073 3.35959 25.1316C2.10453 22.9561 2.84947 20.1732 5.02464 18.9172Z" fill="url(#g0)"/><path d="M27.0784 6.10981C29.2537 4.85399 32.0361 5.60023 33.2926 7.77482C33.7458 8.55959 33.9405 9.42455 33.8995 10.267C33.811 12.0854 33.396 14.0987 34.3052 15.6757C35.2157 17.2528 37.1679 17.9019 38.7874 18.7346C39.5373 19.1202 40.1899 19.7197 40.6431 20.5043C41.8993 22.68 41.1535 25.4624 38.978 26.7187C36.8022 27.9749 34.02 27.2294 32.7638 25.0536C32.3109 24.2689 32.1184 23.4039 32.1593 22.5615C32.2482 20.7429 32.6612 18.7296 31.7512 17.1528C30.8404 15.5759 28.8885 14.9267 27.269 14.0939C26.5192 13.7081 25.8663 13.1087 25.4133 12.3241C24.1584 10.1488 24.9035 7.3659 27.0784 6.10981Z" fill="url(#g0)"/><path d="M12.3965 6.26558C14.572 5.00971 17.3545 5.75549 18.6108 7.9306C19.8662 10.1062 19.121 12.8888 16.9458 14.145C14.7703 15.401 11.9879 14.655 10.7314 12.4799C9.47584 10.3042 10.2209 7.52162 12.3965 6.26558Z" fill="url(#g0)"/><defs><linearGradient id="g0" x1="2.75" y1="5.5" x2="46.39" y2="14.08" gradientUnits="userSpaceOnUse"><stop stop-color="#25C8A5"/><stop offset="0.5" stop-color="#1B90B4"/><stop offset="1" stop-color="#1A6CC4"/></linearGradient></defs></svg>';
                    html += '<span class="ask-t1-text">Ask T1</span></button>';"""

js_new = """                    if (a.actionType === 'redirect') {
                        html += '<button class="alert-btn-redirect" onclick="event.stopPropagation(); alert(\\'Redirecting to ' + a.actionText + '...\\')">';
                        html += a.actionText + '</button>';
                    } else {
                        var aiText = a.actionText ? a.actionText : 'Ask T1';
                        html += '<button class="alert-btn-ai-sm" onclick="event.stopPropagation();resetChat();startChat(\\'Help me with ' + contextName + '\\')">';
                        html += '<svg width="13" height="13" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0"><path d="M10.7314 33.3897C11.9876 31.2145 14.7702 30.4689 16.9458 31.7246C19.1201 32.9808 19.8654 35.761 18.6108 37.9363C17.3546 40.1121 14.5722 40.8576 12.3965 39.6014C10.2214 38.3449 9.47587 35.565 10.7314 33.3897Z" fill="url(#g0)"/><path d="M27.0944 31.7246C29.2699 30.4687 32.0523 31.2145 33.3088 33.3897C34.5639 35.565 33.8184 38.3449 31.6437 39.6014C29.4679 40.8576 26.6856 40.1121 25.4294 37.9363C24.1746 35.7608 24.9195 32.9805 27.0944 31.7246Z" fill="url(#g0)"/><path d="M5.02464 18.9172C7.19994 17.6613 9.98242 18.4076 11.239 20.5823C12.4952 22.758 11.7497 25.5404 9.57396 26.7966C7.39819 28.0528 4.61577 27.3073 3.35959 25.1316C2.10453 22.9561 2.84947 20.1732 5.02464 18.9172Z" fill="url(#g0)"/><path d="M27.0784 6.10981C29.2537 4.85399 32.0361 5.60023 33.2926 7.77482C33.7458 8.55959 33.9405 9.42455 33.8995 10.267C33.811 12.0854 33.396 14.0987 34.3052 15.6757C35.2157 17.2528 37.1679 17.9019 38.7874 18.7346C39.5373 19.1202 40.1899 19.7197 40.6431 20.5043C41.8993 22.68 41.1535 25.4624 38.978 26.7187C36.8022 27.9749 34.02 27.2294 32.7638 25.0536C32.3109 24.2689 32.1184 23.4039 32.1593 22.5615C32.2482 20.7429 32.6612 18.7296 31.7512 17.1528C30.8404 15.5759 28.8885 14.9267 27.269 14.0939C26.5192 13.7081 25.8663 13.1087 25.4133 12.3241C24.1584 10.1488 24.9035 7.3659 27.0784 6.10981Z" fill="url(#g0)"/><path d="M12.3965 6.26558C14.572 5.00971 17.3545 5.75549 18.6108 7.9306C19.8662 10.1062 19.121 12.8888 16.9458 14.145C14.7703 15.401 11.9879 14.655 10.7314 12.4799C9.47584 10.3042 10.2209 7.52162 12.3965 6.26558Z" fill="url(#g0)"/><defs><linearGradient id="g0" x1="2.75" y1="5.5" x2="46.39" y2="14.08" gradientUnits="userSpaceOnUse"><stop stop-color="#25C8A5"/><stop offset="0.5" stop-color="#1B90B4"/><stop offset="1" stop-color="#1A6CC4"/></linearGradient></defs></svg>';
                        html += '<span class="ask-t1-text">' + aiText + '</span></button>';
                    }"""

html = html.replace(js_old, js_new)

with open('latesthome.html', 'w') as f:
    f.write(html)
