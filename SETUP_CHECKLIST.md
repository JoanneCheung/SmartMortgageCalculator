# ✅ Setup Checklist

Use this checklist to ensure your Smart Mortgage Calculator is properly configured.

## Before You Start

- [ ] Downloaded/cloned the project files
- [ ] Have a text editor ready (VS Code, Notepad++, Sublime, etc.)
- [ ] Have a web browser installed

## API Key Setup (Required)

- [ ] Created account at [api-ninjas.com](https://api-ninjas.com)
- [ ] Obtained API key from dashboard
- [ ] Opened `js/app.js` in text editor
- [ ] Found line 9: `const API_KEY = 'YOUR_API_KEY_HERE';`
- [ ] Replaced `YOUR_API_KEY_HERE` with actual API key
- [ ] Key is wrapped in quotes: `'your-actual-key'`
- [ ] Saved the file

## File Structure Check

Verify these files exist:

- [ ] `index.html` (main file)
- [ ] `css/styles.css` (stylesheet)
- [ ] `js/app.js` (application logic with your API key)
- [ ] `README.md` (documentation)

## Testing

- [ ] Opened `index.html` in web browser
- [ ] Page loads without errors
- [ ] Can see all input fields
- [ ] Can see results section
- [ ] No API key input field visible (that's correct!)

## First Calculation Test

Try these test values:

- [ ] Home Value: 350000
- [ ] Down Payment: 70000
- [ ] Interest Rate: 6.5
- [ ] Loan Term: 30
- [ ] Property Tax: 3000
- [ ] Home Insurance: 1200
- [ ] HOA Fees: 0

- [ ] Clicked "Calculate Payment" button
- [ ] No errors displayed
- [ ] Results show:
  - [ ] Monthly Payment: around $2,119
  - [ ] Annual Payment: around $25,428
  - [ ] Total Interest: around $483,139

## Browser Console Check

- [ ] Pressed F12 to open Developer Tools
- [ ] Clicked Console tab
- [ ] No red errors visible

If you see errors:
- Red text usually means an error
- Check if API key is correctly configured
- Verify internet connection

## Common Issues

### ❌ "API request failed" Error

**Solution:**
1. Check `js/app.js` line 9
2. Verify API key is correct
3. Make sure key is between quotes
4. No extra spaces before/after key

**Check this:**
```javascript
// ❌ Wrong
const API_KEY = YOUR_API_KEY_HERE;

// ❌ Wrong
const API_KEY = 'YOUR_API_KEY_HERE';

// ✅ Correct
const API_KEY = 'aBcD1234eFgH5678iJkL9012';
```

### ❌ Page Shows Blank Results

**Solution:**
1. Open browser console (F12)
2. Look for error messages
3. Common causes:
   - API key not configured
   - Internet connection issues
   - Browser blocking API calls

### ❌ CSS Not Loading (Page Looks Broken)

**Solution:**
1. Verify file structure:
   ```
   your-folder/
   ├── index.html
   ├── css/
   │   └── styles.css
   └── js/
       └── app.js
   ```
2. Make sure files are in correct folders
3. Try using a local server instead of opening directly

## Advanced Setup (Optional)

### Using Local Server

For better development experience:

**Python:**
```bash
cd smart-mortgage-calculator
python -m http.server 8000
# Open: http://localhost:8000
```

**Node.js:**
```bash
cd smart-mortgage-calculator
npx http-server -p 8000
# Open: http://localhost:8000
```

### Security for Public Deployment

If deploying publicly:

- [ ] Created `js/config.js` for API key
- [ ] Added `js/config.js` to `.gitignore`
- [ ] Or used environment variables
- [ ] Or created backend proxy

See [API_SETUP.md](API_SETUP.md) for details.

## All Set! 🎉

If all items are checked, you're ready to use the calculator!

**What You've Accomplished:**
✅ Configured API integration  
✅ Tested basic functionality  
✅ Verified proper setup  
✅ Ready for production use  

## Next Steps

1. **Customize**: Change colors in `css/styles.css`
2. **Extend**: Add features in `js/app.js`
3. **Deploy**: Host on GitHub Pages, Netlify, or Vercel
4. **Share**: Help others calculate their mortgages!

## Need Help?

- 📖 Full documentation: [README.md](README.md)
- ⚡ Quick setup: [QUICKSTART.md](QUICKSTART.md)
- 🔑 API details: [API_SETUP.md](API_SETUP.md)
- 💻 Code docs: [CODE_DOCUMENTATION.md](CODE_DOCUMENTATION.md)

---

**Happy calculating!** 🏠💰
