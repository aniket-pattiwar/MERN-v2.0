const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'concepts');
const files = fs.readdirSync(dir);

function checkWellFormedXml(xmlStr, filename) {
  // Check for bare &
  const bareAmps = [];
  const regexAmp = /&(?!(amp|lt|gt|quot|apos);)/g;
  let match;
  while ((match = regexAmp.exec(xmlStr)) !== null) {
    bareAmps.push({ index: match.index, context: xmlStr.slice(Math.max(0, match.index - 15), match.index + 20) });
  }

  // Check tags inside <text> elements
  const badTags = [];
  const textTagRegex = /<text[^>]*>([\s\S]*?)<\/text>/gi;
  while ((match = textTagRegex.exec(xmlStr)) !== null) {
    const textInner = match[1];
    // Check if inner text has tags other than <tspan> or </tspan>
    const innerTags = textInner.match(/<[^>]+>/g) || [];
    for (const tag of innerTags) {
      if (!tag.startsWith('<tspan') && tag !== '</tspan>') {
        badTags.push({ tag, context: textInner });
      }
    }
  }

  return { bareAmps, badTags };
}

let totalErrors = 0;
files.forEach(f => {
  if (!f.endsWith('.svg')) return;
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const res = checkWellFormedXml(content, f);
  if (res.bareAmps.length > 0 || res.badTags.length > 0) {
    totalErrors++;
    console.log(`\n❌ Error in ${f}:`);
    if (res.bareAmps.length) {
      console.log(`  Bare & count: ${res.bareAmps.length}`);
      res.bareAmps.forEach(a => console.log(`    Context: "${a.context}"`));
    }
    if (res.badTags.length) {
      console.log(`  Unescaped tags inside <text>:`, res.badTags);
    }
  }
});

console.log(`\n========================================`);
console.log(`Total invalid SVG files: ${totalErrors} out of ${files.length}`);
