const fs = require('fs');
const path = require('path');

async function extract() {
  try {
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const pdfPath = path.join(__dirname, '..', 'public', 'assets', 'Website Skeleton-merged.pdf');
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    
    const loadingTask = pdfjsLib.getDocument({data});
    const pdf = await loadingTask.promise;
    
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += pageText + '\n\n';
    }
    
    console.log(fullText);
    
    // Save to file
    const outPath = path.join(__dirname, '..', 'tmp', 'extracted.txt');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, fullText);
    
    console.log('\n\n=== SAVED TO:', outPath, '===');
  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
  }
}

extract();
