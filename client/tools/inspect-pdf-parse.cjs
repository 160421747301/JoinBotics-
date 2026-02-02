async function inspect() {
  try {
    const mod = await import('pdf-parse');
    console.log('pdf-parse module keys:', Object.keys(mod));
    console.log('module.default type:', typeof mod.default);
    if (mod.PDFParse) {
      const PDFParse = mod.PDFParse;
      try {
        const parser = new PDFParse({});
        console.log('PDFParse prototype keys:', Object.getOwnPropertyNames(Object.getPrototypeOf(parser)));
        console.log('parser own keys:', Object.keys(parser));
      } catch (e) {
        console.log('PDFParse construction failed:', e && e.message);
      }
    }
  } catch (e) {
    console.error('Failed to import pdf-parse:', e && e.message);
  }
}
inspect();
