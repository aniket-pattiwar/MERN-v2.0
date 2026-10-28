# 📜 Changelog

All notable changes to the **Full Stack Web Development with MERN** platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.4.0] - 2026-10-28

### Added
- **👨‍🏫 Master Instructor Lesson Delivery Playbook & Classroom Script in Admin Mode:**
  - Integrated comprehensive teaching notes, lecture hooks, conversational Hinglish scripts, live coding recipes, and expected outputs inside Admin Mode (`#faculty-panel`).
  - **Start Kaise Kare (The Hook / शुरुआत कैसे करें):** Curiosity-triggering opening questions and everyday dilemmas for all 30 curriculum topics.
  - **Class me Kya Bole (कक्षा में क्या बोलें - Spoken Script):** Direct bilingual (Hinglish/English) spoken teaching scripts allowing the instructor to glance at their notes and deliver clear lectures instantly.
  - **Pehle Kya Bataye (कोड से पहले क्या समझाएं):** Core mental models and real-world analogies to establish intuition before touching any code.
  - **Live Code Kaise Kare (स्टेप-बाय-स्टेप कोडिंग क्रम):** Sequential live coding recipes (Step 1 ➔ Step 2 ➔ Step 3) with line-by-line build order and pedagogical rationale.
  - **Expected Output (🖥️ Expected O/P):** Exact terminal logs, browser renders, or HTTP JSON responses for every live code demonstration so instructors and students know what to verify.
  - **Common Student Mistakes & Traps (⚠️ सामान्य गलतियां व समाधान):** Specific pain points where learners get stuck and how to guide/debug live in front of the class.
  - **Interactive Action Buttons:**
    - `📋 Copy Spoken Script`: 1-click clipboard copy of the conversational classroom lecture script with visual confirmation (`✅ Script Copied!`).
    - `📋 Copy Code`: 1-click clipboard copy of runnable code snippets.
    - `⚡ Load in Sandbox`: Automatically populates the Sandbox live editor with the demonstration code and executes it in an isolated iframe.
    - `🌐 Jump to Topic in Portal`: Transitions smoothly to the Modules view, opens the respective Unit accordion, scrolls to the topic row, and highlights it with a luminous glow so the instructor can project high-resolution diagrams and MCQs to students.

- **🚀 End-to-End MERN Project Stitching Blueprint (Backend ➔ Frontend ➔ Merged Final Project):**
  - Integrated the complete 3-phase capstone architecture roadmap directly inside Admin Mode so teachers and students clearly understand how isolated unit codes connect into one unified production web application across the 45-hour semester:
    - **Phase 1: Backend Foundation (Weeks 1 - 6 | Units 1, 3 & 5):** Node.js server setup, Mongoose schema modeling, Express RESTful API CRUD routes, and cryptographic JWT Bearer protection on Port 5000.
    - **Phase 2: Frontend Client (Weeks 7 - 12 | Units 1, 2 & 4):** React SPA component hierarchy, Virtual DOM diffing, `useState` & `useEffect` REST consumption, and React Router client-side navigation on Port 3000.
    - **Phase 3: Merged Full-Stack Capstone (Weeks 13 - 15 | Unit 5):** Unifying dev servers with `concurrently`, compiling production static assets with `express.static()`, and cloud launch on MongoDB Atlas + Render/Vercel with custom HTTPS domains.
  - Visual high-level pipeline flowchart, rationale callout, step-by-step implementation guide, code snippets, and expected outputs.

- **🎨 UI & Theme Polish:**
  - Modern, responsive styling for `.playbook-wrapper-card`, `.bp-pipeline-diagram`, `.bp-phase-card`, and `.pb-topic-card`.
  - Full Dark Mode and Light Mode adaptation with WCAG AAA compliant text contrast, curated color accents, and seamless transitions.

---

## [2.2.0] - 2026-10-28

### Added
- **📊 30 High-Resolution Concept Architecture Diagrams:**
  - Added dedicated, responsive SVG architectural schematics to all 30 subtopics across Units 1 to 5.
  - **Deep Focus on Units 3, 4, and 5:**
    - **Unit 3 (Node.js & Backend Foundations):** MERN Component vs MVC paradigm, Browser JS vs Node.js runtime internals, Core Modules architecture, Asynchronous progression (Callbacks → Promises → async/await), Libuv 4-phase Event Loop with Microtask queue priority, and raw HTTP server + npm packaging.
    - **Unit 4 (React.js Frontend Development):** Virtual DOM heuristic diffing and minimal reconciliation patch, Babel JSX compilation + unidirectional props flow, useState scheduled re-render cycle, useEffect dependency matrix & cleanup lifecycle, React Router SPA navigation without reload, and Context API global state distribution avoiding prop drilling.
    - **Unit 5 (MERN Integration & Express):** Express RESTful routing table, 5-stage sequential middleware pipeline with `next()`, JSON Web Token (JWT) cryptographic authentication workflow, Mongoose ODM Schema mapping to MongoDB BSON documents, and Production MERN cloud deployment architecture (CDN + Node API + MongoDB Atlas).
  - Integrated 1-click fullscreen lightbox zoom for every concept diagram card.
  - Styled with `.concept-visual-viewport` card styling, luminous accents, responsive layout, and light mode compatibility.

### Security & Privacy
- **🔒 Passcode Locking of Admin & Instructor Modes:**
  - Both Instructor Guide (`#instructor-notes-panel`) and Admin Mode (`#faculty-panel`) are locked behind an authorized security passcode.
  - Intercepted tab navigation, hero buttons, and direct feature card clicks to prompt for passcode verification if unauthorized.
  - **Absolute Passcode Concealment:** Completely removed all default passcode hints, text labels, terminal comments, and plaintext credentials from UI modals, Help tabs, and error alerts.

---

## [2.1.0] - 2026-10-28

### Added
- **🏠 Home Tab & Platform Showcase:**
  - Added new default initial landing tab (`#home-panel`) with platform capabilities showcase.
  - Added 8-card core architecture overview detailing all modules, tools, and labs.
  - Added quick launch CTA buttons ("Explore 5 Modules", "Instructor Notes & Viva", "Open Live Sandbox", "JWT Security Lab", "How to Run & Help").
  - Moved the Core Objectives & Learning Outcomes (LO1–LO5) drawer from the curriculum view into the Home tab.
  - Added metric counter banner (5 Units, 30 Concepts, 30+ Analogies, 30+ Live Snippets, 70+ MCQs).
- **👨‍🏫 Dedicated Instructor Guide Tab:**
  - Created dedicated private instructor desk tab (`#instructor-notes-panel`) separating teaching notes from the student view.
  - Rendered step-by-step lecture breakdown guidance for all 30 subtopics.
  - Added blackboard teaching analogies for classroom demonstrations.
  - Added common student misunderstandings, traps, and debugging gotchas for each topic.
  - Added comprehensive oral viva and technical interview question bank with model answers.
  - Added unit filter pills (All Units, Units 1 to 5) for quick lecture navigation.
- **📖 Help & Operating Manual Tab:**
  - Created user manual and execution guide tab (`#help-panel`).
  - Added quick copyable terminal command box (`npm start`, `http://localhost:3000`).
  - Added 6 detailed operational cards covering local execution, curriculum study, instructor tools, live sandbox usage, JWT security testing, and accessibility.
- **📚 Concept Enhancements in Modules Tab:**
  - Added **Real-World Everyday Analogies** to all 30 subtopics across Units 1 to 5.
  - Added syntax-highlighted **Runnable Code Blocks** with filename tags, "📋 Copy" button, and "⚡ Run in Sandbox" 1-click execution.
  - Preserved uncropped architectural infographic diagrams with high-resolution lightbox modal zoom.
  - Kept 2–3 row-based interactive **Concept Check MCQs** beside each topic for active recall.

### Changed
- **Desktop Navbar Optimization:**
  - Streamlined tab labels (`🏠 Home`, `📚 Modules`, `👨‍🏫 Instructor Guide`, `📽️ Live Studio`, `💻 Sandbox`, `🔄 MERN Flow`, `🔑 JWT Lab`, `📝 Quizzes`, `📖 Help & Guide`, `🔒 Admin`).
  - Adjusted container padding (`11px 12px`) and typography (`0.84rem`, 600 weight) so all 10 tabs fit in a single desktop row without wrapping awkwardly.
- **Scroll Behavior:**
  - Updated tab switcher and CTA navigation to scroll smoothly to top `0` so panel titles and headers are never clipped by the sticky navbar.
- **Documentation:**
  - Overhauled [`README.md`](README.md) with comprehensive local setup commands, architecture tab tables, and operational workflows.

### Fixed
- **Theme Toggle Button:**
  - Replaced the fixed `40px` square button with an auto-width `.btn-theme-toggle` pill displaying both icon and label (`🌙 Dark Mode` / `☀️ Light Mode`) without truncation or overflow.
- **Light Mode Palette & WCAG AAA Contrast:**
  - Fixed low-contrast borders and text in light mode by tuning CSS tokens (`--bg-primary: #f8fafc`, `--bg-card: #ffffff`, `--border-color: #cbd5e1`, `--text-primary: #0f172a`, `--text-secondary: #334155`).
  - Ensured code block viewports retain a dark slate background (`#0f172a`) in both light and dark modes for syntax readability.

---

## [2.0.0] - 2026-10-28

### Added
- **Horizontal Row Layout:** Re-architected concept displays into balanced horizontal rows with theory notes on the left and interactive MCQs on the right.
- **View Mode Switcher:** Added an Interactive Mode (side-by-side MCQs and code) vs Readable Mode (distraction-free study) pill toggle.
- **Interactive Unit Simulators:**
  - Unit 1: CSS Box Model interactive slider stage with real-time rendered width math.
  - Unit 2: DOM Event Bubbling step-through simulator (`<button>` → `<div>` → `<body>` → `<document>`).
  - Unit 3: Node.js Event Loop simulator showing Call Stack, Microtask queue, and Macrotask queue.
  - Unit 4: React Virtual DOM diffing visualizer showing minimal real DOM repaints.
- **🔑 JWT & REST API Lab:**
  - Live cryptographic token generation (`POST /api/auth/generate-token`).
  - Color-coded anatomical inspection: Header (Red), Payload (Purple), Signature (Cyan).
  - Protected API route testing (`GET /api/auth/protected-profile`) with Bearer authorization.
  - Cryptographic tampering simulator demonstrating signature verification failure (`403 Forbidden`).
- **📽️ Presentation & Live Studio Mode:** Split-screen lecture view for classroom projectors with live editable scratchpad and instant iframe preview.
- **📝 Timed Quizzes:** Integrated knowledge assessment engine with 30-point practical and 70-point theoretical certification marking breakdown.

### Changed
- Removed academic/university course codes ("MC103", "MCA", "Class") to transform the application into a universal, generic MERN learning portal.
- Lightened dark mode background from deep black to luminous slate/indigo (`#131b2e` and `#1e293b`).

---

## [1.0.0] - 2026-10-28

### Initial Release
- Core Express 5.x server implementation serving static assets and REST API endpoints.
- 5 comprehensive MERN curriculum units (45 hours total).
- Client-side data repository [`public/js/data.js`](public/js/data.js) containing course data, objectives, outcomes, and prescribed reference textbooks.
- Passcode-protected Instructor Portal with announcement broadcasting and curriculum hour monitoring.
