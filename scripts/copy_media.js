const fs = require('fs');
const path = require('path');

const dirs = [
  '/Users/mithileshgoud/.gemini/antigravity/brain/tempmediaStorage',
  '/Users/mithileshgoud/.gemini/antigravity/brain/ab3dcdbb-df32-4404-b5d6-a0ee50d98161/.user_uploaded'
];
const targetDir = path.join(__dirname, '../public/images');

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    console.log(`Files in ${dir}:`, files);
    files.forEach(file => {
      if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
        const src = path.join(dir, file);
        const dest = path.join(targetDir, file);
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to ${dest}`);
      }
    });
  }
});
