# 🏠 Smart Mortgage Calculator

A modern, responsive web application for calculating mortgage payments using the API Ninjas Mortgage Calculator API. Built with vanilla HTML, CSS, and JavaScript.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Configuration](#api-configuration)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## ✨ Features

- **Real-time Mortgage Calculations** - Instant calculations using API Ninjas API
- **Comprehensive Input Fields**:
  - Home Value
  - Down Payment
  - Interest Rate
  - Loan Term (Years)
  - Annual Property Tax
  - Annual Home Insurance
  - Monthly HOA Fees
  
- **Detailed Payment Breakdown**:
  - Monthly payment with itemized breakdown
  - Annual payment total
  - Total interest paid over loan term
  - Loan summary

- **User-Friendly Interface**:
  - Clean, modern gradient design
  - Responsive layout (mobile, tablet, desktop)
  - Real-time validation
  - Error handling with user feedback
  - Loading states
  - Currency formatting
  - Keyboard support (Enter key)

- **API Key Management**:
  - Secure API key storage in localStorage
  - Auto-save and auto-load functionality

## 🎯 Demo

Open `index.html` in your web browser to see the calculator in action.

### Sample Calculation

**Inputs:**
- Home Value: $350,000
- Down Payment: $70,000
- Interest Rate: 6.5%
- Loan Term: 30 years
- Property Tax: $3,000/year
- Home Insurance: $1,200/year
- HOA Fees: $0/month

**Results:**
- Monthly Payment: ~$2,119
- Annual Payment: ~$25,428
- Total Interest: ~$483,139

## 🚀 Installation

### Quick Setup (3 Steps)

**Step 1: Get API Key**
1. Visit [api-ninjas.com](https://api-ninjas.com) and sign up (free)
2. Copy your API key from the dashboard

**Step 2: Configure API Key**
Open `js/app.js` and find line 9:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```
Replace with your actual key:
```javascript
const API_KEY = 'aBcD1234eFgH5678iJkL9012';
```

**Step 3: Open and Use**
Open `index.html` in your browser - that's it! No user API key input needed.

### Option 1: Direct Download

1. Download or clone this repository:
```bash
git clone https://github.com/yourusername/smart-mortgage-calculator.git
```

2. Navigate to the project directory:
```bash
cd smart-mortgage-calculator
```

3. Configure your API key (see above)

4. Open `index.html` in your web browser.

### Option 2: Using a Local Server

For better development experience, use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npm install -g http-server
http-server
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📖 Usage

### Getting Started

1. **Configure API Key** (one-time setup):
   - Get your free API key from [api-ninjas.com](https://api-ninjas.com)
   - Add it to `js/app.js` at line 9
   - See [API_SETUP.md](API_SETUP.md) for detailed instructions

2. **Enter Mortgage Details**:
   - Fill in the home value
   - Enter your down payment amount
   - Set the interest rate
   - Choose loan term in years
   - Add optional costs (property tax, insurance, HOA)

4. **Calculate**:
   - Click "Calculate Payment" or press Enter
   - View your detailed payment breakdown

### Input Fields Explanation

| Field | Description | Required |
|-------|-------------|----------|
| **Home Value** | Total price of the property | Yes |
| **Down Payment** | Upfront payment amount | Yes |
| **Interest Rate** | Annual interest rate (%) | Yes |
| **Loan Term** | Length of loan in years | Yes |
| **Property Tax** | Annual property tax amount | Optional |
| **Home Insurance** | Annual home insurance cost | Optional |
| **HOA Fees** | Monthly HOA fees | Optional |

## 🔧 API Configuration

This application uses the [API Ninjas Mortgage Calculator API](https://api-ninjas.com/api/mortgagecalculator).

### API Endpoint

```
GET https://api.api-ninjas.com/v1/mortgagecalculator
```

### Required Header

```
X-Api-Key: YOUR_API_KEY
```

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `loan_amount` | number | Yes* | Principal loan amount |
| `home_value` | number | Yes* | Total home value |
| `downpayment` | number | Yes* | Down payment amount |
| `interest_rate` | number | Yes | Annual interest rate (%) |
| `duration_years` | number | No | Loan duration (default: 30) |
| `monthly_hoa` | number | No | Monthly HOA fees |
| `annual_property_tax` | number | No | Annual property tax |
| `annual_home_insurance` | number | No | Annual home insurance |

*Either `loan_amount` OR (`home_value` + `downpayment`) must be provided.

### API Response Format

```json
{
  "monthly_payment": {
    "total": 898,
    "mortgage": 898,
    "property_tax": 0,
    "hoa": 0,
    "annual_home_ins": 0
  },
  "annual_payment": {
    "total": 10777,
    "mortgage": 10777,
    "property_tax": 0,
    "hoa": 0,
    "home_insurance": 0
  },
  "total_interest_paid": 123312
}
```

## 📁 Project Structure

```
smart-mortgage-calculator/
│
├── index.html              # Main HTML file
├── README.md              # Project documentation
│
├── css/
│   └── styles.css         # All styling (responsive design)
│
├── js/
│   └── app.js             # Main application logic
│
└── assets/                # (Optional) Images and icons
```

### File Descriptions

- **index.html**: Main HTML structure with semantic markup
- **css/styles.css**: Complete styling including responsive design
- **js/app.js**: JavaScript logic for API calls, calculations, and UI updates

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **JavaScript (ES6+)** - Async/await, Fetch API, LocalStorage
- **API Ninjas API** - Mortgage calculation service

### Key JavaScript Features

- Async/Await for API calls
- Fetch API for HTTP requests
- LocalStorage for API key persistence
- Input validation
- Error handling
- Event listeners
- Currency formatting (Intl.NumberFormat)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

### Minimum Browser Versions

- Chrome 55+
- Firefox 52+
- Safari 11+
- Edge 15+

## 📱 Responsive Design

The calculator is fully responsive and works on:

- 📱 Mobile phones (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktops (1024px+)

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Test on multiple browsers
- Update README if needed
- Keep commits atomic and descriptive

## 🐛 Bug Reports

If you find a bug, please create an issue with:

- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots (if applicable)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Smart Mortgage Calculator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **Design Inspiration**: [Dribbble - Smart Mortgage Calculator UI](https://dribbble.com/shots/26184306--Smart-Mortgage-Calculator-Responsive-UI)
- **API Provider**: [API Ninjas](https://api-ninjas.com) for the Mortgage Calculator API
- **Icons**: Emoji icons for visual appeal

## 📞 Support

For support, questions, or feedback:

- Create an issue on GitHub
- Email: support@example.com
- Documentation: [API Ninjas Docs](https://api-ninjas.com/api/mortgagecalculator)

## 🔮 Future Enhancements

Potential features for future versions:

- [ ] Amortization schedule visualization
- [ ] Payment comparison charts
- [ ] PDF export of calculations
- [ ] Multiple loan comparison
- [ ] Save/load calculation presets
- [ ] Dark mode toggle
- [ ] Multilingual support
- [ ] PMI (Private Mortgage Insurance) calculations
- [ ] Extra payment calculations
- [ ] Refinance calculator

## 📊 Version History

### Version 1.0.0 (2024-01-XX)
- Initial release
- Core mortgage calculation functionality
- Responsive design
- API integration
- Input validation
- Error handling

## 🎓 Learning Resources

If you're new to mortgage calculations, here are some helpful resources:

- [Mortgage Basics](https://www.investopedia.com/mortgage-4689700)
- [Understanding Interest Rates](https://www.consumerfinance.gov/owning-a-home/process/compare/)
- [Down Payment Guide](https://www.bankrate.com/mortgages/how-much-down-payment-for-house/)

---

**Made with ❤️ for homebuyers everywhere**

*Last updated: January 2024*
