// Script to generate 30 high-resolution architectural SVG diagrams for all concepts in Units 1 to 5
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'concepts');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function createSvgWrapper(title, subtitle, badgeText, badgeColor, innerSvg) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95" />
    </linearGradient>
    <linearGradient id="primaryGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#f43f5e" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="900" height="420" fill="url(#bgGrad)" rx="12" />
  <rect width="898" height="418" x="1" y="1" fill="none" stroke="#334155" stroke-width="1.5" rx="11" />

  <!-- Grid Accents -->
  <g opacity="0.06" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="70" x2="900" y2="70" />
    <line x1="0" y1="140" x2="900" y2="140" />
    <line x1="0" y1="210" x2="900" y2="210" />
    <line x1="0" y1="280" x2="900" y2="280" />
    <line x1="0" y1="350" x2="900" y2="350" />
    <line x1="150" y1="0" x2="150" y2="420" />
    <line x1="300" y1="0" x2="300" y2="420" />
    <line x1="450" y1="0" x2="450" y2="420" />
    <line x1="600" y1="0" x2="600" y2="420" />
    <line x1="750" y1="0" x2="750" y2="420" />
  </g>

  <!-- Top Title Bar -->
  <rect x="24" y="18" width="160" height="24" rx="12" fill="${badgeColor}" fill-opacity="0.2" stroke="${badgeColor}" stroke-width="1" />
  <text x="104" y="34" font-family="'Outfit', system-ui, sans-serif" font-size="11" font-weight="700" fill="${badgeColor}" text-anchor="middle" letter-spacing="0.5">${badgeText}</text>
  
  <text x="24" y="62" font-family="'Outfit', system-ui, sans-serif" font-size="19" font-weight="800" fill="#ffffff">${title}</text>
  <text x="24" y="80" font-family="'Inter', system-ui, sans-serif" font-size="12" fill="#94a3b8">${subtitle}</text>

  <!-- Content Graphic -->
  <g transform="translate(0, 15)">
    ${innerSvg}
  </g>
</svg>`;
}

// Map of all 30 diagrams
const diagrams = {
  // UNIT 1
  "u1_t1_internet_workings.svg": {
    title: "How the Internet Works: Packet Switching & TCP/IP Routing",
    subtitle: "Data is split into discrete IP packets that traverse dynamic routers across global fiber-optic backbones",
    badgeText: "UNIT 1.1 • NETWORKING",
    badgeColor: "#38bdf8",
    svg: `
      <!-- Sender -->
      <rect x="40" y="140" width="160" height="150" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" filter="url(#shadow)" />
      <text x="120" y="170" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">💻 Client Device</text>
      <text x="120" y="195" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Browser / App</text>
      <rect x="60" y="215" width="120" height="26" rx="4" fill="#0284c7" />
      <text x="120" y="232" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff" text-anchor="middle">Source: 192.168.1.5</text>
      <text x="120" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Splits payload to packets</text>

      <!-- Arrow 1 -->
      <path d="M 200 200 L 290 170" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <path d="M 200 215 L 290 215" stroke="#a855f7" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <path d="M 200 230 L 290 260" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" fill="none" />

      <!-- Routers Cloud -->
      <rect x="290" y="115" width="320" height="200" rx="12" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6,4" filter="url(#shadow)" />
      <text x="450" y="140" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#a5b4fc" text-anchor="middle">🌐 Global IP Router Mesh (Packet Switching)</text>

      <!-- Router 1 -->
      <circle cx="360" cy="180" r="28" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5" />
      <text x="360" y="185" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Router A</text>

      <!-- Router 2 -->
      <circle cx="540" cy="180" r="28" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5" />
      <text x="540" y="185" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Router B</text>

      <!-- Router 3 -->
      <circle cx="450" cy="255" r="28" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5" />
      <text x="450" y="260" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Router C</text>

      <!-- Dynamic paths between routers -->
      <line x1="388" y1="180" x2="512" y2="180" stroke="#818cf8" stroke-width="1.5" />
      <line x1="375" y1="202" x2="430" y2="238" stroke="#818cf8" stroke-width="1.5" />
      <line x1="525" y1="202" x2="470" y2="238" stroke="#818cf8" stroke-width="1.5" />

      <!-- Packets moving -->
      <rect x="390" y="168" width="45" height="18" rx="4" fill="#38bdf8" />
      <text x="412" y="181" font-family="'Fira Code', monospace" font-size="9" fill="#0f172a" font-weight="700" text-anchor="middle">PKT #1</text>
      <rect x="420" y="270" width="45" height="18" rx="4" fill="#10b981" />
      <text x="442" y="283" font-family="'Fira Code', monospace" font-size="9" fill="#0f172a" font-weight="700" text-anchor="middle">PKT #2</text>
      <rect x="470" y="168" width="45" height="18" rx="4" fill="#a855f7" />
      <text x="492" y="181" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" font-weight="700" text-anchor="middle">PKT #3</text>

      <!-- Arrow 2 -->
      <path d="M 610 180 L 700 200" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <path d="M 610 215 L 700 215" stroke="#a855f7" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <path d="M 610 250 L 700 230" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" fill="none" />

      <!-- Destination Server -->
      <rect x="700" y="140" width="160" height="150" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" filter="url(#shadow)" />
      <text x="780" y="170" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#10b981" text-anchor="middle">🖥️ Destination Server</text>
      <text x="780" y="195" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Reassembles Packets</text>
      <rect x="720" y="215" width="120" height="26" rx="4" fill="#059669" />
      <text x="780" y="232" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff" text-anchor="middle">IP: 142.250.190.46</text>
      <text x="780" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">✓ TCP Ordered Delivery</text>
    `
  },
  "u1_t2_dns_ip_resolution.svg": {
    title: "Domain Name System (DNS) Resolution Hierarchy",
    subtitle: "Step-by-step conversion from human-friendly URL (google.com) to machine 32-bit IPv4 address",
    badgeText: "UNIT 1.2 • NETWORKING",
    badgeColor: "#38bdf8",
    svg: `
      <!-- Step 1 Client -->
      <rect x="40" y="150" width="140" height="140" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" filter="url(#shadow)" />
      <text x="110" y="180" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Browser Client</text>
      <rect x="55" y="195" width="110" height="24" rx="4" fill="#0369a1" />
      <text x="110" y="211" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">google.com</text>
      <text x="110" y="250" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Checks local cache</text>

      <!-- Arrow to ISP -->
      <line x1="180" y1="220" x2="250" y2="220" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Step 2 ISP Resolver -->
      <rect x="250" y="150" width="140" height="140" rx="8" fill="url(#cardGrad)" stroke="#818cf8" stroke-width="1.5" filter="url(#shadow)" />
      <text x="320" y="180" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#818cf8" text-anchor="middle">2. ISP Resolver</text>
      <text x="320" y="205" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Recursive DNS</text>
      <rect x="265" y="225" width="110" height="24" rx="4" fill="#4338ca" />
      <text x="320" y="241" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">8.8.8.8 / 1.1.1.1</text>
      <text x="320" y="270" font-family="'Inter', sans-serif" font-size="9" fill="#a5b4fc" text-anchor="middle">Iterative Queries ↓</text>

      <!-- 3 Tier Hierarchy -->
      <!-- Root -->
      <rect x="460" y="110" width="190" height="55" rx="6" fill="#1e1b4b" stroke="#a855f7" stroke-width="1.5" />
      <text x="475" y="132" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c084fc">3. Root DNS Server (.)</text>
      <text x="475" y="150" font-family="'Inter', sans-serif" font-size="10" fill="#e2e8f0">Redirects to TLD '.com'</text>

      <!-- TLD -->
      <rect x="460" y="185" width="190" height="55" rx="6" fill="#1e1b4b" stroke="#06b6d4" stroke-width="1.5" />
      <text x="475" y="207" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#22d3ee">4. TLD Server (.com)</text>
      <text x="475" y="225" font-family="'Inter', sans-serif" font-size="10" fill="#e2e8f0">Redirects to Nameserver</text>

      <!-- Authoritative -->
      <rect x="460" y="260" width="190" height="55" rx="6" fill="#1e1b4b" stroke="#10b981" stroke-width="1.5" />
      <text x="475" y="282" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#34d399">5. Authoritative Server</text>
      <text x="475" y="300" font-family="'Fira Code', monospace" font-size="10" fill="#86efac">A Record: 142.250.190.46</text>

      <!-- Final Arrow to IP Result -->
      <path d="M 650 287 L 720 287 L 720 220 L 730 220" stroke="#10b981" stroke-width="2" fill="none" />

      <!-- Result Card -->
      <rect x="730" y="150" width="130" height="140" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="2" filter="url(#shadow)" />
      <text x="795" y="180" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#10b981" text-anchor="middle">6. IP Connected!</text>
      <circle cx="795" cy="210" r="18" fill="#059669" />
      <text x="795" y="216" font-family="'Outfit', sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">✓</text>
      <text x="795" y="248" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#34d399" text-anchor="middle">142.250.190.46</text>
      <text x="795" y="272" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">TCP Handshake Starts</text>
    `
  },
  "u1_t3_http_https_handshake.svg": {
    title: "Client-Server HTTP/HTTPS & TLS 3-Way Handshake",
    subtitle: "TCP connection establishment (SYN-ACK) followed by TLS cryptographic session key exchange",
    badgeText: "UNIT 1.3 • PROTOCOLS",
    badgeColor: "#38bdf8",
    svg: `
      <!-- Client Column -->
      <rect x="80" y="110" width="150" height="210" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="155" y="140" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">Client (Browser)</text>
      <circle cx="155" cy="180" r="24" fill="#0284c7" />
      <text x="155" y="187" font-family="'Outfit', sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">💻</text>
      <text x="155" y="230" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Port: Random (54123)</text>
      <text x="155" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">Generates Client Hello</text>
      <text x="155" y="280" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Encrypted Session</text>

      <!-- Server Column -->
      <rect x="670" y="110" width="150" height="210" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="745" y="140" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#10b981" text-anchor="middle">Server (Node/Nginx)</text>
      <circle cx="745" cy="180" r="24" fill="#059669" />
      <text x="745" y="187" font-family="'Outfit', sans-serif" font-size="18" fill="#ffffff" text-anchor="middle">🖥️</text>
      <text x="745" y="230" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Port: 80 / 443 (HTTPS)</text>
      <text x="745" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#38bdf8" text-anchor="middle">Presents SSL Cert</text>
      <text x="745" y="280" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Decrypts with Key</text>

      <!-- Middle Message Flows -->
      <!-- Step 1 SYN -->
      <line x1="230" y1="150" x2="670" y2="165" stroke="#38bdf8" stroke-width="2" />
      <polygon points="665,160 675,165 665,170" fill="#38bdf8" />
      <text x="450" y="150" font-family="'Fira Code', monospace" font-size="11" fill="#38bdf8" text-anchor="middle">1. SYN (Synchronize Sequence)</text>

      <!-- Step 2 SYN-ACK -->
      <line x1="670" y1="185" x2="230" y2="200" stroke="#f59e0b" stroke-width="2" />
      <polygon points="235,195 225,200 235,205" fill="#f59e0b" />
      <text x="450" y="190" font-family="'Fira Code', monospace" font-size="11" fill="#fbbf24" text-anchor="middle">2. SYN-ACK (Acknowledge & Sync)</text>

      <!-- Step 3 ACK -->
      <line x1="230" y1="220" x2="670" y2="235" stroke="#10b981" stroke-width="2" />
      <polygon points="665,230 675,235 665,240" fill="#10b981" />
      <text x="450" y="225" font-family="'Fira Code', monospace" font-size="11" fill="#34d399" text-anchor="middle">3. ACK (Connection Established)</text>

      <!-- TLS Handshake -->
      <rect x="300" y="260" width="300" height="50" rx="8" fill="#1e1b4b" stroke="#a855f7" stroke-width="1.5" />
      <text x="450" y="280" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c084fc" text-anchor="middle">🔐 TLS 1.3 Asymmetric Key Exchange</text>
      <text x="450" y="298" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">AES-256 Symmetric Encryption Activated for all HTTP traffic</text>
    `
  },
  "u1_t4_3tier_architecture.svg": {
    title: "3-Tier Web Architecture: Presentation, Application & Database",
    subtitle: "Separation of concerns across Client View, Business Logic, and Data Persistence",
    badgeText: "UNIT 1.4 • ARCHITECTURE",
    badgeColor: "#38bdf8",
    svg: `
      <!-- Tier 1 -->
      <rect x="50" y="120" width="220" height="190" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" filter="url(#shadow)" />
      <rect x="65" y="135" width="190" height="26" rx="4" fill="#0284c7" fill-opacity="0.3" />
      <text x="160" y="152" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">TIER 1: PRESENTATION</text>
      <text x="160" y="190" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">Browser / React SPA</text>
      <text x="160" y="215" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• HTML5 / CSS3 / DOM</text>
      <text x="160" y="235" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• Client-side Routing</text>
      <text x="160" y="255" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• User Events & Forms</text>
      <rect x="75" y="275" width="170" height="22" rx="4" fill="#1e293b" />
      <text x="160" y="290" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8" text-anchor="middle">fetch('/api/users')</text>

      <!-- Arrow 1-2 -->
      <path d="M 270 205 L 340 205" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="305" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc" text-anchor="middle">JSON/HTTP</text>

      <!-- Tier 2 -->
      <rect x="340" y="120" width="220" height="190" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.5" filter="url(#shadow)" />
      <rect x="355" y="135" width="190" height="26" rx="4" fill="#4338ca" fill-opacity="0.3" />
      <text x="450" y="152" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#a5b4fc" text-anchor="middle">TIER 2: APPLICATION</text>
      <text x="450" y="190" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">Node.js + Express Server</text>
      <text x="450" y="215" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• RESTful Controllers</text>
      <text x="450" y="235" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• Auth & JWT Validation</text>
      <text x="450" y="255" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• Business Logic / Rules</text>
      <rect x="365" y="275" width="170" height="22" rx="4" fill="#1e293b" />
      <text x="450" y="290" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc" text-anchor="middle">User.find({ role: 'admin' })</text>

      <!-- Arrow 2-3 -->
      <path d="M 560 205 L 630 205" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="595" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">TCP/BSON</text>

      <!-- Tier 3 -->
      <rect x="630" y="120" width="220" height="190" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" filter="url(#shadow)" />
      <rect x="645" y="135" width="190" height="26" rx="4" fill="#065f46" fill-opacity="0.3" />
      <text x="740" y="152" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">TIER 3: DATABASE</text>
      <text x="740" y="190" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#ffffff" text-anchor="middle">MongoDB (NoSQL)</text>
      <text x="740" y="215" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• Collections & Documents</text>
      <text x="740" y="235" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• Indexes & Aggregations</text>
      <text x="740" y="255" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">• Replication & Sharding</text>
      <rect x="655" y="275" width="170" height="22" rx="4" fill="#1e293b" />
      <text x="740" y="290" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">{ _id: ObjectId, name: ... }</text>
    `
  },
  "u1_t5_html5_semantics.svg": {
    title: "HTML5 Semantic Document Hierarchy",
    subtitle: "Meaningful structure for search engines, assistive screen readers, and modern browser layouts",
    badgeText: "UNIT 1.5 • HTML5",
    badgeColor: "#38bdf8",
    svg: `
      <!-- Outer Page -->
      <rect x="180" y="105" width="540" height="215" rx="10" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
      <text x="200" y="125" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">&lt;body&gt;</text>

      <!-- Header -->
      <rect x="200" y="132" width="500" height="32" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2" />
      <text x="215" y="152" font-family="'Fira Code', monospace" font-size="11" fill="#38bdf8">&lt;header&gt; Logo, Site Title &lt;/header&gt;</text>

      <!-- Nav -->
      <rect x="200" y="170" width="500" height="26" rx="4" fill="#1e293b" stroke="#6366f1" stroke-width="1.2" />
      <text x="215" y="187" font-family="'Fira Code', monospace" font-size="11" fill="#818cf8">&lt;nav&gt; Navigation Links: Home | Modules | Docs &lt;/nav&gt;</text>

      <!-- Middle: Main + Aside -->
      <g transform="translate(0, 5)">
        <rect x="200" y="200" width="340" height="75" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="1.2" />
        <text x="215" y="218" font-family="'Fira Code', monospace" font-size="11" fill="#34d399">&lt;main&gt; Primary Unique Content</text>
        <rect x="215" y="228" width="145" height="40" rx="3" fill="#0f172a" stroke="#34d399" stroke-dasharray="2,2" />
        <text x="225" y="252" font-family="'Fira Code', monospace" font-size="9" fill="#a7f3d0">&lt;article&gt; Blog Post &lt;/article&gt;</text>
        <rect x="370" y="228" width="155" height="40" rx="3" fill="#0f172a" stroke="#34d399" stroke-dasharray="2,2" />
        <text x="380" y="252" font-family="'Fira Code', monospace" font-size="9" fill="#a7f3d0">&lt;section&gt; Feature List &lt;/section&gt;</text>

        <rect x="550" y="200" width="150" height="75" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2" />
        <text x="565" y="222" font-family="'Fira Code', monospace" font-size="11" fill="#fbbf24">&lt;aside&gt;</text>
        <text x="565" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Sidebar, Ads, Related</text>
      </g>

      <!-- Footer -->
      <rect x="200" y="285" width="500" height="26" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1.2" />
      <text x="215" y="302" font-family="'Fira Code', monospace" font-size="11" fill="#fb7185">&lt;footer&gt; Copyright, Contact, Terms & Policies &lt;/footer&gt;</text>
    `
  },
  "u1_t6_css_box_model.svg": {
    title: "CSS Box Model & Flexbox Layout Mechanics",
    subtitle: "The 4 concentric boxes calculating element footprint: Margin -> Border -> Padding -> Content",
    badgeText: "UNIT 1.6 • CSS3",
    badgeColor: "#38bdf8",
    svg: `
      <!-- Margin -->
      <rect x="150" y="110" width="600" height="210" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="170" y="130" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#fbbf24">MARGIN (Outer Cleared Space)</text>

      <!-- Border -->
      <rect x="210" y="138" width="480" height="154" rx="6" fill="rgba(239, 68, 68, 0.12)" stroke="#ef4444" stroke-width="2" />
      <text x="230" y="156" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#f87171">BORDER (Physical Stroke)</text>

      <!-- Padding -->
      <rect x="270" y="165" width="360" height="100" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1.5" />
      <text x="290" y="182" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#34d399">PADDING (Inner Breathing Room)</text>

      <!-- Content -->
      <rect x="340" y="195" width="220" height="50" rx="3" fill="#0284c7" />
      <text x="450" y="225" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">CONTENT (Width x Height)</text>

      <!-- Formula footer -->
      <rect x="150" y="325" width="600" height="28" rx="6" fill="#1e293b" />
      <text x="450" y="343" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc" text-anchor="middle">Total Rendered Width = Content Width + (2 × Padding) + (2 × Border) + (2 × Margin)</text>
    `
  },

  // UNIT 2
  "u2_t1_js_scoping_hoisting.svg": {
    title: "JavaScript Scoping, Hoisting & Temporal Dead Zone (TDZ)",
    subtitle: "Difference between `var` (function scope) and `let`/`const` (block scope in TDZ)",
    badgeText: "UNIT 2.1 • JAVASCRIPT",
    badgeColor: "#eab308",
    svg: `
      <!-- var card -->
      <rect x="60" y="115" width="360" height="200" rx="10" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.5" filter="url(#shadow)" />
      <text x="240" y="145" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#f87171" text-anchor="middle">Legacy: var keyword</text>
      <text x="80" y="175" font-family="'Inter', sans-serif" font-size="12" fill="#cbd5e1">• Function-scoped (leaks out of if/for blocks)</text>
      <text x="80" y="200" font-family="'Inter', sans-serif" font-size="12" fill="#cbd5e1">• Hoisted to top as <tspan fill="#fca5a5">undefined</tspan></text>
      <text x="80" y="225" font-family="'Inter', sans-serif" font-size="12" fill="#cbd5e1">• Can be re-declared accidentally</text>
      <rect x="80" y="245" width="320" height="50" rx="4" fill="#0f172a" />
      <text x="90" y="265" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">console.log(x); // undefined (hoisted!)</text>
      <text x="90" y="285" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">var x = 10;</text>

      <!-- let & const card -->
      <rect x="480" y="115" width="360" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" filter="url(#shadow)" />
      <text x="660" y="145" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#34d399" text-anchor="middle">Modern: let &amp; const (ES6+)</text>
      <text x="500" y="175" font-family="'Inter', sans-serif" font-size="12" fill="#cbd5e1">• Block-scoped to enclosing curly braces {}</text>
      <text x="500" y="200" font-family="'Inter', sans-serif" font-size="12" fill="#cbd5e1">• Protected by Temporal Dead Zone (TDZ)</text>
      <text x="500" y="225" font-family="'Inter', sans-serif" font-size="12" fill="#cbd5e1">• Cannot re-declare in same lexical block</text>
      <rect x="500" y="245" width="320" height="50" rx="4" fill="#0f172a" />
      <text x="510" y="265" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">console.log(y); // ReferenceError (TDZ!)</text>
      <text x="510" y="285" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">let y = 10;</text>
    `
  },
  "u2_t2_array_methods_pipeline.svg": {
    title: "Functional Array Pipeline: Filter, Map & Reduce",
    subtitle: "Immutable data transformations without mutating original source arrays",
    badgeText: "UNIT 2.2 • JAVASCRIPT",
    badgeColor: "#eab308",
    svg: `
      <!-- Initial Array -->
      <rect x="40" y="140" width="160" height="140" rx="8" fill="url(#cardGrad)" stroke="#eab308" stroke-width="1.5" />
      <text x="120" y="165" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#fde047" text-anchor="middle">Source Array</text>
      <rect x="55" y="180" width="130" height="85" rx="4" fill="#0f172a" />
      <text x="65" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">[</text>
      <text x="75" y="215" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">  65, 88, 45,</text>
      <text x="75" y="232" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">  92, 73, 58</text>
      <text x="65" y="250" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">]</text>

      <!-- Arrow 1 -->
      <line x1="200" y1="210" x2="250" y2="210" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Step 1 Filter -->
      <rect x="250" y="125" width="170" height="170" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="335" y="150" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#fbbf24" text-anchor="middle">1. .filter(s &gt;= 60)</text>
      <text x="335" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Discards items &lt; 60</text>
      <rect x="265" y="185" width="140" height="95" rx="4" fill="#0f172a" />
      <text x="275" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">[65, 88, 92, 73]</text>
      <text x="275" y="240" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Length: 4 items</text>
      <text x="275" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399">✓ Pure / Immutable</text>

      <!-- Arrow 2 -->
      <line x1="420" y1="210" x2="470" y2="210" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Step 2 Map -->
      <rect x="470" y="125" width="180" height="170" rx="8" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.5" />
      <text x="560" y="150" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#a5b4fc" text-anchor="middle">2. .map(s =&gt; Grade)</text>
      <text x="560" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Transforms each item</text>
      <rect x="485" y="185" width="150" height="95" rx="4" fill="#0f172a" />
      <text x="495" y="210" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">['Grade 65',</text>
      <text x="495" y="228" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc"> 'Grade 88', ...]</text>
      <text x="495" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#38bdf8">Same Length: 4</text>

      <!-- Arrow 3 -->
      <line x1="650" y1="210" x2="700" y2="210" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Step 3 Reduce -->
      <rect x="700" y="125" width="160" height="170" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="780" y="150" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">3. .reduce(sum, s)</text>
      <text x="780" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Single accumulated value</text>
      <rect x="715" y="185" width="130" height="95" rx="4" fill="#0f172a" />
      <text x="780" y="225" font-family="'Outfit', sans-serif" font-size="22" font-weight="800" fill="#34d399" text-anchor="middle">318</text>
      <text x="780" y="250" font-family="'Inter', sans-serif" font-size="10" fill="#a7f3d0" text-anchor="middle">Avg: 79.5%</text>
    `
  },
  "u2_t3_prototype_chain.svg": {
    title: "JavaScript Prototype Chain & Object Inheritance",
    subtitle: "Delegation lookup through the `__proto__` internal reference ending at null",
    badgeText: "UNIT 2.3 • OOP IN JS",
    badgeColor: "#eab308",
    svg: `
      <!-- Object Instance -->
      <rect x="80" y="120" width="200" height="180" rx="8" fill="url(#cardGrad)" stroke="#eab308" stroke-width="1.5" filter="url(#shadow)" />
      <text x="180" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#fde047" text-anchor="middle">1. myCar (Instance)</text>
      <rect x="95" y="160" width="170" height="60" rx="4" fill="#0f172a" />
      <text x="105" y="180" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff">brand: 'Tesla'</text>
      <text x="105" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff">speed: 120</text>
      <text x="180" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Calls myCar.drive()</text>
      <text x="180" y="265" font-family="'Fira Code', monospace" font-size="9" fill="#f59e0b" text-anchor="middle">__proto__ points to ↓</text>

      <!-- Arrow 1 -->
      <line x1="280" y1="210" x2="350" y2="210" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Prototype Object -->
      <rect x="350" y="120" width="220" height="180" rx="8" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.5" filter="url(#shadow)" />
      <text x="460" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#a5b4fc" text-anchor="middle">2. Car.prototype</text>
      <rect x="365" y="160" width="190" height="60" rx="4" fill="#0f172a" />
      <text x="375" y="180" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">drive: function() { ... }</text>
      <text x="375" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">brake: function() { ... }</text>
      <text x="460" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Found! Method executes</text>
      <text x="460" y="265" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8" text-anchor="middle">__proto__ points to ↓</text>

      <!-- Arrow 2 -->
      <line x1="570" y1="210" x2="640" y2="210" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Object.prototype -->
      <rect x="640" y="120" width="200" height="180" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.5" filter="url(#shadow)" />
      <text x="740" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#c084fc" text-anchor="middle">3. Object.prototype</text>
      <rect x="655" y="160" width="170" height="60" rx="4" fill="#0f172a" />
      <text x="665" y="180" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">toString()</text>
      <text x="665" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">hasOwnProperty()</text>
      <text x="740" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Root Object</text>
      <text x="740" y="265" font-family="'Fira Code', monospace" font-size="9" fill="#f43f5e" text-anchor="middle">__proto__ = null (End)</text>
    `
  },
  "u2_t4_closures_lexical_scope.svg": {
    title: "JavaScript Closures & Lexical Scope Backpack",
    subtitle: "Inner functions retain references to outer scope variables even after outer execution ends",
    badgeText: "UNIT 2.4 • ADVANCED JS",
    badgeColor: "#eab308",
    svg: `
      <!-- Outer Function Scope Box -->
      <rect x="80" y="110" width="740" height="210" rx="12" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="6,4" />
      <text x="100" y="135" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#818cf8">function createCounter() { /* Outer Lexical Scope */</text>

      <!-- Outer Variable -->
      <rect x="110" y="150" width="220" height="60" rx="6" fill="#1e1b4b" stroke="#818cf8" stroke-width="1" />
      <text x="125" y="175" font-family="'Fira Code', monospace" font-size="11" fill="#c7d2fe">let count = 0;</text>
      <text x="125" y="195" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">(Lives in Heap memory)</text>

      <!-- Inner Function Card -->
      <rect x="380" y="145" width="410" height="150" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="2" filter="url(#shadow)" />
      <text x="400" y="170" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#34d399">return function() { /* Inner Closure */</text>
      <text x="400" y="195" font-family="'Fira Code', monospace" font-size="11" fill="#ffffff">  count++; // Accesses outer scope variable</text>
      <text x="400" y="215" font-family="'Fira Code', monospace" font-size="11" fill="#ffffff">  return count;</text>
      <text x="400" y="235" font-family="'Fira Code', monospace" font-size="11" fill="#34d399">}</text>

      <!-- Backpack Badge -->
      <rect x="400" y="250" width="370" height="30" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
      <text x="585" y="270" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#a7f3d0" text-anchor="middle">🎒 Closure Backpack preserves reference to 'count' indefinitely</text>
    `
  },
  "u2_t5_dom_tree_hierarchy.svg": {
    title: "HTML DOM Tree Hierarchy: Nodes, Elements & Traversal",
    subtitle: "In-memory tree structure allowing programmatic JavaScript selection and manipulation",
    badgeText: "UNIT 2.5 • DOM ENGINE",
    badgeColor: "#eab308",
    svg: `
      <!-- document -->
      <rect x="380" y="105" width="140" height="34" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
      <text x="450" y="127" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">document</text>

      <line x1="450" y1="139" x2="450" y2="165" stroke="#475569" stroke-width="1.5" />

      <!-- html -->
      <rect x="380" y="165" width="140" height="34" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
      <text x="450" y="187" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#818cf8" text-anchor="middle">&lt;html&gt;</text>

      <!-- Branches to Head & Body -->
      <path d="M 450 199 L 450 220 L 250 220 L 250 240" stroke="#475569" stroke-width="1.5" fill="none" />
      <path d="M 450 199 L 450 220 L 650 220 L 650 240" stroke="#475569" stroke-width="1.5" fill="none" />

      <!-- head -->
      <rect x="180" y="240" width="140" height="34" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
      <text x="250" y="262" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#c084fc" text-anchor="middle">&lt;head&gt;</text>
      <line x1="250" y1="274" x2="250" y2="295" stroke="#475569" stroke-width="1.5" />
      <rect x="180" y="295" width="140" height="26" rx="4" fill="#0f172a" />
      <text x="250" y="312" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8" text-anchor="middle">&lt;title&gt;</text>

      <!-- body -->
      <rect x="580" y="240" width="140" height="34" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
      <text x="650" y="262" font-family="'Fira Code', monospace" font-size="11" font-weight="700" fill="#34d399" text-anchor="middle">&lt;body&gt;</text>

      <!-- Children of body -->
      <path d="M 650 274 L 650 290 L 480 290 L 480 305" stroke="#475569" stroke-width="1.5" fill="none" />
      <path d="M 650 274 L 650 290 L 650 305" stroke="#475569" stroke-width="1.5" fill="none" />
      <path d="M 650 274 L 650 290 L 800 290 L 800 305" stroke="#475569" stroke-width="1.5" fill="none" />

      <rect x="420" y="305" width="120" height="26" rx="4" fill="#0f172a" stroke="#10b981" />
      <text x="480" y="322" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">&lt;h1&gt; Title</text>

      <rect x="590" y="305" width="120" height="26" rx="4" fill="#0f172a" stroke="#10b981" />
      <text x="650" y="322" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">&lt;p&gt; Text</text>

      <rect x="740" y="305" width="120" height="26" rx="4" fill="#0f172a" stroke="#10b981" />
      <text x="800" y="322" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">&lt;button&gt;</text>
    `
  },
  "u2_t6_event_bubbling_capturing.svg": {
    title: "DOM Event Flow: Capturing Phase vs Bubbling Phase",
    subtitle: "Events travel down from Window to target (Capturing), then bubble up through ancestors (Bubbling)",
    badgeText: "UNIT 2.6 • EVENTS",
    badgeColor: "#eab308",
    svg: `
      <!-- Window Box -->
      <rect x="120" y="110" width="660" height="205" rx="10" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
      <text x="140" y="130" font-family="'Fira Code', monospace" font-size="11" fill="#94a3b8">window / document</text>

      <!-- div container -->
      <rect x="180" y="145" width="540" height="150" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
      <text x="200" y="165" font-family="'Fira Code', monospace" font-size="11" fill="#818cf8">&lt;div class="card"&gt;</text>

      <!-- button target -->
      <rect x="330" y="185" width="240" height="85" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="2" />
      <text x="450" y="215" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#f87171" text-anchor="middle">🎯 2. TARGET PHASE</text>
      <text x="450" y="240" font-family="'Fira Code', monospace" font-size="11" fill="#ffffff" text-anchor="middle">&lt;button id="btn"&gt; Click Me</text>

      <!-- Capturing Arrow Left -->
      <path d="M 80 130 L 80 230 L 320 230" stroke="#f59e0b" stroke-width="2.5" fill="none" marker-end="url(#arrow)" />
      <text x="60" y="175" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#fbbf24" transform="rotate(-90 60 175)">1. CAPTURING (Downwards)</text>

      <!-- Bubbling Arrow Right -->
      <path d="M 580 230 L 820 230 L 820 130" stroke="#10b981" stroke-width="2.5" fill="none" marker-end="url(#arrow)" />
      <text x="845" y="180" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" transform="rotate(90 845 180)">3. BUBBLING (Upwards)</text>
    `
  },
  "u2_t7_json_serialization.svg": {
    title: "JSON Data Serialization & Deserialization",
    subtitle: "Converting between in-memory JavaScript Objects and network transmission JSON strings",
    badgeText: "UNIT 2.7 • DATA EXCHANGE",
    badgeColor: "#eab308",
    svg: `
      <!-- JS Object in Memory -->
      <rect x="60" y="125" width="280" height="180" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" filter="url(#shadow)" />
      <text x="200" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">🧠 JavaScript Object (RAM)</text>
      <rect x="75" y="170" width="250" height="115" rx="6" fill="#0f172a" />
      <text x="90" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff">const user = {</text>
      <text x="105" y="215" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">  id: 101,</text>
      <text x="105" y="235" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">  name: "Learner",</text>
      <text x="105" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#a855f7">  login: () =&gt; {}</text>
      <text x="90" y="275" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff">};</text>

      <!-- Serialization Arrow (Right) -->
      <path d="M 350 185 L 530 185" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="440" y="175" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#34d399" text-anchor="middle">JSON.stringify()</text>

      <!-- Deserialization Arrow (Left) -->
      <path d="M 530 245 L 350 245" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="440" y="265" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">JSON.parse()</text>

      <!-- JSON String on Network Wire -->
      <rect x="540" y="125" width="300" height="180" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" filter="url(#shadow)" />
      <text x="690" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#10b981" text-anchor="middle">🌐 JSON Text String (Network/File)</text>
      <rect x="555" y="170" width="270" height="115" rx="6" fill="#0f172a" />
      <text x="570" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">'{"id":101,"name":"Learner"}'</text>
      <text x="570" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• Text-only format</text>
      <text x="570" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• Functions/symbols omitted</text>
      <text x="570" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">• Universal cross-language standard</text>
    `
  },

  // UNIT 3 (FOCUS)
  "u3_t1_mern_mvc_component.svg": {
    title: "MERN Stack Architecture & Component vs MVC Paradigm",
    subtitle: "Complete JavaScript unification across React, Express, Node.js and MongoDB with component encapsulation",
    badgeText: "UNIT 3.1 • MERN CORE",
    badgeColor: "#22c55e",
    svg: `
      <!-- MERN Flow Pipeline -->
      <!-- React -->
      <rect x="40" y="120" width="180" height="180" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.8" filter="url(#shadow)" />
      <text x="130" y="150" font-family="'Outfit', sans-serif" font-size="16" font-weight="800" fill="#22d3ee" text-anchor="middle">⚛️ React.js</text>
      <text x="130" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Frontend Component Tier</text>
      <rect x="55" y="185" width="150" height="60" rx="4" fill="#0f172a" />
      <text x="65" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">&lt;ProductList&gt;</text>
      <text x="80" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">&lt;Card /&gt;</text>
      <text x="65" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">&lt;/ProductList&gt;</text>
      <text x="130" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">Virtual DOM &amp; State</text>

      <!-- Arrow 1 -->
      <line x1="220" y1="210" x2="260" y2="210" stroke="#6366f1" stroke-width="2.5" />
      <text x="240" y="195" font-family="'Fira Code', monospace" font-size="8" fill="#a5b4fc" text-anchor="middle">Axios</text>

      <!-- Express -->
      <rect x="260" y="120" width="180" height="180" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="350" y="150" font-family="'Outfit', sans-serif" font-size="16" font-weight="800" fill="#818cf8" text-anchor="middle">⚡ Express.js</text>
      <text x="350" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">RESTful Routing Tier</text>
      <rect x="275" y="185" width="150" height="60" rx="4" fill="#0f172a" />
      <text x="285" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">app.use(authJwt)</text>
      <text x="285" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">app.get('/api/p')</text>
      <text x="285" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">res.json(data)</text>
      <text x="350" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#a5b4fc" text-anchor="middle">Middleware Pipeline</text>

      <!-- Arrow 2 -->
      <line x1="440" y1="210" x2="480" y2="210" stroke="#22c55e" stroke-width="2.5" />
      <text x="460" y="195" font-family="'Fira Code', monospace" font-size="8" fill="#86efac" text-anchor="middle">I/O</text>

      <!-- Node -->
      <rect x="480" y="120" width="180" height="180" rx="10" fill="url(#cardGrad)" stroke="#22c55e" stroke-width="1.8" filter="url(#shadow)" />
      <text x="570" y="150" font-family="'Outfit', sans-serif" font-size="16" font-weight="800" fill="#4ade80" text-anchor="middle">🟢 Node.js</text>
      <text x="570" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">V8 Runtime &amp; Libuv</text>
      <rect x="495" y="185" width="150" height="60" rx="4" fill="#0f172a" />
      <text x="505" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#4ade80">Event Loop (Tick)</text>
      <text x="505" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">Async I/O Threads</text>
      <text x="505" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">V8 Engine JIT</text>
      <text x="570" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#86efac" text-anchor="middle">Non-blocking Execution</text>

      <!-- Arrow 3 -->
      <line x1="660" y1="210" x2="700" y2="210" stroke="#10b981" stroke-width="2.5" />
      <text x="680" y="195" font-family="'Fira Code', monospace" font-size="8" fill="#34d399" text-anchor="middle">BSON</text>

      <!-- Mongo -->
      <rect x="700" y="120" width="160" height="180" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="780" y="150" font-family="'Outfit', sans-serif" font-size="16" font-weight="800" fill="#34d399" text-anchor="middle">🍃 MongoDB</text>
      <text x="780" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">NoSQL Document Store</text>
      <rect x="715" y="185" width="130" height="60" rx="4" fill="#0f172a" />
      <text x="725" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">{ _id: 1,</text>
      <text x="735" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  name: "Book",</text>
      <text x="725" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  price: 499 }</text>
      <text x="780" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">Flexible BSON Docs</text>
    `
  },
  "u3_t2_browser_vs_node.svg": {
    title: "Runtime Environment: Browser JS vs Node.js",
    subtitle: "Both execute V8 JavaScript, but host different APIs: DOM/Window in Browser vs Libuv/File System in Node",
    badgeText: "UNIT 3.2 • RUNTIME INTERNALS",
    badgeColor: "#22c55e",
    svg: `
      <!-- Shared V8 Core -->
      <rect x="330" y="110" width="240" height="60" rx="10" fill="#1e1b4b" stroke="#eab308" stroke-width="2" />
      <text x="450" y="138" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#fde047" text-anchor="middle">⚡ Google V8 Engine</text>
      <text x="450" y="155" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Parser, JIT Compiler, Garbage Collector</text>

      <path d="M 330 140 L 220 140 L 220 190" stroke="#06b6d4" stroke-width="2" fill="none" />
      <path d="M 570 140 L 680 140 L 680 190" stroke="#22c55e" stroke-width="2" fill="none" />

      <!-- Browser Column -->
      <rect x="80" y="190" width="280" height="170" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.8" filter="url(#shadow)" />
      <text x="220" y="215" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#22d3ee" text-anchor="middle">🌐 Browser Environment</text>
      <rect x="95" y="230" width="250" height="110" rx="6" fill="#0f172a" />
      <text x="110" y="250" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Global: <tspan fill="#38bdf8">window, document</tspan></text>
      <text x="110" y="272" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Web APIs: DOM, Fetch, LocalStorage</text>
      <text x="110" y="294" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Audio, Canvas, Geolocation</text>
      <text x="110" y="316" font-family="'Inter', sans-serif" font-size="11" fill="#f87171">✗ NO direct filesystem access (Sandboxed)</text>

      <!-- Node Column -->
      <rect x="540" y="190" width="280" height="170" rx="10" fill="url(#cardGrad)" stroke="#22c55e" stroke-width="1.8" filter="url(#shadow)" />
      <text x="680" y="215" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#4ade80" text-anchor="middle">🟢 Node.js Server Environment</text>
      <rect x="555" y="230" width="250" height="110" rx="6" fill="#0f172a" />
      <text x="570" y="250" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Global: <tspan fill="#4ade80">global, process, Buffer</tspan></text>
      <text x="570" y="272" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Libuv C++ Event Loop &amp; Thread Pool</text>
      <text x="570" y="294" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Full OS Access: fs, net, http, os</text>
      <text x="570" y="316" font-family="'Inter', sans-serif" font-size="11" fill="#f87171">✗ NO document, NO window object</text>
    `
  },
  "u3_t3_node_core_modules.svg": {
    title: "Node.js Core Modules Architecture & System APIs",
    subtitle: "Built-in C++ and JavaScript modules providing low-level networking, file system, and event handling",
    badgeText: "UNIT 3.3 • CORE APIS",
    badgeColor: "#22c55e",
    svg: `
      <!-- Center Hub -->
      <circle cx="450" cy="220" r="55" fill="#1e1b4b" stroke="#22c55e" stroke-width="2.5" filter="url(#shadow)" />
      <text x="450" y="215" font-family="'Outfit', sans-serif" font-size="16" font-weight="800" fill="#4ade80" text-anchor="middle">Node.js</text>
      <text x="450" y="235" font-family="'Inter', sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">Core Runtime</text>

      <!-- Module 1: fs -->
      <rect x="80" y="115" width="170" height="85" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="165" y="140" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">fs (File System)</text>
      <text x="165" y="160" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">readFile, writeFile</text>
      <text x="165" y="178" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Async streams &amp; buffers</text>
      <line x1="250" y1="165" x2="398" y2="200" stroke="#38bdf8" stroke-width="1.5" />

      <!-- Module 2: path -->
      <rect x="80" y="240" width="170" height="85" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.5" />
      <text x="165" y="265" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#c084fc" text-anchor="middle">path (Pathing)</text>
      <text x="165" y="285" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">path.join, path.resolve</text>
      <text x="165" y="303" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Cross-platform separators</text>
      <line x1="250" y1="275" x2="398" y2="235" stroke="#a855f7" stroke-width="1.5" />

      <!-- Module 3: http -->
      <rect x="650" y="115" width="170" height="85" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="735" y="140" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">http / https</text>
      <text x="735" y="160" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">createServer, req, res</text>
      <text x="735" y="178" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Foundation for Express</text>
      <line x1="650" y1="165" x2="502" y2="200" stroke="#10b981" stroke-width="1.5" />

      <!-- Module 4: events -->
      <rect x="650" y="240" width="170" height="85" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="735" y="265" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#fbbf24" text-anchor="middle">events (Events)</text>
      <text x="735" y="285" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">EventEmitter, on, emit</text>
      <text x="735" y="303" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Observer architecture</text>
      <line x1="650" y1="275" x2="502" y2="235" stroke="#f59e0b" stroke-width="1.5" />
    `
  },
  "u3_t4_async_callbacks_promises.svg": {
    title: "Asynchronous JavaScript: Callbacks to Promises to async/await",
    subtitle: "From deeply nested Callback Hell to flat composable Promises and synchronous-looking async/await syntax",
    badgeText: "UNIT 3.4 • ASYNC PATTERNS",
    badgeColor: "#22c55e",
    svg: `
      <!-- Callback Hell -->
      <rect x="40" y="115" width="250" height="210" rx="8" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.5" />
      <text x="165" y="140" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#f87171" text-anchor="middle">1. Callback Hell (Pyramid)</text>
      <rect x="50" y="155" width="230" height="150" rx="4" fill="#0f172a" />
      <text x="60" y="175" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">getUser(id, (user) =&gt; {</text>
      <text x="75" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  getOrders(user, (o) =&gt; {</text>
      <text x="90" y="215" font-family="'Fira Code', monospace" font-size="9" fill="#f59e0b">    getInvoice(o, (inv) =&gt; {</text>
      <text x="105" y="235" font-family="'Fira Code', monospace" font-size="9" fill="#ef4444">      sendMail(inv); // &gt;&gt;&gt;</text>
      <text x="90" y="255" font-family="'Fira Code', monospace" font-size="9" fill="#f59e0b">    });</text>
      <text x="75" y="275" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  });</text>
      <text x="60" y="295" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">});</text>

      <!-- Promises -->
      <rect x="325" y="115" width="250" height="210" rx="8" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.5" />
      <text x="450" y="140" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#a5b4fc" text-anchor="middle">2. Promises Chain (.then)</text>
      <rect x="335" y="155" width="230" height="150" rx="4" fill="#0f172a" />
      <text x="345" y="180" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">getUser(id)</text>
      <text x="345" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8">  .then(user =&gt; getOrders(user))</text>
      <text x="345" y="230" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8">  .then(orders =&gt; getInvoice(orders))</text>
      <text x="345" y="255" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8">  .then(inv =&gt; sendMail(inv))</text>
      <text x="345" y="280" font-family="'Fira Code', monospace" font-size="9" fill="#ef4444">  .catch(err =&gt; handleError(err));</text>

      <!-- async/await -->
      <rect x="610" y="115" width="250" height="210" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="2" filter="url(#shadow)" />
      <text x="735" y="140" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">3. Modern async / await</text>
      <rect x="620" y="155" width="230" height="150" rx="4" fill="#0f172a" />
      <text x="630" y="175" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">async function processUser() {</text>
      <text x="640" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">  try {</text>
      <text x="650" y="215" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">    const u = await getUser(id);</text>
      <text x="650" y="235" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">    const o = await getOrders(u);</text>
      <text x="650" y="255" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">    await sendMail(o);</text>
      <text x="640" y="275" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">  } catch(err) { ... }</text>
      <text x="630" y="295" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">}</text>
    `
  },
  "u3_t5_event_loop_phases.svg": {
    title: "Node.js Event Loop Architecture: Call Stack & Queue Phases",
    subtitle: "Single JavaScript thread orchestrated by Libuv: Microtasks executed after every tick phase",
    badgeText: "UNIT 3.5 • LIBUV ENGINE",
    badgeColor: "#22c55e",
    svg: `
      <!-- Call Stack -->
      <rect x="40" y="115" width="160" height="190" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.8" />
      <text x="120" y="140" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">CALL STACK (V8)</text>
      <rect x="50" y="155" width="140" height="30" rx="4" fill="#0284c7" />
      <text x="120" y="174" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff" text-anchor="middle">fn3()</text>
      <rect x="50" y="190" width="140" height="30" rx="4" fill="#0369a1" />
      <text x="120" y="209" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff" text-anchor="middle">fn2()</text>
      <rect x="50" y="225" width="140" height="30" rx="4" fill="#075985" />
      <text x="120" y="244" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff" text-anchor="middle">main()</text>
      <text x="120" y="285" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Sync Execution</text>

      <!-- Arrow to Loop -->
      <line x1="200" y1="210" x2="250" y2="210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Circular Event Loop -->
      <g transform="translate(420, 210)">
        <circle cx="0" cy="0" r="85" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-dasharray="6,4" />
        <circle cx="0" cy="0" r="32" fill="#1e1b4b" stroke="#34d399" stroke-width="1.5" />
        <text x="0" y="-4" font-family="'Outfit', sans-serif" font-size="10" font-weight="800" fill="#86efac" text-anchor="middle">EVENT</text>
        <text x="0" y="10" font-family="'Outfit', sans-serif" font-size="10" font-weight="800" fill="#86efac" text-anchor="middle">LOOP</text>
        
        <!-- Phases along circle -->
        <rect x="-45" y="-115" width="90" height="24" rx="4" fill="#1e293b" stroke="#eab308" />
        <text x="0" y="-99" font-family="'Fira Code', monospace" font-size="9" fill="#fde047" text-anchor="middle">1. Timers</text>

        <rect x="55" y="-30" width="105" height="24" rx="4" fill="#1e293b" stroke="#06b6d4" />
        <text x="107" y="-14" font-family="'Fira Code', monospace" font-size="9" fill="#67e8f9" text-anchor="middle">2. I/O Polling</text>

        <rect x="-45" y="90" width="90" height="24" rx="4" fill="#1e293b" stroke="#a855f7" />
        <text x="0" y="106" font-family="'Fira Code', monospace" font-size="9" fill="#d8b4fe" text-anchor="middle">3. setImmediate</text>

        <rect x="-160" y="-30" width="105" height="24" rx="4" fill="#1e293b" stroke="#f43f5e" />
        <text x="-107" y="-14" font-family="'Fira Code', monospace" font-size="9" fill="#fda4af" text-anchor="middle">4. Close Cb</text>
      </g>

      <!-- Microtask Queue Box -->
      <rect x="680" y="115" width="180" height="90" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" />
      <text x="770" y="140" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">⚡ MICROTASKS (High Priority)</text>
      <text x="770" y="160" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">process.nextTick()</text>
      <text x="770" y="180" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">Promise.then()</text>
      <text x="770" y="196" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Runs immediately after phase</text>

      <!-- Macrotask Queue Box -->
      <rect x="680" y="215" width="180" height="90" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.8" />
      <text x="770" y="240" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">⏳ MACROTASKS (Task Queue)</text>
      <text x="770" y="260" font-family="'Fira Code', monospace" font-size="10" fill="#fde68a" text-anchor="middle">setTimeout / setInterval</text>
      <text x="770" y="280" font-family="'Fira Code', monospace" font-size="10" fill="#fde68a" text-anchor="middle">setImmediate()</text>
      <text x="770" y="296" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Runs during respective phase</text>
    `
  },
  "u3_t6_npm_package_ecosystem.svg": {
    title: "NPM Package Management & Semantic Versioning (SemVer)",
    subtitle: "Package manifest orchestration: Dependencies, DevDependencies, Package-lock and npm Registry",
    badgeText: "UNIT 3.6 • PACKAGES & HTTP",
    badgeColor: "#22c55e",
    svg: `
      <!-- package.json Card -->
      <rect x="60" y="115" width="280" height="200" rx="10" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.5" filter="url(#shadow)" />
      <text x="200" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#f87171" text-anchor="middle">📦 package.json Manifest</text>
      <rect x="75" y="160" width="250" height="135" rx="6" fill="#0f172a" />
      <text x="90" y="180" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">"dependencies": {</text>
      <text x="105" y="198" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  "express": "^5.0.0",</text>
      <text x="105" y="215" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  "jsonwebtoken": "^9.0.2"</text>
      <text x="90" y="232" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">},</text>
      <text x="90" y="250" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">"devDependencies": {</text>
      <text x="105" y="268" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24">  "nodemon": "^3.1.0"</text>
      <text x="90" y="285" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">}</text>

      <!-- Arrow -->
      <line x1="340" y1="210" x2="410" y2="210" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />

      <!-- SemVer Rules Card -->
      <rect x="410" y="115" width="430" height="200" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" filter="url(#shadow)" />
      <text x="625" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">Semantic Versioning (MAJOR . MINOR . PATCH)</text>
      
      <!-- Version Boxes -->
      <rect x="440" y="165" width="105" height="60" rx="6" fill="#1e1b4b" stroke="#ef4444" stroke-width="1.5" />
      <text x="492" y="190" font-family="'Fira Code', monospace" font-size="16" font-weight="800" fill="#f87171" text-anchor="middle">5 .</text>
      <text x="492" y="212" font-family="'Inter', sans-serif" font-size="9" fill="#fca5a5" text-anchor="middle">MAJOR (Breaking)</text>

      <rect x="560" y="165" width="105" height="60" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.5" />
      <text x="612" y="190" font-family="'Fira Code', monospace" font-size="16" font-weight="800" fill="#38bdf8" text-anchor="middle">3 .</text>
      <text x="612" y="212" font-family="'Inter', sans-serif" font-size="9" fill="#bae6fd" text-anchor="middle">MINOR (Features)</text>

      <rect x="680" y="165" width="105" height="60" rx="6" fill="#1e1b4b" stroke="#10b981" stroke-width="1.5" />
      <text x="732" y="190" font-family="'Fira Code', monospace" font-size="16" font-weight="800" fill="#10b981" text-anchor="middle">0</text>
      <text x="732" y="212" font-family="'Inter', sans-serif" font-size="9" fill="#a7f3d0" text-anchor="middle">PATCH (Bug Fixes)</text>

      <rect x="440" y="240" width="370" height="55" rx="6" fill="#0f172a" />
      <text x="455" y="260" font-family="'Fira Code', monospace" font-size="10" fill="#fde047">^5.3.0  =&gt; Auto-accept Minor &amp; Patch (&lt; 6.0.0)</text>
      <text x="455" y="280" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">~5.3.0  =&gt; Auto-accept Patch fixes only (&lt; 5.4.0)</text>
    `
  },

  // UNIT 4 (FOCUS)
  "u4_t1_vdom_diffing_reconciliation.svg": {
    title: "React Virtual DOM Diffing & Reconciliation Engine",
    subtitle: "Batching UI updates in-memory to minimize expensive real browser DOM repaints and reflows",
    badgeText: "UNIT 4.1 • REACT VIRTUAL DOM",
    badgeColor: "#06b6d4",
    svg: `
      <!-- Previous VDOM -->
      <rect x="60" y="115" width="220" height="195" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="170" y="142" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Previous Virtual DOM</text>
      <circle cx="170" cy="175" r="14" fill="#0369a1" />
      <text x="170" y="180" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">App</text>
      <circle cx="120" cy="225" r="14" fill="#0369a1" />
      <text x="120" y="230" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">H1</text>
      <circle cx="220" cy="225" r="14" fill="#0369a1" />
      <text x="220" y="230" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">Count</text>
      <rect x="180" y="255" width="80" height="22" rx="4" fill="#1e293b" />
      <text x="220" y="270" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8" text-anchor="middle">count: 0</text>
      <line x1="160" y1="187" x2="128" y2="213" stroke="#38bdf8" stroke-width="1.2" />
      <line x1="180" y1="187" x2="212" y2="213" stroke="#38bdf8" stroke-width="1.2" />

      <!-- Center Diff Algorithm -->
      <rect x="330" y="150" width="240" height="120" rx="10" fill="#1e1b4b" stroke="#eab308" stroke-width="2" filter="url(#shadow)" />
      <text x="450" y="180" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#fde047" text-anchor="middle">⚛️ Reconciliation (Diff)</text>
      <text x="450" y="202" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Calculates minimal delta:</text>
      <rect x="350" y="215" width="200" height="30" rx="4" fill="#0f172a" />
      <text x="450" y="234" font-family="'Fira Code', monospace" font-size="10" fill="#4ade80" text-anchor="middle">Delta: &lt;span&gt; 0 -&gt; 1 &lt;/span&gt;</text>

      <!-- Real DOM Paint -->
      <rect x="620" y="115" width="220" height="195" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="730" y="142" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">Real Browser DOM</text>
      <circle cx="730" cy="175" r="14" fill="#0f172a" stroke="#475569" />
      <text x="730" y="180" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8" text-anchor="middle">div</text>
      <circle cx="680" cy="225" r="14" fill="#0f172a" stroke="#475569" />
      <text x="680" y="230" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8" text-anchor="middle">h1</text>
      <circle cx="780" cy="225" r="16" fill="#059669" stroke="#10b981" stroke-width="2" />
      <text x="780" y="230" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" font-weight="700" text-anchor="middle">span</text>
      <rect x="730" y="255" width="100" height="22" rx="4" fill="#065f46" />
      <text x="780" y="270" font-family="'Fira Code', monospace" font-size="10" fill="#86efac" text-anchor="middle">count: 1 (Repaint)</text>
      <line x1="720" y1="187" x2="688" y2="213" stroke="#475569" stroke-width="1.2" />
      <line x1="740" y1="187" x2="772" y2="213" stroke="#10b981" stroke-width="1.8" />
    `
  },
  "u4_t2_jsx_transpilation.svg": {
    title: "JSX Transpilation Pipeline to React Elements",
    subtitle: "Babel converts HTML-like declarative JSX syntax into nested `React.createElement()` JavaScript trees",
    badgeText: "UNIT 4.2 • JSX SYNTAX",
    badgeColor: "#06b6d4",
    svg: `
      <!-- Step 1 JSX -->
      <rect x="60" y="125" width="240" height="180" rx="8" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.5" />
      <text x="180" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#22d3ee" text-anchor="middle">1. Declarative JSX</text>
      <rect x="75" y="165" width="210" height="120" rx="4" fill="#0f172a" />
      <text x="85" y="190" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">&lt;div className="card"&gt;</text>
      <text x="95" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff">  &lt;h1&gt;{title}&lt;/h1&gt;</text>
      <text x="95" y="230" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">  &lt;Button primary /&gt;</text>
      <text x="85" y="250" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">&lt;/div&gt;</text>

      <!-- Arrow -->
      <path d="M 300 215 L 360 215" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="330" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24" text-anchor="middle">Babel</text>

      <!-- Step 2 createElement -->
      <rect x="360" y="125" width="480" height="180" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="600" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">2. React.createElement() In-Memory Virtual Nodes</text>
      <rect x="375" y="165" width="450" height="120" rx="4" fill="#0f172a" />
      <text x="385" y="190" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">React.createElement(</text>
      <text x="395" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">  'div', { className: 'card' },</text>
      <text x="395" y="230" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff">  React.createElement('h1', null, title),</text>
      <text x="395" y="250" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">  React.createElement(Button, { primary: true })</text>
      <text x="385" y="270" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">)</text>
    `
  },
  "u4_t3_usestate_render_cycle.svg": {
    title: "React State Management: useState Render Lifecycle",
    subtitle: "State mutations trigger scheduled re-renders passing new state snapshots down the component tree",
    badgeText: "UNIT 4.3 • REACT HOOKS",
    badgeColor: "#06b6d4",
    svg: `
      <!-- Initial Render -->
      <rect x="60" y="125" width="220" height="180" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="170" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Initial Mount</text>
      <rect x="75" y="165" width="190" height="60" rx="4" fill="#0f172a" />
      <text x="85" y="188" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">const [count, setCount]</text>
      <text x="85" y="208" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">  = useState(0);</text>
      <text x="170" y="250" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Snapshot: count = 0</text>
      <text x="170" y="270" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">UI displays: "Count: 0"</text>

      <!-- Trigger Action -->
      <rect x="340" y="150" width="220" height="130" rx="8" fill="#1e1b4b" stroke="#f59e0b" stroke-width="2" />
      <text x="450" y="175" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#fbbf24" text-anchor="middle">2. User Action (Click)</text>
      <rect x="355" y="190" width="190" height="30" rx="4" fill="#0f172a" />
      <text x="450" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24" text-anchor="middle">setCount(prev =&gt; prev + 1)</text>
      <text x="450" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Dispatches state update</text>
      <text x="450" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#a5b4fc" text-anchor="middle">Queues component re-render</text>

      <!-- Arrow -->
      <line x1="280" y1="215" x2="340" y2="215" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="560" y1="215" x2="620" y2="215" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Re-render -->
      <rect x="620" y="125" width="220" height="180" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" />
      <text x="730" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">3. Re-render Cycle</text>
      <rect x="635" y="165" width="190" height="60" rx="4" fill="#0f172a" />
      <text x="645" y="188" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">Component re-executes</text>
      <text x="645" y="208" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">New Snapshot: count = 1</text>
      <text x="730" y="250" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Diffing updates DOM node</text>
      <text x="730" y="270" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">UI displays: "Count: 1"</text>
    `
  },
  "u4_t4_useeffect_lifecycle.svg": {
    title: "Side Effects & Lifecycle Flow: useEffect Hook",
    subtitle: "Managing external network calls, subscriptions, and timers with Dependency Arrays and Cleanup handlers",
    badgeText: "UNIT 4.4 • SIDE EFFECTS",
    badgeColor: "#06b6d4",
    svg: `
      <!-- Mount Phase -->
      <rect x="50" y="125" width="240" height="180" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="170" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Component Mounts</text>
      <rect x="65" y="165" width="210" height="60" rx="4" fill="#0f172a" />
      <text x="75" y="188" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">useEffect(() =&gt; {</text>
      <text x="85" y="208" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  fetchData();</text>
      <text x="75" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">}, []); // Empty Deps</text>
      <text x="170" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Runs ONCE after initial paint</text>
      <text x="170" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Ideal for API data loading</text>

      <!-- Dependency Update Phase -->
      <rect x="330" y="125" width="240" height="180" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="450" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#fbbf24" text-anchor="middle">2. Dependency Change</text>
      <rect x="345" y="165" width="210" height="60" rx="4" fill="#0f172a" />
      <text x="355" y="188" font-family="'Fira Code', monospace" font-size="9" fill="#f59e0b">useEffect(() =&gt; {</text>
      <text x="365" y="208" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  syncWithId(userId);</text>
      <text x="355" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#f59e0b">}, [userId]);</text>
      <text x="450" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Re-runs whenever userId updates</text>
      <text x="450" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#a5b4fc" text-anchor="middle">Object.is(prevId, nextId) check</text>

      <!-- Cleanup Phase -->
      <rect x="610" y="125" width="240" height="180" rx="8" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.5" />
      <text x="730" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#f87171" text-anchor="middle">3. Unmount / Cleanup</text>
      <rect x="625" y="165" width="210" height="60" rx="4" fill="#0f172a" />
      <text x="635" y="188" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">return () =&gt; {</text>
      <text x="645" y="208" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">  clearInterval(timer);</text>
      <text x="635" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">};</text>
      <text x="730" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Prevents memory leaks</text>
      <text x="730" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#fca5a5" text-anchor="middle">Runs before re-executing &amp; unmount</text>
    `
  },
  "u4_t5_props_unidirectional_flow.svg": {
    title: "Props & Unidirectional Data Flow in Component Hierarchy",
    subtitle: "Data flows top-down via immutable props, while events and state updates trigger upwards via callbacks",
    badgeText: "UNIT 4.5 • COMPONENT DATA",
    badgeColor: "#06b6d4",
    svg: `
      <!-- App Root -->
      <rect x="360" y="110" width="180" height="50" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.8" />
      <text x="450" y="132" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#38bdf8" text-anchor="middle">&lt;App /&gt; Root State</text>
      <text x="450" y="148" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc" text-anchor="middle">[user, setUser]</text>

      <!-- Props Flow Downwards -->
      <path d="M 400 160 L 260 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
      <text x="310" y="175" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">props.user ↓</text>

      <path d="M 500 160 L 640 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
      <text x="590" y="175" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">props.user ↓</text>

      <!-- Child 1: Navbar -->
      <rect x="170" y="200" width="180" height="60" rx="6" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
      <text x="260" y="225" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#818cf8" text-anchor="middle">&lt;Navbar /&gt;</text>
      <text x="260" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Displays user.name</text>

      <!-- Child 2: Profile -->
      <rect x="550" y="200" width="180" height="60" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
      <text x="640" y="225" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">&lt;ProfilePage /&gt;</text>
      <text x="640" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Passes onLogout callback</text>

      <!-- Callback Flow Upwards -->
      <path d="M 640 260 L 640 290 L 450 290 L 450 170" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4" fill="none" marker-end="url(#arrow)" />
      <text x="545" y="305" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24" text-anchor="middle">↑ Callback Event: onLogout() invokes setUser(null) at Root</text>
    `
  },
  "u4_t6_react_router_spa.svg": {
    title: "Client-Side Routing: React Router & HTML5 History API",
    subtitle: "Synchronizing URL changes with component views without performing full browser page reloads",
    badgeText: "UNIT 4.6 • SPA NAVIGATION",
    badgeColor: "#06b6d4",
    svg: `
      <!-- Browser Address Bar -->
      <rect x="150" y="110" width="600" height="38" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
      <circle cx="170" cy="129" r="6" fill="#ef4444" />
      <circle cx="188" cy="129" r="6" fill="#f59e0b" />
      <circle cx="206" cy="129" r="6" fill="#10b981" />
      <rect x="230" y="117" width="480" height="24" rx="4" fill="#1e293b" />
      <text x="245" y="133" font-family="'Fira Code', monospace" font-size="11" fill="#38bdf8">http://localhost:3000/dashboard</text>

      <!-- HTML5 History API Sync -->
      <path d="M 450 148 L 450 185" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />
      <text x="450" y="170" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc" text-anchor="middle">pushState() / popstate</text>

      <!-- Routes Switcher Engine -->
      <rect x="150" y="185" width="600" height="125" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="180" y="210" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#818cf8">&lt;Routes&gt; Matching Engine</text>

      <!-- Route 1 -->
      <rect x="170" y="225" width="165" height="65" rx="6" fill="#0f172a" stroke="#475569" />
      <text x="185" y="245" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">path="/"</text>
      <text x="185" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#64748b">&lt;HomePage /&gt;</text>
      <text x="185" y="280" font-family="'Inter', sans-serif" font-size="8" fill="#475569">(Unmounted)</text>

      <!-- Route 2 (Active Match) -->
      <rect x="365" y="225" width="170" height="65" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2" />
      <text x="380" y="245" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">path="/dashboard"</text>
      <text x="380" y="265" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#ffffff">&lt;Dashboard /&gt;</text>
      <text x="380" y="280" font-family="'Inter', sans-serif" font-size="8" fill="#34d399">✓ Active Rendered View</text>

      <!-- Route 3 -->
      <rect x="565" y="225" width="165" height="65" rx="6" fill="#0f172a" stroke="#475569" />
      <text x="580" y="245" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">path="*"</text>
      <text x="580" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#64748b">&lt;NotFound /&gt;</text>
      <text x="580" y="280" font-family="'Inter', sans-serif" font-size="8" fill="#475569">(Fallback 404)</text>
    `
  },

  // UNIT 5 (FOCUS)
  "u5_t1_express_middleware_pipeline.svg": {
    title: "Express.js Middleware Execution Pipeline",
    subtitle: "Sequential processing of HTTP Requests through middleware chain via `next()` invocation",
    badgeText: "UNIT 5.1 • BACKEND MIDDLEWARE",
    badgeColor: "#a855f7",
    svg: `
      <!-- Client HTTP Request -->
      <rect x="40" y="140" width="130" height="140" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="105" y="170" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Client HTTP</text>
      <rect x="55" y="190" width="100" height="24" rx="4" fill="#0284c7" />
      <text x="105" y="206" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">GET /api/data</text>
      <text x="105" y="245" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">req, res objects</text>

      <!-- Arrow 1 -->
      <line x1="170" y1="210" x2="220" y2="210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Middleware 1: Logger -->
      <rect x="220" y="125" width="140" height="170" rx="8" fill="url(#cardGrad)" stroke="#818cf8" stroke-width="1.5" />
      <text x="290" y="150" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#a5b4fc" text-anchor="middle">1. Logging</text>
      <rect x="235" y="170" width="110" height="40" rx="4" fill="#0f172a" />
      <text x="290" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8" text-anchor="middle">morgan('dev')</text>
      <text x="290" y="240" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">Logs method &amp; IP</text>
      <rect x="245" y="260" width="90" height="20" rx="4" fill="#312e81" />
      <text x="290" y="274" font-family="'Fira Code', monospace" font-size="9" fill="#c7d2fe" text-anchor="middle">next() ↓</text>

      <!-- Arrow 2 -->
      <line x1="360" y1="210" x2="410" y2="210" stroke="#818cf8" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Middleware 2: Auth Check -->
      <rect x="410" y="125" width="140" height="170" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.8" />
      <text x="480" y="150" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#c084fc" text-anchor="middle">2. JWT Verify</text>
      <rect x="425" y="170" width="110" height="40" rx="4" fill="#0f172a" />
      <text x="480" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#c084fc" text-anchor="middle">verify(token)</text>
      <text x="480" y="240" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">Attaches req.user</text>
      <rect x="435" y="260" width="90" height="20" rx="4" fill="#581c87" />
      <text x="480" y="274" font-family="'Fira Code', monospace" font-size="9" fill="#e9d5ff" text-anchor="middle">next() ↓</text>

      <!-- Arrow 3 -->
      <line x1="550" y1="210" x2="600" y2="210" stroke="#a855f7" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Route Handler -->
      <rect x="600" y="125" width="140" height="170" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="2" filter="url(#shadow)" />
      <text x="670" y="150" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">3. Controller</text>
      <rect x="615" y="170" width="110" height="40" rx="4" fill="#0f172a" />
      <text x="670" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">getData(req, res)</text>
      <text x="670" y="240" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">Queries MongoDB</text>
      <rect x="625" y="260" width="90" height="20" rx="4" fill="#065f46" />
      <text x="670" y="274" font-family="'Fira Code', monospace" font-size="9" fill="#a7f3d0" text-anchor="middle">res.json()</text>

      <!-- Return Arrow to Client -->
      <path d="M 670 300 L 670 340 L 105 340 L 105 280" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" fill="none" marker-end="url(#arrow)" />
      <text x="380" y="330" font-family="'Fira Code', monospace" font-size="10" fill="#34d399" text-anchor="middle">200 OK HTTP Response Body (JSON Payload)</text>
    `
  },
  "u5_t2_rest_api_methods.svg": {
    title: "RESTful API Architecture & Standard HTTP Verbs",
    subtitle: "Resource-based URL naming conventions mapped to CRUD database operations and HTTP status codes",
    badgeText: "UNIT 5.2 • RESTFUL SERVICES",
    badgeColor: "#a855f7",
    svg: `
      <!-- Table Header -->
      <rect x="50" y="115" width="800" height="34" rx="6" fill="#1e293b" stroke="#334155" />
      <text x="90" y="137" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#94a3b8">VERB</text>
      <text x="210" y="137" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#94a3b8">ENDPOINT ROUTE</text>
      <text x="430" y="137" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#94a3b8">CRUD ACTION</text>
      <text x="610" y="137" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#94a3b8">DATABASE OPERATION</text>
      <text x="790" y="137" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#94a3b8">STATUS</text>

      <!-- Row 1: GET -->
      <rect x="50" y="155" width="800" height="34" rx="4" fill="#0f172a" stroke="#334155" />
      <rect x="65" y="161" width="55" height="22" rx="4" fill="#0369a1" />
      <text x="92" y="176" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">GET</text>
      <text x="210" y="176" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">/api/books</text>
      <text x="430" y="176" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">READ (Fetch List)</text>
      <text x="610" y="176" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">Book.find()</text>
      <text x="790" y="176" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#34d399">200 OK</text>

      <!-- Row 2: POST -->
      <rect x="50" y="195" width="800" height="34" rx="4" fill="#0f172a" stroke="#334155" />
      <rect x="65" y="201" width="55" height="22" rx="4" fill="#059669" />
      <text x="92" y="216" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">POST</text>
      <text x="210" y="216" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">/api/books</text>
      <text x="430" y="216" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">CREATE (New Resource)</text>
      <text x="610" y="216" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">Book.create(req.body)</text>
      <text x="790" y="216" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#34d399">201 Created</text>

      <!-- Row 3: PUT -->
      <rect x="50" y="235" width="800" height="34" rx="4" fill="#0f172a" stroke="#334155" />
      <rect x="65" y="241" width="55" height="22" rx="4" fill="#d97706" />
      <text x="92" y="256" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">PUT</text>
      <text x="210" y="256" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">/api/books/:id</text>
      <text x="430" y="256" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">UPDATE (Full Replace)</text>
      <text x="610" y="256" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">Book.findByIdAndUpdate()</text>
      <text x="790" y="256" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#34d399">200 OK</text>

      <!-- Row 4: DELETE -->
      <rect x="50" y="275" width="800" height="34" rx="4" fill="#0f172a" stroke="#334155" />
      <rect x="65" y="281" width="55" height="22" rx="4" fill="#e11d48" />
      <text x="92" y="296" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">DEL</text>
      <text x="210" y="296" font-family="'Fira Code', monospace" font-size="10" fill="#f43f5e">/api/books/:id</text>
      <text x="430" y="296" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">DELETE (Remove)</text>
      <text x="610" y="296" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">Book.findByIdAndDelete()</text>
      <text x="790" y="296" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#f43f5e">204 No Content</text>
    `
  },
  "u5_t3_mongodb_mongoose_odm.svg": {
    title: "MongoDB & Mongoose ODM: Schema to BSON Collections",
    subtitle: "Object Document Mapping providing strict schema types, validation hooks, and relational populate queries",
    badgeText: "UNIT 5.3 • DATABASE TIER",
    badgeColor: "#a855f7",
    svg: `
      <!-- Mongoose Schema -->
      <rect x="50" y="120" width="250" height="195" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="175" y="145" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">1. Mongoose Schema</text>
      <rect x="65" y="160" width="220" height="140" rx="4" fill="#0f172a" />
      <text x="75" y="180" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">const UserSchema = new Schema({</text>
      <text x="85" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">  name: { type: String, req: true },</text>
      <text x="85" y="220" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  email: { type: String, unique: true },</text>
      <text x="85" y="240" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">  password: { type: String },</text>
      <text x="85" y="260" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24">  createdAt: { type: Date }</text>
      <text x="75" y="280" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">});</text>

      <!-- Middle: Validation & Mapping -->
      <path d="M 300 215 L 360 215" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />
      
      <rect x="360" y="145" width="180" height="140" rx="8" fill="#1e1b4b" stroke="#6366f1" stroke-width="1.5" />
      <text x="450" y="175" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#a5b4fc" text-anchor="middle">2. Mongoose Model</text>
      <rect x="375" y="190" width="150" height="30" rx="4" fill="#0f172a" />
      <text x="450" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#818cf8" text-anchor="middle">model('User', Schema)</text>
      <text x="450" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Data Validation Hooks</text>
      <text x="450" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">BSON Serialization</text>

      <!-- Arrow to DB -->
      <path d="M 540 215 L 600 215" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />

      <!-- MongoDB Collection -->
      <rect x="600" y="120" width="250" height="195" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="725" y="145" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">3. MongoDB (users collection)</text>
      <rect x="615" y="160" width="220" height="140" rx="4" fill="#0f172a" />
      <text x="625" y="180" font-family="'Fira Code', monospace" font-size="9" fill="#86efac">{</text>
      <text x="635" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#fca5a5">  "_id": ObjectId("65f12a..."),</text>
      <text x="635" y="220" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff">  "name": "Learner",</text>
      <text x="635" y="240" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  "email": "learner@mern.io",</text>
      <text x="635" y="260" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">  "password": "$2a$10$eR..."</text>
      <text x="625" y="280" font-family="'Fira Code', monospace" font-size="9" fill="#86efac">}</text>
    `
  },
  "u5_t4_jwt_auth_workflow.svg": {
    title: "JWT Authentication & bcrypt Password Encryption Flow",
    subtitle: "Stateless security: Password salted hashing, JWT signature generation, and Bearer token authorization",
    badgeText: "UNIT 5.4 • WEB SECURITY",
    badgeColor: "#a855f7",
    svg: `
      <!-- JWT Token Decomposition -->
      <g transform="translate(100, 115)">
        <rect x="0" y="0" width="700" height="85" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
        <text x="350" y="25" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#d8b4fe" text-anchor="middle">Anatomy of a Signed JSON Web Token (Base64Url)</text>

        <!-- Header -->
        <rect x="20" y="40" width="200" height="32" rx="4" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" />
        <text x="120" y="60" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#f87171" text-anchor="middle">HEADER: {"alg":"HS256"}</text>

        <text x="230" y="62" font-family="'Fira Code', monospace" font-size="16" fill="#94a3b8">.</text>

        <!-- Payload -->
        <rect x="250" y="40" width="200" height="32" rx="4" fill="#a855f7" fill-opacity="0.2" stroke="#a855f7" />
        <text x="350" y="60" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#c084fc" text-anchor="middle">PAYLOAD: {id, role, exp}</text>

        <text x="460" y="62" font-family="'Fira Code', monospace" font-size="16" fill="#94a3b8">.</text>

        <!-- Signature -->
        <rect x="480" y="40" width="200" height="32" rx="4" fill="#06b6d4" fill-opacity="0.2" stroke="#06b6d4" />
        <text x="580" y="60" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#22d3ee" text-anchor="middle">SIGNATURE: HMACSHA256</text>
      </g>

      <!-- Flow Steps -->
      <!-- Login -->
      <rect x="100" y="220" width="200" height="80" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="200" y="245" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Client Logs In</text>
      <text x="200" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">POST /api/auth/login</text>
      <text x="200" y="285" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8" text-anchor="middle">email + raw password</text>

      <!-- bcrypt verify -->
      <rect x="350" y="220" width="200" height="80" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="450" y="245" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">2. bcrypt.compare()</text>
      <text x="450" y="265" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Validates Salted Hash</text>
      <text x="450" y="285" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">jwt.sign(payload, SECRET)</text>

      <!-- Protected Route -->
      <rect x="600" y="220" width="200" height="80" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="700" y="245" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">3. Authorization Header</text>
      <text x="700" y="265" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8" text-anchor="middle">Bearer &lt;token&gt;</text>
      <text x="700" y="285" font-family="'Inter', sans-serif" font-size="10" fill="#34d399" text-anchor="middle">Access Granted 200 OK</text>
    `
  },
  "u5_t5_mern_cloud_deployment.svg": {
    title: "Full-Stack MERN Integration & Cloud Production Architecture",
    subtitle: "React Frontend build, CORS headers, Node/Express API hosting, and MongoDB Atlas database cloud cluster",
    badgeText: "UNIT 5.5 • DEPLOYMENT",
    badgeColor: "#a855f7",
    svg: `
      <!-- User Client -->
      <circle cx="80" cy="205" r="28" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
      <text x="80" y="210" font-family="'Outfit', sans-serif" font-size="20" fill="#ffffff" text-anchor="middle">👤</text>
      <text x="80" y="250" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">User Browser</text>

      <!-- Arrow to Frontend -->
      <line x1="110" y1="205" x2="160" y2="205" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

      <!-- Frontend Cloud CDN -->
      <rect x="160" y="125" width="190" height="160" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.8" filter="url(#shadow)" />
      <text x="255" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#22d3ee" text-anchor="middle">Frontend: Vercel / Netlify</text>
      <text x="255" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Optimized Static Assets</text>
      <rect x="175" y="185" width="160" height="50" rx="4" fill="#0f172a" />
      <text x="185" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">build/index.html</text>
      <text x="185" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">main.[hash].js (Babel)</text>
      <text x="255" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">Global Edge CDN</text>

      <!-- CORS Arrow -->
      <path d="M 350 205 L 430 205" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="390" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc" text-anchor="middle">CORS API</text>

      <!-- Backend Server Cloud -->
      <rect x="430" y="125" width="200" height="160" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="530" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#818cf8" text-anchor="middle">Backend: Render / AWS</text>
      <text x="530" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Node.js Express Server</text>
      <rect x="445" y="185" width="170" height="50" rx="4" fill="#0f172a" />
      <text x="455" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">Environment (.env)</text>
      <text x="455" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">PORT=5000, JWT_SECRET</text>
      <text x="530" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">PM2 Process Manager</text>

      <!-- Arrow to MongoDB Atlas -->
      <path d="M 630 205 L 700 205" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />

      <!-- MongoDB Atlas Cloud -->
      <rect x="700" y="125" width="170" height="160" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="785" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle">MongoDB Atlas</text>
      <text x="785" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Managed Cloud Cluster</text>
      <rect x="715" y="185" width="140" height="50" rx="4" fill="#0f172a" />
      <text x="725" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">mongodb+srv://...</text>
      <text x="725" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">Encrypted at rest</text>
      <text x="785" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">Automated Backups</text>
    `
  }
};

let count = 0;
for (const [filename, info] of Object.entries(diagrams)) {
  const fullSvg = createSvgWrapper(info.title, info.subtitle, info.badgeText, info.badgeColor, info.svg);
  fs.writeFileSync(path.join(outputDir, filename), fullSvg, 'utf8');
  count++;
}

console.log("Successfully generated " + count + " architectural SVG concept diagrams in " + outputDir);
