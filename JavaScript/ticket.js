function updateTicker() {
    const now = new Date();
    const date = now.toLocaleDateString();

    // Use Intl.DateTimeFormat to get time in EST (Eastern Standard Time)
    const time = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/New_York'  // EST Time Zone
    }).format(now);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Use OpenCage API to get country name based on latitude and longitude
            const apiKey = 'YOUR_OPENCAGE_API_KEY';
            const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const country = data.results && data.results[0] ? data.results[0].components.country : 'Unknown';
                    const tickerContent = `Date: ${date} | Time (EST): ${time} | Location: ${country} | `;
                    document.getElementById('tickerContent').innerText = tickerContent.repeat(1);
                })
                .catch(error => {
                    console.error("Error getting country information: ", error);
                    document.getElementById('tickerContent').innerText = `Date: ${date} | Time (EST): ${time} | Location: Unable to fetch country | `.repeat(1);
                });
        }, (error) => {
            console.error("Error getting location: ", error);
            document.getElementById('tickerContent').innerText = `Date: ${date} | Time (EST): ${time} | Location: Not available | `.repeat(1);
        });
    } else {
        document.getElementById('tickerContent').innerText = `Date: ${date} | Time (EST): ${time} | Location: Geolocation not supported | `.repeat(1);
    }
}

updateTicker();
