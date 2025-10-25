# 🚀 Quick Start Guide

Get your Smart Mortgage Calculator up and running in 3 minutes!

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- An API key from API Ninjas (free to obtain)
- A text editor to add your API key to the code

## Step 1: Get Your API Key

1. Visit [https://api-ninjas.com](https://api-ninjas.com)
2. Click "Sign Up" and create a free account
3. Navigate to your dashboard
4. Copy your API key (it looks like: `xxxxxxxxxxxxxxxxxxxxx`)

## Step 2: Configure the API Key

1. Open `js/app.js` in any text editor
2. Find line 9 which says:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'aBcD1234eFgH5678iJkL9012';
   ```
4. Save the file

**Important:** You only need to do this once. Users won't need to enter any API key!

## Step 3: Open the Calculator

Download all the project files and extract them to a folder on your computer:

```
smart-mortgage-calculator/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── README.md
```

## Step 4: Use the Calculator

1. **Enter Home Details** (API key already configured!):
   - Home Value: $350,000
   - Down Payment: $70,000
   - Interest Rate: 6.5%
   - Loan Term: 30 years
3. **Add Optional Costs** (if applicable):
   - Property Tax: $3,000/year
   - Home Insurance: $1,200/year
   - HOA Fees: $0/month
4. **Click "Calculate Payment"** or press Enter

## Step 5: View Your Results

The calculator will display:
- ✅ Monthly payment breakdown
- ✅ Annual payment total
- ✅ Total interest over loan term
- ✅ Loan summary

## 💡 Tips

- The API key is configured in the code (users don't need to enter it)
- Press Enter to calculate without clicking the button
- All amounts are in USD
- Try different scenarios by changing the values
- See [API_SETUP.md](API_SETUP.md) for advanced API configuration

## 🔒 Security Note

- Never commit your API key to public repositories
- Add `js/app.js` to `.gitignore` if sharing publicly
- See [API_SETUP.md](API_SETUP.md) for production deployment tips

## ❓ Troubleshooting

### "Invalid API key" error or "API request failed"
- Make sure you configured the API key in `js/app.js` (line 9)
- Verify the key is between quotes: `'your-key-here'`
- Check you copied the entire key from api-ninjas.com (no spaces)
- Confirm key is active and hasn't exceeded free tier limits
- Check your internet connection
- Verify your API key is correct
- Make sure you haven't exceeded your free API limits

### Calculator not loading
- Check that all files are in the correct folders
- Try using a local server instead of opening directly
- Clear your browser cache and try again

### Results not displaying
- Make sure all input values are valid numbers
- Check that down payment is less than home value
- Open browser console (F12) to see any error messages

## 📚 Need More Help?

- Read the full [README.md](README.md)
- Check the [API Documentation](https://api-ninjas.com/api/mortgagecalculator)
- Create an issue on GitHub

## 🎉 You're All Set!

Enjoy using your Smart Mortgage Calculator! Feel free to customize the code to fit your needs.

---

**Happy calculating!** 🏠💰
