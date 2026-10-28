// Full Stack MERN Course Portal - Core Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initViewMode();
  initTabs();
  initObjectivesAndOutcomes();
  initSyllabusUnits();
  initInstructorNotes();
  initProgressTracker();
  initSandbox();
  initMernVisualizer();
  initJwtLab();
  initQuizEngine();
  initLibrary();
  loadAnnouncements();
  initPrintButton();
  initLiveStudioMode();
});

// --- 1. Theme Toggle (Dark / Light) ---
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('mc103_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeBtnDisplay(toggleBtn, savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('mc103_theme', newTheme);
      updateThemeBtnDisplay(toggleBtn, newTheme);
    });
  }
}

function updateThemeBtnDisplay(btn, theme) {
  if (!btn) return;
  if (theme === 'light') {
    btn.innerHTML = '<span class="theme-icon">☀️</span> <span class="theme-label">Light Mode</span>';
    btn.setAttribute('title', 'Switch to Dark Mode');
    btn.classList.add('is-light');
  } else {
    btn.innerHTML = '<span class="theme-icon">🌙</span> <span class="theme-label">Dark Mode</span>';
    btn.setAttribute('title', 'Switch to Light Mode');
    btn.classList.remove('is-light');
  }
}

// Global Tab Switcher Helper (used by CTA buttons & links)
function navigateToTab(targetId) {
  // Check if target requires instructor / admin passcode verification
  const isProtectedTab = (targetId === 'instructor-notes-panel' || targetId === 'faculty-panel');
  const isUnlocked = sessionStorage.getItem('mc103_faculty_pin') === 'Wholeworld';

  if (isProtectedTab && !isUnlocked) {
    window.pendingTargetTab = targetId;
    const modal = document.getElementById('facultyModal');
    if (modal) {
      modal.classList.add('active');
      const input = document.getElementById('facultyPasscodeInput');
      if (input) input.focus();
    }
    return;
  }

  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const panels = document.querySelectorAll('.tab-content-panel');

  tabButtons.forEach(b => {
    if (b.getAttribute('data-tab') === targetId) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  panels.forEach(p => {
    if (p.id === targetId) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- View Mode Engine (Interactive vs Readable) ---
let currentViewMode = localStorage.getItem('mc103_view_mode') || 'interactive';

function initViewMode() {
  applyViewMode(currentViewMode);
}

function switchConceptViewMode(mode) {
  currentViewMode = mode;
  localStorage.setItem('mc103_view_mode', mode);
  applyViewMode(mode);
}

function applyViewMode(mode) {
  const isReadable = mode === 'readable';
  document.body.classList.toggle('readable-mode', isReadable);

  const btnInteractive = document.getElementById('btnModeInteractive');
  const btnReadable = document.getElementById('btnModeReadable');

  if (btnInteractive && btnReadable) {
    if (isReadable) {
      btnInteractive.classList.remove('active');
      btnReadable.classList.add('active');
    } else {
      btnInteractive.classList.add('active');
      btnReadable.classList.remove('active');
    }
  }
}

// --- 2. Main Tab Navigation ---
function initTabs() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const panels = document.querySelectorAll('.tab-content-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      // Intercept protected tabs (Instructor Guide and Admin Panel)
      const isProtectedTab = (targetId === 'instructor-notes-panel' || targetId === 'faculty-panel');
      const isUnlocked = sessionStorage.getItem('mc103_faculty_pin') === 'Wholeworld';

      if (isProtectedTab && !isUnlocked) {
        window.pendingTargetTab = targetId;
        const modal = document.getElementById('facultyModal');
        if (modal) {
          modal.classList.add('active');
          const input = document.getElementById('facultyPasscodeInput');
          if (input) input.focus();
        }
        return;
      }

      tabButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// --- 3. Objectives & Outcomes ---
function initObjectivesAndOutcomes() {
  const objList = document.getElementById('objectivesList');
  const outList = document.getElementById('outcomesList');

  if (objList && COURSE_DATA.objectives) {
    objList.innerHTML = COURSE_DATA.objectives
      .map(obj => `<li style="margin-bottom: 6px;">${obj}</li>`)
      .join('');
  }

  if (outList && COURSE_DATA.outcomes) {
    outList.innerHTML = COURSE_DATA.outcomes
      .map(out => `<li style="margin-bottom: 6px;"><strong>${out}</strong></li>`)
      .join('');
  }
}

// --- 4. Syllabus Units & Filtering ---
function initSyllabusUnits() {
  const container = document.getElementById('unitsContainer');
  if (!container || !COURSE_DATA.units) return;

  renderUnits(COURSE_DATA.units);

  // Unit filter pill buttons
  const pills = document.querySelectorAll('.unit-pill-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterVal = pill.getAttribute('data-filter');
      if (filterVal === 'all') {
        renderUnits(COURSE_DATA.units);
      } else {
        const filtered = COURSE_DATA.units.filter(u => u.unitNumber === Number(filterVal));
        renderUnits(filtered);
      }
    });
  });

  // Search input filter
  const searchInput = document.getElementById('unitSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderUnits(COURSE_DATA.units);
        return;
      }

      const filtered = COURSE_DATA.units.filter(u => {
        const inTitle = u.title.toLowerCase().includes(q);
        const inSummary = u.summary.toLowerCase().includes(q);
        const inTopics = u.topics.some(t => t.name.toLowerCase().includes(q) || t.details.toLowerCase().includes(q));
        return inTitle || inSummary || inTopics;
      });

      renderUnits(filtered);
    });
  }
}

function renderUnits(units) {
  const container = document.getElementById('unitsContainer');
  const completedUnits = JSON.parse(localStorage.getItem('mc103_completed_units') || '[]');

  if (units.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-md);">
        <h3>No matching topics found</h3>
        <p>Try searching for HTML, DOM, Node, Express, Hooks, or JWT.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = units.map(unit => {
    const isCompleted = completedUnits.includes(unit.unitNumber);

    // Render Analogies Grid
    const analogiesHtml = unit.conceptualAnalogies ? `
      <h4 style="font-family: var(--font-heading); margin-bottom: 12px; color: #a5b4fc; font-size: 1.05rem;">
        💡 Core Conceptual Analogies (Concept Simplifiers):
      </h4>
      <div class="analogies-grid">
        ${unit.conceptualAnalogies.map(a => `
          <div class="analogy-card">
            <div class="analogy-title">
              <span>🎯</span>
              <span>${a.concept}: <strong>${a.analogy}</strong></span>
            </div>
            <div class="analogy-body">${a.explanation}</div>
          </div>
        `).join('')}
      </div>
    ` : '';

    // Render Unit Specific Interactive Simulator
    let interactiveSimulatorHtml = '';
    if (unit.unitNumber === 1) {
      interactiveSimulatorHtml = `
        <div class="boxmodel-widget-container">
          <h4 style="color: #38bdf8; margin-bottom: 6px;">🎮 Interactive CSS Box Model Live Playground</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
            Drag the sliders below to demonstrate how Margin, Border, and Padding dynamically change the element's footprint on the screen!
          </p>
          <div class="boxmodel-controls">
            <div class="slider-group">
              <label>Margin: <span id="valMargin">24</span>px</label>
              <input type="range" id="sliderMargin" min="0" max="45" value="24" oninput="updateBoxModel()">
            </div>
            <div class="slider-group">
              <label>Border: <span id="valBorder">4</span>px</label>
              <input type="range" id="sliderBorder" min="1" max="15" value="4" oninput="updateBoxModel()">
            </div>
            <div class="slider-group">
              <label>Padding: <span id="valPadding">20</span>px</label>
              <input type="range" id="sliderPadding" min="0" max="40" value="20" oninput="updateBoxModel()">
            </div>
            <div class="slider-group">
              <label>Content Width: <span id="valWidth">160</span>px</label>
              <input type="range" id="sliderWidth" min="100" max="250" value="160" oninput="updateBoxModel()">
            </div>
          </div>
          <div class="boxmodel-visual-stage">
            <div class="bm-margin-box" id="bmMargin">
              <div style="position: absolute; top: 4px; left: 8px; font-size: 0.7rem; color: #f59e0b; font-weight: bold;">MARGIN (Outer Empty Space)</div>
              <div class="bm-border-box" id="bmBorder">
                <div style="position: absolute; top: 2px; left: 6px; font-size: 0.68rem; color: #ef4444; font-weight: bold;">BORDER</div>
                <div class="bm-padding-box" id="bmPadding">
                  <div style="position: absolute; top: 2px; left: 6px; font-size: 0.68rem; color: #10b981; font-weight: bold;">PADDING (Inner Breathing Room)</div>
                  <div class="bm-content-box" id="bmContent">CONTENT</div>
                </div>
              </div>
            </div>
          </div>
          <div id="boxModelMath" style="margin-top: 14px; font-size: 0.85rem; color: var(--text-accent); text-align: center; font-family: var(--font-code);">
            Total Rendered Width = 160 + (2×20 padding) + (2×4 border) + (2×24 margin) = 256px
          </div>
        </div>
      `;
    } else if (unit.unitNumber === 2) {
      interactiveSimulatorHtml = `
        <div class="bubbling-stage">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <h4 style="color: #eab308;">🌊 Interactive DOM Event Bubbling Simulator</h4>
            <button class="btn-teach-code" onclick="simulateEventBubbling()">▶ Trigger Click on Button</button>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">
            Watch the click event trigger on the innermost &lt;button&gt; and bubble upward step-by-step through its parent containers!
          </p>
          <div class="bubble-node" id="bubbleDoc">
            <strong>&lt;document&gt;</strong> (Window Root)
            <div class="bubble-node" id="bubbleBody" style="margin-top: 6px;">
              <strong>&lt;body&gt;</strong>
              <div class="bubble-node" id="bubbleDiv" style="margin-top: 6px;">
                <strong>&lt;div class="card"&gt;</strong> (Parent Container)
                <div class="bubble-node" id="bubbleBtn" style="margin-top: 6px; background: rgba(234, 179, 8, 0.2); border-color: #eab308; cursor: pointer;" onclick="simulateEventBubbling()">
                  🎯 <strong>&lt;button&gt; (Click Me to Bubble!)</strong>
                </div>
              </div>
            </div>
          </div>
          <div id="bubbleLogs" style="font-family: var(--font-code); font-size: 0.82rem; color: #fef08a; min-height: 24px; padding: 6px 10px; background: #141c2c; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 4px;">
            Click above to watch the event bubble up.
          </div>
        </div>
      `;
    } else if (unit.unitNumber === 3) {
      interactiveSimulatorHtml = `
        <div class="eventloop-stage">
          <div>
            <h4 style="color: #22c55e; margin-bottom: 8px;">⚙️ Node.js Event Loop Step-Through Simulator</h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 14px;">
              Enqueue asynchronous operations and watch the Node.js event loop prioritize Microtasks (Promises) before Macrotasks (Timers)!
            </p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn-teach-code" onclick="pushToEventLoop('sync')">+ Sync Code</button>
              <button class="btn-teach-code" onclick="pushToEventLoop('promise')">+ Promise.resolve()</button>
              <button class="btn-teach-code" onclick="pushToEventLoop('timer')">+ setTimeout()</button>
              <button class="btn-run-code" style="padding: 4px 12px; font-size: 0.78rem;" onclick="runEventLoopStep()">▶ Run Next Phase</button>
            </div>
          </div>
          <div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div>
                <span style="font-size: 0.75rem; color: #818cf8; font-weight: 700;">CALL STACK</span>
                <div class="queue-stack-box" id="elCallStack">Empty</div>
              </div>
              <div>
                <span style="font-size: 0.75rem; color: #34d399; font-weight: 700;">MICROTASK QUEUE</span>
                <div class="queue-stack-box" id="elMicroQueue">Empty</div>
              </div>
            </div>
            <div style="margin-top: 8px;">
              <span style="font-size: 0.75rem; color: #f59e0b; font-weight: 700;">TASK QUEUE (Macrotasks)</span>
              <div class="queue-stack-box" id="elMacroQueue" style="min-height: 48px;">Empty</div>
            </div>
          </div>
        </div>
      `;
    } else if (unit.unitNumber === 4) {
      interactiveSimulatorHtml = `
        <div class="vdom-stage">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div>
              <h4 style="color: #06b6d4; margin-bottom: 4px;">⚛️ React Virtual DOM vs Real DOM Diffing</h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary);">
                Click 'Trigger State Update' to see React calculate the diff on the virtual tree in memory and update ONLY the single target node in the real browser DOM!
              </p>
            </div>
            <button class="btn-run-code" style="background: #06b6d4; color: #000;" onclick="triggerVdomDiff()">⚡ Trigger State Update</button>
          </div>
          <div class="vdom-tree-row">
            <div class="vdom-tree-panel">
              <h5 style="color: #38bdf8; margin-bottom: 8px;">1. Virtual DOM (In-Memory Tree)</h5>
              <div class="tree-node-visual">&lt;App /&gt;</div><br>
              <div class="tree-node-visual">&lt;Header /&gt;</div>
              <div class="tree-node-visual" id="vdomTarget">&lt;Counter count={0} /&gt;</div>
            </div>
            <div class="vdom-tree-panel">
              <h5 style="color: #10b981; margin-bottom: 8px;">2. Real Browser DOM (Minimal Paint)</h5>
              <div class="tree-node-visual">&lt;div id="root"&gt;</div><br>
              <div class="tree-node-visual">&lt;h1&gt;Header&lt;/h1&gt;</div>
              <div class="tree-node-visual" id="realDomTarget">&lt;span&gt;0&lt;/span&gt;</div>
            </div>
          </div>
          <div id="vdomLog" style="font-size: 0.82rem; color: #a5f3fc; text-align: center; margin-top: 10px;">
            Status: Virtual DOM and Real DOM are currently in sync.
          </div>
        </div>
      `;
    }

    return `
      <div class="unit-card ${unit.unitNumber === 1 ? 'open' : ''}" id="unitCard-${unit.unitNumber}">
        <!-- Unit Header -->
        <div class="unit-header" onclick="toggleUnitAccordion(${unit.unitNumber})">
          <div class="unit-header-info">
            <div class="unit-number-tag" style="background: ${unit.badgeColor};">
              U${unit.unitNumber}
            </div>
            <div class="unit-title-wrap">
              <h3>Unit ${unit.unitNumber}: ${unit.title}</h3>
              <div class="unit-badge-row">
                <span class="badge-hours">⏱️ ${unit.hours} Lecture Hours</span>
                <span class="badge-hours">4 Hours/Week Course</span>
                <span class="badge-hours">${unit.topics.length} Key Subtopics</span>
              </div>
            </div>
          </div>

          <div class="unit-actions-right" onclick="event.stopPropagation()">
            <button class="btn-teach-code" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.3);" onclick="launchLiveStudioForUnit(${unit.unitNumber})">
              📽️ Open in Live Studio
            </button>
            <button class="btn-unit-complete ${isCompleted ? 'completed' : ''}" 
                    id="completeBtn-${unit.unitNumber}" 
                    onclick="toggleCompleteUnit(${unit.unitNumber})">
              ${isCompleted ? '✓ Completed' : '○ Mark as Read'}
            </button>
            <span class="toggle-arrow" onclick="toggleUnitAccordion(${unit.unitNumber})">▼</span>
          </div>
        </div>

        <!-- Unit Content Body -->
        <div class="unit-body">
          
          <!-- High-Resolution Infographic Diagram -->
          ${unit.diagramImage ? `
            <div class="unit-infographic-wrap">
              <div class="unit-infographic-viewport">
                <img src="${unit.diagramImage}" alt="${unit.title} Architectural Diagram" class="unit-infographic-img" onclick="openImageLightbox('${unit.diagramImage}')" title="Click to view full image in high resolution">
              </div>
              <div class="unit-infographic-caption">
                <span>📊 <strong>${unit.diagramCaption || 'High-Resolution Architecture Infographic'}</strong></span>
                <button class="btn-copy-code" style="color: var(--primary); font-weight: 600;" onclick="openImageLightbox('${unit.diagramImage}')">
                  🔍 Zoom Fullscreen Lightbox
                </button>
              </div>
            </div>
          ` : ''}

          <div class="unit-summary-box">
            <strong>Unit Overview:</strong> ${unit.summary}
          </div>

          <!-- Whiteboard Analogies -->
          ${analogiesHtml}

          <!-- Unit Simulator Playground -->
          ${interactiveSimulatorHtml}

          <!-- Topics Rows List with Teaching Guides and Code Triggers -->
          <h4 style="font-family: var(--font-heading); margin-bottom: 14px; color: var(--text-primary); font-size: 1.1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <span>📖 Detailed Lecture Sub-Topics (${unit.hours} Hours):</span>
            <span style="font-size: 0.78rem; font-weight: 500; color: var(--text-muted); background: var(--bg-secondary); padding: 4px 10px; border-radius: var(--radius-full); border: 1px solid var(--border-color);">
              Row Layout: Theory on Left • Concept MCQs on Right
            </span>
          </h4>
          <div class="topics-list topics-row-layout">
            ${unit.topics.map((t, tIdx) => `
              <div class="topic-item-card topic-row-card" id="topicRow-${unit.unitNumber}-${tIdx}">
                <!-- Left: Theory Notes, Real-world Example (eg) & Runnable Code Block -->
                <div class="topic-row-left">
                  <div class="topic-header-row">
                    <h4>
                      <span class="topic-badge-idx" style="background: ${unit.badgeColor};">${unit.unitNumber}.${tIdx + 1}</span>
                      <span>${t.name}</span>
                    </h4>
                    ${t.liveCode ? `
                      <button class="btn-teach-code" onclick="loadTopicIntoSandbox(${unit.unitNumber}, ${tIdx})">
                        ⚡ Run in Sandbox
                      </button>
                    ` : ''}
                  </div>

                  <!-- 📌 Notes -->
                  <div class="concept-notes-box">
                    <p class="topic-details-text">${t.details}</p>
                  </div>

                  <!-- 🌍 Real-World Example (eg) -->
                  ${t.realWorldExample ? `
                    <div class="concept-example-box">
                      <div class="concept-section-title">
                        <span class="concept-badge-icon">🌍</span>
                        <strong>Real-World Everyday Analogy:</strong>
                      </div>
                      <p class="concept-example-text">${t.realWorldExample}</p>
                    </div>
                  ` : ''}

                  <!-- 📊 Architectural Concept Schematic Diagram -->
                  ${t.conceptImage ? `
                    <div class="concept-visual-viewport">
                      <div class="concept-visual-header">
                        <span class="cvh-badge">📊 CONCEPT ARCHITECTURE SCHEMATIC</span>
                        <button class="btn-copy-code" style="color: var(--primary); font-size: 0.76rem;" onclick="openImageLightbox('${t.conceptImage}')">
                          🔍 Fullscreen Zoom
                        </button>
                      </div>
                      <div class="concept-visual-frame" onclick="openImageLightbox('${t.conceptImage}')" title="Click to view full-resolution schematic diagram">
                        <img src="${t.conceptImage}" alt="${t.name} Schematic" class="concept-visual-img">
                      </div>
                      ${t.conceptImageCaption ? `
                        <div class="concept-visual-caption">
                          <span>💡 <strong>Key Flow:</strong> ${t.conceptImageCaption}</span>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}

                  <!-- 💻 Runnable Live Code Block -->
                  ${t.liveCode ? `
                    <div class="concept-code-box">
                      <div class="concept-code-header">
                        <div class="code-title-wrap">
                          <span class="code-lang-tag">JavaScript / HTML</span>
                          <span class="code-filename">${t.name.toLowerCase().replace(/[^a-z0-9]/g, '_').slice(0, 24)}.js</span>
                        </div>
                        <div class="code-actions">
                          <button class="btn-copy-code" onclick="copyTopicCode(${unit.unitNumber}, ${tIdx})">📋 Copy</button>
                          <button class="btn-run-code-mini" onclick="loadTopicIntoSandbox(${unit.unitNumber}, ${tIdx})">⚡ Run in Sandbox</button>
                        </div>
                      </div>
                      <pre class="concept-code-pre"><code>${escapeHtml(t.liveCode)}</code></pre>
                    </div>
                  ` : ''}
                </div>

                <!-- Right: Interactive Concept MCQs -->
                <div class="topic-row-right">
                  ${t.conceptMcqs && t.conceptMcqs.length ? `
                    <div class="concept-mcq-section">
                      <div class="concept-mcq-badge">
                        <span class="cmcq-tag">🎯 Concept Check (${t.conceptMcqs.length} MCQs)</span>
                        <span class="cmcq-subtag">Instant Verification</span>
                      </div>
                      <div class="concept-mcq-list">
                        ${t.conceptMcqs.map((mcq, mIdx) => `
                          <div class="concept-mcq-item" id="card-${mcq.id}">
                            <div class="cmcq-question">
                              <span class="cmcq-index">Q${mIdx + 1}.</span> ${mcq.question}
                            </div>
                            <div class="cmcq-options-grid">
                              ${mcq.options.map((opt, oIdx) => `
                                <button class="cmcq-option-btn" 
                                        id="btn-${mcq.id}-${oIdx}"
                                        onclick="handleConceptMcqSelect('${mcq.id}', ${oIdx}, ${mcq.correct})">
                                  <span class="cmcq-opt-letter">${['A', 'B', 'C', 'D'][oIdx]}</span>
                                  <span class="cmcq-opt-label">${opt}</span>
                                </button>
                              `).join('')}
                            </div>
                            <div class="cmcq-feedback-box" id="feedback-${mcq.id}" style="display: none;">
                              <div class="cmcq-feedback-banner"></div>
                              <div class="cmcq-explanation">💡 <strong>Concept Explanation:</strong> ${mcq.explanation}</div>
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

          <!-- High-Yield Unit Code Snippet -->
          <div class="code-snippet-box">
            <div class="code-header">
              <span class="code-header-title">
                💻 ${unit.codeExample.title} (${unit.codeExample.language.toUpperCase()})
              </span>
              <div style="display: flex; gap: 8px;">
                <button class="btn-copy-code" onclick="copySnippetText(${unit.unitNumber})">
                  📋 Copy Code
                </button>
                <button class="btn-copy-code" style="color: var(--accent-emerald);" onclick="sendToSandbox(${unit.unitNumber})">
                  ▶ Open in Sandbox
                </button>
              </div>
            </div>
            <pre class="code-content-pre" id="snippetPre-${unit.unitNumber}"><code>${escapeHtml(unit.codeExample.code)}</code></pre>
          </div>

          <!-- University Exam Questions Bank -->
          <div class="exam-questions-section">
            <div class="exam-questions-title">
              <span>🎯 Expected University Exam Questions (IA 30 / ESE 70)</span>
            </div>
            <div class="questions-grid">
              ${unit.examQuestions.map(eq => `
                <div class="question-row">
                  <span class="marks-badge ${eq.type.includes('2') ? 'badge-2marks' : 'badge-10marks'}">
                    ${eq.type}
                  </span>
                  <div class="question-text">${eq.q}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleUnitAccordion(unitNum) {
  const card = document.getElementById(`unitCard-${unitNum}`);
  if (card) card.classList.toggle('open');
}

function copySnippetText(unitNum) {
  const unit = COURSE_DATA.units.find(u => u.unitNumber === unitNum);
  if (unit && unit.codeExample) {
    navigator.clipboard.writeText(unit.codeExample.code);
    alert(`Code for Unit ${unitNum} copied to clipboard!`);
  }
}

function sendToSandbox(unitNum) {
  const unit = COURSE_DATA.units.find(u => u.unitNumber === unitNum);
  if (unit && unit.codeExample) {
    // Switch to Sandbox Tab
    const sandboxTabBtn = document.querySelector('[data-tab="sandbox-panel"]');
    if (sandboxTabBtn) sandboxTabBtn.click();

    const editor = document.getElementById('codeEditorInput');
    if (editor) {
      editor.value = unit.codeExample.code;
      runSandboxCode();
    }
  }
}

function loadTopicIntoSandbox(unitNum, topicIdx) {
  const unit = COURSE_DATA.units.find(u => u.unitNumber === unitNum);
  if (unit && unit.topics && unit.topics[topicIdx] && unit.topics[topicIdx].liveCode) {
    const sandboxTabBtn = document.querySelector('[data-tab="sandbox-panel"]');
    if (sandboxTabBtn) sandboxTabBtn.click();

    const editor = document.getElementById('codeEditorInput');
    if (editor) {
      editor.value = unit.topics[topicIdx].liveCode;
      runSandboxCode();
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  }
}

function copyTopicCode(unitNum, topicIdx) {
  const unit = COURSE_DATA.units.find(u => u.unitNumber === unitNum);
  if (unit && unit.topics && unit.topics[topicIdx] && unit.topics[topicIdx].liveCode) {
    navigator.clipboard.writeText(unit.topics[topicIdx].liveCode);
    alert(`Code for "${unit.topics[topicIdx].name}" copied to clipboard!`);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- Instructor Guide Desk Engine ---
function initInstructorNotes() {
  renderInstructorNotes('all');
}

function filterInstructorNotes(filterVal) {
  const pills = document.querySelectorAll('.inst-pill-btn');
  pills.forEach(p => {
    if (p.getAttribute('data-inst-filter') == filterVal) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
  renderInstructorNotes(filterVal);
}

function renderInstructorNotes(filterVal) {
  const container = document.getElementById('instructorNotesContainer');
  if (!container || !COURSE_DATA.units) return;

  let units = COURSE_DATA.units;
  if (filterVal !== 'all') {
    units = COURSE_DATA.units.filter(u => u.unitNumber === Number(filterVal));
  }

  container.innerHTML = units.map(unit => `
    <div class="instructor-unit-group" id="instUnit-${unit.unitNumber}">
      <div class="iug-header" style="border-left: 4px solid ${unit.badgeColor};">
        <div class="iug-title-wrap">
          <span class="iug-badge" style="background: ${unit.badgeColor};">Unit ${unit.unitNumber}</span>
          <h3>${unit.title} (${unit.hours} Hours)</h3>
        </div>
        <p class="iug-summary">${unit.summary}</p>
      </div>

      <!-- Unit Conceptual Analogies -->
      ${unit.conceptualAnalogies ? `
        <div class="iug-analogies-card">
          <h4>💡 Whiteboard Teaching Analogies (Unit Level):</h4>
          <div class="analogies-grid">
            ${unit.conceptualAnalogies.map(a => `
              <div class="analogy-card">
                <div class="analogy-title"><span>🎯</span> <strong>${a.concept}</strong>: ${a.analogy}</div>
                <div class="analogy-body">${a.explanation}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Topics Instructor Cards -->
      <div class="instructor-topics-grid">
        ${unit.topics.map((t, idx) => `
          <div class="inst-topic-card">
            <div class="itc-header">
              <span class="itc-num" style="background: ${unit.badgeColor};">${unit.unitNumber}.${idx + 1}</span>
              <h4>${t.name}</h4>
            </div>

            <!-- Teaching Guidance & Points -->
            ${t.teachingPoints && t.teachingPoints.length ? `
              <div class="itc-section">
                <h5>👨‍🏫 Core Teaching Points & Lecture Breakdown:</h5>
                <ul class="itc-points-list">
                  ${t.teachingPoints.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Real-World Analogy for Instructor -->
            ${t.realWorldExample ? `
              <div class="itc-section analogy">
                <h5>🌍 Everyday Classroom Analogy:</h5>
                <p>${t.realWorldExample}</p>
              </div>
            ` : ''}

            <!-- Common Student Pitfalls & Debugging Traps -->
            <div class="itc-section pitfalls">
              <h5>⚠️ Common Student Misunderstandings & Debugging Traps:</h5>
              <p>${getCommonStudentPitfalls(unit.unitNumber, idx, t.name)}</p>
            </div>

            <!-- Viva / Technical Interview Questions -->
            <div class="itc-section viva">
              <h5>🎤 Recommended Oral Viva / Interview Questions:</h5>
              <div class="itc-viva-box">
                ${getVivaQuestionsForTopic(unit.unitNumber, idx, t.name)}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function getCommonStudentPitfalls(unitNum, topicIdx, topicName) {
  const pitfallsMap = {
    "1-0": "Students often confuse the Internet (networking infrastructure) with the Web (an HTTP service operating on top of the Internet). Emphasize that email, SSH, and gaming also run on the Internet without using HTTP.",
    "1-1": "Forgetting that DNS caching occurs at multiple layers (Browser, OS, Router, ISP). When changing DNS records, propagation delay can cause confusion.",
    "1-2": "Confusing HTTP status code families (e.g., treating 401 Unauthorized vs 403 Forbidden as identical). Explain 401 is 'who are you?' while 403 is 'you are not allowed here'.",
    "1-3": "Assuming Web Server (Nginx) and Application Server (Express) do the same thing. Clarify static asset delivery vs dynamic computation.",
    "1-4": "Using generic <div> tags instead of semantic <header>, <main>, <article>, and <nav>, damaging accessibility and SEO.",
    "1-5": "Forgetting the 'name' attribute on form inputs, causing form payloads to drop fields during submission, and omitting input validation.",
    "1-6": "Confusing Margin (outer push) with Padding (inner breathing room), and not applying box-sizing: border-box globally.",
    "1-7": "Using fixed pixel heights in responsive layouts which cause text to clip on smaller screens; encourage flex-wrap and min-height.",
    "2-0": "Confusing 'var' function-scoping with 'let' and 'const' block-scoping. Show how 'var' leaks out of for-loops.",
    "2-1": "Trying to mutate arrays with .map() instead of returning a new array, or misusing .reduce() without an initial accumulator value.",
    "2-2": "Misunderstanding object references in memory: doing 'const copy = original' copies the reference pointer, not the cloned object.",
    "2-3": "Struggling with closure variable retention in asynchronous callbacks and loops.",
    "2-4": "Accessing DOM nodes before the HTML DOM has parsed (running script without DOMContentLoaded or defer).",
    "2-5": "Not knowing that event.target refers to the actual clicked innermost element while event.currentTarget refers to the element with the event listener.",
    "2-6": "Calling JSON.parse() on undefined or invalid JSON strings without a try/catch block, crashing the script.",
    "3-0": "Thinking Node.js is a separate programming language rather than a V8 runtime environment running outside the browser.",
    "3-1": "Trying to use browser-specific globals like window, document, or localStorage inside Node.js scripts.",
    "3-2": "Executing heavy CPU calculations on the main thread, blocking the single-threaded Node.js event loop.",
    "3-3": "Falling into 'Callback Hell' and unhandled Promise rejections; forgetting 'await' before async function calls.",
    "3-4": "Failing to set the Content-Type header on res.writeHead(), causing browsers to download HTML files as raw text.",
    "3-5": "Mixing up package.json dependencies (production) with devDependencies (build tools like nodemon).",
    "4-0": "Believing the Virtual DOM directly updates the browser canvas; explain that it's a lightweight JavaScript tree in memory.",
    "4-1": "Directly mutating React state like 'state.count = 5' instead of calling the setter function 'setCount(5)'.",
    "4-2": "Creating infinite re-render loops by omitting the dependency array in useEffect().",
    "4-3": "Treating props as mutable within child components instead of one-way top-down immutable data flow.",
    "4-4": "Creating uncontrolled forms without value and onChange props, leading to desynced UI and state.",
    "4-5": "Forgetting that Axios automatically parses JSON while the native fetch() API requires an extra .json() step.",
    "5-0": "Calling next() multiple times in middleware or sending res.json() after next(), causing 'Cannot set headers after they are sent'.",
    "5-1": "Storing JWT secrets in frontend code or Git repos instead of server-side environment variables (.env).",
    "5-2": "Forgetting that MongoDB ObjectIds are objects and not primitive strings when comparing with strict equality (===).",
    "5-3": "Encountering CORS policy errors because Express has not enabled cors() middleware for the React origin.",
    "5-4": "Hardcoding localhost URLs in React API service files before deploying to production cloud platforms."
  };
  const key = `${unitNum}-${topicIdx}`;
  return pitfallsMap[key] || "Students frequently overlook asynchronous timing and error-handling try/catch blocks in this topic. Emphasize console logging and step-through debugging.";
}

function getVivaQuestionsForTopic(unitNum, topicIdx, topicName) {
  const vivaMap = {
    "1-0": "<strong>Q:</strong> What is packet switching?<br><strong>Ans:</strong> A communication method where messages are broken into discrete packets that travel dynamically across networks and reassemble at the destination.<br><br><strong>Q:</strong> Why is the Web not the Internet?<br><strong>Ans:</strong> The Internet is the network infrastructure; the Web is an HTTP-based service running on that infrastructure.",
    "1-1": "<strong>Q:</strong> Why do we need DNS?<br><strong>Ans:</strong> Humans remember domain names (google.com), while routers and computers route traffic using numeric IP addresses (142.250.190.46).<br><br><strong>Q:</strong> What is the difference between IPv4 and IPv6?<br><strong>Ans:</strong> IPv4 uses 32 bits (~4.3B addresses), while IPv6 uses 128 bits providing virtually limitless addresses.",
    "1-2": "<strong>Q:</strong> What is the difference between HTTP GET and POST?<br><strong>Ans:</strong> GET requests data via URL query parameters and should be idempotent; POST submits data inside the request body and creates resources.",
    "1-6": "<strong>Q:</strong> What is the difference between margin and padding?<br><strong>Ans:</strong> Padding is space inside the border around content; margin is space outside the border separating elements from neighbors.<br><br><strong>Q:</strong> What does box-sizing: border-box do?<br><strong>Ans:</strong> It includes padding and border within the declared width/height.",
    "2-0": "<strong>Q:</strong> What is variable hoisting in JavaScript?<br><strong>Ans:</strong> Variable declarations are moved to the top of their scope during compilation. 'var' is hoisted as undefined; 'let'/'const' reside in the Temporal Dead Zone.",
    "2-3": "<strong>Q:</strong> What is a Closure in JavaScript?<br><strong>Ans:</strong> A function bundled together with references to its surrounding lexical environment, allowing it to remember outer variables even after the outer function has returned.",
    "3-0": "<strong>Q:</strong> Why is Node.js fast if it is single-threaded?<br><strong>Ans:</strong> Node uses an asynchronous, non-blocking event-driven architecture powered by libuv, offloading I/O operations to OS worker threads.",
    "3-2": "<strong>Q:</strong> What is the Event Loop in Node.js?<br><strong>Ans:</strong> A continuous loop coordinating the execution of synchronous call stack tasks, microtask promise queues, and macrotask timer/I/O callbacks.",
    "4-0": "<strong>Q:</strong> What is the Virtual DOM in React?<br><strong>Ans:</strong> A lightweight in-memory representation of the real DOM. React calculates differences (diffing) and batches minimal updates to the real DOM.",
    "4-1": "<strong>Q:</strong> Why must React state be immutable?<br><strong>Ans:</strong> React relies on shallow reference equality checks (Object.is) to detect changes and trigger efficient re-renders.",
    "5-0": "<strong>Q:</strong> What is Express middleware?<br><strong>Ans:</strong> Functions that execute during the request-response cycle with access to req, res, and next(). Used for auth, logging, parsing, and errors.",
    "5-1": "<strong>Q:</strong> What are the 3 parts of a JSON Web Token?<br><strong>Ans:</strong> Header (algorithm/type), Payload (claims/user data), and Signature (HMACSHA256 hash using a secret key)."
  };
  const key = `${unitNum}-${topicIdx}`;
  return vivaMap[key] || `<strong>Q:</strong> What is the primary role of ${topicName} in full-stack architecture?<br><strong>Ans:</strong> It provides structured separation of concerns, ensuring scalable, secure, and maintainable data flow between client and server layers.`;
}

// --- 5. Progress Tracker Persistence ---
function initProgressTracker() {
  updateProgressUI();
}

function toggleCompleteUnit(unitNum) {
  let completed = JSON.parse(localStorage.getItem('mc103_completed_units') || '[]');
  const idx = completed.indexOf(unitNum);

  if (idx > -1) {
    completed.splice(idx, 1);
  } else {
    completed.push(unitNum);
  }

  localStorage.setItem('mc103_completed_units', JSON.stringify(completed));

  const btn = document.getElementById(`completeBtn-${unitNum}`);
  if (btn) {
    if (completed.includes(unitNum)) {
      btn.classList.add('completed');
      btn.textContent = '✓ Completed';
    } else {
      btn.classList.remove('completed');
      btn.textContent = '○ Mark as Read';
    }
  }

  updateProgressUI();
}

function updateProgressUI() {
  const completed = JSON.parse(localStorage.getItem('mc103_completed_units') || '[]');
  const total = 5;
  const count = completed.length;
  const percent = Math.round((count / total) * 100);

  const statusText = document.getElementById('progressStatusText');
  const percentText = document.getElementById('progressPercentageText');
  const fillBar = document.getElementById('progressFillBar');

  if (statusText) statusText.textContent = `Your Syllabus Progress: ${count} of ${total} Units Completed (${count * 9} / 45 Hours)`;
  if (percentText) percentText.textContent = `${percent}%`;
  if (fillBar) fillBar.style.width = `${percent}%`;
}

// --- 6. Live Code Sandbox Engine ---
const SANDBOX_PRESETS = {
  'preset-unit1': `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background: #0f172a;
    color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    margin: 0;
  }
  .card {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 24px;
    width: 320px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  }
  h2 { margin: 0 0 8px 0; color: #38bdf8; font-size: 1.3rem; }
  p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; }
  .btn {
    background: #2563eb;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    margin-top: 12px;
  }
  .btn:hover { background: #1d4ed8; }
</style>
</head>
<body>
  <div class="card">
    <h2>MERN Full Stack (MERN-STACK)</h2>
    <p>Unit 1: Semantic HTML5 document with responsive CSS box model styling and custom buttons.</p>
    <button class="btn" onclick="alert('Unit 1 Interactive Card Clicked!')">Enroll in MERN Lecture</button>
  </div>
</body>
</html>`,

  'preset-unit2': `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background: #111827;
    color: #f3f4f6;
    font-family: system-ui, sans-serif;
    padding: 20px;
  }
  .input-box {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #4b5563;
    background: #1f2937;
    color: white;
    width: 220px;
  }
  .btn {
    background: #eab308;
    color: #000;
    font-weight: bold;
    border: none;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
  }
  ul { list-style: none; padding: 0; margin-top: 16px; }
  li {
    background: #1f2937;
    padding: 10px 14px;
    margin-bottom: 8px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
  }
</style>
</head>
<body>
  <h3>Unit 2: DOM Manipulation & JSON Data</h3>
  <input type="text" id="topicInput" class="input-box" placeholder="Add MERN topic...">
  <button class="btn" onclick="addTopic()">Add Topic</button>

  <ul id="topicList">
    <li><span>1. JavaScript Closures</span> <small>Unit 2</small></li>
    <li><span>2. Event Bubbling</span> <small>Unit 2</small></li>
  </ul>

  <script>
    function addTopic() {
      const input = document.getElementById('topicInput');
      const val = input.value.trim();
      if (!val) return;
      const list = document.getElementById('topicList');
      const li = document.createElement('li');
      li.innerHTML = '<span>' + val + '</span> <small>Added via DOM</small>';
      list.appendChild(li);
      input.value = '';
    }
  </script>
</body>
</html>`,

  'preset-unit3': `<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #0b1120; color: #f1f5f9; font-family: monospace; padding: 20px; }
  .log-box { background: #020617; border: 1px solid #1e293b; padding: 14px; border-radius: 8px; height: 180px; overflow-y: auto; color: #34d399; }
  .btn { background: #10b981; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-family: inherit; }
</style>
</head>
<body>
  <h3>Unit 3: Asynchronous Promises & Event Loop Simulation</h3>
  <button class="btn" onclick="simulateAsync()">Simulate Async Server I/O</button>
  <div class="log-box" id="logs" style="margin-top: 12px;">Click above to simulate asynchronous execution...</div>

  <script>
    function log(msg) {
      document.getElementById('logs').innerHTML += '<br>> ' + msg;
    }

    async function simulateAsync() {
      document.getElementById('logs').innerHTML = '> [1] Synchronous code started (Call Stack)';
      
      setTimeout(() => log('[4] setTimeout Callback executed (Task Queue)'), 500);

      const fakeDbFetch = new Promise(resolve => {
        setTimeout(() => resolve('[3] Promise resolved (Microtask Queue)'), 200);
      });

      const result = await fakeDbFetch;
      log(result);
      log('[2] Synchronous code finished');
    }
  </script>
</body>
</html>`,

  'preset-unit4': `<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #0f172a; color: #fff; font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 85vh; }
  .counter-card { background: #1e293b; border: 1px solid #38bdf8; border-radius: 12px; padding: 24px; text-align: center; width: 280px; }
  .count { font-size: 3rem; font-weight: bold; color: #38bdf8; margin: 12px 0; }
  .btn-grp { display: flex; gap: 8px; justify-content: center; }
  button { padding: 8px 14px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
  .inc { background: #06b6d4; color: #000; }
  .dec { background: #f43f5e; color: #fff; }
</style>
</head>
<body>
  <div class="counter-card">
    <h4>Unit 4: React State Concept</h4>
    <p style="font-size: 0.8rem; color: #94a3b8;">Demonstrating useState unidirectional flow</p>
    <div class="count" id="countVal">0</div>
    <div class="btn-grp">
      <button class="dec" onclick="update(-1)">- Decrement</button>
      <button class="inc" onclick="update(1)">+ Increment</button>
    </div>
  </div>

  <script>
    let state = 0;
    function update(delta) {
      state += delta;
      document.getElementById('countVal').innerText = state;
    }
  </script>
</body>
</html>`,

  'preset-unit5': `<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #0f172a; color: #e2e8f0; font-family: monospace; padding: 20px; }
  .api-card { background: #1e1b4b; border: 1px solid #6366f1; padding: 16px; border-radius: 8px; }
  button { background: #6366f1; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; }
  pre { background: #020617; padding: 12px; border-radius: 4px; color: #a5b4fc; }
</style>
</head>
<body>
  <div class="api-card">
    <h3>Unit 5: Fetch REST API with Authorization Bearer</h3>
    <button onclick="fetchCourseInfo()">Fetch /api/course-info</button>
    <pre id="output">Click above to dispatch HTTP GET request...</pre>
  </div>

  <script>
    async function fetchCourseInfo() {
      document.getElementById('output').innerText = 'Calling server endpoint...';
      try {
        const res = await fetch('/api/course-info');
        const data = await res.json();
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
      } catch (e) {
        document.getElementById('output').innerText = 'Note: Connect to Node server to fetch live data. Sample Response:\\n' + 
          JSON.stringify({ courseCode: "MERN-STACK", credits: 4, hours: 45 }, null, 2);
      }
    }
  </script>
</body>
</html>`
};

function initSandbox() {
  const select = document.getElementById('sandboxPresetSelect');
  const editor = document.getElementById('codeEditorInput');
  const runBtn = document.getElementById('runCodeBtn');
  const clearBtn = document.getElementById('clearSandboxBtn');

  if (editor && select) {
    editor.value = SANDBOX_PRESETS['preset-unit1'];
    runSandboxCode();

    select.addEventListener('change', () => {
      const selected = select.value;
      if (SANDBOX_PRESETS[selected]) {
        editor.value = SANDBOX_PRESETS[selected];
        runSandboxCode();
      }
    });
  }

  if (runBtn) {
    runBtn.addEventListener('click', runSandboxCode);
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const iframe = document.getElementById('sandboxPreviewFrame');
      if (iframe) iframe.srcdoc = '<body style="background:#fff; color:#999; font-family:sans-serif; text-align:center; padding-top:40px;">Canvas Cleared. Click Run Code to render.</body>';
    });
  }
}

function runSandboxCode() {
  const editor = document.getElementById('codeEditorInput');
  const iframe = document.getElementById('sandboxPreviewFrame');
  if (editor && iframe) {
    iframe.srcdoc = editor.value;
  }
}

// --- 7. MERN Architecture Visualizer ---
const MERN_TIER_DETAILS = {
  react: {
    title: "⚛ React.js (Client Presentation Tier)",
    unit: "Unit 4 (Frontend Development)",
    role: "Single Page Application (SPA) executing directly in the user's browser.",
    features: [
      "Virtual DOM diffing algorithm minimizes real DOM manipulation.",
      "Reusable functional components managing local state via useState and side-effects via useEffect.",
      "Sends asynchronous HTTP requests using axios.get() or fetch() with JSON payloads.",
      "Stores authentication tokens (JWT) in browser memory/localStorage for session state."
    ],
    code: `// React Frontend API Call
import axios from 'axios';
const token = localStorage.getItem('jwt_token');
const response = await axios.get('/api/students', {
  headers: { Authorization: \`Bearer \${token}\` }
});`
  },
  express: {
    title: "⚡ Express.js (Web Application Framework Tier)",
    unit: "Unit 5 (MERN Integration & Routing)",
    role: "Minimalist routing and middleware framework built atop Node.js.",
    features: [
      "Organizes routes (app.use('/api/students', studentRouter)).",
      "Executes middleware sequentially (CORS, express.json(), JWT verification).",
      "Parses incoming JSON requests and dispatches responses with status codes (200, 201, 401, 404).",
      "Protects private endpoints with custom authentication middleware."
    ],
    code: `// Express.js Route & Middleware
const express = require('express');
const router = express.Router();
router.get('/students', authenticateToken, async (req, res) => {
  const students = await StudentModel.find();
  res.json({ success: true, data: students });
});`
  },
  node: {
    title: "🟢 Node.js (Server Runtime Environment Tier)",
    unit: "Unit 3 (Node.js & Backend Foundations)",
    role: "V8-powered asynchronous, event-driven JavaScript server runtime.",
    features: [
      "Single-threaded event loop handles thousands of concurrent connections efficiently.",
      "Libuv thread pool delegates blocking file/network operations asynchronously.",
      "Core modules like 'http', 'fs', 'path', and 'events' provide system-level functionality.",
      "npm ecosystem manages over 2 million reusable packages."
    ],
    code: `// Node.js Event Loop non-blocking execution
const http = require('http');
const server = http.createServer((req, res) => {
  // Asynchronously handled on event loop
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: "Node.js V8 running" }));
});`
  },
  mongo: {
    title: "🍃 MongoDB & Mongoose (Data Persistence Tier)",
    unit: "Unit 5 (REST APIs & Databases)",
    role: "Document-oriented NoSQL database storing structured BSON collections.",
    features: [
      "JSON/BSON document model mirrors JavaScript object structures perfectly.",
      "Mongoose provides strongly-typed Schemas, field validations, and middleware hooks.",
      "Supports horizontal scalability through sharding and replica sets on MongoDB Atlas.",
      "Powerful aggregation pipeline for analytics and complex data transformations."
    ],
    code: `// Mongoose Schema & Model definition
const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  iaMarks: { type: Number, max: 30 }
});
module.exports = mongoose.model('Student', StudentSchema);`
  }
};

function initMernVisualizer() {
  const cards = document.querySelectorAll('.mern-node-card');
  const drawer = document.getElementById('mernDetailDrawer');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const tierKey = card.getAttribute('data-mern');
      renderMernDetail(tierKey);
    });
  });

  // Default to React
  renderMernDetail('react');
}

function renderMernDetail(key) {
  const drawer = document.getElementById('mernDetailDrawer');
  const data = MERN_TIER_DETAILS[key];
  if (!drawer || !data) return;

  drawer.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
      <div>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; color: var(--text-primary);">${data.title}</h3>
        <span class="course-code-badge" style="background: rgba(99, 102, 241, 0.15); color: #818cf8;">${data.unit}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted);">${data.role}</div>
    </div>

    <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
      ${data.features.map(f => `<li>${f}</li>`).join('')}
    </ul>

    <div class="code-snippet-box">
      <div class="code-header">
        <span class="code-header-title">⚡ Example Code Snippet</span>
      </div>
      <pre class="code-content-pre"><code>${escapeHtml(data.code)}</code></pre>
    </div>
  `;
}

// --- 8. Interactive JWT & REST API Lab ---
let currentJwtToken = '';

function initJwtLab() {
  const genBtn = document.getElementById('generateJwtBtn');
  const testBtn = document.getElementById('testProtectedApiBtn');
  const tamperBtn = document.getElementById('tamperJwtBtn');

  if (genBtn) {
    genBtn.addEventListener('click', async () => {
      const rollNo = document.getElementById('jwtRollNo').value.trim() || 'DEV-101';
      const studentName = document.getElementById('jwtStudentName').value.trim() || 'Riya Sen';
      const role = document.getElementById('jwtRole').value;

      try {
        const response = await fetch('/api/auth/generate-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rollNo, studentName, role })
        });

        const data = await response.json();
        if (data.success) {
          currentJwtToken = data.token;
          document.getElementById('jwtOutputArea').value = currentJwtToken;
          document.getElementById('jwtHeaderBox').textContent = JSON.stringify(data.anatomy.header, null, 2);
          document.getElementById('jwtPayloadBox').textContent = JSON.stringify(data.anatomy.payload, null, 2);
          document.getElementById('jwtSigBox').textContent = "HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload), 'mern-secret')";
          document.getElementById('apiResponseBox').textContent = "Status: 200 OK\nToken signed and ready to use in Authorization header.";
        }
      } catch (e) {
        // Fallback simulation if offline
        const fakeHeader = { alg: "HS256", typ: "JWT" };
        const fakePayload = { rollNo, name: studentName, role, course: "MERN-STACK", exp: Date.now() + 7200000 };
        currentJwtToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${btoa(JSON.stringify(fakePayload))}.s3cr3tH4shV3rif1ed`;
        document.getElementById('jwtOutputArea').value = currentJwtToken;
        document.getElementById('jwtHeaderBox').textContent = JSON.stringify(fakeHeader, null, 2);
        document.getElementById('jwtPayloadBox').textContent = JSON.stringify(fakePayload, null, 2);
        document.getElementById('jwtSigBox').textContent = "Calculated SHA-256 Signature verified.";
        document.getElementById('apiResponseBox').textContent = "Offline Simulator: JWT Generated successfully.";
      }
    });
  }

  if (testBtn) {
    testBtn.addEventListener('click', async () => {
      const responseBox = document.getElementById('apiResponseBox');
      const token = document.getElementById('jwtOutputArea').value.trim();

      if (!token) {
        responseBox.textContent = "Error: No JWT token present. Please generate a token first!";
        return;
      }

      responseBox.textContent = "Dispatching GET /api/auth/protected-profile with Authorization: Bearer <token>...";

      try {
        const res = await fetch('/api/auth/protected-profile', {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const result = await res.json();
        responseBox.textContent = `HTTP Status: ${res.status} ${res.statusText}\n\n` + JSON.stringify(result, null, 2);
      } catch (err) {
        responseBox.textContent = `Simulation response:\nHTTP 200 OK (Protected Access Granted)\nPayload: Validated Bearer Token for ${token.slice(0, 20)}...`;
      }
    });
  }

  if (tamperBtn) {
    tamperBtn.addEventListener('click', () => {
      const area = document.getElementById('jwtOutputArea');
      const token = area.value.trim();
      if (!token) {
        alert("Please generate a token first!");
        return;
      }
      // Alter a character in the payload to simulate tampering
      const parts = token.split('.');
      if (parts.length === 3) {
        parts[1] = parts[1].slice(0, -3) + "xyz";
        const tampered = parts.join('.');
        area.value = tampered;
        document.getElementById('apiResponseBox').textContent = 
          "⚠️ Token payload tampered! Click 'Call Protected Route' to witness cryptographic signature verification failure (403 Forbidden).";
      }
    });
  }
}

// --- 9. IA & ESE Quiz Engine ---
let quizAnswers = {};

function initQuizEngine() {
  const container = document.getElementById('quizQuestionsContainer');
  const resetBtn = document.getElementById('resetQuizBtn');
  if (!container || !COURSE_DATA.iaQuizQuestions) return;

  renderQuizQuestions();

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      quizAnswers = {};
      localStorage.removeItem('mc103_quiz_answers');
      renderQuizQuestions();
      updateQuizScoreDisplay();
    });
  }
}

function renderQuizQuestions() {
  const container = document.getElementById('quizQuestionsContainer');
  const saved = JSON.parse(localStorage.getItem('mc103_quiz_answers') || '{}');
  quizAnswers = saved;

  container.innerHTML = COURSE_DATA.iaQuizQuestions.map((q, idx) => {
    const selectedOption = quizAnswers[q.id];
    const isAnswered = selectedOption !== undefined;

    return `
      <div class="quiz-card" id="quizCard-${q.id}">
        <div class="quiz-q-num">Question ${idx + 1} of ${COURSE_DATA.iaQuizQuestions.length} • Unit ${q.unit} Assessment</div>
        <div class="quiz-question-text">${q.question}</div>

        <div class="quiz-options-list">
          ${q.options.map((opt, optIdx) => {
            let stateClass = '';
            if (isAnswered) {
              if (optIdx === q.correct) stateClass = 'selected-correct';
              else if (optIdx === selectedOption) stateClass = 'selected-wrong';
            }

            return `
              <button class="quiz-option-btn ${stateClass}" 
                      ${isAnswered ? 'disabled' : ''} 
                      onclick="selectQuizOption(${q.id}, ${optIdx}, ${q.correct})">
                <span style="font-weight: 700; width: 22px;">${String.fromCharCode(65 + optIdx)}.</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>

        <div class="quiz-explanation-box" id="explainBox-${q.id}" style="${isAnswered ? 'display: block;' : 'display: none;'}">
          <strong>💡 Concept Explanation:</strong> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');

  updateQuizScoreDisplay();
}

function selectQuizOption(questionId, selectedIdx, correctIdx) {
  quizAnswers[questionId] = selectedIdx;
  localStorage.setItem('mc103_quiz_answers', JSON.stringify(quizAnswers));

  const card = document.getElementById(`quizCard-${questionId}`);
  if (card) {
    const buttons = card.querySelectorAll('.quiz-option-btn');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('selected-correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('selected-wrong');
      }
    });

    const explain = document.getElementById(`explainBox-${questionId}`);
    if (explain) explain.style.display = 'block';
  }

  updateQuizScoreDisplay();
}

function updateQuizScoreDisplay() {
  const display = document.getElementById('quizScoreDisplay');
  if (!display) return;

  let correctCount = 0;
  COURSE_DATA.iaQuizQuestions.forEach(q => {
    if (quizAnswers[q.id] === q.correct) {
      correctCount++;
    }
  });

  const total = COURSE_DATA.iaQuizQuestions.length;
  // Scaled equivalent to 30 Marks IA
  const scaledIaMarks = Math.round((correctCount / total) * 30);
  display.textContent = `${correctCount} / ${total} (${scaledIaMarks}/30 IA Marks)`;
}

// --- Interactive Per-Concept MCQs Engine ---
function handleConceptMcqSelect(mcqId, selectedIdx, correctIdx) {
  const isCorrect = selectedIdx === correctIdx;
  
  // 1. Update main syllabus card
  const mainCard = document.getElementById(`card-${mcqId}`);
  if (mainCard) {
    const btns = mainCard.querySelectorAll('.cmcq-option-btn');
    btns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    const fb = document.getElementById(`feedback-${mcqId}`);
    if (fb) {
      const banner = fb.querySelector('.cmcq-feedback-banner');
      if (banner) {
        banner.innerHTML = isCorrect
          ? `<span style="color: #10b981; font-weight: 700;">✓ Correct! Brilliant understanding.</span>`
          : `<span style="color: #ef4444; font-weight: 700;">✗ Incorrect. Correct answer is Option ${['A', 'B', 'C', 'D'][correctIdx]}.</span>`;
      }
      fb.className = `cmcq-feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
      fb.style.display = 'block';
    }
  }

  // 2. Also update in Live Studio card if open
  const studioCard = document.getElementById(`studio-card-${mcqId}`);
  if (studioCard) {
    const btns = studioCard.querySelectorAll('.cmcq-option-btn');
    btns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    const fb = document.getElementById(`studio-fb-${mcqId}`);
    if (fb) {
      const banner = fb.querySelector('.cmcq-feedback-banner');
      if (banner) {
        banner.innerHTML = isCorrect
          ? `<span style="color: #10b981; font-weight: 700;">✓ Correct! Brilliant understanding.</span>`
          : `<span style="color: #ef4444; font-weight: 700;">✗ Incorrect. Correct answer is Option ${['A', 'B', 'C', 'D'][correctIdx]}.</span>`;
      }
      fb.className = `cmcq-feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
      fb.style.display = 'block';
    }
  }
}

function toggleStudioConceptMcq(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
}

// --- 10. Reference Books & E-Resources ---
function initLibrary() {
  const booksGrid = document.getElementById('booksGrid');
  const eResList = document.getElementById('eResourcesList');

  if (booksGrid && COURSE_DATA.referenceBooks) {
    booksGrid.innerHTML = COURSE_DATA.referenceBooks.map(book => `
      <div class="book-card" style="--book-accent: ${book.coverColor};">
        <div>
          <span class="book-tag">${book.tag} • ${book.category}</span>
          <h4 class="book-title">${book.title}</h4>
          <div class="book-author">By <strong>${book.author}</strong> (${book.publisher})</div>
          <p class="book-desc">${book.description}</p>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 10px;">
          Prescribed in MERN MERN-STACK Curriculum
        </div>
      </div>
    `).join('');
  }

  if (eResList && COURSE_DATA.eResources) {
    eResList.innerHTML = COURSE_DATA.eResources.map(res => `
      <a href="${res.url}" target="_blank" rel="noopener noreferrer" 
         style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 8px 14px; border-radius: var(--radius-sm); color: var(--text-primary); text-decoration: none; font-size: 0.85rem; display: flex; align-items: center; gap: 8px; transition: var(--transition);">
        <span>🔗</span>
        <span>${res.title} <small style="color: var(--text-accent);">(${res.platform})</small></span>
      </a>
    `).join('');
  }
}

// --- 11. Announcements Banner ---
async function loadAnnouncements() {
  const section = document.getElementById('announcementsSection');
  if (!section) return;

  try {
    const res = await fetch('/api/announcements');
    const data = await res.json();
    if (data.success && data.data.length > 0) {
      section.innerHTML = data.data.map(n => `
        <div class="notice-banner ${n.urgent ? 'urgent' : ''}">
          <div class="notice-icon">${n.urgent ? '🚨' : '📢'}</div>
          <div class="notice-content">
            <h4>${n.title}</h4>
            <p>${n.content}</p>
            <div class="notice-meta">Posted on ${n.date} by ${n.author}</div>
          </div>
        </div>
      `).join('');
    }
  } catch (err) {
    // Fallback notice
    section.innerHTML = `
      <div class="notice-banner">
        <div class="notice-icon">📢</div>
        <div class="notice-content">
          <h4>Full Stack MERN Lecture Notice</h4>
          <p>Lecture: 4 Hours/Week. Internal Assessment (30 Marks) & End Semester Exam (70 Marks). Review Unit 1 notes and code sandbox.</p>
          <div class="notice-meta">Posted by Full Stack Web Development Academy</div>
        </div>
      </div>
    `;
  }
}

// --- 12. Print / Save Study Guide ---
function initPrintButton() {
  const printBtn = document.getElementById('printNotesBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      // Expand all units before printing
      document.querySelectorAll('.unit-card').forEach(card => card.classList.add('open'));
      window.print();
    });
  }
}

// Utility: Escape HTML for pre tags
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- 13. Interactive Live Studio & Presentation Mode ---
let activeTeachUnit = 1;

function initLiveStudioMode() {
  const headerBtn = document.getElementById('headerClassroomBtn');
  const classroomNavTab = document.getElementById('classroomNavTab');
  const teachRunBtn = document.getElementById('teachRunCodeBtn');
  const teachResetBtn = document.getElementById('teachResetCodeBtn');

  // Header quick launcher
  if (headerBtn && classroomNavTab) {
    headerBtn.addEventListener('click', () => {
      classroomNavTab.click();
    });
  }

  // Unit selector pills inside live studio mode
  const selectorPills = document.querySelectorAll('.teach-unit-selector');
  selectorPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const uNum = Number(pill.getAttribute('data-unit'));
      launchLiveStudioForUnit(uNum);
    });
  });

  // Run live studio code
  if (teachRunBtn) {
    teachRunBtn.addEventListener('click', () => {
      const editor = document.getElementById('teachCodeEditor');
      const frame = document.getElementById('teachPreviewFrame');
      if (editor && frame) {
        frame.srcdoc = editor.value;
      }
    });
  }

  // Reset live studio code
  if (teachResetBtn) {
    teachResetBtn.addEventListener('click', () => {
      const unit = COURSE_DATA.units.find(u => u.unitNumber === activeTeachUnit);
      if (unit && unit.codeExample) {
        const editor = document.getElementById('teachCodeEditor');
        const frame = document.getElementById('teachPreviewFrame');
        if (editor && frame) {
          editor.value = unit.codeExample.code;
          frame.srcdoc = unit.codeExample.code;
        }
      }
    });
  }

  // Default initialize live studio mode for Unit 1
  updateLiveStudioView(1);
}

function launchLiveStudioForUnit(unitNum) {
  activeTeachUnit = unitNum;

  // Switch to live studio tab if not already on it
  const classroomNavTab = document.getElementById('classroomNavTab');
  if (classroomNavTab && !classroomNavTab.classList.contains('active')) {
    classroomNavTab.click();
  }

  // Update active pill
  const selectorPills = document.querySelectorAll('.teach-unit-selector');
  selectorPills.forEach(pill => {
    const pUnit = Number(pill.getAttribute('data-unit'));
    if (pUnit === unitNum) {
      pill.classList.add('active');
      pill.style.background = COURSE_DATA.units.find(u => u.unitNumber === unitNum)?.badgeColor || 'var(--primary)';
      pill.style.color = '#fff';
      pill.style.borderColor = pill.style.background;
    } else {
      pill.classList.remove('active');
      pill.style.background = 'var(--bg-secondary)';
      pill.style.color = 'var(--text-secondary)';
      pill.style.borderColor = 'var(--border-color)';
    }
  });

  updateLiveStudioView(unitNum);
}

function updateLiveStudioView(unitNum) {
  const unit = COURSE_DATA.units.find(u => u.unitNumber === unitNum);
  const pane = document.getElementById('teachConceptPane');
  const editor = document.getElementById('teachCodeEditor');
  const frame = document.getElementById('teachPreviewFrame');

  if (!unit || !pane) return;

  // Render left concept presentation pane
  pane.innerHTML = `
    <!-- Infographic Banner -->
    <div class="unit-infographic-wrap" style="margin-bottom: 0;">
      <img src="${unit.diagramImage}" alt="${unit.title}" class="unit-infographic-img" onclick="openImageLightbox('${unit.diagramImage}')">
      <div class="unit-infographic-caption">
        <span>📊 <strong>${unit.diagramCaption || 'Architecture Concept Visual'}</strong></span>
        <button class="btn-copy-code" style="color: var(--accent-cyan);" onclick="openImageLightbox('${unit.diagramImage}')">
          🔍 Click to Project Fullscreen
        </button>
      </div>
    </div>

    <!-- Unit Title & Overview -->
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px 20px;">
      <h3 style="font-family: var(--font-heading); color: ${unit.badgeColor}; margin-bottom: 6px;">
        Unit ${unit.unitNumber}: ${unit.title} (${unit.hours} Hours)
      </h3>
      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${unit.summary}</p>
    </div>

    <!-- Whiteboard Analogies for Live Studio -->
    ${unit.conceptualAnalogies ? `
      <div>
        <h4 style="font-family: var(--font-heading); color: #a5b4fc; font-size: 1rem; margin-bottom: 10px;">
          💡 Core Conceptual Analogies (Key Concept Explanations):
        </h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${unit.conceptualAnalogies.map(a => `
            <div class="analogy-card" style="padding: 14px 16px;">
              <div class="analogy-title" style="font-size: 0.88rem;">
                <span>🎯</span>
                <span>${a.concept}: <strong>${a.analogy}</strong></span>
              </div>
              <div class="analogy-body" style="font-size: 0.82rem;">${a.explanation}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Subtopics Quick-Load List & Live Concept Checks -->
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px 20px;">
      <h4 style="font-family: var(--font-heading); font-size: 1rem; color: var(--text-primary); margin-bottom: 12px;">
        ⚡ Sub-topics Live Code Presets & Concept Checks:
      </h4>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${unit.topics.map((t, idx) => `
          <div style="padding: 10px 14px; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
              <div style="font-size: 0.86rem; font-weight: 500; color: var(--text-primary);">
                <span style="color: ${unit.badgeColor}; margin-right: 6px; font-weight: 700;">${idx + 1}.</span> ${t.name}
              </div>
              <div style="display: flex; gap: 6px;">
                ${t.liveCode ? `
                  <button class="btn-teach-code" onclick="loadTopicIntoSandbox(${unit.unitNumber}, ${idx})">
                    ⚡ Load Code
                  </button>
                ` : ''}
                ${t.conceptMcqs && t.conceptMcqs.length ? `
                  <button class="btn-teach-code" style="background: rgba(99, 102, 241, 0.15); color: #818cf8; border-color: rgba(99, 102, 241, 0.3);" onclick="toggleStudioConceptMcq('studio-mcqs-${unit.unitNumber}-${idx}')">
                    🎯 ${t.conceptMcqs.length} MCQs
                  </button>
                ` : ''}
              </div>
            </div>
            ${t.conceptMcqs && t.conceptMcqs.length ? `
              <div id="studio-mcqs-${unit.unitNumber}-${idx}" style="display: none; margin-top: 12px; padding-top: 10px; border-top: 1px dashed var(--border-color);">
                <div class="concept-mcq-list">
                  ${t.conceptMcqs.map((mcq, mIdx) => `
                    <div class="concept-mcq-item" id="studio-card-${mcq.id}" style="padding: 10px 12px;">
                      <div class="cmcq-question" style="font-size: 0.84rem; margin-bottom: 8px;">
                        <span class="cmcq-index">Q${mIdx + 1}.</span> ${mcq.question}
                      </div>
                      <div class="cmcq-options-grid" style="grid-template-columns: 1fr;">
                        ${mcq.options.map((opt, oIdx) => `
                          <button class="cmcq-option-btn" 
                                  onclick="handleConceptMcqSelect('${mcq.id}', ${oIdx}, ${mcq.correct})">
                            <span class="cmcq-opt-letter">${['A', 'B', 'C', 'D'][oIdx]}</span>
                            <span class="cmcq-opt-label">${opt}</span>
                          </button>
                        `).join('')}
                      </div>
                      <div class="cmcq-feedback-box" id="studio-fb-${mcq.id}" style="display: none;">
                        <div class="cmcq-feedback-banner"></div>
                        <div class="cmcq-explanation">💡 <strong>Concept Explanation:</strong> ${mcq.explanation}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Set right scratchpad code
  if (editor && frame && unit.codeExample) {
    editor.value = unit.codeExample.code;
    frame.srcdoc = unit.codeExample.code;
  }
}

function loadTopicIntoSandbox(unitNum, topicIdx) {
  const unit = COURSE_DATA.units.find(u => u.unitNumber === unitNum);
  if (!unit || !unit.topics || !unit.topics[topicIdx]) return;
  const topic = unit.topics[topicIdx];
  if (!topic.liveCode) return;

  // Check if we are in live demonstrationsroom mode or sandbox mode
  const classroomTab = document.getElementById('classroom-panel');
  if (classroomTab && classroomTab.classList.contains('active')) {
    const editor = document.getElementById('teachCodeEditor');
    const frame = document.getElementById('teachPreviewFrame');
    if (editor && frame) {
      editor.value = topic.liveCode;
      frame.srcdoc = topic.liveCode;
      editor.focus();
    }
  } else {
    // Switch to Sandbox tab
    const sandboxTabBtn = document.querySelector('[data-tab="sandbox-panel"]');
    if (sandboxTabBtn) sandboxTabBtn.click();
    const editor = document.getElementById('codeEditorInput');
    const frame = document.getElementById('sandboxPreviewFrame');
    if (editor && frame) {
      editor.value = topic.liveCode;
      frame.srcdoc = topic.liveCode;
    }
  }
}

// --- 14. Lightbox Modal for Infographic Zoom ---
function openImageLightbox(src) {
  const modal = document.getElementById('imageLightboxModal');
  const img = document.getElementById('lightboxImg');
  if (modal && img) {
    img.src = src;
    modal.classList.add('active');
  }
}

function closeImageLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  if (modal) modal.classList.remove('active');
}

// --- 15. Unit 1: Interactive Box Model Math & Visualizer ---
function updateBoxModel() {
  const margin = Number(document.getElementById('sliderMargin')?.value || 24);
  const border = Number(document.getElementById('sliderBorder')?.value || 4);
  const padding = Number(document.getElementById('sliderPadding')?.value || 20);
  const width = Number(document.getElementById('sliderWidth')?.value || 160);

  const valMargin = document.getElementById('valMargin');
  const valBorder = document.getElementById('valBorder');
  const valPadding = document.getElementById('valPadding');
  const valWidth = document.getElementById('valWidth');

  if (valMargin) valMargin.textContent = margin;
  if (valBorder) valBorder.textContent = border;
  if (valPadding) valPadding.textContent = padding;
  if (valWidth) valWidth.textContent = width;

  const bmMargin = document.getElementById('bmMargin');
  const bmBorder = document.getElementById('bmBorder');
  const bmPadding = document.getElementById('bmPadding');
  const bmContent = document.getElementById('bmContent');
  const mathBox = document.getElementById('boxModelMath');

  if (bmMargin) bmMargin.style.padding = `${margin}px`;
  if (bmBorder) bmBorder.style.borderWidth = `${border}px`;
  if (bmPadding) bmPadding.style.padding = `${padding}px`;
  if (bmContent) bmContent.style.width = `${width}px`;

  const totalWidth = width + (2 * padding) + (2 * border) + (2 * margin);
  if (mathBox) {
    mathBox.innerHTML = `Total Rendered Width = ${width} + (2×${padding} padding) + (2×${border} border) + (2×${margin} margin) = <strong>${totalWidth}px</strong>`;
  }
}

// --- 16. Unit 2: Interactive Event Bubbling Ripple Animator ---
let isBubblingRunning = false;
function simulateEventBubbling() {
  if (isBubblingRunning) return;
  isBubblingRunning = true;

  const btn = document.getElementById('bubbleBtn');
  const div = document.getElementById('bubbleDiv');
  const body = document.getElementById('bubbleBody');
  const doc = document.getElementById('bubbleDoc');
  const log = document.getElementById('bubbleLogs');

  const nodes = [
    { el: btn, name: "<button> (Event Target Clicked)" },
    { el: div, name: "<div class='card'> (Parent 1 Listener)" },
    { el: body, name: "<body> (Ancestor 2 Listener)" },
    { el: doc, name: "<document> (Window Root Capturer)" }
  ];

  // Reset highlight
  nodes.forEach(n => n.el && n.el.classList.remove('highlight-bubble'));
  if (log) log.textContent = "1. Event initiated at <button>...";

  let i = 0;
  function step() {
    if (i > 0) nodes[i - 1].el.classList.remove('highlight-bubble');
    if (i < nodes.length) {
      nodes[i].el.classList.add('highlight-bubble');
      if (log) log.textContent = `Bubbling Wave [Phase ${i + 1} of 4]: ${nodes[i].name} received the event!`;
      i++;
      setTimeout(step, 450);
    } else {
      if (log) log.textContent = "✓ Bubbling Complete! Event propagated to the root of the DOM tree.";
      isBubblingRunning = false;
    }
  }
  step();
}

// --- 17. Unit 3: Node.js Event Loop Step-Through Simulator ---
let eventLoopQueues = {
  stack: [],
  micro: [],
  macro: []
};

function pushToEventLoop(type) {
  if (type === 'sync') {
    eventLoopQueues.stack.push(`console.log('Sync-${Date.now().toString().slice(-2)}')`);
  } else if (type === 'promise') {
    eventLoopQueues.micro.push(`Promise.then(cb-${Date.now().toString().slice(-2)})`);
  } else if (type === 'timer') {
    eventLoopQueues.macro.push(`setTimeout(cb-${Date.now().toString().slice(-2)})`);
  }
  renderEventLoopQueues();
}

function runEventLoopStep() {
  if (eventLoopQueues.stack.length > 0) {
    const popped = eventLoopQueues.stack.shift();
    alert(`Call Stack Executed: ${popped}`);
  } else if (eventLoopQueues.micro.length > 0) {
    const popped = eventLoopQueues.micro.shift();
    alert(`Microtask Executed (High Priority Promise): ${popped}`);
  } else if (eventLoopQueues.macro.length > 0) {
    const popped = eventLoopQueues.macro.shift();
    alert(`Macrotask Executed (Timer Callback): ${popped}`);
  } else {
    alert("Event loop is idle. Enqueue more tasks using the buttons!");
  }
  renderEventLoopQueues();
}

function renderEventLoopQueues() {
  const stackBox = document.getElementById('elCallStack');
  const microBox = document.getElementById('elMicroQueue');
  const macroBox = document.getElementById('elMacroQueue');

  if (stackBox) {
    stackBox.innerHTML = eventLoopQueues.stack.length
      ? eventLoopQueues.stack.map(s => `<div class="queue-item" style="border-color: #818cf8; color: #a5b4fc;">${s}</div>`).join('')
      : '<span style="color:#555;">Empty</span>';
  }
  if (microBox) {
    microBox.innerHTML = eventLoopQueues.micro.length
      ? eventLoopQueues.micro.map(s => `<div class="queue-item" style="border-color: #10b981; color: #6ee7b7;">${s}</div>`).join('')
      : '<span style="color:#555;">Empty</span>';
  }
  if (macroBox) {
    macroBox.innerHTML = eventLoopQueues.macro.length
      ? eventLoopQueues.macro.map(s => `<div class="queue-item" style="border-color: #f59e0b; color: #fde68a;">${s}</div>`).join('')
      : '<span style="color:#555;">Empty</span>';
  }
}

// --- 18. Unit 4: React Virtual DOM Diffing Simulator ---
let vdomCounter = 0;
function triggerVdomDiff() {
  vdomCounter++;
  const vdomNode = document.getElementById('vdomTarget');
  const realDomNode = document.getElementById('realDomTarget');
  const log = document.getElementById('vdomLog');

  if (vdomNode && realDomNode && log) {
    // 1. Virtual DOM updates in memory
    vdomNode.textContent = `<Counter count={${vdomCounter}} />`;
    vdomNode.classList.add('changed');
    log.innerHTML = `1. Virtual DOM tree mutated in memory (count: ${vdomCounter}). Diffing algorithm running...`;

    setTimeout(() => {
      // 2. Real DOM patched
      vdomNode.classList.remove('changed');
      realDomNode.textContent = `<span>${vdomCounter}</span>`;
      realDomNode.classList.add('dom-updated');
      log.innerHTML = `2. Diff calculated! <strong>Only 1 DOM leaf node updated in Real DOM</strong> without repainting the entire tree!`;

      setTimeout(() => {
        realDomNode.classList.remove('dom-updated');
      }, 800);
    }, 400);
  }
}
