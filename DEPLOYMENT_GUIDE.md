# GitHub Pages Deployment Guide

## Complete Setup Instructions

### 1. Configuration Files

All configuration files have been updated:
- ✅ `next.config.js` - Configured for static export with proper base path
- ✅ `package.json` - Updated with correct deploy scripts
- ✅ `src/app/layout.tsx` - Fixed metadata and Open Graph images
- ✅ `src/app/not-found.tsx` - Custom 404 page

### 2. Deploy Using GitHub Actions (Recommended)

The GitHub Actions workflow is already set up at `.github/workflows/deploy.yml`.

**To deploy:**

```bash
# Commit your changes
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push origin main
```

The site will automatically build and deploy to:
**https://akouviyk.github.io/lowkeycoki**

### 3. Manual Deploy Using gh-pages (Alternative)

If you prefer manual deployment:

```bash
# Install dependencies (if not already installed)
npm install

# Build and deploy
npm run deploy
```

### 4. GitHub Repository Settings

Make sure your repository settings are correct:

1. Go to your repository on GitHub: `https://github.com/akouviyk/lowkeycoki`
2. Click **Settings** → **Pages**
3. Verify:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` / `(root)` (if using gh-pages npm package)
   - OR **Source**: GitHub Actions (if using workflow)

### 5. Verification Checklist

After deployment, verify:

- [ ] Site loads at https://akouviyk.github.io/lowkeycoki
- [ ] All images load correctly
- [ ] CSS styles are applied
- [ ] JavaScript functionality works
- [ ] Navigation links work
- [ ] Video plays correctly
- [ ] Forms submit properly

### 6. Common Issues & Solutions

#### Issue: Blank Page
**Solution**: 
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)
- Verify all files are in the `out` directory

#### Issue: CSS Not Loading
**Solution**: 
- Ensure `basePath` matches your repository name
- Check that `assetPrefix` is set correctly
- Rebuild: `npm run build`

#### Issue: 404 on Refresh
**Solution**: 
- This is normal for GitHub Pages with SPAs
- The `.nojekyll` file is included to help
- Users should use the navigation menu

#### Issue: Images Not Loading
**Solution**: 
- Use relative paths: `/image.jpg` (not `./image.jpg`)
- Place all images in the `public` folder
- Check that images are in the `out` folder after build

### 7. Build Process Explained

```bash
npm run build
```

This command:
1. Runs `next build` which creates an optimized production build
2. Exports static HTML/CSS/JS to the `out` directory
3. Adds `.nojekyll` file to prevent Jekyll processing
4. Includes all assets from `public` folder

### 8. Environment Variables

For production-specific configuration:

Create `.env.production` (if needed):
```bash
NEXT_PUBLIC_SITE_URL=https://akouviyk.github.io/lowkeycoki
NODE_ENV=production
```

### 9. Testing Locally

Test the production build locally before deploying:

```bash
# Build the site
npm run build

# Serve the out directory (you'll need a static server)
# Option 1: Using Python
cd out
python3 -m http.server 8000

# Option 2: Using npx serve
npx serve out

# Then visit: http://localhost:8000/lowkeycoki
```

### 10. Maintenance

**To update the site:**

1. Make changes to your code
2. Test locally: `npm run dev`
3. Commit changes: `git add . && git commit -m "Your message"`
4. Push to GitHub: `git push origin main`
5. GitHub Actions will automatically deploy (or run `npm run deploy`)

**To check deployment status:**
- Go to your repository → Actions tab
- View the latest workflow run

### 11. Advanced: Custom Domain (Optional)

To use a custom domain like `lowkeycoki.com`:

1. Add a `CNAME` file to the `public` folder:
   ```
   lowkeycoki.com
   ```

2. Update DNS settings at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: akouviyk.github.io
   ```

3. Update `next.config.js`:
   ```javascript
   basePath: '', // Remove basePath for custom domain
   assetPrefix: '', // Remove assetPrefix
   ```

### 12. Performance Tips

- ✅ Images are set to `unoptimized: true` (required for static export)
- ✅ Videos should be compressed for web
- ✅ Use lazy loading for images below the fold
- ✅ Minimize CSS and JS (done automatically by Next.js)

### 13. Troubleshooting Commands

```bash
# Check if build succeeds
npm run build

# Check for console errors
# Open browser DevTools (F12) → Console

# Validate HTML
# Use: https://validator.w3.org/

# Check GitHub Pages status
# Repository → Settings → Pages

# View build logs
# Repository → Actions → Latest workflow
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run deploy` | Build and deploy to gh-pages |
| `npm run lint` | Check for code issues |

## Support

If issues persist:
1. Check the GitHub Actions logs in your repository
2. Verify the `out` directory contains all necessary files
3. Ensure GitHub Pages is enabled in repository settings
4. Wait 5-10 minutes after deployment for changes to propagate

---

**Last Updated**: November 2025
**Next.js Version**: 14.1.0
**Repository**: https://github.com/akouviyk/lowkeycoki
**Live Site**: https://akouviyk.github.io/lowkeycoki
