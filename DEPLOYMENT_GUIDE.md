# React VAT Calculator - Deployment Guide

## Overview
Your React application uses Vite, TypeScript, Tailwind CSS, and shadcn/ui components. To deploy it properly while preserving all styling and functionality, follow these steps.

## Build Configuration

The project is already configured for static builds with these files:
- `vite.config.ts` - Configured to build to `dist/public`
- `tailwind.config.ts` - Properly configured with all required classes
- `client/src/index.css` - Contains all CSS variables and custom styles

## Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. **Build Command:** `vite build`
2. **Build Output Directory:** `dist/public`
3. **Root Directory:** `client`

**Steps:**
1. Push your repository to GitHub
2. Connect GitHub to Cloudflare Pages
3. Set build configuration:
   - Build command: `npm run build`
   - Build output: `dist/public`
   - Root directory: Leave empty (build will use vite.config.ts settings)

### Option 2: Manual Build and Deploy

1. **Local Build:**
   ```bash
   # From project root
   npm run build
   
   # This creates files in dist/public/
   # Upload contents of dist/public/ to your hosting provider
   ```

2. **Build Output:**
   - `dist/public/index.html` - Main HTML file
   - `dist/public/assets/` - CSS, JS, and other assets
   - All Tailwind styles will be compiled and included

### Option 3: GitHub Pages

1. **Create `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       
       steps:
       - uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
       
       - name: Install dependencies
         run: npm ci
       
       - name: Build
         run: npm run build
         
       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist/public
   ```

## What Gets Preserved

✅ **All Tailwind CSS styling** - Compiled into optimized CSS
✅ **shadcn/ui components** - All styles and functionality
✅ **React functionality** - Calculator logic, copy features, etc.
✅ **AdSense integration** - All ad placements preserved
✅ **Responsive design** - Mobile/desktop layouts
✅ **Custom CSS variables** - VAT color themes and styling
✅ **Font loading** - Inter font properly included

## Important Notes

1. **No Server Required** - The built application is completely static
2. **Environment Variables** - Any VITE_ prefixed variables will be included
3. **Asset Optimization** - Vite automatically optimizes images, CSS, and JavaScript
4. **Browser Compatibility** - Built files support all modern browsers

## Troubleshooting

If build fails:
1. Ensure all dependencies are installed: `npm ci`
2. Check for TypeScript errors: `npm run check`
3. Verify all import paths are correct

If styles don't appear after deployment:
1. Check that `dist/public/assets/` contains CSS files
2. Verify the base URL is set correctly in vite.config.ts
3. Ensure Tailwind classes are being used (not purged)

## Quick Deploy Test

To test the build locally:
```bash
npm run build
cd dist/public
python -m http.server 8000
# Visit http://localhost:8000
```

The application will work exactly like your development version but optimized for production.