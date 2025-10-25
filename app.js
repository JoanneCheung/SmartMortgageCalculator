/**
 * Smart Mortgage Calculator
 * Main application logic for mortgage calculations using API Ninjas API
 */

// ============================================
// CONFIGURATION - Add your API key here
// ============================================
const API_KEY = 'kEbGPveagUm3IbSJp0Luuw==PIUibuPasWas1nIW'; // Replace with your actual API key from api-ninjas.com

// API Configuration
const API_BASE_URL = 'https://api.api-ninjas.com/v1/mortgagecalculator';

/**
 * Format number as currency (USD)
 * @param {number} amount - The amount to format
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

/**
 * Display error message to user
 * @param {string} message - Error message to display
 */
function showError(message) {
    const errorElement = document.getElementById('errorMessage');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    
    // Auto-hide error after 5 seconds
    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 5000);
}

/**
 * Toggle loading state
 * @param {boolean} isLoading - Whether to show loading state
 */
function setLoadingState(isLoading) {
    const loadingElement = document.getElementById('loading');
    const calculateButton = document.querySelector('.calculate-btn');
    
    loadingElement.style.display = isLoading ? 'block' : 'none';
    calculateButton.disabled = isLoading;
}

/**
 * Validate input values
 * @param {Object} inputs - Object containing all input values
 * @returns {Object} Validation result with isValid and message
 */
function validateInputs(inputs) {
    const { homeValue, downPayment, interestRate, loanTerm } = inputs;

    if (!homeValue || homeValue <= 0) {
        return { isValid: false, message: 'Please enter a valid home value' };
    }

    if (interestRate <= 0) {
        return { isValid: false, message: 'Please enter a valid interest rate' };
    }

    if (interestRate > 100) {
        return { isValid: false, message: 'Interest rate cannot exceed 100%' };
    }

    if (downPayment < 0) {
        return { isValid: false, message: 'Down payment cannot be negative' };
    }

    if (downPayment >= homeValue) {
        return { isValid: false, message: 'Down payment must be less than home value' };
    }

    if (loanTerm <= 0 || loanTerm > 100) {
        return { isValid: false, message: 'Loan term must be between 1 and 100 years' };
    }

    return { isValid: true };
}

/**
 * Get input values from form
 * @returns {Object} Object containing all input values
 */
function getInputValues() {
    return {
        homeValue: parseFloat(document.getElementById('homeValue').value) || 0,
        downPayment: parseFloat(document.getElementById('downPayment').value) || 0,
        interestRate: parseFloat(document.getElementById('interestRate').value) || 0,
        loanTerm: parseInt(document.getElementById('loanTerm').value) || 30,
        propertyTax: parseFloat(document.getElementById('propertyTax').value) || 0,
        homeInsurance: parseFloat(document.getElementById('homeInsurance').value) || 0,
        hoaFees: parseFloat(document.getElementById('hoaFees').value) || 0
    };
}

/**
 * Update the UI with calculation results
 * @param {Object} data - API response data
 * @param {Object} inputs - Original input values
 */
function updateResults(data, inputs) {
    const loanAmount = inputs.homeValue - inputs.downPayment;

    // Update monthly payment breakdown
    document.getElementById('monthlyTotal').textContent = formatCurrency(data.monthly_payment.total);
    document.getElementById('monthlyMortgage').textContent = formatCurrency(data.monthly_payment.mortgage);
    document.getElementById('monthlyPropertyTax').textContent = formatCurrency(data.monthly_payment.property_tax);
    document.getElementById('monthlyInsurance').textContent = formatCurrency(data.monthly_payment.annual_home_ins);
    document.getElementById('monthlyHOA').textContent = formatCurrency(data.monthly_payment.hoa);

    // Update annual payment
    document.getElementById('annualTotal').textContent = formatCurrency(data.annual_payment.total);

    // Update total interest
    document.getElementById('totalInterest').textContent = formatCurrency(data.total_interest_paid);

    // Update loan summary
    document.getElementById('loanAmount').textContent = formatCurrency(loanAmount);
    document.getElementById('downPaymentDisplay').textContent = formatCurrency(inputs.downPayment);
    document.getElementById('loanDuration').textContent = `${inputs.loanTerm} years`;
}

/**
 * Make API request to calculate mortgage
 * @param {Object} inputs - Input values for calculation
 * @returns {Promise<Object>} API response data
 */
async function fetchMortgageData(inputs) {
    const loanAmount = inputs.homeValue - inputs.downPayment;
    
    const params = new URLSearchParams({
        loan_amount: loanAmount,
        interest_rate: inputs.interestRate,
        duration_years: inputs.loanTerm,
        monthly_hoa: inputs.hoaFees,
        annual_property_tax: inputs.propertyTax,
        annual_home_insurance: inputs.homeInsurance
    });

    const url = `${API_BASE_URL}?${params.toString()}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY
        }
    });

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error('Invalid API key. Please check your API key and try again.');
        } else if (response.status === 400) {
            throw new Error('Invalid parameters. Please check your inputs.');
        } else {
            throw new Error(`API request failed with status ${response.status}`);
        }
    }

    return await response.json();
}

/**
 * Main function to calculate mortgage
 * Called when user clicks Calculate button
 */
async function calculateMortgage() {
    try {
        // Get input values
        const inputs = getInputValues();

        // Validate inputs
        const validation = validateInputs(inputs);
        if (!validation.isValid) {
            showError(validation.message);
            return;
        }

        // Show loading state
        setLoadingState(true);

        // Fetch data from API
        const data = await fetchMortgageData(inputs);

        // Update UI with results
        updateResults(data, inputs);

    } catch (error) {
        showError(error.message || 'Failed to calculate mortgage. Please try again.');
        console.error('Error:', error);
    } finally {
        setLoadingState(false);
    }
}

/**
 * Initialize event listeners
 */
function initializeEventListeners() {
    // Allow Enter key to trigger calculation
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateMortgage();
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
    initializeEventListeners();
}

// Make calculateMortgage globally available for onclick handler
window.calculateMortgage = calculateMortgage;
