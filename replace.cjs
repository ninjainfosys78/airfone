const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  content = content.replace(/Besisahar Municipality/g, 'SmartIVRAI');
  content = content.replace(/Besisahar/g, 'SmartIVRAI');
  content = content.replace(/besisahar/g, 'smartivrai');
  content = content.replace(/बेसीशहर नगरपालिका/g, 'स्मार्ट IVR AI');
  content = content.replace(/बेसीशहर/g, 'स्मार्ट IVR AI');
  content = content.replace(/Lamjung District/g, 'Nepal');
  content = content.replace(/Gandaki Province/g, '');
  content = content.replace(/नगरकार्यपालिकाको कार्यालय/g, '');
  content = content.replace(/गण्डकी प्रदेश/g, '');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
