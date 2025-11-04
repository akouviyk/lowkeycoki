# GitHub Pages Deployment Guide for Lowkey Coki

## Fixed Issues

### 1. **Next.js Configuration** (`next.config.js`)
- ✅ Removed full URL from `assetPrefix` (was causing issues)
- ✅ Set `assetPrefix` to just `/lowkeycoki/` to match basePath
- ✅ Kept `output: 'export'` for static export
- ✅ Kept `trailingSlash: true` for proper routing

### 2. **Layout Metadata** (`src/app/layout.tsx`)
- ✅ Fixed OpenGraph image URLs (removed localhost)
- ✅ Added dynamic basePath for production/development
- ✅ Images now correctly reference `/lowkeycoki/og-image.jpg`

### 3. **Hero Component** (`src/components/Hero.tsx`)
- ✅ Fixed video source path to include basePath
- ✅ Video now loads from `/lowkeycoki/girl-smoking-hookah.mp4`
- ✅ Added runtime basePath detection

## Deployment Steps

### Step 1: Clean Build
```bash
# Remove previous build artifacts
rm -rf .next out

# Install dependencies (if needed)
npm install
```

### Step 2: Build for Production
```bash
npm run build
```

This will:
- Generate static files in the `out` directory
- Apply the `/lowkeycoki` basePath to all assets
- Create a `.nojekyll` file (via predeploy script)

### Step 3: Verify Build Locally
```bash
# Serve the out directory locally to test
npx serve out

# Then visit: http://localhost:3000/lowkeycoki
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
1. Run the predeploy script (build + .nojekyll)
2. Push the `out` directory to the `gh-pages` branch

### Step 5: Configure GitHub Repository
1. Go to your repository: https://github.com/akouviyk/lowkeycoki
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages` 
   - **Folder**: `/ (root)`
4. Click **Save**

### Step 6: Wait and Verify
- GitHub Pages typically takes 1-5 minutes to deploy
- Your site will be available at: https://akouviyk.github.io/lowkeycoki
- Check the Actions tab to see deployment progress

## Troubleshooting

### Blank Page Issues
If you still see a blank page:

1. **Check Browser Console** (F12)
   - Look for 404 errors on CSS/JS files
   - Verify all paths include `/lowkeycoki/`

2. **Verify .nojekyll File**
   ```bash
   # Check if .nojekyll exists in out directory
   ls -la out/.nojekyll
   ```

3. **Check GitHub Pages Settings**
   - Ensure branch is set to `gh-pages`
   - Wait a few minutes after deploy

4. **Clear Cache**
   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
   - Try incognito/private browsing mode

### 404 Errors on Assets
If CSS, JS, or images show 404:

```bash
# Verify files exist in out directory
ls out/_next/static/

# Check that paths in HTML include /lowkeycoki/
cat out/index.html | grep "_next"
```

### Video Not Playing
If the video doesn't load:

```bash
# Verify video file exists and is in the right place
ls -lh out/girl-smoking-hookah.mp4

# Check file size (should be reasonable)
# If too large, consider compressing
```

## Project Structure
```
lowkey-coki/
├── out/                          # Generated static files (gitignored)
│   ├── .nojekyll                # Tells GitHub to serve all files
│   ├── index.html               # Main HTML with /lowkeycoki/ paths
│   ├── _next/                   # Next.js assets
│   │   └── static/
│   │       ├── css/
│   │       └── chunks/
│   ├── girl-smoking-hookah.mp4  # Video asset
│   └── favicon.svg              # Favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx           # ✅ Fixed metadata
│   │   └── page.tsx
│   └── components/
│       └── Hero.tsx             # ✅ Fixed video path
├── next.config.js               # ✅ Fixed config
└── package.json
```

## Important Notes

### basePath vs assetPrefix
- **basePath**: `/lowkeycoki` - adds to all page routes
- **assetPrefix**: `/lowkeycoki/` - adds to all static assets
- Both must match for GitHub Pages subdirectory deployment

### .nojekyll File
- Critical for GitHub Pages
- Prevents Jekyll from ignoring `_next` directory
- Automatically created by predeploy script

### Environment Variables
If you need environment variables for GitHub Pages:
```javascript
// next.config.js
const nextConfig = {
  // ... existing config
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
};
```

## Quick Commands Reference

```bash
# Development
npm run dev                    # Start dev server

# Build & Deploy
npm run build                  # Build for production
npm run deploy                 # Deploy to GitHub Pages

# Manual deployment
npm run build                  # Build first
cd out                         # Enter out directory
git init                       # Initialize git
git add -A                     # Stage all files
git commit -m "Deploy"         # Commit
git push -f origin main:gh-pages  # Force push to gh-pages
```

## Verification Checklist

After deployment, verify:
- [ ] Site loads at https://akouviyk.github.io/lowkeycoki
- [ ] All CSS styles are applied correctly
- [ ] Hero video plays automatically
- [ ] Navigation links work (anchors)
- [ ] All images load
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools

## Support

If issues persist:
1. Check the GitHub Actions logs
2. Verify all files in `out/` directory have correct paths
3. Test locally with `npx serve out` first
4. Clear browser cache thoroughly

## Success Indicators

Your deployment is successful when:
- ✅ No 404 errors in browser console
- ✅ All assets load with `/lowkeycoki/` prefix
- ✅ Video background plays
- ✅ Styles are applied
- ✅ No blank white page

---

**Last Updated**: November 2025
**Repository**: https://github.com/akouviyk/lowkeycoki
**Live Site**: https://akouviyk.github.io/lowkeycoki
