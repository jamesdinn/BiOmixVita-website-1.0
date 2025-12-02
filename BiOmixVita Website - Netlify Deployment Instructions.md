# BiOmixVita Website - Netlify Deployment Instructions

## Deployment Package Contents

Your deployment package includes:
- `dist/public/` - Production build files (HTML, CSS, JS, images)
- `netlify.toml` - Netlify configuration for proper routing
- `package.json` - Project dependencies
- `pnpm-lock.yaml` - Dependency lock file

## Method 1: Drag & Drop Deployment (Easiest)

1. **Extract the deployment package**
   - Unzip `biomix-v2-deployment.zip`

2. **Go to Netlify**
   - Visit https://app.netlify.com/
   - Log in to your account

3. **Deploy**
   - Drag the `dist/public` folder directly onto the Netlify dashboard
   - Netlify will automatically deploy your site
   - Your site will be live at a URL like: `https://random-name-12345.netlify.app`

4. **Configure Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain (e.g., biomixvita.com)
   - Follow Netlify's DNS configuration instructions

## Method 2: Git-Based Deployment (Recommended for Updates)

1. **Push to Git Repository**
   - Create a new repository on GitHub/GitLab/Bitbucket
   - Push your entire project folder

2. **Connect to Netlify**
   - In Netlify dashboard, click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `pnpm run build`
     - Publish directory: `dist/public`
   - Click "Deploy site"

3. **Automatic Deployments**
   - Any future commits will automatically trigger new deployments

## Important Notes

- **SPA Routing**: The `netlify.toml` file ensures all routes (/, /services, /insights, etc.) work correctly
- **Environment Variables**: If you add any API keys or secrets later, add them in Netlify dashboard under Site settings → Environment variables
- **Custom Domain**: You can add a custom domain in Site settings → Domain management
- **HTTPS**: Netlify automatically provides free SSL certificates

## Testing Your Deployment

After deployment, test these pages:
- Homepage: `/`
- Services: `/services`
- Pricing: `/pricing`
- Insights: `/insights`
- About Us: `/about`
- Partners: `/partners`
- Contact: `/contact`

All navigation should work smoothly without 404 errors.

## Support

For Netlify-specific issues, visit: https://docs.netlify.com/
