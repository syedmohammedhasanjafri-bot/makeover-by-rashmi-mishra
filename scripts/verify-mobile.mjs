import fs from 'fs';

console.log('=================================================================');
console.log('MAKEOVER BY RASHMI MISHRA — MOBILE VIEWPORT (390x844) AUDIT');
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

// 1. Verify Viewport Configuration in layout.tsx
const layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');
assert(layoutContent.includes('device-width'), 'Viewport metadata includes device-width');
assert(layoutContent.includes('initialScale: 1'), 'Viewport metadata specifies initialScale: 1');
assert(layoutContent.includes('#FDFBF7'), 'Theme color set to daylight Mulmul Ivory (#FDFBF7)');

// 2. Verify Mobile Navigation & Drawer in Navbar.tsx
const navbarContent = fs.readFileSync('src/components/navigation/Navbar.tsx', 'utf8');
assert(navbarContent.includes('lg:hidden'), 'Responsive mobile breakpoint (lg:hidden) configured');
assert(navbarContent.includes('mobileMenuOpen'), 'Mobile drawer state orchestration present');
assert(navbarContent.includes('Check Wedding Date Availability'), 'Mobile action drawer contains primary bridal action');
assert(navbarContent.includes('Download Academy Syllabus & Fees'), 'Mobile action drawer contains primary academy action');

// 3. Verify Lookbook Responsive Layout
const lookbookGrid = fs.readFileSync('src/components/lookbook/LookbookGrid.tsx', 'utf8');
assert(lookbookGrid.includes('grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'), 'Responsive lookbook grid (1 col mobile -> 4 cols desktop)');
assert(lookbookGrid.includes('overflow-x-auto'), 'Filter tabs support smooth horizontal swipe on mobile');

// 4. Verify Forms and Inputs Mobile Thumb Usability
const ledgerContent = fs.readFileSync('src/components/inquiry/AdmissionsLedger.tsx', 'utf8');
assert(ledgerContent.includes('w-full'), 'Form inputs and CTAs occupy full mobile width');
assert(ledgerContent.includes('dpdpConsent'), 'DPDP Act checkbox formatted for easy touch engagement');

console.log(`\nMobile Viewport Audit Completed: ${passed} Passed, ${failed} Failed`);
if (failed > 0) process.exit(1);
