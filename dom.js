document.addEventListener('DOMContentLoaded', function() {
    fetchStockData();
    setInterval(fetchStockData, 600000); // Refresh data every 10 minutes

    document.getElementById('btnDescription').addEventListener('click', function() { displayInfo('Description'); });
    document.getElementById('btnMoreData').addEventListener('click', displayMoreData);
    document.getElementById('btnContactUs').addEventListener('click', displayContactInfo);
});

function fetchStockData() {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=UBS&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!data || Object.keys(data).length === 0) {
                throw new Error('No data available');
            }
            if (data['Note']) {
                throw new Error('API limit reached. Try again later.');
            }
            updateDOM(data);
            document.getElementById('errorContainer').style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('errorContainer').textContent = error.message;
            document.getElementById('errorContainer').style.display = 'block';
        });
}

function updateDOM(data) {
    document.getElementById('companyName').textContent = data['Name'] || 'No information available';
    document.getElementById('tickerSymbol').textContent = data['Symbol'] || 'No information available';
    document.getElementById('marketCap').textContent = `$${parseInt(data['MarketCapitalization'], 10).toLocaleString()} USD` || 'No information available';
    document.getElementById('currency').textContent = data['Currency'] || 'No information available';
    document.getElementById('exchange').textContent = data['Exchange'] || 'No information available';
    document.getElementById('weekHigh52').textContent = data['52WeekHigh'] || 'No information available';
    document.getElementById('weekLow52').textContent = data['52WeekLow'] || 'No information available';
    window.stockData = data; // Store the fetched data for later use by buttons
}

function displayInfo(infoType) {
    const infoDisplay = document.getElementById('displayInfo');
    const data = window.stockData;
    infoDisplay.textContent = data[infoType] || 'No information available';
    updateActiveButton('Description');
}

function displayMoreData() {
    const data = window.stockData;
    const infoDisplay = document.getElementById('displayInfo');
    const moreDataHTML = `
        <table class="data-table">
            <tr><th>Asset Type</th><td>${data['AssetType'] || 'N/A'}</td></tr>
            <tr><th>CIK</th><td>${data['CIK'] || 'N/A'}</td></tr>
            <tr><th>Sector</th><td>${data['Sector'] || 'N/A'}</td></tr>
            <tr><th>Industry</th><td>${data['Industry'] || 'N/A'}</td></tr>
            <tr><th>Fiscal Year End</th><td>${data['FiscalYearEnd'] || 'N/A'}</td></tr>
            <tr><th>Latest Quarter</th><td>${data['LatestQuarter'] || 'N/A'}</td></tr>
            <tr><th>PE Ratio</th><td>${data['PERatio'] || 'N/A'}</td></tr>
            <tr><th>PEG Ratio</th><td>${data['PEGRatio'] || 'N/A'}</td></tr>
            <tr><th>Book Value</th><td>${data['BookValue'] || 'N/A'}</td></tr>
            <tr><th>EPS</th><td>${data['EPS'] || 'N/A'}</td></tr>
        </table>
    `;
    infoDisplay.innerHTML = moreDataHTML;
    updateActiveButton('MoreData');
}

function displayContactInfo() {
    const infoDisplay = document.getElementById('displayInfo');
    infoDisplay.innerHTML = 'For any enquiry, contact us at: <br>Email: weiwah8484@gmail.com <br> Phone: xxxx-xxxxxx';
    updateActiveButton('ContactUs');
}

function updateActiveButton(activeButton) {
    document.querySelectorAll('#infoButtons button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById('btn' + activeButton).classList.add('active');
}
