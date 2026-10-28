const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'concepts');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function escapeXmlText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function sanitizeSvgXml(rawSvg) {
  // Replace bare & not already part of an entity
  let clean = rawSvg.replace(/&(?!(amp|lt|gt|quot|apos);)/g, '&amp;');
  // Replace non-SVG html elements like <div> inside text
  clean = clean.replace(/<div>/g, '&lt;div&gt;').replace(/<\/div>/g, '&lt;/div&gt;');
  return clean;
}

function createSvgWrapper(title, subtitle, badgeText, badgeColor, innerSvg) {
  const safeBadge = escapeXmlText(badgeText);
  const safeTitle = escapeXmlText(title);
  const safeSubtitle = escapeXmlText(subtitle);
  const safeInner = sanitizeSvgXml(innerSvg);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 440" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120" />
      <stop offset="50%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98" />
    </linearGradient>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c3aed" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0891b2" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e11d48" />
      <stop offset="100%" stop-color="#f43f5e" />
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.45" />
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#10b981" />
    </marker>
    <marker id="arrowPurple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#a855f7" />
    </marker>
    <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="920" height="440" fill="url(#bgGrad)" rx="12" />
  <rect width="918" height="438" x="1" y="1" fill="none" stroke="#334155" stroke-width="1.5" rx="11" />

  <!-- Accent Grid Lines -->
  <g opacity="0.05" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="75" x2="920" y2="75" />
    <line x1="0" y1="150" x2="920" y2="150" />
    <line x1="0" y1="225" x2="920" y2="225" />
    <line x1="0" y1="300" x2="920" y2="300" />
    <line x1="0" y1="375" x2="920" y2="375" />
    <line x1="184" y1="0" x2="184" y2="440" />
    <line x1="368" y1="0" x2="368" y2="440" />
    <line x1="552" y1="0" x2="552" y2="440" />
    <line x1="736" y1="0" x2="736" y2="440" />
  </g>

  <!-- Top Header Badge and Titles -->
  <rect x="28" y="20" width="180" height="26" rx="13" fill="${badgeColor}" fill-opacity="0.18" stroke="${badgeColor}" stroke-width="1.2" />
  <text x="118" y="37" font-family="'Outfit', system-ui, sans-serif" font-size="11" font-weight="700" fill="${badgeColor}" text-anchor="middle" letter-spacing="0.5">${safeBadge}</text>
  
  <text x="28" y="66" font-family="'Outfit', system-ui, sans-serif" font-size="20" font-weight="800" fill="#ffffff">${safeTitle}</text>
  <text x="28" y="86" font-family="'Inter', system-ui, sans-serif" font-size="12" fill="#94a3b8">${safeSubtitle}</text>

  <!-- Diagram Graphical Content Stage -->
  <g transform="translate(0, 16)">
    ${safeInner}
  </g>
</svg>`;
}

// Complete set of 30 concept diagrams
const allDiagrams = {
  // ================= UNIT 1 =================
  "u1_t1_internet_workings.svg": {
    title: "How the Internet Works: Packet Switching & Dynamic IP Routing",
    subtitle: "Data is split into discrete IP packets routed across autonomous border gateway protocol meshes",
    badgeText: "UNIT 1.1 • NETWORKING",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="40" y="130" width="160" height="170" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.6" filter="url(#shadow)" />
      <text x="120" y="160" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">💻 Client Browser</text>
      <text x="120" y="185" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">TCP Connection</text>
      <rect x="55" y="205" width="130" height="28" rx="4" fill="#0284c7" />
      <text x="120" y="223" font-family="'Fira Code', monospace" font-size="10" fill="#ffffff" text-anchor="middle">Source: 192.168.1.5</text>
      <text x="120" y="260" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Segments payload into packets</text>

      <path d="M 200 190 L 290 160" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,4" marker-end="url(#arrow)" />
      <path d="M 200 215 L 290 215" stroke="#a855f7" stroke-width="2.5" stroke-dasharray="4,4" marker-end="url(#arrowPurple)" />
      <path d="M 200 240 L 290 270" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4,4" marker-end="url(#arrowGreen)" />

      <rect x="290" y="115" width="340" height="200" rx="12" fill="#0f172a" stroke="#6366f1" stroke-width="1.8" stroke-dasharray="6,4" filter="url(#shadow)" />
      <text x="460" y="140" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#a5b4fc" text-anchor="middle">🌐 Global IP Router Mesh (Autonomous Systems)</text>

      <circle cx="360" cy="180" r="26" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.8" />
      <text x="360" y="185" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Router A</text>

      <circle cx="560" cy="180" r="26" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.8" />
      <text x="560" y="185" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Router B</text>

      <circle cx="460" cy="255" r="26" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.8" />
      <text x="460" y="260" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#c7d2fe" text-anchor="middle">Router C</text>

      <line x1="386" y1="180" x2="534" y2="180" stroke="#64748b" stroke-width="1.5" />
      <line x1="380" y1="198" x2="440" y2="238" stroke="#64748b" stroke-width="1.5" />
      <line x1="540" y1="198" x2="480" y2="238" stroke="#64748b" stroke-width="1.5" />

      <path d="M 630 215 L 720 215" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)" />

      <rect x="720" y="130" width="160" height="170" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="800" y="160" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">🖥️ Destination Server</text>
      <text x="800" y="185" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">Target Web Host</text>
      <rect x="735" y="205" width="130" height="28" rx="4" fill="#065f46" />
      <text x="800" y="223" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">Dest: 93.184.216.34</text>
      <text x="800" y="260" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">TCP Layer Reassembles Packets</text>
    `
  },
  "u1_t2_dns_ip_resolution.svg": {
    title: "Domain Name System (DNS) Hierarchical Resolution Flow",
    subtitle: "Translating human-readable domain names into 32-bit/128-bit numerical IP addresses",
    badgeText: "UNIT 1.2 • DNS RESOLUTION",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="40" y="125" width="150" height="180" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="115" y="155" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">💻 Client Browser</text>
      <rect x="55" y="175" width="120" height="24" rx="4" fill="#0f172a" />
      <text x="115" y="191" font-family="'Fira Code', monospace" font-size="9" fill="#e2e8f0" text-anchor="middle">"example.com"</text>
      <text x="115" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">1. Checks Cache</text>
      <text x="115" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">2. Queries Resolver</text>

      <path d="M 190 200 L 260 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
      <path d="M 260 220 L 190 220" stroke="#34d399" stroke-width="2" marker-end="url(#arrowGreen)" />
      <text x="225" y="190" font-family="'Inter', sans-serif" font-size="8" fill="#38bdf8" text-anchor="middle">Query</text>
      <text x="225" y="235" font-family="'Inter', sans-serif" font-size="8" fill="#34d399" text-anchor="middle">93.184.216.34</text>

      <rect x="260" y="125" width="160" height="180" rx="8" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.5" />
      <text x="340" y="155" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#818cf8" text-anchor="middle">📡 Recursive Resolver</text>
      <text x="340" y="175" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">(ISP / 8.8.8.8 / 1.1.1.1)</text>
      <rect x="275" y="195" width="130" height="85" rx="4" fill="#0f172a" />
      <text x="340" y="215" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">Iterates across tree:</text>
      <text x="340" y="235" font-family="'Inter', sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">→ Root (.)</text>
      <text x="340" y="252" font-family="'Inter', sans-serif" font-size="9" fill="#a855f7" text-anchor="middle">→ TLD (.com)</text>
      <text x="340" y="269" font-family="'Inter', sans-serif" font-size="9" fill="#10b981" text-anchor="middle">→ Authoritative Name</text>

      <g transform="translate(470, 110)">
        <rect x="0" y="0" width="410" height="60" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.2" />
        <text x="20" y="25" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#38bdf8">1. Root Nameserver (.)</text>
        <text x="20" y="45" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">13 global clusters. Delegates to TLD nameservers (e.g., .com, .org, .edu)</text>

        <rect x="0" y="75" width="410" height="60" rx="6" fill="#2e1065" stroke="#a855f7" stroke-width="1.2" />
        <text x="20" y="100" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#c084fc">2. TLD Nameserver (.com)</text>
        <text x="20" y="120" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Managed by registry. Returns authoritative nameserver for 'example.com'</text>

        <rect x="0" y="150" width="410" height="60" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="1.2" />
        <text x="20" y="175" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399">3. Authoritative Nameserver (example.com)</text>
        <text x="20" y="195" font-family="'Inter', sans-serif" font-size="10" fill="#a7f3d0">Holds DNS A Record: example.com → 93.184.216.34 (TTL: 3600s)</text>
      </g>
    `
  },
  "u1_t3_http_https_handshake.svg": {
    title: "HTTP vs HTTPS Protocols & TLS 1.3 Cryptographic Handshake",
    subtitle: "Upgrading plaintext HTTP/80 into TLS encrypted HTTPS/443 with asymmetric key exchange",
    badgeText: "UNIT 1.3 • PROTOCOLS & SECURITY",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="80" y="125" width="220" height="200" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.8" filter="url(#shadow)" />
      <text x="190" y="155" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#38bdf8" text-anchor="middle">💻 Client Browser</text>
      <rect x="95" y="175" width="190" height="130" rx="6" fill="#0f172a" />
      <text x="110" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">1. ClientHello (TLS 1.3)</text>
      <text x="110" y="225" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Supported Ciphers, Client Random</text>
      <text x="110" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">3. Verify Cert &amp; Compute Key</text>
      <text x="110" y="280" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Derive Symmetric Session Key</text>

      <path d="M 300 200 L 610 200" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="455" y="190" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8" text-anchor="middle">Step 1: ClientHello + Key Share →</text>

      <path d="M 610 240 L 310 240" stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrowPurple)" />
      <text x="455" y="232" font-family="'Fira Code', monospace" font-size="10" fill="#c084fc" text-anchor="middle">← Step 2: ServerHello + Digital Cert (X.509)</text>

      <path d="M 300 280 L 610 280" stroke="#10b981" stroke-width="3" marker-end="url(#arrowGreen)" />
      <text x="455" y="272" font-family="'Fira Code', monospace" font-size="10" font-weight="700" fill="#34d399" text-anchor="middle">🔒 Encrypted HTTP Data Stream (AES-GCM-256) ⇆</text>

      <rect x="620" y="125" width="220" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="730" y="155" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#34d399" text-anchor="middle">🖥️ Web Server (Nginx)</text>
      <rect x="635" y="175" width="190" height="130" rx="6" fill="#0f172a" />
      <text x="650" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#a855f7">2. ServerHello &amp; Cert</text>
      <text x="650" y="225" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Public Key, Certificate Authority</text>
      <text x="650" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">4. Handshake Finished</text>
      <text x="650" y="280" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Zero Plaintext Sniffing Risk</text>
    `
  },
  "u1_t4_3tier_architecture.svg": {
    title: "Classic 3-Tier Enterprise Web Application Architecture",
    subtitle: "Separation of concerns across Presentation Tier, Business Logic Tier, and Data Persistence Tier",
    badgeText: "UNIT 1.4 • 3-TIER ARCHITECTURE",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="40" y="125" width="240" height="190" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.8" filter="url(#shadow)" />
      <text x="160" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Presentation Tier</text>
      <text x="160" y="175" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Client Layer (Browser / SPA)</text>
      <rect x="55" y="190" width="210" height="105" rx="6" fill="#0f172a" />
      <text x="70" y="215" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ HTML5 Structure</text>
      <text x="70" y="238" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ CSS3 Flexbox &amp; Grid</text>
      <text x="70" y="261" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ React Components / State</text>
      <text x="70" y="284" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">fetch('/api/v1/orders')</text>

      <path d="M 280 215 L 340 215" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)" />

      <rect x="340" y="125" width="240" height="190" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="460" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#818cf8" text-anchor="middle">2. Application Logic Tier</text>
      <text x="460" y="175" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Middleware &amp; API Server</text>
      <rect x="355" y="190" width="210" height="105" rx="6" fill="#0f172a" />
      <text x="370" y="215" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Node.js &amp; Express.js</text>
      <text x="370" y="238" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ JWT Auth &amp; Permissions</text>
      <text x="370" y="261" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Business Rules &amp; Pricing</text>
      <text x="370" y="284" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8">Order.create(req.body)</text>

      <path d="M 580 215 L 640 215" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />

      <rect x="640" y="125" width="240" height="190" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="760" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">3. Data Persistence Tier</text>
      <text x="760" y="175" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">Database &amp; Storage</text>
      <rect x="655" y="190" width="210" height="105" rx="6" fill="#0f172a" />
      <text x="670" y="215" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ MongoDB NoSQL Cluster</text>
      <text x="670" y="238" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ BSON Documents &amp; Indexes</text>
      <text x="670" y="261" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ ACID Transactions</text>
      <text x="670" y="284" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">db.orders.insertOne()</text>
    `
  },
  "u1_t5_html5_semantics.svg": {
    title: "Semantic HTML5 Structural Layout & Accessibility",
    subtitle: "Replacing non-semantic `<div>` soup with meaningful tags that assist Screen Readers and SEO Crawlers",
    badgeText: "UNIT 1.5 • SEMANTIC HTML5",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="180" y="115" width="560" height="235" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
      <text x="200" y="138" font-family="'Fira Code', monospace" font-size="12" fill="#94a3b8">&lt;body&gt;</text>

      <rect x="200" y="148" width="520" height="32" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2" />
      <text x="215" y="169" font-family="'Fira Code', monospace" font-size="11" fill="#38bdf8">&lt;header&gt; &lt;nav&gt; Site Branding &amp; Primary Links &lt;/nav&gt; &lt;/header&gt;</text>

      <rect x="200" y="188" width="340" height="98" rx="4" fill="#1e293b" stroke="#10b981" stroke-width="1.2" />
      <text x="215" y="210" font-family="'Fira Code', monospace" font-size="11" fill="#34d399">&lt;main&gt; Primary Document Content</text>
      <rect x="215" y="222" width="310" height="52" rx="4" fill="#0f172a" stroke="#22c55e" stroke-dasharray="3,3" />
      <text x="225" y="242" font-family="'Fira Code', monospace" font-size="10" fill="#86efac">&lt;article&gt; Self-contained post &lt;/article&gt;</text>
      <text x="225" y="260" font-family="'Fira Code', monospace" font-size="10" fill="#86efac">&lt;section&gt; Thematic chapter grouping &lt;/section&gt;</text>

      <rect x="550" y="188" width="170" height="98" rx="4" fill="#1e293b" stroke="#eab308" stroke-width="1.2" />
      <text x="565" y="210" font-family="'Fira Code', monospace" font-size="11" fill="#fde047">&lt;aside&gt;</text>
      <text x="565" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Sidebar Widgets</text>
      <text x="565" y="255" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Related Links &amp; TOC</text>

      <rect x="200" y="294" width="520" height="28" rx="4" fill="#1e293b" stroke="#f43f5e" stroke-width="1.2" />
      <text x="215" y="312" font-family="'Fira Code', monospace" font-size="11" fill="#fb7185">&lt;footer&gt; Copyright, Contact Info, Privacy Policy &lt;/footer&gt;</text>
    `
  },
  "u1_t6_html_forms_validation.svg": {
    title: "HTML Forms Architecture & Client-Side Validation Pipeline",
    subtitle: "Structuring user input with semantic controls and the browser Constraint Validation API before HTTP submission",
    badgeText: "UNIT 1.6 • WEB FORMS",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="50" y="125" width="380" height="200" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.8" filter="url(#shadow)" />
      <text x="240" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">&lt;form action="/api/register" method="POST"&gt;</text>
      <rect x="65" y="170" width="350" height="140" rx="6" fill="#0f172a" />
      
      <text x="80" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">&lt;label for="email"&gt;Email Address&lt;/label&gt;</text>
      <rect x="80" y="202" width="320" height="24" rx="4" fill="#1e293b" stroke="#10b981" />
      <text x="90" y="218" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">name="email" type="email" required</text>

      <text x="80" y="248" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">&lt;label for="pwd"&gt;Password (min 8 chars)&lt;/label&gt;</text>
      <rect x="80" y="255" width="320" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" />
      <text x="90" y="271" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">type="password" pattern=".{8,}"</text>

      <path d="M 430 215 L 500 215" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)" />
      <text x="465" y="200" font-family="'Inter', sans-serif" font-size="9" fill="#f59e0b" text-anchor="middle">Validation</text>

      <rect x="500" y="125" width="370" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="685" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">Browser Constraint Validation Engine</text>
      <rect x="515" y="170" width="340" height="140" rx="6" fill="#0f172a" />
      <text x="530" y="195" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">1. Checks pseudo-classes: <tspan fill="#34d399">:valid</tspan> vs <tspan fill="#f87171">:invalid</tspan></text>
      <text x="530" y="220" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">2. Prevents submission if <tspan fill="#fbbf24">form.checkValidity() === false</tspan></text>
      <text x="530" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">3. Packages payload into <tspan fill="#38bdf8">multipart/form-data</tspan> or <tspan fill="#a855f7">JSON</tspan></text>
      <text x="530" y="275" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">✓ e.preventDefault() for AJAX submission via Axios</text>
    `
  },
  "u1_t7_css_box_model.svg": {
    title: "CSS Box Model & Flexbox Layout Mechanics",
    subtitle: "Concentric boxes calculating layout footprint: Margin -> Border -> Padding -> Content",
    badgeText: "UNIT 1.7 • CSS3 STYLING",
    badgeColor: "#38bdf8",
    svg: `
      <rect x="150" y="115" width="620" height="210" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="5,4" />
      <text x="175" y="138" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#fbbf24">MARGIN (Outer Spacing)</text>

      <rect x="210" y="145" width="500" height="150" rx="6" fill="rgba(239, 68, 68, 0.12)" stroke="#ef4444" stroke-width="2" />
      <text x="230" y="166" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#f87171">BORDER (Physical Stroke)</text>

      <rect x="270" y="172" width="380" height="96" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1.6" />
      <text x="290" y="191" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#34d399">PADDING (Inner Breathing Room)</text>

      <rect x="340" y="200" width="240" height="50" rx="4" fill="#0284c7" />
      <text x="460" y="230" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">CONTENT (Width x Height)</text>

      <rect x="150" y="335" width="620" height="28" rx="6" fill="#1e293b" />
      <text x="460" y="353" font-family="'Fira Code', monospace" font-size="11" fill="#a5b4fc" text-anchor="middle">Rendered Width = Width + 2*(Padding) + 2*(Border) + 2*(Margin) (box-sizing: border-box recommended)</text>
    `
  },

  // ================= UNIT 2 =================
  "u2_t1_js_scoping_hoisting.svg": {
    title: "JavaScript Scoping, Hoisting & Temporal Dead Zone (TDZ)",
    subtitle: "Contrasting legacy `var` function scope with modern ES6 `let` & `const` block scoping in TDZ",
    badgeText: "UNIT 2.1 • JAVASCRIPT CORE",
    badgeColor: "#eab308",
    svg: `
      <rect x="50" y="120" width="380" height="205" rx="10" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.6" filter="url(#shadow)" />
      <text x="240" y="150" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#f87171" text-anchor="middle">Legacy: var keyword</text>
      <rect x="65" y="165" width="350" height="145" rx="6" fill="#0f172a" />
      <text x="80" y="190" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">console.log(x); // undefined (Hoisted!)</text>
      <text x="80" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">var x = 10;</text>
      <text x="80" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">⚠️ Function Scope (Ignores if/for blocks)</text>
      <text x="80" y="258" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">⚠️ Can be re-declared without error</text>
      <text x="80" y="280" font-family="'Inter', sans-serif" font-size="10" fill="#f87171">✗ Prone to subtle memory leaks</text>

      <rect x="490" y="120" width="380" height="205" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="680" y="150" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#34d399" text-anchor="middle">Modern ES6: let &amp; const</text>
      <rect x="505" y="165" width="350" height="145" rx="6" fill="#0f172a" />
      <text x="520" y="190" font-family="'Fira Code', monospace" font-size="10" fill="#f59e0b">// Temporal Dead Zone (TDZ)</text>
      <text x="520" y="210" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">console.log(y); // ReferenceError!</text>
      <text x="520" y="230" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">let y = 20;</text>
      <text x="520" y="258" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">✓ Strict Block Scope: { enclosed }</text>
      <text x="520" y="280" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">✓ const enforces immutable reference</text>
    `
  },
  "u2_t2_array_methods_pipeline.svg": {
    title: "Functional Array Processing: map(), filter(), reduce()",
    subtitle: "Pure immutable pipelines transforming collections without mutating input state",
    badgeText: "UNIT 2.2 • FUNCTIONAL JS",
    badgeColor: "#eab308",
    svg: `
      <rect x="40" y="130" width="160" height="180" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="120" y="160" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Raw Data</text>
      <rect x="55" y="180" width="130" height="110" rx="4" fill="#0f172a" />
      <text x="65" y="205" font-family="'Fira Code', monospace" font-size="10" fill="#e2e8f0">[10, 25, 40, 5]</text>
      <text x="65" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">Original Array</text>
      <text x="65" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399">Immutable state</text>

      <path d="M 200 220 L 260 220" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowAmber)" />

      <rect x="260" y="130" width="180" height="180" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="350" y="160" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#fbbf24" text-anchor="middle">.filter(x => x >= 20)</text>
      <rect x="275" y="180" width="150" height="110" rx="4" fill="#0f172a" />
      <text x="285" y="205" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">[25, 40]</text>
      <text x="285" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">Removes non-matches</text>
      <text x="285" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Length: 4 → 2</text>

      <path d="M 440 220 L 500 220" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrow)" />

      <rect x="500" y="130" width="180" height="180" rx="8" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.5" />
      <text x="590" y="160" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#22d3ee" text-anchor="middle">.map(x => x * 1.18)</text>
      <rect x="515" y="180" width="150" height="110" rx="4" fill="#0f172a" />
      <text x="525" y="205" font-family="'Fira Code', monospace" font-size="10" fill="#22d3ee">[29.5, 47.2]</text>
      <text x="525" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">Transforms elements</text>
      <text x="525" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Adds 18% GST tax</text>

      <path d="M 680 220 L 740 220" stroke="#10b981" stroke-width="2" marker-end="url(#arrowGreen)" />

      <rect x="740" y="130" width="150" height="180" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="815" y="160" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">.reduce()</text>
      <rect x="750" y="180" width="130" height="110" rx="4" fill="#0f172a" />
      <text x="760" y="205" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#34d399">76.70</text>
      <text x="760" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">Final aggregate</text>
      <text x="760" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399">Single total sum</text>
    `
  },
  "u2_t3_prototype_closures.svg": {
    title: "Prototype Inheritance Chain & Lexical Scope Closures",
    subtitle: "Memory efficiency through prototype linkage and persistent state encapsulation in inner scopes",
    badgeText: "UNIT 2.3 • OBJECTS & CLOSURES",
    badgeColor: "#eab308",
    svg: `
      <rect x="50" y="125" width="380" height="200" rx="10" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.6" filter="url(#shadow)" />
      <text x="240" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#c084fc" text-anchor="middle">Prototype Chain Delegation</text>
      <rect x="65" y="170" width="350" height="140" rx="6" fill="#0f172a" />
      <text x="80" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">const user = { name: "Learner" };</text>
      <text x="80" y="215" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">user.__proto__ → User.prototype</text>
      <text x="80" y="235" font-family="'Fira Code', monospace" font-size="10" fill="#a855f7">User.prototype.__proto__ → Object.prototype</text>
      <text x="80" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">Object.prototype.__proto__ → null</text>
      <text x="80" y="285" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">Methods are shared in prototype, avoiding duplicate memory</text>

      <rect x="490" y="125" width="380" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="680" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">Lexical Closure Architecture</text>
      <rect x="505" y="170" width="350" height="140" rx="6" fill="#0f172a" />
      <text x="520" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">function createCounter() {</text>
      <text x="535" y="215" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">  let count = 0; // Private enclosed state</text>
      <text x="535" y="235" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">  return () => ++count;</text>
      <text x="520" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">}</text>
      <text x="520" y="285" font-family="'Inter', sans-serif" font-size="9" fill="#a7f3d0">Inner function retains access to parent scope even after return</text>
    `
  },
  "u2_t4_dom_tree_hierarchy.svg": {
    title: "HTML DOM Tree Node Hierarchy & Selection API",
    subtitle: "Converting parsed HTML markup into an in-memory tree of Document, Element, and Text Nodes",
    badgeText: "UNIT 2.4 • DOM HIERARCHY",
    badgeColor: "#eab308",
    svg: `
      <rect x="360" y="115" width="180" height="40" rx="6" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.8" />
      <text x="450" y="140" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">&lt;document&gt;</text>

      <path d="M 450 155 L 450 180" stroke="#64748b" stroke-width="2" />

      <rect x="360" y="180" width="180" height="40" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1.8" />
      <text x="450" y="205" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#818cf8" text-anchor="middle">&lt;html lang="en"&gt;</text>

      <path d="M 390 220 L 250 250" stroke="#64748b" stroke-width="2" />
      <path d="M 510 220 L 650 250" stroke="#64748b" stroke-width="2" />

      <rect x="160" y="250" width="180" height="40" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5" />
      <text x="250" y="275" font-family="'Fira Code', monospace" font-size="11" fill="#c084fc" text-anchor="middle">&lt;head&gt; (title, meta)</text>

      <rect x="560" y="250" width="180" height="40" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5" />
      <text x="650" y="275" font-family="'Fira Code', monospace" font-size="11" fill="#34d399" text-anchor="middle">&lt;body&gt; (visible UI)</text>

      <path d="M 600 290 L 520 320" stroke="#64748b" stroke-width="1.5" />
      <path d="M 700 290 L 780 320" stroke="#64748b" stroke-width="1.5" />

      <rect x="440" y="320" width="160" height="38" rx="4" fill="#1e293b" stroke="#eab308" />
      <text x="520" y="344" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24" text-anchor="middle">&lt;h1 id="hero"&gt;</text>

      <rect x="700" y="320" width="160" height="38" rx="4" fill="#1e293b" stroke="#38bdf8" />
      <text x="780" y="344" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8" text-anchor="middle">&lt;button class="btn"&gt;</text>
    `
  },
  "u2_t5_event_bubbling_capturing.svg": {
    title: "DOM Event Propagation: Capturing vs Bubbling Phase",
    subtitle: "Events travel down from Window to Target (Capturing Phase), then bubble back up to Window",
    badgeText: "UNIT 2.5 • EVENT LIFECYCLE",
    badgeColor: "#eab308",
    svg: `
      <rect x="60" y="115" width="220" height="210" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="170" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Capturing Phase</text>
      <text x="170" y="165" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">(Trickle Down Phase)</text>
      <rect x="75" y="180" width="190" height="130" rx="4" fill="#0f172a" />
      <text x="85" y="205" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">1. Window</text>
      <text x="85" y="230" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">2. Document</text>
      <text x="85" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">3. &lt;html&gt; → &lt;body&gt;</text>
      <text x="85" y="280" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">↓ addEventListener(..., true)</text>

      <rect x="350" y="150" width="220" height="140" rx="8" fill="url(#cardGrad)" stroke="#eab308" stroke-width="2" filter="url(#shadow)" />
      <text x="460" y="185" font-family="'Outfit', sans-serif" font-size="15" font-weight="800" fill="#fbbf24" text-anchor="middle">🎯 2. Target Phase</text>
      <rect x="365" y="205" width="190" height="65" rx="4" fill="#0f172a" />
      <text x="460" y="230" font-family="'Fira Code', monospace" font-size="11" fill="#ffffff" text-anchor="middle">&lt;button id="cta"&gt;</text>
      <text x="460" y="250" font-family="'Inter', sans-serif" font-size="9" fill="#fde047" text-anchor="middle">e.target === Event Origin</text>

      <rect x="640" y="115" width="220" height="210" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="750" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">3. Bubbling Phase</text>
      <text x="750" y="165" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">(Default: Bubble Upwards)</text>
      <rect x="655" y="180" width="190" height="130" rx="4" fill="#0f172a" />
      <text x="665" y="205" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">↑ button → div.card</text>
      <text x="665" y="230" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">↑ div.card → body</text>
      <text x="665" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">↑ body → document</text>
      <text x="665" y="285" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">e.stopPropagation() halts</text>
    `
  },
  "u2_t6_json_serialization.svg": {
    title: "JSON Data Serialization & Deserialization Pipeline",
    subtitle: "Converting live in-memory JavaScript objects into portable UTF-8 strings and vice-versa",
    badgeText: "UNIT 2.6 • JSON PROTOCOL",
    badgeColor: "#eab308",
    svg: `
      <rect x="50" y="125" width="340" height="200" rx="10" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.6" filter="url(#shadow)" />
      <text x="220" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">In-Memory JavaScript Object</text>
      <rect x="65" y="170" width="310" height="140" rx="6" fill="#0f172a" />
      <text x="80" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">const product = {</text>
      <text x="95" y="215" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">  id: 101,</text>
      <text x="95" y="235" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">  name: "React Guide",</text>
      <text x="95" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">  tags: ["web", "mca"]</text>
      <text x="80" y="275" font-family="'Fira Code', monospace" font-size="10" fill="#cbd5e1">};</text>

      <path d="M 390 195 L 530 195" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />
      <text x="460" y="185" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">JSON.stringify() →</text>

      <path d="M 530 255 L 390 255" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="460" y="245" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8" text-anchor="middle">← JSON.parse()</text>

      <rect x="530" y="125" width="340" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="700" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">Serialized JSON String (Over Wire)</text>
      <rect x="545" y="170" width="310" height="140" rx="6" fill="#0f172a" />
      <text x="560" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#a7f3d0">{"id":101,"name":"React Guide"</text>
      <text x="560" y="220" font-family="'Fira Code', monospace" font-size="9" fill="#a7f3d0">,"tags":["web","mca"]}</text>
      <text x="560" y="255" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">✓ UTF-8 Network Payload</text>
      <text x="560" y="275" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8">✓ Universal Cross-Language Interchange</text>
    `
  },

  // ================= UNIT 3 (FOCUS) =================
  "u3_t1_mern_mvc_component.svg": {
    title: "MERN Stack Architecture & Component vs MVC Paradigm",
    subtitle: "Unifying MongoDB, Express.js, React.js, and Node.js into a single cohesive JavaScript ecosystem",
    badgeText: "UNIT 3.1 • MERN FOUNDATIONS",
    badgeColor: "#22c55e",
    svg: `
      <rect x="40" y="120" width="180" height="185" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.8" filter="url(#shadow)" />
      <text x="130" y="150" font-family="'Outfit', sans-serif" font-size="15" font-weight="800" fill="#22d3ee" text-anchor="middle">⚛️ React.js Tier</text>
      <text x="130" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Component-Driven UI</text>
      <rect x="55" y="185" width="150" height="65" rx="4" fill="#0f172a" />
      <text x="65" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">&lt;Navbar /&gt;</text>
      <text x="65" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">&lt;ProductGrid&gt;</text>
      <text x="80" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">&lt;ItemCard /&gt;</text>
      <text x="130" y="280" font-family="'Inter', sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">Virtual DOM &amp; State</text>

      <path d="M 220 210 L 260 210" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arrow)" />

      <rect x="260" y="120" width="180" height="185" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="350" y="150" font-family="'Outfit', sans-serif" font-size="15" font-weight="800" fill="#818cf8" text-anchor="middle">⚡ Express.js Tier</text>
      <text x="350" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">RESTful Routing API</text>
      <rect x="275" y="185" width="150" height="65" rx="4" fill="#0f172a" />
      <text x="285" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">app.use(authJwt)</text>
      <text x="285" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">app.get('/api/items')</text>
      <text x="285" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">res.json(data)</text>
      <text x="350" y="280" font-family="'Inter', sans-serif" font-size="9" fill="#a5b4fc" text-anchor="middle">Middleware Pipeline</text>

      <path d="M 440 210 L 480 210" stroke="#22c55e" stroke-width="2.5" marker-end="url(#arrowGreen)" />

      <rect x="480" y="120" width="180" height="185" rx="10" fill="url(#cardGrad)" stroke="#22c55e" stroke-width="1.8" filter="url(#shadow)" />
      <text x="570" y="150" font-family="'Outfit', sans-serif" font-size="15" font-weight="800" fill="#4ade80" text-anchor="middle">🟢 Node.js Engine</text>
      <text x="570" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">V8 Runtime &amp; Libuv</text>
      <rect x="495" y="185" width="150" height="65" rx="4" fill="#0f172a" />
      <text x="505" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#4ade80">Event Loop (Tick)</text>
      <text x="505" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">Async I/O Threads</text>
      <text x="505" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">V8 Engine JIT</text>
      <text x="570" y="280" font-family="'Inter', sans-serif" font-size="9" fill="#86efac" text-anchor="middle">Non-blocking Execution</text>

      <path d="M 660 210 L 700 210" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />

      <rect x="700" y="120" width="180" height="185" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="790" y="150" font-family="'Outfit', sans-serif" font-size="15" font-weight="800" fill="#34d399" text-anchor="middle">🍃 MongoDB Tier</text>
      <text x="790" y="170" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">NoSQL Document Store</text>
      <rect x="715" y="185" width="150" height="65" rx="4" fill="#0f172a" />
      <text x="725" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">{ _id: 101,</text>
      <text x="735" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  name: "Book",</text>
      <text x="725" y="238" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  price: 499 }</text>
      <text x="790" y="280" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">Flexible BSON Docs</text>
    `
  },
  "u3_t2_browser_vs_node.svg": {
    title: "Runtime Environment: Browser JS vs Node.js Server",
    subtitle: "Shared Google V8 engine with distinct host environments: Web APIs/DOM in Browser vs Libuv/OS in Node",
    badgeText: "UNIT 3.2 • RUNTIME ARCHITECTURE",
    badgeColor: "#22c55e",
    svg: `
      <rect x="330" y="110" width="260" height="55" rx="8" fill="#1e1b4b" stroke="#eab308" stroke-width="2" />
      <text x="460" y="135" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#fde047" text-anchor="middle">⚡ Shared Google V8 Engine</text>
      <text x="460" y="152" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Parser, Ignition Bytecode, Turbofan JIT</text>

      <path d="M 330 138 L 220 138 L 220 185" stroke="#06b6d4" stroke-width="2" marker-end="url(#arrow)" />
      <path d="M 590 138 L 700 138 L 700 185" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowGreen)" />

      <rect x="70" y="185" width="300" height="175" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.8" filter="url(#shadow)" />
      <text x="220" y="212" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#22d3ee" text-anchor="middle">🌐 Browser Environment</text>
      <rect x="85" y="225" width="270" height="120" rx="6" fill="#0f172a" />
      <text x="100" y="248" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Globals: <tspan fill="#38bdf8">window, document</tspan></text>
      <text x="100" y="270" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Web APIs: DOM, Fetch, LocalStorage</text>
      <text x="100" y="292" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Geolocation, Canvas, Web Audio</text>
      <text x="100" y="315" font-family="'Inter', sans-serif" font-size="11" fill="#f87171">✗ Sandboxed: No direct filesystem access</text>

      <rect x="550" y="185" width="300" height="175" rx="10" fill="url(#cardGrad)" stroke="#22c55e" stroke-width="1.8" filter="url(#shadow)" />
      <text x="700" y="212" font-family="'Outfit', sans-serif" font-size="15" font-weight="700" fill="#4ade80" text-anchor="middle">🟢 Node.js Server Environment</text>
      <rect x="565" y="225" width="270" height="120" rx="6" fill="#0f172a" />
      <text x="580" y="248" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Globals: <tspan fill="#4ade80">global, process, Buffer</tspan></text>
      <text x="580" y="270" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Libuv C++ Event Loop &amp; Thread Pool</text>
      <text x="580" y="292" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Direct OS Access: fs, net, http, os</text>
      <text x="580" y="315" font-family="'Inter', sans-serif" font-size="11" fill="#f87171">✗ No window, document, or DOM APIs</text>
    `
  },
  "u3_t3_node_core_modules.svg": {
    title: "Node.js Built-in Core Modules Ecosystem",
    subtitle: "Built-in low-level modules compiled directly into the Node.js binary without npm installation",
    badgeText: "UNIT 3.3 • CORE MODULES",
    badgeColor: "#22c55e",
    svg: `
      <g transform="translate(40, 120)">
        <rect x="0" y="0" width="250" height="95" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
        <text x="20" y="28" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#38bdf8">1. 'fs' / 'fs/promises'</text>
        <text x="20" y="48" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">File System Operations</text>
        <text x="20" y="68" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">readFile, writeFile, createReadStream</text>

        <rect x="290" y="0" width="250" height="95" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
        <text x="310" y="28" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#34d399">2. 'http' &amp; 'https'</text>
        <text x="310" y="48" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">HTTP Server &amp; Client</text>
        <text x="310" y="68" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">createServer((req, res) => ...)</text>

        <rect x="580" y="0" width="250" height="95" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.5" />
        <text x="600" y="28" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#c084fc">3. 'path'</text>
        <text x="600" y="48" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Cross-Platform Paths</text>
        <text x="600" y="68" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">path.join(__dirname, 'public')</text>

        <rect x="0" y="115" width="250" height="95" rx="8" fill="url(#cardGrad)" stroke="#eab308" stroke-width="1.5" />
        <text x="20" y="143" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#fbbf24">4. 'events'</text>
        <text x="20" y="163" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">EventEmitter Pattern</text>
        <text x="20" y="183" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">emitter.on('data', handler)</text>

        <rect x="290" y="115" width="250" height="95" rx="8" fill="url(#cardGrad)" stroke="#f43f5e" stroke-width="1.5" />
        <text x="310" y="143" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#fb7185">5. 'os'</text>
        <text x="310" y="163" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Operating System Diagnostics</text>
        <text x="310" y="183" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">os.cpus(), os.freemem(), os.totalmem()</text>

        <rect x="580" y="115" width="250" height="95" rx="8" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.5" />
        <text x="600" y="143" font-family="'Fira Code', monospace" font-size="13" font-weight="700" fill="#22d3ee">6. 'crypto'</text>
        <text x="600" y="163" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Hashing &amp; Cryptography</text>
        <text x="600" y="183" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">crypto.randomBytes(32), sha256</text>
      </g>
    `
  },
  "u3_t4_async_callbacks_promises.svg": {
    title: "Asynchronous Evolution: Callbacks -> Promises -> async/await",
    subtitle: "Overcoming Callback Hell (Pyramid of Doom) with linear, readable Promise chaining and try/catch",
    badgeText: "UNIT 3.4 • ASYNC PATTERNS",
    badgeColor: "#22c55e",
    svg: `
      <rect x="40" y="125" width="260" height="200" rx="8" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.5" />
      <text x="170" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#f87171" text-anchor="middle">1. Nested Callbacks (Hell)</text>
      <rect x="55" y="170" width="230" height="140" rx="4" fill="#0f172a" />
      <text x="65" y="192" font-family="'Fira Code', monospace" font-size="8.5" fill="#f87171">getUser(id, (user) => {</text>
      <text x="75" y="210" font-family="'Fira Code', monospace" font-size="8.5" fill="#f59e0b">  getOrders(user, (o) => {</text>
      <text x="85" y="228" font-family="'Fira Code', monospace" font-size="8.5" fill="#eab308">    getInvoice(o, (inv) => {</text>
      <text x="95" y="246" font-family="'Fira Code', monospace" font-size="8.5" fill="#cbd5e1">      // Pyramid of Doom</text>
      <text x="85" y="264" font-family="'Fira Code', monospace" font-size="8.5" fill="#eab308">    });</text>
      <text x="75" y="282" font-family="'Fira Code', monospace" font-size="8.5" fill="#f59e0b">  });</text>
      <text x="65" y="300" font-family="'Fira Code', monospace" font-size="8.5" fill="#f87171">});</text>

      <path d="M 300 220 L 335 220" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowAmber)" />

      <rect x="335" y="125" width="260" height="200" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="465" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">2. Promises (.then() Chaining)</text>
      <rect x="350" y="170" width="230" height="140" rx="4" fill="#0f172a" />
      <text x="360" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">getUser(id)</text>
      <text x="370" y="215" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">.then(getOrders)</text>
      <text x="370" y="235" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">.then(getInvoice)</text>
      <text x="370" y="255" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">.then(sendEmail)</text>
      <text x="370" y="275" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">.catch(handleErr);</text>

      <path d="M 595 220 L 630 220" stroke="#10b981" stroke-width="2" marker-end="url(#arrowGreen)" />

      <rect x="630" y="125" width="260" height="200" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="760" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">3. Modern async / await</text>
      <rect x="645" y="170" width="230" height="140" rx="4" fill="#0f172a" />
      <text x="655" y="192" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">try {</text>
      <text x="665" y="210" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  const user = await getUser();</text>
      <text x="665" y="230" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  const orders = await getOrders();</text>
      <text x="665" y="250" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">  const inv = await getInv();</text>
      <text x="655" y="272" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">} catch (err) {</text>
      <text x="665" y="292" font-family="'Fira Code', monospace" font-size="9" fill="#94a3b8">  console.error(err);</text>
      <text x="655" y="304" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">}</text>
    `
  },
  "u3_t5_event_loop_phases.svg": {
    title: "Node.js Event Loop Architecture & Phases (Libuv)",
    subtitle: "Non-blocking single-threaded execution processing Timers, I/O Polling, Check (setImmediate), and Microtasks",
    badgeText: "UNIT 3.5 • EVENT LOOP",
    badgeColor: "#22c55e",
    svg: `
      <rect x="40" y="130" width="220" height="190" rx="8" fill="#1e1b4b" stroke="#eab308" stroke-width="1.8" />
      <text x="150" y="158" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#fde047" text-anchor="middle">⚡ Microtask Queue</text>
      <text x="150" y="178" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">HIGHEST PRIORITY (Runs between phases)</text>
      <rect x="55" y="195" width="190" height="105" rx="4" fill="#0f172a" />
      <text x="65" y="222" font-family="'Fira Code', monospace" font-size="10" fill="#fde047">1. process.nextTick()</text>
      <text x="65" y="245" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">2. Promise.resolve()</text>
      <text x="65" y="268" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">   queueMicrotask()</text>
      <text x="65" y="290" font-family="'Inter', sans-serif" font-size="9" fill="#34d399">Emptied completely before next phase</text>

      <path d="M 260 215 L 310 215" stroke="#eab308" stroke-width="2.5" marker-end="url(#arrowAmber)" />

      <g transform="translate(310, 115)">
        <rect x="0" y="0" width="360" height="215" rx="12" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
        <text x="180" y="28" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#34d399" text-anchor="middle">🔄 Libuv Event Loop Macrotask Cycle</text>

        <rect x="20" y="42" width="320" height="34" rx="4" fill="#0f172a" stroke="#38bdf8" />
        <text x="35" y="63" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">Phase 1: Timers (setTimeout, setInterval)</text>

        <rect x="20" y="82" width="320" height="34" rx="4" fill="#0f172a" stroke="#6366f1" />
        <text x="35" y="103" font-family="'Fira Code', monospace" font-size="10" fill="#818cf8">Phase 2: Pending Callbacks (I/O errors, network)</text>

        <rect x="20" y="122" width="320" height="34" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="2" />
        <text x="35" y="143" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">Phase 3: Poll (Fetch new I/O events, block if idle)</text>

        <rect x="20" y="162" width="320" height="34" rx="4" fill="#0f172a" stroke="#a855f7" />
        <text x="35" y="183" font-family="'Fira Code', monospace" font-size="10" fill="#c084fc">Phase 4: Check (setImmediate callbacks)</text>
      </g>

      <path d="M 670 215 L 710 215" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />

      <rect x="710" y="130" width="180" height="190" rx="8" fill="#1e1b4b" stroke="#38bdf8" stroke-width="1.8" />
      <text x="800" y="158" font-family="'Outfit', sans-serif" font-size="14" font-weight="800" fill="#38bdf8" text-anchor="middle">🧵 Libuv Thread Pool</text>
      <text x="800" y="178" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">(Default: 4 C++ Worker Threads)</text>
      <rect x="725" y="195" width="150" height="105" rx="4" fill="#0f172a" />
      <text x="735" y="222" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• File I/O (fs)</text>
      <text x="735" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• DNS lookups</text>
      <text x="735" y="268" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• Crypto hashing</text>
      <text x="735" y="290" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">UV_THREADPOOL_SIZE</text>
    `
  },
  "u3_t6_npm_package_ecosystem.svg": {
    title: "HTTP Server Creation & Node Package Manager (npm)",
    subtitle: "Bootstrapping HTTP services, managing semantic versioning (semver), package.json and node_modules",
    badgeText: "UNIT 3.6 • HTTP & NPM",
    badgeColor: "#22c55e",
    svg: `
      <rect x="40" y="125" width="380" height="200" rx="10" fill="url(#cardGrad)" stroke="#22c55e" stroke-width="1.6" filter="url(#shadow)" />
      <text x="230" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#4ade80" text-anchor="middle">Raw Node.js 'http' Server</text>
      <rect x="55" y="170" width="350" height="140" rx="6" fill="#0f172a" />
      <text x="70" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#a5b4fc">const http = require('http');</text>
      <text x="70" y="215" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">const server = http.createServer((req, res) => {</text>
      <text x="85" y="235" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">  res.writeHead(200, { 'Content-Type': 'application/json' });</text>
      <text x="85" y="255" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">  res.end(JSON.stringify({ status: 'Online' }));</text>
      <text x="70" y="275" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">});</text>
      <text x="70" y="295" font-family="'Fira Code', monospace" font-size="9.5" fill="#a5b4fc">server.listen(3000);</text>

      <rect x="490" y="125" width="390" height="200" rx="10" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.6" filter="url(#shadow)" />
      <text x="685" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#f87171" text-anchor="middle">npm Package Management Architecture</text>
      <rect x="505" y="170" width="360" height="140" rx="6" fill="#0f172a" />
      <text x="520" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#fbbf24">package.json: Project metadata &amp; scripts</text>
      <text x="520" y="218" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">package-lock.json: Exact cryptographic dependency tree</text>
      <text x="520" y="242" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">node_modules/: Installed binary/source packages</text>
      <text x="520" y="268" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Semver: <tspan fill="#f87171">^4.18.2</tspan> (Minor/Patch updates compatible)</text>
      <text x="520" y="292" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">Scripts: <tspan fill="#4ade80">npm run dev</tspan> executes nodemon watch</text>
    `
  },

  // ================= UNIT 4 (FOCUS) =================
  "u4_t1_vdom_diffing_reconciliation.svg": {
    title: "React Virtual DOM Diffing & Reconciliation Algorithm",
    subtitle: "Batching UI mutations in memory and applying minimal DOM patches via Fiber heuristic diffing",
    badgeText: "UNIT 4.1 • REACT INTERNALS",
    badgeColor: "#06b6d4",
    svg: `
      <rect x="50" y="125" width="230" height="200" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.6" filter="url(#shadow)" />
      <text x="165" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#22d3ee" text-anchor="middle">1. Previous VDOM Tree</text>
      <rect x="65" y="170" width="200" height="140" rx="6" fill="#0f172a" />
      <circle cx="165" cy="195" r="14" fill="#1e293b" stroke="#38bdf8" />
      <circle cx="120" cy="240" r="12" fill="#1e293b" stroke="#38bdf8" />
      <circle cx="210" cy="240" r="12" fill="#1e293b" stroke="#38bdf8" />
      <circle cx="210" cy="285" r="10" fill="#1e293b" stroke="#94a3b8" />
      <text x="165" y="200" font-family="'Fira Code', monospace" font-size="8" fill="#38bdf8" text-anchor="middle">&lt;App&gt;</text>
      <text x="120" y="244" font-family="'Fira Code', monospace" font-size="8" fill="#38bdf8" text-anchor="middle">&lt;Nav&gt;</text>
      <text x="210" y="244" font-family="'Fira Code', monospace" font-size="8" fill="#38bdf8" text-anchor="middle">&lt;List&gt;</text>
      <text x="210" y="289" font-family="'Fira Code', monospace" font-size="7" fill="#94a3b8" text-anchor="middle">Count: 0</text>

      <path d="M 280 220 L 340 220" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)" />
      <text x="310" y="205" font-family="'Inter', sans-serif" font-size="9" fill="#fbbf24" text-anchor="middle">State Change</text>

      <rect x="340" y="125" width="230" height="200" rx="10" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.6" filter="url(#shadow)" />
      <text x="455" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle">2. Re-rendered VDOM</text>
      <rect x="355" y="170" width="200" height="140" rx="6" fill="#0f172a" />
      <circle cx="455" cy="195" r="14" fill="#1e293b" stroke="#38bdf8" />
      <circle cx="410" cy="240" r="12" fill="#1e293b" stroke="#38bdf8" />
      <circle cx="500" cy="240" r="12" fill="#1e293b" stroke="#38bdf8" />
      <circle cx="500" cy="285" r="12" fill="#f59e0b" stroke="#f59e0b" stroke-width="2" />
      <text x="455" y="200" font-family="'Fira Code', monospace" font-size="8" fill="#38bdf8" text-anchor="middle">&lt;App&gt;</text>
      <text x="410" y="244" font-family="'Fira Code', monospace" font-size="8" fill="#38bdf8" text-anchor="middle">&lt;Nav&gt;</text>
      <text x="500" y="244" font-family="'Fira Code', monospace" font-size="8" fill="#38bdf8" text-anchor="middle">&lt;List&gt;</text>
      <text x="500" y="289" font-family="'Fira Code', monospace" font-size="7" fill="#0f172a" font-weight="700" text-anchor="middle">Count: 1</text>

      <path d="M 570 220 L 630 220" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />
      <text x="600" y="205" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">Minimal Patch</text>

      <rect x="630" y="125" width="240" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="750" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">3. Real Browser DOM</text>
      <rect x="645" y="170" width="210" height="140" rx="6" fill="#0f172a" />
      <text x="660" y="200" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ O(n) Heuristic Diffing</text>
      <text x="660" y="225" font-family="'Inter', sans-serif" font-size="11" fill="#cbd5e1">✓ Only changed node updated:</text>
      <rect x="660" y="235" width="180" height="30" rx="4" fill="#064e3b" stroke="#10b981" />
      <text x="750" y="254" font-family="'Fira Code', monospace" font-size="10" fill="#a7f3d0" text-anchor="middle">node.textContent = "1"</text>
      <text x="660" y="295" font-family="'Inter', sans-serif" font-size="9" fill="#34d399">Zero costly full-page layout reflows!</text>
    `
  },
  "u4_t2_jsx_components_props.svg": {
    title: "JSX Compilation & Unidirectional Props Architecture",
    subtitle: "Babel transforms XML-like JSX into React.createElement() calls; data flows strictly parent-to-child",
    badgeText: "UNIT 4.2 • JSX & PROPS",
    badgeColor: "#06b6d4",
    svg: `
      <rect x="40" y="125" width="390" height="200" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.6" filter="url(#shadow)" />
      <text x="235" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#22d3ee" text-anchor="middle">1. Declarative JSX Syntax</text>
      <rect x="55" y="170" width="360" height="140" rx="6" fill="#0f172a" />
      <text x="70" y="200" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">&lt;UserCard</text>
      <text x="90" y="222" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">name="Aarav"</text>
      <text x="90" y="244" font-family="'Fira Code', monospace" font-size="10" fill="#a5b4fc">score={95}</text>
      <text x="90" y="266" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">isVerified={true}</text>
      <text x="70" y="288" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">/&gt;</text>

      <path d="M 430 220 L 480 220" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)" />
      <text x="455" y="205" font-family="'Inter', sans-serif" font-size="8.5" fill="#fbbf24" text-anchor="middle">Babel JIT</text>

      <rect x="480" y="125" width="400" height="200" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="680" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">2. Transpiled React.createElement()</text>
      <rect x="495" y="170" width="370" height="140" rx="6" fill="#0f172a" />
      <text x="510" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">React.createElement(UserCard, {</text>
      <text x="530" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#cbd5e1">  name: "Aarav",</text>
      <text x="530" y="244" font-family="'Fira Code', monospace" font-size="9" fill="#cbd5e1">  score: 95,</text>
      <text x="530" y="266" font-family="'Fira Code', monospace" font-size="9" fill="#cbd5e1">  isVerified: true</text>
      <text x="510" y="288" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">}, null);</text>
    `
  },
  "u4_t3_usestate_render_cycle.svg": {
    title: "React useState() Hook & Component Re-render Cycle",
    subtitle: "State triggers scheduled re-renders; setter functions maintain state across renders without mutating variables directly",
    badgeText: "UNIT 4.3 • REACT STATE",
    badgeColor: "#06b6d4",
    svg: `
      <rect x="50" y="125" width="230" height="195" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.6" />
      <text x="165" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Initial Mount</text>
      <rect x="65" y="170" width="200" height="135" rx="4" fill="#0f172a" />
      <text x="75" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#cbd5e1">const [count, setCount] =</text>
      <text x="75" y="215" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">  useState(0);</text>
      <text x="75" y="245" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• count initialized to 0</text>
      <text x="75" y="270" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">• Returns &lt;h1&gt;0&lt;/h1&gt;</text>

      <path d="M 280 215 L 340 215" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrowAmber)" />
      <text x="310" y="200" font-family="'Inter', sans-serif" font-size="9" fill="#fbbf24" text-anchor="middle">onClick</text>

      <rect x="340" y="125" width="240" height="195" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.6" />
      <text x="460" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#fbbf24" text-anchor="middle">2. Setter Invocation</text>
      <rect x="355" y="170" width="210" height="135" rx="4" fill="#0f172a" />
      <text x="365" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#fbbf24">setCount(prev => prev + 1)</text>
      <text x="365" y="225" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• State change queued</text>
      <text x="365" y="250" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• React schedules re-render</text>
      <text x="365" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#f87171">• Does NOT mutate 'count' now</text>

      <path d="M 580 215 L 640 215" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />
      <text x="610" y="200" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">Re-render</text>

      <rect x="640" y="125" width="230" height="195" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" />
      <text x="755" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">3. Updated Render</text>
      <rect x="655" y="170" width="200" height="135" rx="4" fill="#0f172a" />
      <text x="665" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">count is now 1</text>
      <text x="665" y="225" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• Component re-executes</text>
      <text x="665" y="250" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1">• New VDOM tree produced</text>
      <text x="665" y="275" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">• Minimal DOM patch applied</text>
    `
  },
  "u4_t4_useeffect_lifecycle.svg": {
    title: "React useEffect() Lifecycle & Dependency Array Mechanics",
    subtitle: "Managing Side Effects (API calls, subscriptions, timers) and cleanup functions across component lifecycles",
    badgeText: "UNIT 4.4 • SIDE EFFECTS",
    badgeColor: "#06b6d4",
    svg: `
      <g transform="translate(40, 120)">
        <rect x="0" y="0" width="260" height="205" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
        <text x="130" y="28" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">No Dependency Array: useEffect(fn)</text>
        <rect x="15" y="42" width="230" height="148" rx="4" fill="#0f172a" />
        <text x="25" y="68" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">useEffect(() => { ... })</text>
        <text x="25" y="98" font-family="'Inter', sans-serif" font-size="10" fill="#f87171">⚠️ Runs after EVERY render!</text>
        <text x="25" y="125" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">• Component mounts</text>
        <text x="25" y="148" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">• Any prop or state changes</text>
        <text x="25" y="172" font-family="'Inter', sans-serif" font-size="9" fill="#f87171">Risk of infinite fetch loops</text>

        <rect x="290" y="0" width="260" height="205" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
        <text x="420" y="28" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#34d399" text-anchor="middle">Empty Array: useEffect(fn, [])</text>
        <rect x="305" y="42" width="230" height="148" rx="4" fill="#0f172a" />
        <text x="315" y="68" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">useEffect(() => { ... }, [])</text>
        <text x="315" y="98" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">✓ Runs ONCE on mount</text>
        <text x="315" y="125" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">• Fetch initial API data</text>
        <text x="315" y="148" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">• Set up global listeners</text>
        <text x="315" y="172" font-family="'Inter', sans-serif" font-size="9" fill="#a7f3d0">Equivalent to componentDidMount</text>

        <rect x="580" y="0" width="260" height="205" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.5" />
        <text x="710" y="28" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#c084fc" text-anchor="middle">With Dependencies: useEffect(fn, [id])</text>
        <rect x="595" y="42" width="230" height="148" rx="4" fill="#0f172a" />
        <text x="605" y="68" font-family="'Fira Code', monospace" font-size="9" fill="#c084fc">useEffect(() => { ... }, [userId])</text>
        <text x="605" y="98" font-family="'Inter', sans-serif" font-size="10" fill="#c084fc">✓ Runs when 'userId' changes</text>
        <text x="605" y="125" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">• Re-fetches matching user profile</text>
        <text x="605" y="148" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24">return () => cleanup();</text>
        <text x="605" y="172" font-family="'Inter', sans-serif" font-size="9" fill="#fbbf24">Cleanup aborts previous pending request</text>
      </g>
    `
  },
  "u4_t5_react_router_spa.svg": {
    title: "Client-Side SPA Routing & HTML5 History API",
    subtitle: "Swapping view components in real-time matching URL routes without incurring full browser page refreshes",
    badgeText: "UNIT 4.5 • SPA ROUTING",
    badgeColor: "#06b6d4",
    svg: `
      <rect x="150" y="115" width="620" height="38" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.5" />
      <circle cx="170" cy="134" r="6" fill="#ef4444" />
      <circle cx="188" cy="134" r="6" fill="#f59e0b" />
      <circle cx="206" cy="134" r="6" fill="#10b981" />
      <rect x="230" y="122" width="520" height="24" rx="4" fill="#1e293b" />
      <text x="245" y="138" font-family="'Fira Code', monospace" font-size="11" fill="#38bdf8">http://localhost:3000/dashboard/analytics</text>

      <path d="M 460 153 L 460 185" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />
      <text x="460" y="172" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc" text-anchor="middle">history.pushState() (Zero Network Reload)</text>

      <rect x="150" y="185" width="620" height="135" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="180" y="210" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#818cf8">&lt;Routes&gt; Matching Engine</text>

      <rect x="170" y="225" width="180" height="75" rx="6" fill="#0f172a" stroke="#475569" />
      <text x="185" y="248" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">path="/"</text>
      <text x="185" y="270" font-family="'Inter', sans-serif" font-size="10" fill="#64748b">&lt;Home /&gt;</text>
      <text x="185" y="288" font-family="'Inter', sans-serif" font-size="8" fill="#475569">(Unmounted)</text>

      <rect x="370" y="225" width="180" height="75" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2" />
      <text x="385" y="248" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">path="/dashboard/*"</text>
      <text x="385" y="270" font-family="'Outfit', sans-serif" font-size="11" font-weight="700" fill="#ffffff">&lt;Dashboard /&gt;</text>
      <text x="385" y="288" font-family="'Inter', sans-serif" font-size="8" fill="#34d399">✓ Active Match Rendered</text>

      <rect x="570" y="225" width="180" height="75" rx="6" fill="#0f172a" stroke="#475569" />
      <text x="585" y="248" font-family="'Fira Code', monospace" font-size="10" fill="#94a3b8">path="*"</text>
      <text x="585" y="270" font-family="'Inter', sans-serif" font-size="10" fill="#64748b">&lt;NotFound /&gt;</text>
      <text x="585" y="288" font-family="'Inter', sans-serif" font-size="8" fill="#475569">(Fallback 404)</text>
    `
  },
  "u4_t6_context_api.svg": {
    title: "React Context API: Eliminating Prop Drilling",
    subtitle: "Sharing global state (Auth, Theme, Cart) directly across nested components via Provider and useContext()",
    badgeText: "UNIT 4.6 • GLOBAL STATE",
    badgeColor: "#06b6d4",
    svg: `
      <rect x="40" y="125" width="380" height="205" rx="10" fill="url(#cardGrad)" stroke="#ef4444" stroke-width="1.6" filter="url(#shadow)" />
      <text x="230" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#f87171" text-anchor="middle">Problem: Prop Drilling Hell</text>
      <rect x="55" y="170" width="350" height="145" rx="6" fill="#0f172a" />
      <text x="70" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#f87171">&lt;App user={user} theme={theme}&gt;</text>
      <text x="90" y="218" font-family="'Fira Code', monospace" font-size="9.5" fill="#fbbf24">  &lt;Layout user={user} theme={theme}&gt;</text>
      <text x="110" y="242" font-family="'Fira Code', monospace" font-size="9.5" fill="#fbbf24">    &lt;Sidebar user={user} theme={theme}&gt;</text>
      <text x="130" y="265" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">      &lt;ProfileAvatar user={user} /&gt;</text>
      <text x="70" y="295" font-family="'Inter', sans-serif" font-size="9.5" fill="#94a3b8">Intermediate components forced to forward props they never use</text>

      <rect x="490" y="125" width="390" height="205" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="685" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">Solution: Context Provider &amp; Consumer</text>
      <rect x="505" y="170" width="360" height="145" rx="6" fill="#0f172a" />
      <text x="520" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">&lt;AuthContext.Provider value={{ user, token }}&gt;</text>
      <text x="540" y="218" font-family="'Fira Code', monospace" font-size="9.5" fill="#cbd5e1">  &lt;App /&gt; // No props passed manually!</text>
      <text x="520" y="242" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">&lt;/AuthContext.Provider&gt;</text>
      <text x="520" y="270" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">const { user } = useContext(AuthContext);</text>
      <text x="520" y="295" font-family="'Inter', sans-serif" font-size="9.5" fill="#a7f3d0">Deepest child retrieves state directly from context store!</text>
    `
  },

  // ================= UNIT 5 (FOCUS) =================
  "u5_t1_express_framework_routing.svg": {
    title: "Express.js REST Routing Architecture & HTTP Verbs",
    subtitle: "Mapping incoming HTTP endpoints (GET, POST, PUT, DELETE) to controller handler functions",
    badgeText: "UNIT 5.1 • EXPRESS REST",
    badgeColor: "#a855f7",
    svg: `
      <rect x="40" y="125" width="180" height="195" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.6" />
      <text x="130" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">HTTP Methods</text>
      <rect x="55" y="170" width="150" height="135" rx="4" fill="#0f172a" />
      <text x="65" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">GET /api/books</text>
      <text x="65" y="222" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">POST /api/books</text>
      <text x="65" y="249" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">PUT /api/books/:id</text>
      <text x="65" y="276" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">DELETE /api/books/:id</text>

      <path d="M 220 215 L 290 215" stroke="#a855f7" stroke-width="2.5" marker-end="url(#arrowPurple)" />

      <rect x="290" y="125" width="340" height="195" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.6" />
      <text x="460" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#c084fc" text-anchor="middle">Express Router Matching Table</text>
      <rect x="305" y="170" width="310" height="135" rx="4" fill="#0f172a" />
      <text x="320" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">app.get('/api/books', getAllBooks);</text>
      <text x="320" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">app.post('/api/books', createBook);</text>
      <text x="320" y="249" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24">app.put('/api/books/:id', updateBook);</text>
      <text x="320" y="276" font-family="'Fira Code', monospace" font-size="9" fill="#f87171">app.delete('/api/books/:id', deleteBook);</text>

      <path d="M 630 215 L 700 215" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />

      <rect x="700" y="125" width="180" height="195" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" />
      <text x="790" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">HTTP Responses</text>
      <rect x="715" y="170" width="150" height="135" rx="4" fill="#0f172a" />
      <text x="725" y="195" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">200 OK</text>
      <text x="725" y="222" font-family="'Fira Code', monospace" font-size="10" fill="#38bdf8">201 Created</text>
      <text x="725" y="249" font-family="'Fira Code', monospace" font-size="10" fill="#fbbf24">200 Updated</text>
      <text x="725" y="276" font-family="'Fira Code', monospace" font-size="10" fill="#f87171">204 No Content</text>
    `
  },
  "u5_t2_express_middleware_pipeline.svg": {
    title: "Express.js Middleware Execution Pipeline & next()",
    subtitle: "Sequential processing of HTTP request/response objects through logger, body-parser, auth, and route handler",
    badgeText: "UNIT 5.2 • MIDDLEWARE PIPELINE",
    badgeColor: "#a855f7",
    svg: `
      <rect x="40" y="130" width="130" height="180" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.5" />
      <text x="105" y="160" font-family="'Outfit', sans-serif" font-size="13" font-weight="700" fill="#38bdf8" text-anchor="middle">Client HTTP</text>
      <rect x="55" y="180" width="100" height="26" rx="4" fill="#0284c7" />
      <text x="105" y="197" font-family="'Fira Code', monospace" font-size="9" fill="#ffffff" text-anchor="middle">POST /api/items</text>
      <text x="105" y="240" font-family="'Inter', sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Headers + Body</text>

      <path d="M 170 215 L 210 215" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

      <rect x="210" y="130" width="145" height="180" rx="8" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.5" />
      <text x="282" y="160" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#818cf8" text-anchor="middle">1. CORS &amp; Logger</text>
      <rect x="220" y="175" width="125" height="110" rx="4" fill="#0f172a" />
      <text x="230" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8">app.use(cors())</text>
      <text x="230" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#cbd5e1">morgan('dev')</text>
      <text x="230" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">next();</text>

      <path d="M 355 215 L 395 215" stroke="#6366f1" stroke-width="2" marker-end="url(#arrow)" />

      <rect x="395" y="130" width="145" height="180" rx="8" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="1.5" />
      <text x="467" y="160" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#c084fc" text-anchor="middle">2. Body Parser</text>
      <rect x="405" y="175" width="125" height="110" rx="4" fill="#0f172a" />
      <text x="415" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#c084fc">express.json()</text>
      <text x="415" y="222" font-family="'Inter', sans-serif" font-size="9" fill="#cbd5e1">Populates req.body</text>
      <text x="415" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">next();</text>

      <path d="M 540 215 L 580 215" stroke="#a855f7" stroke-width="2" marker-end="url(#arrowPurple)" />

      <rect x="580" y="130" width="145" height="180" rx="8" fill="url(#cardGrad)" stroke="#f59e0b" stroke-width="1.5" />
      <text x="652" y="160" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#fbbf24" text-anchor="middle">3. Auth Guard</text>
      <rect x="590" y="175" width="125" height="110" rx="4" fill="#0f172a" />
      <text x="600" y="200" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24">verifyJwt(req)</text>
      <text x="600" y="222" font-family="'Inter', sans-serif" font-size="8.5" fill="#f87171">If invalid → 401</text>
      <text x="600" y="255" font-family="'Fira Code', monospace" font-size="10" fill="#34d399">next();</text>

      <path d="M 725 215 L 765 215" stroke="#10b981" stroke-width="2" marker-end="url(#arrowGreen)" />

      <rect x="765" y="130" width="125" height="180" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.5" />
      <text x="827" y="160" font-family="'Outfit', sans-serif" font-size="12" font-weight="700" fill="#34d399" text-anchor="middle">4. Controller</text>
      <rect x="775" y="175" width="105" height="110" rx="4" fill="#0f172a" />
      <text x="785" y="200" font-family="'Fira Code', monospace" font-size="8.5" fill="#34d399">res.status(201)</text>
      <text x="785" y="222" font-family="'Fira Code', monospace" font-size="8.5" fill="#34d399">.json(saved)</text>
      <text x="785" y="255" font-family="'Inter', sans-serif" font-size="8" fill="#a7f3d0">Terminates req</text>
    `
  },
  "u5_t3_jwt_auth_workflow.svg": {
    title: "JSON Web Token (JWT) Cryptographic Authentication Lifecycle",
    subtitle: "Stateless security architecture: Header, Payload claims, HMAC SHA-256 signature, and Bearer token transport",
    badgeText: "UNIT 5.3 • JWT SECURITY",
    badgeColor: "#a855f7",
    svg: `
      <rect x="60" y="115" width="230" height="215" rx="8" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="1.6" />
      <text x="175" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#38bdf8" text-anchor="middle">1. Client Login</text>
      <rect x="75" y="160" width="200" height="155" rx="4" fill="#0f172a" />
      <text x="85" y="185" font-family="'Fira Code', monospace" font-size="9" fill="#cbd5e1">POST /api/auth/login</text>
      <text x="85" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">{ user, password }</text>
      <text x="85" y="235" font-family="'Inter', sans-serif" font-size="10" fill="#94a3b8">Stores received JWT in:</text>
      <text x="85" y="258" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">✓ httpOnly Cookie or</text>
      <text x="85" y="280" font-family="'Inter', sans-serif" font-size="10" fill="#34d399">✓ Memory / LocalStorage</text>

      <path d="M 290 190 L 610 190" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
      <text x="450" y="180" font-family="'Inter', sans-serif" font-size="9" fill="#38bdf8" text-anchor="middle">Credentials</text>

      <path d="M 610 230 L 290 230" stroke="#10b981" stroke-width="2" marker-end="url(#arrowGreen)" />
      <text x="450" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">Returns Signed JWT</text>

      <path d="M 290 270 L 610 270" stroke="#a855f7" stroke-width="2" marker-end="url(#arrowPurple)" />
      <text x="450" y="262" font-family="'Fira Code', monospace" font-size="9" fill="#c084fc" text-anchor="middle">Subsequent Requests: Authorization: Bearer &lt;token&gt;</text>

      <rect x="610" y="115" width="250" height="215" rx="8" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" />
      <text x="735" y="145" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">2. Server Verification</text>
      <rect x="625" y="160" width="220" height="155" rx="4" fill="#0f172a" />
      <text x="635" y="185" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">jwt.verify(token, SECRET)</text>
      <text x="635" y="215" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">1. Decodes Base64 Header</text>
      <text x="635" y="238" font-family="'Inter', sans-serif" font-size="9.5" fill="#cbd5e1">2. Decodes Payload Claims</text>
      <text x="635" y="260" font-family="'Inter', sans-serif" font-size="9.5" fill="#34d399">3. Hashes with secret key</text>
      <text x="635" y="285" font-family="'Inter', sans-serif" font-size="9" fill="#34d399">Zero database lookup required!</text>
    `
  },
  "u5_t4_mongodb_mongoose_odm.svg": {
    title: "MongoDB Document Store & Mongoose ODM Mapping",
    subtitle: "Schema definitions, typed validation, middleware pre/post hooks, and BSON document storage",
    badgeText: "UNIT 5.4 • MONGOOSE ODM",
    badgeColor: "#a855f7",
    svg: `
      <rect x="40" y="125" width="380" height="205" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.6" filter="url(#shadow)" />
      <text x="230" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">Mongoose Schema Definition (ODM)</text>
      <rect x="55" y="170" width="350" height="145" rx="6" fill="#0f172a" />
      <text x="70" y="195" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">const StudentSchema = new mongoose.Schema({</text>
      <text x="85" y="218" font-family="'Fira Code', monospace" font-size="9.5" fill="#cbd5e1">  name: { type: String, required: true },</text>
      <text x="85" y="240" font-family="'Fira Code', monospace" font-size="9.5" fill="#cbd5e1">  email: { type: String, unique: true },</text>
      <text x="85" y="262" font-family="'Fira Code', monospace" font-size="9.5" fill="#34d399">  iaScore: { type: Number, min: 0, max: 30 }</text>
      <text x="70" y="285" font-family="'Fira Code', monospace" font-size="9.5" fill="#38bdf8">}, { timestamps: true });</text>

      <path d="M 420 220 L 490 220" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />
      <text x="455" y="205" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">BSON ODM</text>

      <rect x="490" y="125" width="390" height="205" rx="10" fill="url(#cardGrad)" stroke="#059669" stroke-width="1.6" filter="url(#shadow)" />
      <text x="685" y="155" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" fill="#34d399" text-anchor="middle">MongoDB Collection: "students"</text>
      <rect x="505" y="170" width="360" height="145" rx="6" fill="#0f172a" />
      <text x="520" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">{</text>
      <text x="535" y="215" font-family="'Fira Code', monospace" font-size="9" fill="#cbd5e1">  "_id": ObjectId("6532f8a..."),</text>
      <text x="535" y="235" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  "name": "Aarav Sharma",</text>
      <text x="535" y="255" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">  "email": "aarav@developer.in",</text>
      <text x="535" y="275" font-family="'Fira Code', monospace" font-size="9" fill="#fbbf24">  "iaScore": 28</text>
      <text x="520" y="295" font-family="'Fira Code', monospace" font-size="9" fill="#34d399">}</text>
    `
  },
  "u5_t5_mern_cloud_deployment.svg": {
    title: "Production MERN Full Stack Cloud Deployment",
    subtitle: "Continuous integration, static asset edge caching on CDN, containerized Node.js API, and MongoDB Atlas cluster",
    badgeText: "UNIT 5.5 • CLOUD DEPLOYMENT",
    badgeColor: "#a855f7",
    svg: `
      <rect x="40" y="125" width="170" height="180" rx="10" fill="url(#cardGrad)" stroke="#06b6d4" stroke-width="1.8" filter="url(#shadow)" />
      <text x="125" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#22d3ee" text-anchor="middle">Frontend Edge CDN</text>
      <text x="125" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">(Vercel / Netlify)</text>
      <rect x="55" y="185" width="140" height="50" rx="4" fill="#0f172a" />
      <text x="65" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">build/ folder</text>
      <text x="65" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#38bdf8">HTML/CSS/JS minified</text>
      <text x="125" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#22d3ee" text-anchor="middle">Global AnyCast Edge</text>

      <path d="M 210 205 L 360 205" stroke="#6366f1" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="285" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#818cf8" text-anchor="middle">HTTPS API / CORS</text>

      <rect x="360" y="125" width="220" height="180" rx="10" fill="url(#cardGrad)" stroke="#6366f1" stroke-width="1.8" filter="url(#shadow)" />
      <text x="470" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#818cf8" text-anchor="middle">Backend Cloud Cluster</text>
      <text x="470" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">(Render / Railway / AWS EC2)</text>
      <rect x="375" y="185" width="190" height="50" rx="4" fill="#0f172a" />
      <text x="385" y="205" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">Environment (.env)</text>
      <text x="385" y="222" font-family="'Fira Code', monospace" font-size="9" fill="#a5b4fc">PORT=5000, JWT_SECRET</text>
      <text x="470" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">PM2 Process Manager</text>

      <path d="M 580 205 L 700 205" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)" />
      <text x="640" y="195" font-family="'Fira Code', monospace" font-size="9" fill="#34d399" text-anchor="middle">TLS 27017</text>

      <rect x="700" y="125" width="180" height="180" rx="10" fill="url(#cardGrad)" stroke="#10b981" stroke-width="1.8" filter="url(#shadow)" />
      <text x="790" y="152" font-family="'Outfit', sans-serif" font-size="13" font-weight="800" fill="#34d399" text-anchor="middle">MongoDB Atlas</text>
      <text x="790" y="172" font-family="'Inter', sans-serif" font-size="10" fill="#cbd5e1" text-anchor="middle">Managed Cloud Cluster</text>
      <rect x="715" y="185" width="150" height="50" rx="4" fill="#0f172a" />
      <text x="725" y="205" font-family="'Fira Code', monospace" font-size="8.5" fill="#34d399">mongodb+srv://...</text>
      <text x="725" y="222" font-family="'Fira Code', monospace" font-size="8.5" fill="#34d399">Encrypted at rest</text>
      <text x="790" y="260" font-family="'Inter', sans-serif" font-size="9" fill="#34d399" text-anchor="middle">Automated Replication</text>
    `
  }
};

let count = 0;
for (const [filename, info] of Object.entries(allDiagrams)) {
  const fullSvg = createSvgWrapper(info.title, info.subtitle, info.badgeText, info.badgeColor, info.svg);
  fs.writeFileSync(path.join(outputDir, filename), fullSvg, 'utf8');
  count++;
}

console.log("Successfully generated " + count + " concept diagrams in " + outputDir);
