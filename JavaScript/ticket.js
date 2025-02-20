function updateTicker(location) {
    setInterval(() => {
        let now = new Date().toLocaleString();
        document.getElementById('ticker').innerText = `Date & Time: ${now} | Location: ${location}`;
    }, 1000);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
            .then(response => response.json())
            .then(data => {
                let country = data.address.country || "Unknown location";
                updateTicker(country);
            })
            .catch(() => updateTicker("Location not available"));
    }, () => {
        updateTicker("Location not available");
    });
} else {
    updateTicker("Geolocation not supported");
}