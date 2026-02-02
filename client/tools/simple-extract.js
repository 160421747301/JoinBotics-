import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfParse from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extract() {
  try {
    const pdfPath = path.join(__dirname, '..', 'public', 'assets', 'Website Skeleton-merged.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    
    console.log(data.text);
    
    // Save to file
    const outPath = path.join(__dirname, '..', 'tmp', 'extracted.txt');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, data.text);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

extract();
