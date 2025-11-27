@echo off
REM Portfolio Deployment Setup Script for Windows

echo.
echo ========================================
echo  Portfolio Deployment Setup
echo ========================================
echo.

setlocal enabledelayedexpansion

echo Please enter your GitHub username:
set /p GITHUB_USER=Enter GitHub username: 

echo.
echo Please enter your repository name (default: portfolio):
set /p REPO_NAME=Enter repo name [portfolio]: 

if "%REPO_NAME%"=="" set REPO_NAME=portfolio

echo.
echo ========================================
echo Setup Configuration:
echo GitHub User: %GITHUB_USER%
echo Repository: %REPO_NAME%
echo ========================================
echo.

echo Configuring Git remote...
cd %~dp0
git remote add origin https://github.com/%GITHUB_USER%/%REPO_NAME%.git
git branch -M main

echo.
echo ========================================
echo Next Steps:
echo ========================================
echo.
echo 1. Create repository on GitHub:
echo    https://github.com/new
echo    Repository name: %REPO_NAME%
echo    Do NOT initialize with README or .gitignore
echo.
echo 2. After creating the repository, run:
echo    git push -u origin main
echo.
echo 3. Then deploy to Vercel:
echo    - Go to https://vercel.com
echo    - Sign up with GitHub
echo    - Import your repository
echo    - Click Deploy
echo.
echo ========================================
echo.
pause
