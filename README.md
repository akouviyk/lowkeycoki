# 🏖️ Lowkey Coki - Beach Hookah Lounge

Premium beach hookah lounge website for Coki Beach, St. Thomas, USVI.

## 🌐 Live Site

**Production**: [https://akouviyk.github.io/lowkeycoki](https://akouviyk.github.io/lowkeycoki)

---

## 🚀 Quick Deploy

### Option 1: Automatic Deploy (Recommended)

Every push to `main` automatically deploys via GitHub Actions.

```bash
git add .
git commit -m "Update site"
git push origin main
```

### Option 2: Manual Deploy

```bash
npm run deploy
```

Or use the helper script:

```bash
chmod +x deploy-simple.sh
./deploy-simple.sh
```

---

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Output will be in the 'out' directory
```

### Test Production Build Locally

```bash
# After building
cd out
python3 -m http.server 8000

# Visit http://localhost:8000/lowkeycoki
```

---

## 📁 Project Structure

```
lowkey-coki/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   ├── not-found.tsx    # 404 page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Events.tsx
│   │   ├── Menu.tsx
│   │   └── ...
│   └── lib/                 # Utilities
├── public/                  # Static assets
│   ├── favicon.svg
│   └── girl-smoking-hookah.mp4
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── tailwind.config.js       # Tailwind CSS config
```

---

## 🔧 Configuration

### GitHub Pages Settings

1. Repository: `akouviyk/lowkeycoki`
2. Source: GitHub Actions (or gh-pages branch)
3. Custom domain: (Optional)

### Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Production uses: `https://akouviyk.github.io/lowkeycoki`

---

## 📦 Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

---

## 🐛 Troubleshooting

### Blank Page Issue

If you see a blank page:

1. **Clear cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check console**: Press F12 and look for errors
3. **Verify build**: Run `npm run build` and check for errors
4. **Check paths**: Ensure all imports use correct paths

### CSS Not Loading

```bash
# Rebuild the project
rm -rf .next out node_modules/.cache
npm run build
```

### 404 on Navigation

This is normal for GitHub Pages. Use the navigation menu instead of direct URLs.

### Deployment Failed

```bash
# Check GitHub Actions logs
# Repository → Actions → Latest workflow

# Or check gh-pages deployment
git log --oneline gh-pages
```

---

## 📚 Documentation

- **Full Deployment Guide**: See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)

---

## 🔍 Pre-deployment Check

Run the check script before deploying:

```bash
chmod +x check-deployment.sh
./check-deployment.sh
```

---

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production site |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run lint` | Check code quality |

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally: `npm run dev`
4. Build: `npm run build`
5. Commit and push
6. Create a pull request

---

## 📄 License

Private - All rights reserved

---

## 📞 Support

- **Repository Issues**: [GitHub Issues](https://github.com/akouviyk/lowkeycoki/issues)
- **Email**: info@lowkeycoki.com
- **Instagram**: [@lowkeycoki](https://instagram.com/lowkeycoki)

---

## ✅ Deployment Checklist

Before deploying to production:

- [ ] All images optimized and in `public/` folder
- [ ] Environment variables configured
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors in browser
- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] SEO metadata correct
- [ ] GitHub Pages settings verified

---

**Built with ❤️ for the Caribbean's best beach hookah experience**

🏖️ **Lowkey Coki** - *Sunsets · Beach · Beats & Clouds*
