const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'mern-fullstack-super-secret-key-2026';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data store for notices and student progress
let announcements = [
  {
    id: 1,
    title: "Welcome to Full Stack Development using MERN",
    content: "Curriculum pace is 4 Hours/Week. Practical Assessment (30 Marks) will include hands-on lab challenges, quizzes & full-stack integration projects. Review Unit 1 notes and diagrams to begin.",
    date: "2026-10-25",
    author: "Course Instructor",
    urgent: true
  },
  {
    id: 2,
    title: "Unit 1 & 2 Practice Quiz Live",
    content: "Attempt the interactive prep quizzes for HTML5, CSS and JavaScript DOM in the Assessment tab to evaluate your preparation.",
    date: "2026-10-27",
    author: "Course Instructor",
    urgent: false
  }
];

// Interactive Demo Students for learner directory demonstration
let studentsRoster = [
  { rollNo: "DEV-101", name: "Aarav Sharma", progress: 85, iaScore: 28, status: "Active" },
  { rollNo: "DEV-102", name: "Ananya Iyer", progress: 92, iaScore: 29, status: "Active" },
  { rollNo: "DEV-103", name: "Rohan Verma", progress: 78, iaScore: 25, status: "Active" },
  { rollNo: "DEV-104", name: "Sneha Patel", progress: 95, iaScore: 30, status: "Active" },
  { rollNo: "DEV-105", name: "Vikram Das", progress: 64, iaScore: 22, status: "Needs Practice" }
];

// Middleware: Verify JWT Token (Teaches Unit 3 & 5 Authentication)
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access Denied: No Bearer Token provided in Authorization header."
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Token is invalid, expired, or tampered with."
      });
    }
    req.user = decodedUser;
    next();
  });
};

// --- API ROUTES ---

// 1. Health & Course Metadata
app.get('/api/course-info', (req, res) => {
  res.json({
    courseTitle: "Full Stack Development using MERN",
    program: "Full Stack Web Development Track",
    curriculum: "MERN Stack Specialization",
    totalHours: 45,
    assessment: {
      practicalAssessment: 30,
      finalEvaluation: 70,
      total: 100
    }
  });
});

// 2. Announcements Endpoint
app.get('/api/announcements', (req, res) => {
  res.json({ success: true, data: announcements });
});

// 3. Post Announcement (Instructor Only)
app.post('/api/announcements', (req, res) => {
  const { title, content, author, pin, urgent } = req.body;
  
  // Security passcode check
  if (pin !== 'Wholeworld') {
    return res.status(401).json({ success: false, message: "Invalid Instructor Passcode! Access Denied." });
  }

  if (!title || !content) {
    return res.status(400).json({ success: false, message: "Title and content are required." });
  }

  const newPost = {
    id: Date.now(),
    title,
    content,
    date: new Date().toISOString().split('T')[0],
    author: author || "Instructor",
    urgent: Boolean(urgent)
  };

  announcements.unshift(newPost);
  res.json({ success: true, message: "Announcement published successfully!", data: newPost });
});

// 4. Interactive JWT Authentication Lab Endpoints (Teaching Unit 3 & 5)
// Endpoint to login/generate token
app.post('/api/auth/generate-token', (req, res) => {
  const { rollNo, studentName, role } = req.body;

  if (!rollNo || !studentName) {
    return res.status(400).json({
      success: false,
      message: "Learner ID and Name are required to generate token."
    });
  }

  const payload = {
    rollNo,
    name: studentName,
    role: role || 'student',
    course: "MERN-FullStack",
    issuedAt: new Date().toISOString()
  };

  // Sign token valid for 2 hours
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

  // Decode unverified header & payload to show learners the anatomy of a JWT
  const decodedParts = jwt.decode(token, { complete: true });

  res.json({
    success: true,
    message: "JWT Token generated successfully!",
    token: token,
    anatomy: {
      header: decodedParts.header,
      payload: decodedParts.payload,
      signature: "HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret)"
    }
  });
});

// Protected endpoint demonstrating JWT middleware validation
app.get('/api/auth/protected-profile', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: "Access Granted! Successfully authenticated with valid JWT.",
    studentProfile: req.user,
    serverTimestamp: new Date().toISOString(),
    secretLesson: "This response was guarded by Express middleware `authenticateToken`! The client sent 'Authorization: Bearer <jwt>' which was cryptographically verified."
  });
});

// 5. Interactive REST API Demo Endpoints (Teaching Unit 3 & 5 CRUD with Express)
let sampleProducts = [
  { id: 1, name: "Node.js Complete Guide", category: "Backend", price: 499 },
  { id: 2, name: "React 19 Mastery Handbook", category: "Frontend", price: 599 },
  { id: 3, name: "MongoDB Schema Design", category: "Database", price: 449 }
];

app.get('/api/sample-api/books', (req, res) => {
  res.json({ success: true, count: sampleProducts.length, data: sampleProducts });
});

app.post('/api/sample-api/books', (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ success: false, message: "Book name and price are required!" });
  }
  const newBook = { id: sampleProducts.length + 1, name, category: category || "General", price: Number(price) };
  sampleProducts.push(newBook);
  res.status(201).json({ success: true, message: "Resource created (201 Created)", data: newBook });
});

// 6. Instructor Dashboard Data (Protected by PIN)
app.post('/api/instructor/roster', (req, res) => {
  const { pin } = req.body;
  if (pin !== 'Wholeworld') {
    return res.status(401).json({ success: false, message: "Invalid Instructor Passcode!" });
  }
  res.json({
    success: true,
    roster: studentsRoster,
    stats: {
      totalStudents: studentsRoster.length,
      averageProgress: Math.round(studentsRoster.reduce((acc, s) => acc + s.progress, 0) / studentsRoster.length),
      averageIaScore: (studentsRoster.reduce((acc, s) => acc + s.iaScore, 0) / studentsRoster.length).toFixed(1),
      lectureHoursCovered: 18,
      totalHours: 45
    }
  });
});

// Fallback to index.html for SPA-like navigation (Express 5 compatible)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 MERN Full Stack Development Portal Server is running!`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
  console.log(`🔒 Security: Instructor & Admin Modes Password Protected`);
  console.log(`====================================================`);
});
