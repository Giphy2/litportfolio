# GitHub Pages Deployment Script
Write-Host "Building project..." -ForegroundColor Green
npm run build

Write-Host "Creating gh-pages branch..." -ForegroundColor Green
git checkout -b gh-pages 2>$null
if ($LASTEXITCODE -ne 0) {
    git checkout gh-pages
}

Write-Host "Clearing gh-pages branch..." -ForegroundColor Green
git rm -rf . 2>$null

Write-Host "Copying built files..." -ForegroundColor Green
Copy-Item "index.html" "."
Copy-Item "dist\*" "." -Recurse

Write-Host "Adding files to git..." -ForegroundColor Green
git add .

Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Deploy to GitHub Pages"

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push origin gh-pages --force

Write-Host "Switching back to main branch..." -ForegroundColor Green
git checkout main

Write-Host "Deployment complete!" -ForegroundColor Green
Write-Host "Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/" -ForegroundColor Yellow