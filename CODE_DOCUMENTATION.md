# 📚 Code Documentation

Complete technical documentation for the Smart Mortgage Calculator codebase.

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [HTML Structure](#html-structure)
4. [CSS Architecture](#css-architecture)
5. [JavaScript Functions](#javascript-functions)
6. [API Integration](#api-integration)
7. [Data Flow](#data-flow)
8. [Error Handling](#error-handling)

---

## Architecture Overview

The application follows a simple client-side architecture:

```
User Input → Validation → API Call → Response Processing → UI Update
```

**Technology Stack:**
- Pure HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, Gradients)
- Vanilla JavaScript (ES6+)
- Fetch API for HTTP requests
- LocalStorage for API key persistence

---

## File Structure

```
smart-mortgage-calculator/
│
├── index.html              # Main HTML structure
├── README.md              # Project documentation
├── QUICKSTART.md          # Quick start guide
├── LICENSE                # MIT license
├── .gitignore            # Git ignore rules
├── package.json          # Project metadata
├── CONTRIBUTING.md       # Contribution guidelines
│
├── css/
│   └── styles.css        # Complete stylesheet
│
└── js/
    └── app.js           # Application logic
```

---

## HTML Structure

### Document Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Meta tags, title, stylesheet link -->
  </head>
  <body>
    <div class="container">
      <div class="header">...</div>
      <div class="content">
        <div class="input-section">...</div>
        <div class="results-section">...</div>
      </div>
    </div>
    <script src="js/app.js"></script>
  </body>
</html>
```

### Key Sections

**1. Header Section**
- Application title
- Subtitle/description

**2. Input Section**
- API key input (with instructions)
- Mortgage input fields (8 fields)
- Calculate button
- Error message container

**3. Results Section**
- Loading indicator
- 4 result cards:
  - Monthly payment (with breakdown)
  - Annual payment
  - Total interest
  - Loan summary

### Input Fields

| ID | Type | Purpose |
|----|------|---------|
| `apiKey` | password | Store API key |
| `homeValue` | number | Total home price |
| `downPayment` | number | Initial payment |
| `interestRate` | number | Annual interest rate |
| `loanTerm` | number | Loan duration in years |
| `propertyTax` | number | Annual property tax |
| `homeInsurance` | number | Annual insurance |
| `hoaFees` | number | Monthly HOA fees |

---

## CSS Architecture

### Design System

**Colors:**
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--background-light: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
--white: #ffffff;
--text-dark: #333333;
--text-medium: #666666;
--border-color: #e0e0e0;
--error-bg: #fee;
--error-text: #c33;
--warning-bg: #fff3cd;
--warning-border: #ffc107;
```

**Spacing Scale:**
```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 20px;
--space-lg: 30px;
--space-xl: 40px;
```

**Border Radius:**
```css
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 12px;
--radius-xl: 15px;
--radius-xxl: 20px;
```

### Layout Structure

**Grid System:**
```css
.content {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* 50-50 split */
    gap: 30px;
}

@media (max-width: 768px) {
    .content {
        grid-template-columns: 1fr;  /* Stack on mobile */
    }
}
```

### Component Styles

**Input Components:**
- Standard inputs with 2px borders
- Focus state with primary color
- Prefix support for currency symbols
- Consistent padding and spacing

**Buttons:**
- Gradient background
- Hover effects (translateY + shadow)
- Disabled state
- Active state feedback

**Result Cards:**
- White background
- Box shadow for depth
- Rounded corners
- Responsive typography

---

## JavaScript Functions

### Core Functions

#### `formatCurrency(amount)`
Formats numbers as USD currency.

```javascript
formatCurrency(1234.56)
// Returns: "$1,235"
```

**Parameters:**
- `amount` (number): Amount to format

**Returns:** String (formatted currency)

**Implementation:**
```javascript
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
```

---

#### `showError(message)`
Displays error message to user.

```javascript
showError("Invalid API key")
```

**Parameters:**
- `message` (string): Error message to display

**Side Effects:**
- Shows error element
- Auto-hides after 5 seconds

---

#### `setLoadingState(isLoading)`
Controls loading UI state.

```javascript
setLoadingState(true)  // Show loading
setLoadingState(false) // Hide loading
```

**Parameters:**
- `isLoading` (boolean): Whether to show loading state

**Side Effects:**
- Toggles loading indicator
- Disables/enables calculate button

---

#### `validateInputs(inputs)`
Validates all user inputs.

```javascript
const result = validateInputs({
    homeValue: 350000,
    downPayment: 70000,
    interestRate: 6.5,
    loanTerm: 30
});
// Returns: { isValid: true } or { isValid: false, message: "..." }
```

**Parameters:**
- `inputs` (Object): Object containing all input values

**Returns:** Object with validation result
```javascript
{
    isValid: boolean,
    message?: string  // Only present if invalid
}
```

**Validation Rules:**
- Home value must be > 0
- Interest rate must be > 0 and <= 100
- Down payment must be >= 0 and < home value
- Loan term must be 1-100 years

---

#### `getInputValues()`
Retrieves all input values from DOM.

```javascript
const inputs = getInputValues();
// Returns object with all input values
```

**Returns:** Object containing all inputs
```javascript
{
    apiKey: string,
    homeValue: number,
    downPayment: number,
    interestRate: number,
    loanTerm: number,
    propertyTax: number,
    homeInsurance: number,
    hoaFees: number
}
```

---

#### `updateResults(data, inputs)`
Updates UI with calculation results.

```javascript
updateResults(apiResponse, originalInputs)
```

**Parameters:**
- `data` (Object): API response data
- `inputs` (Object): Original input values

**Side Effects:**
- Updates all result display elements
- Formats and displays currency values

---

#### `fetchMortgageData(inputs)`
Makes API call to get mortgage data.

```javascript
const data = await fetchMortgageData(inputs);
```

**Parameters:**
- `inputs` (Object): Input values for API

**Returns:** Promise<Object> (API response)

**Throws:**
- Error with descriptive message if API call fails

**API Call Structure:**
```javascript
GET https://api.api-ninjas.com/v1/mortgagecalculator
Headers: { 'X-Api-Key': apiKey }
Query Params: {
    loan_amount,
    interest_rate,
    duration_years,
    monthly_hoa,
    annual_property_tax,
    annual_home_insurance
}
```

---

#### `calculateMortgage()`
Main function orchestrating the calculation flow.

```javascript
await calculateMortgage();
```

**Process:**
1. Get input values
2. Validate API key
3. Validate inputs
4. Show loading state
5. Fetch data from API
6. Update results UI
7. Handle errors
8. Hide loading state

---

#### `initializeEventListeners()`
Sets up all event listeners on page load.

**Event Listeners:**
- Enter key on all inputs → trigger calculation
- API key change → save to localStorage
- Page load → restore saved API key

---

## API Integration

### API Ninjas Mortgage Calculator API

**Base URL:**
```
https://api.api-ninjas.com/v1/mortgagecalculator
```

### Request Format

**Method:** GET

**Headers:**
```
X-Api-Key: YOUR_API_KEY
```

**Query Parameters:**
```
?loan_amount=280000
&interest_rate=6.5
&duration_years=30
&monthly_hoa=0
&annual_property_tax=3000
&annual_home_insurance=1200
```

### Response Format

**Success (200):**
```json
{
  "monthly_payment": {
    "total": 2119,
    "mortgage": 1769,
    "property_tax": 250,
    "hoa": 0,
    "annual_home_ins": 100
  },
  "annual_payment": {
    "total": 25428,
    "mortgage": 21228,
    "property_tax": 3000,
    "hoa": 0,
    "home_insurance": 1200
  },
  "total_interest_paid": 357440
}
```

**Error Responses:**
- 401: Invalid API key
- 400: Invalid parameters
- 429: Rate limit exceeded
- 500: Server error

---

## Data Flow

### Complete Flow Diagram

```
User enters data
    ↓
User clicks Calculate (or presses Enter)
    ↓
getInputValues() - Retrieve all inputs
    ↓
validateInputs() - Check all inputs valid
    ↓
setLoadingState(true) - Show loading UI
    ↓
fetchMortgageData() - Call API
    ↓
API processes request
    ↓
API returns response
    ↓
updateResults() - Update UI with data
    ↓
setLoadingState(false) - Hide loading UI
    ↓
User sees results
```

### State Management

**LocalStorage:**
```javascript
// Save API key
localStorage.setItem('mortgage_api_key', apiKey);

// Load API key
const savedKey = localStorage.getItem('mortgage_api_key');
```

**UI State:**
- Loading: Boolean (showing/hiding loading indicator)
- Error: String (error message) or null
- Results: Object (calculation results) or null

---

## Error Handling

### Error Types

**1. Validation Errors**
```javascript
// Missing API key
"Please enter your API key from api-ninjas.com"

// Invalid home value
"Please enter a valid home value"

// Invalid interest rate
"Interest rate cannot exceed 100%"

// Down payment too large
"Down payment must be less than home value"

// Invalid loan term
"Loan term must be between 1 and 100 years"
```

**2. API Errors**
```javascript
// 401 Unauthorized
"Invalid API key. Please check your API key and try again."

// 400 Bad Request
"Invalid parameters. Please check your inputs."

// Network error
"Failed to calculate mortgage. Please try again."
```

### Error Display

Errors are shown in a red error box below the calculate button:

```javascript
showError(message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}
```

---

## Best Practices

### Security
- API key stored in localStorage (client-side only)
- No sensitive data sent to server
- HTTPS used for all API calls

### Performance
- Minimal DOM manipulation
- Efficient event listeners
- No unnecessary re-renders

### Accessibility
- Semantic HTML elements
- Proper label associations
- Keyboard navigation support
- Clear error messages

### Maintainability
- Modular function design
- Clear naming conventions
- Comprehensive comments
- Consistent code style

---

## Future Enhancements

Potential improvements for future versions:

1. **Amortization Schedule**
   - Monthly payment breakdown over time
   - Principal vs interest visualization

2. **Chart Visualization**
   - Pie chart for payment breakdown
   - Line graph for amortization

3. **Comparison Tool**
   - Compare multiple loan scenarios
   - Side-by-side results

4. **Export Functionality**
   - PDF export
   - Email results
   - Save calculations

5. **Advanced Features**
   - PMI calculation
   - Extra payment scenarios
   - Refinance calculator

---

**Last Updated:** January 2024
