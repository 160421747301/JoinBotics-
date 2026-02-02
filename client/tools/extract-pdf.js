const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

async function run() {
  const argvPath = process.argv[2];
  if (!argvPath) {
    console.error('Usage: node extract-pdf.js <pdf-path>');
    process.exit(2);
  }

  const pdfPath = path.resolve(process.cwd(), argvPath);
  if (!fs.existsSync(pdfPath)) {
    console.error('PDF not found:', pdfPath);
    process.exit(3);
  }

  const dataBuffer = fs.readFileSync(pdfPath);
  try {
    const data = await pdf(dataBuffer);
    const text = data.text || '';

    const outDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outFile = path.join(outDir, 'extracted.txt');
    fs.writeFileSync(outFile, text, 'utf8');
    console.log('Extraction complete. Saved to', outFile);
    console.log('--- BEGIN PREVIEW ---');
    console.log(text.slice(0, 4000));
    console.log('--- END PREVIEW ---');
  } catch (err) {
    console.error('Failed to parse PDF:', err);
    process.exit(1);
  }
}

run();
