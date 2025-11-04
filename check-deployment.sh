#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 GitHub Pages Deployment Pre-flight Check"
echo "============================================="
echo ""

# Check if next.config.js exists and has correct settings
echo "📋 Checking next.config.js..."
if [ -f "next.config.js" ]; then
    if grep -q "output: 'export'" next.config.js && grep -q "basePath:" next.config.js; then
        echo -e "${GREEN}✓${NC} next.config.js is configured correctly"
    else
        echo -e "${RED}✗${NC} next.config.js may not be configured correctly"
    fi
else
    echo -e "${RED}✗${NC} next.config.js not found"
fi

# Check if .nojekyll will be created
echo ""
echo "📋 Checking deployment scripts..."
if grep -q "nojekyll" package.json || [ -f ".github/workflows/deploy.yml" ]; then
    echo -e "${GREEN}✓${NC} .nojekyll file will be created"
else
    echo -e "${YELLOW}⚠${NC}  No .nojekyll creation detected (may cause issues)"
fi

# Check if gh-pages is installed
echo ""
echo "📋 Checking dependencies..."
if grep -q "gh-pages" package.json; then
    echo -e "${GREEN}✓${NC} gh-pages is in package.json"
else
    echo -e "${RED}✗${NC} gh-pages not found in package.json"
fi

# Check if public directory exists
echo ""
echo "📋 Checking public directory..."
if [ -d "public" ]; then
    echo -e "${GREEN}✓${NC} public directory exists"
    echo "   Files in public:"
    ls -la public | tail -n +4 | awk '{print "   - " $9}'
else
    echo -e "${RED}✗${NC} public directory not found"
fi

# Try to build
echo ""
echo "📋 Testing build process..."
echo -e "${YELLOW}Running: npm run build${NC}"
echo ""

if npm run build; then
    echo ""
    echo -e "${GREEN}✓${NC} Build successful!"
    
    # Check if out directory was created
    if [ -d "out" ]; then
        echo -e "${GREEN}✓${NC} out directory created"
        
        # Check for essential files
        if [ -f "out/index.html" ]; then
            echo -e "${GREEN}✓${NC} index.html found"
        else
            echo -e "${RED}✗${NC} index.html not found in out directory"
        fi
        
        if [ -f "out/.nojekyll" ]; then
            echo -e "${GREEN}✓${NC} .nojekyll file present"
        else
            echo -e "${YELLOW}⚠${NC}  .nojekyll file not found - creating it now"
            touch out/.nojekyll
            echo -e "${GREEN}✓${NC} .nojekyll file created"
        fi
        
        # Check for _next directory
        if [ -d "out/_next" ]; then
            echo -e "${GREEN}✓${NC} _next directory with assets found"
        else
            echo -e "${RED}✗${NC} _next directory not found"
        fi
        
    else
        echo -e "${RED}✗${NC} out directory not created"
    fi
else
    echo ""
    echo -e "${RED}✗${NC} Build failed!"
    echo "Please fix the build errors before deploying."
    exit 1
fi

# Summary
echo ""
echo "============================================="
echo "📊 Summary"
echo "============================================="
echo ""
echo "Your site should be available at:"
echo -e "${GREEN}https://akouviyk.github.io/lowkeycoki${NC}"
echo ""
echo "To deploy:"
echo "  1. Using GitHub Actions (recommended):"
echo "     git add ."
echo "     git commit -m 'Deploy to GitHub Pages'"
echo "     git push origin main"
echo ""
echo "  2. Using gh-pages package:"
echo "     npm run deploy"
echo ""
echo "============================================="
