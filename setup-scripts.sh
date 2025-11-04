#!/bin/bash

# Make scripts executable
echo "Making deployment scripts executable..."
chmod +x check-deployment.sh
chmod +x deploy-simple.sh
chmod +x deploy.sh

echo "✅ Scripts are now executable!"
echo ""
echo "You can now run:"
echo "  ./check-deployment.sh"
echo "  ./deploy-simple.sh"
