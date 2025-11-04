#!/bin/bash

# Simple deployment script for GitHub Pages

echo "🚀 Deploying to GitHub Pages..."
echo ""

# Build the site
echo "📦 Building site..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Ensure .nojekyll exists
    if [ ! -f "out/.nojekyll" ]; then
        echo "📝 Creating .nojekyll file..."
        touch out/.nojekyll
    fi
    
    echo ""
    echo "🚀 Deploying to gh-pages branch..."
    npx gh-pages -d out -t true
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        echo ""
        echo "🌐 Your site will be available at:"
        echo "   https://akouviyk.github.io/lowkeycoki"
        echo ""
        echo "⏰ Note: It may take a few minutes for changes to appear."
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
