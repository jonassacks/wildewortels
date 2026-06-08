const fs   = require('fs');
const path = require('path');

const clipsDir = path.join(__dirname, 'clips');
const output   = path.join(__dirname, 'clips.json');
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.m4v', '.ogv']);

if (!fs.existsSync(clipsDir)) {
  fs.mkdirSync(clipsDir);
  console.log('Created clips/ folder.');
}

const clips = fs.readdirSync(clipsDir)
  .filter(f => VIDEO_EXT.has(path.extname(f).toLowerCase()))
  .sort();

fs.writeFileSync(output, JSON.stringify(clips, null, 2) + '\n');

console.log(`clips.json updated — ${clips.length} clip(s):`);
clips.forEach(c => console.log('  ' + c));
if (clips.length === 0) console.log('  (none yet — add .mp4 files to clips/ and run this again)');
