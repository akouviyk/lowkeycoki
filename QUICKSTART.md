# 🚀 Quick Start Guide - Lowkey Coki Website

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

1. Copy the example file:
```bash
cp .env.example .env.local
```

2. Get your Firebase credentials:
   - Go to https://console.firebase.google.com/
   - Create a new project (or use existing)
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Click "Add app" and select Web (</>) 
   - Copy the config values to your `.env.local`

3. Get Cloudflare Images credentials:
   - Go to https://dash.cloudflare.com/
   - Select your account
   - Go to Images
   - Get your Account ID and create an API Token
   - Add to `.env.local`

4. Get Stripe keys (optional for now):
   - Go to https://stripe.com
   - Get your publishable and secret keys
   - Add to `.env.local`

## Step 3: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## Step 4: Test the Site

The site should now be running with:
- ✅ Beautiful landing page with hero section
- ✅ Events section
- ✅ Menu & flavors
- ✅ Reservation form
- ✅ Gallery
- ✅ About section
- ✅ Contact form
- ✅ Responsive mobile design

## Next Steps

### Add Your Content

1. **Replace placeholder images**: Add your actual beach/hookah photos to `/public` folder
2. **Update menu items**: Edit `/src/components/Menu.tsx` with your real flavors and prices
3. **Add events**: Edit `/src/components/Events.tsx` with your actual events
4. **Update contact info**: Change phone numbers and email in all components

### Set Up Firebase

1. In Firebase Console:
   - Enable Firestore Database
   - Enable Authentication (Email, Phone, Google)
   - Apply security rules from README.md

2. Create initial collections:
   ```javascript
   // In Firebase Console > Firestore
   - Create collection: menus
   - Create collection: events  
   - Create collection: reservations
   - Create collection: users
   ```

### Configure Cloudflare Images

1. Test the image uploader at `/admin` (you'll need to create this page)
2. Upload some test images
3. Update components to use real Cloudflare image URLs

### Deploy to Production

1. Push code to GitHub
2. Connect to Vercel: https://vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy!

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules .next
npm install
```

### Styles not loading
```bash
npm run dev
# Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
```

### Environment variables not working
- Make sure file is named `.env.local` (not `.env`)
- Restart dev server after changing env vars
- Public vars must start with `NEXT_PUBLIC_`

## Need Help?

- Check README.md for detailed documentation
- Review component files for inline comments
- Firebase docs: https://firebase.google.com/docs
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

## Optional: Build Admin Dashboard

Create `/src/app/admin/page.tsx` for managing content:
- Upload images
- Create/edit menu items
- Schedule events
- View reservations

Example admin route is ready to use with the ImageUploader component!

---

**You're all set!** 🎉 The foundation is built - now make it yours with your branding, photos, and content.
