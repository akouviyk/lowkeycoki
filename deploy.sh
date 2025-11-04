#!/bin/bash

# Lowkey Coki - GitHub Pages Deployment Script
# This script automates the deployment process

set -e  # Exit on error

echo "🚀 Starting Lowkey Coki deployment to GitHub Pages..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo -e "${BLUE}📦 Cleaning previous builds...${NC}"
rm -rf .next out
echo -e "${GREEN}✓ Clean complete${NC}"
echo ""

# Step 2: Install dependencies
echo -e "${BLUE}📚 Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✓ Dependencies installed${NC}"
echo ""

# Step 3: Build the project
echo -e "${BLUE}🔨 Building Next.js application...${NC}"
npm run build

if [ ! -d "out" ]; then
    echo -e "${RED}✗ Build failed - out directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build complete${NC}"
echo ""

# Step 4: Create .nojekyll file
echo -e "${BLUE}📝 Creating .nojekyll file...${NC}"
touch out/.nojekyll
echo -e "${GREEN}✓ .nojekyll created${NC}"
echo ""

# Step 5: Verify build
echo -e "${BLUE}🔍 Verifying build output...${NC}"
if [ -f "out/index.html" ]; then
    echo -e "${GREEN}✓ index.html found${NC}"
else
    echo -e "${RED}✗ index.html not found${NC}"
    exit 1
fi

if [ -f "out/girl-smoking-hookah.mp4" ]; then
    echo -e "${GREEN}✓ Video file found${NC}"
else
    echo -e "${RED}✗ Video file not found${NC}"
    exit 1
fi

if [ -d "out/_next" ]; then
    echo -e "${GREEN}✓ _next directory found${NC}"
else
    echo -e "${RED}✗ _next directory not found${NC}"
    exit 1
fi
echo ""

# Step 6: Test locally (optional)
echo -e "${BLUE}💡 To test locally before deploying, run:${NC}"
echo "   npx serve out"
echo "   Then visit: http://localhost:3000/lowkeycoki"
echo ""

# Step 7: Deploy to GitHub Pages
echo -e "${BLUE}🚀 Do you want to deploy to GitHub Pages now? (y/n)${NC}"
read -r response

if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo -e "${BLUE}📤 Deploying to GitHub Pages...${NC}"
    npm run deploy
    
    echo ""
    echo -e "${GREEN}✨ Deployment complete!${NC}"
    echo ""
    echo -e "${BLUE}🌐 Your site will be available at:${NC}"
    echo "   https://akouviyk.github.io/lowkeycoki"
    echo ""
    echo -e "${BLUE}⏱️  Note: It may take 1-5 minutes for changes to appear.${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "   1. Go to: https://github.com/akouviyk/lowkeycoki/settings/pages"
    echo "   2. Verify 'gh-pages' branch is selected"
    echo "   3. Wait for deployment (check Actions tab)"
    echo "   4. Visit your site!"
else
    echo -e "${BLUE}📦 Build complete but not deployed.${NC}"
    echo "   Run 'npm run deploy' when ready."
fi

echo ""
echo -e "${GREEN}✅ Script complete!${NC}"
