# 🚢 Deployment Checklist

## Pre-Deployment

### Content
- [ ] Replace all placeholder images with actual photos
- [ ] Update menu items with real flavors and prices
- [ ] Add real event information
- [ ] Update contact information (phone, email, address)
- [ ] Add social media links (Instagram, Facebook)
- [ ] Write custom meta descriptions for SEO
- [ ] Create Open Graph images (1200x630px)

### Configuration
- [ ] Set up Firebase project
- [ ] Configure Firestore security rules
- [ ] Enable Firebase Authentication methods
- [ ] Set up Cloudflare Images account
- [ ] Configure Stripe account (if using payments)
- [ ] Set up Google Analytics (optional)
- [ ] Create custom domain DNS records

### Testing
- [ ] Test all forms (reservation, contact)
- [ ] Test image uploads (admin)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify all links work
- [ ] Check page load speeds
- [ ] Test navigation and scrolling
- [ ] Verify color contrast for accessibility

## Deployment Steps

### 1. Vercel Deployment (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Deploy to Vercel:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. Add Environment Variables in Vercel:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.local`
   - Select all environments (Production, Preview, Development)

4. Deploy!

### 2. Custom Domain Setup

1. In Vercel:
   - Go to Project Settings > Domains
   - Add your custom domain (e.g., lowkeycoki.com)

2. In your domain registrar:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → Vercel IP address

3. Wait for DNS propagation (can take up to 48 hours)

### 3. SSL Certificate
- Vercel automatically provisions SSL certificates
- Verify HTTPS is working after deployment

## Post-Deployment

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Optimize images (use Cloudflare transforms)
- [ ] Enable caching
- [ ] Monitor Core Web Vitals

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership in Google Search Console
- [ ] Set up Google Analytics
- [ ] Add structured data markup (optional)
- [ ] Check social media preview cards

### Security
- [ ] Verify Firebase security rules are active
- [ ] Enable rate limiting on API routes
- [ ] Set up CORS properly
- [ ] Review Cloudflare security settings
- [ ] Enable 2FA on all accounts (Firebase, Vercel, etc.)

### Monitoring
- [ ] Set up error tracking (Sentry, optional)
- [ ] Configure uptime monitoring
- [ ] Set up Firebase usage alerts
- [ ] Monitor Cloudflare Images quota

## Maintenance Schedule

### Daily
- Check for new reservations
- Monitor error logs
- Respond to contact form submissions

### Weekly
- Update events calendar
- Post new gallery images
- Check analytics
- Review and respond to feedback

### Monthly
- Update menu items/prices
- Review site performance
- Check for dependency updates
- Backup Firestore data

## Emergency Contacts

- Vercel Support: https://vercel.com/support
- Firebase Support: https://firebase.google.com/support
- Cloudflare Support: https://support.cloudflare.com
- Stripe Support: https://support.stripe.com

## Rollback Plan

If something goes wrong:

1. In Vercel Dashboard:
   - Go to Deployments
   - Find last working deployment
   - Click "..." → "Promote to Production"

2. Check what changed:
   - Review recent commits
   - Check environment variables
   - Review recent Firebase changes

## Success Metrics to Track

- Page views
- Reservation conversions
- Average session duration
- Bounce rate
- Mobile vs desktop traffic
- Top traffic sources
- Most viewed pages

---

**Remember**: After deployment, keep the `.env.local` file backed up securely but NEVER commit it to git!

Good luck with your launch! 🎉🏖️
