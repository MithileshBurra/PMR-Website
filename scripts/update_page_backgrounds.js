const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const appDir = path.join(__dirname, '../app');
const pages = walk(appDir);

let count = 0;
pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace bg-surface-light on outer wrappers with bg-transparent
  content = content.replace(/className="([^"]*)\bbg-surface-light\b([^"]*)"/g, (match, p1, p2) => {
    return `className="${p1}bg-transparent${p2}"`;
  });

  // Replace outer div bg-slate-50 or bg-gray-50 if present
  content = content.replace(/className="([^"]*)\bbg-slate-50\b([^"]*)"/g, (match, p1, p2) => {
    return `className="${p1}bg-transparent${p2}"`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
    count++;
  }
});

console.log(`Successfully updated ${count} pages.`);
