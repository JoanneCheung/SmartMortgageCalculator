# Contributing to Smart Mortgage Calculator

First off, thank you for considering contributing to Smart Mortgage Calculator! It's people like you that make this tool better for everyone.

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**
* **Include your browser and OS version**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and explain which behavior you expected to see instead**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the JavaScript, HTML, and CSS style guides
* Include thoughtful comments in your code
* End all files with a newline
* Avoid platform-dependent code

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Style Guide

* Use ES6+ features where appropriate
* Use `const` for constants and `let` for variables (avoid `var`)
* Use meaningful variable names
* Add comments for complex logic
* Use async/await for asynchronous operations
* Handle errors properly with try/catch
* Format code consistently (2 or 4 spaces for indentation)

Example:
```javascript
// Good
async function calculateMortgage() {
    try {
        const inputs = getInputValues();
        const data = await fetchMortgageData(inputs);
        updateResults(data);
    } catch (error) {
        handleError(error);
    }
}

// Bad
function calcMort() {
    var x = getInputs();
    // Missing error handling
    fetchData(x);
}
```

### CSS Style Guide

* Use meaningful class names
* Follow BEM methodology when appropriate
* Group related properties together
* Use CSS custom properties for repeated values
* Make responsive design mobile-first
* Comment sections of CSS

Example:
```css
/* Good */
.result-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Bad */
.rc {
    background: white; padding: 20px; border-radius: 12px;
}
```

### HTML Style Guide

* Use semantic HTML5 elements
* Use proper indentation (2 or 4 spaces)
* Include alt text for images
* Use ARIA labels where appropriate
* Keep markup clean and minimal

## Development Process

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Test thoroughly in multiple browsers
5. Commit your changes with clear commit messages
6. Push to your fork
7. Submit a pull request

## Testing

Before submitting a pull request, please ensure:

* [ ] The calculator works in Chrome, Firefox, Safari, and Edge
* [ ] All input validation works correctly
* [ ] Error handling displays appropriate messages
* [ ] The design is responsive on mobile, tablet, and desktop
* [ ] No console errors are present
* [ ] Currency formatting displays correctly
* [ ] API integration works as expected

## Questions?

Feel free to create an issue with your question, or contact the maintainers directly.

Thank you for contributing! 🎉
