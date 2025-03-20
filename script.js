var map = L.map('map').setView([37.7749, -122.4194], 12); // Center on San Francisco
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define delivery areas (polygons)
var deliveryAreas = [
    {
        name: "Downtown",
        coords: [
            [37.7793, -122.4192],
            [37.7780, -122.4140],
            [37.7745, -122.4140],
            [37.7730, -122.4192]
        ],
        color: "green"
    },
    {
        name: "Mission District",
        coords: [
            [37.7600, -122.4231],
            [37.7600, -122.4160],
            [37.7550, -122.4160],
            [37.7550, -122.4231]
        ],
        color: "blue"
    }
];

// Store created layers
var areaLayers = [];

// Add areas to map
deliveryAreas.forEach(area => {
    var polygon = L.polygon(area.coords, { color: area.color, fillColor: area.color, fillOpacity: 0.5 })
        .addTo(map)
        .bindPopup(area.name)
        .on('click', function () {
            this.setStyle({ fillColor: 'red' }); // Change color on selection
            sessionStorage.setItem('selectedArea', area.name);
            window.location.href = 'checkout.html';
        });
    areaLayers.push(polygon);
});