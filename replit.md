# replit.md

## Overview

This is a VAT (Value Added Tax) calculator application specifically designed for South Africa, where the VAT rate is 15%. The application allows users to quickly remove VAT from inclusive amounts and provides both the exclusive amount and the VAT portion. It's built as a full-stack web application with React frontend and Express backend, though currently functions primarily as a static calculator tool.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Development**: tsx for TypeScript execution
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Basic structure in place for user sessions

### Build Configuration
- **Client Build**: Vite builds to `dist/public` directory
- **Server Build**: esbuild bundles server code to `dist/index.js`
- **Development**: Concurrent client and server development with HMR support

## Key Components

### VAT Calculator Logic
- Real-time calculation of VAT-exclusive amounts from VAT-inclusive totals
- Uses the formula: `exclusiveAmount = inclusiveAmount / 1.15`
- Automatic calculation as user types
- Copy-to-clipboard functionality for results

### UI Components
- Professional calculator interface with clear input/output display
- Responsive design optimized for desktop and mobile
- Toast notifications for user feedback
- Share functionality for social media platforms
- Modal dialogs for additional information

### Advertisement Integration
- Google AdSense integration configured
- Placeholder system for development
- Multiple ad placement zones (banner, sidebar, mobile)

### SEO Optimization
- Comprehensive meta tags for search engines
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Canonical URLs and proper heading structure

## Data Flow

1. **User Input**: User enters VAT-inclusive amount in input field
2. **Real-time Calculation**: React useEffect triggers calculation on input change
3. **Result Display**: Shows VAT-exclusive amount and VAT portion separately
4. **Copy Functionality**: Users can copy results to clipboard
5. **Share Integration**: Social sharing options for WhatsApp, email, and social platforms

## External Dependencies

### Core Dependencies
- **UI Framework**: React ecosystem with TypeScript support
- **Styling**: Tailwind CSS with PostCSS processing
- **Components**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for any date-related operations

### Database Preparation
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Driver**: Neon serverless database driver
- **Schema**: Basic user schema defined in `shared/schema.ts`
- **Migrations**: Drizzle Kit configured for schema management

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint-ready configuration structure

## Deployment Strategy

### Static Deployment (Current Primary Method)
- **Target**: Cloudflare Pages
- **Build Output**: `dist/public` contains all static assets
- **Redirects**: SPA routing handled via `_redirects` file
- **Domain**: Configured for `vatremover.co.za`

### Full-Stack Deployment (Replit)
- **Platform**: Replit with autoscale deployment target
- **Database**: PostgreSQL 16 module enabled
- **Build Process**: Builds both client and server components
- **Port Configuration**: Server runs on port 5000, externally exposed on port 80

### Alternative Deployments
- **Cloudflare Workers**: Wrangler configuration for serverless deployment
- **GitHub Pages**: Deployment guide provided for static hosting
- **Manual Deployment**: Build scripts for custom hosting solutions

## Changelog

```
Changelog:
- June 25, 2025. Initial setup
- June 25, 2025. Added bookmark button functionality next to share buttons
- June 25, 2025. Project audit and cleanup - removed standalone HTML files, repackaged for proper React/Vite deployment
- June 26, 2025. Fixed numbered badge styling inconsistencies in "How to Use" section
- June 26, 2025. Optimized mobile responsiveness - fixed horizontal overflow issues, improved touch targets and spacing
- June 26, 2025. Replaced all em dashes (—) with regular dashes ( - ) throughout content sections
- June 26, 2025. Added consistent 12px mobile margins for all content elements
- June 26, 2025. Created ads.txt file for Google AdSense verification at root domain
- June 26, 2025. Fixed mobile layout refresh stability with enhanced CSS specificity and box-sizing inheritance
- June 29, 2025. Enhanced SEO structure with semantic HTML elements (main, article, section, ol, details) to address Google's low-value content flags
- January 6, 2025. Major architectural transformation: Converted from single-page to multi-page website for Google AdSense compliance
- January 6, 2025. Created 4 dedicated pages: How to Use Guide, Real-Life Examples, Business Guide, and FAQ
- January 6, 2025. Main calculator page now features modern teasers with call-to-actions linking to detailed content pages
- January 6, 2025. Enhanced routing with wouter to support /how-to-use, /examples, /business-guide, and /faq URLs
- January 6, 2025. Maintained core calculator functionality while expanding content architecture for better SEO and AdSense approval
- January 6, 2025. Comprehensive content optimization: Centered all page layouts for better visual hierarchy
- January 6, 2025. Added extensive SEO metadata including Schema.org microdata for enhanced search engine understanding
- January 6, 2025. Commented out all Google AdSense modules for clean development environment
- January 6, 2025. Enhanced content structure with semantic HTML5 elements for accessibility and SEO
- January 6, 2025. Optimized all pages for Large Language Model comprehension with clear headings and structured data
- January 7, 2025. Integrated SendGrid email service for feedback form functionality
- January 7, 2025. Added comprehensive feedback form with validation and toast notifications
- January 7, 2025. Fixed email sharing functionality in ShareButtons component with improved error handling
- January 7, 2025. Implemented email logging system pending domain verification for SendGrid
- January 7, 2025. Created detailed SendGrid setup guide for enabling email delivery
- January 7, 2025. MAJOR SECURITY AUDIT: Implemented enterprise-level security with XSS prevention, input sanitization, rate limiting
- January 7, 2025. PERFORMANCE OPTIMIZATION: Added component memoization, removed unused dependencies, optimized bundle size
- January 7, 2025. CODE CLEANUP: Removed 7 backup/broken files, implemented proper error handling and validation
- January 7, 2025. PRODUCTION READY: Added security headers, comprehensive input validation, and performance monitoring
- January 7, 2025. DEPLOYMENT ISSUE IDENTIFIED: Static deployment on vatremover.co.za lacks server-side API routes
- January 7, 2025. EMAIL DELIVERY ACTIVATED: SendGrid now attempts email delivery to josh@leadcafe.co.za
- January 7, 2025. PRODUCTION DEPLOYMENT GUIDE: Created comprehensive guide for static vs full-stack deployment options
- January 7, 2025. UNIVERSAL FEEDBACK SYSTEM: Implemented hybrid feedback that works on both server and static deployments with email fallback
- January 7, 2025. GOOGLE ADSENSE CODE AVAILABLE: AdSense integration with publisher ID ca-pub-4614672997891312 ready but commented out for development
- January 7, 2025. CLEAN CALCULATOR RESTORED: Reverted to original clean layout without ads, matching vatremover.co.za design exactly
- January 7, 2025. DEVELOPMENT STATE: AdSense components available but commented out for clean development environment
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```