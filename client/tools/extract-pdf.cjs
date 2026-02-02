const fs = require('fs');
const path = require('path');
// dynamic import inside run() to support ESM-only pdf-parse packages

async function run() {
  const argvPath = process.argv[2];
  if (!argvPath) {
    console.error('Usage: node extract-pdf.cjs <pdf-path>');
    process.exit(2);
  }

  const pdfPath = path.resolve(process.cwd(), argvPath);
  if (!fs.existsSync(pdfPath)) {
    console.error('PDF not found:', pdfPath);
    process.exit(3);
  }

  const dataBuffer = fs.readFileSync(pdfPath);
  try {
    const pdfModule = await import('pdf-parse');
    const pdfParseFunc = pdfModule.default || pdfModule;
    let data;
    if (typeof pdfParseFunc === 'function') {
      data = await pdfParseFunc(dataBuffer);
    } else if (pdfModule.PDFParse) {
      const PDFParse = pdfModule.PDFParse;
      const parser = new PDFParse({});
      if (typeof parser.load === 'function') {
        const uint8 = new Uint8Array(dataBuffer);
        await parser.load({ data: uint8 });
        if (typeof parser.getText === 'function') {
          const text = await parser.getText();
          data = { text };
        } else if (typeof parser.getPageText === 'function') {
          // fallback: concatenate pages
          const pageCount = parser.doc ? parser.doc.numPages || 0 : 0;
          let full = '';
          for (let i = 0; i < pageCount; i++) {
            const ptext = await parser.getPageText(i + 1);
            full += ptext + '\n\n';
          }
          data = { text: full };
        } else {
          throw new Error('PDFParse has no getText or getPageText');
        }
      } else {
        throw new Error('PDFParse implementation missing load');
      }
    } else {
      throw new Error('Unknown pdf-parse API shape');
    }
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
