@echo off
git init
git branch -M main
git add .
git commit -m "Initial commit: Next.js landing page with updated fonts and branding"
git remote remove origin 2>nul
git remote add origin https://github.com/tagverseiio-png/adroit_industrial_landingpage.git
git push -u origin main
echo Done!
pause
