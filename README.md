# Lowkey Coki - Beach Hookah Lounge Website

A premium, modern website for a beach hookah lounge at Coki Beach, St. Thomas, USVI. Features live events, online reservations, gallery, and private event booking.

## 🌴 Features

- **Beautiful Landing Page**: Full-screen hero with parallax effects and beach vibes
- **Live Events & DJs**: Showcase upcoming events with booking capabilities
- **Menu & Flavors**: Display hookah flavors and packages
- **Online Reservations**: Book beach sessions with deposit integration
- **Gallery**: Filterable image gallery with lightbox
- **Private Events**: Contact form for custom event inquiries
- **Mobile Responsive**: Fully optimized for all devices
- **SEO Optimized**: Built with Next.js for excellent search engine performance

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (React) with TypeScript
- **Styling**: TailwindCSS with custom beach/nightlife theme
- **Animations**: Framer Motion for smooth transitions
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Images**: Cloudflare Images for optimization and delivery
- **Payments**: Stripe (for deposits)
- **Hosting**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Firebase account
- Cloudflare account (for Images)
- Stripe account (for payments)

## 🛠️ Installation

1. **Clone or navigate to the project**:
   ```bash
   cd "/Users/akouvi/Desktop/lowkey coki"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Fill in your credentials (see Configuration section below)

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Phone/Google)
5. Copy your config values to `.env.local`

### Firestore Security Rules

Apply these security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /menus/{menuId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
    match /events/{eventId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
    match /reservations/{resId} {
      allow create: if request.auth != null;
      allow read, update, delete: if request.auth != null && 
        (resource.data.userId == request.auth.uid || request.auth.token.admin == true);
    }
    match /users/{uid} {
      allow read: if request.auth != null && request.auth.uid == uid;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### Cloudflare Images Setup

1. Sign up for [Cloudflare Images](https://www.cloudflare.com/products/cloudflare-images/)
2. Get your Account ID and API Token
3. Get your Account Hash from the Images dashboard
4. Add credentials to `.env.local`

### Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your publishable and secret keys
3. Add them to `.env.local`

## 📁 Project Structure

```
lowkey-coki/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Events.tsx
│   │   ├── Menu.tsx
│   │   ├── Reservations.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/                  # Utilities
│       ├── firebase.ts
│       └── cloudflare.ts
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Sand**: `#F6E9D7` - Warm beach background
- **Teal**: `#005B6E` - Deep ocean accent
- **Coral**: `#FF6F59` - Sunset highlight
- **Midnight**: `#0F0F10` - Near-black for contrast
- **Gold**: `#D4AF37` - Premium accent

### Typography
- **Headlines**: Condensed/Display font
- **Body**: Helvetica Neue / System stack

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Environment Variables for Production

Make sure to add all environment variables from `.env.local` to your hosting platform.

## 🔐 Security Notes

- Never commit `.env.local` to git
- Keep Firebase and Cloudflare API keys secure
- Use environment variables for all sensitive data
- Implement rate limiting on API routes in production
- Enable HTTPS in production

## 📝 TODO / Future Enhancements

- [ ] Add real hero images/videos
- [ ] Integrate actual Stripe payment flow
- [ ] Build admin dashboard for managing events/menu
- [ ] Add Google Analytics
- [ ] Implement email notifications
- [ ] Add Instagram feed integration
- [ ] Set up automated backups
- [ ] Add calendar sync (Google Calendar/Calendly)
- [ ] Implement review system
- [ ] Add multi-language support

## 🆘 Troubleshooting

### Images not loading
- Check that Cloudflare Images is properly configured
- Verify environment variables are set
- Check browser console for errors

### Firebase connection issues
- Verify Firebase config in `.env.local`
- Check Firebase Console for proper setup
- Ensure Firestore rules are applied

### Build errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check for TypeScript errors: `npm run build`

## 📧 Support

For issues or questions, contact:
- Email: info@lowkeycoki.com
- Phone: (340) 555-1234

## 📄 License

All rights reserved © 2024 Lowkey Coki

---

Built with ❤️ for Coki Beach, St. Thomas, USVI
