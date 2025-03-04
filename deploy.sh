#!/bin/bash

# Print current status
echo "📊 Checking Git Status..."
git status

# Add all changes to staging
echo "➕ Adding all changes..."
git add .

# Get commit message from user
echo "💭 Enter your commit message:"
read commit_message

# Commit changes with the provided message
echo "✅ Committing changes..."
git commit -m "$commit_message"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✨ Done! Your changes have been pushed to GitHub."
echo "🌐 Vercel will automatically start a new deployment." 