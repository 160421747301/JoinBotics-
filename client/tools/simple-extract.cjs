const fs = require('fs');
const path = require('path');

async function extract() {
  try {
    const { PDFParse } = await import('pdf-parse');
    const pdfPath = path.join(__dirname, '..', 'public', 'assets', 'Website Skeleton-merged.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
    
    const parser = new PDFParse({});
    const uint8Array = new Uint8Array(dataBuffer);
    await parser.load({ data: uint8Array });
    const text = await parser.getText();
    
    console.log(text);
    
    // Save to file
    const outPath = path.join(__dirname, '..', 'tmp', 'extracted.txt');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, text);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

extract();
