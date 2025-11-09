# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Environment Variables

No environment variables are required for this project.

## API Endpoint

The contact form uses:
- **URL**: `https://vernanbackend.ezlab.in/api/contact-us/`
- **Method**: POST
- **Content-Type**: application/json

## Testing the Contact Form

1. Fill in all required fields (Name, Email, Phone, Message)
2. Ensure email is in valid format
3. Submit the form
4. You should see "Form Submitted" message on success

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- All images are optimized
- CSS is minified in production
- JavaScript is bundled and minified
- Total bundle size: ~250KB (gzipped)

