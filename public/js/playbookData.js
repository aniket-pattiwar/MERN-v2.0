// Master Instructor Lecture Playbook & Code Stitching Roadmap
// Provides step-by-step classroom scripts, live coding recipes, expected outputs,
// and end-to-end MERN project integration architecture.

const TEACHING_PLAYBOOK = {
  // =========================================================================
  // 1. END-TO-END MERN PROJECT STITCHING BLUEPRINT (HOW TO CONNECT ALL CODES)
  // =========================================================================
  projectBlueprint: {
    title: "End-to-End MERN Project Stitching Architecture (Capstone Roadmap)",
    subtitle: "How to connect isolated classroom code snippets into one cohesive production e-commerce / learning platform across the 45-hour semester",
    rationale: "Students often get confused when HTML, JS, Node, Express, and React are taught in silos. This roadmap demonstrates that every single unit builds one layer of a unified full-stack application (DevAcademy Hub).",
    phases: [
      {
        phaseNumber: 1,
        name: "Phase 1: Backend Foundation & RESTful API Engine",
        curriculumUnits: "Units 1, 3 & 5 (Weeks 1 - 6)",
        focus: "Server Architecture, Database Models, REST Routing & Cryptographic Security",
        howToExplain: "Start by explaining to students: 'Before we touch UI buttons, we need a reliable central kitchen (server) and a secure store room (database) that can accept orders and serve data.'",
        stepByStepGuide: [
          {
            step: "Step 1.1: Node.js & Project Initialization",
            action: "Run `npm init -y` and install dependencies: `npm i express mongoose cors dotenv jsonwebtoken bcryptjs`.",
            whatToSay: "'Class, we first create `package.json`. Notice how Node.js allows us to write backend JavaScript using the same V8 engine we use in the browser.'",
            codeSnippet: "mkdir mern-capstone && cd mern-capstone\nnpm init -y\nnpm i express mongoose cors dotenv jsonwebtoken bcryptjs",
            expectedOutput: "package.json created with scripts and node_modules directory initialized."
          },
          {
            step: "Step 1.2: Database Modeling with Mongoose (models/Course.js)",
            action: "Define schema with strict validation rules (title, instructor, price, enrolledStudents).",
            whatToSay: "'We use MongoDB BSON documents because they look like natural JSON objects. Mongoose gives us schema safety so invalid data can never enter the database.'",
            codeSnippet: "const mongoose = require('mongoose');\nconst courseSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  price: { type: Number, required: true },\n  category: { type: String, default: 'MERN' }\n}, { timestamps: true });\nmodule.exports = mongoose.model('Course', courseSchema);",
            expectedOutput: "Compiles without error; creates 'courses' collection inside MongoDB."
          },
          {
            step: "Step 1.3: Express REST API Endpoints (routes/courseRoutes.js)",
            action: "Implement CRUD handlers: GET (read all), POST (create new), PUT (update), DELETE (remove).",
            whatToSay: "'Every button clicked by a user will trigger an HTTP verb. GET requests fetch list, POST requests insert new records.'",
            codeSnippet: "const express = require('express');\nconst router = express.Router();\nconst Course = require('../models/Course');\n\nrouter.get('/', async (req, res) => {\n  const courses = await Course.find();\n  res.json({ success: true, count: courses.length, data: courses });\n});\n\nrouter.post('/', async (req, res) => {\n  const newCourse = await Course.create(req.body);\n  res.status(201).json({ success: true, data: newCourse });\n});\nmodule.exports = router;",
            expectedOutput: "Terminal: Server running on port 5000. Postman GET returns status 200 with JSON payload."
          },
          {
            step: "Step 1.4: Middleware & JWT Protection",
            action: "Add `cors()`, `express.json()`, and authentication guard verifying Bearer JWT tokens.",
            whatToSay: "'JWT is stateless. Once the user logs in, we give them a signed cryptographic badge. The server checks this signature without querying the DB every second.'",
            codeSnippet: "app.use(cors());\napp.use(express.json());\napp.use('/api/courses', courseRouter);",
            expectedOutput: "Protected routes return 401 Unauthorized if no bearer token is attached."
          }
        ]
      },
      {
        phaseNumber: 2,
        name: "Phase 2: Client Frontend & State Management",
        curriculumUnits: "Units 1, 2 & 4 (Weeks 7 - 12)",
        focus: "Component Hierarchy, Virtual DOM, useState, useEffect & Client Routing",
        howToExplain: "Tell students: 'Now that our backend serves data, we build the interactive cockpit (React SPA). Instead of reloading whole pages, React dynamically updates only the cards that change.'",
        stepByStepGuide: [
          {
            step: "Step 2.1: Frontend Setup & Component Tree",
            action: "Create React app (`npx create-react-app client` or Vite). Structure folders: `components/`, `pages/`, `services/`.",
            whatToSay: "'Think of React like Lego blocks. We build `Navbar`, `CourseGrid`, and `CourseCard` as independent components that receive data via props.'",
            codeSnippet: "function CourseCard({ course, onEnroll }) {\n  return (\n    <div className=\"card\">\n      <h3>{course.title}</h3>\n      <p>₹{course.price}</p>\n      <button onClick={() => onEnroll(course._id)}>Enroll Now</button>\n    </div>\n  );\n}",
            expectedOutput: "Isolated reusable component rendering UI based on props."
          },
          {
            step: "Step 2.2: State & API Consumption with useEffect",
            action: "Use `useState` for courses list & loading spinners; `useEffect` to trigger Axios GET request on mount.",
            whatToSay: "'Observe: `useEffect` runs once when the component mounts on screen. It calls our Express API, fetches data, and calls `setCourses(data)` which automatically re-renders the UI!'",
            codeSnippet: "const [courses, setCourses] = useState([]);\nconst [loading, setLoading] = useState(true);\n\nuseEffect(() => {\n  fetch('http://localhost:5000/api/courses')\n    .then(res => res.json())\n    .then(data => { setCourses(data.data); setLoading(false); });\n}, []);",
            expectedOutput: "Real course items from MongoDB display instantly on screen."
          },
          {
            step: "Step 2.3: Single Page Routing (React Router)",
            action: "Configure `<BrowserRouter>`, `<Routes>`, `<Route path=\"/\" element={<Home />} />`.",
            whatToSay: "'Look at the browser URL bar. Notice the page never reloads! React Router catches the URL change and swaps components in memory.'",
            codeSnippet: "<Routes>\n  <Route path=\"/\" element={<CourseList />} />\n  <Route path=\"/course/:id\" element={<CourseDetails />} />\n  <Route path=\"/admin\" element={<AdminPanel />} />\n</Routes>",
            expectedOutput: "Instant client-side transitions without full browser refresh."
          }
        ]
      },
      {
        phaseNumber: 3,
        name: "Phase 3: Full Stack Merger & Cloud Deployment",
        curriculumUnits: "Unit 5 (Weeks 13 - 15)",
        focus: "CORS Alignment, Production Bundling, Environment Variables & Cloud Launch",
        howToExplain: "Conclude to students: 'Today, we unite the Frontend and Backend into one live Internet application! We bundle the React app and let Express serve both the API and the static UI bundle.'",
        stepByStepGuide: [
          {
            step: "Step 3.1: Unifying Dev Servers with Concurrently",
            action: "Add root `package.json` script running both backend (port 5000) and frontend (port 3000) simultaneously.",
            whatToSay: "'During development, frontend and backend run on two ports. We use `concurrently` so a single command `npm run dev` boots the entire stack.'",
            codeSnippet: "\"scripts\": {\n  \"server\": \"nodemon server.js\",\n  \"client\": \"npm start --prefix client\",\n  \"dev\": \"concurrently \\\"npm run server\\\" \\\"npm run client\\\"\"\n}",
            expectedOutput: "Both servers start in parallel in a single terminal window."
          },
          {
            step: "Step 3.2: Production Build & Static Serving",
            action: "Run `npm run build` inside React client. Configure Express to serve `client/build` folder.",
            whatToSay: "'In production, we don't run two servers. We compile React into static HTML/CSS/JS and tell Express: `app.use(express.static('client/build'))`.'",
            codeSnippet: "if (process.env.NODE_ENV === 'production') {\n  app.use(express.static('client/build'));\n  app.get('*', (req, res) => {\n    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));\n  });\n}",
            expectedOutput: "A single unified Express server running both frontend & backend on port 5000."
          },
          {
            step: "Step 3.3: Cloud Launch (Atlas + Render/Vercel)",
            action: "Push code to GitHub. Connect MongoDB Atlas URI. Deploy backend on Render and frontend on Vercel.",
            whatToSay: "'Congratulations! Your students now have a full-fledged live MERN web application deployed to the global Internet with a custom URL.'",
            codeSnippet: "# .env production configuration\nPORT=5000\nMONGO_URI=mongodb+srv://admin:pass@cluster.mongodb.net/mern\nJWT_SECRET=supersecretproductionkey",
            expectedOutput: "Live public HTTPS website accessible worldwide on mobile and desktop."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. DETAILED LECTURE DELIVERY SCRIPTS FOR ALL 30 TOPICS (UNITS 1 - 5)
  // =========================================================================
  units: [
    {
      unitNumber: 1,
      title: "Unit 1: Introduction to Web Programming, HTML5 & CSS",
      topics: [
        {
          topicIdx: 1,
          name: "1.1 Brief History of Internet & Packet Switching",
          hook: "Ask the class: 'Jab aap WhatsApp pe photo bhejte ho, kya vo ek single continuous wire ke through jati hai, ya chhote-chhote tukdon me toot kar alag-alag rasto se jati hai?'",
          whatToExplainFirst: "Explain Circuit Switching (old landline phones where whole wire was blocked) vs Packet Switching (Internet, where data splits into packets with destination IP headers). Mention ARPANET (1969) and Tim Berners-Lee creating WWW in 1989.",
          spokenScript: "'Class, dhyan se samjho: Internet koi ek computer nahi hai, ye hazaron routers ka mesh hai. Agar ek route fail ho jaye, packets doosre route se travel kar lete hain. Isiliye Internet kabhi band nahi hota.'",
          liveCodeSteps: [
            "Step 1: Open browser DevTools Network Tab.",
            "Step 2: Inspect a web request and show IP address (e.g. 93.184.216.34).",
            "Step 3: Point out TCP handshake and packet reassembly."
          ],
          codeToDemonstrate: "<!-- Basic HTML5 Document Skeleton -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>How the Web Works</title>\n</head>\n<body>\n  <h1>Welcome Learners!</h1>\n  <p>Parsed and rendered by browser engine via HTTP GET.</p>\n</body>\n</html>",
          expectedOutput: "Browser parses the HTML structure and paints DOM nodes onto screen.",
          commonStudentMistake: "Students confuse 'Internet' (the physical network infrastructure) with 'Web' (the HTTP/HTML service running on top of the Internet). Clarify the difference immediately."
        },
        {
          topicIdx: 2,
          name: "1.2 IP Addressing & DNS Resolution",
          hook: "'Agar aapko apne friend ko call karna ho, toh kya aap uska 10-digit number yaad rakhte ho ya contact name search karte ho?'",
          whatToExplainFirst: "DNS is the Internet's Global Phonebook. Computers communicate via numerical IP addresses (IPv4: 192.168.1.1 or IPv6), but humans remember names like 'google.com'. DNS converts domain names to IPs in 4 recursive hops: Root Server -> TLD Server -> Authoritative Nameserver.",
          spokenScript: "'Jab bhi aap browser me domain name enter karte ho, browser sabse pehle local cache check karta hai. Agar wahan nahi milta, toh ISP ke recursive resolver ko bhejta hai jo 93.184.216.34 jaise IP address dhund kar lata hai.'",
          liveCodeSteps: [
            "Step 1: Open terminal / command prompt in front of class.",
            "Step 2: Type `nslookup google.com` or `ping example.com`.",
            "Step 3: Show students the returned IP address."
          ],
          codeToDemonstrate: "# Run in terminal:\nnslookup example.com\n\n# Expected result:\n# Server:  dns.google\n# Address: 8.8.8.8\n# Non-authoritative answer:\n# Name:    example.com\n# Address: 93.184.216.34",
          expectedOutput: "Terminal displays the resolved IPv4/IPv6 IP address mapped to the domain name.",
          commonStudentMistake: "Thinking DNS stores web pages. Emphasize: DNS only maps names to numbers; it stores zero HTML or CSS."
        },
        {
          topicIdx: 3,
          name: "1.3 HTTP / HTTPS Protocol & 3-Way Handshake",
          hook: "'Kisine public WiFi pe cafe me login kiya hai? Kya koi beech me aapka password dekh sakta hai agar site HTTP pe ho?'",
          whatToExplainFirst: "HTTP transmits plain ASCII text over Port 80 (anyone sniffing packets can read passwords). HTTPS wraps HTTP in TLS 1.3 encryption over Port 443. Explain TCP 3-Way Handshake (SYN -> SYN-ACK -> ACK) and TLS asymmetric key exchange.",
          spokenScript: "'Dosto, HTTP ek unencrypted conversation hai jahan koi bhi sniffer packet inspect kar sakta hai. HTTPS me pehle asymmetric public-private key se symmetric session key banti hai, fir pura data AES-256 se encrypt hota hai.'",
          liveCodeSteps: [
            "Step 1: Show DevTools Network headers: Request URL, Method (GET), Status Code (200 OK).",
            "Step 2: Show the padlock icon in address bar and inspect TLS certificate."
          ],
          codeToDemonstrate: "// Raw HTTP Request Format:\n// GET /index.html HTTP/1.1\n// Host: example.com\n// User-Agent: Mozilla/5.0\n// Accept: text/html\n\n// HTTP Response Format:\n// HTTP/1.1 200 OK\n// Content-Type: text/html; charset=UTF-8\n// Content-Length: 1256\n// <html>...</html>",
          expectedOutput: "Status 200 OK with secure padlock icon and verified X.509 certificate.",
          commonStudentMistake: "Students forget that HTTP is completely stateless. Point out why cookies and JWTs were invented to track user identity."
        },
        {
          topicIdx: 4,
          name: "1.4 Web Server vs Application Server & 3-Tier Architecture",
          hook: "'Restaurant me waiter aur chef ka role kya alag hota hai?'",
          whatToExplainFirst: "The Waiter = Web Server (Nginx/Apache), delivering static menus & glasses (HTML, CSS, images). The Master Chef = Application Server (Node/Express), cooking custom recipes, processing business logic, and querying the pantry = Database (MongoDB). Explain 3-Tier Architecture: Presentation Tier -> Logic Tier -> Data Tier.",
          spokenScript: "'Presentation tier client ke machine me chalti hai. Logic tier server pe chalti hai jahan hum business rules aur security checks lagate hain. Data tier me MongoDB BSON store karta hai.'",
          liveCodeSteps: [
            "Step 1: Point to architecture schematic diagram on screen.",
            "Step 2: Trace a click event from browser button to Node route to MongoDB collection and back."
          ],
          codeToDemonstrate: "// Express Application Server routing business logic\nconst express = require('express');\nconst app = express();\n\n// Logic Layer: Validates user before querying Database Tier\napp.get('/api/profile', (req, res) => {\n  res.json({ user: \"Student\", role: \"Developer\", access: true });\n});",
          expectedOutput: "Clean JSON payload returned across tiers without exposing database internals.",
          commonStudentMistake: "Putting database queries directly into client-side JavaScript. Emphasize why direct browser-to-database connections violate enterprise security."
        },
        {
          topicIdx: 5,
          name: "1.5 Semantic HTML5 & Structure",
          hook: "'Agar sab kuch <div> me daal de toh kya problem hogi? Screen readers aur Google Search engine ko kaise pata chalega konsa part main article hai?'",
          whatToExplainFirst: "Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) describe meaning to both developers and search engines/screen readers. Prevents 'div soup'.",
          spokenScript: "'Jab Google ka crawler aapki site ko index karta hai, agar sab kuch <div> hoga toh use main content ka pata nahi chalega. Semantic tags SEO aur Accessibility dono ke liye must hain.'",
          liveCodeSteps: [
            "Step 1: Write page skeleton with semantic tags.",
            "Step 2: Show HTML outline and accessibility tree in Chrome DevTools."
          ],
          codeToDemonstrate: "<header>\n  <nav>\n    <a href=\"#home\">Home</a>\n    <a href=\"#modules\">Modules</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Modern Web Architecture</h2>\n    <p>Semantic tags improve accessibility and SEO rankings.</p>\n  </article>\n  <aside>\n    <h3>Quick Reference</h3>\n  </aside>\n</main>\n<footer>&copy; 2026 Developer Academy</footer>",
          expectedOutput: "A structured, accessible web layout with a clean document outline.",
          commonStudentMistake: "Using `<section>` without a heading tag (`<h2>`-`<h6>`), or nesting multiple `<main>` tags in one document."
        },
        {
          topicIdx: 6,
          name: "1.6 HTML Forms & Client-Side Validation",
          hook: "'Jab aap form me galat email daalte ho aur submit dabate ho, bina page reload huye red warning kaise aati hai?'",
          whatToExplainFirst: "The HTML5 Constraint Validation API. Attributes like `required`, `type='email'`, `pattern`, `minlength` validate input inside browser engine before network request is sent.",
          spokenScript: "'Dosto, form submission me do cheezein hoti hain: Client-side validation for instant UX feedback, aur Server-side validation for airtight security. Dono zaroori hain.'",
          liveCodeSteps: [
            "Step 1: Write a `<form>` with `action='/api/register'` and `method='POST'`.",
            "Step 2: Add `required` and `pattern` regex.",
            "Step 3: Try submitting an empty form to show native browser tooltip."
          ],
          codeToDemonstrate: "<form onsubmit=\"event.preventDefault(); alert('Valid Form Data Submitted!');\">\n  <label for=\"uname\">Username (Min 4 chars):</label>\n  <input type=\"text\" id=\"uname\" name=\"uname\" minlength=\"4\" required>\n\n  <label for=\"uemail\">Email:</label>\n  <input type=\"email\" id=\"uemail\" name=\"uemail\" required>\n\n  <button type=\"submit\">Register</button>\n</form>",
          expectedOutput: "Browser enforces valid inputs natively; prevents submission when invalid.",
          commonStudentMistake: "Relying ONLY on client-side HTML form validation. Explain how attackers can bypass browser validation using Postman or curl, making server-side validation mandatory."
        },
        {
          topicIdx: 7,
          name: "1.7 CSS Box Model, Flexbox & Grid",
          hook: "'Framed photo dekhi hai wall par? Content, padding, border aur margin me kya farak hai?'",
          whatToExplainFirst: "Concentric rectangles: Content (photo) -> Padding (white border inside frame) -> Border (physical wooden frame) -> Margin (empty wall space keeping other photos away). Introduce `box-sizing: border-box`.",
          spokenScript: "'Hamesha yaad rakhein: By default CSS me width sirf content ki hoti hai, padding aur border add karne se element bada ho jata hai! Isiliye hum `box-sizing: border-box` lagate hain.'",
          liveCodeSteps: [
            "Step 1: Open the Interactive Box Model Playground in Unit 1 of this portal.",
            "Step 2: Drag sliders for Margin, Border, and Padding to visually show the calculation."
          ],
          codeToDemonstrate: "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 4px solid #6366f1;\n  margin: 24px;\n  /* Total width remains exactly 300px with border-box! */\n}",
          expectedOutput: "Predictable layout calculation without horizontal scrollbar overflow.",
          commonStudentMistake: "Forgetting `box-sizing: border-box` and wondering why two 50% width elements drop to a new line."
        }
      ]
    },
    {
      unitNumber: 2,
      title: "Unit 2: JavaScript Language, DOM & JSON",
      topics: [
        {
          topicIdx: 1,
          name: "2.1 Variables, Scope & Hoisting (var vs let/const)",
          hook: "'JavaScript me agar hum variable define karne se pehle use print karein, toh error aana chahiye ya undefined? Aur let aur var me kya antar hai?'",
          whatToExplainFirst: "Execution Context creation phase: memory allocation. `var` is hoisted and initialized with `undefined` in function scope. `let` and `const` are hoisted in Temporal Dead Zone (TDZ) in block scope.",
          spokenScript: "'Legacy JavaScript me `var` block scope respect nahi karta tha, isiliye loop me bugs aate the. ES6 me `let` aur `const` aaye jo curly braces `{}` ke andar strict block scope banate hain.'",
          liveCodeSteps: [
            "Step 1: Open browser console or Live Sandbox.",
            "Step 2: Log `var a` before declaration -> shows `undefined`.",
            "Step 3: Log `let b` before declaration -> throws `ReferenceError: Cannot access 'b' before initialization`."
          ],
          codeToDemonstrate: "// var vs let in block scope\nif (true) {\n  var scoreVar = 100;\n  let scoreLet = 200;\n}\nconsole.log(scoreVar); // 100 (leaks out!)\n// console.log(scoreLet); // ReferenceError: scoreLet is not defined (secure!)",
          expectedOutput: "Clear demonstration of block encapsulation with let.",
          commonStudentMistake: "Thinking `const` makes objects immutable. Explain that `const` prevents re-assigning the reference variable, but object properties can still be modified (`user.name = 'New'`)."
        },
        {
          topicIdx: 2,
          name: "2.2 Modern Functional Array Methods (map, filter, reduce)",
          hook: "'Agar aapke paas 1000 products ki list ho, toh loop chala kar naya array banana achha hai ya functional pipeline use karna?'",
          whatToExplainFirst: "Immutability. `map` transforms each item, `filter` extracts items matching a predicate condition, `reduce` aggregates the collection into a single accumulator value.",
          spokenScript: "'React me hum kabhi original state array ko mutate nahi karte. `map` aur `filter` hamesha naya array return karte hain, jo React ke Virtual DOM reconciliation ke liye perfect hai.'",
          liveCodeSteps: [
            "Step 1: Create an array of product objects with prices.",
            "Step 2: Chain `.filter()` for price > 500.",
            "Step 3: Chain `.map()` to add 18% tax.",
            "Step 4: Chain `.reduce()` to get the cart total sum."
          ],
          codeToDemonstrate: "const cart = [\n  { name: 'Node Guide', price: 400 },\n  { name: 'React Pro', price: 800 },\n  { name: 'HTML Basics', price: 200 }\n];\n\nconst premiumTotal = cart\n  .filter(item => item.price >= 400)\n  .map(item => item.price * 1.18) // add tax\n  .reduce((sum, current) => sum + current, 0);\n\nconsole.log('Cart Total:', premiumTotal.toFixed(2));",
          expectedOutput: "Cart Total: 1416.00",
          commonStudentMistake: "Forgetting to return a value inside the `map()` callback function, resulting in an array of `[undefined, undefined]`."
        },
        {
          topicIdx: 3,
          name: "2.3 Prototypes & Closures",
          hook: "'Closure ko 'backpack' samajh sakte ho: jab function apne parent function se bahar nikalta hai, toh wo apne sath parent variables ka backpack leke chalta hai!'",
          whatToExplainFirst: "Lexical Scope and Garbage Collection. Usually local variables die when function returns. A closure is formed when an inner function retains reference to parent variables.",
          spokenScript: "'Prototype memory efficiency deta hai taaki 10,000 objects me method duplicate na ho. Aur closure data privacy deta hai jisse hum private state bana sakte hain bina class ke.'",
          liveCodeSteps: [
            "Step 1: Write `createBankAccount(initialBalance)` returning `deposit` and `getBalance` functions.",
            "Step 2: Show that `balance` cannot be accessed from outside directly."
          ],
          codeToDemonstrate: "function createWallet(initialAmount) {\n  let balance = initialAmount; // Private enclosed state\n  return {\n    addMoney: (amt) => { balance += amt; return balance; },\n    getBalance: () => `Wallet: ₹${balance}`\n  };\n}\n\nconst myWallet = createWallet(500);\nmyWallet.addMoney(250);\nconsole.log(myWallet.getBalance()); // Wallet: ₹750\n// console.log(myWallet.balance); // undefined! Encapsulated!",
          expectedOutput: "Private state preserved and accessible only through returned closure methods.",
          commonStudentMistake: "Accidental memory leaks by creating closures holding large objects that cannot be garbage collected."
        },
        {
          topicIdx: 4,
          name: "2.4 DOM Tree Hierarchy & Selection",
          hook: "'Browser HTML code ko parse karke screen par kaise dikhata hai? Document Object Model (DOM) ek inverted tree hai.'",
          whatToExplainFirst: "DOM tree structure: `window` -> `document` -> `<html>` -> `<head>` and `<body>` -> Elements -> Text nodes. Selection methods: `getElementById`, `querySelector`, `querySelectorAll`.",
          spokenScript: "'Jab bhi browser me koi HTML file load hoti hai, browser ek in-memory tree banata hai jise hum JavaScript ke through live manipulate kar sakte hain.'",
          liveCodeSteps: [
            "Step 1: Use `document.querySelector('#myElement')`.",
            "Step 2: Inspect the live DOM node properties in console."
          ],
          codeToDemonstrate: "// Selecting elements and updating content\nconst heading = document.querySelector('#courseTitle');\nif (heading) {\n  heading.textContent = 'Full Stack MERN Mastery';\n  heading.style.color = '#38bdf8';\n}",
          expectedOutput: "Targeted DOM node content and styles updated dynamically without reload.",
          commonStudentMistake: "Calling `document.querySelector` before the DOM is loaded, returning `null`. Explain `DOMContentLoaded` event."
        },
        {
          topicIdx: 5,
          name: "2.5 Event Bubbling vs Capturing",
          hook: "'Agar aap ek nested button click karte ho jo div ke andar hai, toh pehle button ka click chalega ya div ka?'",
          whatToExplainFirst: "Event Propagation phases: 1. Capturing Phase (trickles down from Window to Target), 2. Target Phase, 3. Bubbling Phase (bubbles up from Target to Window). `e.stopPropagation()`.",
          spokenScript: "'By default, web browsers me events bubble karte hain (andar se bahar ki taraf). Iska sabse bada faayda hota hai Event Delegation: hum 100 buttons par listener lagane ke bajay parent container par 1 listener lagate hain!'",
          liveCodeSteps: [
            "Step 1: Open the DOM Event Bubbling Simulator in Unit 2 of this portal.",
            "Step 2: Trigger click on the button and show the event bubbling step-by-step to body and document."
          ],
          codeToDemonstrate: "document.querySelector('#parentContainer').addEventListener('click', (e) => {\n  if (e.target && e.target.matches('button.delete-btn')) {\n    console.log('Deleted item with ID:', e.target.dataset.id);\n  }\n});",
          expectedOutput: "Event Delegation cleanly captures dynamically created buttons.",
          commonStudentMistake: "Attaching individual event listeners to 500 table rows inside a loop, slowing down mobile browsers."
        },
        {
          topicIdx: 6,
          name: "2.6 JSON Syntax, Parsing & Serialization",
          hook: "'Frontend JavaScript me likha hai, Backend Python ya Java me ho sakta hai. Dono aapas me data kis language me baat karte hain?'",
          whatToExplainFirst: "JSON (JavaScript Object Notation) is a universal plain-text data interchange format. `JSON.stringify()` serializes objects into text; `JSON.parse()` deserializes text into live in-memory objects.",
          spokenScript: "'Network wire par kabhi live JavaScript object travel nahi kar sakta. Wire par sirf bytes ya plain text jata hai. Isiliye hum `JSON.stringify` karke bhejte hain aur receive karne par `JSON.parse` karte hain.'",
          liveCodeSteps: [
            "Step 1: Create an object with functions and dates.",
            "Step 2: Run `JSON.stringify()` -> notice functions are stripped.",
            "Step 3: Run `JSON.parse()` to restore object."
          ],
          codeToDemonstrate: "const student = { id: 101, name: 'Aarav', skills: ['MERN', 'JWT'] };\n\n// 1. Serialize for wire transport\nconst jsonString = JSON.stringify(student);\nconsole.log('Wire payload:', jsonString);\n\n// 2. Deserialize on receiver\nconst parsedObj = JSON.parse(jsonString);\nconsole.log('Restored Object:', parsedObj.name);",
          expectedOutput: "Wire payload: {\"id\":101,\"name\":\"Aarav\",\"skills\":[\"MERN\",\"JWT\"]}",
          commonStudentMistake: "Forgetting quotes around keys in manual JSON strings: `{ name: 'John' }` is invalid JSON; it must be `{\"name\": \"John\"}`."
        }
      ]
    },
    {
      unitNumber: 3,
      title: "Unit 3: Node.js and Backend Foundations (FOCUS)",
      topics: [
        {
          topicIdx: 1,
          name: "3.1 MERN Architecture & Component vs MVC Paradigm",
          hook: "'Traditional PHP/Java MVC me view server pe render hota tha. MERN me React frontend alag aur Node backend alag kyu hai?'",
          whatToExplainFirst: "MERN = MongoDB (NoSQL DB), Express.js (REST framework), React.js (Component UI), Node.js (V8 Runtime). Contrast server-rendered MVC with decoupled Client SPA + REST API architecture.",
          spokenScript: "'MERN ka sabse bada power hai: Pura stack sirf ek language—JavaScript me chalta hai! React JSON mangta hai, Express JSON process karta hai, aur MongoDB JSON (BSON) store karta hai. Zero data transformation friction!'",
          liveCodeSteps: [
            "Step 1: Open the MERN Component schematic diagram in Unit 3.",
            "Step 2: Trace Axios HTTP GET -> Express app.get() -> Mongoose find() -> BSON document."
          ],
          codeToDemonstrate: "// MERN Flow Snapshot:\n// 1. React Frontend:  fetch('/api/products')\n// 2. Express Backend: app.get('/api/products', (req, res) => ...)\n// 3. Node Runtime:   Executes Libuv non-blocking I/O query\n// 4. MongoDB:        Returns BSON documents serialized as JSON",
          expectedOutput: "Full stack decoupled client-server architecture.",
          commonStudentMistake: "Students think Node.js is a programming language or framework. Clarify that Node is a C++ runtime environment for JavaScript."
        },
        {
          topicIdx: 2,
          name: "3.2 Browser JS vs Node.js Server Runtime",
          hook: "'Kya hum Node.js me `window.alert()` ya `document.getElementById()` likh sakte hain? Kyu nahi?'",
          whatToExplainFirst: "Both use Google V8. Browser provides DOM, Window, LocalStorage, Fetch. Node provides Libuv, `process`, `global`, Buffer, and OS filesystem access (`fs`, `net`, `http`).",
          spokenScript: "'Browser ek sandbox me chalta hai taaki koi website aapki hard disk format na kar sake. Node.js server pe chalta hai, iske paas full OS permissions hoti hain file read/write karne aur database se connect karne ki.'",
          liveCodeSteps: [
            "Step 1: Open terminal and type `node` to launch Node REPL.",
            "Step 2: Log `global` vs `process.version` and `process.platform`.",
            "Step 3: Try accessing `window` in Node to demonstrate `ReferenceError: window is not defined`."
          ],
          codeToDemonstrate: "// In Node.js Server Environment:\nconsole.log('Node Version:', process.version);\nconsole.log('Operating System:', process.platform);\nconsole.log('Memory Usage (MB):', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2));\n// Notice: window and document do NOT exist here!",
          expectedOutput: "Prints system diagnostics directly from OS.",
          commonStudentMistake: "Trying to use browser APIs like `localStorage` in Node.js server code."
        },
        {
          topicIdx: 3,
          name: "3.3 Node.js Built-in Core Modules",
          hook: "'Bina koi npm install kiye, Node.js hume files read karne aur server banane ke kya tools deta hai?'",
          whatToExplainFirst: "Core modules compiled directly into Node binary: `fs` (file system), `path` (cross-platform path separators), `http` (HTTP protocol), `os` (CPU/RAM metrics), `events` (EventEmitter).",
          spokenScript: "'Windows me path separator backslash `\\` hota hai aur Linux/Mac me forward slash `/`. Agar aap hardcoded string likhoge toh server crash ho jayega. Hamesha `path.join(__dirname, 'data')` use karein.'",
          liveCodeSteps: [
            "Step 1: Import `fs/promises` and `path`.",
            "Step 2: Read a file asynchronously using `await fs.readFile()`.",
            "Step 3: Log output to terminal."
          ],
          codeToDemonstrate: "const fs = require('fs').promises;\nconst path = require('path');\n\nasync function readServerConfig() {\n  const filePath = path.join(__dirname, 'server.js');\n  const content = await fs.readFile(filePath, 'utf8');\n  console.log(`Read ${content.length} characters successfully!`);\n}\nreadServerConfig();",
          expectedOutput: "Terminal outputs character count asynchronously without blocking other code.",
          commonStudentMistake: "Using synchronous methods like `fs.readFileSync` inside production web requests, which freezes the single thread for all users!"
        },
        {
          topicIdx: 4,
          name: "3.4 Asynchronous Programming: Callbacks to async/await",
          hook: "'Agar database query 3 second le rahi hai, kya pura server 3 second ke liye freeze ho jana chahiye? Baaki 100 users ka kya hoga?'",
          whatToExplainFirst: "Non-blocking I/O. Contrast Callback Hell (Pyramid of Doom with error-first callbacks) -> Promise `.then().catch()` chains -> Modern `async/await` with linear `try/catch` syntax.",
          spokenScript: "'JavaScript single-threaded hai. Agar aap blocking code likhoge toh poora server ruk jayega. Async/await hume synchronous jaisa clean code likhne deta hai bina thread ko block kiye.'",
          liveCodeSteps: [
            "Step 1: Write a simulated database query using `setTimeout` wrapped in a Promise.",
            "Step 2: Consume it with `await` inside an `async` function.",
            "Step 3: Wrap in `try/catch` block for robust error handling."
          ],
          codeToDemonstrate: "function fetchUserFromDB(userId) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ id: userId, name: 'Learner' }), 500);\n  });\n}\n\nasync function handleProfileRequest() {\n  try {\n    console.log('1. Querying DB...');\n    const user = await fetchUserFromDB(101);\n    console.log('2. User Received:', user.name);\n  } catch (err) {\n    console.error('Error fetching user:', err);\n  }\n}\nhandleProfileRequest();",
          expectedOutput: "1. Querying DB...\n2. User Received: Learner",
          commonStudentMistake: "Using `await` outside of an `async` function (in older CommonJS files), or forgetting to handle Promise rejection with `catch`."
        },
        {
          topicIdx: 5,
          name: "3.5 Node.js Event Loop Architecture & Phases",
          hook: "'Ek hi thread me Node.js hazaron simultaneous network connections kaise handle kar leta hai?'",
          whatToExplainFirst: "Libuv Event Loop. 4 Primary Macrotask Phases: 1. Timers (`setTimeout`), 2. Pending I/O, 3. Poll (retrieves new I/O events), 4. Check (`setImmediate`). Microtasks (`process.nextTick`, `Promise.then`) run between phases with highest priority.",
          spokenScript: "'Libuv C++ thread pool me background I/O bhej deta hai aur main V8 thread turant agla request accept karne free ho jata hai. Jab I/O complete hota hai, callback queue me aakar execute hota hai.'",
          liveCodeSteps: [
            "Step 1: Open the Event Loop Simulator in Unit 3 of this portal.",
            "Step 2: Enqueue a Sync log, a `process.nextTick`, a Promise, and a `setTimeout`.",
            "Step 3: Predict the execution order with the students."
          ],
          codeToDemonstrate: "console.log('1. Synchronous');\nsetTimeout(() => console.log('4. Timer Macrotask'), 0);\nPromise.resolve().then(() => console.log('3. Promise Microtask'));\nprocess.nextTick(() => console.log('2. nextTick Highest Priority'));",
          expectedOutput: "1. Synchronous\n2. nextTick Highest Priority\n3. Promise Microtask\n4. Timer Macrotask",
          commonStudentMistake: "Thinking `setTimeout(fn, 0)` executes immediately. Explain that it must wait for the current call stack and microtask queue to completely clear first."
        },
        {
          topicIdx: 6,
          name: "3.6 Raw HTTP Server Creation & npm Ecosystem",
          hook: "'Express ke bina hum basic Node.js se server kaise bana sakte hain? Aur npm me ^ aur ~ version me kya farak hota hai?'",
          whatToExplainFirst: "The built-in `http.createServer((req, res) => ...)`. `package.json` manifest, `package-lock.json` dependency tree lock, and semantic versioning (MAJOR.MINOR.PATCH).",
          spokenScript: "'Class, dhyan dijiye: Express internally isi `http.createServer` ka wrapper hai! Aaj hum pehle raw server banayenge taaki Express ki importance samajh aaye.'",
          liveCodeSteps: [
            "Step 1: Require `http`.",
            "Step 2: Create server responding with status 200 and JSON headers.",
            "Step 3: Listen on PORT 3000.",
            "Step 4: Open browser at `http://localhost:3000` to verify."
          ],
          codeToDemonstrate: "const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ status: 'Online', engine: 'Node.js Core' }));\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on http://localhost:3000');\n});",
          expectedOutput: "Browser receives JSON: {\"status\":\"Online\",\"engine\":\"Node.js Core\"}",
          commonStudentMistake: "Forgetting `res.end()`, causing the client browser to hang indefinitely waiting for the response stream to close."
        }
      ]
    },
    {
      unitNumber: 4,
      title: "Unit 4: React.js – Frontend Development (FOCUS)",
      topics: [
        {
          topicIdx: 1,
          name: "4.1 React Philosophy & Virtual DOM Reconciliation",
          hook: "'Traditional JS me agar 100 items ki list me 1 item badle, pura table re-render karna slow kyu hota hai?'",
          whatToExplainFirst: "Real DOM updates trigger expensive browser layout recalculation and repaint. React maintains a lightweight Virtual DOM tree in memory. On state change, it produces a new VDOM, runs Fiber diffing algorithm in O(n) time, and patches ONLY the changed node.",
          spokenScript: "'React ka core principle hai: UI = f(state). Aapko DOM ko haath lagane ki zaroorat nahi hai. Aap sirf state badlo, React khud sabse efficient DOM patch dhoond kar apply kar dega.'",
          liveCodeSteps: [
            "Step 1: Open Virtual DOM Diffing diagram in Unit 4.",
            "Step 2: Show how React isolates the modified card node without touching parent `<nav>` or sibling cards."
          ],
          codeToDemonstrate: "// In React, we declare WHAT we want, not HOW to manipulate DOM\nfunction Counter() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n    </div>\n  );\n}",
          expectedOutput: "Only the `<h2>` text node updates in the real DOM inspector; the button is untouched.",
          commonStudentMistake: "Using direct `document.getElementById` or jQuery inside React components, which breaks React's VDOM tracking."
        },
        {
          topicIdx: 2,
          name: "4.2 JSX Compilation & Unidirectional Props",
          hook: "'React code me hum HTML aur JS ek sath kyu likhte hain? Kya browser direct JSX samajh sakta hai?'",
          whatToExplainFirst: "JSX is syntactic sugar for `React.createElement()`. Babel JIT compiles JSX into JavaScript function calls. Props (properties) flow strictly top-to-bottom (parent to child); props are read-only.",
          spokenScript: "'JSX HTML nahi hai! Ye JavaScript ka extension hai. Isiliye hum `class` ke bajay `className` aur `onclick` ke bajay camelCase `onClick` likhte hain.'",
          liveCodeSteps: [
            "Step 1: Write a `<ProductCard title='Book' price={499} />` component.",
            "Step 2: Show Babel transpiled output: `React.createElement(ProductCard, { title: 'Book', price: 499 })`."
          ],
          codeToDemonstrate: "function ProductCard({ title, price, isFeatured }) {\n  return (\n    <div className={`card ${isFeatured ? 'featured' : ''}`}>\n      <h3>{title}</h3>\n      <p>Price: ₹{price}</p>\n    </div>\n  );\n}",
          expectedOutput: "Component receives props and renders dynamic HTML.",
          commonStudentMistake: "Attempting to reassign a prop inside the child component (`props.title = 'New'`). Emphasize that props are immutable!"
        },
        {
          topicIdx: 3,
          name: "4.3 State Management with useState Hook",
          hook: "'Ek normal variable `let count = 0` aur `useState(0)` me kya farak hai?'",
          whatToExplainFirst: "Normal variables do NOT trigger component re-render when modified. The `useState` hook preserves state across renders and informs React to schedule a re-render cycle.",
          spokenScript: "'Class, dhyan se suniye: State ko kabhi directly mutate mat karna jaise `count = count + 1`. Hamesha setter function use karein `setCount(prev => prev + 1)` taaki React ko re-render schedule karne ka signal mile.'",
          liveCodeSteps: [
            "Step 1: Create state with `useState(0)`.",
            "Step 2: Create a button invoking `setCount(prev => prev + 1)`.",
            "Step 3: Show console log during render to observe component re-execution."
          ],
          codeToDemonstrate: "import { useState } from 'react';\n\nfunction CartCounter() {\n  const [quantity, setQuantity] = useState(1);\n\n  return (\n    <div className=\"counter-box\">\n      <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>\n      <span>Items: {quantity}</span>\n      <button onClick={() => setQuantity(q => q + 1)}>+</button>\n    </div>\n  );\n}",
          expectedOutput: "Live reactive counter incrementing and decrementing cleanly.",
          commonStudentMistake: "Assuming state updates synchronously. Explain that `setCount` is queued/batched, so logging `count` immediately after `setCount` prints the old value."
        },
        {
          topicIdx: 4,
          name: "4.4 Side Effects with useEffect Hook",
          hook: "'Jab component screen par pehli baar render hota hai, tab hum API call kahan karein? Infinite loop se kaise bachein?'",
          whatToExplainFirst: "Pure rendering vs Side Effects (data fetching, timers, DOM event listeners). Dependency Array rules: 1. No array (runs after every render - DANGEROUS for fetch!), 2. Empty array `[]` (runs once on mount), 3. `[id]` (runs when `id` changes). Cleanup function.",
          spokenScript: "'Agar aap bina dependency array ke `useEffect` me `fetch` karoge aur response me `setState` karoge, toh wo infinite loop ban jayega! Hamesha initial data fetch ke liye empty dependency array `[]` lagayein.'",
          liveCodeSteps: [
            "Step 1: Write `useEffect` with empty array `[]` fetching data from backend.",
            "Step 2: Set loading state `setLoading(false)` on response.",
            "Step 3: Show cleanup function aborting pending fetch if unmounted."
          ],
          codeToDemonstrate: "import { useState, useEffect } from 'react';\n\nfunction StudentList() {\n  const [students, setStudents] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch('/api/students')\n      .then(res => res.json())\n      .then(data => {\n        setStudents(data.roster);\n        setLoading(false);\n      });\n  }, []); // Empty array = Runs ONCE on mount!\n\n  if (loading) return <p>Loading roster...</p>;\n  return <ul>{students.map(s => <li key={s.rollNo}>{s.name}</li>)}</ul>;\n}",
          expectedOutput: "Loads remote data seamlessly without freezing UI or causing infinite re-renders.",
          commonStudentMistake: "Forgetting the unique `key` prop when rendering lists with `.map()`, which harms React's diffing performance."
        },
        {
          topicIdx: 5,
          name: "4.5 Single Page Application Routing with React Router",
          hook: "'Traditional website me link click karne par pura page blank hoke reload hota tha. React Router me instant switch kaise hota hai?'",
          whatToExplainFirst: "HTML5 History API (`pushState`, `popstate`). `<BrowserRouter>` intercepts link clicks, updates browser address bar, and renders matching component without network reload.",
          spokenScript: "'React Router me hum `<a>` tag use nahi karte, hum `<Link to='/about'>` use karte hain. `<Link>` browser ke default page refresh ko prevent karta hai aur instant client-side transition deta hai.'",
          liveCodeSteps: [
            "Step 1: Wrap App with `<BrowserRouter>`.",
            "Step 2: Define `<Routes>` with path='/' and path='/dashboard'.",
            "Step 3: Add `<Link to='/dashboard'>` in Navbar and observe zero reload in browser."
          ],
          codeToDemonstrate: "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Home</Link> | <Link to=\"/courses\">Courses</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/courses\" element={<CourseListPage />} />\n        <Route path=\"*\" element={<NotFoundPage />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
          expectedOutput: "Smooth, instant SPA navigation between route components.",
          commonStudentMistake: "Using normal `<a href='/about'>` tags inside React, causing full browser reloads and losing all in-memory state."
        },
        {
          topicIdx: 6,
          name: "4.6 Context API & Global State Management",
          hook: "'Agar root component ke paas user login data hai aur 5th nested child ko chahiye, toh kya beech ke 4 components ko bekaar me props pass karni padegi? (Prop Drilling)'",
          whatToExplainFirst: "The Prop Drilling problem. React Context API creates a global broadcast channel (`createContext()`). `<Provider value={data}>` wraps the tree; any child uses `useContext()` directly.",
          spokenScript: "'Theme, Authenticated User aur Shopping Cart jaise global data ke liye hum Context API use karte hain. Isse hum bina prop drilling ke direct kisi bhi nested child me data consume kar sakte hain.'",
          liveCodeSteps: [
            "Step 1: Create `AuthContext = createContext()`.",
            "Step 2: Wrap App in `<AuthContext.Provider value={{ user, token }}>`.",
            "Step 3: Consume in child component via `const { user } = useContext(AuthContext)`."
          ],
          codeToDemonstrate: "import { createContext, useContext, useState } from 'react';\n\nconst AuthContext = createContext();\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState({ name: 'Aarav', role: 'Student' });\n  return (\n    <AuthContext.Provider value={{ user, setUser }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\n// Deep Child Component\nexport function UserProfileBadge() {\n  const { user } = useContext(AuthContext);\n  return <span>Logged in as: {user.name}</span>;\n}",
          expectedOutput: "Direct state access across deep hierarchy without passing props down intermediary layers.",
          commonStudentMistake: "Overusing Context for every local input field, which can trigger unnecessary re-renders across the component tree."
        }
      ]
    },
    {
      unitNumber: 5,
      title: "Unit 5: MERN Integration & Deployment with Express (FOCUS)",
      topics: [
        {
          topicIdx: 1,
          name: "5.1 Express.js Framework & RESTful Routing Lifecycle",
          hook: "'Jab browser se `GET /api/courses` request aati hai, Express use step-by-step kaise handle karta hai?'",
          whatToExplainFirst: "Express is a minimalist Node.js routing and middleware framework. HTTP request lifecycle: Request enters -> matches route -> executes controller handler -> sends response (200, 201, 404, 500).",
          spokenScript: "'Express me har route ek URL pattern aur HTTP method (GET, POST, PUT, DELETE) se match hota hai. Standard status codes jaise 200 OK, 201 Created aur 404 Not Found follow karna enterprise best practice hai.'",
          liveCodeSteps: [
            "Step 1: `const app = express()`.",
            "Step 2: Mount routes with `app.get()`, `app.post()`, `app.delete()`.",
            "Step 3: Return `res.status(200).json()`."
          ],
          codeToDemonstrate: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet books = [{ id: 1, title: 'MERN Stack' }];\n\n// GET all\napp.get('/api/books', (req, res) => res.json(books));\n\n// POST new\napp.post('/api/books', (req, res) => {\n  const newBook = { id: books.length + 1, ...req.body };\n  books.push(newBook);\n  res.status(201).json(newBook);\n});",
          expectedOutput: "Clean RESTful JSON responses with matching HTTP status codes.",
          commonStudentMistake: "Forgetting `app.use(express.json())`, which causes `req.body` to be `undefined` in POST/PUT routes!"
        },
        {
          topicIdx: 2,
          name: "5.2 Express Middleware Architecture & next() Function",
          hook: "'Kisine airport security check dekha hai? Ek line me step-by-step checking hoti hai: Passport -> Luggage -> Boarding Pass. Express middleware bilkul waisa hi hai.'",
          whatToExplainFirst: "Middleware functions have access to `req`, `res`, and `next`. Types: Application-level, Router-level, Built-in, Third-party (`cors`, `morgan`), and Error-handling middleware.",
          spokenScript: "'Har middleware request ko inspect kar sakta hai, modify kar sakta hai, ya beech me reject kar sakta hai. Agar sab theek hai toh wo `next()` call karta hai taaki request agle step par jaye.'",
          liveCodeSteps: [
            "Step 1: Write a custom request logger middleware printing timestamp and method.",
            "Step 2: Show that omitting `next()` hangs the request forever.",
            "Step 3: Add `next()` to resume flow."
          ],
          codeToDemonstrate: "// Custom Logger & Auth Middleware\nfunction requestLogger(req, res, next) {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next(); // CRITICAL: Hands over execution to the next handler!\n}\n\napp.use(requestLogger);",
          expectedOutput: "Terminal logs every incoming request before controller execution.",
          commonStudentMistake: "Forgetting to call `next()`, causing the client to wait indefinitely until request times out."
        },
        {
          topicIdx: 3,
          name: "5.3 Authentication & Authorization with JWT & bcrypt",
          hook: "'Database me password plaintext me store karna crime kyu hai? Aur bcrypt hashing aur plain encryption me kya antar hai?'",
          whatToExplainFirst: "One-way cryptographic hashing with salt (bcrypt) vs reversible encryption. Stateless JWT tokens: Header (algorithm), Payload (claims), Signature (HMAC SHA-256).",
          spokenScript: "'Dosto, database me kabhi bhi plaintext password nahi hona chahiye. Hum `bcrypt.hash(password, 10)` karte hain. Aur login ke baad hum signed JWT dete hain jise client `Authorization: Bearer <token>` me bhejta hai.'",
          liveCodeSteps: [
            "Step 1: Open the JWT Lab in this portal.",
            "Step 2: Generate a token and explain color-coded parts.",
            "Step 3: Show how tampering with a single payload character invalidates the cryptographic signature."
          ],
          codeToDemonstrate: "const bcrypt = require('bcryptjs');\nconst jwt = require('jsonwebtoken');\n\n// 1. Hash Password\nconst hashedPassword = await bcrypt.hash('mypassword123', 10);\n\n// 2. Sign JWT on successful login\nconst token = jwt.sign(\n  { userId: user._id, role: user.role },\n  process.env.JWT_SECRET,\n  { expiresIn: '2h' }\n);",
          expectedOutput: "Cryptographically tamper-proof Bearer token string.",
          commonStudentMistake: "Storing sensitive data like passwords or credit cards inside the JWT payload. Remind students that JWT payload is merely Base64-encoded, not encrypted!"
        },
        {
          topicIdx: 4,
          name: "5.4 MongoDB & Mongoose Schemas, Models & CRUD",
          hook: "'Relational SQL tables me strict columns aur joins hote hain. MongoDB me flexible BSON documents hone ka kya faayda hota hai?'",
          whatToExplainFirst: "Document-oriented NoSQL database. Documents are stored in collections as BSON (Binary JSON). Mongoose acts as the Object Data Modeling (ODM) layer providing schema validation, type safety, and lifecycle hooks.",
          spokenScript: "'MongoDB me hum nested data ko direct document ke andar store kar sakte hain bina complex SQL joins ke. Mongoose hume business level validation deta hai jaise `required: true` aur `min: 0`.'",
          liveCodeSteps: [
            "Step 1: Connect to MongoDB via `mongoose.connect()`.",
            "Step 2: Create a Schema and Model.",
            "Step 3: Execute CRUD queries: `create()`, `find()`, `findByIdAndUpdate()`, `findByIdAndDelete()`."
          ],
          codeToDemonstrate: "const mongoose = require('mongoose');\n\nconst studentSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true },\n  iaScore: { type: Number, min: 0, max: 30 }\n}, { timestamps: true });\n\nconst Student = mongoose.model('Student', studentSchema);\n\n// Create document\nconst newStudent = await Student.create({\n  name: 'Aarav Sharma',\n  email: 'aarav@dev.in',\n  iaScore: 28\n});",
          expectedOutput: "New document inserted into MongoDB with auto-generated `_id: ObjectId('...')`.",
          commonStudentMistake: "Forgetting to wrap Mongoose asynchronous calls in `try/catch`, causing uncaught promise rejection server crashes on duplicate email insertion."
        },
        {
          topicIdx: 5,
          name: "5.5 Full Stack MERN Integration & Cloud Deployment",
          hook: "'Humne sab bana liya: React frontend, Express API, MongoDB database. Ab is poore project ko ek sath link karke internet par live kaise karein?'",
          whatToExplainFirst: "Connecting frontend and backend: 1. Configure CORS, 2. Environment variables (`dotenv`), 3. Proxy or Axios baseURL, 4. Production build (`npm run build`), 5. Cloud deployment (MongoDB Atlas + Render/Vercel).",
          spokenScript: "'Final integration me sabse pehle hum CORS allow karte hain taaki browser security cross-origin requests ko block na kare. Phir hum production bundle banate hain aur environment variables se cloud database connect karte hain.'",
          liveCodeSteps: [
            "Step 1: Point to the End-to-End MERN Project Stitching Architecture Blueprint at the top of Admin Mode.",
            "Step 2: Review the unified directory structure.",
            "Step 3: Show the production build workflow."
          ],
          codeToDemonstrate: "// Full Stack Express Integration:\nconst path = require('path');\nconst express = require('express');\nconst app = express();\n\n// 1. API Routes\napp.use('/api/courses', courseRoutes);\n\n// 2. Production Static Frontend\nif (process.env.NODE_ENV === 'production') {\n  app.use(express.static(path.join(__dirname, 'client/build')));\n  app.get('*', (req, res) => {\n    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));\n  });\n}",
          expectedOutput: "A single production server running on the global Internet serving both API and UI seamlessly.",
          commonStudentMistake: "Hardcoding `http://localhost:5000` inside React frontend components instead of using environment variables (`process.env.REACT_APP_API_URL`), breaking in production."
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TEACHING_PLAYBOOK;
}
