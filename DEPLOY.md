# Deployment Guide for Michelle Limanjae Portfolio

## Deploying to Netlify

### Method 1: Deploy from GitHub (Recommended)

1. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up or login with your GitHub account

2. **Import from GitHub**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select the `portfolio-michelle` repository
   - Netlify will auto-detect the build settings from `netlify.toml`

3. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (2-3 minutes)
   - Your site will be live at a Netlify URL

4. **Custom Domain (Optional)**
   - Go to "Domain settings"
   - Add your custom domain (e.g., michellelimanjae.com)
   - Follow Netlify's DNS configuration instructions

### Method 2: Manual Deploy

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Environment Variables

No environment variables are required for this portfolio.

## Build Settings (already configured in netlify.toml)

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

## Post-Deployment

After deployment:
1. Test all links and navigation
2. Verify images are loading correctly
3. Test the contact form
4. Check mobile responsiveness

## Updating Content

To update the portfolio:
1. Make changes locally
2. Commit and push to GitHub
3. Netlify will automatically rebuild and deploy

## Support

For any deployment issues, check:
- Netlify build logs
- GitHub repository settings
- Browser console for errors 