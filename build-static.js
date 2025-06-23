import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the static files
console.log('Building static files for Cloudflare Pages...');

try {
  // Run the build command with timeout handling
  execSync('npx vite build --outDir=static-dist', { 
    stdio: 'inherit',
    timeout: 120000 // 2 minute timeout
  });
  
  // Copy _redirects file to the output directory
  if (fs.existsSync('_redirects')) {
    fs.copyFileSync('_redirects', 'static-dist/_redirects');
    console.log('✓ Copied _redirects file');
  }
  
  console.log('✓ Static build completed successfully!');
  console.log('✓ Files ready for Cloudflare Pages deployment in ./static-dist/');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}