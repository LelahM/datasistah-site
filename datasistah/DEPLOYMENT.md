# Data Sistah - Vercel Deployment

## Quick Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in
2. Click "Add New Project"
3. Import this project folder or drag & drop the files
4. Vercel will automatically detect it as a static site
5. Click "Deploy"

### Option 2: Update Existing Vercel Project
If you already have a Vercel project for datasistah:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your "datasistah" project
3. Go to Settings → Git
4. Or manually upload files:
   - Go to the project
   - Click on "Deployments"
   - Upload the new files directly

### Option 3: Connect to GitHub
1. Push this code to a GitHub repository
2. Connect the repo to Vercel
3. Vercel will automatically deploy on every push

### Files Ready for Deployment
- ✅ `index.html` - Main website
- ✅ `styles.css` - Dark mode styling
- ✅ `script.js` - Animations
- ✅ `vercel.json` - Vercel configuration
- ✅ `README.md` - Documentation

## Manual Upload Steps

If you want to manually upload to your existing Vercel project:

1. **Via Vercel CLI** (if you get it working):
   ```bash
   vercel --prod
   ```

2. **Via Vercel Dashboard**:
   - Download/copy these files:
     - index.html
     - styles.css
     - script.js
   - Go to vercel.com → Your Project → Settings
   - Replace the files in your deployment

3. **Via GitHub**:
   - Push to your datasistah GitHub repo
   - Vercel will auto-deploy

## Project Structure
```
datasistah/
├── index.html      # Main page
├── styles.css      # Dark theme styles
├── script.js       # Interactive features
├── vercel.json     # Vercel config
└── README.md       # Documentation
```

## Environment
- No build process required
- Pure HTML/CSS/JS (static site)
- Works on any static hosting platform
- Optimized for Vercel deployment
