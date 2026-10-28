const fs = require('fs');
const content = fs.readFileSync('scratch/generate_concept_diagrams.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('.svg": {')) {
    console.log(`Line ${idx + 1}: ${l.trim()}`);
  }
});
