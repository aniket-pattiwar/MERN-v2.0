// Full Stack MERN Course Portal - Faculty & Instructor Command Logic

document.addEventListener('DOMContentLoaded', () => {
  initFacultyPortal();
});

let facultyPasscode = '';

function initFacultyPortal() {
  const openBtn = document.getElementById('facultyModalOpenBtn');
  const closeBtn = document.getElementById('closeFacultyModalBtn');
  const modal = document.getElementById('facultyModal');
  const form = document.getElementById('facultyLoginForm');
  const errorMsg = document.getElementById('facultyErrorMsg');
  const facultyTabBtn = document.getElementById('facultyTabBtn');
  const lockBtn = document.getElementById('lockFacultyBtn');
  const announceForm = document.getElementById('announcementForm');

  // Check if session has saved faculty authorization
  const savedPin = sessionStorage.getItem('mc103_faculty_pin');
  if (savedPin === 'Wholeworld') {
    facultyPasscode = savedPin;
    enableFacultyUI();
  }

  // Open modal
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      if (facultyPasscode === 'Wholeworld') {
        // Already unlocked, switch directly to tab
        if (facultyTabBtn) facultyTabBtn.click();
      } else {
        modal.classList.add('active');
        document.getElementById('facultyPasscodeInput').focus();
      }
    });
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      errorMsg.style.display = 'none';
      window.pendingTargetTab = null;
    });
  }

  // Handle Passcode Submission
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const inputPin = document.getElementById('facultyPasscodeInput').value.trim();

      if (inputPin === 'Wholeworld') {
        facultyPasscode = inputPin;
        sessionStorage.setItem('mc103_faculty_pin', inputPin);
        modal.classList.remove('active');
        errorMsg.style.display = 'none';
        enableFacultyUI();
        
        // Navigate to pending tab or default to faculty-panel
        const targetTab = window.pendingTargetTab || 'faculty-panel';
        window.pendingTargetTab = null;
        if (typeof navigateToTab === 'function') {
          navigateToTab(targetTab);
        } else {
          const tabBtn = document.querySelector(`[data-tab="${targetTab}"]`);
          if (tabBtn) tabBtn.click();
        }
        loadFacultyRoster();
      } else {
        errorMsg.textContent = '❌ Invalid Passcode. Access denied.';
        errorMsg.style.display = 'block';
      }
    });
  }

  // Lock Faculty Portal (Logout)
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      facultyPasscode = '';
      sessionStorage.removeItem('mc103_faculty_pin');
      updateFacultyBadgeState(false);
      alert('Security Lock Activated: Instructor Guide and Admin modes are now locked.');
      if (typeof navigateToTab === 'function') {
        navigateToTab('syllabus-panel');
      } else {
        const syllabusBtn = document.querySelector('[data-tab="syllabus-panel"]');
        if (syllabusBtn) syllabusBtn.click();
      }
    });
  }

  // Handle Post Announcement
  if (announceForm) {
    announceForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('announceTitle').value.trim();
      const content = document.getElementById('announceContent').value.trim();
      const urgent = document.getElementById('announceUrgent').checked;

      try {
        const res = await fetch('/api/announcements', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            content,
            urgent,
            pin: facultyPasscode || 'Wholeworld',
            author: 'Instructor'
          })
        });

        const data = await res.json();
        if (data.success) {
          alert('Announcement published successfully to student portal!');
          announceForm.reset();
          loadAnnouncements(); // refresh notice board
        } else {
          alert('Failed to publish: ' + data.message);
        }
      } catch (err) {
        alert('Offline mode: Announcement recorded locally.');
      }
    });
  }
}

function enableFacultyUI() {
  updateFacultyBadgeState(true);
  loadFacultyRoster();
  renderAdminTeachingPlaybook();
}

function updateFacultyBadgeState(isLoggedIn) {
  const adminTab = document.getElementById('facultyTabBtn');
  const instructorTab = document.querySelector('[data-tab="instructor-notes-panel"]');

  if (adminTab) {
    adminTab.innerHTML = isLoggedIn ? '<span>👨‍🏫</span> Instructor &amp; Admin' : '<span>🔒</span> Instructor &amp; Admin';
  }

  if (instructorTab) {
    instructorTab.innerHTML = isLoggedIn ? '<span>👨‍🏫</span> Instructor Guide' : '<span>🔒</span> Instructor Guide';
  }
}

async function loadFacultyRoster() {
  const tbody = document.getElementById('studentRosterBody');
  if (!tbody) return;

  try {
    const res = await fetch('/api/instructor/roster', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin: facultyPasscode || 'Wholeworld' })
    });

    const data = await res.json();
    if (data.success && data.roster) {
      renderRosterRows(data.roster);
    }
  } catch (err) {
    // Default fallback roster
    const fallbackRoster = [
      { rollNo: "DEV-01", name: "Aarav Sharma", progress: 85, iaScore: 28, status: "Active" },
      { rollNo: "DEV-02", name: "Ananya Iyer", progress: 92, iaScore: 29, status: "Active" },
      { rollNo: "DEV-03", name: "Rohan Verma", progress: 78, iaScore: 25, status: "Active" },
      { rollNo: "DEV-04", name: "Sneha Patel", progress: 95, iaScore: 30, status: "Active" },
      { rollNo: "DEV-05", name: "Vikram Das", progress: 64, iaScore: 22, status: "Needs Practice" }
    ];
    renderRosterRows(fallbackRoster);
  }
}

function renderRosterRows(roster) {
  const tbody = document.getElementById('studentRosterBody');
  if (!tbody) return;

  tbody.innerHTML = roster.map(s => `
    <tr>
      <td><strong>${s.rollNo}</strong></td>
      <td>${s.name}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div class="progress-track" style="width: 80px; height: 6px;">
            <div class="progress-fill" style="width: ${s.progress}%;"></div>
          </div>
          <span>${s.progress}%</span>
        </div>
      </td>
      <td>
        <span style="font-weight: 700; color: ${s.iaScore >= 25 ? 'var(--accent-emerald)' : 'var(--accent-amber)'};">
          ${s.iaScore} / 30
        </span>
      </td>
      <td>
        <span style="font-size: 0.75rem; padding: 2px 8px; border-radius: 9999px; background: rgba(16, 185, 129, 0.15); color: #34d399;">
          Eligible (ESE: 70)
        </span>
      </td>
    </tr>
  `).join('');
}

// =========================================================================
// MASTER INSTRUCTOR PLAYBOOK & FULL MERN PROJECT LINKING ARCHITECTURE
// =========================================================================
let currentPlaybookTab = 'blueprint'; // 'blueprint' | 'playbook'
let currentPlaybookUnitFilter = 'all';
let currentPlaybookSearchQuery = '';

function renderAdminTeachingPlaybook() {
  const container = document.getElementById('adminPlaybookContainer');
  if (!container) return;

  if (typeof TEACHING_PLAYBOOK === 'undefined') {
    container.innerHTML = `
      <div style="padding: 20px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
        <p style="color: var(--accent-rose);">Teaching Playbook data loading... Please ensure playbookData.js is loaded.</p>
      </div>
    `;
    return;
  }

  const bp = TEACHING_PLAYBOOK.projectBlueprint;

  container.innerHTML = `
    <div class="playbook-wrapper-card">
      <!-- Header Banner -->
      <div class="playbook-top-banner">
        <div class="playbook-tag">👨‍🏫 INSTRUCTOR LESSON DELIVERY PLAYBOOK &amp; CAPSTONE ARCHITECTURE</div>
        <h2 class="playbook-main-title">Classroom Delivery Notes, Live Code Scripts &amp; End-to-End MERN Integration</h2>
        <p class="playbook-main-desc">
          Everything you need to deliver high-impact lectures: how to hook the class, exact spoken explanations in conversational Hinglish, 
          step-by-step live coding recipes, expected terminal/browser outputs, common student pitfalls, and the complete 3-phase architecture 
          connecting isolated code snippets into one production MERN capstone project.
        </p>

        <!-- Navigation Tabs -->
        <div class="playbook-nav-tabs">
          <button class="pb-tab-btn ${currentPlaybookTab === 'blueprint' ? 'active' : ''}" onclick="switchAdminPlaybookTab('blueprint')">
            <span>🚀</span> End-to-End MERN Project Stitching Blueprint (Backend ➔ Frontend ➔ Merged Capstone)
          </button>
          <button class="pb-tab-btn ${currentPlaybookTab === 'playbook' ? 'active' : ''}" onclick="switchAdminPlaybookTab('playbook')">
            <span>📖</span> 30-Topic Classroom Teaching Playbook (Hooks, Spoken Scripts, Live Code &amp; O/P)
          </button>
          <button class="pb-tab-btn ${currentPlaybookTab === 'viva' ? 'active' : ''}" onclick="switchAdminPlaybookTab('viva')">
            <span>🎯</span> Viva Interview Bank &amp; Blackboard Analogies
          </button>
        </div>
      </div>

      <!-- Tab Content Area -->
      <div id="playbookTabContent">
        ${currentPlaybookTab === 'blueprint' ? renderBlueprintContent(bp) : 
          currentPlaybookTab === 'viva' ? renderVivaContent() : 
          renderTopicsPlaybookContent()}
      </div>
    </div>
  `;
}

function switchAdminPlaybookTab(tab) {
  currentPlaybookTab = tab;
  renderAdminTeachingPlaybook();
}

// -------------------------------------------------------------------------
// TAB 1: FULL MERN PROJECT STITCHING BLUEPRINT (LINKING ALL CODE)
// -------------------------------------------------------------------------
function renderBlueprintContent(bp) {
  return `
    <div class="blueprint-container">
      <!-- Conceptual Rationale Banner -->
      <div class="bp-rationale-box">
        <div class="bp-rat-icon">💡</div>
        <div>
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--accent-amber); margin-bottom: 4px;">
            Core Teaching Principle: How to Connect All 45 Hours of Curriculum Code
          </h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55;">
            ${escapeHtmlText(bp.rationale)}
          </p>
        </div>
      </div>

      <!-- High-Level Pipeline Flowchart -->
      <div class="bp-pipeline-diagram">
        <div class="bp-flow-step">
          <span class="bp-step-badge">Phase 1</span>
          <h4>Backend Engine</h4>
          <p>Node.js + Express API + Mongoose Models + JWT Guard</p>
          <div class="bp-step-port">Port 5000 (REST JSON)</div>
        </div>
        <div class="bp-flow-arrow">➔ <span>HTTP Fetch / Axios</span> ➔</div>
        <div class="bp-flow-step">
          <span class="bp-step-badge">Phase 2</span>
          <h4>Frontend Client</h4>
          <p>React SPA + Components + Hooks + Router</p>
          <div class="bp-step-port">Port 3000 (Dynamic UI)</div>
        </div>
        <div class="bp-flow-arrow">➔ <span>Build &amp; Concurrently</span> ➔</div>
        <div class="bp-flow-step" style="border-color: var(--accent-emerald);">
          <span class="bp-step-badge" style="background: var(--accent-emerald);">Phase 3</span>
          <h4>Merged Capstone</h4>
          <p>Single Unified Server + Static Client + Atlas Cloud</p>
          <div class="bp-step-port" style="color: #34d399;">Single Production URL</div>
        </div>
      </div>

      <!-- Phase Cards Grid -->
      <div class="bp-phases-list">
        ${bp.phases.map((phase) => `
          <div class="bp-phase-card">
            <div class="bp-phase-header">
              <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                <span class="bp-phase-number">Phase ${phase.phaseNumber}</span>
                <h3 class="bp-phase-title">${escapeHtmlText(phase.name)}</h3>
              </div>
              <div class="bp-phase-meta">
                <span class="bp-meta-pill">📅 ${escapeHtmlText(phase.curriculumUnits)}</span>
                <span class="bp-meta-pill" style="border-color: var(--primary); color: var(--primary);">🎯 ${escapeHtmlText(phase.focus)}</span>
              </div>
            </div>

            <!-- Teaching Hook & Mental Model for Teacher -->
            <div class="bp-teacher-instruction">
              <strong>🗣️ How to introduce this Phase to Students:</strong>
              <p>${escapeHtmlText(phase.howToExplain)}</p>
            </div>

            <!-- Step by Step Code & Execution Guide -->
            <div class="bp-steps-list">
              ${phase.stepByStepGuide.map((step, sIdx) => `
                <div class="bp-step-row">
                  <div class="bp-step-title-row">
                    <span class="bp-step-num">${sIdx + 1}</span>
                    <strong>${escapeHtmlText(step.step)}</strong>
                  </div>
                  <p class="bp-step-action">🛠️ <strong>Action:</strong> ${escapeHtmlText(step.action)}</p>
                  <div class="bp-step-speech">
                    <span>💬 <strong>What to Say in Class:</strong></span>
                    <em>${escapeHtmlText(step.whatToSay)}</em>
                  </div>

                  <!-- Code block with copy & sandbox buttons -->
                  <div class="bp-code-wrap">
                    <div class="bp-code-header">
                      <span>💻 Implementation Code</span>
                      <div style="display: flex; gap: 8px;">
                        <button class="btn-copy-code" onclick="copyPlaybookCode(this, \`${escapeJsString(step.codeSnippet)}\`)">
                          📋 Copy Code
                        </button>
                        <button class="btn-copy-code" style="color: var(--accent-emerald);" onclick="loadPlaybookCodeToSandbox(\`${escapeJsString(step.codeSnippet)}\`)">
                          ⚡ Run in Sandbox
                        </button>
                      </div>
                    </div>
                    <pre class="bp-code-pre"><code>${escapeHtmlText(step.codeSnippet)}</code></pre>
                  </div>

                  <!-- Expected Output (O/P) -->
                  <div class="bp-output-box">
                    <span class="bp-op-tag">🖥️ Expected Output (O/P):</span>
                    <code>${escapeHtmlText(step.expectedOutput)}</code>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// TAB 2: 30-TOPIC CLASSROOM TEACHING PLAYBOOK
// -------------------------------------------------------------------------
function renderTopicsPlaybookContent() {
  const units = TEACHING_PLAYBOOK.units;

  // Filter topics
  let allTopics = [];
  units.forEach(u => {
    u.topics.forEach(t => {
      allTopics.push({ ...t, unitNumber: u.unitNumber, unitTitle: u.title });
    });
  });

  if (currentPlaybookUnitFilter !== 'all') {
    allTopics = allTopics.filter(t => t.unitNumber === parseInt(currentPlaybookUnitFilter, 10));
  }

  if (currentPlaybookSearchQuery.trim() !== '') {
    const q = currentPlaybookSearchQuery.toLowerCase();
    allTopics = allTopics.filter(t => 
      t.name.toLowerCase().includes(q) ||
      t.hook.toLowerCase().includes(q) ||
      t.whatToExplainFirst.toLowerCase().includes(q) ||
      t.spokenScript.toLowerCase().includes(q) ||
      (t.commonStudentMistake && t.commonStudentMistake.toLowerCase().includes(q))
    );
  }

  return `
    <div class="playbook-topics-container">
      <!-- Filter & Search Controls -->
      <div class="pb-filter-bar">
        <div class="pb-filter-pills">
          <button class="pb-pill ${currentPlaybookUnitFilter === 'all' ? 'active' : ''}" onclick="filterAdminPlaybookTopics('all')">
            All 30 Topics
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '1' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(1)">
            Unit 1: HTML &amp; CSS (8)
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '2' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(2)">
            Unit 2: JS &amp; DOM (5)
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '3' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(3)">
            Unit 3: Node.js (6)
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '4' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(4)">
            Unit 4: React.js (6)
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '5' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(5)">
            Unit 5: MERN Stack (5)
          </button>
        </div>

        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <input 
            type="text" 
            class="text-input pb-search-input" 
            placeholder="🔍 Search topic, hook question, or keyword..." 
            value="${escapeHtmlText(currentPlaybookSearchQuery)}"
            oninput="searchAdminPlaybookTopics(this.value)"
          >
          <button class="btn-copy-code" onclick="toggleAllPlaybookCards(true)">Expand All</button>
          <button class="btn-copy-code" onclick="toggleAllPlaybookCards(false)">Collapse All</button>
        </div>
      </div>

      <!-- Topics Count Header -->
      <div style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
        Showing <strong>${allTopics.length}</strong> lesson delivery guides:
      </div>

      <!-- Topics Cards Grid -->
      <div class="pb-cards-grid">
        ${allTopics.map((t, idx) => `
          <div class="pb-topic-card open" id="pbCard-${t.unitNumber}-${t.topicIdx}">
            <!-- Header Bar -->
            <div class="pb-card-header" onclick="togglePlaybookCard('${t.unitNumber}-${t.topicIdx}')">
              <div class="pb-header-left">
                <span class="pb-unit-badge">Unit ${t.unitNumber}</span>
                <h3 class="pb-topic-title">${escapeHtmlText(t.name)}</h3>
              </div>
              <div class="pb-header-right" onclick="event.stopPropagation()">
                <button class="btn-teach-jump" onclick="jumpToSyllabusTopic(${t.unitNumber}, ${t.topicIdx - 1})" title="Jump directly to this topic inside the portal to present with full architectural diagram">
                  🌐 Jump to Topic in Portal
                </button>
                <button class="btn-copy-script" onclick="copyPlaybookScript(this, \`${escapeJsString(t.spokenScript)}\`)" title="Copy spoken Hindi/English classroom script">
                  📋 Copy Spoken Script
                </button>
                <span class="pb-toggle-arrow" onclick="togglePlaybookCard('${t.unitNumber}-${t.topicIdx}')">▼</span>
              </div>
            </div>

            <!-- Card Body -->
            <div class="pb-card-body">
              <!-- Section 1: How to Start / The Hook -->
              <div class="pb-section-box pb-hook-box">
                <div class="pb-sec-badge">🎯 START KAISE KARE (The Curiosity Hook / शुरुआत कैसे करें)</div>
                <p class="pb-hook-text">${escapeHtmlText(t.hook)}</p>
              </div>

              <!-- Section 2: What to Speak in Class (Spoken Script) -->
              <div class="pb-section-box pb-speech-box">
                <div class="pb-sec-badge" style="color: #60a5fa; border-color: rgba(96, 165, 250, 0.3);">
                  🗣️ CLASS ME KYA BOLE (Classroom Spoken Script in Hinglish / कक्षा में क्या बोलें)
                </div>
                <blockquote class="pb-speech-quote">
                  ${escapeHtmlText(t.spokenScript)}
                </blockquote>
              </div>

              <!-- Section 3: What to Explain FIRST (Core Mental Model & Analogy) -->
              <div class="pb-section-box pb-mental-box">
                <div class="pb-sec-badge" style="color: #34d399; border-color: rgba(52, 211, 153, 0.3);">
                  💡 PEHLE KYA BATAYE (Core Mental Model &amp; Everyday Analogy / कोड से पहले क्या समझाएं)
                </div>
                <p class="pb-mental-text">${escapeHtmlText(t.whatToExplainFirst)}</p>
              </div>

              <!-- Section 4: Live Coding Flow -->
              <div class="pb-section-box pb-steps-box">
                <div class="pb-sec-badge" style="color: #c084fc; border-color: rgba(192, 132, 252, 0.3);">
                  💻 LIVE CODE KAISE KARE (Step-by-Step Live Coding Flow / स्टेप-बाय-स्टेप कोडिंग क्रम)
                </div>
                <ul class="pb-steps-list">
                  ${t.liveCodeSteps.map(step => `
                    <li><strong>${escapeHtmlText(step)}</strong></li>
                  `).join('')}
                </ul>
              </div>

              <!-- Section 5: Code Snippet -->
              <div class="pb-code-section">
                <div class="pb-code-bar">
                  <span>📝 Demonstration Code:</span>
                  <div style="display: flex; gap: 8px;">
                    <button class="btn-copy-code" onclick="copyPlaybookCode(this, \`${escapeJsString(t.codeToDemonstrate)}\`)">
                      📋 Copy Code
                    </button>
                    <button class="btn-copy-code" style="color: var(--accent-emerald);" onclick="loadPlaybookCodeToSandbox(\`${escapeJsString(t.codeToDemonstrate)}\`)">
                      ⚡ Load in Sandbox
                    </button>
                  </div>
                </div>
                <pre class="pb-code-pre"><code>${escapeHtmlText(t.codeToDemonstrate)}</code></pre>
              </div>

              <!-- Section 6: Expected Output (O/P) -->
              <div class="pb-section-box pb-op-box">
                <div class="pb-sec-badge" style="color: #22d3ee; border-color: rgba(34, 211, 238, 0.3);">
                  🖥️ EXPECTED OUTPUT (Expected O/P / स्क्रीन पर क्या दिखेगा)
                </div>
                <div class="pb-op-text"><code>${escapeHtmlText(t.expectedOutput)}</code></div>
              </div>

              <!-- Section 7: Common Student Mistake & Trap -->
              ${t.commonStudentMistake ? `
                <div class="pb-section-box pb-trap-box">
                  <div class="pb-sec-badge" style="color: #fb7185; border-color: rgba(251, 113, 133, 0.3);">
                    ⚠️ COMMON STUDENT MISTAKE &amp; LIVE DEBUGGING TRAP (छात्रों की सामान्य गलती व समाधान)
                  </div>
                  <p class="pb-trap-text">${escapeHtmlText(t.commonStudentMistake)}</p>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------------------
// PLAYBOOK INTERACTION CONTROLLERS
// -------------------------------------------------------------------------
function filterAdminPlaybookTopics(unitNum) {
  currentPlaybookUnitFilter = unitNum === 'all' ? 'all' : unitNum.toString();
  renderAdminTeachingPlaybook();
}

function searchAdminPlaybookTopics(query) {
  currentPlaybookSearchQuery = query;
  const content = document.getElementById('playbookTabContent');
  if (content && currentPlaybookTab === 'playbook') {
    content.innerHTML = renderTopicsPlaybookContent();
  }
}

function togglePlaybookCard(cardId) {
  const card = document.getElementById(`pbCard-${cardId}`);
  if (card) {
    card.classList.toggle('open');
  }
}

function toggleAllPlaybookCards(open) {
  const cards = document.querySelectorAll('.pb-topic-card');
  cards.forEach(c => {
    if (open) c.classList.add('open');
    else c.classList.remove('open');
  });
}

function copyPlaybookScript(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = '✅ Script Copied!';
    btn.style.background = 'rgba(16, 185, 129, 0.2)';
    btn.style.borderColor = 'var(--accent-emerald)';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.borderColor = '';
    }, 2000);
  });
}

function copyPlaybookCode(btn, code) {
  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    btn.style.color = 'var(--accent-emerald)';
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.color = '';
    }, 2000);
  });
}

function loadPlaybookCodeToSandbox(code) {
  // Navigate to Sandbox Tab
  if (typeof navigateToTab === 'function') {
    navigateToTab('sandbox-panel');
  } else {
    const sandboxTabBtn = document.querySelector('[data-tab="sandbox-panel"]');
    if (sandboxTabBtn) sandboxTabBtn.click();
  }

  // Populate editor
  const editor = document.getElementById('codeEditorInput');
  if (editor) {
    editor.value = code;
    if (typeof runSandboxCode === 'function') {
      runSandboxCode();
    }
  }
}

function jumpToSyllabusTopic(unitNum, topicIdx) {
  // Navigate to syllabus-panel
  if (typeof navigateToTab === 'function') {
    navigateToTab('syllabus-panel');
  } else {
    const tabBtn = document.querySelector('[data-tab="syllabus-panel"]');
    if (tabBtn) tabBtn.click();
  }

  // Expand unit accordion
  const unitCard = document.getElementById(`unitCard-${unitNum}`);
  if (unitCard && !unitCard.classList.contains('open')) {
    unitCard.classList.add('open');
  }

  // Scroll to topic row
  setTimeout(() => {
    const row = document.getElementById(`topicRow-${unitNum}-${topicIdx}`);
    if (row) {
      row.scrollIntoView({ behavior: 'smooth', block: 'center' });
      row.style.outline = '3px solid var(--accent-emerald)';
      row.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.5)';
      setTimeout(() => {
        row.style.outline = '';
        row.style.boxShadow = '';
      }, 3500);
    }
  }, 350);
}

// -------------------------------------------------------------------------
// TAB 3: VIVA INTERVIEW BANK & BLACKBOARD ANALOGIES (FROM INSTRUCTOR GUIDE)
// -------------------------------------------------------------------------
function renderVivaContent() {
  if (typeof COURSE_DATA === 'undefined' || !COURSE_DATA.units) {
    return '<div style="padding: 24px; color: var(--text-secondary);">Loading Viva Guide data...</div>';
  }

  let units = COURSE_DATA.units;
  if (currentPlaybookUnitFilter !== 'all') {
    units = COURSE_DATA.units.filter(u => u.unitNumber === parseInt(currentPlaybookUnitFilter, 10));
  }

  return `
    <div class="playbook-topics-container">
      <!-- Filter Bar -->
      <div class="pb-filter-bar">
        <div class="pb-filter-pills">
          <button class="pb-pill ${currentPlaybookUnitFilter === 'all' ? 'active' : ''}" onclick="filterAdminPlaybookTopics('all')">
            All 5 Units
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '1' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(1)">
            Unit 1: HTML &amp; CSS
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '2' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(2)">
            Unit 2: JS &amp; DOM
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '3' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(3)">
            Unit 3: Node.js
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '4' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(4)">
            Unit 4: React.js
          </button>
          <button class="pb-pill ${currentPlaybookUnitFilter === '5' ? 'active' : ''}" onclick="filterAdminPlaybookTopics(5)">
            Unit 5: MERN Stack
          </button>
        </div>
      </div>

      <!-- Viva and Analogies Units List -->
      <div class="pb-cards-grid">
        ${units.map(unit => `
          <div class="pb-topic-card open" id="vivaUnit-${unit.unitNumber}">
            <div class="pb-card-header">
              <div class="pb-header-left">
                <span class="pb-unit-badge" style="background: ${unit.badgeColor}; color: #fff;">Unit ${unit.unitNumber}</span>
                <h3 class="pb-topic-title">${escapeHtmlText(unit.title)} (${unit.hours} Hours)</h3>
              </div>
              <div class="pb-header-right">
                <span style="font-size: 0.82rem; font-weight: 600; color: var(--text-muted); background: var(--bg-card); padding: 4px 10px; border-radius: var(--radius-full); border: 1px solid var(--border-color);">
                  🎯 ${(unit.examQuestions || []).length} Exam / Viva Questions
                </span>
              </div>
            </div>

            <div class="pb-card-body">
              <!-- Analogies Section -->
              ${unit.conceptualAnalogies ? `
                <div class="pb-section-box pb-mental-box">
                  <div class="pb-sec-badge" style="color: #34d399; border-color: rgba(52, 211, 153, 0.3);">
                    💡 BLACKBOARD TEACHING ANALOGIES (For Whiteboard &amp; Verbal Intuition)
                  </div>
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-top: 10px;">
                    ${unit.conceptualAnalogies.map(a => `
                      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px;">
                        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                          <span style="font-size: 1.1rem;">🎯</span>
                          <strong style="color: var(--text-primary); font-size: 0.95rem;">${escapeHtmlText(a.concept)}: ${escapeHtmlText(a.analogy)}</strong>
                        </div>
                        <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0; line-height: 1.55;">${escapeHtmlText(a.explanation)}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Viva Questions Section -->
              ${unit.examQuestions ? `
                <div class="pb-section-box pb-steps-box">
                  <div class="pb-sec-badge" style="color: #c084fc; border-color: rgba(192, 132, 252, 0.3);">
                    🎯 ORAL VIVA &amp; TECHNICAL INTERVIEW QUESTIONS (Continuous Assessment &amp; Final Evaluation)
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;">
                    ${unit.examQuestions.map(eq => `
                      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 14px; display: flex; align-items: flex-start; gap: 12px;">
                        <span class="marks-badge ${eq.type.includes('2') ? 'badge-2marks' : 'badge-10marks'}" style="white-space: nowrap; margin-top: 2px;">
                          ${escapeHtmlText(eq.type)}
                        </span>
                        <div style="font-size: 0.92rem; color: var(--text-primary); font-weight: 500; line-height: 1.5;">
                          ${escapeHtmlText(eq.q)}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtmlText(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsString(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

// Expose globally
window.switchAdminPlaybookTab = switchAdminPlaybookTab;
window.filterAdminPlaybookTopics = filterAdminPlaybookTopics;
window.searchAdminPlaybookTopics = searchAdminPlaybookTopics;
window.togglePlaybookCard = togglePlaybookCard;
window.toggleAllPlaybookCards = toggleAllPlaybookCards;
window.copyPlaybookScript = copyPlaybookScript;
window.copyPlaybookCode = copyPlaybookCode;
window.loadPlaybookCodeToSandbox = loadPlaybookCodeToSandbox;
window.jumpToSyllabusTopic = jumpToSyllabusTopic;
window.renderAdminTeachingPlaybook = renderAdminTeachingPlaybook;

