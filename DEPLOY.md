# Deployment Guide for Michelle Limanjae Portfolio

## Deploying to Netlify

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub**
   - Make sure all changes are committed and pushed to your GitHub repository

2. **Connect to Netlify**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select the `portfolio-michelle` repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - These should be auto-detected from `netlify.toml`

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add these variables:
     ```
     NEXT_PUBLIC_BASE_URL = https://your-site-name.netlify.app
     NEXT_PUBLIC_CONTACT_EMAIL = michelle.limanjae@gmail.com
     ```

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://your-site-name.netlify.app`

### Method 2: Drag and Drop Deploy

1. **Build Locally**
   ```bash
   npm run build
   npm run export
   ```

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=out
   ```

### Custom Domain Setup

1. Go to Domain settings in Netlify
2. Add custom domain: `michellelimanjae.com`
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

### Important Notes

- The `netlify.toml` file is already configured with:
  - Next.js plugin for optimal builds
  - Security headers
  - Caching rules for static assets
  - Environment variable contexts

- Make sure to add `michelle-1.png` to `public/assets/` before deploying

- The site will automatically rebuild when you push changes to GitHub

### Troubleshooting

If you encounter build errors:

1. **Check Node version**
   - Netlify uses Node 18 by default
   - You can specify version in `.nvmrc` file if needed

2. **Clear cache and retry**
   - In Netlify dashboard: Deploys → Trigger deploy → Clear cache and deploy site

3. **Check build logs**
   - Netlify provides detailed build logs for debugging

### Alternative: Vercel Deployment

Since this is a Next.js project, Vercel is also an excellent option:

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with zero configuration
4. Vercel automatically detects Next.js settings

Both platforms offer free tiers perfect for portfolio sites! 