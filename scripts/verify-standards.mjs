import fs from 'fs';
import path from 'path';

console.log('=================================================================');
console.log('MAKEOVER BY RASHMI MISHRA — EDITORIAL LUXURY ARCHITECTURAL AUDIT');
console.log('Charlotte Tilbury & The Row Aesthetic • 100% Daylight Luxury');
console.log('=================================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passed++;
  } else {
    console.error(`[FAIL] ${message}`);
    failed++;
  }
}

// 1. Verify Specification Files
const specFiles = ['.cursorrules', 'PRD.md', 'design.md', 'architecture.md', 'phases.md'];
for (const file of specFiles) {
  assert(fs.existsSync(file), `Spec file "${file}" exists in root directory`);
}

// 2. Scan all src files for anti-vibecoding hard rules
const srcFiles = [];
function readDirRecursive(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      readDirRecursive(fullPath);
    } else if (
      entry.name.endsWith('.tsx') ||
      entry.name.endsWith('.ts') ||
      entry.name.endsWith('.css')
    ) {
      srcFiles.push(fullPath);
    }
  }
}
readDirRecursive('src');

let foundDarkViolations = 0;
let foundGoldViolations = 0;
let foundRoundedViolations = 0;

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // Check for dark mode classes
  if (/\bdark:/.test(content)) {
    console.warn(`[VIOLATION] Found dark: class in ${file}`);
    foundDarkViolations++;
  }

  // Check for tacky yellow / gold
  if (/#FFD700|#D4AF37|#F59E0B|\byellow-[0-9]{2,3}\b/i.test(content)) {
    console.warn(`[VIOLATION] Found yellow/gold color in ${file}`);
    foundGoldViolations++;
  }

  // Check for forbidden rounded classes (rounded-xl, 2xl, 3xl, lg, md)
  if (/rounded-(xl|2xl|3xl|lg|md)/.test(content)) {
    console.warn(`[VIOLATION] Found bubbly rounded corner in ${file}`);
    foundRoundedViolations++;
  }
}

assert(foundDarkViolations === 0, 'Zero dark mode classes (100% Daylight Luxury Enforced)');
assert(foundGoldViolations === 0, 'Zero tacky yellow/gold accents (Mulmul Ivory, Travertine & Charcoal only)');
assert(foundRoundedViolations === 0, 'Zero bubbly rounded corners (Strict rounded-none 90-degree cuts)');

// 3. Verify WhatsApp & Business Endpoints in Code
const routerContent = fs.readFileSync('src/lib/whatsappRouter.ts', 'utf8');
assert(routerContent.includes('wa.link/grbesm'), 'Official WhatsApp link "wa.link/grbesm" verified in router');
assert(routerContent.includes('Kurla, Mumbai'), 'Official Studio location "Kurla, Mumbai" verified in router');
assert(routerContent.includes('10.1K+'), '10.1K+ Community metric present');
assert(routerContent.includes('5+'), '5+ Years experience metric present');

// 4. Verify Bridal Lookbook Data
const lookbookContent = fs.readFileSync('src/data/lookbookData.ts', 'utf8');
assert(lookbookContent.includes('Traditional Bridal'), 'Traditional Bridal category present');
assert(lookbookContent.includes('Engagement Glam'), 'Engagement Glam category present');
assert(lookbookContent.includes('Reception Dewy'), 'Reception Dewy category present');
assert(lookbookContent.includes('Maharashtrian Regal'), 'Maharashtrian Regal category present');

// 5. Verify Academy Courses & Batches
const coursesContent = fs.readFileSync('src/data/coursesData.ts', 'utf8');
assert(coursesContent.includes('30-Day Masterclass: Basic to International Bridal Makeup'), 'Course 1: 30-Day Masterclass present');
assert(coursesContent.includes('Professional Nail Art & Extension Diploma'), 'Course 2: Professional Nail Art Diploma present');
assert(coursesContent.includes('November 2026 Batch'), 'November 2026 batch present');
assert(coursesContent.includes('December 2026 Batch'), 'December 2026 batch present');

// 6. Verify DPDP Act 2023 Compliance
const ledgerContent = fs.readFileSync('src/components/inquiry/AdmissionsLedger.tsx', 'utf8');
assert(ledgerContent.includes('DPDP'), 'DPDP Act 2023 consent checkbox verified in Admissions Ledger');

console.log(`\n=================================================================`);
console.log(`AUDIT RESULTS: ${passed} Passed, ${failed} Failed`);
console.log(`=================================================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('ALL ARCHITECTURAL & DAYLIGHT LUXURY CHECKS PASSED PERFECTLY!\n');
}
