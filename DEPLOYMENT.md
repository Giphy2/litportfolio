# GitHub Pages Deployment Guide

## Quick Deployment (Using Script)
```powershell
.\deploy.ps1
```

## Manual Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Create/Checkout gh-pages Branch
```bash
git checkout -b gh-pages
# If branch exists: git checkout gh-pages
```

### 3. Clear Branch and Copy Files
```bash
git rm -rf .
copy index.html .
copy dist\* .
```

### 4. Commit and Push
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
```

### 5. Switch Back to Main
```bash
git checkout main
```

## GitHub Repository Setup

1. Create a new repository on GitHub
2. Add remote: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`
3. Push main branch: `git push -u origin main`
4. Configure GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Save

## Your Site URL
After deployment, your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Troubleshooting
- If files aren't showing up, check that they're in the root of gh-pages branch
- Make sure index.html is in the root directory
- Verify GitHub Pages is configured to use gh-pages branch 