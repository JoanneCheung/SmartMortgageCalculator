# 🔑 API Configuration Guide

## Quick Setup (2 Minutes)

This calculator uses the API Ninjas Mortgage Calculator API. You need to add your API key once to the code.

### Step 1: Get Your API Key

1. Visit [https://api-ninjas.com](https://api-ninjas.com)
2. Click "Sign Up" (it's free!)
3. After signing up, go to your dashboard
4. Copy your API key (it looks like: `aBcD1234eFgH5678iJkL9012`)

### Step 2: Add API Key to the Code

Open `js/app.js` and find line 7-9:

```javascript
// ============================================
// CONFIGURATION - Add your API key here
// ============================================
const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your actual API key from api-ninjas.com
```

Replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const API_KEY = 'aBcD1234eFgH5678iJkL9012'; // Your actual API key
```

### Step 3: Save and Test

1. Save the file
2. Open `index.html` in your browser
3. Enter mortgage details
4. Click "Calculate Payment"
5. See your results!

## Important Notes

### ⚠️ Security Warning

**Never commit your API key to public repositories!**

If you're using Git:
1. The API key is in your code (not ideal for public repos)
2. Consider using environment variables for production
3. Add `js/app.js` to `.gitignore` if sharing publicly

### Better Alternative for Public Projects

If you're sharing this code publicly, create a separate config file:

**Create `js/config.js`:**
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

**Update `index.html`** (add before app.js):
```html
<script src="js/config.js"></script>
<script src="js/app.js"></script>
```

**Add to `.gitignore`:**
```
js/config.js
```

**Create `js/config.example.js`** (for other developers):
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

## API Key Limits

The free tier includes:
- ✅ 5,000 API calls per month
- ✅ No credit card required
- ✅ Perfect for personal use

If you need more:
- Upgrade to paid plan at api-ninjas.com
- Check current pricing at [https://api-ninjas.com/pricing](https://api-ninjas.com/pricing)

## Troubleshooting

### "Invalid API key" Error
- ✓ Check you copied the entire key (no spaces)
- ✓ Verify key is between quotes: `'your-key-here'`
- ✓ Confirm key is active on api-ninjas.com

### API Not Responding
- ✓ Check your internet connection
- ✓ Verify you haven't exceeded free tier limits
- ✓ Check API Ninjas status page

### Still Not Working?
- Open browser console (F12)
- Look for error messages
- Check the Network tab to see API responses

## For Production Use

For a production website, consider:

1. **Backend Proxy**: Create a server-side endpoint that stores the API key securely
2. **Environment Variables**: Use `.env` files (never commit them!)
3. **Rate Limiting**: Implement caching to reduce API calls
4. **Error Monitoring**: Add logging for failed API calls

### Example Backend Proxy (Node.js/Express)

```javascript
// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

const API_KEY = process.env.API_NINJAS_KEY;

app.get('/api/mortgage', async (req, res) => {
    try {
        const params = new URLSearchParams(req.query);
        const url = `https://api.api-ninjas.com/v1/mortgagecalculator?${params}`;
        
        const response = await fetch(url, {
            headers: { 'X-Api-Key': API_KEY }
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(3000);
```

Then update your frontend to call `/api/mortgage` instead of the API Ninjas endpoint directly.

## Summary

✅ Get API key from api-ninjas.com  
✅ Add to `js/app.js` line 9  
✅ Save and refresh browser  
✅ Start calculating mortgages!  

**That's it! No user input needed, just one-time configuration.**

---

**Questions?** Check the main README.md or create an issue on GitHub.
