const fs = require('fs');

const topicImageMapping = {
  // Unit 1
  0: [
    { image: "images/concepts/u1_t1_internet_workings.svg", caption: "Packet Switching across dynamic routers via IP addressing." },
    { image: "images/concepts/u1_t2_dns_ip_resolution.svg", caption: "Recursive DNS resolution: Root (.) -> TLD (.com) -> Authoritative Nameserver." },
    { image: "images/concepts/u1_t3_http_https_handshake.svg", caption: "TLS 1.3 cryptographic handshake securing HTTP traffic via symmetric AES keys." },
    { image: "images/concepts/u1_t4_3tier_architecture.svg", caption: "Presentation Tier (Browser/SPA) -> Logic Tier (Express API) -> Data Tier (MongoDB)." },
    { image: "images/concepts/u1_t5_html5_semantics.svg", caption: "Semantic layout tags (<header>, <nav>, <main>, <article>, <aside>, <footer>)." },
    { image: "images/concepts/u1_t6_html_forms_validation.svg", caption: "Browser Constraint Validation API checking input patterns before HTTP submission." },
    { image: "images/concepts/u1_t7_css_box_model.svg", caption: "Concentric layout box model: Margin -> Border -> Padding -> Content." }
  ],
  // Unit 2
  1: [
    { image: "images/concepts/u2_t1_js_scoping_hoisting.svg", caption: "var function scope vs let & const block scoping with Temporal Dead Zone." },
    { image: "images/concepts/u2_t2_array_methods_pipeline.svg", caption: "Functional immutable collection pipeline: .filter() -> .map() -> .reduce()." },
    { image: "images/concepts/u2_t3_prototype_closures.svg", caption: "Prototype delegation chain and lexical closure state encapsulation." },
    { image: "images/concepts/u2_t4_dom_tree_hierarchy.svg", caption: "Document Object Model node hierarchy parsed from HTML markup." },
    { image: "images/concepts/u2_t5_event_bubbling_capturing.svg", caption: "Event propagation cycle: Capturing Phase -> Target -> Bubbling Phase." },
    { image: "images/concepts/u2_t6_json_serialization.svg", caption: "JSON.stringify() serialization to UTF-8 wire format and JSON.parse() deserialization." }
  ],
  // Unit 3 (FOCUS)
  2: [
    { image: "images/concepts/u3_t1_mern_mvc_component.svg", caption: "MERN full stack JavaScript architecture: React -> Express -> Node -> MongoDB." },
    { image: "images/concepts/u3_t2_browser_vs_node.svg", caption: "Google V8 engine host differences: Browser Web APIs vs Node.js Libuv & OS access." },
    { image: "images/concepts/u3_t3_node_core_modules.svg", caption: "Node.js core modules compiled directly into binary: fs, http, path, events, os, crypto." },
    { image: "images/concepts/u3_t4_async_callbacks_promises.svg", caption: "Evolution of asynchronous JavaScript: Callbacks -> Promises -> async/await." },
    { image: "images/concepts/u3_t5_event_loop_phases.svg", caption: "Libuv Event Loop phases: Timers -> Pending -> Poll -> Check -> Microtasks." },
    { image: "images/concepts/u3_t6_npm_package_ecosystem.svg", caption: "Raw HTTP server creation and npm package management ecosystem." }
  ],
  // Unit 4 (FOCUS)
  3: [
    { image: "images/concepts/u4_t1_vdom_diffing_reconciliation.svg", caption: "Virtual DOM tree diffing and selective browser DOM patching." },
    { image: "images/concepts/u4_t2_jsx_components_props.svg", caption: "Babel transpiling JSX to React.createElement() and unidirectional props flow." },
    { image: "images/concepts/u4_t3_usestate_render_cycle.svg", caption: "useState hook render cycle: state update triggers scheduled component re-execution." },
    { image: "images/concepts/u4_t4_useeffect_lifecycle.svg", caption: "useEffect side effects handling, dependency arrays, and cleanup functions." },
    { image: "images/concepts/u4_t5_react_router_spa.svg", caption: "React Router Single Page Application navigation via HTML5 pushState without reloading." },
    { image: "images/concepts/u4_t6_context_api.svg", caption: "Context API: Provider wraps component tree allowing deep children to consume state via useContext()." }
  ],
  // Unit 5 (FOCUS)
  4: [
    { image: "images/concepts/u5_t1_express_framework_routing.svg", caption: "Express.js REST routing table mapping HTTP verbs to controller functions." },
    { image: "images/concepts/u5_t2_express_middleware_pipeline.svg", caption: "Middleware pipeline: Request flows through CORS, Logger, Body-Parser, Auth, and Controller." },
    { image: "images/concepts/u5_t3_jwt_auth_workflow.svg", caption: "JSON Web Token lifecycle: Login -> Sign HMAC SHA-256 -> Bearer token validation." },
    { image: "images/concepts/u5_t4_mongodb_mongoose_odm.svg", caption: "Mongoose Schema ODM modeling and MongoDB BSON document persistence." },
    { image: "images/concepts/u5_t5_mern_cloud_deployment.svg", caption: "Production MERN deployment: CDN Edge Frontend -> Containerized Node API -> MongoDB Atlas." }
  ]
};

let dataCode = fs.readFileSync('public/js/data.js', 'utf8');
eval(dataCode.replace('const COURSE_DATA', 'global.COURSE_DATA'));

let totalAdded = 0;
global.COURSE_DATA.units.forEach((unit, uIdx) => {
  const mappings = topicImageMapping[uIdx];
  if (mappings) {
    unit.topics.forEach((topic, tIdx) => {
      const mapItem = mappings[tIdx];
      if (mapItem) {
        topic.conceptImage = mapItem.image;
        topic.conceptImageCaption = mapItem.caption;
        totalAdded++;
      }
    });
  }
});

const newContent = '// MERN-STACK: Full Stack Development using MERN - Comprehensive Course Data & Live Studio Teaching Engine\nconst COURSE_DATA = ' + JSON.stringify(global.COURSE_DATA, null, 2) + ';\n';
fs.writeFileSync('public/js/data.js', newContent, 'utf8');

console.log(`Successfully updated public/js/data.js with ${totalAdded} concept images and captions!`);
