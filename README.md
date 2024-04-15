# UBS Group AG Stock Profile

This project displays a comprehensive profile of UBS Group AG's stock, providing essential financial metrics and company information to aid investors and the public in evaluating its market performance.

## Setup Instructions

### Requirements

- Modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari)
- Internet connection

### Local Deployment

1. **Download and Extract**:
   - Download the project ZIP file and extract its contents to your preferred directory.

2. **API Key Configuration**:
   - Obtain an API key from (https://www.alphavantage.co/support/#api-key).
   - Open `dom.js` and replace `YOUR_API_KEY` with your obtained API key.

3. **Launch Project**:
   - Open the project folder in Visual Studio Code.
   - Right click on the 'index.html' file and select 'Show Preview' to view the project in your default web browser.

## Design Overview

### Styling Choices

- Utilized Flexbox for a flexible and adaptive layout across different screen sizes.
- Media queries ensure that the webpage is accessible on device of all sizes. The information button ('#infoButtons) are displayed horizontally on dekstops and stacked vertically on mobile devices to maximize space efficiency and usability.
- Applied a neutral color palette with a highlight of yellow to symbolize optimism and clarity, which aligns with financial growth and stability.
- Chose Arial for its readability and professional appearance in digital formats.

### JavaScript Functionalities

- **Data Fetching**: Dynamically retrieves stock data from the Alpha Vantage API, ensuring updated and accurate information.
- **Interactive Elements**: Implements buttons that display additional data without reloading the page, enhancing user interaction.

## File Structure

- `index.html`: Contains the HTML structure.
- `style.css`: Provides styling for the webpage.
- `dom.js`: Manages data fetching, DOM updates, and interactive behaviors.
- `README.md`: Guides users through setup, features, and project structure.

## Additional Notes

- The Alpha Vantage API has call limits which may restrict frequent data fetching.
- Future iterations could introduce caching to minimize API calls and incorporate graphical displays of stock trends for enhanced user engagement.

For more information or support, please reach out to the project team via the contact details provided on the webpage.
