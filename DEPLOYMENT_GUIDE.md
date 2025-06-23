# Cloudflare Pages Deployment Guide for VAT Calculator

## Overview
Your VAT calculator is ready for deployment to Cloudflare Pages. I've created a production-ready static version in the `cloudflare-deploy` folder.

## Deployment-Ready Files
The `cloudflare-deploy` folder contains:
- `index.html` - Complete VAT calculator with all features
- `_redirects` - Ensures proper routing for single-page application

## Quick Deployment Steps

### Option 1: Direct Upload (Recommended)
1. Download the `cloudflare-deploy` folder from Replit
2. Log into your Cloudflare dashboard
3. Go to "Pages" → "Create a project" → "Upload assets"
4. Upload the contents of the `cloudflare-deploy` folder
5. Set your custom domain to `vatremover.co.za`

### Option 2: Git Integration
If you prefer Git workflow:
1. Push the `cloudflare-deploy` folder contents to your repository
2. Connect Cloudflare Pages to your Git repository
3. Use these build settings:
   - Build command: (leave empty)
   - Build output directory: `/` (root)
   - Root directory: `cloudflare-deploy`

## Cloudflare Pages Setup

### 1. Create Cloudflare Pages Project
1. Log into your Cloudflare dashboard
2. Go to "Pages" in the sidebar
3. Click "Create a project"
4. Choose "Upload assets" (for direct upload) or "Connect to Git" (if you have the code in GitHub)

### 2. Build Configuration
If using Git integration, use these settings:
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist/public`
- **Root directory**: `client` (if uploading the whole project)

### 3. Domain Configuration
1. After deployment, go to your Pages project
2. Click "Custom domains"
3. Add `vatremover.co.za` and `www.vatremover.co.za`
4. Follow Cloudflare's DNS instructions

### 4. DNS Setup in Cloudflare
Add these DNS records for vatremover.co.za:
```
Type: CNAME
Name: @
Target: your-project-name.pages.dev

Type: CNAME  
Name: www
Target: your-project-name.pages.dev
```

## Important Files for Deployment

### _redirects
Already created - ensures SPA routing works correctly.

### Updated Domain References
Before deployment, update these placeholder URLs in your code:
- In `client/index.html`: Replace `https://your-domain.com/` with `https://vatremover.co.za/`
- In JSON-LD structured data: Update all domain references

## AdSense Integration
Your AdSense code (ca-pub-4614672997891312) is already integrated. After deployment:
1. Ads may take 24-48 hours to start showing
2. Verify your site in Google AdSense console
3. Add vatremover.co.za to your AdSense account

## Post-Deployment Checklist
- [ ] Test all calculator functionality
- [ ] Verify all sharing buttons work with new domain
- [ ] Check AdSense ads are loading
- [ ] Test responsive design on mobile/tablet
- [ ] Verify SEO meta tags display correctly
- [ ] Test copy functionality
- [ ] Confirm disclaimer popup works

## Performance Optimization
Cloudflare Pages provides automatic:
- Global CDN distribution
- Automatic HTTPS
- Gzip compression
- Image optimization
- Caching

Your site should load extremely fast worldwide.

## Monitoring
Use Cloudflare Analytics to monitor:
- Page views
- Unique visitors
- Geographic distribution
- Performance metrics