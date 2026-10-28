// MERN-STACK: Full Stack Development using MERN - Comprehensive Course Data & Live Studio Teaching Engine
const COURSE_DATA = {
  "info": {
    "department": "Computer Applications",
    "program": "Full Stack Web Development",
    "semester": "Semester I",
    "year": "First Year",
    "courseTitle": "Full Stack Development using MERN",
    "courseCode": "MERN-STACK",
    "lectureHours": "4 Hours/Week",
    "credits": 4,
    "totalHours": 45,
    "assessment": {
      "iaMarks": 30,
      "eseMarks": 70,
      "totalMarks": 100
    }
  },
  "objectives": [
    "To understand Internet fundamentals, HTML5, and CSS for designing structured and responsive web pages.",
    "Understand MERN architecture, Node.js modules, async programming, and HTTP server creation.",
    "Understand Express.js middleware, routing, JWT authentication, and REST API development.",
    "Apply React.js components, props, state, hooks, routing, and API integration.",
    "Apply full-stack integration: REST APIs with Express/MongoDB, React frontend, and deployment."
  ],
  "outcomes": [
    "CO1: Understand Full stack development stack and web programming using HTML/CSS/JS.",
    "CO2: Build Node.js HTTP servers with async programming and npm packages.",
    "CO3: Create React frontend with hooks, context API, and Axios for API calls.",
    "CO4: Develop RESTful APIs with Express, JWT authentication, and error handling.",
    "CO5: Deploy full-stack MERN applications with integrated backend and frontend."
  ],
  "referenceBooks": [
    {
      "id": 1,
      "title": "HTML & CSS: Design and Build Websites",
      "author": "Jon Duckett",
      "publisher": "Wiley",
      "category": "Frontend Foundations",
      "tag": "Unit 1",
      "description": "Visual, full-color guide to semantic HTML tags, forms, CSS box model, selectors, and modern layout design.",
      "coverColor": "#e44d26"
    },
    {
      "id": 2,
      "title": "JavaScript and jQuery: Interactive Front-End Web Development",
      "author": "Jon Duckett",
      "publisher": "Wiley",
      "category": "Client-side Scripting",
      "tag": "Unit 2",
      "description": "Covers JavaScript language basics, DOM tree manipulation, event bubbling/handling, and JSON data parsing.",
      "coverColor": "#f7df1e"
    },
    {
      "id": 3,
      "title": "Learning React: Modern Patterns for Developing React Apps",
      "author": "Alex Banks and Eve Porcello",
      "publisher": "O'Reilly Media",
      "category": "Frontend Framework",
      "tag": "Unit 4",
      "description": "Functional programming concepts, React hooks (useState, useEffect, useContext), routing, and clean component architecture.",
      "coverColor": "#61dafb"
    },
    {
      "id": 4,
      "title": "Learning Node.js: A Hands-On Guide to Building Web Applications",
      "author": "Marc Wandschneider",
      "publisher": "Addison-Wesley Professional",
      "category": "Backend Runtime",
      "tag": "Unit 3",
      "description": "Deep dive into Node.js event loop, asynchronous non-blocking I/O, core modules (fs, http, path), and npm packages.",
      "coverColor": "#339933"
    },
    {
      "id": 5,
      "title": "Web Development with Node and Express: Leveraging the JavaScript Stack",
      "author": "Ethan Brown",
      "publisher": "O'Reilly Media",
      "category": "Backend Framework",
      "tag": "Unit 3 & 5",
      "description": "Express routing, middleware architecture, REST API design, session management, and JWT authentication.",
      "coverColor": "#000000"
    },
    {
      "id": 6,
      "title": "React: Up & Running",
      "author": "Stoyan Stefanov",
      "publisher": "O'Reilly Media",
      "category": "Frontend Architecture",
      "tag": "Unit 4",
      "description": "Building production-grade Single Page Applications (SPAs) with Virtual DOM, component state, and synthetic events.",
      "coverColor": "#00d8ff"
    },
    {
      "id": 7,
      "title": "MongoDB: The Definitive Guide",
      "author": "Kristina Chodorow",
      "publisher": "O'Reilly Media",
      "category": "NoSQL Database",
      "tag": "Unit 5",
      "description": "Document-oriented databases, BSON syntax, indexing, aggregation pipeline, and Mongoose ODM integration in Node.js.",
      "coverColor": "#47a248"
    }
  ],
  "eResources": [
    {
      "title": "NPTEL - Internet Technology & Web Development",
      "url": "https://nptel.ac.in/",
      "platform": "NPTEL / IIT"
    },
    {
      "title": "MDN Web Docs - HTML, CSS & JavaScript",
      "url": "https://developer.mozilla.org/",
      "platform": "Mozilla"
    },
    {
      "title": "React Official Docs - Describing the UI & Hooks",
      "url": "https://react.dev/",
      "platform": "React Team"
    },
    {
      "title": "Node.js Official Documentation & Guides",
      "url": "https://nodejs.org/docs/latest/",
      "platform": "OpenJS"
    },
    {
      "title": "MongoDB University - Free Developer Paths",
      "url": "https://learn.mongodb.com/",
      "platform": "MongoDB"
    }
  ],
  "units": [
    {
      "unitNumber": 1,
      "title": "Introduction to Web Programming & HTML + CSS",
      "hours": 9,
      "badgeColor": "#3b82f6",
      "diagramImage": "images/unit1_web_architecture.jpg",
      "diagramCaption": "High-Resolution Architectural Infographic: Client Browser, DNS Resolution, 3-Way Handshake, Web Tier vs Logic Tier vs Data Tier.",
      "interactiveWidgetId": "boxModelWidget",
      "summary": "Understand Internet fundamentals, protocol layers, client-server web architecture, HTML5 semantic elements, forms, and CSS layout systems.",
      "conceptualAnalogies": [
        {
          "concept": "DNS Lookup",
          "analogy": "Phonebook Analogy",
          "explanation": "Just as you search for a person's name ('Rahul') in your mobile contacts to find their phone number (+91 98765...), a browser queries the DNS Phonebook to turn 'example.com' into the IP address '192.0.2.1'."
        },
        {
          "concept": "Web Server vs App Server",
          "analogy": "Restaurant Waiter vs Master Chef",
          "explanation": "The Web Server (Nginx/Apache) is like the waiter who delivers static menus and water glasses (HTML/CSS files). The Application Server (Node/Express) is the master chef in the kitchen who takes custom orders, cooks business logic, and queries the pantry (Database)."
        },
        {
          "concept": "CSS Box Model",
          "analogy": "Framed Painting Analogy",
          "explanation": "Content is the actual painting. Padding is the white matte border around the painting. Border is the physical wooden frame. Margin is the empty wall space keeping other frames away."
        }
      ],
      "topics": [
        {
          "name": "Brief history of the Internet & How does the Internet work?",
          "details": "From ARPANET (1969) to Tim Berners-Lee's World Wide Web (1989 at CERN). Data transmission via packet switching, TCP/IP 4-layer model (Application, Transport, Internet, Network Access), routers, and fiber-optic backbones.",
          "teachingPoints": [
            "Explain Packet Switching vs Circuit Switching (Phone call vs Internet).",
            "Show how packets travel across multiple routers using IP addresses.",
            "Highlight why the Web is a service on top of the Internet, not the Internet itself."
          ],
          "liveCode": "<!-- Demonstration: Basic HTML5 Skeleton -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>How the Web Works</title>\n</head>\n<body>\n  <h1>Hello Learners!</h1>\n  <p>This HTML was requested via HTTP GET and parsed by the browser engine.</p>\n</body>\n</html>",
          "conceptMcqs": [
            {
              "id": "u1_t1_q1",
              "question": "What core technology distinguishes the modern Internet from traditional circuit-switched telephone networks?",
              "options": [
                "Packet switching (dividing data into discrete packets routed dynamically)",
                "Dedicated copper circuit reservation between callers",
                "Centralized mainframe broadcasting",
                "Analog frequency modulation without addressing"
              ],
              "correct": 0,
              "explanation": "Packet switching breaks data into packets that traverse dynamic routes independently and reassemble at the destination, avoiding single points of failure."
            },
            {
              "id": "u1_t1_q2",
              "question": "Which landmark research network launched in 1969 by the US DoD laid the foundation for today's Internet?",
              "options": [
                "CERN WebNet",
                "ARPANET",
                "NSFNET-II",
                "Ethernet Alpha"
              ],
              "correct": 1,
              "explanation": "ARPANET pioneered packet switching and the initial protocols that later evolved into the TCP/IP Internet."
            },
            {
              "id": "u1_t1_q3",
              "question": "What is the primary difference between the Internet and the World Wide Web (WWW)?",
              "options": [
                "They are identical terms for the exact same technology",
                "The Internet is the physical global network of connected computers; the Web is an information service operating on top of it via HTTP",
                "The Internet only handles email, while the Web only handles streaming video",
                "The Web is the physical fiber-optic cables, while the Internet is the browser software"
              ],
              "correct": 1,
              "explanation": "The Internet is the global networking infrastructure. The World Wide Web is one of many application-layer services (alongside Email, FTP, SSH) built on top of the Internet."
            }
          ],
          "realWorldExample": "Sending a multi-chapter book via individual numbered postcards through the postal mail. Even if Postcard 3 travels via a different highway than Postcard 2, the recipient reassembles the full book in correct page order upon arrival.",
          "conceptImage": "images/concepts/u1_t1_internet_workings.svg",
          "conceptImageCaption": "Packet Switching across dynamic routers via IP addressing."
        },
        {
          "name": "Internet Protocol (IP) & Domain Name Service (DNS)",
          "details": "IPv4 (32-bit: e.g., 192.168.1.1) vs IPv6 (128-bit hexadecimal). DNS resolution hierarchy: Recursive resolver -> Root server (.) -> TLD server (.in/.com) -> Authoritative Nameserver converting human domain names to IP addresses.",
          "teachingPoints": [
            "Point out why humans need DNS (cannot memorize millions of IP numbers).",
            "Step through: Browser Cache -> OS Cache -> ISP Resolver -> Root -> TLD -> Authoritative.",
            "Contrast IPv4 exhaustion (4.3 billion addresses) with IPv6 virtually unlimited pool."
          ],
          "liveCode": "// Simulating DNS Resolution in JavaScript\nconst dnsRegistry = {\n  \"university.edu\": \"192.168.1.50\",\n  \"devportal.io\": \"10.0.0.12\",\n  \"google.com\": \"142.250.190.46\"\n};\n\nfunction resolveDNS(domain) {\n  console.log(\"1. Querying Root Server...\");\n  console.log(\"2. Querying TLD Server...\");\n  const ip = dnsRegistry[domain] || \"404 Not Found\";\n  console.log(\"3. Authoritative Nameserver returned IP: \" + ip);\n  return ip;\n}\nresolveDNS(\"university.edu\");",
          "conceptMcqs": [
            {
              "id": "u1_t2_q1",
              "question": "How many bits are used in an IPv4 address compared to an IPv6 address?",
              "options": [
                "16 bits vs 64 bits",
                "32 bits (yielding ~4.3 billion addresses) vs 128 bits (hexadecimal)",
                "64 bits vs 256 bits",
                "32 bits vs 64 bits"
              ],
              "correct": 1,
              "explanation": "IPv4 uses 32-bit addresses (e.g. 192.168.1.1). Due to address exhaustion, IPv6 was introduced with 128-bit addresses (e.g. 2001:db8::1)."
            },
            {
              "id": "u1_t2_q2",
              "question": "When a browser looks up a domain name for the first time, which server is queried first after local caches miss?",
              "options": [
                "Authoritative Nameserver",
                "Recursive DNS Resolver (typically provided by ISP or public DNS)",
                "Top-Level Domain (TLD) Server",
                "Origin Web Server"
              ],
              "correct": 1,
              "explanation": "The client contacts a Recursive DNS Resolver, which then iteratively queries Root, TLD (.com, .org), and Authoritative nameservers on the client's behalf."
            },
            {
              "id": "u1_t2_q3",
              "question": "Which DNS record type maps a human-readable hostname directly to an IPv4 address?",
              "options": [
                "A Record",
                "CNAME Record",
                "MX Record",
                "TXT Record"
              ],
              "correct": 0,
              "explanation": "The 'A' (Address) record maps hostnames to IPv4 addresses. An 'AAAA' record is used for IPv6 addresses."
            }
          ],
          "realWorldExample": "Your mobile phone contact list. You don't memorize numeric telephone numbers (e.g. 142.250.190.46) for all your friends; you tap 'Google', and the phone contact book resolves the underlying number instantly.",
          "conceptImage": "images/concepts/u1_t2_dns_ip_resolution.svg",
          "conceptImageCaption": "Recursive DNS resolution: Root (.) -> TLD (.com) -> Authoritative Nameserver."
        },
        {
          "name": "HTTP / HTTPS Protocol & 3-Way Handshake",
          "details": "Hypertext Transfer Protocol. Stateless, client-server protocol operating on Port 80 (HTTP) or Port 443 (HTTPS via TLS/SSL encryption). Methods (GET, POST, PUT, DELETE, PATCH), Status Codes (2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error). TCP 3-way handshake: SYN -> SYN-ACK -> ACK.",
          "teachingPoints": [
            "Emphasize that HTTP is stateless: each request is independent (why we need cookies & JWT!).",
            "Review crucial status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error).",
            "Explain HTTPS SSL/TLS certificate exchange to prevent Man-in-the-Middle attacks."
          ],
          "liveCode": "// HTTP Request Inspection Example\nfetch('/api/course-info')\n  .then(response => {\n    console.log(\"Status Code:\", response.status); // 200\n    console.log(\"Headers:\", response.headers.get(\"content-type\"));\n    return response.json();\n  })\n  .then(data => console.log(\"Payload:\", data));",
          "conceptMcqs": [
            {
              "id": "u1_t3_q1",
              "question": "What is the correct sequence of packets in the TCP 3-Way Handshake used to establish a reliable connection?",
              "options": [
                "ACK → SYN → SYN-ACK",
                "SYN → SYN-ACK → ACK",
                "SYN → ACK → FIN",
                "CONNECT → ACCEPT → DATA"
              ],
              "correct": 1,
              "explanation": "The client sends a SYN packet, the server responds with SYN-ACK, and the client confirms with ACK, establishing the TCP socket."
            },
            {
              "id": "u1_t3_q2",
              "question": "Why is HTTP described as a 'stateless' protocol?",
              "options": [
                "It cannot transmit images or media files",
                "The server does not retain any memory or session context between successive client requests",
                "It operates without IP addresses or domain names",
                "Every request must originate from a different computer"
              ],
              "correct": 1,
              "explanation": "Because HTTP is stateless, each request is completely independent. Web applications use Cookies, Sessions, and JWTs to maintain user login state."
            },
            {
              "id": "u1_t3_q3",
              "question": "Which HTTP status code is standard for confirming that a new resource has been successfully created on the server?",
              "options": [
                "200 OK",
                "201 Created",
                "204 No Content",
                "304 Not Modified"
              ],
              "correct": 1,
              "explanation": "HTTP 201 Created signifies that the request succeeded and led to the creation of a new resource (common after POST requests in REST APIs)."
            }
          ],
          "realWorldExample": "A standard walkie-talkie protocol: 'Base, this is Alpha, do you copy? (SYN)' -> 'Alpha, copy loud and clear, do you copy? (SYN-ACK)' -> 'Base, copying 100%, transmitting data now (ACK)'.",
          "conceptImage": "images/concepts/u1_t3_http_https_handshake.svg",
          "conceptImageCaption": "TLS 1.3 cryptographic handshake securing HTTP traffic via symmetric AES keys."
        },
        {
          "name": "Web Server vs Application Server & 3-Tier Architecture",
          "details": "Web Server (Nginx, Apache): serves static assets (HTML, CSS, images). Application Server (Node.js, Express, Tomernt): executes business logic, database queries, and dynamic processing. 3-Tier Web Architecture: Presentation Tier (Browser) -> Logic Tier (Express Server) -> Data Tier (MongoDB).",
          "teachingPoints": [
            "Draw the 3 tiers on whiteboard or show the infographic above.",
            "Tier 1 (Presentation): HTML, CSS, React.",
            "Tier 2 (Logic / Application): Node.js, Express, routing, JWT authentication.",
            "Tier 3 (Data / Persistence): MongoDB Atlas, Mongoose collections."
          ],
          "liveCode": "<!-- 3-Tier Web Flow Mockup -->\n<div style=\"background: #1e293b; padding: 20px; border-radius: 8px; color: #fff;\">\n  <span style=\"color: #38bdf8;\">[Tier 1: Client]</span> React form submitted<br>\n  <span style=\"color: #a855f7;\">[Tier 2: Express]</span> POST /api/students -> Validated with JWT<br>\n  <span style=\"color: #22c55e;\">[Tier 3: MongoDB]</span> Student.create({ name: 'Rahul', roll: 'DEV01' })\n</div>",
          "conceptMcqs": [
            {
              "id": "u1_t4_q1",
              "question": "In standard 3-Tier Web Architecture, what are the three distinct tiers?",
              "options": [
                "Client Tier, Server Tier, Cloud Tier",
                "Presentation Tier (UI/Browser), Logic/Application Tier (Express Server), Data Tier (Database)",
                "HTML Tier, CSS Tier, JavaScript Tier",
                "Frontend Tier, Compiler Tier, Storage Tier"
              ],
              "correct": 1,
              "explanation": "3-Tier architecture separates concerns cleanly into Presentation (Browser/React), Logic (Express/Node.js), and Data (MongoDB/Database)."
            },
            {
              "id": "u1_t4_q2",
              "question": "What is the primary role of a Web Server (e.g. Nginx, Apache) compared to an Application Server (e.g. Node.js/Express)?",
              "options": [
                "Web servers compile C++ code, while application servers write HTML",
                "Web servers excel at delivering static assets, caching, and reverse-proxying; application servers execute dynamic business logic and DB transactions",
                "Web servers connect directly to MongoDB, while application servers handle DNS",
                "There is no difference; both execute identical code"
              ],
              "correct": 1,
              "explanation": "Web servers rapidly serve static HTML/CSS/images and terminate SSL, while application servers run application code and query databases."
            }
          ],
          "realWorldExample": "A fine-dining restaurant. The Waiter (Web Server) serves static printed menus and water. When you place a custom dish order, the Master Chef in the kitchen (App Server) cooks business logic using ingredients retrieved from the locked pantry (Database).",
          "conceptImage": "images/concepts/u1_t4_3tier_architecture.svg",
          "conceptImageCaption": "Presentation Tier (Browser/SPA) -> Logic Tier (Express API) -> Data Tier (MongoDB)."
        },
        {
          "name": "HTML & HTML5 Fundamentals & Semantics",
          "details": "Document structure (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`), semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`). Headings, paragraphs, anchors, lists, tables.",
          "teachingPoints": [
            "Why semantics matter: Accessibility (screen readers), SEO, and clean code maintainability.",
            "Never build an entire page out of only `<div>` tags (div soup anti-pattern)."
          ],
          "liveCode": "<!-- Semantic HTML5 Structure -->\n<header style=\"background: #334155; padding: 12px; color: white;\">\n  <nav><a href=\"#home\" style=\"color: #38bdf8;\">Home</a> | <a href=\"#syllabus\" style=\"color: #38bdf8;\">Syllabus</a></nav>\n</header>\n<main style=\"padding: 16px;\">\n  <article>\n    <h2>MERN-STACK: Full Stack Web Development</h2>\n    <p>HTML5 semantic structure with accessible navigation.</p>\n  </article>\n</main>\n<footer style=\"background: #0f172a; padding: 10px; color: #94a3b8; font-size: 0.8rem;\">\n  Full Stack Academy © 2026\n</footer>",
          "conceptMcqs": [
            {
              "id": "u1_t5_q1",
              "question": "Which of the following is a semantic HTML5 tag that improves accessibility and search engine optimization?",
              "options": [
                "<div class='article'>",
                "<article>",
                "<content-box>",
                "<text-wrap>"
              ],
              "correct": 1,
              "explanation": "HTML5 semantic elements like <article>, <section>, <nav>, and <header> explicitly convey the meaning of the content to browsers, screen readers, and search engines."
            },
            {
              "id": "u1_t5_q2",
              "question": "What is the purpose of the `<!DOCTYPE html>` declaration at the very top of a web document?",
              "options": [
                "It imports standard CSS styles from the W3C servers",
                "It instructs the browser engine to render the document in modern standards compliance mode",
                "It allocates GPU memory for JavaScript compilation",
                "It secures the web page against SQL injection"
              ],
              "correct": 1,
              "explanation": "<!DOCTYPE html> prevents browsers from switching into legacy Quirks Mode and ensures standardized rendering across modern browser engines."
            }
          ],
          "realWorldExample": "A printed newspaper layout. A newspaper has distinct physical mastheads, section columns, articles, and footers. If every section was printed in identical unmarked grey cardboard boxes (<div>), readers and indexing librarians couldn't navigate or catalogue the content.",
          "conceptImage": "images/concepts/u1_t5_html5_semantics.svg",
          "conceptImageCaption": "Semantic layout tags (<header>, <nav>, <main>, <article>, <aside>, <footer>)."
        },
        {
          "name": "HTML Form & Controls with Validation",
          "details": "Interactive forms: `<form action='' method='POST'>`, inputs (`text`, `password`, `email`, `number`, `date`, `file`, `checkbox`, `radio`), `<select>`, `<textarea>`, `<button>`. Attributes: `required`, `pattern`, `placeholder`, `disabled`.",
          "teachingPoints": [
            "Explain client-side validation (`required`, regex `pattern`) vs server-side validation.",
            "Why server validation is always mandatory (client validation can be bypassed)."
          ],
          "liveCode": "<form onsubmit=\"event.preventDefault(); alert('Form Validated!');\" style=\"background: #1e293b; padding: 16px; border-radius: 8px; color: #fff;\">\n  <label style=\"display:block; margin-bottom:4px;\">Student Email (required):</label>\n  <input type=\"email\" required placeholder=\"student@devportal.io\" style=\"padding: 8px; width: 100%; box-sizing: border-box; margin-bottom: 12px;\">\n  <label style=\"display:block; margin-bottom:4px;\">Roll Number (format: DEV-XX):</label>\n  <input type=\"text\" pattern=\"MERN-[0-9]{2}\" placeholder=\"DEV-01\" required style=\"padding: 8px; width: 100%; box-sizing: border-box; margin-bottom: 12px;\">\n  <button type=\"submit\" style=\"background: #2563eb; color: #fff; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;\">Submit Admission Form</button>\n</form>",
          "conceptMcqs": [
            {
              "id": "u1_t6_q1",
              "question": "Which HTML5 attribute enforces that an input field cannot be submitted while empty?",
              "options": [
                "validate='true'",
                "required",
                "notnull='yes'",
                "mandatory"
              ],
              "correct": 1,
              "explanation": "The boolean `required` attribute activates native client-side validation, preventing submission if the field is empty."
            },
            {
              "id": "u1_t6_q2",
              "question": "Why should sensitive credentials like passwords be sent using the POST method rather than GET?",
              "options": [
                "GET is slower than POST",
                "GET encodes parameters into the URL query string, exposing sensitive credentials in browser history, logs, and bookmarks",
                "GET requests cannot carry text data",
                "POST automatically encrypts data using quantum encryption"
              ],
              "correct": 1,
              "explanation": "POST packages data inside the HTTP request body instead of the URL string, shielding credentials from browser history, server logs, and shoulder-surfing."
            }
          ],
          "realWorldExample": "Airport check-in and immigration. The airline kiosk checks if your passport number is filled in before issuing a boarding pass (Client validation), but the immigration officer verifies the chip against the national database before allowing boarding (Server validation).",
          "conceptImage": "images/concepts/u1_t6_html_forms_validation.svg",
          "conceptImageCaption": "Browser Constraint Validation API checking input patterns before HTTP submission."
        },
        {
          "name": "CSS Box Model, Flexbox & Grid",
          "details": "CSS Box Model (Content, Padding, Border, Margin, `box-sizing: border-box`). Display properties (block, inline, inline-block, flex, grid). Media Queries (`@media (max-width: 768px)`).",
          "teachingPoints": [
            "Explain the disaster of default `box-sizing: content-box` (adding padding increases overall width!).",
            "Why every modern developer puts `* { box-sizing: border-box; }` at the top of CSS.",
            "Flexbox for 1-dimensional layouts (navbar, button groups) vs Grid for 2-dimensional layouts (cards, dashboards)."
          ],
          "liveCode": "<style>\n.flex-container {\n  display: flex;\n  gap: 12px;\n  background: #0f172a;\n  padding: 16px;\n  border-radius: 8px;\n}\n.box {\n  flex: 1;\n  background: #2563eb;\n  color: white;\n  padding: 16px;\n  text-align: center;\n  border-radius: 6px;\n}\n</style>\n<div class=\"flex-container\">\n  <div class=\"box\">Flex Item 1</div>\n  <div class=\"box\">Flex Item 2</div>\n  <div class=\"box\">Flex Item 3</div>\n</div>",
          "conceptMcqs": [
            {
              "id": "u1_t7_q1",
              "question": "When `box-sizing: border-box` is applied to an element, what does the specified `width` include?",
              "options": [
                "Content only (excluding padding and border)",
                "Content + Padding + Border",
                "Content + Margin",
                "Margin + Border + Padding + Content"
              ],
              "correct": 1,
              "explanation": "With `border-box`, specified width includes Content + Padding + Border, preventing layout breakage when adjusting padding or borders."
            },
            {
              "id": "u1_t7_q2",
              "question": "In CSS Flexbox, which property aligns flex items along the cross axis (perpendicular to the main axis)?",
              "options": [
                "justify-content",
                "align-items",
                "flex-direction",
                "align-content"
              ],
              "correct": 1,
              "explanation": "`justify-content` controls alignment on the primary axis (horizontal by default), while `align-items` controls alignment across the perpendicular cross axis."
            },
            {
              "id": "u1_t7_q3",
              "question": "What is the total rendered width of an element with `box-sizing: content-box`, `width: 200px`, `padding: 20px`, and `border: 5px`?",
              "options": [
                "200px",
                "250px",
                "225px",
                "240px"
              ],
              "correct": 1,
              "explanation": "Rendered width = width (200px) + left/right padding (2 × 20 = 40px) + left/right border (2 × 5 = 10px) = 250px."
            }
          ],
          "realWorldExample": "Shipping a delicate smartphone in an e-commerce parcel. The phone itself is Content. The bubble-wrap wrapping around the phone is Padding. The cardboard shipping carton is the Border. The empty safety distance between boxes in the delivery van is Margin.",
          "conceptImage": "images/concepts/u1_t7_css_box_model.svg",
          "conceptImageCaption": "Concentric layout box model: Margin -> Border -> Padding -> Content."
        }
      ],
      "codeExample": {
        "title": "Modern Semantic HTML5 & Responsive CSS Card",
        "language": "html",
        "code": "<!-- Semantic HTML5 & CSS Card -->\n<div class=\"course-card\">\n  <div class=\"card-badge\">Unit 1 Demo</div>\n  <h2>Full Stack MERN (MERN-STACK)</h2>\n  <p>Full Stack Web Development Academy • MERN Full Stack Track</p>\n  \n  <form id=\"contactForm\" onsubmit=\"event.preventDefault(); alert('Form Submitted!');\">\n    <div class=\"form-group\">\n      <label for=\"studentEmail\">Student Email:</label>\n      <input type=\"email\" id=\"studentEmail\" placeholder=\"developer@devportal.io\" required>\n    </div>\n    <button type=\"submit\" class=\"btn-primary\">Register for Lecture</button>\n  </form>\n</div>\n\n<style>\n.course-card {\n  background: linear-gradient(135deg, #1e293b, #0f172a);\n  color: #f8fafc;\n  padding: 24px;\n  border-radius: 12px;\n  border: 1px solid #334155;\n  box-shadow: 0 10px 25px rgba(0,0,0,0.3);\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  max-width: 420px;\n}\n.card-badge {\n  display: inline-block;\n  padding: 4px 10px;\n  background: #3b82f6;\n  color: #fff;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.course-card h2 { margin: 0 0 6px 0; font-size: 1.4rem; color: #60a5fa; }\n.course-card p { color: #94a3b8; font-size: 0.9rem; margin-bottom: 16px; }\n.form-group { margin-bottom: 14px; }\n.form-group label { display: block; font-size: 0.85rem; margin-bottom: 4px; color: #cbd5e1; }\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border-radius: 6px;\n  border: 1px solid #475569;\n  background: #0f172a;\n  color: #fff;\n  box-sizing: border-box;\n}\n.btn-primary {\n  width: 100%;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  padding: 10px;\n  border-radius: 6px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease;\n}\n.btn-primary:hover { background: #1d4ed8; }\n</style>"
      },
      "examQuestions": [
        {
          "type": "2 Marks",
          "q": "Define DNS. Explain how a domain name is resolved into an IP address."
        },
        {
          "type": "2 Marks",
          "q": "Distinguish between Web Server and Application Server with examples."
        },
        {
          "type": "2 Marks",
          "q": "Explain the purpose of the CSS Box Model and box-sizing: border-box."
        },
        {
          "type": "10 Marks",
          "q": "Explain 3-tier web architecture in detail. Describe the role of HTTP status codes (2xx, 3xx, 4xx, 5xx) and HTTP request methods in client-server communication."
        },
        {
          "type": "10 Marks",
          "q": "Discuss new semantic and multimedia elements introduced in HTML5. Design a complete student registration form using HTML5 controls with form validations."
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Javascript: Language, DOM & JSON",
      "hours": 9,
      "badgeColor": "#eab308",
      "diagramImage": "images/unit2_javascript_dom.jpg",
      "diagramCaption": "High-Resolution Infographic: HTML DOM Tree Nodes, Event Bubbling propagation upwards, and JSON Parsing/Serialization.",
      "interactiveWidgetId": "eventBubblingWidget",
      "summary": "Master modern JavaScript fundamentals, ES6+ features, functional programming, prototype chain, DOM tree traversal & manipulation, and JSON data serialization.",
      "conceptualAnalogies": [
        {
          "concept": "Event Bubbling",
          "analogy": "Underwater Air Bubble Analogy",
          "explanation": "When you pop an air bubble at the bottom of a pool (click a button inside a div), that bubble floats upward through the water layers (button -> div -> body -> document) triggering listeners at each stage."
        },
        {
          "concept": "Closures",
          "analogy": "Backpack Analogy",
          "explanation": "When a function is born, it packs a backpack containing all variables available in its surrounding environment. Even after the outer function finishes executing, that inner function carries its backpack wherever it goes."
        },
        {
          "concept": "JSON vs JavaScript Object",
          "analogy": "Flattened Shipping Box vs Assembled Furniture",
          "explanation": "A JavaScript object in memory is like an assembled sofa. To send it across the network wire to a server, we must flatten and serialize it into a flat cardboard box (JSON string). When it arrives, the server unboxes it (`JSON.parse`)."
        }
      ],
      "topics": [
        {
          "name": "Variables (var, let, const), Statements & Control Flow",
          "details": "`var` (function-scoped, hoisted to top with undefined) vs `let` & `const` (block-scoped, Temporal Dead Zone). Expressions, comparisons (`==` loose with type coercion vs `===` strict without coercion), logical operators, switch/if-else.",
          "teachingPoints": [
            "Demonstrate why `var` causes subtle bugs in loops and hoisting.",
            "Show the classic `console.log(0 == '0')` (true) vs `0 === '0'` (false).",
            "Rule of thumb: Always default to `const`, use `let` when reassignment is needed, never use `var` in modern MERN."
          ],
          "liveCode": "// Scoping Demonstration\nfunction scopeTest() {\n  if (true) {\n    var functionScoped = \"I leak outside the if block!\";\n    let blockScoped = \"I stay inside this block!\";\n  }\n  console.log(functionScoped); // Works\n  // console.log(blockScoped); // ReferenceError!\n}\nscopeTest();",
          "conceptMcqs": [
            {
              "id": "u2_t1_q1",
              "question": "Why should developers prefer `let` and `const` over `var` in modern JavaScript?",
              "options": [
                "`var` is block-scoped, while `let` is globally scoped",
                "`let` and `const` provide block scope `{}` and prevent accidental variable leaking and hoisting bugs",
                "`var` runs slower on modern CPUs",
                "`let` can only store strings, which makes it safer"
              ],
              "correct": 1,
              "explanation": "`let` and `const` are scoped to the nearest enclosing block `{}` and reside in a Temporal Dead Zone before initialization, eliminating `var` hoisting pitfalls."
            },
            {
              "id": "u2_t1_q2",
              "question": "What will `typeof null` evaluate to in JavaScript?",
              "options": [
                "'null'",
                "'undefined'",
                "'object'",
                "'number'"
              ],
              "correct": 2,
              "explanation": "`typeof null === 'object'` is a famous historic artifact in JavaScript's original type-tagging implementation that has been preserved for backward compatibility."
            },
            {
              "id": "u2_t1_q3",
              "question": "What is the key difference between the loose equality operator `==` and the strict equality operator `===`?",
              "options": [
                "`==` performs type coercion before comparison; `===` checks both value and type without conversion",
                "`===` converts strings to numbers before checking",
                "`==` only works for boolean values",
                "`===` checks if memory addresses match rather than values"
              ],
              "correct": 0,
              "explanation": "Strict equality (`===`) checks both data type and value without performing implicit type coercion (e.g. `'5' == 5` is true, but `'5' === 5` is false)."
            }
          ],
          "realWorldExample": "A conference whiteboard vs a permanent laser engraving. 'let' is writing meeting notes on a whiteboard with dry-erase marker (reassignable inside this room). 'const' is laser engraving the company registration number on a brass plaque (never reassignable).",
          "conceptImage": "images/concepts/u2_t1_js_scoping_hoisting.svg",
          "conceptImageCaption": "var function scope vs let & const block scoping with Temporal Dead Zone."
        },
        {
          "name": "Modern Array Methods (map, filter, reduce)",
          "details": "Functional programming principles. Immutability: array methods that return fresh arrays without modifying the source. `map` (transforms each item), `filter` (selects subset matching predicate), `reduce` (accumulates to single value), `find`, `some`, `every`.",
          "teachingPoints": [
            "Essential for React: React uses `.map()` to render lists of JSX components.",
            "Write the chaining pattern on whiteboard: array.filter().map().reduce()."
          ],
          "liveCode": "const scores = [65, 88, 45, 92, 73, 58];\n\n// 1. Filter: Pass marks >= 60\nconst passed = scores.filter(s => s >= 60);\n\n// 2. Map: Format as string\nconst gradeLabels = passed.map(s => `Grade: ${s}%`);\n\n// 3. Reduce: Calculate Batch Average\nconst average = scores.reduce((sum, s) => sum + s, 0) / scores.length;\n\nconsole.log(\"Passed:\", passed);\nconsole.log(\"Batch Average:\", average.toFixed(1));",
          "conceptMcqs": [
            {
              "id": "u2_t2_q1",
              "question": "Which array method transforms every element in an array into a new element, returning a new array of the same length without mutating the original?",
              "options": [
                "forEach()",
                "map()",
                "filter()",
                "splice()"
              ],
              "correct": 1,
              "explanation": "`map()` returns a new array where each item is the result of calling the callback function on each element of the original array."
            },
            {
              "id": "u2_t2_q2",
              "question": "What is the return value of `[1, 2, 3, 4].reduce((acc, curr) => acc + curr, 10)`?",
              "options": [
                "10",
                "20",
                "24",
                "[10, 1, 2, 3, 4]"
              ],
              "correct": 1,
              "explanation": "The accumulator starts at initial value 10, then adds 1, 2, 3, and 4 sequentially: 10 + 1 + 2 + 3 + 4 = 20."
            }
          ],
          "realWorldExample": "An automated bakery line. map() spreads chocolate glaze on every cupcake. filter() detects and discards any burnt cupcakes. reduce() sums up the total weight of all finished cupcakes into one final shipping invoice number.",
          "conceptImage": "images/concepts/u2_t2_array_methods_pipeline.svg",
          "conceptImageCaption": "Functional immutable collection pipeline: .filter() -> .map() -> .reduce()."
        },
        {
          "name": "Objects, Prototypes & Closures",
          "details": "Object literals, dot vs bracket notation, destructuring `{ name, age }`. Prototypes & prototype inheritance (`__proto__` and `Object.create`). Functions: declarations, expressions, Arrow functions (`() => {}`), `this` binding, Lexical Scoping and Closures (functions retaining outer variables).",
          "teachingPoints": [
            "Show how Arrow functions do NOT bind their own `this` (inherits from lexical scope).",
            "Demonstrate closure with a counter or private variable example."
          ],
          "liveCode": "// Closure Example: Private Bank Account\nfunction createBankAccount(initialBalance) {\n  let balance = initialBalance; // Private variable hidden inside closure\n  \n  return {\n    deposit: (amount) => { balance += amount; return balance; },\n    withdraw: (amount) => { balance -= amount; return balance; },\n    getBalance: () => balance\n  };\n}\n\nconst myAccount = createBankAccount(1000);\nconsole.log(\"After deposit:\", myAccount.deposit(500)); // 1500\nconsole.log(\"Balance:\", myAccount.getBalance());       // 1500",
          "conceptMcqs": [
            {
              "id": "u2_t3_q1",
              "question": "In JavaScript, what constitutes a 'Closure'?",
              "options": [
                "A function that terminates all background event listeners",
                "A function bundled with references to its surrounding lexical environment",
                "An object that cannot be modified or frozen",
                "A syntax error caused by unclosed parentheses"
              ],
              "correct": 1,
              "explanation": "A closure allows an inner function to retain access to variables declared in its outer enclosing function even after that outer function has finished executing."
            },
            {
              "id": "u2_t3_q2",
              "question": "How does JavaScript look up a property that is not found directly on an object instance?",
              "options": [
                "It traverses up the prototype chain (`[[Prototype]]`) until it finds the property or reaches `null`",
                "It automatically queries the global `window` object",
                "It throws an immediate fatal syntax exception",
                "It restarts the object constructor function"
              ],
              "correct": 0,
              "explanation": "JavaScript uses prototypal inheritance: if a property is missing on an object, the runtime checks its prototype, and so on up the prototype chain."
            }
          ],
          "realWorldExample": "A private bank locker key. An outer function creates a bank vault holding private gold. The inner function returned is the private key (Closure). Even when the bank manager goes home for the day, the keyholder can still deposit or withdraw from that specific locker.",
          "conceptImage": "images/concepts/u2_t3_prototype_closures.svg",
          "conceptImageCaption": "Prototype delegation chain and lexical closure state encapsulation."
        },
        {
          "name": "HTML DOM Hierarchy & Element Selection",
          "details": "Tree representation of HTML nodes (`window` -> `document` -> `html` -> `body`). Selecting elements: `document.getElementById`, `querySelector`, `querySelectorAll`. Navigating: `parentNode`, `children`, `nextElementSibling`.",
          "teachingPoints": [
            "Differentiate HTMLCollection (live) vs NodeList (static from querySelectorAll).",
            "Why `querySelector` is preferred over old `getElementById`."
          ],
          "liveCode": "// Selecting DOM elements\nconst heading = document.querySelector('h1');\nconst allButtons = document.querySelectorAll('button');\nconsole.log(\"Total Buttons on Page:\", allButtons.length);",
          "conceptMcqs": [
            {
              "id": "u2_t4_q1",
              "question": "What data structure does `document.querySelectorAll('.btn')` return in modern browsers?",
              "options": [
                "A live HTMLCollection that mutates automatically",
                "A static NodeList representing the matching elements at query time",
                "A single HTML element or null",
                "A plain JavaScript Array of strings"
              ],
              "correct": 1,
              "explanation": "`querySelectorAll` returns a static (non-live) NodeList containing all elements that match the specified CSS selector."
            },
            {
              "id": "u2_t4_q2",
              "question": "What is the Document Object Model (DOM)?",
              "options": [
                "A relational database schema for storing website cookies",
                "A programming interface that represents HTML documents as a hierarchical tree of nodes that code can inspect and modify",
                "The JavaScript execution engine inside web browsers",
                "A CSS stylesheet compiler"
              ],
              "correct": 1,
              "explanation": "The DOM represents an HTML page as an object-oriented tree structure, allowing scripts to dynamically manipulate structure, style, and content."
            }
          ],
          "realWorldExample": "An ancestral family tree in a registry office. getElementById('grandchild') is calling a family member by their unique ID card. querySelectorAll('.cousins') selects everyone in that specific branch for a family photo.",
          "conceptImage": "images/concepts/u2_t4_dom_tree_hierarchy.svg",
          "conceptImageCaption": "Document Object Model node hierarchy parsed from HTML markup."
        },
        {
          "name": "DOM Manipulation & Event Bubbling vs Capturing",
          "details": "Modifying content (`textContent`, `innerHTML`), attributes (`setAttribute`), styling (`element.style.color`, `classList.add`). Events: `addEventListener('click', fn)`, event object (`e.target`, `e.preventDefault()`), Event Bubbling vs Capturing, Event Delegation.",
          "teachingPoints": [
            "Explain Event Delegation: Attach 1 listener to parent `<ul>` instead of 100 listeners to each `<li>`.",
            "Show `e.stopPropagation()` to stop bubbling."
          ],
          "liveCode": "// Event Delegation Pattern\nconst list = document.getElementById('myList');\nif (list) {\n  list.addEventListener('click', (e) => {\n    if (e.target.tagName === 'LI') {\n      alert(\"Clicked list item: \" + e.target.textContent);\n    }\n  });\n}",
          "conceptMcqs": [
            {
              "id": "u2_t5_q1",
              "question": "In standard W3C DOM event propagation, what is the correct order of the three event phases?",
              "options": [
                "Bubbling phase → Target phase → Capturing phase",
                "Capturing phase (trickle down) → Target phase → Bubbling phase (bubble up)",
                "Target phase → Capturing phase → Bubbling phase",
                "Random dispatch based on element z-index"
              ],
              "correct": 1,
              "explanation": "Events travel down from the window root toward the target element (Capturing), hit the target (Target phase), and then travel back up the tree (Bubbling)."
            },
            {
              "id": "u2_t5_q2",
              "question": "Which method prevents an event from propagating further up or down the DOM tree?",
              "options": [
                "event.preventDefault()",
                "event.stopPropagation()",
                "event.halt()",
                "document.freezeEvent()"
              ],
              "correct": 1,
              "explanation": "`event.stopPropagation()` stops the event from continuing along the capturing or bubbling path, preventing parent handlers from firing."
            },
            {
              "id": "u2_t5_q3",
              "question": "What does `event.preventDefault()` accomplish?",
              "options": [
                "It cancels the browser's default native action (e.g. following a link or submitting a form) without stopping event bubbling",
                "It stops JavaScript execution completely",
                "It removes the clicked element from the document",
                "It stops the event from bubbling up to parent nodes"
              ],
              "correct": 0,
              "explanation": "`preventDefault()` suppresses default browser behaviors (such as submitting an HTML form or following an anchor URL) while allowing the event itself to propagate."
            }
          ],
          "realWorldExample": "Dropping a pebble into a pool. The stone drops straight down to the bottom (Capturing to Target), and water ripples propagate upward to the pool edge, surrounding patio tiles, and garden lawn (Bubbling).",
          "conceptImage": "images/concepts/u2_t5_event_bubbling_capturing.svg",
          "conceptImageCaption": "Event propagation cycle: Capturing Phase -> Target -> Bubbling Phase."
        },
        {
          "name": "JSON Syntax, Parsing & Serialization",
          "details": "Lightweight text-based data interchange format. Syntax rules (key in double quotes, values: string, number, object, array, boolean, null). `JSON.stringify()` (object to string) and `JSON.parse()` (string to object). Crucial for REST API payloads.",
          "teachingPoints": [
            "Point out common mistakes: Single quotes `'name'` fail JSON parsing (must be `\"name\"`).",
            "Functions and `undefined` are ignored during JSON.stringify()."
          ],
          "liveCode": "const studentObj = { roll: \"DEV01\", name: \"Ananya\", enrolled: true };\n\n// Convert to string to send to server\nconst jsonString = JSON.stringify(studentObj);\nconsole.log(\"String format:\", jsonString);\n\n// Convert back to object\nconst parsedObj = JSON.parse(jsonString);\nconsole.log(\"Object Name:\", parsedObj.name);",
          "conceptMcqs": [
            {
              "id": "u2_t6_q1",
              "question": "Which of the following represents strictly valid JSON syntax?",
              "options": [
                "{ name: 'Alex', role: 'admin' }",
                "{ \"name\": \"Alex\", \"role\": \"admin\" }",
                "{ 'name': 'Alex', 'role': 'admin' }",
                "{ \"name\": \"Alex\", \"role\": \"admin\", }"
              ],
              "correct": 1,
              "explanation": "JSON requires double quotes around both property keys and string values, and strictly forbids trailing commas."
            },
            {
              "id": "u2_t6_q2",
              "question": "Which JavaScript built-in method converts a JavaScript object into a JSON-formatted string?",
              "options": [
                "JSON.parse()",
                "JSON.stringify()",
                "JSON.serialize()",
                "Object.toJSONString()"
              ],
              "correct": 1,
              "explanation": "`JSON.stringify(value)` serializes objects into JSON strings. `JSON.parse(text)` deserializes JSON strings back into JavaScript objects."
            }
          ],
          "realWorldExample": "Flat-pack furniture. Before shipping across the ocean, a wooden dining table is disassembled into a flat compact cardboard carton (JSON serialization via stringify). Once delivered, you assemble it back into an active wooden table (JSON parsing via parse).",
          "conceptImage": "images/concepts/u2_t6_json_serialization.svg",
          "conceptImageCaption": "JSON.stringify() serialization to UTF-8 wire format and JSON.parse() deserialization."
        }
      ],
      "codeExample": {
        "title": "DOM Manipulation with Array Methods & JSON",
        "language": "javascript",
        "code": "// Unit 2 Demo: Array Methods, DOM & JSON\nconst studentRecords = [\n  { roll: \"MC01\", name: \"Ananya\", marks: 88 },\n  { roll: \"MC02\", name: \"Rohan\", marks: 62 },\n  { roll: \"MC03\", name: \"Sneha\", marks: 94 }\n];\n\n// 1. Serialization to JSON\nconst jsonPayload = JSON.stringify(studentRecords);\nconsole.log(\"JSON Payload:\", jsonPayload);\n\n// 2. Filter & Map (Functional Programming)\nconst highAchievers = studentRecords\n  .filter(s => s.marks >= 75)\n  .map(s => `⭐ ${s.name} (${s.marks}%)`);\n\nconsole.log(\"Distinction Students:\", highAchievers);\n\n// 3. Closure Example\nfunction createGradeCounter(unitName) {\n  let count = 0;\n  return function() {\n    count++;\n    return `Unit: ${unitName} - Questions Attempted: ${count}`;\n  };\n}\nconst counter = createGradeCounter(\"JavaScript DOM\");\nconsole.log(counter()); // Attempted: 1\nconsole.log(counter()); // Attempted: 2"
      },
      "examQuestions": [
        {
          "type": "2 Marks",
          "q": "Differentiate between '==' and '===' in JavaScript with examples."
        },
        {
          "type": "2 Marks",
          "q": "What is a Closure in JavaScript? Give a practical use-case."
        },
        {
          "type": "2 Marks",
          "q": "State the difference between JSON.stringify() and JSON.parse()."
        },
        {
          "type": "10 Marks",
          "q": "Explain the JavaScript DOM hierarchy. Write a JavaScript program to dynamically create an HTML table displaying a list of students fetched from a JSON string."
        },
        {
          "type": "10 Marks",
          "q": "Explain event bubbling and event capturing with neat diagrams. How does event delegation improve performance in web applications?"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Node.js and Backend Foundations",
      "hours": 9,
      "badgeColor": "#22c55e",
      "diagramImage": "images/unit3_nodejs_eventloop.jpg",
      "diagramCaption": "High-Resolution Infographic: Node.js V8 Engine, Call Stack, Libuv Thread Pool, Event Loop Phases, Macrotask vs Microtask Queue.",
      "interactiveWidgetId": "eventLoopWidget",
      "summary": "Understand MERN architecture, Node.js V8 runtime, async non-blocking I/O, Callbacks, Promises, async/await, Event Loop, core modules, and npm package management.",
      "conceptualAnalogies": [
        {
          "concept": "Node.js Single-Threaded Event Loop",
          "analogy": "Single Waiter with Kitchen Staff Analogy",
          "explanation": "In Apache/Tomernt (multi-threaded), a new waiter is hired for every customer table (heavy memory consumption). In Node.js, there is one super-fast waiter (the Event Loop). The waiter takes your food order, passes it to the kitchen staff (Libuv Thread Pool), and immediately moves to the next customer. When your food is cooked, a bell rings (callback), and the waiter brings it to your table!"
        },
        {
          "concept": "Callback Hell",
          "analogy": "Russian Nesting Dolls (Pyramid of Doom)",
          "explanation": "When step B depends on step A, and step C depends on step B, nesting callbacks inside callbacks creates a sideways pyramid `> > > >` that is impossible to read or debug. Promises flatten this into a clean `.then().then().then()` assembly line."
        }
      ],
      "topics": [
        {
          "name": "Introduction to MERN & MVC vs Component Architecture",
          "details": "MERN Stack: MongoDB (Database), Express.js (Backend Framework), React.js (Frontend UI), Node.js (JavaScript Runtime). Model-View-Controller (MVC) pattern vs Component-based frontend architecture.",
          "teachingPoints": [
            "Why JavaScript across the entire stack is a superpower (JSON shared everywhere).",
            "Compare traditional server-rendered MVC (JSP/PHP) with client-rendered SPA + REST API."
          ],
          "liveCode": "// MERN Data Flow Snapshot\n// React: fetch('/api/books')\n// Express: router.get('/books', controller.getBooks)\n// Mongoose: Book.find()\n// MongoDB: BSON records returned",
          "conceptMcqs": [
            {
              "id": "u3_t1_q1",
              "question": "What do the four technologies in the MERN stack stand for?",
              "options": [
                "MySQL, Express.js, React.js, Nginx",
                "MongoDB, Express.js, React.js, Node.js",
                "MariaDB, Ember.js, Redux, Next.js",
                "MongoDB, Elixir, React Native, Node.js"
              ],
              "correct": 1,
              "explanation": "MERN is a pure JavaScript full-stack solution consisting of MongoDB (Database), Express (Backend framework), React (Frontend library), and Node.js (Runtime)."
            },
            {
              "id": "u3_t1_q2",
              "question": "How does React's Component-Driven architecture differ fundamentally from traditional server-rendered MVC?",
              "options": [
                "React packages UI structure, styling, and state into modular, self-contained components rather than separating HTML templates from logic",
                "React removes the need for databases completely",
                "React requires writing backend code in Python",
                "React executes entirely on Apache web servers"
              ],
              "correct": 0,
              "explanation": "Component architecture encapsulates markup, behavior, and presentation into reusable composable building blocks rather than separating views from controllers."
            }
          ],
          "realWorldExample": "Modular Lego blocks vs solid concrete walls. Instead of pouring an entire building in one unchangeable slab, React gives you reusable Lego bricks (Navbar, ProductCard, CartButton) that manage their own state and snap together seamlessly.",
          "conceptImage": "images/concepts/u3_t1_mern_mvc_component.svg",
          "conceptImageCaption": "MERN full stack JavaScript architecture: React -> Express -> Node -> MongoDB."
        },
        {
          "name": "Browser JS vs Node.js & Node.js REPL",
          "details": "Node.js is an open-source, cross-platform runtime environment built on Google Chrome's V8 engine. Browser JS has DOM (`window`, `document`) and security sandbox; Node.js has system access (`fs`, `path`, `os`, `process`, `global`). REPL (Read-Eval-Print-Loop) for interactive execution.",
          "teachingPoints": [
            "Ask students: Can you read a file from the user's hard drive in browser JS? (No, security sandbox). Can you in Node.js? (Yes, via `fs` module).",
            "Open terminal in live demonstrations and type `node` to show the REPL."
          ],
          "liveCode": "// Node.js System Inspection\nconsole.log(\"Node Version:\", process.version);\nconsole.log(\"Operating System Platform:\", process.platform);\nconsole.log(\"Current Working Directory:\", process.cwd());",
          "conceptMcqs": [
            {
              "id": "u3_t2_q1",
              "question": "Which global object is available in browser JavaScript environments but is undefined in Node.js?",
              "options": [
                "console",
                "window",
                "setTimeout",
                "process"
              ],
              "correct": 1,
              "explanation": "`window` and `document` represent the browser DOM. In Node.js, the global environment object is named `global`, and system information is accessed via `process`."
            },
            {
              "id": "u3_t2_q2",
              "question": "What does REPL stand for in Node.js?",
              "options": [
                "Run, Execute, Process, Log",
                "Read, Eval, Print, Loop",
                "Request, Evaluate, Parse, Load",
                "Realtime Event Processing Link"
              ],
              "correct": 1,
              "explanation": "REPL is Node's interactive command-line environment that Reads user input, Evaluates the expression, Prints the result, and Loops back."
            }
          ],
          "realWorldExample": "A luxury car dashboard display vs pulling the engine out onto an industrial machine bench. The browser is the dashboard (specialized for audio, visual UI, user touches), while Node.js pulls the high-powered V8 engine out to run file systems and background servers.",
          "conceptImage": "images/concepts/u3_t2_browser_vs_node.svg",
          "conceptImageCaption": "Google V8 engine host differences: Browser Web APIs vs Node.js Libuv & OS access."
        },
        {
          "name": "Node.js Core Modules (fs, path, http, os, events)",
          "details": "Core modules: `fs` (file system), `path` (cross-platform path resolution), `http` (raw HTTP server), `os` (CPU/memory stats), `events` (`EventEmitter`). CommonJS module syntax (`require`, `module.exports`) vs ES6 Modules (`import`, `export`).",
          "teachingPoints": [
            "Why `path.join(__dirname, 'file.txt')` is needed (Windows uses `\\`, Linux/Mac uses `/`).",
            "Show how EventEmitter powers the core of Node.js."
          ],
          "liveCode": "const path = require('path');\nconst os = require('os');\n\nconsole.log(\"Free Memory:\", (os.freemem() / 1024 / 1024).toFixed(0) + \" MB\");\nconsole.log(\"Safe Cross-Platform Path:\", path.join(__dirname, 'uploads', 'report.pdf'));",
          "conceptMcqs": [
            {
              "id": "u3_t3_q1",
              "question": "Why should asynchronous I/O methods like `fs.readFile()` be used in web servers instead of synchronous methods like `fs.readFileSync()`?",
              "options": [
                "Synchronous methods use more disk storage space",
                "Synchronous methods block the entire single-threaded Node.js event loop, freezing all concurrent requests until the disk read finishes",
                "Synchronous methods only work on Linux servers",
                "Asynchronous methods cannot read text files"
              ],
              "correct": 1,
              "explanation": "Because Node.js executes JavaScript on a single thread, blocking calls like `readFileSync()` freeze the server from accepting or processing any other client requests."
            },
            {
              "id": "u3_t3_q2",
              "question": "Which Node.js core method safely joins file path segments, automatically taking care of OS-specific separators (`/` vs `\\`)?",
              "options": [
                "fs.join()",
                "path.join()",
                "os.resolve()",
                "url.concat()"
              ],
              "correct": 1,
              "explanation": "`path.join(__dirname, 'uploads', 'file.png')` automatically normalizes path delimiters across Windows, macOS, and Linux."
            }
          ],
          "realWorldExample": "A Swiss Army knife pre-packaged in the runtime. Without downloading anything from the internet, you have a built-in screwdriver (fs module to open files), a compass (path to navigate folder paths), and a telephone (http module to answer requests).",
          "conceptImage": "images/concepts/u3_t3_node_core_modules.svg",
          "conceptImageCaption": "Node.js core modules compiled directly into binary: fs, http, path, events, os, crypto."
        },
        {
          "name": "Asynchronous Programming: Callbacks, Promises & async/await",
          "details": "Single-threaded non-blocking I/O model. Callbacks and the problem of Callback Hell (Pyramid of Doom). ES6 Promises (`new Promise((resolve, reject) => {})`, `.then()`, `.catch()`). Modern `async/await` syntax with `try...catch`.",
          "teachingPoints": [
            "Write Callback Hell on the board.",
            "Refactor it step-by-step into Promises, then into modern `async/await`."
          ],
          "liveCode": "// Promises & async/await comparison\nfunction simulateDatabaseQuery(id) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ id, name: \"Learner\", status: \"Active\" }), 500);\n  });\n}\n\nasync function getStudentData() {\n  console.log(\"Fetching student...\");\n  const data = await simulateDatabaseQuery(101);\n  console.log(\"Database Response:\", data);\n}\ngetStudentData();",
          "conceptMcqs": [
            {
              "id": "u3_t4_q1",
              "question": "What major architectural problem led to the creation of Promises and `async/await` as alternatives to nested callbacks?",
              "options": [
                "Callbacks ran too quickly and crashed memory",
                "Callback Hell (Pyramid of Doom), which produced deeply nested, brittle, and unreadable code with fragmented error handling",
                "Callbacks could only run once per server reboot",
                "Browsers deprecated the `function` keyword"
              ],
              "correct": 1,
              "explanation": "Nested callbacks make error propagation and sequential asynchronous orchestration difficult to read and maintain."
            },
            {
              "id": "u3_t4_q2",
              "question": "What does an `async` function always return in JavaScript?",
              "options": [
                "A synchronous primitive value",
                "A Promise (which resolves with the returned value or rejects with thrown errors)",
                "An EventEmitter instance",
                "A Node.js stream"
              ],
              "correct": 1,
              "explanation": "Any function marked `async` automatically wraps its return value in a Promise, allowing callers to use `.then()` or `await`."
            },
            {
              "id": "u3_t4_q3",
              "question": "What is the recommended pattern to catch errors when using `await` inside an `async` function?",
              "options": [
                "Using a `try { ... } catch (error) { ... }` block",
                "Calling `process.exit(1)`",
                "Using `window.onerror`",
                "Errors cannot be caught when using await"
              ],
              "correct": 0,
              "explanation": "Standard `try/catch` blocks handle rejected Promises seamlessly when consuming asynchronous operations with `await`."
            }
          ],
          "realWorldExample": "A buzzing token pager at a modern coffee shop. You place your coffee order and get a vibrating token (Promise). You sit at your table and continue reading your book (non-blocking). When the token vibrates (await), you collect your coffee without wasting time standing in line.",
          "conceptImage": "images/concepts/u3_t4_async_callbacks_promises.svg",
          "conceptImageCaption": "Evolution of asynchronous JavaScript: Callbacks -> Promises -> async/await."
        },
        {
          "name": "Node.js Event Loop Architecture & Phases",
          "details": "Event Loop architecture: Call Stack, Libuv Thread Pool, Task Queue (Macrotasks: `setTimeout`, `setImmediate`), Microtask Queue (`process.nextTick`, Promises). Event Loop phases: Timers -> Pending I/O -> Idle/Prepare -> Poll -> Check (`setImmediate`) -> Close callbacks.",
          "teachingPoints": [
            "Walk through the infographic above showing the 6 circular phases.",
            "Explain that Microtasks always execute BEFORE the next Macrotask."
          ],
          "liveCode": "// Event Loop Execution Order Quiz\nconsole.log(\"1. Synchronous Start\");\n\nsetTimeout(() => console.log(\"4. Macrotask (setTimeout)\"), 0);\n\nPromise.resolve().then(() => console.log(\"3. Microtask (Promise)\"));\n\nconsole.log(\"2. Synchronous End\");\n// Output order: 1 -> 2 -> 3 -> 4",
          "conceptMcqs": [
            {
              "id": "u3_t5_q1",
              "question": "Which C-based library provides Node.js with its cross-platform event loop and asynchronous thread pool?",
              "options": [
                "V8",
                "libuv",
                "Babel",
                "WebKit"
              ],
              "correct": 1,
              "explanation": "While Google's V8 engine executes JavaScript code, libuv provides Node.js with non-blocking I/O, the event loop, and thread pool workers."
            },
            {
              "id": "u3_t5_q2",
              "question": "How do Microtasks (such as `process.nextTick()` and `Promise.then()`) execute relative to Macrotasks (such as `setTimeout()`)?",
              "options": [
                "Macrotasks execute first",
                "The microtask queue is drained immediately as soon as the call stack empties, before the event loop advances to the next macrotask phase",
                "They execute at the exact same millisecond via multi-threading",
                "Execution order is chosen randomly by the CPU"
              ],
              "correct": 1,
              "explanation": "Microtasks have immediate priority: whenever synchronous code finishes, all queued microtasks run before moving to timers or I/O callbacks."
            }
          ],
          "realWorldExample": "A single head chef running a busy pizzeria with kitchen assistants. The chef accepts incoming customer tickets, puts pizzas into the ovens (delegated to Libuv thread pool), and serves pizzas whose baking timers have chimed, never freezing frozen at the counter.",
          "conceptImage": "images/concepts/u3_t5_event_loop_phases.svg",
          "conceptImageCaption": "Libuv Event Loop phases: Timers -> Pending -> Poll -> Check -> Microtasks."
        },
        {
          "name": "Creating HTTP Server with 'http' Module & npm",
          "details": "`http.createServer((req, res) => { ... })`. Inspecting `req.url`, `req.method`, setting response headers (`res.writeHead(200, {'Content-Type': 'application/json'})`), writing body (`res.end()`). npm: `package.json`, `package-lock.json`, semantic versioning.",
          "teachingPoints": [
            "Explain why we learn `http.createServer` before jumping into Express.",
            "Explain what `^` and `~` mean in `package.json` (`^1.2.3` updates minor/patch, `~1.2.3` updates only patch)."
          ],
          "liveCode": "// Raw HTTP Server in Node.js\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ message: \"Hello from Node.js Server!\" }));\n});\n\n// server.listen(3000);",
          "conceptMcqs": [
            {
              "id": "u3_t6_q1",
              "question": "In Node's built-in `http.createServer((req, res) => { ... })`, what is the purpose of `res.writeHead(200, { 'Content-Type': 'application/json' })`?",
              "options": [
                "It sends the entire HTTP payload body and closes the socket",
                "It sends the HTTP status code and response header metadata before any body content is written",
                "It verifies the client's SSL certificate",
                "It restarts the server process on port 200"
              ],
              "correct": 1,
              "explanation": "`res.writeHead()` sends the status code and HTTP header fields to the client, preparing the connection for the body stream."
            },
            {
              "id": "u3_t6_q2",
              "question": "What is the central function of the `package.json` file in a Node.js project?",
              "options": [
                "It compiles JavaScript into native binary machine code",
                "It serves as the project manifest, tracking metadata, dependencies, author information, and runnable npm scripts",
                "It stores binary assets and images",
                "It configures DNS domain mappings"
              ],
              "correct": 1,
              "explanation": "`package.json` manages third-party package dependencies, entry points, metadata, and development/production execution scripts."
            }
          ],
          "realWorldExample": "Hiring a 24/7 receptionist for an office building. http.createServer() sets up a receptionist who listens on room phone extension :3000 (listen), greets callers with department headers (writeHead), and delivers requested paperwork (end).",
          "conceptImage": "images/concepts/u3_t6_npm_package_ecosystem.svg",
          "conceptImageCaption": "Raw HTTP server creation and npm package management ecosystem."
        }
      ],
      "codeExample": {
        "title": "Raw Node.js HTTP Server with Async File System & EventEmitter",
        "language": "javascript",
        "code": "// Unit 3 Demo: Node.js HTTP Server & EventEmitter\nconst http = require('http');\nconst EventEmitter = require('events');\n\nclass CourseEmitter extends EventEmitter {}\nconst courseLogger = new CourseEmitter();\n\n// Listen to custom event\ncourseLogger.on('lectureAccessed', (unit) => {\n  console.log(`[AUDIT LOG] Student accessed: ${unit} at ${new Date().toLocaleTimeString()}`);\n});\n\nconst server = http.createServer((req, res) => {\n  if (req.url === '/api/status' && req.method === 'GET') {\n    courseLogger.emit('lectureAccessed', 'Unit 3 Status API');\n    \n    res.writeHead(200, { 'Content-Type': 'application/json' });\n    res.end(JSON.stringify({\n      course: \"MERN-STACK\",\n      runtime: \"Node.js\",\n      version: process.version,\n      platform: process.platform,\n      status: \"Server active and non-blocking\"\n    }));\n  } else {\n    res.writeHead(404, { 'Content-Type': 'text/plain' });\n    res.end('Route Not Found');\n  }\n});\n\nserver.listen(3000, () => {\n  console.log('Node.js server listening on http://localhost:3000');\n});"
      },
      "examQuestions": [
        {
          "type": "2 Marks",
          "q": "Why is Node.js called single-threaded yet non-blocking?"
        },
        {
          "type": "2 Marks",
          "q": "Differentiate between package.json and package-lock.json."
        },
        {
          "type": "2 Marks",
          "q": "What is Callback Hell? How do Promises resolve it?"
        },
        {
          "type": "10 Marks",
          "q": "Explain the architecture of the Node.js Event Loop in detail with all its phases and the role of the Libuv thread pool."
        },
        {
          "type": "10 Marks",
          "q": "Write a Node.js program to create an HTTP web server that reads a file asynchronously using the 'fs/promises' module and returns its contents as a JSON response."
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "React.js – Frontend Development",
      "hours": 9,
      "badgeColor": "#06b6d4",
      "diagramImage": "images/unit4_react_virtualdom.jpg",
      "diagramCaption": "High-Resolution Infographic: Virtual DOM vs Real DOM, Reconciliation Diffing Algorithm, Unidirectional Data Flow, Props & State.",
      "interactiveWidgetId": "virtualDomWidget",
      "summary": "Understand React component architecture, Virtual DOM diffing, JSX, Props, State with useState, Lifecycle & side-effects with useEffect, Context API, and React Router navigation.",
      "conceptualAnalogies": [
        {
          "concept": "Virtual DOM Diffing",
          "analogy": "Architect Blueprint vs Physical Brick Wall",
          "explanation": "If you want to add a window to a house, destroying and rebuilding the entire physical brick wall (Real DOM repaint) is slow and expensive. Instead, you change the blueprint in memory (Virtual DOM), calculate the exact difference (Diffing), and tell the builder to cut a hole for just that one window (Batched Real DOM update)."
        },
        {
          "concept": "Props vs State",
          "analogy": "DNA vs Mood Analogy",
          "explanation": "Props are like your DNA: passed down from parents, read-only, and cannot be changed by the child. State is like your mood: internal, managed by yourself, and changes dynamically over time."
        }
      ],
      "topics": [
        {
          "name": "React Philosophy & Virtual DOM Reconciliation",
          "details": "Declarative, component-based frontend library created by Meta. Virtual DOM: lightweight JavaScript in-memory representation of real DOM. Reconciliation algorithm and Fiber tree: calculates diffs (diffing algorithm) and batches minimal real DOM mutations for high performance.",
          "teachingPoints": [
            "Show the diagram above of Previous Virtual DOM vs Updated Virtual DOM.",
            "Explain why manipulating Real DOM directly is slow (causes layout recalculation and repaint)."
          ],
          "liveCode": "// Concept of Virtual DOM Representation\nconst vDomNode = {\n  type: 'div',\n  props: { className: 'card' },\n  children: [\n    { type: 'h2', props: {}, children: ['MERN-STACK React'] }\n  ]\n};\nconsole.log(\"Virtual DOM is simply a plain JS object tree!\", vDomNode);",
          "conceptMcqs": [
            {
              "id": "u4_t1_q1",
              "question": "Why does React utilize a lightweight Virtual DOM instead of updating the real browser DOM directly on every state change?",
              "options": [
                "The real browser DOM is unable to display colors",
                "Direct DOM manipulations trigger expensive browser layout recalculations and repaints; Virtual DOM diffing batches updates efficiently in memory",
                "The real DOM does not support JavaScript objects",
                "The Virtual DOM saves data directly into MongoDB"
              ],
              "correct": 1,
              "explanation": "Updating the real DOM is computationally costly. React calculates diffs between lightweight JavaScript trees in memory, applying only minimal changes to the real DOM."
            },
            {
              "id": "u4_t1_q2",
              "question": "What is the name of React's algorithm that compares the previous Virtual DOM tree with the new one to determine minimal updates?",
              "options": [
                "B-Tree Partitioning",
                "Reconciliation (Diffing algorithm)",
                "Binary Search Pruning",
                "Depth-First Serializer"
              ],
              "correct": 1,
              "explanation": "Reconciliation is React's heuristic diffing algorithm that compares Virtual DOM elements and reconciles changes with high performance."
            }
          ],
          "realWorldExample": "Reviewing an architect's digital iPad model before tearing down drywall. Instead of physically repainting and knocking down walls on every design change (Real DOM), the designer tests changes on a digital 3D model (Virtual DOM), calculates exact diffs, and instructs builders to paint only the 2-inch patch that changed.",
          "conceptImage": "images/concepts/u4_t1_vdom_diffing_reconciliation.svg",
          "conceptImageCaption": "Virtual DOM tree diffing and selective browser DOM patching."
        },
        {
          "name": "JSX, Components & Props",
          "details": "JavaScript XML (JSX): syntax extension allowing HTML-like tags inside JavaScript. Functional components. Props: read-only inputs passed from parent to child components (unidirectional data flow). Prop drilling and default props.",
          "teachingPoints": [
            "Point out that JSX compiles down to `React.createElement()` behind the scenes.",
            "Rule: Props must never be mutated directly by child components."
          ],
          "liveCode": "// React Functional Component with Props\nfunction CourseBadge({ code, credits }) {\n  return (\n    <div style={{ background: '#0284c7', color: '#fff', padding: '6px 12px', borderRadius: '4px' }}>\n      Course: {code} | Credits: {credits}\n    </div>\n  );\n}",
          "conceptMcqs": [
            {
              "id": "u4_t2_q1",
              "question": "What does JSX syntax compile into behind the scenes before executing in the browser?",
              "options": [
                "Direct HTML strings passed to `element.innerHTML`",
                "`React.createElement()` function calls that produce plain JavaScript element objects",
                "WebAssembly binary instructions",
                "Direct SQL database queries"
              ],
              "correct": 1,
              "explanation": "JSX is syntactic sugar. Transpilers like Babel convert `<h1 className='title'>Hello</h1>` into `React.createElement('h1', { className: 'title' }, 'Hello')`."
            },
            {
              "id": "u4_t2_q2",
              "question": "In React's unidirectional data flow, can a child component directly mutate the `props` passed to it from its parent?",
              "options": [
                "Yes, child components can freely modify props anytime",
                "No, props are strictly read-only and immutable in the receiving component",
                "Only if the prop is a number or boolean",
                "Yes, by calling `this.props.update()`"
              ],
              "correct": 1,
              "explanation": "React adheres to strict unidirectional data flow: props are immutable inputs. If state needs to change, the parent must pass down an updater callback."
            }
          ],
          "realWorldExample": "Custom greeting cards. The greeting card template design is the Component. The recipient's name and message written inside the envelope are the Props (strictly read-only for the receiver).",
          "conceptImage": "images/concepts/u4_t2_jsx_components_props.svg",
          "conceptImageCaption": "Babel transpiling JSX to React.createElement() and unidirectional props flow."
        },
        {
          "name": "State Management with useState Hook",
          "details": "`useState` hook for local component state. Immutability: never mutate state directly (`setCount(prev => prev + 1)`). State updates trigger component re-render.",
          "teachingPoints": [
            "Common student error: `state = state + 1` (does not trigger re-render).",
            "Show functional updates `setCount(prev => prev + 1)` for state dependent on previous values."
          ],
          "liveCode": "// React useState Counter\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Current Count: {count}</p>\n      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>\n    </div>\n  );\n}",
          "conceptMcqs": [
            {
              "id": "u4_t3_q1",
              "question": "In `const [count, setCount] = useState(0);`, what is the best practice for incrementing `count` based on its prior value?",
              "options": [
                "count = count + 1;",
                "setCount(prevCount => prevCount + 1);",
                "setCount(count++);",
                "count.increment();"
              ],
              "correct": 1,
              "explanation": "Passing an updater function `prev => prev + 1` guarantees you are operating on the freshest state, preventing race conditions during batched updates."
            },
            {
              "id": "u4_t3_q2",
              "question": "What triggers when a state updater function (e.g. `setCount`) is called in a React component?",
              "options": [
                "The browser performs a full page refresh",
                "React schedules a re-render of the component and its children with the updated state",
                "The local variable mutates synchronously on the immediate next line",
                "The server is pinged for fresh HTML"
              ],
              "correct": 1,
              "explanation": "Calling a state setter notifies React that state has changed, prompting React to re-render the component and update the DOM."
            }
          ],
          "realWorldExample": "A digital sports scoreboard. Whenever a team scores a goal, the referee clicks the remote button (setScore(prev => prev + 1)), and the giant stadium display lights up with the fresh score instantly.",
          "conceptImage": "images/concepts/u4_t3_usestate_render_cycle.svg",
          "conceptImageCaption": "useState hook render cycle: state update triggers scheduled component re-execution."
        },
        {
          "name": "Side Effects with useEffect Hook",
          "details": "`useEffect` hook for side effects (data fetching, subscriptions, timers), dependency array (`[]` on mount, `[val]` on change, return cleanup function to prevent memory leaks).",
          "teachingPoints": [
            "Dependency Array Cheat Sheet: No array = runs every render; `[]` = runs once on mount; `[val]` = runs when `val` changes.",
            "Explain why cleanup function `return () => clearInterval(...)` is critical."
          ],
          "liveCode": "// useEffect Data Fetching Pattern\nuseEffect(() => {\n  let isMounted = true;\n\n  async function loadData() {\n    const res = await fetch('/api/course-info');\n    const data = await res.json();\n    if (isMounted) console.log(\"Fetched:\", data);\n  }\n  loadData();\n\n  return () => { isMounted = false; }; // Cleanup\n}, []);",
          "conceptMcqs": [
            {
              "id": "u4_t4_q1",
              "question": "When does a `useEffect` hook with an empty dependency array `[]` execute?",
              "options": [
                "On every single component re-render",
                "Exactly once, after the initial mount of the component",
                "Only right before the component unmounts",
                "Whenever any prop anywhere in the app updates"
              ],
              "correct": 1,
              "explanation": "An empty dependency array indicates that the side effect depends on no changing state or props, so React runs it only once upon initial mounting."
            },
            {
              "id": "u4_t4_q2",
              "question": "How do you clean up resources (such as active timers or event listeners) inside a `useEffect` hook?",
              "options": [
                "By calling `useEffect.destroy()`",
                "By returning a cleanup function from inside the effect callback",
                "By writing a `finally` block outside the component",
                "React removes custom timers automatically without developer code"
              ],
              "correct": 1,
              "explanation": "If your effect returns a function, React runs this cleanup function before re-running the effect and when the component unmounts."
            }
          ],
          "realWorldExample": "A smart hotel room keycard switch. When you insert your card on arrival (mount), the room AC and lights turn on. When you pull your card out on departure (unmount), the room cleanup function runs and turns off the electricity.",
          "conceptImage": "images/concepts/u4_t4_useeffect_lifecycle.svg",
          "conceptImageCaption": "useEffect side effects handling, dependency arrays, and cleanup functions."
        },
        {
          "name": "React Router for Single Page Application Navigation",
          "details": "Client-side routing without page reloads. `<BrowserRouter>`, `<Routes>`, `<Route path='/' element={<Home />} />`, `<Link to='/about'>`, `useNavigate` hook for programmatic navigation, `useParams` for URL params (`/student/:id`).",
          "teachingPoints": [
            "Explain how client-side routing intercepts anchor tag clicks to prevent full browser reloads.",
            "Contrast Traditional Multi-Page Application (MPA) with React Single-Page Application (SPA)."
          ],
          "liveCode": "// React Router Setup\nimport { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav><Link to=\"/\">Home</Link> | <Link to=\"/quiz\">Quiz</Link></nav>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/student/:id\" element={<StudentDetail />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
          "conceptMcqs": [
            {
              "id": "u4_t5_q1",
              "question": "How does React Router achieve client-side page navigation without triggering full browser reloads?",
              "options": [
                "By reloading the server asynchronously",
                "By utilizing the HTML5 History API (`pushState`) to change the URL while dynamically swapping rendered components",
                "By loading every page in an invisible `<iframe>`",
                "By disabling HTTP networking"
              ],
              "correct": 1,
              "explanation": "React Router leverages the browser's HTML5 History API to update the address bar without triggering a request to the server, conditionally rendering the active route."
            },
            {
              "id": "u4_t5_q2",
              "question": "Which component should be used in React Router to link to different routes without causing page refreshes?",
              "options": [
                "<a href='/dashboard'>",
                "<Link to='/dashboard'>",
                "<Route to='/dashboard'>",
                "<Navigate href='/dashboard'>"
              ],
              "correct": 1,
              "explanation": "The `<Link to='...'>` component intercepts navigation events, updating route state without triggering standard browser page reload cycles."
            }
          ],
          "realWorldExample": "Flipping between tabbed dividers in an office binder. The notebook cover never changes and you never leave your desk (no full page reload); you simply flip tabs to view the Invoice section, Client section, or Settings section instantly.",
          "conceptImage": "images/concepts/u4_t5_react_router_spa.svg",
          "conceptImageCaption": "React Router Single Page Application navigation via HTML5 pushState without reloading."
        },
        {
          "name": "Context API for Global State Management",
          "details": "Solving prop drilling. `createContext()`, `<AuthContext.Provider value={{ user, login }}>`, and `useContext(AuthContext)` hook. Ideal for auth state, theme (dark/light), and user preferences.",
          "teachingPoints": [
            "Explain Prop Drilling: passing props through 5 intermediate components that don't need it.",
            "Show how Context acts as a radio broadcast tower that any component can tune into."
          ],
          "liveCode": "// Context API Pattern\nconst ThemeContext = React.createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('dark');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}",
          "conceptMcqs": [
            {
              "id": "u4_t6_q1",
              "question": "What classic frontend problem does React's Context API solve?",
              "options": [
                "High network latency",
                "Prop Drilling (manually passing props down through multiple layers of components that do not need them)",
                "CSS naming conflicts",
                "Database connection pooling"
              ],
              "correct": 1,
              "explanation": "Context allows state (like current user, theme, or language) to be shared globally with any nested component without passing props through intermediate children."
            },
            {
              "id": "u4_t6_q2",
              "question": "What are the two primary elements involved in providing and consuming Context data in React?",
              "options": [
                "Context.Sender and Context.Receiver",
                "Context.Provider (wraps tree with value) and `useContext(MyContext)` hook (reads value)",
                "Context.Controller and Context.Model",
                "Context.State and Context.Props"
              ],
              "correct": 1,
              "explanation": "The `<MyContext.Provider value={...}>` wraps components to supply data, and nested child components invoke `useContext(MyContext)` to consume it."
            }
          ],
          "realWorldExample": "A hotel's central Wi-Fi network. Instead of the reception desk running physical ethernet cables from Room 101, through Room 102, all the way to Room 305 (Prop Drilling), the central router broadcasts a wireless signal (Provider) that any guest connects to directly (useContext).",
          "conceptImage": "images/concepts/u4_t6_context_api.svg",
          "conceptImageCaption": "Context API: Provider wraps component tree allowing deep children to consume state via useContext()."
        }
      ],
      "codeExample": {
        "title": "React Functional Component with useState, useEffect & Fetch",
        "language": "javascript",
        "code": "// Unit 4 Demo: React Component with Hooks & API Fetch\nimport React, { useState, useEffect } from 'react';\n\nfunction StudentList() {\n  const [students, setStudents] = useState([]);\n  const [loading, setLoading] = useState(true);\n  const [filter, setFilter] = useState('');\n\n  // Fetch API on component mount\n  useEffect(() => {\n    async function loadData() {\n      try {\n        const response = await fetch('/api/course-info');\n        const data = await response.json();\n        setStudents([\n          { id: 1, name: \"Aarav Sharma\", score: 94 },\n          { id: 2, name: \"Ananya Iyer\", score: 88 },\n          { id: 3, name: \"Rohan Verma\", score: 76 }\n        ]);\n      } catch (err) {\n        console.error(\"Error loading data:\", err);\n      } finally {\n        setLoading(false);\n      }\n    }\n    loadData();\n  }, []); // Empty dependency array = runs once on mount\n\n  const filtered = students.filter(s => \n    s.name.toLowerCase().includes(filter.toLowerCase())\n  );\n\n  if (loading) return <div className=\"loader\">Loading student records...</div>;\n\n  return (\n    <div className=\"card\">\n      <h3>MERN Learner Directory (Total: {students.length})</h3>\n      <input \n        type=\"text\" \n        placeholder=\"Filter by name...\" \n        value={filter} \n        onChange={(e) => setFilter(e.target.value)} \n      />\n      <ul>\n        {filtered.map(s => (\n          <li key={s.id}>{s.name} - IA Score: {s.score}/30</li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
      },
      "examQuestions": [
        {
          "type": "2 Marks",
          "q": "What is Virtual DOM in React? How does it improve rendering performance?"
        },
        {
          "type": "2 Marks",
          "q": "Distinguish between Props and State in React."
        },
        {
          "type": "2 Marks",
          "q": "Explain the purpose of the dependency array in useEffect hook."
        },
        {
          "type": "10 Marks",
          "q": "Explain React Hooks in detail. Compare useState, useEffect, and useContext with practical code examples for building a theme toggle component."
        },
        {
          "type": "10 Marks",
          "q": "What is React Router? Explain how single-page routing works with BrowserRouter, Routes, Route, Link, and useParams with a complete example."
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "MERN Integration and Deployment with Express",
      "hours": 9,
      "badgeColor": "#a855f7",
      "diagramImage": "images/unit5_mern_fullstack.jpg",
      "diagramCaption": "High-Resolution Infographic: React Frontend -> Express Routing -> Middleware Pipeline (CORS, BodyParser, JWT Auth) -> Mongoose ORM -> MongoDB Atlas.",
      "interactiveWidgetId": "middlewareWidget",
      "summary": "Build RESTful APIs with Express.js, middleware pipelines, JWT authentication, MongoDB & Mongoose schemas, full-stack React frontend integration, and cloud deployment.",
      "conceptualAnalogies": [
        {
          "concept": "Express Middleware Pipeline",
          "analogy": "Airport Security Checkpoints Analogy",
          "explanation": "Before boarding an airplane (reaching the controller route), you pass through a sequence of gates: Baggage scanner (`express.json()`), Metal detector (`cors()`), Passport control (`authenticateToken` JWT check). Each guard either waves you through to `next()`, or stops you with an error (401 Unauthorized)."
        },
        {
          "concept": "JSON Web Token (JWT)",
          "analogy": "Sealed Passport / Concert Wristband",
          "explanation": "Instead of the server remembering every user in memory (stateful sessions), it gives you a signed tamper-proof wristband (JWT). Whenever you enter a VIP area, guards check the signature with their secret key without needing to call headquarters."
        }
      ],
      "topics": [
        {
          "name": "Express.js Framework, Routing & Request Lifecycle",
          "details": "Minimalist and flexible Node.js web application framework. Routing, request-response abstractions (`req.params`, `req.query`, `req.body`, `res.status().json()`). Separation of concerns into routes, controllers, and models.",
          "teachingPoints": [
            "Demonstrate route parameters: `/api/students/:rollNo` -> `req.params.rollNo`.",
            "Demonstrate query string: `/api/students?department=MERN` -> `req.query.department`.",
            "Demonstrate request body: `req.body` parsed by `express.json()`."
          ],
          "liveCode": "const express = require('express');\nconst app = express();\napp.use(express.json());\n\napp.get('/api/students/:id', (req, res) => {\n  res.json({ id: req.params.id, queryParam: req.query.sort });\n});",
          "conceptMcqs": [
            {
              "id": "u5_t1_q1",
              "question": "What is Express.js in the MERN architecture?",
              "options": [
                "A frontend UI component library",
                "A fast, unopinionated, minimalist backend web framework for Node.js providing routing and middleware pipelines",
                "A NoSQL cloud document database",
                "A JavaScript compiler"
              ],
              "correct": 1,
              "explanation": "Express is the standard Node.js server framework, streamlining HTTP request handling, route matching, and middleware management."
            },
            {
              "id": "u5_t1_q2",
              "question": "In Express route handling, how do you retrieve the dynamic parameter `:id` from `app.get('/api/users/:id', ...)`?",
              "options": [
                "req.query.id",
                "req.params.id",
                "req.body.id",
                "req.headers.id"
              ],
              "correct": 1,
              "explanation": "URL route path parameters declared with a colon (e.g. `:id`) are parsed by Express and made available via the `req.params` object."
            }
          ],
          "realWorldExample": "An airport flight transit terminal. When a passenger arrives with a boarding pass for '/api/users/42' with method GET, Express directs them straight to Gate 42 without confusion or delay.",
          "conceptImage": "images/concepts/u5_t1_express_framework_routing.svg",
          "conceptImageCaption": "Express.js REST routing table mapping HTTP verbs to controller functions."
        },
        {
          "name": "Express Middleware Architecture & next() Function",
          "details": "Middleware functions have access to `req`, `res`, and `next()`. Types of middleware: Application-level (`app.use()`), Router-level (`express.Router()`), Built-in (`express.json()`, `express.static()`), Third-party (`cors`, `morgan`), and Error-handling middleware (`(err, req, res, next) => {}`).",
          "teachingPoints": [
            "Critical: If middleware doesn't call `next()` or send a response, the request hangs forever!",
            "Explain the 4-argument error-handling middleware."
          ],
          "liveCode": "// Custom Logging Middleware\nconst requestLogger = (req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next(); // Pass to next middleware\n};\napp.use(requestLogger);",
          "conceptMcqs": [
            {
              "id": "u5_t2_q1",
              "question": "What happens if an Express middleware function neither returns a response (e.g. `res.send()`) nor calls `next()`?",
              "options": [
                "Express automatically passes execution to the next route handler",
                "The request hangs indefinitely until the client connection times out",
                "The Node.js server crashes immediately",
                "The browser reloads the page"
              ],
              "correct": 1,
              "explanation": "Middleware must explicitly invoke `next()` to hand off control to the next handler, or end the request-response cycle; otherwise the connection hangs."
            },
            {
              "id": "u5_t2_q2",
              "question": "Which built-in Express middleware function is needed to parse incoming requests with JSON payloads into `req.body`?",
              "options": [
                "express.static()",
                "express.json()",
                "express.urlencoded()",
                "express.cookieParser()"
              ],
              "correct": 1,
              "explanation": "`app.use(express.json())` inspects incoming requests with Content-Type application/json and parses the body into `req.body`."
            }
          ],
          "realWorldExample": "An airport baggage security conveyor belt. Bags travel through the metal scanner (Logger) -> customs inspection (Auth Validation) -> baggage carousel (Route Handler). Each station inspects the bag and calls next() to pass it along the belt.",
          "conceptImage": "images/concepts/u5_t2_express_middleware_pipeline.svg",
          "conceptImageCaption": "Middleware pipeline: Request flows through CORS, Logger, Body-Parser, Auth, and Controller."
        },
        {
          "name": "Authentication & Authorization with JWT & bcrypt",
          "details": "JSON Web Token (JWT) architecture: Header (algorithm & token type), Payload (claims: user id, role, expiry), Signature (`HMACSHA256`). Password hashing with `bcryptjs` (salt rounds, `bcrypt.hash`, `bcrypt.compare`). Protected routes using custom auth middleware inspecting `Authorization: Bearer <token>`.",
          "teachingPoints": [
            "Rule: NEVER store passwords as plain text in MongoDB! Always hash with bcrypt.",
            "Walk through Header.Payload.Signature structure using the interactive lab on this page."
          ],
          "liveCode": "const jwt = require('jsonwebtoken');\nconst JWT_SECRET = 'mern-secret-2026';\n\n// 1. Generate Token on Login\nconst token = jwt.sign({ rollNo: 'DEV01', role: 'student' }, JWT_SECRET, { expiresIn: '2h' });\n\n// 2. Auth Middleware\nfunction verifyToken(req, res, next) {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1];\n  if (!token) return res.status(401).json({ message: \"No token\" });\n  jwt.verify(token, JWT_SECRET, (err, user) => {\n    if (err) return res.status(403).json({ message: \"Invalid token\" });\n    req.user = user;\n    next();\n  });\n}",
          "conceptMcqs": [
            {
              "id": "u5_t3_q1",
              "question": "What are the three dot-separated components of a JSON Web Token (JWT)?",
              "options": [
                "User.Role.Permissions",
                "Header (algorithm/type), Payload (claims/data), Signature (cryptographic verification)",
                "Salt.Hash.Password",
                "Client.Server.Database"
              ],
              "correct": 1,
              "explanation": "A JWT consists of `header.payload.signature` encoded in Base64URL, verified using a secret or public/private key."
            },
            {
              "id": "u5_t3_q2",
              "question": "Why should user passwords never be stored in plain text or with simple MD5 hashes in a database?",
              "options": [
                "Plain text takes up too much database disk space",
                "They are vulnerable to rainbow table attacks and data breaches; salted, slow hashing algorithms like `bcrypt` protect passwords against brute force",
                "MongoDB rejects plain text strings in documents",
                "The HTTP specification bans plain text"
              ],
              "correct": 1,
              "explanation": "`bcrypt` incorporates unique cryptographic salts and computational work factors (rounds) to make brute-force and dictionary attacks computationally infeasible."
            }
          ],
          "realWorldExample": "A VIP concert wristband stamped with invisible cryptographic ink. After showing your ID at the main gate once (Login), you receive a tamper-proof wristband (JWT). For the rest of the night, security guards only verify the wristband stamp without asking for your passport again.",
          "conceptImage": "images/concepts/u5_t3_jwt_auth_workflow.svg",
          "conceptImageCaption": "JSON Web Token lifecycle: Login -> Sign HMAC SHA-256 -> Bearer token validation."
        },
        {
          "name": "MongoDB & Mongoose Schemas, Models & CRUD",
          "details": "NoSQL document database storing BSON records. Mongoose Object Data Modeling: Schemas, Data Types, Validations, Models (`mongoose.model('Student', StudentSchema)`), CRUD Operations (`find`, `findById`, `create`, `findByIdAndUpdate`, `deleteOne`).",
          "teachingPoints": [
            "Compare SQL tables/rows vs MongoDB collections/documents.",
            "Explain Mongoose validation (required, min, max, enum)."
          ],
          "liveCode": "const mongoose = require('mongoose');\n\nconst StudentSchema = new mongoose.Schema({\n  rollNo: { type: String, required: true, unique: true },\n  name: { type: String, required: true },\n  iaScore: { type: Number, min: 0, max: 30, default: 0 }\n}, { timestamps: true });\n\nconst Student = mongoose.model('Student', StudentSchema);\n// CRUD:\n// Create: await Student.create({ rollNo: 'MC01', name: 'Aarav' })\n// Read: await Student.find({ iaScore: { $gte: 20 } })",
          "conceptMcqs": [
            {
              "id": "u5_t4_q1",
              "question": "In MongoDB's document-oriented model, what corresponds to a 'Row' and a 'Table' from traditional relational databases?",
              "options": [
                "Field corresponds to Row; Database corresponds to Table",
                "Document corresponds to Row; Collection corresponds to Table",
                "Schema corresponds to Row; Model corresponds to Table",
                "Key corresponds to Row; Index corresponds to Table"
              ],
              "correct": 1,
              "explanation": "MongoDB stores data as BSON Documents grouped into Collections, analogous to Rows grouped into Tables in SQL databases."
            },
            {
              "id": "u5_t4_q2",
              "question": "What is the primary value of using Mongoose as an Object Data Modeling (ODM) library in Node.js?",
              "options": [
                "It converts MongoDB into a relational SQL database",
                "It provides schema validation, type casting, middleware hooks, and an expressive query API on top of MongoDB",
                "It compiles React components for the browser",
                "It replaces Express middleware completely"
              ],
              "correct": 1,
              "explanation": "Mongoose brings structure, validation rules, default values, and lifecycle hooks to MongoDB's naturally schema-less document model."
            }
          ],
          "realWorldExample": "A digital patient hospital chart. Instead of splitting a patient's name, allergies, prescriptions, and lab tests into 8 separate relational tables with foreign key joins, MongoDB stores the patient's entire profile together in one clean, structured BSON document.",
          "conceptImage": "images/concepts/u5_t4_mongodb_mongoose_odm.svg",
          "conceptImageCaption": "Mongoose Schema ODM modeling and MongoDB BSON document persistence."
        },
        {
          "name": "Full Stack Integration: Connecting React with Express & Deployment",
          "details": "Configuring CORS (Cross-Origin Resource Sharing). Axios/fetch calls from React frontend components to Express backend endpoints. Managing global authentication tokens in localStorage or HttpOnly cookies. Deployment to cloud: Vercel, Render, Railway, and MongoDB Atlas.",
          "teachingPoints": [
            "Explain CORS error: Browser prevents `localhost:5173` from accessing `localhost:5000` unless Express adds `cors()` middleware.",
            "Production setup: Serving built React bundle (`dist/` or `build/`) statically from Express."
          ],
          "liveCode": "// React Frontend Integration\nimport axios from 'axios';\n\nasync function fetchStudentGrades() {\n  const token = localStorage.getItem('token');\n  const res = await axios.get('/api/grades', {\n    headers: { Authorization: `Bearer ${token}` }\n  });\n  return res.data;\n}",
          "conceptMcqs": [
            {
              "id": "u5_t5_q1",
              "question": "What browser security mechanism blocks a React frontend (e.g. at localhost:5173) from requesting data from an Express API (at localhost:3000) unless explicitly allowed?",
              "options": [
                "Content Security Policy (CSP)",
                "Same-Origin Policy & Cross-Origin Resource Sharing (CORS)",
                "SSL Certificate Validation",
                "TCP Handshake Enforcement"
              ],
              "correct": 1,
              "explanation": "The browser's Same-Origin Policy blocks cross-origin requests unless the Express API enables CORS headers allowing the client origin."
            },
            {
              "id": "u5_t5_q2",
              "question": "Where should sensitive backend credentials like `JWT_SECRET` and `MONGO_URI` be stored in a production deployment?",
              "options": [
                "Hardcoded inside frontend React components",
                "In server environment variables (`process.env`) loaded via `.env` and kept out of public Git repositories",
                "Inside public GitHub README files",
                "In HTML `<meta>` tags"
              ],
              "correct": 1,
              "explanation": "Secrets must always be stored in server environment variables and added to `.gitignore` so they are never exposed in client bundles or public repositories."
            },
            {
              "id": "u5_t5_q3",
              "question": "Which command creates an optimized, minified production build bundle of a modern React frontend application?",
              "options": [
                "npm start",
                "npm run build",
                "node index.html",
                "npm test"
              ],
              "correct": 1,
              "explanation": "`npm run build` compiles, minifies, and tree-shakes React JSX and CSS into high-performance static files ready for deployment."
            }
          ],
          "realWorldExample": "A modern electric car's cockpit dashboard (React) communicating over high-speed CAN-bus wires (REST APIs) with the central motor and battery controller (Express & MongoDB backend) packaged together under one aerodynamic chassis.",
          "conceptImage": "images/concepts/u5_t5_mern_cloud_deployment.svg",
          "conceptImageCaption": "Production MERN deployment: CDN Edge Frontend -> Containerized Node API -> MongoDB Atlas."
        }
      ],
      "codeExample": {
        "title": "Complete Express REST API with JWT Auth & Protected Route",
        "language": "javascript",
        "code": "// Unit 5 Demo: Express.js REST API with JWT Middleware\nconst express = require('express');\nconst jwt = require('jsonwebtoken');\nconst app = express();\nconst JWT_SECRET = 'mern-mern-secret-2026';\n\napp.use(express.json());\n\n// 1. Auth Middleware\nfunction verifyToken(req, res, next) {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>\n  if (!token) return res.status(401).json({ message: \"No token provided!\" });\n\n  jwt.verify(token, JWT_SECRET, (err, decoded) => {\n    if (err) return res.status(403).json({ message: \"Token invalid or expired!\" });\n    req.user = decoded;\n    next();\n  });\n}\n\n// 2. Login Route (Generates JWT)\napp.post('/api/login', (req, res) => {\n  const { username, password } = req.body;\n  // In real app: verify password using bcrypt.compare()\n  if (username === 'mernstudent' && password === 'mern2026') {\n    const token = jwt.sign({ username, role: 'student' }, JWT_SECRET, { expiresIn: '1h' });\n    return res.json({ success: true, token });\n  }\n  res.status(401).json({ success: false, message: \"Invalid credentials\" });\n});\n\n// 3. Protected Resource Route\napp.get('/api/grades', verifyToken, (req, res) => {\n  res.json({\n    message: `Grades for ${req.user.username}`,\n    course: \"Full Stack MERN\",\n    iaScore: 28,\n    eseStatus: \"Eligible\"\n  });\n});\n\napp.listen(5000, () => console.log('Server running on port 5000'));"
      },
      "examQuestions": [
        {
          "type": "2 Marks",
          "q": "Explain the role of middleware in Express.js. What is the role of next()?"
        },
        {
          "type": "2 Marks",
          "q": "Describe the three components of a JSON Web Token (JWT)."
        },
        {
          "type": "2 Marks",
          "q": "What is CORS? Why is it required when connecting React with Express?"
        },
        {
          "type": "10 Marks",
          "q": "Explain the complete MERN application architecture. How does a request flow from React frontend through Express router and Mongoose to MongoDB Atlas and back?"
        },
        {
          "type": "10 Marks",
          "q": "Design and implement a complete Express REST API for an Learner Registration module with CRUD endpoints, MongoDB Mongoose schema validation, and JWT protected routes."
        }
      ]
    }
  ],
  "iaQuizQuestions": [
    {
      "id": 1,
      "unit": 1,
      "question": "Which HTTP status code signifies that a requested resource was not found on the server?",
      "options": [
        "200 OK",
        "301 Moved Permanently",
        "404 Not Found",
        "500 Internal Server Error"
      ],
      "correct": 2,
      "explanation": "HTTP 404 indicates the client can communicate with the server, but the server could not find what was requested."
    },
    {
      "id": 2,
      "unit": 1,
      "question": "In the CSS Box Model, which property controls the transparent area outside the border?",
      "options": [
        "Padding",
        "Margin",
        "Outline",
        "Content"
      ],
      "correct": 1,
      "explanation": "Margin creates space outside the element's border, whereas padding creates space inside the border around content."
    },
    {
      "id": 3,
      "unit": 1,
      "question": "Which HTML5 semantic element is most appropriate for independent, self-contained syndicatable content?",
      "options": [
        "<section>",
        "<div>",
        "<article>",
        "<aside>"
      ],
      "correct": 2,
      "explanation": "<article> represents an independent piece of content such as a blog post, news story, or forum post."
    },
    {
      "id": 4,
      "unit": 2,
      "question": "What will be the output of `typeof null` in JavaScript?",
      "options": [
        "'null'",
        "'undefined'",
        "'object'",
        "'boolean'"
      ],
      "correct": 2,
      "explanation": "In JavaScript, 'typeof null' returns 'object', which is a historical legacy bug dating back to the language's first release."
    },
    {
      "id": 5,
      "unit": 2,
      "question": "Which array method creates a new array with all elements that pass the test implemented by the provided function?",
      "options": [
        "map()",
        "filter()",
        "reduce()",
        "forEach()"
      ],
      "correct": 1,
      "explanation": "filter() returns a subset of the original array containing only items where the callback returns true."
    },
    {
      "id": 6,
      "unit": 2,
      "question": "What is the result of `JSON.parse('{\"name\":\"MERN\",\"credit\":4}')`?",
      "options": [
        "A JavaScript Object",
        "A JSON string",
        "An Array",
        "SyntaxError"
      ],
      "correct": 0,
      "explanation": "JSON.parse converts a well-formed JSON string into a native JavaScript object."
    },
    {
      "id": 7,
      "unit": 3,
      "question": "Which module in Node.js provides asynchronous file system operations?",
      "options": [
        "path",
        "os",
        "fs",
        "http"
      ],
      "correct": 2,
      "explanation": "The 'fs' (File System) module provides both callback-based and promise-based file operations in Node.js."
    },
    {
      "id": 8,
      "unit": 3,
      "question": "In the Node.js Event Loop, which queue executes callbacks scheduled by `setImmediate()`?",
      "options": [
        "Timers phase",
        "Poll phase",
        "Check phase",
        "Close callbacks phase"
      ],
      "correct": 2,
      "explanation": "setImmediate() callbacks are processed in the 'Check' phase of the libuv event loop."
    },
    {
      "id": 9,
      "unit": 4,
      "question": "Why should React state never be mutated directly (e.g. `state.count = 5`)?",
      "options": [
        "It causes JavaScript syntax errors",
        "React will not trigger a re-render because it relies on shallow reference comparison",
        "It mutates browser memory permanently",
        "Virtual DOM crashes automatically"
      ],
      "correct": 1,
      "explanation": "React relies on immutable state updates to detect state differences and trigger component re-rendering."
    },
    {
      "id": 10,
      "unit": 4,
      "question": "Which hook is used in React to share state globally across deeply nested components without prop drilling?",
      "options": [
        "useReducer",
        "useRef",
        "useContext",
        "useCallback"
      ],
      "correct": 2,
      "explanation": "useContext allows components to subscribe to React context values created via createContext without passing props manually down every level."
    },
    {
      "id": 11,
      "unit": 5,
      "question": "Which Express.js method mounts middleware functions at the specified path?",
      "options": [
        "app.get()",
        "app.use()",
        "app.listen()",
        "app.post()"
      ],
      "correct": 1,
      "explanation": "app.use() is used to register application-level and router-level middleware in Express."
    },
    {
      "id": 12,
      "unit": 5,
      "question": "A JSON Web Token (JWT) consists of three parts separated by dots (.). In order, they are:",
      "options": [
        "Payload.Header.Secret",
        "Header.Payload.Signature",
        "Token.Body.Hash",
        "Algorithm.Data.Key"
      ],
      "correct": 1,
      "explanation": "A JWT is composed of Header (metadata & alg), Payload (claims & data), and Signature (HMAC hash verifying authenticity)."
    }
  ]
};
